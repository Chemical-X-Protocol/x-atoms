import React from 'react';
import type { MConfirmDialogProps } from './types.js';
export interface ReactConfirmDialogProps extends MConfirmDialogProps {
    onConfirm?: () => void;
    onCancel?: () => void;
}
export declare const MConfirmDialogReact: React.FC<ReactConfirmDialogProps>;
export default MConfirmDialogReact;
