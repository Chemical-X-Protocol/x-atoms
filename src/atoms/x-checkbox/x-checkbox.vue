<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XCheckboxProps, XCheckboxEmits } from './types';

defineOptions({
  name: 'XCheckbox',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XCheckboxProps>(), {
  modelValue: false,
  label: undefined,
  disabled: false,
  indeterminate: false,
  color: 'primary',
  hideDetails: 'auto',
});

const emit = defineEmits<XCheckboxEmits>();
const attrs = useAttrs();

const model = computed({
  get: () => props.modelValue,
  set: (val: boolean) => {
    emit('update:modelValue', val);
    emit('change', val);
  },
});
</script>

<template>
  <v-checkbox
    v-model="model"
    v-bind="attrs"
    :label="props.label"
    :disabled="props.disabled"
    :indeterminate="props.indeterminate"
    :color="props.color"
    :hide-details="props.hideDetails"
    class="x-checkbox"
  >
    <template v-if="$slots.label" #label="scope">
      <slot name="label" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.default" #default="scope">
      <slot v-bind="scope || {}" />
    </template>
  </v-checkbox>
</template>

<style lang="scss" src="./_x-checkbox.scss"></style>
