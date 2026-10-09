import type { XTextareaProps } from './types';

export const computeTextareaClasses = (
  props: XTextareaProps,
  isFocused: boolean,
  extraClass?: string
): string[] => {
  const classes: string[] = ['x-textarea'];
  if (isFocused) classes.push('x-textarea--focused');
  if (props.disabled) classes.push('x-textarea--disabled');
  if (props.readonly) classes.push('x-textarea--readonly');
  if (props.autoGrow) classes.push('x-textarea--auto-grow');
  if (extraClass) classes.push(extraClass);
  return classes;
};

/** "12 / 280" when a maxlength is set, else null. */
export const formatCharacterCount = (value: string | undefined, maxlength?: number): string | null => {
  const hasLimit = typeof maxlength === 'number';
  return hasLimit ? `${(value ?? '').length} / ${maxlength}` : null;
};
