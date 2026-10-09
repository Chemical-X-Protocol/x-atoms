// happy-dom lacks a few browser APIs that Vuetify touches during mount.
const globalScope = globalThis as Record<string, unknown>;

class NoopResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

const hasResizeObserver = typeof globalScope.ResizeObserver === 'function';
if (!hasResizeObserver) globalScope.ResizeObserver = NoopResizeObserver;

// React 18+ act() support outside a test framework integration.
globalScope.IS_REACT_ACT_ENVIRONMENT = true;
