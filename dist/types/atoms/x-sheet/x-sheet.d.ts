import React from 'react';
import type { XSheetProps } from './types.js';
export interface ReactSheetProps extends XSheetProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const XSheetReact: React.FC<ReactSheetProps>;
export default XSheetReact;
