<script lang="ts">
import type { Snippet } from 'svelte';
import type { XCardProps } from './types';
import { computeCardClasses } from './x-card.controller';

interface SvelteCardProps extends XCardProps {
  class?: string;
  children?: Snippet;
  title?: Snippet;
  actions?: Snippet;
}

let {
  variant = undefined,
  color = undefined,
  loading = false,
  disabled = false,
  hover = false,
  class: className = '',
  children,
  title,
  actions,
}: SvelteCardProps = $props();

const cardClasses = $derived(
  computeCardClasses({ variant, color, loading, disabled, hover }, className).join(' ')
);
</script>

<div class={cardClasses}>
  {#if title}
    <div class="x-card__title">
      {@render title()}
    </div>
  {/if}

  {#if children}
    <div class="x-card__content">
      {@render children()}
    </div>
  {/if}

  {#if actions}
    <div class="x-card__actions">
      {@render actions()}
    </div>
  {/if}
</div>
