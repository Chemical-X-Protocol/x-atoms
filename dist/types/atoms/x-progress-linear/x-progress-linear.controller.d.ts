import type { XProgressLinearProps } from './types.js';
export declare const clampProgress: (value?: number) => number;
export declare const computeProgressClasses: (props: XProgressLinearProps, extraClass?: string) => string[];
/** Numbers are pixels; strings pass through. */
export declare const resolveProgressHeight: (height?: string | number) => string | undefined;
/** Track and bar sizing for the raw-HTML adapters. */
export declare const computeProgressStyles: (height: string | number | undefined, progressValue: number, indeterminate: boolean) => {
    track: Record<string, string>;
    bar: Record<string, string>;
};
