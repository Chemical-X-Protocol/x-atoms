import type { MPaginationProps } from './types';

export const computePageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisible = 5
): number[] => {
  const pages: number[] = [];
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
};

export const computeItemRange = (
  currentPage: number,
  pageSize?: number,
  totalItems?: number
) => {
  const hasRange = Boolean(pageSize) && Boolean(totalItems);
  if (!hasRange) {
    return { start: 0, end: 0, total: 0 };
  }
  const start = (currentPage - 1) * (pageSize as number) + 1;
  const end = Math.min(currentPage * (pageSize as number), totalItems as number);
  return { start, end, total: totalItems };
};

/** A page can be selected when it is in range and not already current. */
export const isSelectablePage = (page: number, currentPage: number, totalPages: number): boolean => {
  const isInRange = page >= 1 && page <= totalPages;
  return isInRange && page !== currentPage;
};
