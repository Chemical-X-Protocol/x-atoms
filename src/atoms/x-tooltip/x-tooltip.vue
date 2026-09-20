<script setup lang="ts">
import { useAttrs } from 'vue';
import type { XTooltipProps } from './types';

defineOptions({
  name: 'XTooltip',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XTooltipProps>(), {
  text: undefined,
  location: 'top',
  disabled: false,
  openDelay: 150,
  closeDelay: 100,
});

const attrs = useAttrs();
</script>

<template>
  <v-tooltip
    v-bind="attrs"
    :text="props.text"
    :location="props.location"
    :disabled="props.disabled"
    :open-delay="props.openDelay"
    :close-delay="props.closeDelay"
  >
    <template #activator="{ props: tooltipProps }">
      <slot name="activator" :props="tooltipProps">
        <span v-bind="tooltipProps">
          <slot />
        </span>
      </slot>
    </template>

    <template v-if="$slots.default" #default>
      <slot />
    </template>
  </v-tooltip>
</template>
