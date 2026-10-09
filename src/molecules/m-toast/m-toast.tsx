import React, { useEffect } from 'react';
import { after } from '../../core';
import { useLatest } from '../../adapters/react/useLatest';
import type { MToastProps } from './types';
import { computeToastClasses } from './m-toast.controller';
import XBtnReact from '../../atoms/x-btn/x-btn';

export interface ReactToastProps extends MToastProps {
  className?: string;
  onClickAction?: () => void;
  onClose?: () => void;
}

export const MToastReact: React.FC<ReactToastProps> = ({
  modelValue = false,
  message,
  type = 'info',
  duration = 4000,
  actionText = undefined,
  className = '',
  onClickAction = undefined,
  onClose = undefined,
}) => {
  const latestOnClose = useLatest(onClose);

  useEffect(() => {
    const shouldAutoDismiss = modelValue && duration > 0;
    return shouldAutoDismiss ? after(duration, () => latestOnClose.current?.()) : undefined;
  }, [modelValue, duration, latestOnClose]);

  const resolvedClassNames = computeToastClasses(
    { message, type },
    modelValue,
    className
  ).join(' ');

  return (
    <div className={resolvedClassNames} role="status">
      <span className="m-toast__message">{message}</span>

      <div className="m-toast__actions">
        {actionText ? (
          <XBtnReact
            variant="text"
            size="small"
            color="primary"
            onClick={onClickAction}
          >
            {actionText}
          </XBtnReact>
        ) : null}

        <XBtnReact
          variant="plain"
          size="x-small"
          icon={true}
          onClick={onClose}
        >
          &times;
        </XBtnReact>
      </div>
    </div>
  );
};

export default MToastReact;
