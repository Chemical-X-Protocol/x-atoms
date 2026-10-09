import type { XTextProps, XTextTag, XTextVariant } from './types';

const DEFAULT_TAG: Record<XTextVariant, XTextTag> = {
  display: 'h1',
  title: 'h2',
  subtitle: 'h3',
  body: 'p',
  caption: 'span',
  overline: 'span',
  code: 'code',
};

/** The element to render: an explicit `tag`, else the variant's natural element. */
export const resolveTextTag = (props: XTextProps): XTextTag => {
  return props.tag ?? DEFAULT_TAG[props.variant ?? 'body'];
};

export const computeTextClasses = (props: XTextProps, extraClass?: string): string[] => {
  const classes: string[] = ['x-text', `x-text--${props.variant ?? 'body'}`];
  if (props.tone) classes.push(`x-tone--${props.tone}`);
  if (props.weight) classes.push(`x-text--weight-${props.weight}`);
  if (props.align) classes.push(`x-text--align-${props.align}`);
  if (props.truncate) classes.push('x-text--truncate');
  if (extraClass) classes.push(extraClass);
  return classes;
};
