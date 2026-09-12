<script setup lang="ts">
import { ref, watch, onScopeDispose } from 'vue';
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

let timerId: any = null;

const clearDismissTimer = () => {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
};

const startDismissTimer = () => {
  clearDismissTimer();
  if (props.duration > 0 && props.modelValue) {
    timerId = setTimeout(() => {
      emit('update:modelValue', false);
      emit('close');
    }, props.duration);
  }
};

watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    startDismissTimer();
  } else {
    clearDismissTimer();
  }
}, { immediate: true });

onScopeDispose(() => {
  clearDismissTimer();
});

const handleAction = () => {
  emit('click:action');
};

const handleClose = () => {
  emit('update:modelValue', false);
  emit('close');
};
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
