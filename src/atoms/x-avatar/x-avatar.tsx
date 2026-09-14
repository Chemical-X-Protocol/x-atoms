import React from 'react';
import type { XAvatarProps } from './types';
import { computeAvatarClasses, getInitials } from './x-avatar.controller';

export interface ReactAvatarProps extends XAvatarProps {
  className?: string;
  children?: React.ReactNode;
}

export const XAvatarReact: React.FC<ReactAvatarProps> = ({
  src = undefined,
  alt = undefined,
  text = undefined,
  size = 'default',
  bordered = false,
  status = undefined,
  className = '',
  children = null,
}) => {
  const resolvedClassNames = computeAvatarClasses(
    { size, bordered, status },
    className
  ).join(' ');

  const initials = getInitials(text || alt);
  const hasImage = Boolean(src);
  const hasInitials = Boolean(initials);
  const hasStatus = Boolean(status);

  const renderContent = (): React.ReactNode => {
    if (hasImage) {
      return <img src={src} alt={alt || 'Avatar'} />;
    }
    if (hasInitials) {
      return <span>{initials}</span>;
    }
    return children;
  };

  const renderStatus = (): React.ReactNode => {
    if (!hasStatus) {
      return null;
    }
    return <span className={`x-avatar__status-dot x-avatar__status-dot--${status}`} />;
  };

  return (
    <div className={resolvedClassNames}>
      {renderContent()}
      {renderStatus()}
    </div>
  );
};

export default XAvatarReact;
