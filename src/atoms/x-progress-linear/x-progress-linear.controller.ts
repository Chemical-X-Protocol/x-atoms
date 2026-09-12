import type { XProgressLinearProps } from './types';

export const clampProgress = (value?: number): number => {
  if (value === undefined || value === null) return 0;
  return Math.min(Math.max(value, 0), 100);
};

export const computeProgressClasses = (
  props: XProgressLinearProps,
  extraClass?: string
): string[] => {
  const isIndeterminate = Boolean(props.indeterminate);
  const isRounded = Boolean(props.rounded);
  const isStriped = Boolean(props.striped);

  const classes: string[] = ['x-progress-linear'];

  if (isIndeterminate) {
    classes.push('x-progress-linear--indeterminate');
  }

  if (isRounded) {
    classes.push('x-progress-linear--rounded');
  }

  if (isStriped) {
    classes.push('x-progress-linear--striped');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
