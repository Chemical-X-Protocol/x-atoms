<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XCardProps, XCardVariant } from './types';

defineOptions({
  name: 'XCard',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XCardProps>(), {
  variant: 'glass',
  color: undefined,
  loading: false,
  disabled: false,
  hover: false,
});

const attrs = useAttrs();

const isGlassVariant = computed(() => props.variant === 'glass');

const computedVuetifyVariant = computed(() => {
  if (isGlassVariant.value) {
    return 'flat';
  }
  return props.variant as Exclude<XCardVariant, 'glass'>;
});
</script>

<template>
  <v-card
    v-bind="attrs"
    :variant="computedVuetifyVariant"
    :color="props.color"
    :loading="props.loading"
    :disabled="props.disabled"
    :class="[
      'x-card',
      {
        'x-card--glass': isGlassVariant,
        'x-card--hover': props.hover,
      }
    ]"
  >
    <template v-if="$slots.image" #image="scope">
      <slot name="image" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.prepend" #prepend="scope">
      <slot name="prepend" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.title" #title="scope">
      <slot name="title" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.subtitle" #subtitle="scope">
      <slot name="subtitle" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.text" #text="scope">
      <slot name="text" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.actions" #actions="scope">
      <slot name="actions" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.loader" #loader="scope">
      <slot name="loader" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.append" #append="scope">
      <slot name="append" v-bind="scope || {}" />
    </template>
    <template #default="scope">
      <slot v-bind="scope || {}" />
    </template>
  </v-card>
</template>

<style lang="scss" src="./_x-card.scss"></style>
