import React from 'react';
import type { XTextProps } from './types';
import { computeTextClasses, resolveTextTag } from './x-text.controller';

export interface ReactTextProps extends XTextProps {
  className?: string;
  children?: React.ReactNode;
}

export const XTextReact: React.FC<ReactTextProps> = ({
  tag = undefined,
  variant = 'body',
  tone = undefined,
  weight = undefined,
  align = undefined,
  truncate = false,
  className = '',
  children = null,
}) => {
  const Element = resolveTextTag({ tag, variant });
  const resolvedClassNames = computeTextClasses({ variant, tone, weight, align, truncate }, className).join(' ');
  return <Element className={resolvedClassNames}>{children}</Element>;
};

export default XTextReact;
