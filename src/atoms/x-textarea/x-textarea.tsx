import React, { useState } from 'react';
import type { XTextareaProps } from './types';
import { computeTextareaClasses, formatCharacterCount } from './x-textarea.controller';

export interface ReactTextareaProps extends XTextareaProps {
  className?: string;
  onChange?: (value: string) => void;
}

export const XTextareaReact: React.FC<ReactTextareaProps> = ({
  modelValue = '',
  label = undefined,
  placeholder = undefined,
  rows = 3,
  autoGrow = false,
  disabled = false,
  readonly = false,
  maxlength = undefined,
  className = '',
  onChange = undefined,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const resolvedClassNames = computeTextareaClasses({ disabled, readonly, autoGrow }, isFocused, `x-textarea--native ${className}`.trim()).join(' ');
  const counter = formatCharacterCount(modelValue, maxlength);

  return (
    <label className={resolvedClassNames}>
      {label ? <span className="x-textarea__label">{label}</span> : null}
      <textarea
        className="x-textarea__native"
        value={modelValue}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        maxLength={maxlength}
        onChange={(event) => onChange?.(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {counter ? <span className="x-textarea__counter">{counter}</span> : null}
    </label>
  );
};

export default XTextareaReact;
