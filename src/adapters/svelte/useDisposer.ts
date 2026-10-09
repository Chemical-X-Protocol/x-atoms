import { onDestroy } from 'svelte';
import { createDisposer, toResultSync, type DisposerFunction, type Teardown } from '../../core';

/**
 * Registers `teardown` with the component being initialised. Returns false
 * outside component init (Svelte throws there), so callers keep the teardown.
 */
export const bindToComponent = (teardown: Teardown): boolean => {
  const [, outsideComponent] = toResultSync(() => onDestroy(teardown));
  return outsideComponent === null;
};

/** A disposer flushed when the component is destroyed. Outside a component, call it yourself. */
export const useDisposer = (...cleanups: Teardown[]): DisposerFunction => {
  const disposer = createDisposer(...cleanups);
  bindToComponent(disposer);
  return disposer;
};
