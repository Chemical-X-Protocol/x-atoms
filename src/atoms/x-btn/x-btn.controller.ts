import type { XBtnProps, XBtnVariant } from './types';

export const computeBtnClasses = (
  props: XBtnProps,
  extraClass?: string
): string[] => {
  const isGlass = props.variant === 'glass';
  const isBlock = Boolean(props.block);
  const isLoading = Boolean(props.loading);
  const isDisabled = Boolean(props.disabled);

  const classes: string[] = ['x-btn'];

  if (isGlass) {
    classes.push('x-btn--glass');
  }

  if (isBlock) {
    classes.push('x-btn--block');
  }

  if (isLoading) {
    classes.push('x-btn--loading');
  }

  if (isDisabled) {
    classes.push('x-btn--disabled');
  }

  if (props.size && props.size !== 'default') {
    classes.push(`x-btn--${props.size}`);
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const resolveVuetifyVariant = (
  variant?: XBtnVariant
): Exclude<XBtnVariant, 'glass'> => {
  const isGlass = variant === 'glass';
  if (isGlass) {
    return 'flat';
  }
  return (variant || 'elevated') as Exclude<XBtnVariant, 'glass'>;
};
