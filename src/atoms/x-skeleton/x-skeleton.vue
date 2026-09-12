<script setup lang="ts">
import { computed } from 'vue';
import type { XSkeletonProps } from './types';
import { computeSkeletonClasses, formatDimension } from './x-skeleton.controller';

defineOptions({
  name: 'XSkeleton',
});

const props = withDefaults(defineProps<XSkeletonProps>(), {
  shape: 'rounded',
  animation: 'shimmer',
  width: '100%',
  height: '1rem',
  delay: '0s',
});

const classes = computed(() => computeSkeletonClasses(props));
const resolvedWidth = computed(() => formatDimension(props.width));
const resolvedHeight = computed(() => formatDimension(props.height));
</script>

<template>
  <div
    :class="classes"
    :style="{
      width: resolvedWidth,
      height: resolvedHeight,
      '--x-skeleton-delay': props.delay,
    }"
  />
</template>

<style lang="scss" src="./_x-skeleton.scss"></style>
