import React from 'react';
import type { XSwitchProps } from './types';
import { computeSwitchClasses } from './x-switch.controller';

export interface ReactSwitchProps extends XSwitchProps {
  className?: string;
  onChange?: (val: boolean) => void;
  children?: React.ReactNode;
}

export const XSwitchReact: React.FC<ReactSwitchProps> = ({
  modelValue = false,
  label = undefined,
  disabled = false,
  className = '',
  onChange = undefined,
  children = null,
}) => {
  const resolvedClassNames = computeSwitchClasses(
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
      role="switch"
      aria-checked={modelValue}
      tabIndex={disabled ? -1 : 0}
    >
      <span className="x-switch__track">
        <span className="x-switch__thumb" />
      </span>

      {label ? <span className="x-switch__label">{label}</span> : children}
    </div>
  );
};

export default XSwitchReact;
