import { type AsyncState, type ResultTuple } from '../../core/index.js';
export interface UseAsyncDataReturn<T> extends Readonly<AsyncState<T>> {
    readonly execute: () => Promise<ResultTuple<T>>;
}
/**
 * Loads data through `toResult`, so it never throws. The latest `fetcher` is
 * always used, an inline fetcher does not refetch on every render, and results
 * that arrive after unmount or after a newer call are dropped.
 */
export declare const useAsyncData: <T>(fetcher: () => T | PromiseLike<T>, immediate?: boolean) => UseAsyncDataReturn<T>;
