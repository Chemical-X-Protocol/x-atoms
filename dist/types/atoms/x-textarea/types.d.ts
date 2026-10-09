export interface XTextareaProps {
  modelValue?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  autoGrow?: boolean;
  variant?: 'outlined' | 'filled' | 'underlined' | 'solo' | 'plain';
  density?: 'compact' | 'comfortable' | 'default';
  hideDetails?: boolean | 'auto';
  disabled?: boolean;
  readonly?: boolean;
  maxlength?: number;
}

export interface XTextareaEmits {
  (e: 'update:modelValue', value: string): void;
}
