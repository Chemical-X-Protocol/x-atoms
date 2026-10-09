import type { XChipProps, XChipVariant } from './types.js';
declare var __VLS_10: {}, __VLS_12: {}, __VLS_14: any, __VLS_16: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_10) => any;
} & {
    close?: (props: typeof __VLS_12) => any;
} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    append?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XChipProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "click:close": () => any;
}, string, import("vue").PublicProps, Readonly<XChipProps> & Readonly<{
    "onClick:close"?: (() => any) | undefined;
}>, {
    filter: boolean;
    variant: XChipVariant;
    color: string;
    size: "x-small" | "small" | "default" | "large" | "x-large";
    disabled: boolean;
    closable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
