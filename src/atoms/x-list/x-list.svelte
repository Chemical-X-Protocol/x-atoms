<script lang="ts">
import type { Snippet } from 'svelte';
import type { XListProps } from './types';
import { computeListClasses } from './x-list.controller';

interface SvelteListProps extends XListProps {
  class?: string;
  children?: Snippet;
}

let {
  density = 'default',
  lines = 'one',
  nav = false,
  color = undefined,
  variant = undefined,
  disabled = false,
  class: className = '',
  children,
}: SvelteListProps = $props();

const listClasses = $derived(
  computeListClasses({ density, lines, nav, color, variant, disabled }, className).join(' ')
);
</script>

<div class={listClasses}>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss" src="./_x-list.scss"></style>
