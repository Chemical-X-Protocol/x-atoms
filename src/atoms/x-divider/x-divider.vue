<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XDividerProps } from './types';
import { computeDividerClasses } from './x-divider.controller';

defineOptions({
  name: 'XDivider',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XDividerProps>(), {
  vertical: false,
  inset: false,
  color: undefined,
  thickness: undefined,
});

const attrs = useAttrs();
const classes = computed(() => computeDividerClasses(props));
</script>

<template>
  <v-divider
    v-bind="attrs"
    :vertical="props.vertical"
    :inset="props.inset"
    :color="props.color"
    :thickness="props.thickness"
    :class="classes"
  />
</template>

<style lang="scss" src="./_x-divider.scss"></style>
