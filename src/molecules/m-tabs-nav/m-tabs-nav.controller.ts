import type { MTabsNavProps } from './types';

export const computeTabsNavClasses = (
  props: MTabsNavProps,
  extraClass?: string
): string[] => {
  const isGrow = Boolean(props.grow);
  const align = props.align || 'start';

  const classes: string[] = ['m-tabs-nav', `m-tabs-nav--align-${align}`];

  if (isGrow) {
    classes.push('m-tabs-nav--grow');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
