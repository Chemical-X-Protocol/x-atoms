export type MActionBarPosition = 'top' | 'bottom' | 'sticky-top' | 'sticky-bottom' | 'static';

export interface MActionBarProps {
  title?: string;
  position?: MActionBarPosition;
  bordered?: boolean;
}
