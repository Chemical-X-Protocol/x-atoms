/**
 * Chemical X Protocol: Result Tuple Error Handling Pattern
 * Functional Go/Rust-style [data, error] discriminated tuples.
 */

export type ResultTuple<T, E = Error> = [T, null] | [null, E];
export type Result<T, E = Error> = ResultTuple<T, E>;
export type ResultSource<T> = PromiseLike<T> | (() => T | PromiseLike<T>);

export const toError = (err: unknown): Error => {
  const isAlreadyError = err instanceof Error;
  return isAlreadyError ? err : new Error(String(err));
};

/**
 * Settles a promise, or runs a sync/async thunk, into a [data, error] tuple.
 * A thunk that throws before returning a promise is captured too.
 */
export const toResult = async <T, E = Error>(source: ResultSource<T>): Promise<ResultTuple<T, E>> => {
  try {
    const isThunk = typeof source === 'function';
    const data = await (isThunk ? (source as () => T | PromiseLike<T>)() : source);
    return [data as T, null];
  } catch (err) {
    return [null, toError(err) as E];
  }
};

export const toResultSync = <T, E = Error>(fn: () => T): ResultTuple<T, E> => {
  try {
    return [fn(), null];
  } catch (err) {
    return [null, toError(err) as E];
  }
};

export const isOk = <T, E>(result: ResultTuple<T, E>): result is [T, null] => {
  return result[1] === null;
};

export const isErr = <T, E>(result: ResultTuple<T, E>): result is [null, E] => {
  return result[1] !== null;
};

/** Maps the ok value; errors pass through, and a throwing mapper becomes an error tuple. */
export const mapResult = <T, U, E = Error>(
  result: ResultTuple<T, E>,
  mapper: (data: T) => U
): ResultTuple<U, E | Error> => {
  if (isErr(result)) return [null, result[1]];
  return toResultSync<U, Error>(() => mapper(result[0]));
};

export const unwrapOr = <T, E>(result: ResultTuple<T, E>, fallbackValue: T): T => {
  return isOk(result) ? result[0] : fallbackValue;
};
