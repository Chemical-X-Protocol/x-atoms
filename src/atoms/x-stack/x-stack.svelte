<script lang="ts">
import type { Snippet } from 'svelte';
import type { XStackProps } from './types';
import { computeStackClasses } from './x-stack.controller';

interface SvelteStackProps extends XStackProps {
  class?: string;
  children?: Snippet;
}

let {
  direction = 'column',
  gap = 'md',
  align = undefined,
  justify = undefined,
  wrap = false,
  tag = 'div',
  class: className = '',
  children,
}: SvelteStackProps = $props();

const stackClasses = $derived(computeStackClasses({ direction, gap, align, justify, wrap }, className).join(' '));
</script>

<svelte:element this={tag} class={stackClasses}>
  {@render children?.()}
</svelte:element>

<style lang="scss" src="./_x-stack.scss"></style>
