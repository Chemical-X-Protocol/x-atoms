import React from 'react';
import type { XBtnProps } from './types.js';
export interface ReactBtnProps extends XBtnProps {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
}
export declare const XBtnReact: React.FC<ReactBtnProps>;
export default XBtnReact;
