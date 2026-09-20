<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XSwitchProps, XSwitchEmits } from './types';

defineOptions({
  name: 'XSwitch',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XSwitchProps>(), {
  modelValue: false,
  label: undefined,
  disabled: false,
  color: 'primary',
  hideDetails: 'auto',
});

const emit = defineEmits<XSwitchEmits>();
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
  <v-switch
    v-model="model"
    v-bind="attrs"
    :label="props.label"
    :disabled="props.disabled"
    :color="props.color"
    :hide-details="props.hideDetails"
    class="x-switch"
  >
    <template v-if="$slots.label" #label="scope">
      <slot name="label" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.thumb" #thumb="scope">
      <slot name="thumb" v-bind="scope || {}" />
    </template>
  </v-switch>
</template>
