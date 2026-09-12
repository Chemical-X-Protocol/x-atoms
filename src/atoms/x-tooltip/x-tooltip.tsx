import React, { useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  if (disabled) {
    return <>{children}</>;
  }

  const resolvedClassNames = computeTooltipClasses(
    { location },
    className
  ).join(' ');

  return (
    <div
      className="x-tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <div
        className={resolvedClassNames}
        role="tooltip"
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
        }}
      >
        {tooltip || text}
      </div>
    </div>
  );
};

export default XTooltipReact;
