import { useEffect } from 'react';
import { after, every } from '../../core';
import { useLatest } from './useLatest';

/** Calls `callback` every `delayMs`. Pass `null` to pause. Cleared on unmount. */
export const useSelfCleaningInterval = (callback: () => void, delayMs: number | null): void => {
  const latestCallback = useLatest(callback);
  useEffect(() => {
    const isPaused = delayMs === null;
    if (isPaused) return undefined;
    return every(delayMs, () => latestCallback.current());
  }, [delayMs, latestCallback]);
};

/** Calls `callback` once after `delayMs`. Pass `null` to cancel. Cleared on unmount. */
export const useSelfCleaningTimeout = (callback: () => void, delayMs: number | null): void => {
  const latestCallback = useLatest(callback);
  useEffect(() => {
    const isPaused = delayMs === null;
    if (isPaused) return undefined;
    return after(delayMs, () => latestCallback.current());
  }, [delayMs, latestCallback]);
};
