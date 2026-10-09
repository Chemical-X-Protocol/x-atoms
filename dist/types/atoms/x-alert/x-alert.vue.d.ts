import type { XAlertProps } from './types.js';
declare var __VLS_10: {}, __VLS_12: {}, __VLS_14: {}, __VLS_16: {}, __VLS_18: any;
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_10) => any;
} & {
    title?: (props: typeof __VLS_12) => any;
} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    append?: (props: typeof __VLS_16) => any;
} & {
    close?: (props: typeof __VLS_18) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XAlertProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "click:close": () => any;
}, string, import("vue").PublicProps, Readonly<XAlertProps> & Readonly<{
    "onClick:close"?: (() => any) | undefined;
}>, {
    text: string;
    variant: "glass" | "tonal" | "outlined" | "elevated";
    type: import("../../index.js").SemanticStatus;
    title: string;
    closable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
