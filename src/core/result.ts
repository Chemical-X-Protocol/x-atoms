/**
 * Chemical X Protocol: Result Tuple Error Handling Pattern
 * Functional Go/Rust-style [data, error] discriminated tuples.
 */

export type ResultTuple<T, E = Error> = [T, null] | [null, E];

export const toResult = async <T, E = Error>(promise: Promise<T>): Promise<ResultTuple<T, E>> => {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    const normalizedError = (err instanceof Error ? err : new Error(String(err))) as E;
    return [null, normalizedError];
  }
};

export const toResultSync = <T, E = Error>(fn: () => T): ResultTuple<T, E> => {
  try {
    const data = fn();
    return [data, null];
  } catch (err) {
    const normalizedError = (err instanceof Error ? err : new Error(String(err))) as E;
    return [null, normalizedError];
  }
};

export const isOk = <T, E>(result: ResultTuple<T, E>): result is [T, null] => {
  return result[1] === null;
};

export const isErr = <T, E>(result: ResultTuple<T, E>): result is [null, E] => {
  return result[1] !== null;
};
