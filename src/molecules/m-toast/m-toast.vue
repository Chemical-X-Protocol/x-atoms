<script setup lang="ts">
import { watch, onScopeDispose } from 'vue';
import { after, type Teardown } from '../../core';
import type { MToastProps, MToastEmits } from './types';
import { computeToastClasses } from './m-toast.controller';
import XBtn from '../../atoms/x-btn/x-btn.vue';

defineOptions({
  name: 'MToast',
});

const props = withDefaults(defineProps<MToastProps>(), {
  modelValue: false,
  type: 'info',
  duration: 4000,
  actionText: undefined,
});

const emit = defineEmits<MToastEmits>();

let cancelDismiss: Teardown = () => {};

const scheduleDismiss = () => {
  cancelDismiss();
  const shouldAutoDismiss = props.modelValue && props.duration > 0;
  cancelDismiss = shouldAutoDismiss ? after(props.duration, handleClose) : () => {};
};

watch(() => [props.modelValue, props.duration], scheduleDismiss, { immediate: true });
onScopeDispose(() => cancelDismiss());

const handleAction = () => {
  emit('click:action');
};

function handleClose() {
  emit('update:modelValue', false);
  emit('close');
}
</script>

<template>
  <div :class="computeToastClasses(props, props.modelValue)">
    <span class="m-toast__message">{{ props.message }}</span>

    <div class="m-toast__actions">
      <XBtn
        v-if="props.actionText"
        variant="text"
        size="small"
        color="primary"
        @click="handleAction"
      >
        {{ props.actionText }}
      </XBtn>

      <XBtn
        variant="plain"
        size="x-small"
        icon
        @click="handleClose"
      >
        &times;
      </XBtn>
    </div>
  </div>
</template>

<style lang="scss" src="./_m-toast.scss"></style>
