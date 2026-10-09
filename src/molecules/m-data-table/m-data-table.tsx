import React from 'react';
import type { MDataTableProps, MDataTableHeader, MDataTableSortState } from './types';
import {
  canSortHeader,
  computeCellClasses,
  computeHeaderClasses,
  computeTableClasses,
  getNextSortState,
  resolveItemKey,
  resolveCellValue,
  resolveSortIcon,
} from './m-data-table.controller';
import XProgressLinearReact from '../../atoms/x-progress-linear/x-progress-linear';

export interface ReactDataTableProps<T = Record<string, unknown>> extends MDataTableProps<T> {
  className?: string;
  onRowClick?: (item: T) => void;
  onSortChange?: (state: MDataTableSortState) => void;
  renderEmpty?: () => React.ReactNode;
  renderCell?: (item: T, header: MDataTableHeader, value: unknown) => React.ReactNode;
}

export const MDataTableReact = <T extends Record<string, unknown>>({
  headers = [],
  items = [],
  loading = false,
  emptyText = 'No records found',
  itemKey = 'id',
  sortBy = null,
  sortDesc = false,
  hoverable = true,
  dense = false,
  className = '',
  onRowClick = undefined,
  onSortChange = undefined,
  renderEmpty = undefined,
  renderCell = undefined,
}: ReactDataTableProps<T>): React.ReactElement => {
  const resolvedClassNames = computeTableClasses(
    { hoverable, dense, loading },
    className
  ).join(' ');

  const hasItems = items.length > 0;
  const isEmpty = !loading && !hasItems;

  const handleHeaderClick = (header: MDataTableHeader) => {
    const isSortable = canSortHeader(header, Boolean(onSortChange));
    if (isSortable) onSortChange?.(getNextSortState({ sortBy, sortDesc }, header.key));
  };

  const renderSortIcon = (header: MDataTableHeader) => {
    const icon = resolveSortIcon({ sortBy, sortDesc }, header.key);
    return icon ? <span className="m-data-table__sort-icon">{icon}</span> : null;
  };

  const renderCellContent = (item: T, header: MDataTableHeader) => {
    const cellValue = resolveCellValue(item, header);
    return renderCell ? renderCell(item, header, cellValue) : String(cellValue);
  };

  const renderRow = (item: T, index: number) => (
    <tr
      key={resolveItemKey(item, itemKey, index)}
      className="m-data-table__tr"
      onClick={() => onRowClick?.(item)}
    >
      {headers.map((header) => (
        <td key={header.key} className={computeCellClasses(header)}>
          {renderCellContent(item, header)}
        </td>
      ))}
    </tr>
  );

  const emptyRow = (
    <tr>
      <td colSpan={headers.length} className="m-data-table__empty">
        {renderEmpty ? renderEmpty() : emptyText}
      </td>
    </tr>
  );

  return (
    <div className={resolvedClassNames}>
      {loading ? <XProgressLinearReact indeterminate={true} color="primary" /> : null}
      <table className="m-data-table__table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                className={computeHeaderClasses(header)}
                onClick={() => handleHeaderClick(header)}
              >
                {header.title}
                {renderSortIcon(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isEmpty ? emptyRow : items.map(renderRow)}
        </tbody>
      </table>
    </div>
  );
};

export default MDataTableReact;
