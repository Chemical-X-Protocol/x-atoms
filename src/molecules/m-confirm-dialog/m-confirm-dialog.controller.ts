import type { MConfirmDialogProps } from './types';

export const resolveDialogButtonLabels = (props: MConfirmDialogProps) => {
  const confirmText = props.confirmText || 'Confirm';
  const cancelText = props.cancelText || 'Cancel';
  const confirmColor = props.confirmColor || 'primary';

  return {
    confirmText,
    cancelText,
    confirmColor,
  };
};
