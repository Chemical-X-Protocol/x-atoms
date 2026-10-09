import React from 'react';
import type { XListItemProps } from './types.js';
export interface ReactListItemProps extends XListItemProps {
    className?: string;
    children?: React.ReactNode;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
}
export declare const XListItemReact: React.FC<ReactListItemProps>;
export default XListItemReact;
