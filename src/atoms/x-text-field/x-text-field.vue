<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XTextFieldProps, XTextFieldEmits } from './types';

defineOptions({
  name: 'XTextField',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XTextFieldProps>(), {
  modelValue: '',
  label: undefined,
  placeholder: undefined,
  variant: undefined,
  density: 'comfortable',
  hideDetails: false,
  clearable: false,
  type: 'text',
  disabled: false,
  readonly: false,
  prefix: undefined,
  suffix: undefined,
});

const emit = defineEmits<XTextFieldEmits>();
const attrs = useAttrs();

const model = computed({
  get: () => props.modelValue,
  set: (val: string | number) => emit('update:modelValue', val),
});

const handleClear = () => {
  emit('click:clear');
};
</script>

<template>
  <v-text-field
    v-model="model"
    v-bind="attrs"
    :label="props.label"
    :placeholder="props.placeholder"
    :variant="props.variant"
    :density="props.density"
    :hide-details="props.hideDetails"
    :clearable="props.clearable"
    :type="props.type"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :prefix="props.prefix"
    :suffix="props.suffix"
    class="x-text-field"
    @click:clear="handleClear"
  >
    <template v-if="$slots['prepend-inner']" #prepend-inner="scope">
      <slot name="prepend-inner" v-bind="scope || {}" />
    </template>
    <template v-if="$slots['append-inner']" #append-inner="scope">
      <slot name="append-inner" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.prepend" #prepend="scope">
      <slot name="prepend" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.append" #append="scope">
      <slot name="append" v-bind="scope || {}" />
    </template>
  </v-text-field>
</template>
