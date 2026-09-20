<script lang="ts">
import type { XSkeletonProps } from './types';
import { computeSkeletonClasses, formatDimension } from './x-skeleton.controller';

interface SvelteSkeletonProps extends XSkeletonProps {
  class?: string;
}

let {
  shape = 'rounded',
  animation = 'shimmer',
  width = '100%',
  height = '1rem',
  delay = '0s',
  class: className = '',
}: SvelteSkeletonProps = $props();

const skeletonClasses = $derived(
  computeSkeletonClasses({ shape, animation }, className).join(' ')
);
const resolvedWidth = $derived(formatDimension(width));
const resolvedHeight = $derived(formatDimension(height));
</script>

<div
  class={skeletonClasses}
  style:width={resolvedWidth}
  style:height={resolvedHeight}
  style:--x-skeleton-delay={delay}
></div>
