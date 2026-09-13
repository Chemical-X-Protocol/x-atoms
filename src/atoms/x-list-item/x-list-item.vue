<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XListItemProps } from './types';
import { resolveVuetifyListItemVariant } from './x-list-item.controller';

defineOptions({
  name: 'XListItem',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XListItemProps>(), {
  title: undefined,
  subtitle: undefined,
  value: undefined,
  active: undefined,
  disabled: false,
  color: undefined,
  density: undefined,
  lines: undefined,
  variant: undefined,
  rounded: undefined,
  ripple: true,
});

const attrs = useAttrs();

const isGlassVariant = computed(() => props.variant === 'glass');
const computedVuetifyVariant = computed(() => resolveVuetifyListItemVariant(props.variant));
</script>

<template>
  <v-list-item
    v-bind="attrs"
    :title="props.title"
    :subtitle="props.subtitle"
    :value="props.value"
    :active="props.active"
    :disabled="props.disabled"
    :color="props.color"
    :density="props.density"
    :lines="props.lines"
    :variant="computedVuetifyVariant"
    :rounded="props.rounded"
    :ripple="props.ripple"
    :class="[
      'x-list-item',
      {
        'x-list-item--glass': isGlassVariant,
      }
    ]"
  >
    <template v-if="$slots.prepend" #prepend="scope">
      <slot name="prepend" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.title" #title="scope">
      <slot name="title" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.subtitle" #subtitle="scope">
      <slot name="subtitle" v-bind="scope || {}" />
    </template>
    <template v-if="$slots.append" #append="scope">
      <slot name="append" v-bind="scope || {}" />
    </template>
    <template #default="scope">
      <slot v-bind="scope || {}" />
    </template>
  </v-list-item>
</template>

<style lang="scss" src="./_x-list-item.scss"></style>
