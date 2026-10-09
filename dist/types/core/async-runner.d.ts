/**
 * Chemical X Protocol: Latest-Wins Async Runner
 * The framework-free engine behind useAsyncData in every adapter.
 */
import { type ResultTuple } from './result.js';
export interface LatestGate {
    /** Starts a new run. The returned check is true only while this run is the latest. */
    claim: () => () => boolean;
    /** Invalidates every outstanding run. */
    cancel: () => void;
}
export declare const createLatestGate: () => LatestGate;
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
export declare const createAsyncRunner: <T>(fetcher: () => T | PromiseLike<T>, onChange: (state: AsyncState<T>) => void, initial?: Partial<AsyncState<T>>) => AsyncRunner<T>;
