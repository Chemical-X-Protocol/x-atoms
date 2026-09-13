import type { XListProps, XListVariant } from './types';

export const computeListClasses = (
  props: XListProps,
  extraClass?: string
): string[] => {
  const isGlass = props.variant === 'glass';
  const isNav = Boolean(props.nav);
  const isDisabled = Boolean(props.disabled);

  const classes: string[] = ['x-list'];

  if (isGlass) {
    classes.push('x-list--glass');
  }

  if (isNav) {
    classes.push('x-list--nav');
  }

  if (isDisabled) {
    classes.push('x-list--disabled');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const resolveVuetifyListVariant = (
  variant?: XListVariant
): Exclude<XListVariant, 'glass'> | undefined => {
  const isGlass = variant === 'glass';
  if (isGlass) {
    return 'flat';
  }
  return variant as Exclude<XListVariant, 'glass'> | undefined;
};
