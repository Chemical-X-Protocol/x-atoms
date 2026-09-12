import type { XSheetProps } from './types';

export const computeSheetClasses = (
  props: XSheetProps,
  extraClass?: string
): string[] => {
  const isTransparent = Boolean(props.transparent);
  const classes: string[] = ['x-sheet'];

  if (isTransparent) {
    classes.push('x-sheet--transparent');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
