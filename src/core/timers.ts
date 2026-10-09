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
