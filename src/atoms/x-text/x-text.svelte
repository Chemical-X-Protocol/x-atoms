<script lang="ts">
import type { Snippet } from 'svelte';
import type { XTextProps } from './types';
import { computeTextClasses, resolveTextTag } from './x-text.controller';

interface SvelteTextProps extends XTextProps {
  class?: string;
  children?: Snippet;
}

let {
  tag = undefined,
  variant = 'body',
  tone = undefined,
  weight = undefined,
  align = undefined,
  truncate = false,
  class: className = '',
  children,
}: SvelteTextProps = $props();

const element = $derived(resolveTextTag({ tag, variant }));
const textClasses = $derived(computeTextClasses({ variant, tone, weight, align, truncate }, className).join(' '));
</script>

<svelte:element this={element} class={textClasses}>
  {@render children?.()}
</svelte:element>

<style lang="scss" src="./_x-text.scss"></style>
