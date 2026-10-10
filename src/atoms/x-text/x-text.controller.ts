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
  const hasTone = Boolean(props.tone);
  const hasWeight = Boolean(props.weight);
  const hasAlign = Boolean(props.align);
  const isTruncated = Boolean(props.truncate);
  if (hasTone) classes.push(`x-tone--${props.tone}`);
  if (hasWeight) classes.push(`x-text--weight-${props.weight}`);
  if (hasAlign) classes.push(`x-text--align-${props.align}`);
  if (isTruncated) classes.push('x-text--truncate');
  if (extraClass) classes.push(extraClass);
  return classes;
};
