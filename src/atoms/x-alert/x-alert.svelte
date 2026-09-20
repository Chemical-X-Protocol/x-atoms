<script lang="ts">
import type { Snippet } from 'svelte';
import type { XAlertProps } from './types';
import { computeAlertClasses } from './x-alert.controller';

interface SvelteAlertProps extends XAlertProps {
  class?: string;
  onclose?: () => void;
  children?: Snippet;
  titleSnippet?: Snippet;
  icon?: Snippet;
}

let {
  type = 'info',
  title = undefined,
  text = undefined,
  closable = false,
  variant = undefined,
  class: className = '',
  onclose,
  children,
  titleSnippet,
  icon,
}: SvelteAlertProps = $props();

const alertClasses = $derived(
  computeAlertClasses({ type, variant }, className).join(' ')
);
</script>

<div class={alertClasses} role="alert">
  {#if icon}
    <div class="x-alert__icon">
      {@render icon()}
    </div>
  {/if}

  <div class="x-alert__content">
    {#if titleSnippet}
      <div class="x-alert__title">{@render titleSnippet()}</div>
    {:else if title}
      <div class="x-alert__title">{title}</div>
    {/if}

    {#if text}
      <div class="x-alert__text">{text}</div>
    {:else if children}
      <div class="x-alert__text">{@render children()}</div>
    {/if}
  </div>

  {#if closable}
    <button
      type="button"
      class="x-alert__close"
      onclick={onclose}
      aria-label="Close alert"
    >
      &times;
    </button>
  {/if}
</div>
