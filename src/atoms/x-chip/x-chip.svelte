<script lang="ts">
import type { Snippet } from 'svelte';
import type { XChipProps, XChipEmits } from './types';
import { computeChipClasses } from './x-chip.controller';

interface SvelteChipProps extends XChipProps {
  class?: string;
  onclick?: (e: MouseEvent) => void;
  onclose?: () => void;
  children?: Snippet;
  prepend?: Snippet;
}

let {
  variant = undefined,
  color = undefined,
  size = 'default',
  closable = false,
  disabled = false,
  filter = false,
  class: className = '',
  onclick,
  onclose,
  children,
  prepend,
}: SvelteChipProps = $props();

const chipClasses = $derived(
  computeChipClasses({ variant, color, size, closable, disabled, filter }, className).join(' ')
);
</script>

<div class={chipClasses} {onclick} role="status">
  {#if prepend}
    <span class="x-chip__prepend">
      {@render prepend()}
    </span>
  {/if}

  {#if children}
    <span class="x-chip__content">
      {@render children()}
    </span>
  {/if}

  {#if closable}
    <button
      type="button"
      class="x-chip__close"
      onclick={(e) => {
        e.stopPropagation();
        onclose?.();
      }}
      aria-label="Close chip"
    >
      &times;
    </button>
  {/if}
</div>
