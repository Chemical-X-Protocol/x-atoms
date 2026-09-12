import React from 'react';
import type { XChipProps } from './types';
import { computeChipClasses } from './x-chip.controller';

export interface ReactChipProps extends XChipProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClose?: () => void;
  children?: React.ReactNode;
  prepend?: React.ReactNode;
}

export const XChipReact: React.FC<ReactChipProps> = ({
  variant = 'glass',
  color = undefined,
  size = 'default',
  closable = false,
  disabled = false,
  filter = false,
  className = '',
  onClick = undefined,
  onClose = undefined,
  children = null,
  prepend = null,
}) => {
  const resolvedClassNames = computeChipClasses(
    { variant, color, size, closable, disabled, filter },
    className
  ).join(' ');

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <div className={resolvedClassNames} onClick={onClick} role="status">
      {prepend ? <span className="x-chip__prepend">{prepend}</span> : null}
      {children ? <span className="x-chip__content">{children}</span> : null}
      {closable ? (
        <button
          type="button"
          className="x-chip__close"
          onClick={handleCloseClick}
          aria-label="Close chip"
        >
          &times;
        </button>
      ) : null}
    </div>
  );
};

export default XChipReact;
