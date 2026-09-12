# Changelog

All notable changes to the `@chemx/x-atoms` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2026-09-12]

### Added
- **Navigation & Data Molecules (Phase 4)**:
  - `m-tabs-nav`: Horizontal tab navigation bar with slider indicator pill, active state management, and semantic change emissions.
  - `m-action-bar`: Flexible top/bottom docked toolbar with start, center, and end action slots for view actions and filters.
  - `m-data-table`: Glassmorphic data grid with multi-column sorting, row click dispatch, loading progress indicator, and custom cell slot forwarding.
- **Universal Composite Molecules (Phase 3)**:
  - `m-search-input`: Debounced search field with search icon, clear button, and query emission.
  - `m-pagination`: Full pagination bar with prev/next buttons, numeric page numbers, item count summary, and rows-per-page selector.
  - `m-empty-state`: Universal empty state container with icon/avatar, title, subtitle, and action button.
  - `m-toast`: Floating ephemeral notification banner with slide-in animation and auto-dismiss timer.
  - `m-stat-strip`: Horizontal responsive layout of multiple KPI metrics with auto-fitting grid.
- **Essential Feedback & Form Atoms (Phase 2)**:
  - `x-avatar`: User avatars with initials derivation, border glow, and online/offline status dot.
  - `x-badge`: Floating count badge, dot indicator, and semantic color status mappings.
  - `x-checkbox`: Accessible toggle checkbox with Starship cyan styling and indeterminate state.
  - `x-switch`: Toggle switch with sliding thumb and glass track.
  - `x-divider`: Divider line with horizontal/vertical orientation and gradient inset flare.
  - `x-skeleton`: Animated shimmer and pulse loading placeholders with zero JS runtime overhead.
  - `x-alert`: Semantic banner box with status border and dismiss action.
  - `x-progress-linear`: Smooth animated progress bar with cyan glow and traveling wave.
  - `x-tooltip`: Accessible hover/focus balloon with positioning calculations.
- **Multi-Framework Adapters**:
  - Full Vue 3 + Vuetify adapters for all 15 atoms and 10 molecules.
  - Full Svelte 5 Runes adapters for all 15 atoms and 10 molecules.
  - Full React 19 JSX adapters for all 15 atoms and 10 molecules.
  - Complete pure TypeScript controllers and SCSS stylesheets for all components.
- **Foundation & Core Primitives (Phase 1)**:
  - Repository setup at `Chemical-X-Protocol/x-atoms` linked as Git submodule.
  - Core headless design tokens in `src/core/tokens.ts` and `src/core/types.ts`.
  - SCSS Starship glassmorphism mixins and variables in `src/styles/`.
  - Vuetify 3 dark mode theme definition in `src/theme/starship-theme.ts`.
  - Six initial `x-*` atoms (`x-btn`, `x-card`, `x-chip`, `x-dialog`, `x-sheet`, `x-text-field`).
  - Two initial molecules (`m-confirm-dialog`, `m-kpi-tile`).
  - Dual-org publisher script in `scripts/publish-both.mjs`.
