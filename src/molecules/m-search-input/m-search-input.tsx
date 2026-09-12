import React, { useState, useRef, useEffect } from 'react';
import type { MSearchInputProps } from './types';
import { computeSearchInputClasses } from './m-search-input.controller';
import XTextFieldReact from '../../atoms/x-text-field/x-text-field';

export interface ReactSearchInputProps extends MSearchInputProps {
  className?: string;
  onSearch?: (val: string) => void;
  onClear?: () => void;
}

export const MSearchInputReact: React.FC<ReactSearchInputProps> = ({
  modelValue = '',
  placeholder = 'Search...',
  debounceMs = 250,
  disabled = false,
  clearable = true,
  className = '',
  onSearch = undefined,
  onClear = undefined,
}) => {
  const [internalVal, setInternalVal] = useState(modelValue);
  const debounceTimer = useRef<any>(null);

  useEffect(() => {
    setInternalVal(modelValue);
  }, [modelValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalVal(val);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      onSearch?.(val);
    }, debounceMs);
  };

  const handleClear = () => {
    setInternalVal('');
    onClear?.();
    onSearch?.('');
  };

  const resolvedClassNames = computeSearchInputClasses(
    { disabled },
    className
  ).join(' ');

  return (
    <div className={resolvedClassNames}>
      <XTextFieldReact
        modelValue={internalVal}
        placeholder={placeholder}
        disabled={disabled}
        clearable={clearable}
        onChange={handleChange}
        onClear={handleClear}
        prependInner={<span className="m-search-input__icon">🔍</span>}
      />
    </div>
  );
};

export default MSearchInputReact;
