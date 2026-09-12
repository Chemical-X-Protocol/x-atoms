import type { MStatStripProps } from './types';

export const computeGridColumnsStyle = (columns?: number): Record<string, string> => {
  const colCount = columns || 4;
  return {
    gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
    '--stat-strip-cols': String(colCount),
  };
};
