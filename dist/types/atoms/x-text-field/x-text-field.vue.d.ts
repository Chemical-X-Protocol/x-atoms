import type { XTextFieldProps } from './types.js';
declare var __VLS_10: {
    isActive: import("vue").Ref<boolean>;
    isFocused: import("vue").Ref<boolean>;
    iconColor: import("vue").ComputedRef<string | undefined>;
    controlRef: import("vue").Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}, __VLS_12: {
    isActive: import("vue").Ref<boolean>;
    isFocused: import("vue").Ref<boolean>;
    iconColor: import("vue").ComputedRef<string | undefined>;
    controlRef: import("vue").Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}, __VLS_14: {
    id: import("vue").ComputedRef<string>;
    messagesId: import("vue").ComputedRef<string | undefined>;
    isDirty: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isReadonly: import("vue").ComputedRef<boolean>;
    isPristine: import("vue").Ref<boolean>;
    isValid: import("vue").ComputedRef<boolean | null>;
    isValidating: import("vue").Ref<boolean>;
    hasDetails: import("vue").Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}, __VLS_16: {
    id: import("vue").ComputedRef<string>;
    messagesId: import("vue").ComputedRef<string | undefined>;
    isDirty: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isReadonly: import("vue").ComputedRef<boolean>;
    isPristine: import("vue").Ref<boolean>;
    isValid: import("vue").ComputedRef<boolean | null>;
    isValidating: import("vue").Ref<boolean>;
    hasDetails: import("vue").Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
};
type __VLS_Slots = {} & {
    'prepend-inner'?: (props: typeof __VLS_10) => any;
} & {
    'append-inner'?: (props: typeof __VLS_12) => any;
} & {
    prepend?: (props: typeof __VLS_14) => any;
} & {
    append?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XTextFieldProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
    "click:clear": () => any;
}, string, import("vue").PublicProps, Readonly<XTextFieldProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    "onClick:clear"?: (() => any) | undefined;
}>, {
    variant: "outlined" | "filled" | "underlined" | "solo" | "plain";
    disabled: boolean;
    type: string;
    modelValue: string | number;
    label: string;
    placeholder: string;
    readonly: boolean;
    clearable: boolean;
    density: "compact" | "comfortable" | "default";
    hideDetails: boolean | "auto";
    prefix: string;
    suffix: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
