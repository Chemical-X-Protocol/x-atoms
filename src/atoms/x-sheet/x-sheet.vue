<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XSheetProps } from './types';

defineOptions({
  name: 'XSheet',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XSheetProps>(), {
  color: undefined,
  elevation: undefined,
  rounded: undefined,
  border: undefined,
  transparent: false,
});

const attrs = useAttrs();

const resolvedColor = computed(() => {
  if (props.transparent) {
    return 'transparent';
  }
  return props.color;
});
</script>

<template>
  <v-sheet
    v-bind="attrs"
    :color="resolvedColor"
    :elevation="props.elevation"
    :rounded="props.rounded"
    :border="props.border"
    :class="['x-sheet', { 'x-sheet--transparent': props.transparent }]"
  >
    <slot />
  </v-sheet>
</template>

<style lang="scss" src="./_x-sheet.scss"></style>
