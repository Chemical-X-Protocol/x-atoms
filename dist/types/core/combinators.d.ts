/**
 * Chemical X Protocol: Universal Functional Predicate Combinators
 * Deferred, short-circuiting higher-order predicates with zero external dependencies.
 */
export type Predicate<T> = (item: T) => boolean;
export type Condition = () => boolean;
/**
 * Evaluates entity predicates sequentially with true short-circuiting.
 * Halts evaluation on the first predicate returning false.
 */
export declare const allPass: <T>(...predicates: Array<Predicate<T>>) => (item: T) => boolean;
/**
 * Evaluates entity predicates sequentially with true short-circuiting.
 * Halts evaluation on the first predicate returning true.
 */
export declare const anyPass: <T>(...predicates: Array<Predicate<T>>) => (item: T) => boolean;
/**
 * Evaluates entity predicates sequentially with true short-circuiting.
 * Halts evaluation on the first predicate returning true.
 */
export declare const nonePass: <T>(...predicates: Array<Predicate<T>>) => (item: T) => boolean;
/**
 * Inverts an entity predicate function.
 */
export declare const not: <T>(predicate: Predicate<T>) => Predicate<T>;
/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a false.
 */
export declare const all: (...conditions: Condition[]) => boolean;
/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a true.
 */
export declare const any: (...conditions: Condition[]) => boolean;
/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a true.
 */
export declare const none: (...conditions: Condition[]) => boolean;
