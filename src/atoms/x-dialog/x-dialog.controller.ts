import type { XDialogProps } from './types';

export const computeDialogClasses = (
  props: XDialogProps,
  extraClass?: string
): string[] => {
  const isFullscreen = Boolean(props.fullscreen);
  const isScrollable = Boolean(props.scrollable);
  const classes: string[] = ['x-dialog'];

  if (isFullscreen) {
    classes.push('x-dialog--fullscreen');
  }

  if (isScrollable) {
    classes.push('x-dialog--scrollable');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

/** Numbers are pixels; strings pass through (e.g. '80vw'). */
export const toCssLength = (value: string | number | undefined): string | undefined => {
  const isNumber = typeof value === 'number';
  return isNumber ? `${value}px` : value;
};

/** CSS custom properties consumed by `.x-dialog__surface` in the raw-HTML adapters. */
export const computeDialogSurfaceVars = (props: XDialogProps): Record<string, string> => {
  const vars: Record<string, string> = {};
  const maxWidth = toCssLength(props.maxWidth);
  const width = toCssLength(props.width);
  if (maxWidth) vars['--x-dialog-max-width'] = maxWidth;
  if (width) vars['--x-dialog-width'] = width;
  return vars;
};

/** A persistent dialog ignores Escape and backdrop clicks. */
export const shouldDismissDialog = (props: XDialogProps): boolean => !props.persistent;
