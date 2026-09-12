<script setup lang="ts">
import { computed } from 'vue';
import type { MDataTableProps, MDataTableHeader } from './types';
import {
  computeTableClasses,
  getNextSortState,
  resolveItemKey,
  resolveCellValue,
} from './m-data-table.controller';
import XProgressLinear from '../../atoms/x-progress-linear/x-progress-linear.vue';

const props = withDefaults(defineProps<MDataTableProps>(), {
  loading: false,
  emptyText: 'No records found',
  itemKey: 'id',
  sortBy: null,
  sortDesc: false,
  hoverable: true,
  dense: false,
});

const emit = defineEmits<{
  (e: 'click:row', item: Record<string, unknown>): void;
  (e: 'update:sort', state: { sortBy: string | null; sortDesc: boolean }): void;
}>();

const tableClasses = computed(() => computeTableClasses(props));
const hasItems = computed(() => props.items.length > 0);
const isEmpty = computed(() => !props.loading && !hasItems.value);

const handleHeaderClick = (header: MDataTableHeader) => {
  if (!header.sortable) return;
  const nextSort = getNextSortState(
    { sortBy: props.sortBy, sortDesc: props.sortDesc },
    header.key
  );
  emit('update:sort', nextSort);
};

const handleRowClick = (item: Record<string, unknown>) => {
  emit('click:row', item);
};
</script>

<template>
  <div :class="tableClasses">
    <x-progress-linear v-if="loading" indeterminate color="primary" />
    <table class="m-data-table__table">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
            :class="[
              'm-data-table__th',
              header.sortable && 'm-data-table__th--sortable',
              header.align && `m-data-table__th--align-${header.align}`,
            ]"
            @click="handleHeaderClick(header)"
          >
            <slot :name="`header.${header.key}`" :header="header">
              {{ header.title }}
              <span v-if="sortBy === header.key" class="m-data-table__sort-icon">
                {{ sortDesc ? '▼' : '▲' }}
              </span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isEmpty">
          <td :colspan="headers.length" class="m-data-table__empty">
            <slot name="empty">{{ emptyText }}</slot>
          </td>
        </tr>
        <tr
          v-for="(item, index) in items"
          :key="resolveItemKey(item, itemKey, index)"
          class="m-data-table__tr"
          @click="handleRowClick(item)"
        >
          <td
            v-for="header in headers"
            :key="header.key"
            :class="[
              'm-data-table__td',
              header.align && `m-data-table__td--align-${header.align}`,
            ]"
          >
            <slot
              :name="`item.${header.key}`"
              :item="item"
              :value="resolveCellValue(item, header)"
            >
              {{ resolveCellValue(item, header) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@use "./m-data-table";
</style>
