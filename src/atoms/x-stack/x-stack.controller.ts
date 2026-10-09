import type { XStackProps } from './types';

/** Layout primitive classes. Gaps come from the shared spacing scale. */
export const computeStackClasses = (props: XStackProps, extraClass?: string): string[] => {
  const classes: string[] = [
    'x-stack',
    `x-stack--${props.direction ?? 'column'}`,
    `x-stack--gap-${props.gap ?? 'md'}`,
  ];
  if (props.align) classes.push(`x-stack--align-${props.align}`);
  if (props.justify) classes.push(`x-stack--justify-${props.justify}`);
  if (props.wrap) classes.push('x-stack--wrap');
  if (extraClass) classes.push(extraClass);
  return classes;
};
