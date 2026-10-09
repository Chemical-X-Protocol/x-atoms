import type { MDataTableProps, MDataTableSortState, MDataTableHeader } from './types.js';
export declare const computeTableClasses: (props: Pick<MDataTableProps, "hoverable" | "dense" | "loading">, customClass?: string) => string[];
export declare const getNextSortState: (currentState: MDataTableSortState, headerKey: string) => MDataTableSortState;
export declare const resolveItemKey: <T extends Record<string, unknown>>(item: T, keyField?: string, index?: number) => string | number;
export declare const resolveCellValue: <T extends Record<string, unknown>>(item: T, header: MDataTableHeader) => unknown;
