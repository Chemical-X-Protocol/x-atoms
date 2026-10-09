import type { XNavDrawerProps } from './types.js';
/** A permanent drawer is always open; otherwise `modelValue` decides. */
export declare const isDrawerOpen: (props: XNavDrawerProps) => boolean;
export declare const computeNavDrawerClasses: (props: XNavDrawerProps, extraClass?: string) => string[];
/** Width variable for the raw-HTML adapters; the rail width wins when `rail` is set. */
export declare const computeNavDrawerVars: (props: XNavDrawerProps) => Record<string, string>;
/** The scrim shows only for an open temporary drawer. */
export declare const hasDrawerScrim: (props: XNavDrawerProps) => boolean;
