import type { MEmptyStateProps } from './types.js';
declare var __VLS_5: {}, __VLS_7: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_5) => any;
} & {
    action?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<MEmptyStateProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "click:action": () => any;
}, string, import("vue").PublicProps, Readonly<MEmptyStateProps> & Readonly<{
    "onClick:action"?: (() => any) | undefined;
}>, {
    icon: string;
    description: string;
    actionText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
