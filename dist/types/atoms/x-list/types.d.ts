export type XListVariant = 'flat' | 'elevated' | 'tonal' | 'outlined' | 'glass';

export interface XListProps {
  density?: 'default' | 'comfortable' | 'compact';
  lines?: 'one' | 'two' | 'three' | false;
  nav?: boolean;
  color?: string;
  variant?: XListVariant;
  disabled?: boolean;
}
