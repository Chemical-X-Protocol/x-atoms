import type { MSearchInputProps } from './types';

export const computeSearchInputClasses = (
  props: MSearchInputProps,
  extraClass?: string
): string[] => {
  const isLoading = Boolean(props.loading);
  const isDisabled = Boolean(props.disabled);

  const classes: string[] = ['m-search-input'];

  if (isLoading) {
    classes.push('m-search-input--loading');
  }

  if (isDisabled) {
    classes.push('m-search-input--disabled');
  }

  if (props.size && props.size !== 'default') {
    classes.push(`m-search-input--${props.size}`);
  }

  if (extraClass) {
    classes.push(extraClass);
  }

  return classes;
};

export const createDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number
) => {
  let timer: any = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};
