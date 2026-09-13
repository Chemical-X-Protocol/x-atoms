export interface XDialogProps {
  modelValue?: boolean;
  maxWidth?: string | number;
  width?: string | number;
  persistent?: boolean;
  scrollable?: boolean;
  fullscreen?: boolean;
  transition?: string;
}

export interface XDialogEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'update:model-value', value: boolean): void;
}
