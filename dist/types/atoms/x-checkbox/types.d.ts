export interface XCheckboxProps {
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  color?: string;
  hideDetails?: boolean | 'auto';
}

export interface XCheckboxEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}
