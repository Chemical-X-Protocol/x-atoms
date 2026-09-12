import React, { useState } from 'react';
import type { XTextFieldProps } from './types';
import { computeTextFieldClasses } from './x-text-field.controller';

export interface ReactTextFieldProps extends XTextFieldProps {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  prependInner?: React.ReactNode;
  appendInner?: React.ReactNode;
}

export const XTextFieldReact: React.FC<ReactTextFieldProps> = ({
  modelValue = '',
  label = undefined,
  placeholder = undefined,
  type = 'text',
  disabled = false,
  readonly = false,
  clearable = false,
  className = '',
  onChange = undefined,
  onClear = undefined,
  prependInner = null,
  appendInner = null,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const resolvedClassNames = computeTextFieldClasses(
    { disabled, readonly },
    isFocused,
    className
  ).join(' ');

  const hasClearableContent = clearable && Boolean(modelValue);

  return (
    <div className={resolvedClassNames}>
      {label ? <label className="x-text-field__label">{label}</label> : null}
      <div className="x-text-field__input-wrap">
        {prependInner ? (
          <span className="x-text-field__prepend-inner">{prependInner}</span>
        ) : null}
        <input
          type={type}
          value={modelValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="x-text-field__native-input"
        />
        {hasClearableContent ? (
          <button
            type="button"
            className="x-text-field__clear-btn"
            onClick={onClear}
            aria-label="Clear input"
          >
            &times;
          </button>
        ) : null}
        {appendInner ? (
          <span className="x-text-field__append-inner">{appendInner}</span>
        ) : null}
      </div>
    </div>
  );
};

export default XTextFieldReact;
