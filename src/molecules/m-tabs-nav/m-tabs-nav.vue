<script setup lang="ts">
import { computed } from 'vue';
import type { MTabsNavProps, MTabsNavEmits, NavTabItem } from './types';
import { computeTabsNavClasses } from './m-tabs-nav.controller';

defineOptions({
  name: 'MTabsNav',
});

const props = withDefaults(defineProps<MTabsNavProps>(), {
  modelValue: undefined,
  grow: false,
  align: 'start',
});

const emit = defineEmits<MTabsNavEmits>();

const activeTab = computed({
  get: () => props.modelValue || (props.tabs[0] ? props.tabs[0].id : ''),
  set: (val: string) => {
    emit('update:modelValue', val);
    emit('tabChange', val);
  },
});

const selectTab = (tab: NavTabItem) => {
  if (tab.disabled) return;
  activeTab.value = tab.id;
};
</script>

<template>
  <nav :class="computeTabsNavClasses(props)" role="tablist">
    <button
      v-for="tab in props.tabs"
      :key="tab.id"
      type="button"
      role="tab"
      :aria-selected="activeTab === tab.id"
      :disabled="tab.disabled"
      :class="[
        'm-tabs-nav__item',
        { 'm-tabs-nav__item--active': activeTab === tab.id }
      ]"
      @click="selectTab(tab)"
    >
      <span v-if="tab.icon" class="m-tabs-nav__icon">{{ tab.icon }}</span>
      <span>{{ tab.label }}</span>
      <span v-if="tab.badge" class="m-tabs-nav__badge">{{ tab.badge }}</span>
    </button>
  </nav>
</template>

<style lang="scss" src="./_m-tabs-nav.scss"></style>
