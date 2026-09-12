export type TableAlign = 'start' | 'center' | 'end';

export interface MDataTableHeader {
  readonly key: string;
  readonly title: string;
  readonly align?: TableAlign;
  readonly sortable?: boolean;
  readonly width?: string | number;
}

export interface MDataTableSortState {
  readonly sortBy: string | null;
  readonly sortDesc: boolean;
}

export interface MDataTableProps<T = Record<string, unknown>> {
  readonly headers: readonly MDataTableHeader[];
  readonly items: readonly T[];
  readonly loading?: boolean;
  readonly emptyText?: string;
  readonly itemKey?: string;
  readonly sortBy?: string | null;
  readonly sortDesc?: boolean;
  readonly hoverable?: boolean;
  readonly dense?: boolean;
}

export interface MDataTableEmits<T = Record<string, unknown>> {
  (e: 'click:row', item: T): void;
  (e: 'update:sort', state: MDataTableSortState): void;
}
