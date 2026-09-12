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

## Exports

### 1. Vue 3 + Vuetify
```typescript
import { XBtn, XCard, XDialog, starshipDarkTheme, createXAtomsPlugin } from '@chemx/x-atoms/vue';
import '@chemx/x-atoms/styles';
```

### 2. Svelte 5 (Runes)
```svelte
<script lang="ts">
  import { XBtn, XCard, MKpiTile } from '@chemx/x-atoms/svelte';
  import '@chemx/x-atoms/styles';
</script>
```

### 3. React 19 (JSX)
```tsx
import { XBtn, XCard, MKpiTile } from '@chemx/x-atoms/react';
import '@chemx/x-atoms/styles';
```

### 4. Pure Headless Core (Zero UI Dependencies)
```typescript
import { starshipColors, glassTokens, computeBtnClasses } from '@chemx/x-atoms/core';
```

## Component Catalog

### Atoms
- `<x-btn>`: Button with glass, elevated, flat, and outlined variants.
- `<x-card>`: Glassmorphic panel container with hover lift and slot forwarding.
- `<x-dialog>`: Accessible modal container enforcing action layout standards.
- `<x-text-field>`: Dark-themed input with glass backdrop and cyan focus ring.
- `<x-chip>`: Status pill with semantic color mappings and close handler.
- `<x-sheet>`: Semantic layout wrapper replacing raw `<div>` tags.

### Universal Molecules
- `<m-confirm-dialog>`: Confirmation modal with cancel/confirm actions.
- `<m-kpi-tile>`: Key performance indicator metric card with trend badge.
