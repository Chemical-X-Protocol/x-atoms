import { createRestartableInterval, createRestartableTimeout, type RestartableTimer } from '../../core';
import { useDisposer } from './useDisposer';

export interface SelfCleaningTimerOptions {
  /** Start right away instead of waiting for `start()`. */
  immediate?: boolean;
}

export type SelfCleaningTimer = RestartableTimer;

const bindTimer = (timer: RestartableTimer, options: SelfCleaningTimerOptions): SelfCleaningTimer => {
  useDisposer(timer.stop);
  const shouldStartNow = Boolean(options.immediate);
  if (shouldStartNow) timer.start();
  return timer;
};

/** One-shot timer cleared when the component is destroyed. Call `start()` again to re-arm. */
export const useSelfCleaningTimeout = (
  fn: () => void | Promise<void>,
  delayMs: number,
  options: SelfCleaningTimerOptions = {}
): SelfCleaningTimer => bindTimer(createRestartableTimeout(fn, delayMs), options);

/** Repeating timer cleared when the component is destroyed. */
export const useSelfCleaningInterval = (
  fn: () => void | Promise<void>,
  intervalMs: number,
  options: SelfCleaningTimerOptions = {}
): SelfCleaningTimer => bindTimer(createRestartableInterval(fn, intervalMs), options);
