<script lang="ts">
import type { MTabsNavProps, NavTabItem } from './types';
import { computeTabsNavClasses } from './m-tabs-nav.controller';

interface SvelteTabsNavProps extends MTabsNavProps {
  class?: string;
  ontabchange?: (tabId: string) => void;
}

let {
  tabs,
  modelValue = $bindable(tabs[0] ? tabs[0].id : ''),
  grow = false,
  align = 'start',
  class: className = '',
  ontabchange,
}: SvelteTabsNavProps = $props();

const tabsClasses = $derived(
  computeTabsNavClasses({ tabs, grow, align }, className).join(' ')
);

const selectTab = (tab: NavTabItem) => {
  if (tab.disabled) return;
  modelValue = tab.id;
  ontabchange?.(tab.id);
};
</script>

<nav class={tabsClasses} role="tablist">
  {#each tabs as tab (tab.id)}
    <button
      type="button"
      role="tab"
      aria-selected={modelValue === tab.id}
      disabled={tab.disabled}
      class={['m-tabs-nav__item', modelValue === tab.id ? 'm-tabs-nav__item--active' : ''].join(' ')}
      onclick={() => selectTab(tab)}
    >
      {#if tab.icon}
        <span class="m-tabs-nav__icon">{tab.icon}</span>
      {/if}
      <span>{tab.label}</span>
      {#if tab.badge}
        <span class="m-tabs-nav__badge">{tab.badge}</span>
      {/if}
    </button>
  {/each}
</nav>

<style lang="scss" src="./_m-tabs-nav.scss"></style>
