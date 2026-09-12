export interface MEmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
  actionText?: string;
}

export interface MEmptyStateEmits {
  (e: 'click:action'): void;
}
