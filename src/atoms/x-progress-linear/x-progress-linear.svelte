<script lang="ts">
import type { XProgressLinearProps } from './types';
import { clampProgress, computeProgressClasses } from './x-progress-linear.controller';

interface SvelteProgressLinearProps extends XProgressLinearProps {
  class?: string;
}

let {
  modelValue = 0,
  indeterminate = false,
  height = 4,
  rounded = true,
  striped = false,
  class: className = '',
}: SvelteProgressLinearProps = $props();

const progressValue = $derived(clampProgress(modelValue));
const progressClasses = $derived(
  computeProgressClasses({ indeterminate, rounded, striped }, className).join(' ')
);
const resolvedHeight = $derived(typeof height === 'number' ? `${height}px` : height);
</script>

<div
  class={progressClasses}
  style:height={resolvedHeight}
  role="progressbar"
  aria-valuenow={indeterminate ? undefined : progressValue}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div
    class="x-progress-linear__bar"
    style:width={indeterminate ? undefined : `${progressValue}%`}
  ></div>
</div>

<style lang="scss" src="./_x-progress-linear.scss"></style>
