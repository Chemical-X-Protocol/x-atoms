import type { XTextFieldProps } from './types';

export const computeTextFieldClasses = (
  props: XTextFieldProps,
  isFocused: boolean,
  extraClass?: string
): string[] => {
  const isDisabled = Boolean(props.disabled);
  const isReadonly = Boolean(props.readonly);

  const classes: string[] = ['x-text-field'];

  if (isFocused) {
    classes.push('x-text-field--focused');
  }

  if (isDisabled) {
    classes.push('x-text-field--disabled');
  }

  if (isReadonly) {
    classes.push('x-text-field--readonly');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
