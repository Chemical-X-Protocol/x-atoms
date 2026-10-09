export interface MSearchInputProps {
  modelValue?: string;
  placeholder?: string;
  debounceMs?: number;
  loading?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  size?: 'small' | 'default' | 'large';
}

export interface MSearchInputEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'search', value: string): void;
  (e: 'clear'): void;
}
