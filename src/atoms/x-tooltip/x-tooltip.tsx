import React from 'react';
import type { XTooltipProps } from './types';
import { computeTooltipClasses } from './x-tooltip.controller';

export interface ReactTooltipProps extends XTooltipProps {
  className?: string;
  children: React.ReactNode;
  tooltip?: React.ReactNode;
}

export const XTooltipReact: React.FC<ReactTooltipProps> = ({
  text = undefined,
  location = 'top',
  disabled = false,
  className = '',
  children,
  tooltip = null,
}) => {
  if (disabled) {
    return <>{children}</>;
  }

  const resolvedClassNames = computeTooltipClasses(
    { location },
    className
  ).join(' ');

  return (
    // Visibility comes from .x-tooltip-wrapper:hover / :focus-within in glass-theme.
    <div className="x-tooltip-wrapper">
      {children}
      <div
        className={resolvedClassNames}
        role="tooltip"
      >
        {tooltip || text}
      </div>
    </div>
  );
};

export default XTooltipReact;
