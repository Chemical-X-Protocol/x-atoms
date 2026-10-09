<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XNavDrawerProps, XNavDrawerEmits } from './types';

defineOptions({
  name: 'XNavDrawer',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XNavDrawerProps>(), {
  modelValue: true,
  location: 'start',
  rail: false,
  temporary: false,
  permanent: false,
  width: 256,
  floating: false,
});

const emit = defineEmits<XNavDrawerEmits>();
const attrs = useAttrs();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
});
</script>

<template>
  <v-navigation-drawer
    v-model="isOpen"
    v-bind="attrs"
    :location="props.location"
    :rail="props.rail"
    :temporary="props.temporary"
    :permanent="props.permanent"
    :width="props.width"
    :floating="props.floating"
    class="x-nav-drawer"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <slot />
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
  </v-navigation-drawer>
</template>
