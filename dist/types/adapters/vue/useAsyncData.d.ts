import { type Ref, type ShallowRef } from 'vue';
import { type ResultTuple } from '../../core/index.js';
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
export declare const useAsyncData: <T>(fetcher: () => T | PromiseLike<T>, options?: UseAsyncDataOptions) => UseAsyncDataReturn<T>;
