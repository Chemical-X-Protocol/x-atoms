<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XMenuProps, XMenuEmits } from './types';

defineOptions({
  name: 'XMenu',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XMenuProps>(), {
  modelValue: undefined,
  closeOnContentClick: true,
  location: undefined,
  origin: undefined,
  transition: undefined,
  disabled: false,
  offset: undefined,
});

const emit = defineEmits<XMenuEmits>();
const attrs = useAttrs();

const isOpen = computed({
  get: () => props.modelValue,
  set: (val: boolean | undefined) => emit('update:modelValue', Boolean(val)),
});
</script>

<template>
  <v-menu
    v-bind="attrs"
    :model-value="props.modelValue !== undefined ? isOpen : undefined"
    :close-on-content-click="props.closeOnContentClick"
    :location="(props.location as any)"
    :origin="(props.origin as any)"
    :transition="props.transition"
    :disabled="props.disabled"
    :offset="props.offset"
    class="x-menu"
    @update:model-value="props.modelValue !== undefined ? emit('update:modelValue', $event) : undefined"
  >
    <template v-if="$slots.activator" #activator="scope">
      <slot name="activator" v-bind="(scope as any) || {}" />
    </template>

    <template #default="scope">
      <slot v-bind="(scope as any) || {}" />
    </template>
  </v-menu>
</template>
