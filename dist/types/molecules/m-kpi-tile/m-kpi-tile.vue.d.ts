import type { MKpiTileProps } from './types.js';
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<MKpiTileProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<MKpiTileProps> & Readonly<{}>, {
    trend: "up" | "down" | "neutral";
    icon: string;
    subtext: string;
    trendValue: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
