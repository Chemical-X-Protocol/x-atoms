/**
 * Chemical X Protocol: Latest-Wins Async Runner
 * The framework-free engine behind useAsyncData in every adapter.
 */

import { toResult, isOk, type ResultSource, type ResultTuple } from './result.ts';

export interface LatestGate {
  /** Starts a new run. The returned check is true only while this run is the latest. */
  claim: () => () => boolean;
  /** Invalidates every outstanding run. */
  cancel: () => void;
}

export const createLatestGate = (): LatestGate => {
  let generation = 0;
  return {
    claim: () => {
      const own = ++generation;
      return () => own === generation;
    },
    cancel: () => {
      generation++;
    },
  };
};

export interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export interface AsyncRunner<T> {
  run: () => Promise<ResultTuple<T>>;
  cancel: () => void;
  getState: () => AsyncState<T>;
}

/**
 * Runs `fetcher` and reports full state snapshots through `onChange`.
 * Only the latest run may settle state; cancelled or superseded runs stay silent.
 * An error keeps the previous data so views can show stale data next to the error.
 */
export const createAsyncRunner = <T>(
  fetcher: () => T | PromiseLike<T>,
  onChange: (state: AsyncState<T>) => void,
  initial: Partial<AsyncState<T>> = {}
): AsyncRunner<T> => {
  const gate = createLatestGate();
  let state: AsyncState<T> = { data: null, error: null, isLoading: false, ...initial };

  const commit = (patch: Partial<AsyncState<T>>): void => {
    state = { ...state, ...patch };
    onChange(state);
  };

  const run = async (): Promise<ResultTuple<T>> => {
    const isLatest = gate.claim();
    commit({ isLoading: true, error: null });
    const result = await toResult<T>(fetcher as ResultSource<T>);
    if (!isLatest()) return result;
    const settled: Partial<AsyncState<T>> = isOk(result)
      ? { data: result[0], error: null, isLoading: false }
      : { error: result[1], isLoading: false };
    commit(settled);
    return result;
  };

  return { run, cancel: gate.cancel, getState: () => state };
};
