import React from 'react';
import type { XBadgeProps } from './types.js';
export interface ReactBadgeProps extends XBadgeProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const XBadgeReact: React.FC<ReactBadgeProps>;
export default XBadgeReact;
