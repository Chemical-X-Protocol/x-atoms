<script setup lang="ts">
import { computed } from 'vue';
import type { MStatStripProps } from './types';
import { computeGridColumnsStyle } from './m-stat-strip.controller';
import MKpiTile from '../m-kpi-tile/m-kpi-tile.vue';

defineOptions({
  name: 'MStatStrip',
});

const props = withDefaults(defineProps<MStatStripProps>(), {
  columns: 4,
});

const gridStyle = computed(() => computeGridColumnsStyle(props.columns));
</script>

<template>
  <div class="m-stat-strip" :style="gridStyle">
    <MKpiTile
      v-for="(stat, idx) in props.stats"
      :key="`${stat.label}-${idx}`"
      :label="stat.label"
      :value="stat.value"
      :subtext="stat.subtext"
      :trend="stat.trend"
      :trend-value="stat.trendValue"
      :icon="stat.icon"
    />
  </div>
</template>

<style lang="scss" src="./_m-stat-strip.scss"></style>
