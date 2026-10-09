/**
 * Chemical X Protocol: Timer Teardown Pairs
 * Every timer is born with its own idempotent teardown, so callers cannot leak it.
 */
import type { Teardown } from './lifecycle.js';
/** Runs `fn` once after `delayMs`. The returned teardown cancels it. */
export declare const after: (delayMs: number, fn: () => void) => Teardown;
/** Runs `fn` every `intervalMs`. The returned teardown stops it. */
export declare const every: (intervalMs: number, fn: () => void) => Teardown;
/** Delays `fn` until calls stop for `delayMs`. `cancel` drops the pending call. */
export declare const createDebounce: <A extends unknown[]>(fn: (...args: A) => void, delayMs: number) => ((...args: A) => void) & {
    cancel: () => void;
};
export interface RestartableTimer {
    /** (Re)arms the timer and returns `stop`. */
    start: () => Teardown;
    stop: () => void;
    /** True while a run is scheduled. A fired timeout is no longer active. */
    isActive: () => boolean;
}
/** A one-shot timer you can re-arm with `start()`, e.g. for self-scheduling pollers. */
export declare const createRestartableTimeout: (fn: () => void | Promise<void>, delayMs: number) => RestartableTimer;
/** A repeating timer you can stop and restart. */
export declare const createRestartableInterval: (fn: () => void | Promise<void>, intervalMs: number) => RestartableTimer;
