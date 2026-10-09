import type { XCardProps, XCardVariant } from './types.js';
declare var __VLS_6: {}, __VLS_8: {}, __VLS_10: {}, __VLS_12: {}, __VLS_14: {}, __VLS_16: {}, __VLS_18: any, __VLS_20: {}, __VLS_22: {};
type __VLS_Slots = {} & {
    image?: (props: typeof __VLS_6) => any;
} & {
    prepend?: (props: typeof __VLS_8) => any;
} & {
    title?: (props: typeof __VLS_10) => any;
} & {
    subtitle?: (props: typeof __VLS_12) => any;
} & {
    text?: (props: typeof __VLS_14) => any;
} & {
    actions?: (props: typeof __VLS_16) => any;
} & {
    loader?: (props: typeof __VLS_18) => any;
} & {
    append?: (props: typeof __VLS_20) => any;
} & {
    default?: (props: typeof __VLS_22) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XCardProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<XCardProps> & Readonly<{}>, {
    loading: boolean;
    variant: XCardVariant;
    color: string;
    disabled: boolean;
    hover: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
