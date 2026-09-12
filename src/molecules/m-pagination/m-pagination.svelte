<script lang="ts">
import type { MPaginationProps } from './types';
import { computePageNumbers, computeItemRange } from './m-pagination.controller';
import XBtn from '../../atoms/x-btn/x-btn.svelte';

interface SveltePaginationProps extends MPaginationProps {
  onpagechange?: (page: number) => void;
}

let {
  currentPage = $bindable(1),
  totalPages,
  pageSize = 20,
  totalItems = 0,
  maxVisiblePages = 5,
  showRange = true,
  onpagechange,
}: SveltePaginationProps = $props();

const pageNumbers = $derived(
  computePageNumbers(currentPage, totalPages, maxVisiblePages)
);
const range = $derived(computeItemRange(currentPage, pageSize, totalItems));
const canGoPrev = $derived(currentPage > 1);
const canGoNext = $derived(currentPage < totalPages);

const setPage = (page: number) => {
  if (page >= 1 && page <= totalPages && page !== currentPage) {
    currentPage = page;
    onpagechange?.(page);
  }
};
</script>

<div class="m-pagination">
  {#if showRange && totalItems}
    <div class="m-pagination__info">
      Showing {range.start} to {range.end} of {range.total} items
    </div>
  {:else}
    <div></div>
  {/if}

  <div class="m-pagination__controls">
    <XBtn
      variant="glass"
      size="small"
      disabled={!canGoPrev}
      onclick={() => setPage(currentPage - 1)}
    >
      {#snippet children()}Prev{/snippet}
    </XBtn>

    {#each pageNumbers as page (page)}
      <XBtn
        variant={page === currentPage ? 'elevated' : 'glass'}
        size="small"
        class={page === currentPage ? 'm-pagination__btn m-pagination__btn--active' : 'm-pagination__btn'}
        onclick={() => setPage(page)}
      >
        {#snippet children()}{page}{/snippet}
      </XBtn>
    {/each}

    <XBtn
      variant="glass"
      size="small"
      disabled={!canGoNext}
      onclick={() => setPage(currentPage + 1)}
    >
      {#snippet children()}Next{/snippet}
    </XBtn>
  </div>
</div>

<style lang="scss" src="./_m-pagination.scss"></style>
