import type { MDataTableProps, MDataTableSortState, MDataTableHeader } from './types.js';
export declare const computeTableClasses: (props: Pick<MDataTableProps, "hoverable" | "dense" | "loading">, customClass?: string) => string[];
export declare const getNextSortState: (currentState: MDataTableSortState, headerKey: string) => MDataTableSortState;
export declare const resolveItemKey: <T extends Record<string, unknown>>(item: T, keyField?: string, index?: number) => string | number;
export declare const resolveCellValue: <T extends Record<string, unknown>>(item: T, header: MDataTableHeader) => unknown;
export declare const computeHeaderClasses: (header: MDataTableHeader) => string;
export declare const computeCellClasses: (header: MDataTableHeader) => string;
/** The sort arrow for a header, or null when the table is not sorted by it. */
export declare const resolveSortIcon: (state: MDataTableSortState, key: string) => string | null;
/** A header click sorts only when the header is sortable and someone listens. */
export declare const canSortHeader: (header: MDataTableHeader, hasSortListener: boolean) => boolean;
