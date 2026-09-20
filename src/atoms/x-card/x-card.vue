<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XCardProps, XCardVariant } from './types';

defineOptions({
  name: 'XCard',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XCardProps>(), {
  variant: undefined,
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
  return props.variant as Exclude<XCardVariant, 'glass'> | undefined;
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
    <template v-if="$slots.image" #image>
      <slot name="image" />
    </template>
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.subtitle" #subtitle>
      <slot name="subtitle" />
    </template>
    <template v-if="$slots.text" #text>
      <slot name="text" />
    </template>
    <template v-if="$slots.actions" #actions>
      <slot name="actions" />
    </template>
    <template v-if="$slots.loader" #loader="scope">
      <slot name="loader" v-bind="(scope as any) || {}" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template #default>
      <slot />
    </template>
  </v-card>
</template>
