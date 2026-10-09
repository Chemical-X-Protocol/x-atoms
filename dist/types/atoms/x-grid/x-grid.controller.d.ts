import type { XGridProps } from './types.js';
export declare const clampColumns: (columns?: number) => number;
export declare const computeGridClasses: (props: XGridProps, extraClass?: string) => string[];
/** CSS variable for auto-fill grids; numbers are pixels. */
export declare const computeGridVars: (props: XGridProps) => Record<string, string>;
