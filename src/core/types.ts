// Universal Component Contracts
// Used across Vue, Svelte, and React adapters

export type ComponentVariant =
  | 'glass'
  | 'elevated'
  | 'flat'
  | 'tonal'
  | 'outlined'
  | 'text'
  | 'plain';

export type ComponentSize =
  | 'x-small'
  | 'small'
  | 'default'
  | 'large'
  | 'x-large';

export type SemanticStatus =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export interface BaseComponentProps {
  variant?: ComponentVariant;
  size?: ComponentSize;
  disabled?: boolean;
  className?: string;
}
