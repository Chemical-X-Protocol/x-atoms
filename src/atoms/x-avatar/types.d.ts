import type { ComponentSize } from '../../core/types';

export interface XAvatarProps {
  src?: string;
  alt?: string;
  text?: string;
  size?: ComponentSize | number;
  rounded?: boolean | string;
  bordered?: boolean;
  status?: 'online' | 'offline' | 'busy' | 'away';
}
