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
  const hasIconElement = Boolean(iconElement);
  const hasDescription = Boolean(description);
  const hasActionElement = Boolean(actionElement);
  const hasActionText = Boolean(actionText);

  const renderIcon = (): React.ReactNode => {
    if (hasIconElement) {
      return iconElement;
    }
    return <span>{icon}</span>;
  };

  const renderDescription = (): React.ReactNode => {
    if (!hasDescription) {
      return null;
    }
    return <p className="m-empty-state__description">{description}</p>;
  };

  const renderActions = (): React.ReactNode => {
    if (hasActionElement) {
      return <div className="m-empty-state__actions">{actionElement}</div>;
    }
    if (hasActionText) {
      return (
        <div className="m-empty-state__actions">
          <XBtnReact variant="elevated" color="primary" onClick={onClickAction}>
            {actionText}
          </XBtnReact>
        </div>
      );
    }
    return null;
  };

  return (
    <XCardReact variant="glass" className={`m-empty-state ${className}`}>
      <div className="m-empty-state__icon-wrap">
        {renderIcon()}
      </div>

      <h3 className="m-empty-state__title">{title}</h3>

      {renderDescription()}
      {renderActions()}
    </XCardReact>
  );
};

export default MEmptyStateReact;
