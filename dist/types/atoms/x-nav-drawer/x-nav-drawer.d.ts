import React from 'react';
import type { XNavDrawerProps } from './types.js';
export interface ReactNavDrawerProps extends XNavDrawerProps {
    className?: string;
    onUpdateModelValue?: (value: boolean) => void;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const XNavDrawerReact: React.FC<ReactNavDrawerProps>;
export default XNavDrawerReact;
