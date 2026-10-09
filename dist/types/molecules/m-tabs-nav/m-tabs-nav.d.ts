import React from 'react';
import type { MTabsNavProps } from './types.js';
export interface ReactTabsNavProps extends MTabsNavProps {
    className?: string;
    onTabChange?: (tabId: string) => void;
}
export declare const MTabsNavReact: React.FC<ReactTabsNavProps>;
export default MTabsNavReact;
