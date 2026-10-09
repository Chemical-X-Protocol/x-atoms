import type { MConfirmDialogProps } from './types.js';
declare const _default: import("vue").DefineComponent<MConfirmDialogProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    cancel: () => any;
    "update:modelValue": (value: boolean) => any;
    confirm: () => any;
}, string, import("vue").PublicProps, Readonly<MConfirmDialogProps> & Readonly<{
    onCancel?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    title: string;
    loading: boolean;
    modelValue: boolean;
    message: string;
    confirmText: string;
    cancelText: string;
    confirmColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
