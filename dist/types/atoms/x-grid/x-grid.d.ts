import React from 'react';
import type { XGridProps } from './types.js';
export interface ReactGridProps extends XGridProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const XGridReact: React.FC<ReactGridProps>;
export default XGridReact;
