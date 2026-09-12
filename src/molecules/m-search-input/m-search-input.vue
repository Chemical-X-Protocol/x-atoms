<script setup lang="ts">
import { ref, watch } from 'vue';
import type { MSearchInputProps, MSearchInputEmits } from './types';
import { createDebounce, computeSearchInputClasses } from './m-search-input.controller';
import XTextField from '../../atoms/x-text-field/x-text-field.vue';

defineOptions({
  name: 'MSearchInput',
});

const props = withDefaults(defineProps<MSearchInputProps>(), {
  modelValue: '',
  placeholder: 'Search...',
  debounceMs: 250,
  loading: false,
  clearable: true,
  disabled: false,
  size: 'default',
});

const emit = defineEmits<MSearchInputEmits>();
const internalQuery = ref(props.modelValue);

const emitSearchDebounced = createDebounce((val: string) => {
  emit('search', val);
}, props.debounceMs);

watch(
  () => props.modelValue,
  (newVal) => {
    internalQuery.value = newVal;
  }
);

const handleInput = (val: string | number) => {
  const strVal = String(val);
  internalQuery.value = strVal;
  emit('update:modelValue', strVal);
  emitSearchDebounced(strVal);
};

const handleClear = () => {
  internalQuery.value = '';
  emit('update:modelValue', '');
  emit('clear');
  emit('search', '');
};
</script>

<template>
  <div :class="computeSearchInputClasses(props)">
    <XTextField
      :model-value="internalQuery"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :clearable="props.clearable"
      density="compact"
      hide-details
      @update:model-value="handleInput"
      @click:clear="handleClear"
    >
      <template #prepend-inner>
        <slot name="prepend-inner">
          <span class="m-search-input__icon">🔍</span>
        </slot>
      </template>

      <template v-if="$slots['append-inner']" #append-inner="scope">
        <slot name="append-inner" v-bind="scope || {}" />
      </template>
    </XTextField>
  </div>
</template>

<style lang="scss" src="./_m-search-input.scss"></style>
