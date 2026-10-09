import type { XSwitchProps } from './types.js';
declare var __VLS_6: {
    label: string | undefined;
    props: Record<string, unknown>;
}, __VLS_8: {
    icon: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
    model: import("vue").Ref<boolean>;
    isValid: import("vue").ComputedRef<boolean | null>;
};
type __VLS_Slots = {} & {
    label?: (props: typeof __VLS_6) => any;
} & {
    thumb?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XSwitchProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: boolean) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<XSwitchProps> & Readonly<{
    onChange?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    label: string;
    color: string;
    disabled: boolean;
    modelValue: boolean;
    hideDetails: boolean | "auto";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
