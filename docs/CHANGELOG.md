# Changelog

All notable changes to the `@chemx/x-atoms` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2026-09-12]

### Added
- Core headless design tokens in `src/core/tokens.ts` and `src/core/types.ts`.
- SCSS Starship glassmorphism mixins and variables in `src/styles/`.
- Vuetify 3 dark mode theme definition in `src/theme/starship-theme.ts`.
- Six canonical `x-*` atoms (`x-btn`, `x-card`, `x-chip`, `x-dialog`, `x-text-field`, `x-sheet`) with pure TS controllers.
- Two universal molecules (`m-confirm-dialog`, `m-kpi-tile`) with pure TS controllers.
- Multi-framework adapters for Vue 3, Svelte 5, and React 19.
- Subpath package exports (`@chemx/x-atoms`, `@chemx/x-atoms/vue`, `@chemx/x-atoms/svelte`, `@chemx/x-atoms/react`, `@chemx/x-atoms/core`).
