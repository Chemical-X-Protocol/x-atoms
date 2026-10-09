import { type ComputedRef, type MaybeRefOrGetter } from 'vue';
import { type Predicate } from '../../core/index.js';
export interface UsePredicateFilterReturn<T> {
    filtered: ComputedRef<T[]>;
    count: ComputedRef<number>;
    hasMatches: ComputedRef<boolean>;
}
/**
 * Reactive list filter. `items` may be a ref, a getter or a plain array.
 * Refs read inside the predicates are tracked too.
 */
export declare const usePredicateFilter: <T>(items: MaybeRefOrGetter<readonly T[] | null | undefined>, ...predicates: Array<Predicate<T>>) => UsePredicateFilterReturn<T>;
