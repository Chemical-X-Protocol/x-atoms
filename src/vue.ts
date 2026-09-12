import type { App } from 'vue';

// Atoms
export { default as XBtn } from './atoms/x-btn/x-btn.vue';
export { default as XCard } from './atoms/x-card/x-card.vue';
export { default as XChip } from './atoms/x-chip/x-chip.vue';
export { default as XDialog } from './atoms/x-dialog/x-dialog.vue';
export { default as XSheet } from './atoms/x-sheet/x-sheet.vue';
export { default as XTextField } from './atoms/x-text-field/x-text-field.vue';
export { default as XAvatar } from './atoms/x-avatar/x-avatar.vue';
export { default as XBadge } from './atoms/x-badge/x-badge.vue';
export { default as XCheckbox } from './atoms/x-checkbox/x-checkbox.vue';
export { default as XSwitch } from './atoms/x-switch/x-switch.vue';
export { default as XDivider } from './atoms/x-divider/x-divider.vue';
export { default as XSkeleton } from './atoms/x-skeleton/x-skeleton.vue';
export { default as XAlert } from './atoms/x-alert/x-alert.vue';
export { default as XProgressLinear } from './atoms/x-progress-linear/x-progress-linear.vue';
export { default as XTooltip } from './atoms/x-tooltip/x-tooltip.vue';

// Molecules
export { default as MConfirmDialog } from './molecules/m-confirm-dialog/m-confirm-dialog.vue';
export { default as MKpiTile } from './molecules/m-kpi-tile/m-kpi-tile.vue';
export { default as MSearchInput } from './molecules/m-search-input/m-search-input.vue';
export { default as MPagination } from './molecules/m-pagination/m-pagination.vue';
export { default as MEmptyState } from './molecules/m-empty-state/m-empty-state.vue';
export { default as MToast } from './molecules/m-toast/m-toast.vue';
export { default as MStatStrip } from './molecules/m-stat-strip/m-stat-strip.vue';
export { default as MTabsNav } from './molecules/m-tabs-nav/m-tabs-nav.vue';
export { default as MActionBar } from './molecules/m-action-bar/m-action-bar.vue';
export { default as MDataTable } from './molecules/m-data-table/m-data-table.vue';

// Theme & Tokens
export { starshipDarkTheme } from './theme/starship-theme';
export * from './core';

// Internal imports for plugin registration
import XBtn from './atoms/x-btn/x-btn.vue';
import XCard from './atoms/x-card/x-card.vue';
import XChip from './atoms/x-chip/x-chip.vue';
import XDialog from './atoms/x-dialog/x-dialog.vue';
import XSheet from './atoms/x-sheet/x-sheet.vue';
import XTextField from './atoms/x-text-field/x-text-field.vue';
import XAvatar from './atoms/x-avatar/x-avatar.vue';
import XBadge from './atoms/x-badge/x-badge.vue';
import XCheckbox from './atoms/x-checkbox/x-checkbox.vue';
import XSwitch from './atoms/x-switch/x-switch.vue';
import XDivider from './atoms/x-divider/x-divider.vue';
import XSkeleton from './atoms/x-skeleton/x-skeleton.vue';
import XAlert from './atoms/x-alert/x-alert.vue';
import XProgressLinear from './atoms/x-progress-linear/x-progress-linear.vue';
import XTooltip from './atoms/x-tooltip/x-tooltip.vue';

import MConfirmDialog from './molecules/m-confirm-dialog/m-confirm-dialog.vue';
import MKpiTile from './molecules/m-kpi-tile/m-kpi-tile.vue';
import MSearchInput from './molecules/m-search-input/m-search-input.vue';
import MPagination from './molecules/m-pagination/m-pagination.vue';
import MEmptyState from './molecules/m-empty-state/m-empty-state.vue';
import MToast from './molecules/m-toast/m-toast.vue';
import MStatStrip from './molecules/m-stat-strip/m-stat-strip.vue';
import MTabsNav from './molecules/m-tabs-nav/m-tabs-nav.vue';
import MActionBar from './molecules/m-action-bar/m-action-bar.vue';
import MDataTable from './molecules/m-data-table/m-data-table.vue';

export const createXAtomsPlugin = () => ({
  install(app: App) {
    app.component('XBtn', XBtn);
    app.component('XCard', XCard);
    app.component('XChip', XChip);
    app.component('XDialog', XDialog);
    app.component('XSheet', XSheet);
    app.component('XTextField', XTextField);
    app.component('XAvatar', XAvatar);
    app.component('XBadge', XBadge);
    app.component('XCheckbox', XCheckbox);
    app.component('XSwitch', XSwitch);
    app.component('XDivider', XDivider);
    app.component('XSkeleton', XSkeleton);
    app.component('XAlert', XAlert);
    app.component('XProgressLinear', XProgressLinear);
    app.component('XTooltip', XTooltip);

    app.component('MConfirmDialog', MConfirmDialog);
    app.component('MKpiTile', MKpiTile);
    app.component('MSearchInput', MSearchInput);
    app.component('MPagination', MPagination);
    app.component('MEmptyState', MEmptyState);
    app.component('MToast', MToast);
    app.component('MStatStrip', MStatStrip);
    app.component('MTabsNav', MTabsNav);
    app.component('MActionBar', MActionBar);
    app.component('MDataTable', MDataTable);
  },
});

export default createXAtomsPlugin;
