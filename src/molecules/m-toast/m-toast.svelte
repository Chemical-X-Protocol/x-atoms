<script lang="ts">
import type { MToastProps } from './types';
import { computeToastClasses } from './m-toast.controller';
import { after } from '../../core';
import XBtn from '../../atoms/x-btn/x-btn.svelte';

interface SvelteToastProps extends MToastProps {
  class?: string;
  onclickaction?: () => void;
  onclose?: () => void;
}

let {
  modelValue = $bindable(false),
  message,
  type = 'info',
  duration = 4000,
  actionText = undefined,
  class: className = '',
  onclickaction,
  onclose,
}: SvelteToastProps = $props();

const close = () => {
  modelValue = false;
  onclose?.();
};

$effect(() => {
  const shouldAutoDismiss = modelValue && duration > 0;
  return shouldAutoDismiss ? after(duration, close) : undefined;
});

const toastClasses = $derived(
  computeToastClasses({ message, type }, modelValue, className).join(' ')
);
</script>

<div class={toastClasses} role="status">
  <span class="m-toast__message">{message}</span>

  <div class="m-toast__actions">
    {#if actionText}
      <XBtn variant="text" size="small" onclick={onclickaction}>
        {#snippet children()}{actionText}{/snippet}
      </XBtn>
    {/if}

    <XBtn variant="plain" size="x-small" icon={true} onclick={close}>
      {#snippet children()}&times;{/snippet}
    </XBtn>
  </div>
</div>

<style lang="scss" src="./_m-toast.scss"></style>
