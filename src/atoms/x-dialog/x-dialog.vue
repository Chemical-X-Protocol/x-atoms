<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XDialogProps, XDialogEmits } from './types';

defineOptions({
  name: 'XDialog',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XDialogProps>(), {
  modelValue: false,
  maxWidth: 600,
  width: undefined,
  persistent: false,
  scrollable: false,
  fullscreen: false,
});

const emit = defineEmits<XDialogEmits>();
const attrs = useAttrs();

const isOpen = computed({
  get: () => props.modelValue,
  set: (val: boolean) => {
    emit('update:modelValue', val);
    emit('update:model-value', val);
  },
});
</script>

<template>
  <v-dialog
    v-model="isOpen"
    v-bind="attrs"
    :max-width="props.maxWidth"
    :width="props.width"
    :persistent="props.persistent"
    :scrollable="props.scrollable"
    :fullscreen="props.fullscreen"
    :transition="props.transition"
    class="x-dialog"
  >
    <template v-if="$slots.activator" #activator="scope">
      <slot name="activator" v-bind="(scope as any) || {}" />
    </template>

    <v-card class="x-dialog__surface">
      <template v-if="$slots.title" #title="scope">
        <slot name="title" v-bind="(scope as any) || {}" />
      </template>

      <template #default="scope">
        <slot v-bind="(scope as any) || {}" />
      </template>

      <template v-if="$slots.actions" #actions="scope">
        <div class="x-dialog__actions">
          <slot name="actions" v-bind="(scope as any) || {}" />
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" src="./_x-dialog.scss"></style>
