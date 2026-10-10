import type { MDataTableProps, MDataTableSortState, MDataTableHeader } from './types';

export const computeTableClasses = (
  props: Pick<MDataTableProps, 'hoverable' | 'dense' | 'loading'>,
  customClass?: string
): string[] => {
  const classes: string[] = ['m-data-table'];

  const isHoverable = Boolean(props.hoverable);
  const isDense = Boolean(props.dense);
  const isLoading = Boolean(props.loading);

  if (isHoverable) {
    classes.push('m-data-table--hoverable');
  }

  if (isDense) {
    classes.push('m-data-table--dense');
  }

  if (isLoading) {
    classes.push('m-data-table--loading');
  }

  if (customClass) {
    classes.push(customClass);
  }

  return classes;
};

export const getNextSortState = (
  currentState: MDataTableSortState,
  headerKey: string
): MDataTableSortState => {
  const isSameColumn = currentState.sortBy === headerKey;
  const isAscending = isSameColumn && !currentState.sortDesc;

  if (!isSameColumn) {
    return { sortBy: headerKey, sortDesc: false };
  }

  if (isAscending) {
    return { sortBy: headerKey, sortDesc: true };
  }

  return { sortBy: null, sortDesc: false };
};

export const resolveItemKey = <T extends Record<string, unknown>>(
  item: T,
  keyField?: string,
  index = 0
): string | number => {
  const field = keyField ?? '';
  const hasKeyField = field !== '' && field in item;
  return hasKeyField ? String(item[field]) : index;
};

export const resolveCellValue = <T extends Record<string, unknown>>(
  item: T,
  header: MDataTableHeader
): unknown => {
  return item[header.key] ?? '';
};

export const computeHeaderClasses = (header: MDataTableHeader): string => {
  const classes = ['m-data-table__th'];
  const isSortable = Boolean(header.sortable);
  const hasAlign = Boolean(header.align);
  if (isSortable) classes.push('m-data-table__th--sortable');
  if (hasAlign) classes.push(`m-data-table__th--align-${header.align}`);
  return classes.join(' ');
};

export const computeCellClasses = (header: MDataTableHeader): string => {
  const classes = ['m-data-table__td'];
  const hasAlign = Boolean(header.align);
  if (hasAlign) classes.push(`m-data-table__td--align-${header.align}`);
  return classes.join(' ');
};

/** The sort arrow for a header, or null when the table is not sorted by it. */
export const resolveSortIcon = (state: MDataTableSortState, key: string): string | null => {
  const isSortedByKey = state.sortBy === key;
  if (!isSortedByKey) return null;
  return state.sortDesc ? '▼' : '▲';
};

/** A header click sorts only when the header is sortable and someone listens. */
export const canSortHeader = (header: MDataTableHeader, hasSortListener: boolean): boolean => {
  return Boolean(header.sortable) && hasSortListener;
};
