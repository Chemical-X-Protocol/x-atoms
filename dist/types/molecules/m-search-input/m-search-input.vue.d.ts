import type { MSearchInputProps } from './types.js';
declare var __VLS_9: {}, __VLS_11: {
    isActive: import("vue").Ref<boolean>;
    isFocused: import("vue").Ref<boolean>;
    iconColor: import("vue").ComputedRef<string | undefined>;
    controlRef: import("vue").Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
};
type __VLS_Slots = {} & {
    'prepend-inner'?: (props: typeof __VLS_9) => any;
} & {
    'append-inner'?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<MSearchInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    search: (value: string) => any;
    clear: () => any;
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<MSearchInputProps> & Readonly<{
    onSearch?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    loading: boolean;
    size: "small" | "default" | "large";
    disabled: boolean;
    modelValue: string;
    placeholder: string;
    clearable: boolean;
    debounceMs: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
