<script lang="ts">
import type { Snippet } from 'svelte';
import type { MEmptyStateProps } from './types';
import XCard from '../../atoms/x-card/x-card.svelte';
import XBtn from '../../atoms/x-btn/x-btn.svelte';

interface SvelteEmptyStateProps extends MEmptyStateProps {
  onclickaction?: () => void;
  iconSnippet?: Snippet;
  actionSnippet?: Snippet;
}

let {
  title,
  description = undefined,
  icon = '✨',
  actionText = undefined,
  onclickaction,
  iconSnippet,
  actionSnippet,
}: SvelteEmptyStateProps = $props();
</script>

<XCard variant="glass" class="m-empty-state">
  {#snippet children()}
    <div class="m-empty-state__icon-wrap">
      {#if iconSnippet}
        {@render iconSnippet()}
      {:else}
        <span>{icon}</span>
      {/if}
    </div>

    <h3 class="m-empty-state__title">{title}</h3>

    {#if description}
      <p class="m-empty-state__description">{description}</p>
    {/if}

    {#if actionSnippet}
      <div class="m-empty-state__actions">
        {@render actionSnippet()}
      </div>
    {:else if actionText}
      <div class="m-empty-state__actions">
        <XBtn variant="elevated" color="primary" onclick={onclickaction}>
          {#snippet children()}{actionText}{/snippet}
        </XBtn>
      </div>
    {/if}
  {/snippet}
</XCard>

<style lang="scss" src="./_m-empty-state.scss"></style>
