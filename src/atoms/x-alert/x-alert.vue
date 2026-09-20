<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XAlertProps, XAlertEmits } from './types';

defineOptions({
  name: 'XAlert',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XAlertProps>(), {
  type: 'info',
  title: undefined,
  text: undefined,
  closable: false,
  variant: undefined,
});

const emit = defineEmits<XAlertEmits>();
const attrs = useAttrs();

const computedVuetifyVariant = computed(() => {
  if (props.variant === 'glass') return 'flat';
  return props.variant;
});

const handleClose = () => {
  emit('click:close');
};
</script>

<template>
  <v-alert
    v-bind="attrs"
    :type="(props.type as any)"
    :title="props.title"
    :text="props.text"
    :closable="props.closable"
    :variant="computedVuetifyVariant"
    class="x-alert"
    @click:close="handleClose"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template #default>
      <slot />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots.close" #close="scope">
      <slot name="close" v-bind="(scope as any) || {}" />
    </template>
  </v-alert>
</template>
