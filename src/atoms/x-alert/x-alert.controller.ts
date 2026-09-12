import type { XAlertProps } from './types';

export const computeAlertClasses = (
  props: XAlertProps,
  extraClass?: string
): string[] => {
  const type = props.type || 'info';
  const variant = props.variant || 'glass';

  const classes: string[] = ['x-alert', `x-alert--${type}`, `x-alert--${variant}`];

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
