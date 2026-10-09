import type { XListProps, XListVariant } from './types.js';
export declare const computeListClasses: (props: XListProps, extraClass?: string) => string[];
export declare const resolveVuetifyListVariant: (variant?: XListVariant) => Exclude<XListVariant, "glass"> | undefined;
