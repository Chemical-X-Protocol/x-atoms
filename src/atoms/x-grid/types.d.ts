import type { SpaceScale } from '../../core/types';

export interface XGridProps {
  /** Fixed column count (1-12). Ignored when `minItemWidth` is set. */
  columns?: number;
  /** Responsive auto-fill: as many columns as fit at this minimum width. */
  minItemWidth?: string | number;
  gap?: SpaceScale;
  align?: 'start' | 'center' | 'end' | 'stretch';
  tag?: 'div' | 'section' | 'ul' | 'ol';
}
