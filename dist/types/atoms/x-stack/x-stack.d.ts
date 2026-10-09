import React from 'react';
import type { XStackProps } from './types.js';
export interface ReactStackProps extends XStackProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const XStackReact: React.FC<ReactStackProps>;
export default XStackReact;
