import { ref, shallowRef, type Ref, type ShallowRef } from 'vue';
import { createAsyncRunner, type ResultTuple } from '../../core';
import { useDisposer } from './useDisposer';

export interface UseAsyncDataOptions {
  /** Run the fetcher during setup. Defaults to true. */
  immediate?: boolean;
}

export interface UseAsyncDataReturn<T> {
  data: ShallowRef<T | null>;
  error: ShallowRef<Error | null>;
  isLoading: Ref<boolean>;
  execute: () => Promise<ResultTuple<T>>;
}

/**
 * Loads data through `toResult`, so it never throws. Only the latest call may
 * write state, and pending calls are dropped when the scope is disposed.
 */
export const useAsyncData = <T>(
  fetcher: () => T | PromiseLike<T>,
  options: UseAsyncDataOptions = {}
): UseAsyncDataReturn<T> => {
  const { immediate = true } = options;
  const data = shallowRef<T | null>(null);
  const error = shallowRef<Error | null>(null);
  const isLoading = ref(immediate);

  const runner = createAsyncRunner<T>(fetcher, (state) => {
    data.value = state.data;
    error.value = state.error;
    isLoading.value = state.isLoading;
  }, { isLoading: immediate });

  useDisposer(runner.cancel);
  if (immediate) void runner.run();
  return { data, error, isLoading, execute: runner.run };
};
