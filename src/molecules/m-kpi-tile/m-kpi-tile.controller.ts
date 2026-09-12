import type { MKpiTileProps } from './types';

export const resolveTrendClass = (trend?: MKpiTileProps['trend']): string => {
  if (trend === 'up') return 'm-kpi-tile__trend--up';
  if (trend === 'down') return 'm-kpi-tile__trend--down';
  return 'm-kpi-tile__trend--neutral';
};

export const resolveTrendSymbol = (trend?: MKpiTileProps['trend']): string => {
  if (trend === 'up') return '+';
  if (trend === 'down') return '-';
  return '';
};
