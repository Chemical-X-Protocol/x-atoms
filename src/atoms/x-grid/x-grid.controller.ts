import type { XGridProps } from './types';

const MAX_COLUMNS = 12;

export const clampColumns = (columns?: number): number => {
  const requested = Math.round(columns ?? 1);
  return Math.min(Math.max(requested, 1), MAX_COLUMNS);
};

export const computeGridClasses = (props: XGridProps, extraClass?: string): string[] => {
  const isAutoFill = props.minItemWidth !== undefined;
  const layoutClass = isAutoFill ? 'x-grid--auto-fill' : `x-grid--cols-${clampColumns(props.columns)}`;
  const classes: string[] = ['x-grid', layoutClass, `x-grid--gap-${props.gap ?? 'md'}`];
  if (props.align) classes.push(`x-grid--align-${props.align}`);
  if (extraClass) classes.push(extraClass);
  return classes;
};

/** CSS variable for auto-fill grids; numbers are pixels. */
export const computeGridVars = (props: XGridProps): Record<string, string> => {
  const isAutoFill = props.minItemWidth !== undefined;
  if (!isAutoFill) return {};
  const isNumber = typeof props.minItemWidth === 'number';
  const width = isNumber ? `${props.minItemWidth}px` : String(props.minItemWidth);
  return { '--x-grid-min': width };
};
