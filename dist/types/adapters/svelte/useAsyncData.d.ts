import { type Readable } from 'svelte/store';
import { type AsyncState, type ResultTuple } from '../../core/index.js';
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
export declare const useAsyncData: <T>(fetcher: () => T | PromiseLike<T>, options?: UseAsyncDataOptions) => AsyncDataStore<T>;
