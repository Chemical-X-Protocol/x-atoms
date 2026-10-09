import React from 'react';
import type { XCheckboxProps } from './types.js';
export interface ReactCheckboxProps extends XCheckboxProps {
    className?: string;
    onChange?: (val: boolean) => void;
    children?: React.ReactNode;
}
export declare const XCheckboxReact: React.FC<ReactCheckboxProps>;
export default XCheckboxReact;
