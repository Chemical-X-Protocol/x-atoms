<script setup lang="ts">
import { computed } from 'vue';
import type { MPaginationProps, MPaginationEmits } from './types';
import { computePageNumbers, computeItemRange } from './m-pagination.controller';
import XBtn from '../../atoms/x-btn/x-btn.vue';
import XSheet from '../../atoms/x-sheet/x-sheet.vue';

defineOptions({
  name: 'MPagination',
});

const props = withDefaults(defineProps<MPaginationProps>(), {
  pageSize: 20,
  totalItems: 0,
  maxVisiblePages: 5,
  showRange: true,
});

const emit = defineEmits<MPaginationEmits>();

const pageNumbers = computed(() =>
  computePageNumbers(props.currentPage, props.totalPages, props.maxVisiblePages)
);

const range = computed(() =>
  computeItemRange(props.currentPage, props.pageSize, props.totalItems)
);

const canGoPrev = computed(() => props.currentPage > 1);
const canGoNext = computed(() => props.currentPage < props.totalPages);

const setPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('update:currentPage', page);
    emit('pageChange', page);
  }
};
</script>

<template>
  <XSheet transparent class="m-pagination">
    <div v-if="props.showRange && props.totalItems" class="m-pagination__info">
      Showing {{ range.start }} to {{ range.end }} of {{ range.total }} items
    </div>
    <div v-else />

    <div class="m-pagination__controls">
      <XBtn
        variant="glass"
        size="small"
        :disabled="!canGoPrev"
        @click="setPage(props.currentPage - 1)"
      >
        Prev
      </XBtn>

      <XBtn
        v-for="page in pageNumbers"
        :key="page"
        :variant="page === props.currentPage ? 'elevated' : 'glass'"
        size="small"
        :class="[
          'm-pagination__btn',
          { 'm-pagination__btn--active': page === props.currentPage }
        ]"
        @click="setPage(page)"
      >
        {{ page }}
      </XBtn>

      <XBtn
        variant="glass"
        size="small"
        :disabled="!canGoNext"
        @click="setPage(props.currentPage + 1)"
      >
        Next
      </XBtn>
    </div>
  </XSheet>
</template>

<style lang="scss" src="./_m-pagination.scss"></style>
