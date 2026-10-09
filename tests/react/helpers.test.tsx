import { describe, it, expect, vi, afterEach } from 'vitest';
import { act, StrictMode, useEffect } from 'react';
import { render } from './render';
import {
  useAsyncData,
  useDisposer,
  usePredicateFilter,
  useSelfCleaningInterval,
  useSelfCleaningTimeout,
  useDebouncedCallback,
} from '../../src/adapters/react';

afterEach(() => {
  vi.useRealTimers();
});

describe('react adapters', () => {
  it('useSelfCleaningInterval ticks, pauses on null, and clears on unmount', () => {
    vi.useFakeTimers();
    const tick = vi.fn();
    const Host = ({ delay }: { delay: number | null }) => {
      useSelfCleaningInterval(tick, delay);
      return null;
    };
    const view = render(Host, { delay: 10 });
    act(() => vi.advanceTimersByTime(25));
    expect(tick).toHaveBeenCalledTimes(2);
    view.rerender({ delay: null });
    act(() => vi.advanceTimersByTime(50));
    expect(tick).toHaveBeenCalledTimes(2);
    view.rerender({ delay: 10 });
    view.unmount();
    act(() => vi.advanceTimersByTime(50));
    expect(tick).toHaveBeenCalledTimes(2);
  });

  it('useSelfCleaningTimeout uses the latest callback', () => {
    vi.useFakeTimers();
    const first = vi.fn();
    const second = vi.fn();
    const Host = ({ callback }: { callback: () => void }) => {
      useSelfCleaningTimeout(callback, 10);
      return null;
    };
    const view = render(Host, { callback: first });
    view.rerender({ callback: second });
    act(() => vi.advanceTimersByTime(10));
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    view.unmount();
  });

  it('useAsyncData loads once with an inline fetcher and ignores results after unmount', async () => {
    let calls = 0;
    const seen: Array<string | null> = [];
    const Host = () => {
      const { data, isLoading } = useAsyncData(async () => {
        calls++;
        return 'value';
      });
      seen.push(isLoading ? 'loading' : data);
      return null;
    };
    const view = render(Host);
    await act(async () => {
      await Promise.resolve();
    });
    expect(calls).toBe(1);
    expect(seen.at(-1)).toBe('value');
    view.unmount();
  });

  it('useAsyncData reports errors without throwing', async () => {
    let captured: { error: Error | null } = { error: null };
    const Host = () => {
      const state = useAsyncData(() => Promise.reject(new Error('nope')));
      captured = state;
      return null;
    };
    const view = render(Host);
    await act(async () => {
      await Promise.resolve();
    });
    expect(captured.error?.message).toBe('nope');
    view.unmount();
  });

  it('useDisposer runs teardowns on unmount and survives StrictMode remounts', () => {
    const cleanup = vi.fn();
    const Inner = () => {
      const disposer = useDisposer();
      useEffect(() => {
        disposer.add(cleanup);
      }, [disposer]);
      return null;
    };
    const Host = () => (
      <StrictMode>
        <Inner />
      </StrictMode>
    );
    const view = render(Host);
    const callsAfterStrictRemount = cleanup.mock.calls.length;
    view.unmount();
    expect(cleanup.mock.calls.length).toBe(callsAfterStrictRemount + 1);
  });

  it('usePredicateFilter filters with every predicate', () => {
    let result: { filtered: readonly number[]; count: number; hasMatches: boolean } | null = null;
    const isOdd = (n: number) => n % 2 === 1;
    const isLarge = (n: number) => n > 2;
    const Host = ({ items }: { items: number[] }) => {
      result = usePredicateFilter(items, isOdd, isLarge);
      return null;
    };
    const view = render(Host, { items: [1, 2, 3, 4, 5] });
    expect(result!.filtered).toEqual([3, 5]);
    expect(result!.count).toBe(2);
    view.rerender({ items: [2] });
    expect(result!.hasMatches).toBe(false);
    view.unmount();
  });

  it('useDebouncedCallback fires once with the last arguments and cancels on unmount', () => {
    vi.useFakeTimers();
    const onSearch = vi.fn();
    let debounced: ((q: string) => void) | null = null;
    const Host = () => {
      debounced = useDebouncedCallback(onSearch, 20);
      return null;
    };
    const view = render(Host);
    debounced!('a');
    debounced!('ab');
    act(() => vi.advanceTimersByTime(20));
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('ab');
    debounced!('abc');
    view.unmount();
    act(() => vi.advanceTimersByTime(50));
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
