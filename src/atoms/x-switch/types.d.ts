export interface XSwitchProps {
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  color?: string;
  hideDetails?: boolean | 'auto';
}

export interface XSwitchEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}
