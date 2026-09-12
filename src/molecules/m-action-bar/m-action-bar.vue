<script setup lang="ts">
import type { MActionBarProps } from './types';
import { computeActionBarClasses } from './m-action-bar.controller';
import XSheet from '../../atoms/x-sheet/x-sheet.vue';

defineOptions({
  name: 'MActionBar',
});

const props = withDefaults(defineProps<MActionBarProps>(), {
  title: undefined,
  position: 'static',
  bordered: true,
});
</script>

<template>
  <XSheet :class="computeActionBarClasses(props)">
    <div class="m-action-bar__start">
      <slot name="start">
        <h2 v-if="props.title" class="m-action-bar__title">{{ props.title }}</h2>
      </slot>
    </div>

    <div v-if="$slots.default" class="m-action-bar__center">
      <slot />
    </div>

    <div v-if="$slots.end" class="m-action-bar__end">
      <slot name="end" />
    </div>
  </XSheet>
</template>

<style lang="scss" src="./_m-action-bar.scss"></style>
