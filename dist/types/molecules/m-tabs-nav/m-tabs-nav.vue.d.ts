import type { MTabsNavProps } from './types.js';
declare const _default: import("vue").DefineComponent<MTabsNavProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (tabId: string) => any;
    tabChange: (tabId: string) => any;
}, string, import("vue").PublicProps, Readonly<MTabsNavProps> & Readonly<{
    "onUpdate:modelValue"?: ((tabId: string) => any) | undefined;
    onTabChange?: ((tabId: string) => any) | undefined;
}>, {
    modelValue: string;
    align: "start" | "center" | "end";
    grow: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
