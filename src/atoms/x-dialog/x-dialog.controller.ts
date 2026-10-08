import type { XDialogProps } from './types';

export const computeDialogClasses = (
  props: XDialogProps,
  extraClass?: string
): string[] => {
  const isFullscreen = Boolean(props.fullscreen);
  const classes: string[] = ['x-dialog'];

  if (isFullscreen) {
    classes.push('x-dialog--fullscreen');
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};
