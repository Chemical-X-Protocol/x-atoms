import type { XBtnProps, XBtnVariant } from './types.js';
export declare const computeBtnClasses: (props: XBtnProps, extraClass?: string) => string[];
export declare const resolveVuetifyVariant: (variant?: XBtnVariant) => Exclude<XBtnVariant, "glass">;
