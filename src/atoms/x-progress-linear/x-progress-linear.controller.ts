import type { XProgressLinearProps } from './types';

export const clampProgress = (value?: number): number => {
  const isMissing = value === undefined || value === null;
  if (isMissing) return 0;
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

/** Numbers are pixels; strings pass through. */
export const resolveProgressHeight = (height?: string | number): string | undefined => {
  const isNumber = typeof height === 'number';
  return isNumber ? `${height}px` : height;
};

/** Track and bar sizing for the raw-HTML adapters. */
export const computeProgressStyles = (
  height: string | number | undefined,
  progressValue: number,
  indeterminate: boolean
): { track: Record<string, string>; bar: Record<string, string> } => {
  const resolvedHeight = resolveProgressHeight(height);
  const track: Record<string, string> = resolvedHeight ? { height: resolvedHeight } : {};
  const bar: Record<string, string> = indeterminate ? {} : { width: `${progressValue}%` };
  return { track, bar };
};
