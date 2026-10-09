import type { MDataTableProps, MDataTableHeader } from './types.js';
type __VLS_Props = MDataTableProps;
declare var __VLS_5: `header.${string}`, __VLS_6: {
    header: MDataTableHeader;
}, __VLS_8: {}, __VLS_11: `item.${string}`, __VLS_12: {
    item: Record<string, unknown>;
    value: unknown;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_5>]?: (props: typeof __VLS_6) => any;
} & {
    [K in NonNullable<typeof __VLS_11>]?: (props: typeof __VLS_12) => any;
} & {
    empty?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "click:row": (item: Record<string, unknown>) => any;
    "update:sort": (state: {
        sortBy: string | null;
        sortDesc: boolean;
    }) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onClick:row"?: ((item: Record<string, unknown>) => any) | undefined;
    "onUpdate:sort"?: ((state: {
        sortBy: string | null;
        sortDesc: boolean;
    }) => any) | undefined;
}>, {
    readonly hoverable: boolean;
    readonly dense: boolean;
    readonly loading: boolean;
    readonly emptyText: string;
    readonly itemKey: string;
    readonly sortBy: string | null;
    readonly sortDesc: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
