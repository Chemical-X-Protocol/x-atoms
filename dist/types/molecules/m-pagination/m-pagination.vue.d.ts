import type { MPaginationProps } from './types.js';
declare const _default: import("vue").DefineComponent<MPaginationProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:currentPage": (page: number) => any;
    pageChange: (page: number) => any;
}, string, import("vue").PublicProps, Readonly<MPaginationProps> & Readonly<{
    "onUpdate:currentPage"?: ((page: number) => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
}>, {
    pageSize: number;
    totalItems: number;
    maxVisiblePages: number;
    showRange: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
