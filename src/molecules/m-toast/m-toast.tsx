import React, { useEffect, useRef } from 'react';
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
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (modelValue && duration > 0) {
      timerRef.current = setTimeout(() => {
        onClose?.();
      }, duration);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [modelValue, duration, onClose]);

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
