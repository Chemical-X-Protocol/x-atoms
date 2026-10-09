import type { XTextProps, XTextTag } from './types.js';
/** The element to render: an explicit `tag`, else the variant's natural element. */
export declare const resolveTextTag: (props: XTextProps) => XTextTag;
export declare const computeTextClasses: (props: XTextProps, extraClass?: string) => string[];
