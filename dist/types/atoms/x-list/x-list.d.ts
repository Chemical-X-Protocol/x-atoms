import React from 'react';
import type { XListProps } from './types.js';
export interface ReactListProps extends XListProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const XListReact: React.FC<ReactListProps>;
export default XListReact;
