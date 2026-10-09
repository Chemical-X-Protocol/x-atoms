<script lang="ts">
import type { Snippet } from 'svelte';
import type { XNavDrawerProps } from './types';
import { computeNavDrawerClasses, computeNavDrawerVars, hasDrawerScrim } from './x-nav-drawer.controller';
import { toStyleString } from '../../core';

interface SvelteNavDrawerProps extends XNavDrawerProps {
  class?: string;
  prepend?: Snippet;
  append?: Snippet;
  children?: Snippet;
}

let {
  modelValue = $bindable(true),
  location = 'start',
  rail = false,
  temporary = false,
  permanent = false,
  width = 256,
  floating = false,
  class: className = '',
  prepend,
  append,
  children,
}: SvelteNavDrawerProps = $props();

const state = $derived({ modelValue, location, rail, temporary, permanent, width, floating });
const drawerClasses = $derived(computeNavDrawerClasses(state, `x-nav-drawer--native ${className}`.trim()).join(' '));
const drawerStyle = $derived(toStyleString(computeNavDrawerVars(state)));
const showScrim = $derived(hasDrawerScrim(state));
</script>

{#if showScrim}
  <div class="x-nav-drawer__scrim" role="presentation" onclick={() => { modelValue = false; }}></div>
{/if}
<nav class={drawerClasses} style={drawerStyle}>
  {@render prepend?.()}
  <div class="x-nav-drawer__content">{@render children?.()}</div>
  {@render append?.()}
</nav>

<style lang="scss" src="./_x-nav-drawer.scss"></style>
