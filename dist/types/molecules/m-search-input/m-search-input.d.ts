import React from 'react';
import type { MSearchInputProps } from './types.js';
export interface ReactSearchInputProps extends MSearchInputProps {
    className?: string;
    onSearch?: (val: string) => void;
    onClear?: () => void;
}
export declare const MSearchInputReact: React.FC<ReactSearchInputProps>;
export default MSearchInputReact;
