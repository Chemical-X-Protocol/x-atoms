import React from 'react';
import type { MToastProps } from './types.js';
export interface ReactToastProps extends MToastProps {
    className?: string;
    onClickAction?: () => void;
    onClose?: () => void;
}
export declare const MToastReact: React.FC<ReactToastProps>;
export default MToastReact;
