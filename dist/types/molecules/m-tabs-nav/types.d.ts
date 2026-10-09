export interface NavTabItem {
  id: string;
  label: string;
  icon?: string;
  badge?: string | number;
  disabled?: boolean;
}

export interface MTabsNavProps {
  tabs: NavTabItem[];
  modelValue?: string;
  grow?: boolean;
  align?: 'start' | 'center' | 'end';
}

export interface MTabsNavEmits {
  (e: 'update:modelValue', tabId: string): void;
  (e: 'tabChange', tabId: string): void;
}
