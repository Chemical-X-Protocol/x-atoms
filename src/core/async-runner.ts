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

export type AsyncStatePatch<T> = Partial<AsyncState<T>>;

export interface AsyncRunner<T> {
  run: () => Promise<ResultTuple<T>>;
  cancel: () => void;
}

/**
 * Runs `fetcher` and reports state patches through `onChange`.
 * Only the latest run may settle state; cancelled or superseded runs stay silent.
 */
export const createAsyncRunner = <T>(
  fetcher: () => T | PromiseLike<T>,
  onChange: (patch: AsyncStatePatch<T>) => void
): AsyncRunner<T> => {
  const gate = createLatestGate();

  const run = async (): Promise<ResultTuple<T>> => {
    const isLatest = gate.claim();
    onChange({ isLoading: true, error: null });
    const result = await toResult<T>(fetcher as ResultSource<T>);
    if (!isLatest()) return result;
    const settled: AsyncStatePatch<T> = isOk(result)
      ? { data: result[0], error: null, isLoading: false }
      : { error: result[1], isLoading: false };
    onChange(settled);
    return result;
  };

  return { run, cancel: gate.cancel };
};
