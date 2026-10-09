import React from 'react';
import type { XTextProps } from './types.js';
export interface ReactTextProps extends XTextProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const XTextReact: React.FC<ReactTextProps>;
export default XTextReact;
