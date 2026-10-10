import type { XChipProps, XChipVariant } from './types';

export const computeChipClasses = (
  props: XChipProps,
  extraClass?: string
): string[] => {
  const isGlass = props.variant === 'glass';
  const isDisabled = Boolean(props.disabled);

  const classes: string[] = ['x-chip'];

  if (isGlass) {
    classes.push('x-chip--glass');
  }

  if (isDisabled) {
    classes.push('x-chip--disabled');
  }

  const hasCustomSize = Boolean(props.size) && props.size !== 'default';
  if (hasCustomSize) {
    classes.push(`x-chip--${props.size}`);
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const resolveVuetifyChipVariant = (
  variant?: XChipVariant
): Exclude<XChipVariant, 'glass'> => {
  const isGlass = variant === 'glass';
  if (isGlass) {
    return 'flat';
  }
  return (variant || 'flat') as Exclude<XChipVariant, 'glass'>;
};
