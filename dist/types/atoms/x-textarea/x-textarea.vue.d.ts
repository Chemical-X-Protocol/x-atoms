import type { XTextareaProps } from './types.js';
declare const _default: import("vue").DefineComponent<XTextareaProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<XTextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    label: string;
    variant: "outlined" | "filled" | "underlined" | "solo" | "plain";
    disabled: boolean;
    modelValue: string;
    placeholder: string;
    readonly: boolean;
    density: "compact" | "comfortable" | "default";
    rows: number;
    autoGrow: boolean;
    maxlength: number;
    hideDetails: boolean | "auto";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
