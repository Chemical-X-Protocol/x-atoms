import type { XListItemProps } from './types.js';
declare var __VLS_6: {
    index?: number;
    depth?: number;
    path?: number[];
    isFirst?: boolean;
    isLast?: boolean;
    isActive: boolean;
    isOpen: boolean;
    isSelected: boolean;
    isIndeterminate: boolean;
    isDisabled: boolean;
    select: (value: boolean) => void;
}, __VLS_8: {
    title?: string | number | boolean;
}, __VLS_10: {
    subtitle?: string | number | boolean;
}, __VLS_12: {
    index?: number;
    depth?: number;
    path?: number[];
    isFirst?: boolean;
    isLast?: boolean;
    isActive: boolean;
    isOpen: boolean;
    isSelected: boolean;
    isIndeterminate: boolean;
    isDisabled: boolean;
    select: (value: boolean) => void;
}, __VLS_14: {
    index?: number;
    depth?: number;
    path?: number[];
    isFirst?: boolean;
    isLast?: boolean;
    isActive: boolean;
    isOpen: boolean;
    isSelected: boolean;
    isIndeterminate: boolean;
    isDisabled: boolean;
    select: (value: boolean) => void;
};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_6) => any;
} & {
    title?: (props: typeof __VLS_8) => any;
} & {
    subtitle?: (props: typeof __VLS_10) => any;
} & {
    append?: (props: typeof __VLS_12) => any;
} & {
    default?: (props: typeof __VLS_14) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XListItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<XListItemProps> & Readonly<{}>, {
    value: any;
    rounded: boolean | string | number;
    title: string;
    subtitle: string;
    variant: import("./types.js").XListItemVariant;
    color: string;
    disabled: boolean;
    active: boolean;
    density: "default" | "comfortable" | "compact";
    lines: "one" | "two" | "three" | false;
    ripple: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
