import React from 'react';
import type { XDividerProps } from './types';
import { computeDividerClasses } from './x-divider.controller';

export interface ReactDividerProps extends XDividerProps {
  className?: string;
}

export const XDividerReact: React.FC<ReactDividerProps> = ({
  vertical = false,
  inset = false,
  className = '',
}) => {
  const resolvedClassNames = computeDividerClasses(
    { vertical, inset },
    className
  ).join(' ');

  return (
    <hr
      className={resolvedClassNames}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
    />
  );
};

export default XDividerReact;
