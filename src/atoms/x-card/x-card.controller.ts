import type { XCardProps, XCardVariant } from './types';

export const computeCardClasses = (
  props: XCardProps,
  extraClass?: string
): string[] => {
  const isGlass = props.variant === 'glass';
  const isHover = Boolean(props.hover);
  const isLoading = Boolean(props.loading);
  const isDisabled = Boolean(props.disabled);

  const classes: string[] = ['x-card'];

  if (isGlass) {
    classes.push('x-card--glass');
  }

  if (isHover) {
    classes.push('x-card--hover');
  }

  if (isLoading) {
    classes.push('x-card--loading');
  }

  if (isDisabled) {
    classes.push('x-card--disabled');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const resolveVuetifyCardVariant = (
  variant?: XCardVariant
): Exclude<XCardVariant, 'glass'> => {
  const isGlass = variant === 'glass';
  if (isGlass) {
    return 'flat';
  }
  return (variant || 'elevated') as Exclude<XCardVariant, 'glass'>;
};
