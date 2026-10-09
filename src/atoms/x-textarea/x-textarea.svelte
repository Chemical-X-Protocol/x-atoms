<script lang="ts">
import type { XTextareaProps } from './types';
import { computeTextareaClasses, formatCharacterCount } from './x-textarea.controller';

interface SvelteTextareaProps extends XTextareaProps {
  class?: string;
  oninput?: (e: Event) => void;
}

let {
  modelValue = $bindable(''),
  label = undefined,
  placeholder = undefined,
  rows = 3,
  autoGrow = false,
  disabled = false,
  readonly = false,
  maxlength = undefined,
  class: className = '',
  oninput,
}: SvelteTextareaProps = $props();

let isFocused = $state(false);

const textareaClasses = $derived(
  computeTextareaClasses({ disabled, readonly, autoGrow }, isFocused, `x-textarea--native ${className}`.trim()).join(' ')
);
const counter = $derived(formatCharacterCount(modelValue, maxlength));
</script>

<label class={textareaClasses}>
  {#if label}
    <span class="x-textarea__label">{label}</span>
  {/if}
  <textarea
    class="x-textarea__native"
    bind:value={modelValue}
    {rows}
    {placeholder}
    {disabled}
    {readonly}
    {maxlength}
    {oninput}
    onfocus={() => { isFocused = true; }}
    onblur={() => { isFocused = false; }}
  ></textarea>
  {#if counter}
    <span class="x-textarea__counter">{counter}</span>
  {/if}
</label>

<style lang="scss" src="./_x-textarea.scss"></style>
