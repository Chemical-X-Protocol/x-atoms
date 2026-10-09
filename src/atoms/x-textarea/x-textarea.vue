<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XTextareaProps, XTextareaEmits } from './types';

defineOptions({
  name: 'XTextarea',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XTextareaProps>(), {
  modelValue: '',
  label: undefined,
  placeholder: undefined,
  rows: 3,
  autoGrow: false,
  variant: undefined,
  density: 'comfortable',
  hideDetails: false,
  disabled: false,
  readonly: false,
  maxlength: undefined,
});

const emit = defineEmits<XTextareaEmits>();
const attrs = useAttrs();

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<template>
  <v-textarea
    v-model="model"
    v-bind="attrs"
    :label="props.label"
    :placeholder="props.placeholder"
    :rows="props.rows"
    :auto-grow="props.autoGrow"
    :variant="props.variant"
    :density="props.density"
    :hide-details="props.hideDetails"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :maxlength="props.maxlength"
    :counter="props.maxlength"
    class="x-textarea"
  />
</template>
