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
  if (val === undefined || val === null) return '100%';
  if (typeof val === 'number') return `${val}px`;
  return val;
};
