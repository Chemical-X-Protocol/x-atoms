<script lang="ts">
import type { Snippet } from 'svelte';
import type { MActionBarProps } from './types';
import { computeActionBarClasses } from './m-action-bar.controller';
import XSheet from '../../atoms/x-sheet/x-sheet.svelte';

interface SvelteActionBarProps extends MActionBarProps {
  class?: string;
  start?: Snippet;
  children?: Snippet;
  end?: Snippet;
}

let {
  title = undefined,
  position = 'static',
  bordered = true,
  class: className = '',
  start,
  children,
  end,
}: SvelteActionBarProps = $props();

const barClasses = $derived(
  computeActionBarClasses({ position, bordered }, className).join(' ')
);
</script>

<XSheet class={barClasses}>
  {#snippet children()}
    <div class="m-action-bar__start">
      {#if start}
        {@render start()}
      {:else if title}
        <h2 class="m-action-bar__title">{title}</h2>
      {/if}
    </div>

    {#if children}
      <div class="m-action-bar__center">
        {@render children()}
      </div>
    {/if}

    {#if end}
      <div class="m-action-bar__end">
        {@render end()}
      </div>
    {/if}
  {/snippet}
</XSheet>

<style lang="scss" src="./_m-action-bar.scss"></style>
