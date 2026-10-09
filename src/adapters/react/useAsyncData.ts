import { useEffect, useState } from 'react';
import { createAsyncRunner, type AsyncState, type ResultTuple } from '../../core';
import { useLatest } from './useLatest';

export interface UseAsyncDataReturn<T> extends Readonly<AsyncState<T>> {
  readonly execute: () => Promise<ResultTuple<T>>;
}

/**
 * Loads data through `toResult`, so it never throws. The latest `fetcher` is
 * always used, an inline fetcher does not refetch on every render, and results
 * that arrive after unmount or after a newer call are dropped.
 */
export const useAsyncData = <T>(
  fetcher: () => T | PromiseLike<T>,
  immediate: boolean = true
): UseAsyncDataReturn<T> => {
  const latestFetcher = useLatest(fetcher);
  const [state, setState] = useState<AsyncState<T>>({ data: null, error: null, isLoading: immediate });
  const [runner] = useState(() => createAsyncRunner<T>(() => latestFetcher.current(), setState, { isLoading: immediate }));

  useEffect(() => {
    if (immediate) void runner.run();
    return runner.cancel;
  }, [runner, immediate]);

  return { ...state, execute: runner.run };
};
