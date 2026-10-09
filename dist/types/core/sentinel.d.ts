/**
 * Chemical X Protocol: Sentinel Objects & Input Normalization
 * Eliminates optional-chaining churn and inner-loop type branching.
 */
export declare const deepFreeze: <T extends object>(obj: T) => Readonly<T>;
export declare const normalizeArray: <T>(input: T | T[] | null | undefined) => T[];
export declare const fallback: <T>(value: T | null | undefined, defaultValue: T) => T;
