<script lang="ts">
import type { MConfirmDialogProps } from './types';
import { resolveDialogButtonLabels } from './m-confirm-dialog.controller';
import XBtn from '../../atoms/x-btn/x-btn.svelte';

interface SvelteConfirmDialogProps extends MConfirmDialogProps {
  onconfirm?: () => void;
  oncancel?: () => void;
}

let {
  modelValue = $bindable(false),
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmColor = 'primary',
  loading = false,
  onconfirm,
  oncancel,
}: SvelteConfirmDialogProps = $props();

const buttonConfig = $derived(
  resolveDialogButtonLabels({ confirmText, cancelText, confirmColor })
);

const handleCancel = () => {
  modelValue = false;
  oncancel?.();
};

const handleConfirm = () => {
  onconfirm?.();
};
</script>

{#if modelValue}
  <div class="x-dialog" role="dialog" aria-modal="true">
    <div class="x-dialog__surface">
      <div class="m-confirm-dialog__body">
        <h3 class="m-confirm-dialog__title">{title}</h3>
        <p class="m-confirm-dialog__message">{message}</p>
      </div>

      <div class="x-dialog__actions">
        <XBtn variant="text" disabled={loading} onclick={handleCancel}>
          {#snippet children()}{buttonConfig.cancelText}{/snippet}
        </XBtn>

        <XBtn variant="elevated" color={buttonConfig.confirmColor} {loading} onclick={handleConfirm}>
          {#snippet children()}{buttonConfig.confirmText}{/snippet}
        </XBtn>
      </div>
    </div>
  </div>
{/if}

<style lang="scss" src="./_m-confirm-dialog.scss"></style>
