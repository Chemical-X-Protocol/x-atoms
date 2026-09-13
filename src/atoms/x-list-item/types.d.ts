export type XListItemVariant =
  | 'flat'
  | 'elevated'
  | 'tonal'
  | 'outlined'
  | 'plain'
  | 'glass';

export interface XListItemProps {
  title?: string;
  subtitle?: string;
  value?: any;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  lines?: 'one' | 'two' | 'three' | false;
  variant?: XListItemVariant;
  rounded?: boolean | string | number;
  ripple?: boolean;
}
