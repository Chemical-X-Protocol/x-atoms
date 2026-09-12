import type { XSwitchProps } from './types';

export const computeSwitchClasses = (
  props: XSwitchProps,
  isOn: boolean,
  extraClass?: string
): string[] => {
  const isDisabled = Boolean(props.disabled);
  const classes: string[] = ['x-switch'];

  if (isOn) {
    classes.push('x-switch--on');
  }

  if (isDisabled) {
    classes.push('x-switch--disabled');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
