import React from 'react';
import type { XSkeletonProps } from './types';
import { computeSkeletonClasses, formatDimension } from './x-skeleton.controller';

export interface ReactSkeletonProps extends XSkeletonProps {
  className?: string;
}

export const XSkeletonReact: React.FC<ReactSkeletonProps> = ({
  shape = 'rounded',
  animation = 'shimmer',
  width = '100%',
  height = '1rem',
  delay = '0s',
  className = '',
}) => {
  const resolvedClassNames = computeSkeletonClasses(
    { shape, animation },
    className
  ).join(' ');

  const style: React.CSSProperties & { [key: string]: string | number } = {
    width: formatDimension(width),
    height: formatDimension(height),
    '--x-skeleton-delay': delay,
  };

  return <div className={resolvedClassNames} style={style} />;
};

export default XSkeletonReact;
