<script lang="ts">
import type { Snippet } from 'svelte';
import type { MKpiTileProps } from './types';
import { resolveTrendClass, resolveTrendSymbol } from './m-kpi-tile.controller';
import XCard from '../../atoms/x-card/x-card.svelte';

interface SvelteKpiTileProps extends MKpiTileProps {
  iconSnippet?: Snippet;
}

let {
  label,
  value,
  subtext = undefined,
  trend = undefined,
  trendValue = undefined,
  icon = undefined,
  iconSnippet,
}: SvelteKpiTileProps = $props();

const trendClass = $derived(resolveTrendClass(trend));
const trendSymbol = $derived(resolveTrendSymbol(trend));
const hasTrend = $derived(Boolean(trend && trendValue));
</script>

<XCard variant="glass" hover={true}>
  {#snippet children()}
    <div class="m-kpi-tile">
      <div class="m-kpi-tile__header">
        <span class="m-kpi-tile__label">{label}</span>
        {#if iconSnippet}
          {@render iconSnippet()}
        {:else if icon}
          <span class="m-kpi-tile__icon">{icon}</span>
        {/if}
      </div>

      <div class="m-kpi-tile__value">
        {value}
      </div>

      {#if subtext || hasTrend}
        <div class="m-kpi-tile__footer">
          {#if hasTrend}
            <span class={['m-kpi-tile__trend', trendClass].join(' ')}>
              {trendSymbol}{trendValue}
            </span>
          {/if}
          {#if subtext}
            <span class="m-kpi-tile__subtext">{subtext}</span>
          {/if}
        </div>
      {/if}
    </div>
  {/snippet}
</XCard>

<style lang="scss" src="./_m-kpi-tile.scss"></style>
