export interface XNavDrawerProps {
  modelValue?: boolean;
  location?: 'start' | 'end';
  /** Narrow icon-only rail. */
  rail?: boolean;
  /** Overlays content with a scrim; closes on scrim click. */
  temporary?: boolean;
  permanent?: boolean;
  width?: number;
  floating?: boolean;
}

export interface XNavDrawerEmits {
  (e: 'update:modelValue', value: boolean): void;
}
