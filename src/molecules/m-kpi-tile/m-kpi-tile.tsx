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
  const hasSubtext = Boolean(subtext);
  const hasFooter = hasTrend || hasSubtext;
  const hasIconElement = Boolean(iconElement);
  const hasIcon = Boolean(icon);

  const renderIcon = (): React.ReactNode => {
    if (hasIconElement) {
      return iconElement;
    }
    if (hasIcon) {
      return <span className="m-kpi-tile__icon">{icon}</span>;
    }
    return null;
  };

  const renderFooter = (): React.ReactNode => {
    if (!hasFooter) {
      return null;
    }
    return (
      <div className="m-kpi-tile__footer">
        {hasTrend ? (
          <span className={`m-kpi-tile__trend ${trendClass}`}>
            {trendSymbol}
            {trendValue}
          </span>
        ) : null}
        {hasSubtext ? (
          <span className="m-kpi-tile__subtext">{subtext}</span>
        ) : null}
      </div>
    );
  };

  return (
    <XCardReact variant="glass" hover={true}>
      <div className="m-kpi-tile">
        <div className="m-kpi-tile__header">
          <span className="m-kpi-tile__label">{label}</span>
          {renderIcon()}
        </div>

        <div className="m-kpi-tile__value">{value}</div>

        {renderFooter()}
      </div>
    </XCardReact>
  );
};

export default MKpiTileReact;
