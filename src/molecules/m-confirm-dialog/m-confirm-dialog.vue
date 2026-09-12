<script setup lang="ts">
import { computed } from 'vue';
import type { MConfirmDialogProps, MConfirmDialogEmits } from './types';
import { resolveDialogButtonLabels } from './m-confirm-dialog.controller';
import XDialog from '../../atoms/x-dialog/x-dialog.vue';
import XBtn from '../../atoms/x-btn/x-btn.vue';

defineOptions({
  name: 'MConfirmDialog',
});

const props = withDefaults(defineProps<MConfirmDialogProps>(), {
  modelValue: false,
  title: 'Confirm Action',
  message: 'Are you sure you want to proceed?',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  confirmColor: 'primary',
  loading: false,
});

const emit = defineEmits<MConfirmDialogEmits>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val),
});

const buttonConfig = computed(() => resolveDialogButtonLabels(props));

const handleCancel = () => {
  emit('cancel');
  isOpen.value = false;
};

const handleConfirm = () => {
  emit('confirm');
};
</script>

<template>
  <XDialog v-model="isOpen" :max-width="480">
    <div class="m-confirm-dialog__body">
      <h3 class="m-confirm-dialog__title">{{ props.title }}</h3>
      <p class="m-confirm-dialog__message">{{ props.message }}</p>
    </div>

    <template #actions>
      <XBtn
        variant="text"
        :disabled="props.loading"
        @click="handleCancel"
      >
        {{ buttonConfig.cancelText }}
      </XBtn>

      <XBtn
        variant="elevated"
        :color="buttonConfig.confirmColor"
        :loading="props.loading"
        @click="handleConfirm"
      >
        {{ buttonConfig.confirmText }}
      </XBtn>
    </template>
  </XDialog>
</template>

<style lang="scss" src="./_m-confirm-dialog.scss"></style>
