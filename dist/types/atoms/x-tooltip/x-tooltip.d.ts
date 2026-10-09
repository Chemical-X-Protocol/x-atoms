import React from 'react';
import type { XTooltipProps } from './types.js';
export interface ReactTooltipProps extends XTooltipProps {
    className?: string;
    children: React.ReactNode;
    tooltip?: React.ReactNode;
}
export declare const XTooltipReact: React.FC<ReactTooltipProps>;
export default XTooltipReact;
