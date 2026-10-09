import type { XDialogProps } from './types.js';
declare var __VLS_6: any, __VLS_12: {}, __VLS_14: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    activator?: (props: typeof __VLS_6) => any;
} & {
    title?: (props: typeof __VLS_12) => any;
} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    actions?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XDialogProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    "update:model-value": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<XDialogProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onUpdate:model-value"?: ((value: boolean) => any) | undefined;
}>, {
    modelValue: boolean;
    maxWidth: string | number;
    width: string | number;
    persistent: boolean;
    scrollable: boolean;
    fullscreen: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
