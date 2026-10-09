import React from 'react';
import type { XTextFieldProps } from './types.js';
export interface ReactTextFieldProps extends XTextFieldProps {
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    prependInner?: React.ReactNode;
    appendInner?: React.ReactNode;
}
export declare const XTextFieldReact: React.FC<ReactTextFieldProps>;
export default XTextFieldReact;
