import React from 'react';
import type { MEmptyStateProps } from './types.js';
export interface ReactEmptyStateProps extends MEmptyStateProps {
    className?: string;
    onClickAction?: () => void;
    iconElement?: React.ReactNode;
    actionElement?: React.ReactNode;
}
export declare const MEmptyStateReact: React.FC<ReactEmptyStateProps>;
export default MEmptyStateReact;
