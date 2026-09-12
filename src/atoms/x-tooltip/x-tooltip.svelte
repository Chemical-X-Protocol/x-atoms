<script lang="ts">
import type { Snippet } from 'svelte';
import type { XTooltipProps } from './types';
import { computeTooltipClasses } from './x-tooltip.controller';

interface SvelteTooltipProps extends XTooltipProps {
  class?: string;
  children?: Snippet;
  tooltip?: Snippet;
}

let {
  text = undefined,
  location = 'top',
  disabled = false,
  class: className = '',
  children,
  tooltip,
}: SvelteTooltipProps = $props();

const tooltipClasses = $derived(
  computeTooltipClasses({ location }, className).join(' ')
);
</script>

{#if disabled}
  {#if children}
    {@render children()}
  {/if}
{:else}
  <div class="x-tooltip-wrapper">
    {#if children}
      {@render children()}
    {/if}

    <div class={tooltipClasses} role="tooltip">
      {#if tooltip}
        {@render tooltip()}
      {:else}
        {text}
      {/if}
    </div>
  </div>
{/if}

<style lang="scss" src="./_x-tooltip.scss"></style>
