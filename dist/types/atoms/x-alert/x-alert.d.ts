import React from 'react';
import type { XAlertProps } from './types.js';
export interface ReactAlertProps extends XAlertProps {
    className?: string;
    onClose?: () => void;
    children?: React.ReactNode;
    icon?: React.ReactNode;
}
export declare const XAlertReact: React.FC<ReactAlertProps>;
export default XAlertReact;
