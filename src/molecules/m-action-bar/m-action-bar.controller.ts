import type { MActionBarProps } from './types';

export const computeActionBarClasses = (
  props: MActionBarProps,
  extraClass?: string
): string[] => {
  const position = props.position || 'static';
  const isBordered = Boolean(props.bordered !== false);

  const classes: string[] = ['m-action-bar', `m-action-bar--${position}`];

  if (isBordered) {
    classes.push('m-action-bar--bordered');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
