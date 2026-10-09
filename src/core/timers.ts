/**
 * Chemical X Protocol: Timer Teardown Pairs
 * Every timer is born with its own idempotent teardown, so callers cannot leak it.
 */

import type { Teardown } from './lifecycle.ts';

/** Runs `fn` once after `delayMs`. The returned teardown cancels it. */
export const after = (delayMs: number, fn: () => void): Teardown => {
  const timerId = setTimeout(fn, delayMs);
  return () => clearTimeout(timerId);
};

/** Runs `fn` every `intervalMs`. The returned teardown stops it. */
export const every = (intervalMs: number, fn: () => void): Teardown => {
  const intervalId = setInterval(fn, intervalMs);
  return () => clearInterval(intervalId);
};

/** Delays `fn` until calls stop for `delayMs`. `cancel` drops the pending call. */
export const createDebounce = <A extends unknown[]>(fn: (...args: A) => void, delayMs: number) => {
  let cancelPending: Teardown = () => {};
  const debounced = (...args: A): void => {
    cancelPending();
    cancelPending = after(delayMs, () => fn(...args));
  };
  const cancel = (): void => cancelPending();
  return Object.assign(debounced, { cancel });
};

export interface RestartableTimer {
  /** (Re)arms the timer and returns `stop`. */
  start: () => Teardown;
  stop: () => void;
  /** True while a run is scheduled. A fired timeout is no longer active. */
  isActive: () => boolean;
}

type Schedule = (onFired: () => void) => Teardown;

const createRestartableTimer = (schedule: Schedule): RestartableTimer => {
  let cancel: Teardown | null = null;
  const stop = (): void => {
    cancel?.();
    cancel = null;
  };
  const start = (): Teardown => {
    stop();
    cancel = schedule(() => {
      cancel = null;
    });
    return stop;
  };
  return { start, stop, isActive: () => cancel !== null };
};

/** A one-shot timer you can re-arm with `start()`, e.g. for self-scheduling pollers. */
export const createRestartableTimeout = (fn: () => void | Promise<void>, delayMs: number): RestartableTimer => {
  return createRestartableTimer((onFired) => after(delayMs, () => {
    onFired();
    void fn();
  }));
};

/** A repeating timer you can stop and restart. */
export const createRestartableInterval = (fn: () => void | Promise<void>, intervalMs: number): RestartableTimer => {
  return createRestartableTimer(() => every(intervalMs, () => {
    void fn();
  }));
};
