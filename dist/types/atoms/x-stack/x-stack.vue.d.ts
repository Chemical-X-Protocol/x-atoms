import type { XStackProps } from './types.js';
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XStackProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<XStackProps> & Readonly<{}>, {
    wrap: boolean;
    justify: "start" | "center" | "end" | "between" | "around" | "evenly";
    tag: "div" | "section" | "ul" | "ol" | "nav" | "header" | "footer" | "main" | "aside";
    align: "start" | "center" | "end" | "stretch" | "baseline";
    direction: "row" | "column";
    gap: import("../../index.js").SpaceScale;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
