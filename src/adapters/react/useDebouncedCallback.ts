import { useEffect, useMemo, useRef } from 'react';
import { createDebounce } from '../../core';

/**
 * Debounces `callback` by `delayMs`. The latest callback always runs, and a
 * pending call is cancelled on unmount or when `delayMs` changes.
 */
export const useDebouncedCallback = <A extends unknown[]>(
  callback: (...args: A) => void,
  delayMs: number
) => {
  const latestCallback = useRef(callback);
  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  const debounced = useMemo(
    () => createDebounce((...args: A) => latestCallback.current(...args), delayMs),
    [delayMs]
  );
  useEffect(() => debounced.cancel, [debounced]);

  return debounced;
};
