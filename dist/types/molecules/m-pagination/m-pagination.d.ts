import React from 'react';
import type { MPaginationProps } from './types.js';
export interface ReactPaginationProps extends MPaginationProps {
    onPageChange?: (page: number) => void;
}
export declare const MPaginationReact: React.FC<ReactPaginationProps>;
export default MPaginationReact;
