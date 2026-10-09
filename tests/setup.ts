// happy-dom lacks a few browser APIs that Vuetify touches during mount.
const globalScope = globalThis as Record<string, unknown>;

class NoopResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

const hasResizeObserver = typeof globalScope.ResizeObserver === 'function';
if (!hasResizeObserver) globalScope.ResizeObserver = NoopResizeObserver;

// Vuetify overlays (VDialog, VMenu) position against visualViewport.
const hasVisualViewport = typeof globalScope.visualViewport === 'object' && globalScope.visualViewport !== null;
if (!hasVisualViewport) {
  globalScope.visualViewport = Object.assign(new EventTarget(), {
    width: 1024,
    height: 768,
    offsetLeft: 0,
    offsetTop: 0,
    pageLeft: 0,
    pageTop: 0,
    scale: 1,
  });
}

// React 18+ act() support outside a test framework integration.
globalScope.IS_REACT_ACT_ENVIRONMENT = true;
