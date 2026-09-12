import React from 'react';
import type { MActionBarProps } from './types';
import { computeActionBarClasses } from './m-action-bar.controller';
import XSheetReact from '../../atoms/x-sheet/x-sheet';

export interface ReactActionBarProps extends MActionBarProps {
  className?: string;
  start?: React.ReactNode;
  children?: React.ReactNode;
  end?: React.ReactNode;
}

export const MActionBarReact: React.FC<ReactActionBarProps> = ({
  title = undefined,
  position = 'static',
  bordered = true,
  className = '',
  start = null,
  children = null,
  end = null,
}) => {
  const resolvedClassNames = computeActionBarClasses(
    { position, bordered },
    className
  ).join(' ');

  return (
    <XSheetReact className={resolvedClassNames}>
      <div className="m-action-bar__start">
        {start ? (
          start
        ) : title ? (
          <h2 className="m-action-bar__title">{title}</h2>
        ) : null}
      </div>

      {children ? <div className="m-action-bar__center">{children}</div> : null}

      {end ? <div className="m-action-bar__end">{end}</div> : null}
    </XSheetReact>
  );
};

export default MActionBarReact;
