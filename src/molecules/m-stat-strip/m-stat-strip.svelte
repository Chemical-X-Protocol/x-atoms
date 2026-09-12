<script lang="ts">
import type { MStatStripProps } from './types';
import { computeGridColumnsStyle } from './m-stat-strip.controller';
import MKpiTile from '../m-kpi-tile/m-kpi-tile.svelte';

let {
  stats,
  columns = 4,
}: MStatStripProps = $props();

const gridStyle = $derived(computeGridColumnsStyle(columns));
</script>

<div class="m-stat-strip" style:grid-template-columns={gridStyle.gridTemplateColumns}>
  {#each stats as stat, idx (`${stat.label}-${idx}`)}
    <MKpiTile
      label={stat.label}
      value={stat.value}
      subtext={stat.subtext}
      trend={stat.trend}
      trendValue={stat.trendValue}
      icon={stat.icon}
    />
  {/each}
</div>

<style lang="scss" src="./_m-stat-strip.scss"></style>
