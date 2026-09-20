<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XProgressLinearProps } from './types';
import { clampProgress } from './x-progress-linear.controller';

defineOptions({
  name: 'XProgressLinear',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XProgressLinearProps>(), {
  modelValue: 0,
  indeterminate: false,
  color: 'primary',
  height: 4,
  rounded: true,
  striped: false,
});

const attrs = useAttrs();
const progressValue = computed(() => clampProgress(props.modelValue));
</script>

<template>
  <v-progress-linear
    v-bind="attrs"
    :model-value="progressValue"
    :indeterminate="props.indeterminate"
    :color="props.color"
    :height="props.height"
    :rounded="props.rounded"
    :striped="props.striped"
    class="x-progress-linear"
  />
</template>
