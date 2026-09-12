# @chemx/x-atoms

Universal design system primitives, Starship glassmorphic tokens, and multi-framework component adapters for Project Compass and Chemical X applications.

## Architecture: The 2/3 Headless Protocol

- **66% Headless Core**: Pure TypeScript controllers, state logic, 2-stage atomic booleans, and SCSS glass tokens.
- **33% Thin Adapters**: Native, zero-boilerplate view wrappers for Vue 3, Svelte 5, and React 19.

## Installation

```bash
# Monorepo Workspace
pnpm add @chemx/x-atoms --workspace

# Standalone / External
pnpm add @chemx/x-atoms
```

## Multi-Framework Usage

### 1. Vue 3 + Vuetify
```typescript
import {
  XBtn,
  XCard,
  XDialog,
  MDataTable,
  MTabsNav,
  starshipDarkTheme,
  createXAtomsPlugin,
} from '@chemx/x-atoms/vue';
import '@chemx/x-atoms/styles';
```

### 2. Svelte 5 (Runes)
```svelte
<script lang="ts">
  import { XBtn, XCard, MKpiTile, MDataTable } from '@chemx/x-atoms/svelte';
  import '@chemx/x-atoms/styles';
</script>
```

### 3. React 19 (JSX)
```tsx
import { XBtn, XCard, MKpiTile, MDataTable } from '@chemx/x-atoms/react';
import '@chemx/x-atoms/styles';
```

### 4. Pure Headless Core (Zero UI Dependencies)
```typescript
import { starshipColors, glassTokens, computeBtnClasses } from '@chemx/x-atoms/core';
```

## Component Catalog

### Atoms (15 Foundations)
- `<x-btn>`: Button with glass, elevated, flat, and outlined variants.
- `<x-card>`: Glassmorphic panel container with hover lift and slot forwarding.
- `<x-dialog>`: Accessible modal container enforcing action layout standards.
- `<x-text-field>`: Dark-themed input with glass backdrop and cyan focus ring.
- `<x-chip>`: Status pill with semantic color mappings and close handler.
- `<x-sheet>`: Semantic layout wrapper replacing raw `<div>` tags.
- `<x-avatar>`: User avatars with initials derivation, border glow, and online/offline status dot.
- `<x-badge>`: Floating count badge, dot indicator, and semantic color status mappings.
- `<x-checkbox>`: Accessible toggle checkbox with Starship cyan styling and indeterminate state.
- `<x-switch>`: Toggle switch with sliding thumb and glass track.
- `<x-divider>`: Divider line with horizontal/vertical orientation and gradient inset flare.
- `<x-skeleton>`: Animated shimmer and pulse loading placeholders with zero JS runtime overhead.
- `<x-alert>`: Semantic banner box with status border and dismiss action.
- `<x-progress-linear>`: Smooth animated progress bar with cyan glow and traveling wave.
- `<x-tooltip>`: Accessible hover/focus balloon with positioning calculations.

### Molecules (10 Composites)
- `<m-confirm-dialog>`: Confirmation modal with cancel and confirm actions.
- `<m-kpi-tile>`: Key performance indicator metric card with trend badge.
- `<m-search-input>`: Debounced search field with search icon, clear button, and query emission.
- `<m-pagination>`: Full pagination bar with prev/next buttons, page numbers, item count summary, and rows-per-page selector.
- `<m-empty-state>`: Universal empty state container with icon/avatar, title, subtitle, and action button.
- `<m-toast>`: Floating ephemeral notification banner with slide-in animation and auto-dismiss timer.
- `<m-stat-strip>`: Horizontal responsive layout of multiple KPI metrics with auto-fitting grid.
- `<m-tabs-nav>`: Horizontal tab navigation strip with slider indicator pill and active state tracking.
- `<m-action-bar>`: Flexible top/bottom docked toolbar with start, center, and end action slots.
- `<m-data-table>`: Glassmorphic data grid with multi-column sorting, row click dispatch, loading progress indicator, and custom cell slots.
