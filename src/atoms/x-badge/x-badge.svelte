<script lang="ts">
import type { Snippet } from 'svelte';
import type { XBadgeProps } from './types';
import { resolveBadgeDisplay, computeBadgeClasses } from './x-badge.controller';

interface SvelteBadgeProps extends XBadgeProps {
  class?: string;
  children?: Snippet;
}

let {
  content = undefined,
  color = 'primary',
  dot = false,
  inline = false,
  max = 99,
  floating = true,
  class: className = '',
  children,
}: SvelteBadgeProps = $props();

const displayText = $derived(resolveBadgeDisplay(content, max));
const badgeClasses = $derived(
  computeBadgeClasses({ dot, inline, floating, color }, className).join(' ')
);
</script>

{#if children}
  <div class="x-badge-wrapper">
    {@render children()}
    <span class={badgeClasses}>
      {#if !dot}
        {displayText}
      {/if}
    </span>
  </div>
{:else}
  <span class={badgeClasses}>
    {#if !dot}
      {displayText}
    {/if}
  </span>
{/if}

<style lang="scss" src="./_x-badge.scss"></style>
