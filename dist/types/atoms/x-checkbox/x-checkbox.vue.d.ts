import type { XCheckboxProps } from './types.js';
declare var __VLS_6: {
    label: string | undefined;
    props: Record<string, unknown>;
}, __VLS_8: {
    backgroundColorClasses: import("vue").Ref<string[], string[]>;
    backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
};
type __VLS_Slots = {} & {
    label?: (props: typeof __VLS_6) => any;
} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XCheckboxProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: boolean) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<XCheckboxProps> & Readonly<{
    onChange?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    label: string;
    color: string;
    disabled: boolean;
    modelValue: boolean;
    indeterminate: boolean;
    hideDetails: boolean | "auto";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
