<script setup lang="ts">
import { computed } from 'vue';
import type { XGridProps } from './types';
import { computeGridClasses, computeGridVars } from './x-grid.controller';

defineOptions({ name: 'XGrid' });

const props = withDefaults(defineProps<XGridProps>(), {
  columns: 1,
  minItemWidth: undefined,
  gap: 'md',
  align: undefined,
  tag: 'div',
});

const classes = computed(() => computeGridClasses(props));
const gridVars = computed(() => computeGridVars(props));
</script>

<template>
  <component :is="props.tag" :class="classes" :style="gridVars">
    <slot />
  </component>
</template>

<style lang="scss" src="./_x-grid.scss"></style>
