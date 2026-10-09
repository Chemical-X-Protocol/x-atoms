import React from 'react';
import type { XChipProps } from './types.js';
export interface ReactChipProps extends XChipProps {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onClose?: () => void;
    children?: React.ReactNode;
    prepend?: React.ReactNode;
}
export declare const XChipReact: React.FC<ReactChipProps>;
export default XChipReact;
