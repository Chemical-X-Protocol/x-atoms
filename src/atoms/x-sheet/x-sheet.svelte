<script lang="ts">
import type { Snippet } from 'svelte';
import type { XSheetProps } from './types';
import { computeSheetClasses } from './x-sheet.controller';

interface SvelteSheetProps extends XSheetProps {
  class?: string;
  children?: Snippet;
}

let {
  color = undefined,
  elevation = undefined,
  rounded = undefined,
  border = undefined,
  transparent = false,
  class: className = '',
  children,
}: SvelteSheetProps = $props();

const sheetClasses = $derived(
  computeSheetClasses({ transparent, color, elevation, rounded, border }, className).join(' ')
);
</script>

<div class={sheetClasses}>
  {#if children}
    {@render children()}
  {/if}
</div>
