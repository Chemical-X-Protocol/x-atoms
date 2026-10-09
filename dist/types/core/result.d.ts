/**
 * Chemical X Protocol: Result Tuple Error Handling Pattern
 * Functional Go/Rust-style [data, error] discriminated tuples.
 */
export type ResultTuple<T, E = Error> = [T, null] | [null, E];
export type Result<T, E = Error> = ResultTuple<T, E>;
export type ResultSource<T> = PromiseLike<T> | (() => T | PromiseLike<T>);
export declare const toError: (err: unknown) => Error;
/**
 * Settles a promise, or runs a sync/async thunk, into a [data, error] tuple.
 * A thunk that throws before returning a promise is captured too.
 */
export declare const toResult: <T, E = Error>(source: ResultSource<T>) => Promise<ResultTuple<T, E>>;
export declare const toResultSync: <T, E = Error>(fn: () => T) => ResultTuple<T, E>;
export declare const isOk: <T, E>(result: ResultTuple<T, E>) => result is [T, null];
export declare const isErr: <T, E>(result: ResultTuple<T, E>) => result is [null, E];
/** Maps the ok value; errors pass through, and a throwing mapper becomes an error tuple. */
export declare const mapResult: <T, U, E = Error>(result: ResultTuple<T, E>, mapper: (data: T) => U) => ResultTuple<U, E | Error>;
export declare const unwrapOr: <T, E>(result: ResultTuple<T, E>, fallbackValue: T) => T;
