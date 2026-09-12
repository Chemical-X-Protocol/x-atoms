import React from 'react';
import type { XCheckboxProps } from './types';
import { computeCheckboxClasses } from './x-checkbox.controller';

export interface ReactCheckboxProps extends XCheckboxProps {
  className?: string;
  onChange?: (val: boolean) => void;
  children?: React.ReactNode;
}

export const XCheckboxReact: React.FC<ReactCheckboxProps> = ({
  modelValue = false,
  label = undefined,
  disabled = false,
  className = '',
  onChange = undefined,
  children = null,
}) => {
  const resolvedClassNames = computeCheckboxClasses(
    { disabled },
    modelValue,
    className
  ).join(' ');

  const handleToggle = () => {
    if (disabled) return;
    const nextVal = !modelValue;
    onChange?.(nextVal);
  };

  return (
    <div
      className={resolvedClassNames}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleToggle();
        }
      }}
      role="checkbox"
      aria-checked={modelValue}
      tabIndex={disabled ? -1 : 0}
    >
      <span className="x-checkbox__box">
        {modelValue ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : null}
      </span>

      {label ? <span className="x-checkbox__label">{label}</span> : children}
    </div>
  );
};

export default XCheckboxReact;
