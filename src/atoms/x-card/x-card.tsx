import React from 'react';
import type { XCardProps } from './types';
import { computeCardClasses } from './x-card.controller';

export interface ReactCardProps extends XCardProps {
  className?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  actions?: React.ReactNode;
}

export const XCardReact: React.FC<ReactCardProps> = ({
  variant = 'glass',
  color = undefined,
  loading = false,
  disabled = false,
  hover = false,
  className = '',
  children = null,
  title = null,
  actions = null,
}) => {
  const resolvedClassNames = computeCardClasses(
    { variant, color, loading, disabled, hover },
    className
  ).join(' ');

  return (
    <div className={resolvedClassNames}>
      {title ? <div className="x-card__title">{title}</div> : null}
      {children ? <div className="x-card__content">{children}</div> : null}
      {actions ? <div className="x-card__actions">{actions}</div> : null}
    </div>
  );
};

export default XCardReact;
