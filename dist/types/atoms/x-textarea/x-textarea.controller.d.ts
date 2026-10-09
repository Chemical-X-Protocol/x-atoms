import type { XTextareaProps } from './types.js';
export declare const computeTextareaClasses: (props: XTextareaProps, isFocused: boolean, extraClass?: string) => string[];
/** "12 / 280" when a maxlength is set, else null. */
export declare const formatCharacterCount: (value: string | undefined, maxlength?: number) => string | null;
