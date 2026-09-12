import React from 'react';
import type { MConfirmDialogProps } from './types';
import { resolveDialogButtonLabels } from './m-confirm-dialog.controller';
import XBtnReact from '../../atoms/x-btn/x-btn';

export interface ReactConfirmDialogProps extends MConfirmDialogProps {
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const MConfirmDialogReact: React.FC<ReactConfirmDialogProps> = ({
  modelValue = false,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmColor = 'primary',
  loading = false,
  onConfirm = undefined,
  onCancel = undefined,
}) => {
  if (!modelValue) return null;

  const buttonConfig = resolveDialogButtonLabels({
    confirmText,
    cancelText,
    confirmColor,
  });

  return (
    <div className="x-dialog" role="dialog" aria-modal="true">
      <div className="x-dialog__surface">
        <div className="m-confirm-dialog__body">
          <h3 className="m-confirm-dialog__title">{title}</h3>
          <p className="m-confirm-dialog__message">{message}</p>
        </div>
        <div className="x-dialog__actions">
          <XBtnReact
            variant="text"
            disabled={loading}
            onClick={onCancel}
          >
            {buttonConfig.cancelText}
          </XBtnReact>
          <XBtnReact
            variant="elevated"
            color={buttonConfig.confirmColor}
            loading={loading}
            onClick={onConfirm}
          >
            {buttonConfig.confirmText}
          </XBtnReact>
        </div>
      </div>
    </div>
  );
};

export default MConfirmDialogReact;
