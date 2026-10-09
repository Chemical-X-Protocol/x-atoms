export declare const computePageNumbers: (currentPage: number, totalPages: number, maxVisible?: number) => number[];
export declare const computeItemRange: (currentPage: number, pageSize?: number, totalItems?: number) => {
    start: number;
    end: number;
    total: number;
};
