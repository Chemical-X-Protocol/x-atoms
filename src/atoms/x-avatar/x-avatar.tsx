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

  return (
    <div className={resolvedClassNames}>
      {src ? (
        <img src={src} alt={alt || 'Avatar'} />
      ) : initials ? (
        <span>{initials}</span>
      ) : (
        children
      )}

      {status ? (
        <span className={`x-avatar__status-dot x-avatar__status-dot--${status}`} />
      ) : null}
    </div>
  );
};

export default XAvatarReact;
