import React from 'react';
import type { XAlertProps } from './types';
import { computeAlertClasses } from './x-alert.controller';

export interface ReactAlertProps extends XAlertProps {
  className?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const XAlertReact: React.FC<ReactAlertProps> = ({
  type = 'info',
  title = undefined,
  text = undefined,
  closable = false,
  variant = 'glass',
  className = '',
  onClose = undefined,
  children = null,
  icon = null,
}) => {
  const resolvedClassNames = computeAlertClasses(
    { type, variant },
    className
  ).join(' ');

  return (
    <div className={resolvedClassNames} role="alert">
      {icon ? <div className="x-alert__icon">{icon}</div> : null}

      <div className="x-alert__content">
        {title ? <div className="x-alert__title">{title}</div> : null}
        {text ? (
          <div className="x-alert__text">{text}</div>
        ) : (
          <div className="x-alert__text">{children}</div>
        )}
      </div>

      {closable ? (
        <button
          type="button"
          className="x-alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          &times;
        </button>
      ) : null}
    </div>
  );
};

export default XAlertReact;
