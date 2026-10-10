import type { MKpiTileProps } from './types';

const TREND_CLASSES: Record<string, string> = {
  up: 'm-kpi-tile__trend--up',
  down: 'm-kpi-tile__trend--down',
};

const TREND_SYMBOLS: Record<string, string> = {
  up: '+',
  down: '-',
};

export const resolveTrendClass = (trend?: MKpiTileProps['trend']): string =>
  TREND_CLASSES[trend ?? ''] ?? 'm-kpi-tile__trend--neutral';

export const resolveTrendSymbol = (trend?: MKpiTileProps['trend']): string =>
  TREND_SYMBOLS[trend ?? ''] ?? '';
