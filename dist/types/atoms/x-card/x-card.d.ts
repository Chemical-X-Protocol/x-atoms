import React from 'react';
import type { XCardProps } from './types.js';
export interface ReactCardProps extends XCardProps {
    className?: string;
    children?: React.ReactNode;
    title?: React.ReactNode;
    actions?: React.ReactNode;
}
export declare const XCardReact: React.FC<ReactCardProps>;
export default XCardReact;
