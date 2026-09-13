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
  variant: 'glass',
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
    <template v-if="$slots.prepend" #prepend="scope">
      <slot name="prepend" v-bind="(scope as any) || {}" />
    </template>
    <template v-if="$slots.title" #title="scope">
      <slot name="title" v-bind="(scope as any) || {}" />
    </template>
    <template #default="scope">
      <slot v-bind="(scope as any) || {}" />
    </template>
    <template v-if="$slots.append" #append="scope">
      <slot name="append" v-bind="(scope as any) || {}" />
    </template>
    <template v-if="$slots.close" #close="scope">
      <slot name="close" v-bind="(scope as any) || {}" />
    </template>
  </v-alert>
</template>

<style lang="scss" src="./_x-alert.scss"></style>
