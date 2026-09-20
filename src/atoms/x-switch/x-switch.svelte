<script lang="ts">
import type { Snippet } from 'svelte';
import type { XSwitchProps } from './types';
import { computeSwitchClasses } from './x-switch.controller';

interface SvelteSwitchProps extends XSwitchProps {
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
}: SvelteSwitchProps = $props();

const switchClasses = $derived(
  computeSwitchClasses({ disabled }, modelValue, className).join(' ')
);

const handleToggle = () => {
  if (disabled) return;
  modelValue = !modelValue;
  onchange?.(modelValue);
};
</script>

<div
  class={switchClasses}
  onclick={handleToggle}
  onkeydown={(e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  }}
  role="switch"
  aria-checked={modelValue}
  tabindex={disabled ? -1 : 0}
>
  <span class="x-switch__track">
    <span class="x-switch__thumb"></span>
  </span>

  {#if label}
    <span class="x-switch__label">{label}</span>
  {:else if children}
    {@render children()}
  {/if}
</div>
