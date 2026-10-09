import type { SpaceScale } from '../../core/types';

export interface XStackProps {
  direction?: 'row' | 'column';
  gap?: SpaceScale;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  tag?: 'div' | 'section' | 'ul' | 'ol' | 'nav' | 'header' | 'footer' | 'main' | 'aside';
}
