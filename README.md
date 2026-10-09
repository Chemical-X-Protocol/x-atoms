# @chemx/x-atoms

Design system atoms, molecules and helpers for Chemical X and Project Compass, with Starship glass tokens and adapters for Vue 3 (Vuetify), Svelte 5 and React 19.

## Architecture

- **Headless core** (`@chemx/x-atoms/core`): framework-free TypeScript. Tokens, controllers' shared types, and the helper layer (result tuples, combinators, timers, filters, disposers). It loads in bare Node.
- **Thin adapters**: one view file per framework per component (`.vue` wraps Vuetify; `.svelte` and `.tsx` render plain HTML), plus framework hooks/composables built on the same core.
- **Catalog** (`@chemx/x-atoms/catalog.json`): generated from source. Lists every atom, molecule and helper with props, defaults per framework, emits, slots, what it replaces, and the chemx hazard rule each helper fixes. Atom-aware tooling reads this file.

## Installation

```bash
pnpm add @chemx/x-atoms            # external
pnpm add @chemx/x-atoms --workspace # monorepo
```

Every subpath ships prebuilt ES modules and `.d.ts` files in `dist/`; no bundler is needed to import them.

| Subpath | Contents | Peers |
|---|---|---|
| `@chemx/x-atoms/core` | tokens, types, helpers | none |
| `@chemx/x-atoms` | core + headless controllers + `starshipDarkTheme` | none |
| `@chemx/x-atoms/vue` | components, `createXAtomsPlugin`, composables | vue, vuetify |
| `@chemx/x-atoms/react` | components, hooks | react |
| `@chemx/x-atoms/svelte` | components (precompiled, CSS injected), store helpers | svelte 5 |
| `@chemx/x-atoms/theme` | `starshipDarkTheme`, `starshipLightTheme` | none |
| `@chemx/x-atoms/css/vue` | styles for the Vue molecules and layout atoms | |
| `@chemx/x-atoms/css/components` | framework-neutral styles for every atom and molecule (use with React) | |
| `@chemx/x-atoms/css/glass` | opt-in glass theme for all atoms | |
| `@chemx/x-atoms/css/tokens` | CSS variables: glass, `--x-tone-*`, `--x-space-*` | |

## Usage

```ts
// Vue 3 + Vuetify
import { createXAtomsPlugin, starshipDarkTheme, useAsyncData } from '@chemx/x-atoms/vue';
import '@chemx/x-atoms/css/vue';
import '@chemx/x-atoms/css/glass';
app.use(createVuetify({ theme: { defaultTheme: 'starship', themes: { starship: starshipDarkTheme } } }));
app.use(createXAtomsPlugin());
```

```tsx
// React
import { XBtn, XStack, useAsyncData } from '@chemx/x-atoms/react';
import '@chemx/x-atoms/css/components';
import '@chemx/x-atoms/css/glass';
```

```svelte
<script lang="ts">
  import { XBtn, XText, useAsyncData } from '@chemx/x-atoms/svelte';
</script>
```

```js
// Node, CLIs, workers: no framework
import { toResult, toResultSync, after, createPredicateFilter } from '@chemx/x-atoms/core';
```

## Helpers

| Helper | Fixes chemx hazard | Where |
|---|---|---|
| `toResult(promiseOrThunk)`, `toResultSync`, `mapResult`, `unwrapOr` | shallow/swallowed catch | core |
| `all`/`any`/`none`, `allPass`/`anyPass`/`nonePass`, `createRuleSet` | raw multi-clause conditions | core |
| `createPredicateFilter`, `matchesAnyPattern`, `matchesAllPredicates` | repeated inline filters | core |
| `after`, `every`, `createDebounce`, `createRestartableTimeout`/`Interval` | timers without teardown | core |
| `createDisposer`, `listen` | orphaned listeners | core |
| `useAsyncData` | swallowed fetch errors, stale responses | vue, react, svelte |
| `usePredicateFilter` | repeated filters | vue, react, svelte |
| `useSelfCleaningInterval` / `useSelfCleaningTimeout` | timers without teardown | vue, react, svelte |
| `useDisposer` | teardown on unmount (`onScopeDispose`, effect cleanup, `onDestroy`) | vue, react, svelte |

The catalog's `helpers[].fixes` lists the exact rule ids.

## Components

Atoms (23): x-alert, x-avatar, x-badge, x-btn, x-card, x-checkbox, x-chip, x-dialog (alias x-modal), x-divider, x-grid, x-list, x-list-item, x-menu (Vue only), x-nav-drawer, x-progress-linear, x-sheet, x-skeleton, x-stack, x-switch, x-text, x-text-field, x-textarea, x-tooltip.

Molecules (10): m-action-bar, m-confirm-dialog, m-data-table, m-empty-state, m-kpi-tile, m-pagination, m-search-input, m-stat-strip, m-tabs-nav, m-toast.

Tone palette: `primary`, `secondary`, `success`, `warning`, `error`, `info`, `pink`, `lime`, `sky`, `purple`, `slate`, `muted`. Each tone is a Vuetify theme color, a `--x-tone-<name>` CSS variable and an `.x-tone--<name>` class (`<x-text tone="pink">`).

See `catalog.json` for every prop, default, slot and emit.

## Development

```bash
npm run build          # dist bundles, CSS, declarations, catalog.json
npm run typecheck      # vue-tsc
npm run test:core      # node --test: core helpers, entries, published types, catalog, parity
npm run test:ui        # vitest + happy-dom: Vue mounts, adapter helpers, dist bundles
npm run catalog:check  # fails when catalog.json is stale
```
