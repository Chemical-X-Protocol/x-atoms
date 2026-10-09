import { getCurrentScope, onScopeDispose } from 'vue';
import { createDisposer, type DisposerFunction, type Teardown } from '../../core';

/**
 * A disposer that flushes when the current effect scope (component setup,
 * `effectScope`, or a Pinia store) is disposed. Outside a scope, call it yourself.
 */
export const useDisposer = (...cleanups: Teardown[]): DisposerFunction => {
  const disposer = createDisposer(...cleanups);
  const hasScope = Boolean(getCurrentScope());
  if (hasScope) onScopeDispose(disposer);
  return disposer;
};
