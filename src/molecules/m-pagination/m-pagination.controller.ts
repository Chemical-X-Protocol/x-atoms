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
  if (!pageSize || !totalItems) {
    return { start: 0, end: 0, total: 0 };
  }
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);
  return { start, end, total: totalItems };
};
