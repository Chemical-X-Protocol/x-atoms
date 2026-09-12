import type { XAvatarProps } from './types';

export const computeAvatarClasses = (
  props: XAvatarProps,
  extraClass?: string
): string[] => {
  const isBordered = Boolean(props.bordered);
  const classes: string[] = ['x-avatar'];

  if (isBordered) {
    classes.push('x-avatar--bordered');
  }

  if (typeof props.size === 'string') {
    classes.push(`x-avatar--${props.size}`);
  }

  if (props.status) {
    classes.push(`x-avatar--status-${props.status}`);
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const getInitials = (text?: string): string => {
  if (!text) return '';
  const trimmed = text.trim();
  if (!trimmed) return '';
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return trimmed.slice(0, 2).toUpperCase();
};
