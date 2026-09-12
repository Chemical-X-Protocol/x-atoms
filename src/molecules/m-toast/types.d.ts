import type { SemanticStatus } from '../../core/types';

export interface MToastProps {
  modelValue?: boolean;
  message: string;
  type?: SemanticStatus;
  duration?: number;
  actionText?: string;
}

export interface MToastEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'click:action'): void;
  (e: 'close'): void;
}
