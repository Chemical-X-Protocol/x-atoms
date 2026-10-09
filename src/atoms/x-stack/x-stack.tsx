import React from 'react';
import type { XStackProps } from './types';
import { computeStackClasses } from './x-stack.controller';

export interface ReactStackProps extends XStackProps {
  className?: string;
  children?: React.ReactNode;
}

export const XStackReact: React.FC<ReactStackProps> = ({
  direction = 'column',
  gap = 'md',
  align = undefined,
  justify = undefined,
  wrap = false,
  tag: Element = 'div',
  className = '',
  children = null,
}) => {
  const resolvedClassNames = computeStackClasses({ direction, gap, align, justify, wrap }, className).join(' ');
  return <Element className={resolvedClassNames}>{children}</Element>;
};

export default XStackReact;
