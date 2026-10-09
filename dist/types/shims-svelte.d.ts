// Svelte components are type-checked by svelte-check, not vue-tsc.
// This shim lets the TypeScript entry points import them.
declare module '*.svelte' {
  import type { Component } from 'svelte';
  const component: Component<Record<string, any>>;
  export default component;
}
