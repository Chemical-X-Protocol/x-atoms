<script lang="ts">
import type { Snippet } from 'svelte';
import type { XListItemProps } from './types';
import { computeListItemClasses } from './x-list-item.controller';

interface SvelteListItemProps extends XListItemProps {
  class?: string;
  children?: Snippet;
  prepend?: Snippet;
  append?: Snippet;
}

let {
  title = undefined,
  subtitle = undefined,
  value = undefined,
  active = false,
  disabled = false,
  color = undefined,
  density = undefined,
  lines = undefined,
  variant = undefined,
  rounded = undefined,
  ripple = true,
  class: className = '',
  children,
  prepend,
  append,
}: SvelteListItemProps = $props();

const listItemClasses = $derived(
  computeListItemClasses(
    { title, subtitle, value, active, disabled, color, density, lines, variant, rounded, ripple },
    className
  ).join(' ')
);
</script>

<div class={listItemClasses}>
  {#if prepend}
    <div class="x-list-item__prepend">
      {@render prepend()}
    </div>
  {/if}

  <div class="x-list-item__content">
    {#if title}
      <div class="x-list-item__title">{title}</div>
    {/if}
    {#if subtitle}
      <div class="x-list-item__subtitle">{subtitle}</div>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </div>

  {#if append}
    <div class="x-list-item__append">
      {@render append()}
    </div>
  {/if}
</div>

<style lang="scss" src="./_x-list-item.scss"></style>
