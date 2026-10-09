import React from 'react';
import type { XAvatarProps } from './types.js';
export interface ReactAvatarProps extends XAvatarProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const XAvatarReact: React.FC<ReactAvatarProps>;
export default XAvatarReact;
