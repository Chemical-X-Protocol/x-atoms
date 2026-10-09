import type { XTooltipProps } from './types.js';
declare var __VLS_6: {
    props: Record<string, any>;
}, __VLS_8: {}, __VLS_10: {};
type __VLS_Slots = {} & {
    activator?: (props: typeof __VLS_6) => any;
} & {
    default?: (props: typeof __VLS_8) => any;
} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XTooltipProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<XTooltipProps> & Readonly<{}>, {
    text: string;
    disabled: boolean;
    location: import("./types.js").XTooltipLocation;
    closeDelay: number;
    openDelay: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
