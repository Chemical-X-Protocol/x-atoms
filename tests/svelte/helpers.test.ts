import { describe, it, expect, vi, afterEach } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { get } from 'svelte/store';
import HelperHost from './HelperHost.svelte';
import {
  bindToComponent,
  useAsyncData,
  useDisposer,
  usePredicateFilter,
  useSelfCleaningTimeout,
} from '../../src/adapters/svelte';

afterEach(() => {
  vi.useRealTimers();
});

describe('svelte adapters', () => {
  it('bind teardown to the component: disposer, interval and async data', async () => {
    vi.useFakeTimers();
    const onCleanup = vi.fn();
    const onTick = vi.fn();
    let resolveFetch: (value: string) => void = () => {};
    const fetcher = () => new Promise<string>((resolve) => { resolveFetch = resolve; });
    let api: any = null;
    const target = document.createElement('div');
    const instance = mount(HelperHost, {
      target,
      props: { onCleanup, onTick, fetcher, expose: (exposed: unknown) => { api = exposed; } },
    });
    flushSync();
    expect(target.textContent).toContain('loading');
    vi.advanceTimersByTime(25);
    expect(onTick).toHaveBeenCalledTimes(2);

    resolveFetch('ready');
    await vi.runOnlyPendingTimersAsync();
    flushSync();
    expect(get(api.data).data).toBe('ready');
    expect(target.textContent).toContain('ready');

    const ticksBeforeUnmount = onTick.mock.calls.length;
    unmount(instance);
    expect(onCleanup).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(50);
    expect(onTick).toHaveBeenCalledTimes(ticksBeforeUnmount);
  });

  it('work outside a component: bindToComponent reports false and callers dispose manually', async () => {
    expect(bindToComponent(() => {})).toBe(false);
    const cleanup = vi.fn();
    const disposer = useDisposer(cleanup);
    disposer();
    expect(cleanup).toHaveBeenCalledTimes(1);

    vi.useFakeTimers();
    const fire = vi.fn();
    const timer = useSelfCleaningTimeout(fire, 5, { immediate: true });
    expect(timer.isActive()).toBe(true);
    timer.stop();
    vi.advanceTimersByTime(10);
    expect(fire).not.toHaveBeenCalled();
    vi.useRealTimers();

    const store = useAsyncData(() => Promise.reject(new Error('down')));
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(get(store).error?.message).toBe('down');
  });

  it('usePredicateFilter derives from arrays and stores', async () => {
    const { writable } = await import('svelte/store');
    const items = writable([1, 2, 3, 4]);
    const evens = usePredicateFilter(items, (n: number) => n % 2 === 0);
    expect(get(evens)).toEqual({ filtered: [2, 4], count: 2, hasMatches: true });
    items.set([1, 3]);
    expect(get(evens).hasMatches).toBe(false);
    expect(get(usePredicateFilter([5, 6], (n: number) => n > 5)).filtered).toEqual([6]);
  });
});
