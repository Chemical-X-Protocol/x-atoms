import { derived, readable, type Readable } from 'svelte/store';
import { createPredicateFilter, type Predicate } from '../../core';

export interface PredicateFilterResult<T> {
  filtered: T[];
  count: number;
  hasMatches: boolean;
}

type ItemSource<T> = readonly T[] | null | undefined | Readable<readonly T[] | null | undefined>;

const isReadable = <T>(source: ItemSource<T>): source is Readable<readonly T[] | null | undefined> => {
  return typeof (source as { subscribe?: unknown } | null)?.subscribe === 'function';
};

/** A derived store of the items that pass every predicate. `items` may be a store or an array. */
export const usePredicateFilter = <T>(
  items: ItemSource<T>,
  ...predicates: Array<Predicate<T>>
): Readable<PredicateFilterResult<T>> => {
  const keepMatches = createPredicateFilter(...predicates);
  const source = isReadable(items) ? items : readable(items);
  return derived(source, (list) => {
    const filtered = keepMatches(list);
    return { filtered, count: filtered.length, hasMatches: filtered.length > 0 };
  });
};
