import { computed, toValue, type ComputedRef, type MaybeRefOrGetter } from 'vue';
import { createPredicateFilter, type Predicate } from '../../core';

export interface UsePredicateFilterReturn<T> {
  filtered: ComputedRef<T[]>;
  count: ComputedRef<number>;
  hasMatches: ComputedRef<boolean>;
}

/**
 * Reactive list filter. `items` may be a ref, a getter or a plain array.
 * Refs read inside the predicates are tracked too.
 */
export const usePredicateFilter = <T>(
  items: MaybeRefOrGetter<readonly T[] | null | undefined>,
  ...predicates: Array<Predicate<T>>
): UsePredicateFilterReturn<T> => {
  const keepMatches = createPredicateFilter(...predicates);
  const filtered = computed(() => keepMatches(toValue(items)));
  const count = computed(() => filtered.value.length);
  const hasMatches = computed(() => count.value > 0);
  return { filtered, count, hasMatches };
};
