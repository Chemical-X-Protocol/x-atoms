export interface MPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize?: number;
  totalItems?: number;
  maxVisiblePages?: number;
  showRange?: boolean;
}

export interface MPaginationEmits {
  (e: 'update:currentPage', page: number): void;
  (e: 'pageChange', page: number): void;
}
