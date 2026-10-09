import React from 'react';
import type { XTextareaProps } from './types.js';
export interface ReactTextareaProps extends XTextareaProps {
    className?: string;
    onChange?: (value: string) => void;
}
export declare const XTextareaReact: React.FC<ReactTextareaProps>;
export default XTextareaReact;
