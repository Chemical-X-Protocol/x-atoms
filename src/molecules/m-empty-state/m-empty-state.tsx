import React from 'react';
import type { MEmptyStateProps } from './types';
import XCardReact from '../../atoms/x-card/x-card';
import XBtnReact from '../../atoms/x-btn/x-btn';

export interface ReactEmptyStateProps extends MEmptyStateProps {
  className?: string;
  onClickAction?: () => void;
  iconElement?: React.ReactNode;
  actionElement?: React.ReactNode;
}

export const MEmptyStateReact: React.FC<ReactEmptyStateProps> = ({
  title,
  description = undefined,
  icon = '✨',
  actionText = undefined,
  className = '',
  onClickAction = undefined,
  iconElement = null,
  actionElement = null,
}) => {
  return (
    <XCardReact variant="glass" className={`m-empty-state ${className}`}>
      <div className="m-empty-state__icon-wrap">
        {iconElement ? iconElement : <span>{icon}</span>}
      </div>

      <h3 className="m-empty-state__title">{title}</h3>

      {description ? (
        <p className="m-empty-state__description">{description}</p>
      ) : null}

      {actionElement ? (
        <div className="m-empty-state__actions">{actionElement}</div>
      ) : actionText ? (
        <div className="m-empty-state__actions">
          <XBtnReact variant="elevated" color="primary" onClick={onClickAction}>
            {actionText}
          </XBtnReact>
        </div>
      ) : null}
    </XCardReact>
  );
};

export default MEmptyStateReact;
