import type { XSkeletonProps } from './types';

export const computeSkeletonClasses = (
  props: XSkeletonProps,
  extraClass?: string
): string[] => {
  const shape = props.shape || 'rounded';
  const animation = props.animation || 'shimmer';

  const classes: string[] = ['x-skeleton', `x-skeleton--${shape}`, `x-skeleton--${animation}`];

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const formatDimension = (val?: string | number): string => {
  const isMissing = val === undefined || val === null;
  if (isMissing) return '100%';
  const isPixels = typeof val === 'number';
  return isPixels ? `${val}px` : val;
};
