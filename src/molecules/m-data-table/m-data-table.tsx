import React from 'react';
import type { MDataTableProps, MDataTableHeader, MDataTableSortState } from './types';
import {
  computeTableClasses,
  getNextSortState,
  resolveItemKey,
  resolveCellValue,
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
    if (!header.sortable || !onSortChange) return;
    const nextSort = getNextSortState({ sortBy, sortDesc }, header.key);
    onSortChange(nextSort);
  };

  const handleRowClick = (item: T) => {
    if (onRowClick) {
      onRowClick(item);
    }
  };

  return (
    <div className={resolvedClassNames}>
      {loading ? <XProgressLinearReact indeterminate={true} color="primary" /> : null}
      <table className="m-data-table__table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                className={[
                  'm-data-table__th',
                  header.sortable ? 'm-data-table__th--sortable' : '',
                  header.align ? `m-data-table__th--align-${header.align}` : '',
                ].filter(Boolean).join(' ')}
                onClick={() => handleHeaderClick(header)}
              >
                {header.title}
                {sortBy === header.key ? (
                  <span className="m-data-table__sort-icon">
                    {sortDesc ? '▼' : '▲'}
                  </span>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isEmpty ? (
            <tr>
              <td colSpan={headers.length} className="m-data-table__empty">
                {renderEmpty ? renderEmpty() : emptyText}
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr
                key={resolveItemKey(item, itemKey, index)}
                className="m-data-table__tr"
                onClick={() => handleRowClick(item)}
              >
                {headers.map((header) => {
                  const cellValue = resolveCellValue(item, header);
                  return (
                    <td
                      key={header.key}
                      className={[
                        'm-data-table__td',
                        header.align ? `m-data-table__td--align-${header.align}` : '',
                      ].filter(Boolean).join(' ')}
                    >
                      {renderCell ? renderCell(item, header, cellValue) : String(cellValue)}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MDataTableReact;
