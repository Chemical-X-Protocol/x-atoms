import { type RestartableTimer } from '../../core/index.js';
export interface SelfCleaningTimerOptions {
    /** Start right away instead of waiting for `start()`. */
    immediate?: boolean;
}
export type SelfCleaningTimer = RestartableTimer;
/** One-shot timer cleared when the component is destroyed. Call `start()` again to re-arm. */
export declare const useSelfCleaningTimeout: (fn: () => void | Promise<void>, delayMs: number, options?: SelfCleaningTimerOptions) => SelfCleaningTimer;
/** Repeating timer cleared when the component is destroyed. */
export declare const useSelfCleaningInterval: (fn: () => void | Promise<void>, intervalMs: number, options?: SelfCleaningTimerOptions) => SelfCleaningTimer;
