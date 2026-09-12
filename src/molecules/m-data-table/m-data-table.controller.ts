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
  const hasKeyField = Boolean(keyField && keyField in item);
  if (hasKeyField && keyField) {
    return String(item[keyField]);
  }
  return index;
};

export const resolveCellValue = <T extends Record<string, unknown>>(
  item: T,
  header: MDataTableHeader
): unknown => {
  return item[header.key] ?? '';
};
