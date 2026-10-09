import type { MToastProps } from './types.js';
declare const _default: import("vue").DefineComponent<MToastProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
    close: () => any;
    "click:action": () => any;
}, string, import("vue").PublicProps, Readonly<MToastProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    "onClick:action"?: (() => any) | undefined;
}>, {
    type: import("../../index.js").SemanticStatus;
    modelValue: boolean;
    actionText: string;
    duration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
