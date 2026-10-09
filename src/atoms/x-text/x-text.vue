<script setup lang="ts">
import { computed } from 'vue';
import type { XTextProps } from './types';
import { computeTextClasses, resolveTextTag } from './x-text.controller';

defineOptions({ name: 'XText' });

const props = withDefaults(defineProps<XTextProps>(), {
  tag: undefined,
  variant: 'body',
  tone: undefined,
  weight: undefined,
  align: undefined,
  truncate: false,
});

const tag = computed(() => resolveTextTag(props));
const classes = computed(() => computeTextClasses(props));
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss" src="./_x-text.scss"></style>
