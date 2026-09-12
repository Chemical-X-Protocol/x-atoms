import type { SemanticStatus } from '../../core/types';

export interface XAlertProps {
  type?: SemanticStatus;
  title?: string;
  text?: string;
  closable?: boolean;
  variant?: 'glass' | 'tonal' | 'outlined' | 'elevated';
}

export interface XAlertEmits {
  (e: 'click:close'): void;
}
