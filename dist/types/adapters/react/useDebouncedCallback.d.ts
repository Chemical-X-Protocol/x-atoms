/**
 * Debounces `callback` by `delayMs`. The latest callback always runs, and a
 * pending call is cancelled on unmount or when `delayMs` changes.
 */
export declare const useDebouncedCallback: <A extends unknown[]>(callback: (...args: A) => void, delayMs: number) => ((...args: A) => void) & {
    cancel: () => void;
};
