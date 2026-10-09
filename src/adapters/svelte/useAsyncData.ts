import { writable, type Readable } from 'svelte/store';
import { createAsyncRunner, type AsyncState, type ResultTuple } from '../../core';
import { useDisposer } from './useDisposer';

export interface UseAsyncDataOptions {
  /** Run the fetcher immediately. Defaults to true. */
  immediate?: boolean;
}

export interface AsyncDataStore<T> extends Readable<AsyncState<T>> {
  execute: () => Promise<ResultTuple<T>>;
  cancel: () => void;
}

/**
 * A readable store of `{ data, error, isLoading }` loaded through `toResult`.
 * Only the latest call may write state; pending calls drop when the component is destroyed.
 */
export const useAsyncData = <T>(
  fetcher: () => T | PromiseLike<T>,
  options: UseAsyncDataOptions = {}
): AsyncDataStore<T> => {
  const { immediate = true } = options;
  const initial: AsyncState<T> = { data: null, error: null, isLoading: immediate };
  const state = writable<AsyncState<T>>(initial);
  const runner = createAsyncRunner<T>(fetcher, state.set, initial);

  useDisposer(runner.cancel);
  if (immediate) void runner.run();
  return { subscribe: state.subscribe, execute: runner.run, cancel: runner.cancel };
};
