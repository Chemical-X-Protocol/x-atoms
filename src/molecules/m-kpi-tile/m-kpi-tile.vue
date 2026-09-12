<script setup lang="ts">
import { computed } from 'vue';
import type { MKpiTileProps } from './types';
import { resolveTrendClass, resolveTrendSymbol } from './m-kpi-tile.controller';
import XCard from '../../atoms/x-card/x-card.vue';

defineOptions({
  name: 'MKpiTile',
});

const props = withDefaults(defineProps<MKpiTileProps>(), {
  subtext: undefined,
  trend: undefined,
  trendValue: undefined,
  icon: undefined,
});

const trendClass = computed(() => resolveTrendClass(props.trend));
const trendSymbol = computed(() => resolveTrendSymbol(props.trend));
const hasTrend = computed(() => Boolean(props.trend && props.trendValue));
</script>

<template>
  <XCard variant="glass" hover>
    <div class="m-kpi-tile">
      <div class="m-kpi-tile__header">
        <span class="m-kpi-tile__label">{{ props.label }}</span>
        <slot name="icon">
          <span v-if="props.icon" class="m-kpi-tile__icon">{{ props.icon }}</span>
        </slot>
      </div>

      <div class="m-kpi-tile__value">
        {{ props.value }}
      </div>

      <div v-if="props.subtext || hasTrend" class="m-kpi-tile__footer">
        <span v-if="hasTrend" :class="['m-kpi-tile__trend', trendClass]">
          {{ trendSymbol }}{{ props.trendValue }}
        </span>
        <span v-if="props.subtext" class="m-kpi-tile__subtext">
          {{ props.subtext }}
        </span>
      </div>
    </div>
  </XCard>
</template>

<style lang="scss" src="./_m-kpi-tile.scss"></style>
