import type { XNavDrawerProps } from './types.js';
declare var __VLS_6: {}, __VLS_8: {}, __VLS_10: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_6) => any;
} & {
    default?: (props: typeof __VLS_8) => any;
} & {
    append?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XNavDrawerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<XNavDrawerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    width: number;
    modelValue: boolean;
    floating: boolean;
    location: "start" | "end";
    rail: boolean;
    temporary: boolean;
    permanent: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
