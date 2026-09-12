import type { MToastProps } from './types';

export const computeToastClasses = (
  props: MToastProps,
  isOpen: boolean,
  extraClass?: string
): string[] => {
  const type = props.type || 'info';
  const classes: string[] = ['m-toast', `m-toast--${type}`];

  if (isOpen) {
    classes.push('m-toast--open');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
