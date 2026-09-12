import type { XCheckboxProps } from './types';

export const computeCheckboxClasses = (
  props: XCheckboxProps,
  isChecked: boolean,
  extraClass?: string
): string[] => {
  const isDisabled = Boolean(props.disabled);
  const isIndeterminate = Boolean(props.indeterminate);

  const classes: string[] = ['x-checkbox'];

  if (isChecked) {
    classes.push('x-checkbox--checked');
  }

  if (isIndeterminate) {
    classes.push('x-checkbox--indeterminate');
  }

  if (isDisabled) {
    classes.push('x-checkbox--disabled');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
