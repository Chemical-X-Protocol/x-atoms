<script setup lang="ts">
import { computed } from 'vue';
import type { MEmptyStateProps, MEmptyStateEmits } from './types';
import XCard from '../../atoms/x-card/x-card.vue';
import XBtn from '../../atoms/x-btn/x-btn.vue';

defineOptions({
  name: 'MEmptyState',
});

const props = withDefaults(defineProps<MEmptyStateProps>(), {
  description: undefined,
  icon: '✨',
  actionText: undefined,
});

const emit = defineEmits<MEmptyStateEmits>();

const hasAction = computed(() => Boolean(props.actionText));

const handleAction = () => {
  emit('click:action');
};
</script>

<template>
  <XCard variant="glass" class="m-empty-state">
    <div class="m-empty-state__icon-wrap">
      <slot name="icon">
        <span>{{ props.icon }}</span>
      </slot>
    </div>

    <h3 class="m-empty-state__title">{{ props.title }}</h3>

    <p v-if="props.description" class="m-empty-state__description">
      {{ props.description }}
    </p>

    <div v-if="hasAction || $slots.action" class="m-empty-state__actions">
      <slot name="action">
        <XBtn variant="elevated" color="primary" @click="handleAction">
          {{ props.actionText }}
        </XBtn>
      </slot>
    </div>
  </XCard>
</template>

<style lang="scss" src="./_m-empty-state.scss"></style>
