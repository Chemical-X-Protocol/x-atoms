/**
 * Chemical X Protocol: Predicate Filters
 * Named, reusable filters instead of repeated inline `.filter()` conditions.
 */
import { type Predicate } from './combinators.js';
export type Pattern = string | RegExp;
/** Builds a list filter that keeps items passing every predicate. Nullish lists become []. */
export declare const createPredicateFilter: <T>(...predicates: Array<Predicate<T>>) => (items: readonly T[] | null | undefined) => T[];
/** True when `value` contains any substring pattern or matches any regex pattern. */
export declare const matchesAnyPattern: (value: string, patterns: readonly Pattern[]) => boolean;
/** True when every predicate passes; stops at the first failure. */
export declare const matchesAllPredicates: <T>(item: T, predicates: ReadonlyArray<Predicate<T>>) => boolean;
