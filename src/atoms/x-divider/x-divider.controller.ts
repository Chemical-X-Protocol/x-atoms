import type { XDividerProps } from './types';

export const computeDividerClasses = (
  props: XDividerProps,
  extraClass?: string
): string[] => {
  const isVertical = Boolean(props.vertical);
  const isInset = Boolean(props.inset);

  const classes: string[] = ['x-divider'];

  if (isVertical) {
    classes.push('x-divider--vertical');
  } else {
    classes.push('x-divider--horizontal');
  }

  if (isInset) {
    classes.push('x-divider--inset');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
