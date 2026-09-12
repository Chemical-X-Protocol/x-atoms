import React from 'react';
import type { MPaginationProps } from './types';
import { computePageNumbers, computeItemRange } from './m-pagination.controller';
import XBtnReact from '../../atoms/x-btn/x-btn';

export interface ReactPaginationProps extends MPaginationProps {
  onPageChange?: (page: number) => void;
}

export const MPaginationReact: React.FC<ReactPaginationProps> = ({
  currentPage,
  totalPages,
  pageSize = 20,
  totalItems = 0,
  maxVisiblePages = 5,
  showRange = true,
  onPageChange = undefined,
}) => {
  const pageNumbers = computePageNumbers(currentPage, totalPages, maxVisiblePages);
  const range = computeItemRange(currentPage, pageSize, totalItems);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  return (
    <div className="m-pagination">
      {showRange && totalItems ? (
        <div className="m-pagination__info">
          Showing {range.start} to {range.end} of {range.total} items
        </div>
      ) : (
        <div />
      )}

      <div className="m-pagination__controls">
        <XBtnReact
          variant="glass"
          size="small"
          disabled={!canGoPrev}
          onClick={() => setPage(currentPage - 1)}
        >
          Prev
        </XBtnReact>

        {pageNumbers.map((page) => (
          <XBtnReact
            key={page}
            variant={page === currentPage ? 'elevated' : 'glass'}
            size="small"
            className={`m-pagination__btn ${
              page === currentPage ? 'm-pagination__btn--active' : ''
            }`}
            onClick={() => setPage(page)}
          >
            {page}
          </XBtnReact>
        ))}

        <XBtnReact
          variant="glass"
          size="small"
          disabled={!canGoNext}
          onClick={() => setPage(currentPage + 1)}
        >
          Next
        </XBtnReact>
      </div>
    </div>
  );
};

export default MPaginationReact;
