import type { XMenuProps } from './types.js';
declare var __VLS_10: any, __VLS_12: any;
type __VLS_Slots = {} & {
    activator?: (props: typeof __VLS_10) => any;
} & {
    default?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XMenuProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    "update:model-value": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<XMenuProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onUpdate:model-value"?: ((value: boolean) => any) | undefined;
}>, {
    readonly disabled: boolean;
    readonly modelValue: boolean;
    readonly location: string;
    readonly transition: string;
    readonly closeOnContentClick: boolean;
    readonly origin: string;
    readonly offset: number | string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
