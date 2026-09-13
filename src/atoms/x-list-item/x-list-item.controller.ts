import type { XListItemProps, XListItemVariant } from './types';

export const computeListItemClasses = (
  props: XListItemProps,
  extraClass?: string
): string[] => {
  const isGlass = props.variant === 'glass';
  const isActive = Boolean(props.active);
  const isDisabled = Boolean(props.disabled);

  const classes: string[] = ['x-list-item'];

  if (isGlass) {
    classes.push('x-list-item--glass');
  }

  if (isActive) {
    classes.push('x-list-item--active');
  }

  if (isDisabled) {
    classes.push('x-list-item--disabled');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const resolveVuetifyListItemVariant = (
  variant?: XListItemVariant
): Exclude<XListItemVariant, 'glass'> | undefined => {
  const isGlass = variant === 'glass';
  if (isGlass) {
    return 'flat';
  }
  return variant as Exclude<XListItemVariant, 'glass'> | undefined;
};
