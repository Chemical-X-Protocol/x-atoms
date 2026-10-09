import type { XCardProps, XCardVariant } from './types.js';
export declare const computeCardClasses: (props: XCardProps, extraClass?: string) => string[];
export declare const resolveVuetifyCardVariant: (variant?: XCardVariant) => Exclude<XCardVariant, "glass">;
