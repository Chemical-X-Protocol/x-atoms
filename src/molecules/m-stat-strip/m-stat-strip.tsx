import React from 'react';
import type { MStatStripProps } from './types';
import { computeGridColumnsStyle } from './m-stat-strip.controller';
import MKpiTileReact from '../m-kpi-tile/m-kpi-tile';

export const MStatStripReact: React.FC<MStatStripProps> = ({
  stats,
  columns = 4,
}) => {
  const gridStyle = computeGridColumnsStyle(columns);

  return (
    <div className="m-stat-strip" style={gridStyle}>
      {stats.map((stat, idx) => (
        <MKpiTileReact
          key={`${stat.label}-${idx}`}
          label={stat.label}
          value={stat.value}
          subtext={stat.subtext}
          trend={stat.trend}
          trendValue={stat.trendValue}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export default MStatStripReact;
