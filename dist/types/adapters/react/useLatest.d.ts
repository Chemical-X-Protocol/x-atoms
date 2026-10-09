import { type MutableRefObject } from 'react';
/** A ref that always holds the latest `value`, for callbacks read inside long-lived effects. */
export declare const useLatest: <T>(value: T) => MutableRefObject<T>;
