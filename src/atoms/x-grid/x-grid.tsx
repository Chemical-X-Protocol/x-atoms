import React from 'react';
import type { XGridProps } from './types';
import { computeGridClasses, computeGridVars } from './x-grid.controller';

export interface ReactGridProps extends XGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const XGridReact: React.FC<ReactGridProps> = ({
  columns = 1,
  minItemWidth = undefined,
  gap = 'md',
  align = undefined,
  tag: Element = 'div',
  className = '',
  children = null,
}) => {
  const resolvedClassNames = computeGridClasses({ columns, minItemWidth, gap, align }, className).join(' ');
  const gridVars = computeGridVars({ minItemWidth }) as React.CSSProperties;
  return <Element className={resolvedClassNames} style={gridVars}>{children}</Element>;
};

export default XGridReact;
