import type { App } from 'vue';

// Atoms
export { default as XBtn } from './atoms/x-btn/x-btn.vue';
export { default as XCard } from './atoms/x-card/x-card.vue';
export { default as XDialog } from './atoms/x-dialog/x-dialog.vue';
export { default as XTextField } from './atoms/x-text-field/x-text-field.vue';
export { default as XChip } from './atoms/x-chip/x-chip.vue';
export { default as XSheet } from './atoms/x-sheet/x-sheet.vue';

// Molecules
export { default as MConfirmDialog } from './molecules/m-confirm-dialog/m-confirm-dialog.vue';
export { default as MKpiTile } from './molecules/m-kpi-tile/m-kpi-tile.vue';

// Theme & Tokens
export { starshipDarkTheme } from './theme/starship-theme';
export * from './core';

// Global Vue Plugin
import XBtn from './atoms/x-btn/x-btn.vue';
import XCard from './atoms/x-card/x-card.vue';
import XDialog from './atoms/x-dialog/x-dialog.vue';
import XTextField from './atoms/x-text-field/x-text-field.vue';
import XChip from './atoms/x-chip/x-chip.vue';
import XSheet from './atoms/x-sheet/x-sheet.vue';
import MConfirmDialog from './molecules/m-confirm-dialog/m-confirm-dialog.vue';
import MKpiTile from './molecules/m-kpi-tile/m-kpi-tile.vue';

export const createXAtomsPlugin = () => ({
  install(app: App) {
    app.component('XBtn', XBtn);
    app.component('XCard', XCard);
    app.component('XDialog', XDialog);
    app.component('XTextField', XTextField);
    app.component('XChip', XChip);
    app.component('XSheet', XSheet);
    app.component('MConfirmDialog', MConfirmDialog);
    app.component('MKpiTile', MKpiTile);
  },
});

export default createXAtomsPlugin;
