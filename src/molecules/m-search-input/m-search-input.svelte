<script lang="ts">
import type { MSearchInputProps } from './types';
import { createDebounce, computeSearchInputClasses } from './m-search-input.controller';
import XTextField from '../../atoms/x-text-field/x-text-field.svelte';

interface SvelteSearchInputProps extends MSearchInputProps {
  class?: string;
  onsearch?: (val: string) => void;
  onclear?: () => void;
}

let {
  modelValue = $bindable(''),
  placeholder = 'Search...',
  debounceMs = 250,
  disabled = false,
  clearable = true,
  class: className = '',
  onsearch,
  onclear,
}: SvelteSearchInputProps = $props();

const emitSearchDebounced = createDebounce((val: string) => {
  onsearch?.(val);
}, debounceMs);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  modelValue = target.value;
  emitSearchDebounced(target.value);
};

const handleClear = () => {
  modelValue = '';
  onclear?.();
  onsearch?.('');
};
</script>

<div class={computeSearchInputClasses({ disabled }, className).join(' ')}>
  <XTextField
    bind:modelValue
    {placeholder}
    {disabled}
    {clearable}
    oninput={handleInput}
    onclear={handleClear}
  >
    {#snippet prependInner()}
      <span class="m-search-input__icon">🔍</span>
    {/snippet}
  </XTextField>
</div>

<style lang="scss" src="./_m-search-input.scss"></style>
