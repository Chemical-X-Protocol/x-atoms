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
export const allPass = <T>(...predicates: Array<Predicate<T>>) => {
  return (item: T): boolean => predicates.every((predicate) => predicate(item));
};

/**
 * Evaluates entity predicates sequentially with true short-circuiting.
 * Halts evaluation on the first predicate returning true.
 */
export const anyPass = <T>(...predicates: Array<Predicate<T>>) => {
  return (item: T): boolean => predicates.some((predicate) => predicate(item));
};

/**
 * Evaluates entity predicates sequentially with true short-circuiting.
 * Halts evaluation on the first predicate returning true.
 */
export const nonePass = <T>(...predicates: Array<Predicate<T>>) => {
  return (item: T): boolean => !predicates.some((predicate) => predicate(item));
};

/**
 * Inverts an entity predicate function.
 */
export const not = <T>(predicate: Predicate<T>): Predicate<T> => {
  return (item: T): boolean => !predicate(item);
};

/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a false.
 */
export const all = (...conditions: Condition[]): boolean =>
  conditions.every((condition) => condition());

/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a true.
 */
export const any = (...conditions: Condition[]): boolean =>
  conditions.some((condition) => condition());

/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a true.
 */
export const none = (...conditions: Condition[]): boolean =>
  !conditions.some((condition) => condition());
