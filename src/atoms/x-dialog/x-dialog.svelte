<script lang="ts">
import type { Snippet } from 'svelte';
import type { XDialogProps } from './types';
import { computeDialogClasses, computeDialogSurfaceVars, shouldDismissDialog } from './x-dialog.controller';
import { listen, toStyleString } from '../../core';

interface SvelteDialogProps extends XDialogProps {
  class?: string;
  title?: Snippet;
  actions?: Snippet;
  children?: Snippet;
}

let {
  modelValue = $bindable(false),
  maxWidth = 600,
  width = undefined,
  persistent = false,
  scrollable = false,
  fullscreen = false,
  class: className = '',
  title,
  actions,
  children,
}: SvelteDialogProps = $props();

const dialogClasses = $derived(computeDialogClasses({ fullscreen, scrollable }, `x-dialog--native ${className}`.trim()).join(' '));
const surfaceStyle = $derived(toStyleString(computeDialogSurfaceVars({ maxWidth, width })));

const requestClose = () => {
  const isDismissible = shouldDismissDialog({ persistent });
  if (isDismissible) modelValue = false;
};

$effect(() => {
  if (!modelValue) return undefined;
  return listen(globalThis.document, 'keydown', (event) => {
    const isEscape = (event as KeyboardEvent).key === 'Escape';
    if (isEscape) requestClose();
  });
});
</script>

{#if modelValue}
  <div class={dialogClasses} role="presentation" onclick={requestClose}>
    <div
      class="x-dialog__surface"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      style={surfaceStyle}
      onclick={(event) => event.stopPropagation()}
    >
      {#if title}
        <div class="x-dialog__title">{@render title()}</div>
      {/if}
      <div class="x-dialog__content">
        {@render children?.()}
      </div>
      {#if actions}
        <div class="x-dialog__actions">{@render actions()}</div>
      {/if}
    </div>
  </div>
{/if}
