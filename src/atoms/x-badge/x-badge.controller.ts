import type { XBadgeProps } from './types';

export const resolveBadgeDisplay = (
  content?: string | number,
  max?: number
): string => {
  if (content === undefined || content === null || content === '') return '';
  if (typeof content === 'number' && max && content > max) {
    return `${max}+`;
  }
  return String(content);
};

export const computeBadgeClasses = (
  props: XBadgeProps,
  extraClass?: string
): string[] => {
  const isDot = Boolean(props.dot);
  const isInline = Boolean(props.inline);
  const isFloating = Boolean(props.floating);

  const classes: string[] = ['x-badge'];

  if (isDot) {
    classes.push('x-badge--dot');
  }

  if (isInline) {
    classes.push('x-badge--inline');
  }

  if (isFloating) {
    classes.push('x-badge--floating');
  }

  if (props.color) {
    classes.push(`x-badge--color-${props.color}`);
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
