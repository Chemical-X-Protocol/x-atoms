export type XCardVariant =
  | 'glass'
  | 'elevated'
  | 'flat'
  | 'tonal'
  | 'outlined';

export interface XCardProps {
  variant?: XCardVariant;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  hover?: boolean;
}
