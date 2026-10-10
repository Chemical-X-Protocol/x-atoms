/**
 * Chemical X Protocol: Sentinel Objects & Input Normalization
 * Eliminates optional-chaining churn and inner-loop type branching.
 */

export const deepFreeze = <T extends object>(obj: T): Readonly<T> => {
  const propNames = Object.getOwnPropertyNames(obj);
  for (const name of propNames) {
    const value = (obj as Record<string, unknown>)[name];
    const isUnfrozenObject = Boolean(value) && typeof value === 'object' && !Object.isFrozen(value);
    if (isUnfrozenObject) deepFreeze(value as object);
  }
  return Object.freeze(obj);
};

export const normalizeArray = <T>(input: T | T[] | null | undefined): T[] => {
  const isMissing = input === null || typeof input === 'undefined';
  if (isMissing) return [];
  return Array.isArray(input) ? input : [input];
};

export const fallback = <T>(value: T | null | undefined, defaultValue: T): T => {
  return value !== null && typeof value !== 'undefined' ? value : defaultValue;
};
