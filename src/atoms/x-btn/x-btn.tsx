import React from 'react';
import type { XBtnProps } from './types';
import { computeBtnClasses } from './x-btn.controller';

export interface ReactBtnProps extends XBtnProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}

export const XBtnReact: React.FC<ReactBtnProps> = ({
  variant = 'glass',
  color = undefined,
  size = 'default',
  block = false,
  loading = false,
  disabled = false,
  icon = false,
  className = '',
  onClick = undefined,
  children = null,
  prepend = null,
  append = null,
}) => {
  const isButtonDisabled = disabled || loading;
  const resolvedClassNames = computeBtnClasses(
    { variant, color, size, block, loading, disabled, icon },
    className
  ).join(' ');

  return (
    <button
      type="button"
      className={resolvedClassNames}
      disabled={isButtonDisabled}
      onClick={onClick}
    >
      {prepend ? <span className="x-btn__prepend">{prepend}</span> : null}
      {children ? <span className="x-btn__content">{children}</span> : null}
      {append ? <span className="x-btn__append">{append}</span> : null}
    </button>
  );
};

export default XBtnReact;
