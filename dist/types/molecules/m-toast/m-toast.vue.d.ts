import type { MToastProps } from './types.js';
declare const _default: import("vue").DefineComponent<MToastProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: () => any;
    "update:modelValue": (value: boolean) => any;
    "click:action": () => any;
}, string, import("vue").PublicProps, Readonly<MToastProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onClick:action"?: (() => any) | undefined;
}>, {
    type: import("../../core/index.js").SemanticStatus;
    modelValue: boolean;
    actionText: string;
    duration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
