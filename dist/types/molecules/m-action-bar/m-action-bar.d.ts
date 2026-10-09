import React from 'react';
import type { MActionBarProps } from './types.js';
export interface ReactActionBarProps extends MActionBarProps {
    className?: string;
    start?: React.ReactNode;
    children?: React.ReactNode;
    end?: React.ReactNode;
}
export declare const MActionBarReact: React.FC<ReactActionBarProps>;
export default MActionBarReact;
