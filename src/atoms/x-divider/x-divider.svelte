<script lang="ts">
import type { XDividerProps } from './types';
import { computeDividerClasses } from './x-divider.controller';

interface SvelteDividerProps extends XDividerProps {
  class?: string;
}

let {
  vertical = false,
  inset = false,
  class: className = '',
}: SvelteDividerProps = $props();

const dividerClasses = $derived(
  computeDividerClasses({ vertical, inset }, className).join(' ')
);
</script>

<hr class={dividerClasses} aria-orientation={vertical ? 'vertical' : 'horizontal'} />
