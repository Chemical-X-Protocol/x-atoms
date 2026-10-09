import type { XListItemProps, XListItemVariant } from './types.js';
export declare const computeListItemClasses: (props: XListItemProps, extraClass?: string) => string[];
export declare const resolveVuetifyListItemVariant: (variant?: XListItemVariant) => Exclude<XListItemVariant, "glass"> | undefined;
