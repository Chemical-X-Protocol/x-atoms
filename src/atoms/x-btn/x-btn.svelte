<script lang="ts">
import type { Snippet } from 'svelte';
import type { XBtnProps } from './types';
import { computeBtnClasses } from './x-btn.controller';

interface SvelteBtnProps extends XBtnProps {
  class?: string;
  onclick?: (e: MouseEvent) => void;
  children?: Snippet;
  prepend?: Snippet;
  append?: Snippet;
}

let {
  variant = undefined,
  color = undefined,
  size = 'default',
  block = false,
  loading = false,
  disabled = false,
  icon = false,
  class: className = '',
  onclick,
  children,
  prepend,
  append,
}: SvelteBtnProps = $props();

const btnClasses = $derived(
  computeBtnClasses(
    { variant, size, block, loading, disabled, icon, color },
    className
  ).join(' ')
);
</script>

<button
  type="button"
  class={btnClasses}
  disabled={disabled || loading}
  {onclick}
>
  {#if prepend}
    <span class="x-btn__prepend">
      {@render prepend()}
    </span>
  {/if}

  {#if children}
    <span class="x-btn__content">
      {@render children()}
    </span>
  {/if}

  {#if append}
    <span class="x-btn__append">
      {@render append()}
    </span>
  {/if}
</button>
