<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XBadgeProps } from './types';
import { resolveBadgeDisplay } from './x-badge.controller';

defineOptions({
  name: 'XBadge',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XBadgeProps>(), {
  content: undefined,
  color: 'primary',
  dot: false,
  inline: false,
  max: 99,
  floating: true,
});

const attrs = useAttrs();

const displayText = computed(() => resolveBadgeDisplay(props.content, props.max));
const hasSlotContent = computed(() => Boolean(attrs.default));
</script>

<template>
  <v-badge
    v-bind="attrs"
    :content="displayText"
    :color="props.color"
    :dot="props.dot"
    :inline="props.inline"
    :max="props.max"
    :floating="props.floating"
    class="x-badge"
  >
    <slot />
  </v-badge>
</template>
