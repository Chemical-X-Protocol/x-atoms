/** Calls `callback` every `delayMs`. Pass `null` to pause. Cleared on unmount. */
export declare const useSelfCleaningInterval: (callback: () => void, delayMs: number | null) => void;
/** Calls `callback` once after `delayMs`. Pass `null` to cancel. Cleared on unmount. */
export declare const useSelfCleaningTimeout: (callback: () => void, delayMs: number | null) => void;
