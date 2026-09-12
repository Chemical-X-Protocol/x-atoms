import type { MEmptyStateProps } from './types';

export const computeEmptyStateClasses = (
  _props: MEmptyStateProps,
  extraClass?: string
): string[] => {
  const classes: string[] = ['m-empty-state'];
  if (extraClass) {
    classes.push(extraClass);
  }
  return classes;
};
