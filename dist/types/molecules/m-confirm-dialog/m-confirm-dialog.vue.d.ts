import type { MConfirmDialogProps } from './types.js';
declare const _default: import("vue").DefineComponent<MConfirmDialogProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    confirm: () => any;
    cancel: () => any;
}, string, import("vue").PublicProps, Readonly<MConfirmDialogProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onConfirm?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
}>, {
    loading: boolean;
    title: string;
    modelValue: boolean;
    message: string;
    confirmText: string;
    cancelText: string;
    confirmColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
