<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XBtnProps, XBtnVariant } from './types';

defineOptions({
  name: 'XBtn',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XBtnProps>(), {
  variant: 'elevated',
  color: undefined,
  size: 'default',
  block: false,
  loading: false,
  disabled: false,
  icon: false,
});

const attrs = useAttrs();

const isGlassVariant = computed(() => props.variant === 'glass');

const computedVuetifyVariant = computed(() => {
  if (isGlassVariant.value) {
    return 'flat';
  }
  return props.variant as Exclude<XBtnVariant, 'glass'>;
});

const resolvedColor = computed(() => {
  if (isGlassVariant.value && !props.color) {
    return undefined;
  }
  return props.color;
});
</script>

<template>
  <v-btn
    v-bind="attrs"
    :variant="computedVuetifyVariant"
    :color="resolvedColor"
    :size="props.size"
    :block="props.block"
    :loading="props.loading"
    :disabled="props.disabled"
    :icon="props.icon"
    :class="['x-btn', { 'x-btn--glass': isGlassVariant }]"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots.loader" #loader>
      <slot name="loader" />
    </template>
    <template #default>
      <slot />
    </template>
  </v-btn>
</template>

<style lang="scss" src="./_x-btn.scss"></style>
