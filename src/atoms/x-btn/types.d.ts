export type XBtnVariant =
  | 'glass'
  | 'elevated'
  | 'flat'
  | 'tonal'
  | 'outlined'
  | 'text'
  | 'plain';

export interface XBtnProps {
  variant?: XBtnVariant;
  color?: string;
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: string | boolean;
}
