import type { XNavDrawerProps } from './types';

/** A permanent drawer is always open; otherwise `modelValue` decides. */
export const isDrawerOpen = (props: XNavDrawerProps): boolean => {
  return Boolean(props.permanent) || props.modelValue !== false;
};

export const computeNavDrawerClasses = (props: XNavDrawerProps, extraClass?: string): string[] => {
  const classes: string[] = ['x-nav-drawer', `x-nav-drawer--${props.location ?? 'start'}`];
  if (!isDrawerOpen(props)) classes.push('x-nav-drawer--closed');
  if (props.rail) classes.push('x-nav-drawer--rail');
  if (props.temporary) classes.push('x-nav-drawer--temporary');
  if (props.floating) classes.push('x-nav-drawer--floating');
  if (extraClass) classes.push(extraClass);
  return classes;
};

/** Width variable for the raw-HTML adapters; the rail width wins when `rail` is set. */
export const computeNavDrawerVars = (props: XNavDrawerProps): Record<string, string> => {
  const width = props.rail ? 56 : props.width ?? 256;
  return { '--x-nav-drawer-width': `${width}px` };
};

/** The scrim shows only for an open temporary drawer. */
export const hasDrawerScrim = (props: XNavDrawerProps): boolean => {
  return Boolean(props.temporary) && isDrawerOpen(props);
};
