import React from 'react';
import type { XDialogProps } from './types.js';
export interface ReactDialogProps extends XDialogProps {
    className?: string;
    onUpdateModelValue?: (value: boolean) => void;
    title?: React.ReactNode;
    actions?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const XDialogReact: React.FC<ReactDialogProps>;
export default XDialogReact;
