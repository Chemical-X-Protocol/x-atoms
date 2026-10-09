import { describe, it, expect, vi, afterEach } from 'vitest';
import { defineComponent, effectScope, h, nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';
import {
  useAsyncData,
  useDisposer,
  usePredicateFilter,
  useSelfCleaningInterval,
  useSelfCleaningTimeout,
} from '../../src/adapters/vue';

afterEach(() => {
  vi.useRealTimers();
});

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('vue adapters', () => {
  it('useDisposer flushes when the component unmounts', () => {
    const cleanup = vi.fn();
    const Host = defineComponent({
      setup() {
        useDisposer(cleanup);
        return () => h('div');
      },
    });
    const wrapper = mount(Host);
    expect(cleanup).not.toHaveBeenCalled();
    wrapper.unmount();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('useSelfCleaningInterval stops when its effect scope stops', () => {
    vi.useFakeTimers();
    const tick = vi.fn();
    const scope = effectScope();
    scope.run(() => useSelfCleaningInterval(tick, 10, { immediate: true }));
    vi.advanceTimersByTime(35);
    expect(tick).toHaveBeenCalledTimes(3);
    scope.stop();
    vi.advanceTimersByTime(50);
    expect(tick).toHaveBeenCalledTimes(3);
  });

  it('useSelfCleaningTimeout keeps the start/stop/isActive contract and re-arms', () => {
    vi.useFakeTimers();
    const fire = vi.fn();
    const scope = effectScope();
    const timer = scope.run(() => useSelfCleaningTimeout(fire, 10))!;
    expect(timer.isActive()).toBe(false);
    timer.start();
    expect(timer.isActive()).toBe(true);
    vi.advanceTimersByTime(10);
    expect(fire).toHaveBeenCalledTimes(1);
    timer.start();
    scope.stop();
    vi.advanceTimersByTime(20);
    expect(fire).toHaveBeenCalledTimes(1);
  });

  it('useAsyncData exposes data, error and loading, and drops results after unmount', async () => {
    let resolveFetch: (value: string) => void = () => {};
    const fetcher = vi.fn(() => new Promise<string>((resolve) => { resolveFetch = resolve; }));
    const scope = effectScope();
    const state = scope.run(() => useAsyncData(fetcher))!;
    expect(state.isLoading.value).toBe(true);
    resolveFetch('loaded');
    await flushPromises();
    expect(state.data.value).toBe('loaded');
    expect(state.isLoading.value).toBe(false);

    const [, error] = await (async () => {
      fetcher.mockImplementationOnce(() => Promise.reject(new Error('offline')));
      return state.execute();
    })();
    expect(error?.message).toBe('offline');
    expect(state.error.value?.message).toBe('offline');
    expect(state.data.value).toBe('loaded');

    const pending = state.execute();
    scope.stop();
    resolveFetch('too late');
    await pending;
    expect(state.data.value).toBe('loaded');
  });

  it('usePredicateFilter recomputes from refs and from refs read inside predicates', async () => {
    const items = ref([1, 2, 3, 4, 5]);
    const minimum = ref(2);
    const isEven = (n: number) => n % 2 === 0;
    const { filtered, count, hasMatches } = usePredicateFilter(items, isEven, (n) => n > minimum.value);
    expect(filtered.value).toEqual([4]);
    items.value = [...items.value, 6];
    minimum.value = 0;
    await nextTick();
    expect(filtered.value).toEqual([2, 4, 6]);
    expect(count.value).toBe(3);
    items.value = [];
    expect(hasMatches.value).toBe(false);
  });
});
