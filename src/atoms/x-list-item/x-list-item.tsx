import React from 'react';
import type { XListItemProps } from './types';
import { computeListItemClasses } from './x-list-item.controller';

export interface ReactListItemProps extends XListItemProps {
  className?: string;
  children?: React.ReactNode;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}

export const XListItemReact: React.FC<ReactListItemProps> = ({
  title = undefined,
  subtitle = undefined,
  value = undefined,
  active = false,
  disabled = false,
  color = undefined,
  density = undefined,
  lines = undefined,
  variant = undefined,
  rounded = undefined,
  ripple = true,
  className = '',
  children = null,
  prepend = null,
  append = null,
}) => {
  const resolvedClassNames = computeListItemClasses(
    { title, subtitle, value, active, disabled, color, density, lines, variant, rounded, ripple },
    className
  ).join(' ');

  return (
    <div className={resolvedClassNames}>
      {prepend ? <div className="x-list-item__prepend">{prepend}</div> : null}
      <div className="x-list-item__content">
        {title ? <div className="x-list-item__title">{title}</div> : null}
        {subtitle ? <div className="x-list-item__subtitle">{subtitle}</div> : null}
        {children}
      </div>
      {append ? <div className="x-list-item__append">{append}</div> : null}
    </div>
  );
};

export default XListItemReact;
