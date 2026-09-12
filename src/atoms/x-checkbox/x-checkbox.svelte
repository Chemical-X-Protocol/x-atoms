<script lang="ts">
import type { Snippet } from 'svelte';
import type { XCheckboxProps } from './types';
import { computeCheckboxClasses } from './x-checkbox.controller';

interface SvelteCheckboxProps extends XCheckboxProps {
  class?: string;
  onchange?: (val: boolean) => void;
  children?: Snippet;
}

let {
  modelValue = $bindable(false),
  label = undefined,
  disabled = false,
  class: className = '',
  onchange,
  children,
}: SvelteCheckboxProps = $props();

const checkboxClasses = $derived(
  computeCheckboxClasses({ disabled }, modelValue, className).join(' ')
);

const handleToggle = () => {
  if (disabled) return;
  modelValue = !modelValue;
  onchange?.(modelValue);
};
</script>

<div
  class={checkboxClasses}
  onclick={handleToggle}
  onkeydown={(e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  }}
  role="checkbox"
  aria-checked={modelValue}
  tabindex={disabled ? -1 : 0}
>
  <span class="x-checkbox__box">
    {#if modelValue}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    {/if}
  </span>

  {#if label}
    <span class="x-checkbox__label">{label}</span>
  {:else if children}
    {@render children()}
  {/if}
</div>

<style lang="scss" src="./_x-checkbox.scss"></style>
