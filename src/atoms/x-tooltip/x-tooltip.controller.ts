import type { XTooltipProps } from './types';

export const computeTooltipClasses = (
  props: XTooltipProps,
  extraClass?: string
): string[] => {
  const location = props.location || 'top';
  const classes: string[] = ['x-tooltip', `x-tooltip--${location}`];

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
