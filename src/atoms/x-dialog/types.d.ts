export interface XDialogProps {
  modelValue?: boolean;
  maxWidth?: string | number;
  width?: string | number;
  persistent?: boolean;
  scrollable?: boolean;
  fullscreen?: boolean;
}

export interface XDialogEmits {
  (e: 'update:modelValue', value: boolean): void;
}
