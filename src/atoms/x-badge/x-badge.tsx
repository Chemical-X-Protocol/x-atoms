import React from 'react';
import type { XBadgeProps } from './types';
import { resolveBadgeDisplay, computeBadgeClasses } from './x-badge.controller';

export interface ReactBadgeProps extends XBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

export const XBadgeReact: React.FC<ReactBadgeProps> = ({
  content = undefined,
  color = 'primary',
  dot = false,
  inline = false,
  max = 99,
  floating = true,
  className = '',
  children = null,
}) => {
  const displayText = resolveBadgeDisplay(content, max);
  const resolvedClassNames = computeBadgeClasses(
    { dot, inline, floating, color },
    className
  ).join(' ');

  if (children) {
    return (
      <div className="x-badge-wrapper">
        {children}
        <span className={resolvedClassNames}>{!dot ? displayText : null}</span>
      </div>
    );
  }

  return <span className={resolvedClassNames}>{!dot ? displayText : null}</span>;
};

export default XBadgeReact;
