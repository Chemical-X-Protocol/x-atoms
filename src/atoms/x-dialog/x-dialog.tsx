import React, { useEffect } from 'react';
import type { XDialogProps } from './types';
import { computeDialogClasses, computeDialogSurfaceVars, shouldDismissDialog } from './x-dialog.controller';
import { listen } from '../../core';

export interface ReactDialogProps extends XDialogProps {
  className?: string;
  onUpdateModelValue?: (value: boolean) => void;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export const XDialogReact: React.FC<ReactDialogProps> = ({
  modelValue = false,
  maxWidth = 600,
  width = undefined,
  persistent = false,
  scrollable = false,
  fullscreen = false,
  className = '',
  onUpdateModelValue = undefined,
  title = null,
  actions = null,
  children = null,
}) => {
  const isDismissible = shouldDismissDialog({ persistent });
  const requestClose = () => {
    if (isDismissible) onUpdateModelValue?.(false);
  };

  useEffect(() => {
    if (!modelValue) return undefined;
    return listen(globalThis.document, 'keydown', (event) => {
      const isEscape = (event as KeyboardEvent).key === 'Escape';
      if (isEscape) requestClose();
    });
  });

  if (!modelValue) return null;

  const resolvedClassNames = computeDialogClasses({ fullscreen, scrollable }, `x-dialog--native ${className}`.trim()).join(' ');
  const surfaceVars = computeDialogSurfaceVars({ maxWidth, width }) as React.CSSProperties;

  return (
    <div className={resolvedClassNames} role="presentation" onClick={requestClose}>
      <div
        className="x-dialog__surface"
        role="dialog"
        aria-modal="true"
        style={surfaceVars}
        onClick={(event) => event.stopPropagation()}
      >
        {title ? <div className="x-dialog__title">{title}</div> : null}
        <div className="x-dialog__content">{children}</div>
        {actions ? <div className="x-dialog__actions">{actions}</div> : null}
      </div>
    </div>
  );
};

export default XDialogReact;
