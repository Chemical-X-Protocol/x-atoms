import type { Tone } from '../../core/types';

export type XTextVariant = 'display' | 'title' | 'subtitle' | 'body' | 'caption' | 'overline' | 'code';
export type XTextTag = 'p' | 'span' | 'div' | 'label' | 'code' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type XTextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export interface XTextProps {
  tag?: XTextTag;
  variant?: XTextVariant;
  tone?: Tone;
  weight?: XTextWeight;
  align?: 'start' | 'center' | 'end';
  truncate?: boolean;
}
