import type { XChipProps, XChipVariant } from './types.js';
export declare const computeChipClasses: (props: XChipProps, extraClass?: string) => string[];
export declare const resolveVuetifyChipVariant: (variant?: XChipVariant) => Exclude<XChipVariant, "glass">;
