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
  return (item: T): boolean => {
    for (const predicate of predicates) {
      if (!predicate(item)) return false;
    }
    return true;
  };
};

/**
 * Evaluates entity predicates sequentially with true short-circuiting.
 * Halts evaluation on the first predicate returning true.
 */
export const anyPass = <T>(...predicates: Array<Predicate<T>>) => {
  return (item: T): boolean => {
    for (const predicate of predicates) {
      if (predicate(item)) return true;
    }
    return false;
  };
};

/**
 * Evaluates entity predicates sequentially with true short-circuiting.
 * Halts evaluation on the first predicate returning true.
 */
export const nonePass = <T>(...predicates: Array<Predicate<T>>) => {
  return (item: T): boolean => {
    for (const predicate of predicates) {
      if (predicate(item)) return false;
    }
    return true;
  };
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
export const all = (...conditions: Condition[]): boolean => {
  for (const condition of conditions) {
    if (!condition()) return false;
  }
  return true;
};

/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a true.
 */
export const any = (...conditions: Condition[]): boolean => {
  for (const condition of conditions) {
    if (condition()) return true;
  }
  return false;
};

/**
 * Evaluates named condition thunks sequentially with true short-circuiting.
 * Defers evaluation so subsequent conditions are never executed after a true.
 */
export const none = (...conditions: Condition[]): boolean => {
  for (const condition of conditions) {
    if (condition()) return false;
  }
  return true;
};
