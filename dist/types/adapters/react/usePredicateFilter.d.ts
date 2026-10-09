import { type Predicate } from '../../core/index.js';
export interface UsePredicateFilterReturn<T> {
    readonly filtered: readonly T[];
    readonly count: number;
    readonly hasMatches: boolean;
}
/** Memoized list filter. Keep predicate identities stable (module scope or useCallback). */
export declare const usePredicateFilter: <T>(items: readonly T[] | null | undefined, ...predicates: Array<Predicate<T>>) => UsePredicateFilterReturn<T>;
