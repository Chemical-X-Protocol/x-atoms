import React from 'react';
import type { XListProps } from './types';
import { computeListClasses } from './x-list.controller';

export interface ReactListProps extends XListProps {
  className?: string;
  children?: React.ReactNode;
}

export const XListReact: React.FC<ReactListProps> = ({
  density = 'default',
  lines = 'one',
  nav = false,
  color = undefined,
  variant = undefined,
  disabled = false,
  className = '',
  children = null,
}) => {
  const resolvedClassNames = computeListClasses(
    { density, lines, nav, color, variant, disabled },
    className
  ).join(' ');

  return <div className={resolvedClassNames}>{children}</div>;
};

export default XListReact;
