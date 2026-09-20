<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XAvatarProps } from './types';
import { computeAvatarClasses, getInitials } from './x-avatar.controller';

defineOptions({
  name: 'XAvatar',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XAvatarProps>(), {
  src: undefined,
  alt: undefined,
  text: undefined,
  size: 'default',
  rounded: undefined,
  bordered: false,
  status: undefined,
});

const attrs = useAttrs();

const initials = computed(() => getInitials(props.text || props.alt));
const hasImage = computed(() => Boolean(props.src));
const hasStatus = computed(() => Boolean(props.status));
</script>

<template>
  <v-avatar
    v-bind="attrs"
    :size="props.size"
    :rounded="props.rounded"
    :class="computeAvatarClasses(props)"
  >
    <img v-if="hasImage" :src="props.src" :alt="props.alt || 'Avatar'" />
    <span v-else-if="initials">{{ initials }}</span>
    <slot v-else />

    <span
      v-if="hasStatus"
      :class="['x-avatar__status-dot', `x-avatar__status-dot--${props.status}`]"
    />
  </v-avatar>
</template>
