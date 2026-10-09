import React from 'react';
import type { XProgressLinearProps } from './types';
import { clampProgress, computeProgressClasses, computeProgressStyles } from './x-progress-linear.controller';

export interface ReactProgressLinearProps extends XProgressLinearProps {
  className?: string;
}

export const XProgressLinearReact: React.FC<ReactProgressLinearProps> = ({
  modelValue = 0,
  indeterminate = false,
  height = 4,
  rounded = true,
  striped = false,
  className = '',
}) => {
  const progressValue = clampProgress(modelValue);
  const resolvedClassNames = computeProgressClasses(
    { indeterminate, rounded, striped },
    className
  ).join(' ');

  const styles = computeProgressStyles(height, progressValue, indeterminate);

  return (
    <div
      className={resolvedClassNames}
      style={styles.track}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : progressValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="x-progress-linear__bar" style={styles.bar} />
    </div>
  );
};

export default XProgressLinearReact;
