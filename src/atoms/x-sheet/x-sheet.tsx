import React from 'react';
import type { XSheetProps } from './types';
import { computeSheetClasses } from './x-sheet.controller';

export interface ReactSheetProps extends XSheetProps {
  className?: string;
  children?: React.ReactNode;
}

export const XSheetReact: React.FC<ReactSheetProps> = ({
  color = undefined,
  elevation = undefined,
  rounded = undefined,
  border = undefined,
  transparent = false,
  className = '',
  children = null,
}) => {
  const resolvedClassNames = computeSheetClasses(
    { transparent, color, elevation, rounded, border },
    className
  ).join(' ');

  return <div className={resolvedClassNames}>{children}</div>;
};

export default XSheetReact;
