<script lang="ts">
import type { MDataTableProps, MDataTableHeader, MDataTableSortState } from './types';
import {
  computeTableClasses,
  getNextSortState,
  resolveItemKey,
  resolveCellValue,
} from './m-data-table.controller';
import XProgressLinear from '../../atoms/x-progress-linear/x-progress-linear.svelte';

interface SvelteDataTableProps extends MDataTableProps {
  class?: string;
  onrowclick?: (item: Record<string, unknown>) => void;
  onsortchange?: (state: MDataTableSortState) => void;
}

let {
  headers = [],
  items = [],
  loading = false,
  emptyText = 'No records found',
  itemKey = 'id',
  sortBy = null,
  sortDesc = false,
  hoverable = true,
  dense = false,
  class: className = '',
  onrowclick,
  onsortchange,
}: SvelteDataTableProps = $props();

const tableClasses = $derived(
  computeTableClasses({ hoverable, dense, loading }, className).join(' ')
);

const isEmpty = $derived(!loading && items.length === 0);

const handleHeaderClick = (header: MDataTableHeader) => {
  if (!header.sortable || !onsortchange) return;
  const nextSort = getNextSortState({ sortBy, sortDesc }, header.key);
  onsortchange(nextSort);
};

const handleRowClick = (item: Record<string, unknown>) => {
  if (onrowclick) {
    onrowclick(item);
  }
};
</script>

<div class={tableClasses}>
  {#if loading}
    <XProgressLinear indeterminate={true} color="primary" />
  {/if}
  <table class="m-data-table__table">
    <thead>
      <tr>
        {#each headers as header (header.key)}
          <th
            class={[
              'm-data-table__th',
              header.sortable && 'm-data-table__th--sortable',
              header.align && `m-data-table__th--align-${header.align}`,
            ].filter(Boolean).join(' ')}
            onclick={() => handleHeaderClick(header)}
          >
            {header.title}
            {#if sortBy === header.key}
              <span class="m-data-table__sort-icon">
                {sortDesc ? '▼' : '▲'}
              </span>
            {/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#if isEmpty}
        <tr>
          <td colspan={headers.length} class="m-data-table__empty">
            {emptyText}
          </td>
        </tr>
      {:else}
        {#each items as item, index (resolveItemKey(item, itemKey, index))}
          <tr class="m-data-table__tr" onclick={() => handleRowClick(item)}>
            {#each headers as header (header.key)}
              <td
                class={[
                  'm-data-table__td',
                  header.align && `m-data-table__td--align-${header.align}`,
                ].filter(Boolean).join(' ')}
              >
                {String(resolveCellValue(item, header))}
              </td>
            {/each}
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<style lang="scss" src="./_m-data-table.scss"></style>
