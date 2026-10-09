import type { XTextProps } from './types.js';
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<XTextProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<XTextProps> & Readonly<{}>, {
    variant: import("./types.js").XTextVariant;
    weight: import("./types.js").XTextWeight;
    tag: import("./types.js").XTextTag;
    tone: import("../../index.js").Tone;
    align: "start" | "center" | "end";
    truncate: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
