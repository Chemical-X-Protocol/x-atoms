export interface XMenuProps {
  readonly modelValue?: boolean;
  readonly closeOnContentClick?: boolean;
  readonly location?: string;
  readonly origin?: string;
  readonly transition?: string;
  readonly disabled?: boolean;
  readonly offset?: number | string;
}

export interface XMenuEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'update:model-value', value: boolean): void;
}
