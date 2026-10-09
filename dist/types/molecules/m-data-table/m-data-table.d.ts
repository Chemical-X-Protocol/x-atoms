import React from 'react';
import type { MDataTableProps, MDataTableHeader, MDataTableSortState } from './types.js';
export interface ReactDataTableProps<T = Record<string, unknown>> extends MDataTableProps<T> {
    className?: string;
    onRowClick?: (item: T) => void;
    onSortChange?: (state: MDataTableSortState) => void;
    renderEmpty?: () => React.ReactNode;
    renderCell?: (item: T, header: MDataTableHeader, value: unknown) => React.ReactNode;
}
export declare const MDataTableReact: <T extends Record<string, unknown>>({ headers, items, loading, emptyText, itemKey, sortBy, sortDesc, hoverable, dense, className, onRowClick, onSortChange, renderEmpty, renderCell, }: ReactDataTableProps<T>) => React.ReactElement;
export default MDataTableReact;
