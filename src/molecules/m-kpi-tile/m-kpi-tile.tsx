import React from 'react';
import type { MKpiTileProps } from './types';
import { resolveTrendClass, resolveTrendSymbol } from './m-kpi-tile.controller';
import XCardReact from '../../atoms/x-card/x-card';

export interface ReactKpiTileProps extends MKpiTileProps {
  iconElement?: React.ReactNode;
}

export const MKpiTileReact: React.FC<ReactKpiTileProps> = ({
  label,
  value,
  subtext = undefined,
  trend = undefined,
  trendValue = undefined,
  icon = undefined,
  iconElement = null,
}) => {
  const trendClass = resolveTrendClass(trend);
  const trendSymbol = resolveTrendSymbol(trend);
  const hasTrend = Boolean(trend && trendValue);

  return (
    <XCardReact variant="glass" hover={true}>
      <div className="m-kpi-tile">
        <div className="m-kpi-tile__header">
          <span className="m-kpi-tile__label">{label}</span>
          {iconElement ? (
            iconElement
          ) : icon ? (
            <span className="m-kpi-tile__icon">{icon}</span>
          ) : null}
        </div>

        <div className="m-kpi-tile__value">{value}</div>

        {subtext || hasTrend ? (
          <div className="m-kpi-tile__footer">
            {hasTrend ? (
              <span className={`m-kpi-tile__trend ${trendClass}`}>
                {trendSymbol}
                {trendValue}
              </span>
            ) : null}
            {subtext ? (
              <span className="m-kpi-tile__subtext">{subtext}</span>
            ) : null}
          </div>
        ) : null}
      </div>
    </XCardReact>
  );
};

export default MKpiTileReact;
