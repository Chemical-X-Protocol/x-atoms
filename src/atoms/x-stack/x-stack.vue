<script setup lang="ts">
import { computed } from 'vue';
import type { XStackProps } from './types';
import { computeStackClasses } from './x-stack.controller';

defineOptions({ name: 'XStack' });

const props = withDefaults(defineProps<XStackProps>(), {
  direction: 'column',
  gap: 'md',
  align: undefined,
  justify: undefined,
  wrap: false,
  tag: 'div',
});

const classes = computed(() => computeStackClasses(props));
</script>

<template>
  <component :is="props.tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss" src="./_x-stack.scss"></style>
