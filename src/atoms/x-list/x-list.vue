<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { XListProps } from './types';
import { resolveVuetifyListVariant } from './x-list.controller';

defineOptions({
  name: 'XList',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<XListProps>(), {
  density: 'default',
  lines: 'one',
  nav: false,
  color: undefined,
  variant: undefined,
  disabled: false,
});

const attrs = useAttrs();

const isGlassVariant = computed(() => props.variant === 'glass');
const computedVuetifyVariant = computed(() => resolveVuetifyListVariant(props.variant));
</script>

<template>
  <v-list
    v-bind="attrs"
    :density="props.density"
    :lines="props.lines"
    :nav="props.nav"
    :color="props.color"
    :variant="computedVuetifyVariant"
    :disabled="props.disabled"
    :class="[
      'x-list',
      {
        'x-list--glass': isGlassVariant,
      }
    ]"
  >
    <template #default>
      <slot />
    </template>
  </v-list>
</template>

<style lang="scss" src="./_x-list.scss"></style>
