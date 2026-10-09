export declare const computePageNumbers: (currentPage: number, totalPages: number, maxVisible?: number) => number[];
export declare const computeItemRange: (currentPage: number, pageSize?: number, totalItems?: number) => {
    start: number;
    end: number;
    total: number | undefined;
};
/** A page can be selected when it is in range and not already current. */
export declare const isSelectablePage: (page: number, currentPage: number, totalPages: number) => boolean;
