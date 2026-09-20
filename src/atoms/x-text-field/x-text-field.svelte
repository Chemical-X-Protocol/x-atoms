<script lang="ts">
import type { Snippet } from 'svelte';
import type { XTextFieldProps } from './types';
import { computeTextFieldClasses } from './x-text-field.controller';

interface SvelteTextFieldProps extends XTextFieldProps {
  class?: string;
  oninput?: (e: Event) => void;
  onclear?: () => void;
  prependInner?: Snippet;
  appendInner?: Snippet;
}

let {
  modelValue = $bindable(''),
  label = undefined,
  placeholder = undefined,
  type = 'text',
  disabled = false,
  readonly = false,
  clearable = false,
  class: className = '',
  oninput,
  onclear,
  prependInner,
  appendInner,
}: SvelteTextFieldProps = $props();

let isFocused = $state(false);

const fieldClasses = $derived(
  computeTextFieldClasses({ disabled, readonly }, isFocused, className).join(' ')
);
</script>

<div class={fieldClasses}>
  {#if label}
    <label class="x-text-field__label">{label}</label>
  {/if}

  <div class="x-text-field__input-wrap">
    {#if prependInner}
      <span class="x-text-field__prepend-inner">
        {@render prependInner()}
      </span>
    {/if}

    <input
      {type}
      bind:value={modelValue}
      {placeholder}
      {disabled}
      {readonly}
      {oninput}
      onfocus={() => { isFocused = true; }}
      onblur={() => { isFocused = false; }}
      class="x-text-field__native-input"
    />

    {#if clearable && modelValue}
      <button
        type="button"
        class="x-text-field__clear-btn"
        onclick={() => {
          modelValue = '';
          onclear?.();
        }}
        aria-label="Clear text"
      >
        &times;
      </button>
    {/if}

    {#if appendInner}
      <span class="x-text-field__append-inner">
        {@render appendInner()}
      </span>
    {/if}
  </div>
</div>
