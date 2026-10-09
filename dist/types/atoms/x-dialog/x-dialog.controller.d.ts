import type { XDialogProps } from './types.js';
export declare const computeDialogClasses: (props: XDialogProps, extraClass?: string) => string[];
/** Numbers are pixels; strings pass through (e.g. '80vw'). */
export declare const toCssLength: (value: string | number | undefined) => string | undefined;
/** CSS custom properties consumed by `.x-dialog__surface` in the raw-HTML adapters. */
export declare const computeDialogSurfaceVars: (props: XDialogProps) => Record<string, string>;
/** A persistent dialog ignores Escape and backdrop clicks. */
export declare const shouldDismissDialog: (props: XDialogProps) => boolean;
