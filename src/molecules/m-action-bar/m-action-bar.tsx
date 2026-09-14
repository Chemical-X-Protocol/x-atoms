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

  const hasStart = Boolean(start);
  const hasTitle = Boolean(title);
  const hasCenter = Boolean(children);
  const hasEnd = Boolean(end);

  const renderStart = (): React.ReactNode => {
    if (hasStart) {
      return start;
    }
    if (hasTitle) {
      return <h2 className="m-action-bar__title">{title}</h2>;
    }
    return null;
  };

  const renderCenter = (): React.ReactNode => {
    if (!hasCenter) {
      return null;
    }
    return <div className="m-action-bar__center">{children}</div>;
  };

  const renderEnd = (): React.ReactNode => {
    if (!hasEnd) {
      return null;
    }
    return <div className="m-action-bar__end">{end}</div>;
  };

  return (
    <XSheetReact className={resolvedClassNames}>
      <div className="m-action-bar__start">
        {renderStart()}
      </div>
      {renderCenter()}
      {renderEnd()}
    </XSheetReact>
  );
};

export default MActionBarReact;
