<script lang="ts">
import type { Snippet } from 'svelte';
import type { XAvatarProps } from './types';
import { computeAvatarClasses, getInitials } from './x-avatar.controller';

interface SvelteAvatarProps extends XAvatarProps {
  class?: string;
  children?: Snippet;
}

let {
  src = undefined,
  alt = undefined,
  text = undefined,
  size = 'default',
  bordered = false,
  status = undefined,
  class: className = '',
  children,
}: SvelteAvatarProps = $props();

const avatarClasses = $derived(
  computeAvatarClasses({ size, bordered, status }, className).join(' ')
);
const initials = $derived(getInitials(text || alt));
</script>

<div class={avatarClasses}>
  {#if src}
    <img {src} alt={alt || 'Avatar'} />
  {:else if initials}
    <span>{initials}</span>
  {:else if children}
    {@render children()}
  {/if}

  {#if status}
    <span class={['x-avatar__status-dot', `x-avatar__status-dot--${status}`].join(' ')}></span>
  {/if}
</div>

<style lang="scss" src="./_x-avatar.scss"></style>
