export type XTooltipLocation = 'top' | 'bottom' | 'start' | 'end';

export interface XTooltipProps {
  text?: string;
  location?: XTooltipLocation;
  disabled?: boolean;
  openDelay?: number;
  closeDelay?: number;
}
