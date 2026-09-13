<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XChipProps, XChipEmits, XChipVariant } from './types';

defineOptions({
  name: 'XChip',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XChipProps>(), {
  variant: 'glass',
  color: undefined,
  size: 'default',
  closable: false,
  disabled: false,
  filter: false,
});

const emit = defineEmits<XChipEmits>();
const attrs = useAttrs();

const isGlassVariant = computed(() => props.variant === 'glass');

const computedVuetifyVariant = computed(() => {
  if (isGlassVariant.value) {
    return 'flat';
  }
  return props.variant as Exclude<XChipVariant, 'glass'>;
});

const handleClose = () => {
  emit('click:close');
};
</script>

<template>
  <v-chip
    v-bind="attrs"
    :variant="computedVuetifyVariant"
    :color="props.color"
    :size="props.size"
    :closable="props.closable"
    :disabled="props.disabled"
    :filter="props.filter"
    :class="['x-chip', { 'x-chip--glass': isGlassVariant }]"
    @click:close="handleClose"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.close" #close>
      <slot name="close" />
    </template>
    <template #default="scope">
      <slot v-bind="(scope as any) || {}" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
  </v-chip>
</template>

<style lang="scss" src="./_x-chip.scss"></style>
