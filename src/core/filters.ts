/**
 * Chemical X Protocol: Predicate Filters
 * Named, reusable filters instead of repeated inline `.filter()` conditions.
 */

import { allPass, type Predicate } from './combinators.ts';
import { normalizeArray } from './sentinel.ts';

export type Pattern = string | RegExp;

/** Builds a list filter that keeps items passing every predicate. Nullish lists become []. */
export const createPredicateFilter = <T>(...predicates: Array<Predicate<T>>) => {
  const passesAll = allPass(...predicates);
  return (items: readonly T[] | null | undefined): T[] => {
    return normalizeArray(items as T[] | null | undefined).filter(passesAll);
  };
};

const matchesPattern = (value: string, pattern: Pattern): boolean => {
  const isRegex = pattern instanceof RegExp;
  // String.prototype.search ignores `lastIndex` and the global flag, so regex state never leaks.
  return isRegex ? value.search(pattern) !== -1 : value.includes(pattern);
};

/** True when `value` contains any substring pattern or matches any regex pattern. */
export const matchesAnyPattern = (value: string, patterns: readonly Pattern[]): boolean => {
  return patterns.some((pattern) => matchesPattern(value, pattern));
};

/** True when every predicate passes; stops at the first failure. */
export const matchesAllPredicates = <T>(item: T, predicates: ReadonlyArray<Predicate<T>>): boolean => {
  return allPass(...predicates)(item);
};
