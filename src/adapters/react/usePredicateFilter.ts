import { useMemo } from 'react';
import { createPredicateFilter, type Predicate } from '../../core';

export interface UsePredicateFilterReturn<T> {
  readonly filtered: readonly T[];
  readonly count: number;
  readonly hasMatches: boolean;
}

/** Memoized list filter. Keep predicate identities stable (module scope or useCallback). */
export const usePredicateFilter = <T>(
  items: readonly T[] | null | undefined,
  ...predicates: Array<Predicate<T>>
): UsePredicateFilterReturn<T> => {
  const filtered = useMemo(
    () => createPredicateFilter(...predicates)(items),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, ...predicates]
  );
  const count = filtered.length;
  return { filtered, count, hasMatches: count > 0 };
};
