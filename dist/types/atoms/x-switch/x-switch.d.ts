import React from 'react';
import type { XSwitchProps } from './types.js';
export interface ReactSwitchProps extends XSwitchProps {
    className?: string;
    onChange?: (val: boolean) => void;
    children?: React.ReactNode;
}
export declare const XSwitchReact: React.FC<ReactSwitchProps>;
export default XSwitchReact;
