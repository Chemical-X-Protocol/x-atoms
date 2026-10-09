import React from 'react';
import type { XNavDrawerProps } from './types';
import { computeNavDrawerClasses, computeNavDrawerVars, hasDrawerScrim } from './x-nav-drawer.controller';

export interface ReactNavDrawerProps extends XNavDrawerProps {
  className?: string;
  onUpdateModelValue?: (value: boolean) => void;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  children?: React.ReactNode;
}

export const XNavDrawerReact: React.FC<ReactNavDrawerProps> = ({
  modelValue = true,
  location = 'start',
  rail = false,
  temporary = false,
  permanent = false,
  width = 256,
  floating = false,
  className = '',
  onUpdateModelValue = undefined,
  prepend = null,
  append = null,
  children = null,
}) => {
  const state = { modelValue, location, rail, temporary, permanent, width, floating };
  const resolvedClassNames = computeNavDrawerClasses(state, `x-nav-drawer--native ${className}`.trim()).join(' ');
  const drawerVars = computeNavDrawerVars(state) as React.CSSProperties;

  return (
    <>
      {hasDrawerScrim(state) ? (
        <div className="x-nav-drawer__scrim" role="presentation" onClick={() => onUpdateModelValue?.(false)} />
      ) : null}
      <nav className={resolvedClassNames} style={drawerVars}>
        {prepend}
        <div className="x-nav-drawer__content">{children}</div>
        {append}
      </nav>
    </>
  );
};

export default XNavDrawerReact;
