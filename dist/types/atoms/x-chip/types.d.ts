export type XChipVariant =
  | 'glass'
  | 'elevated'
  | 'flat'
  | 'tonal'
  | 'outlined';

export interface XChipProps {
  variant?: XChipVariant;
  color?: string;
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  closable?: boolean;
  disabled?: boolean;
  filter?: boolean;
}

export interface XChipEmits {
  (e: 'click:close'): void;
}
