export interface XTextFieldProps {
  modelValue?: string | number;
  label?: string;
  placeholder?: string;
  variant?: 'outlined' | 'filled' | 'underlined' | 'solo' | 'plain';
  density?: 'compact' | 'comfortable' | 'default';
  hideDetails?: boolean | 'auto';
  clearable?: boolean;
  type?: string;
  disabled?: boolean;
  readonly?: boolean;
  prefix?: string;
  suffix?: string;
}

export interface XTextFieldEmits {
  (e: 'update:modelValue', value: string | number): void;
  (e: 'click:clear'): void;
}
