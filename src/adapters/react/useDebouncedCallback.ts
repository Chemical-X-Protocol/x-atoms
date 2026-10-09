import { useEffect, useMemo } from 'react';
import { createDebounce } from '../../core';
import { useLatest } from './useLatest';

/**
 * Debounces `callback` by `delayMs`. The latest callback always runs, and a
 * pending call is cancelled on unmount or when `delayMs` changes.
 */
export const useDebouncedCallback = <A extends unknown[]>(
  callback: (...args: A) => void,
  delayMs: number
) => {
  const latestCallback = useLatest(callback);

  const debounced = useMemo(
    () => createDebounce((...args: A) => latestCallback.current(...args), delayMs),
    [delayMs, latestCallback]
  );
  useEffect(() => debounced.cancel, [debounced]);

  return debounced;
};
