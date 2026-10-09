import type { SemanticStatus } from '../../core/types.js';

export interface XBadgeProps {
  content?: string | number;
  color?: SemanticStatus | string;
  dot?: boolean;
  inline?: boolean;
  max?: number;
  floating?: boolean;
}
