import { useEffect, useRef, type MutableRefObject } from 'react';

/** A ref that always holds the latest `value`, for callbacks read inside long-lived effects. */
export const useLatest = <T>(value: T): MutableRefObject<T> => {
  const latest = useRef(value);
  useEffect(() => {
    latest.current = value;
  }, [value]);
  return latest;
};
