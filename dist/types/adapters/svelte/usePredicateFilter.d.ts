import { type Readable } from 'svelte/store';
import { type Predicate } from '../../core/index.js';
export interface PredicateFilterResult<T> {
    filtered: T[];
    count: number;
    hasMatches: boolean;
}
type ItemSource<T> = readonly T[] | null | undefined | Readable<readonly T[] | null | undefined>;
/** A derived store of the items that pass every predicate. `items` may be a store or an array. */
export declare const usePredicateFilter: <T>(items: ItemSource<T>, ...predicates: Array<Predicate<T>>) => Readable<PredicateFilterResult<T>>;
export {};
