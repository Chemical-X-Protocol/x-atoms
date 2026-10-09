<script lang="ts">
import type { Snippet } from 'svelte';
import type { XGridProps } from './types';
import { computeGridClasses, computeGridVars } from './x-grid.controller';
import { toStyleString } from '../../core';

interface SvelteGridProps extends XGridProps {
  class?: string;
  children?: Snippet;
}

let {
  columns = 1,
  minItemWidth = undefined,
  gap = 'md',
  align = undefined,
  tag = 'div',
  class: className = '',
  children,
}: SvelteGridProps = $props();

const gridClasses = $derived(computeGridClasses({ columns, minItemWidth, gap, align }, className).join(' '));
const gridStyle = $derived(toStyleString(computeGridVars({ minItemWidth })));
</script>

<svelte:element this={tag} class={gridClasses} style={gridStyle}>
  {@render children?.()}
</svelte:element>

<style lang="scss" src="./_x-grid.scss"></style>
