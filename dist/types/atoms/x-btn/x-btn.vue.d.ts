import type { XBtnProps, XBtnVariant } from './types.js';
declare var __VLS_6: {}, __VLS_8: {}, __VLS_10: {}, __VLS_12: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_6) => any;
} & {
    append?: (props: typeof __VLS_8) => any;
} & {
    loader?: (props: typeof __VLS_10) => any;
} & {
    default?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XBtnProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<XBtnProps> & Readonly<{}>, {
    loading: boolean;
    variant: XBtnVariant;
    color: string;
    size: "x-small" | "small" | "default" | "large" | "x-large";
    block: boolean;
    disabled: boolean;
    icon: string | boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
