import type { XStackProps } from './types';

/** Layout primitive classes. Gaps come from the shared spacing scale. */
export const computeStackClasses = (props: XStackProps, extraClass?: string): string[] => {
  const classes: string[] = [
    'x-stack',
    `x-stack--${props.direction ?? 'column'}`,
    `x-stack--gap-${props.gap ?? 'md'}`,
  ];
  const hasAlign = Boolean(props.align);
  const hasJustify = Boolean(props.justify);
  const isWrapping = Boolean(props.wrap);
  if (hasAlign) classes.push(`x-stack--align-${props.align}`);
  if (hasJustify) classes.push(`x-stack--justify-${props.justify}`);
  if (isWrapping) classes.push('x-stack--wrap');
  if (extraClass) classes.push(extraClass);
  return classes;
};
