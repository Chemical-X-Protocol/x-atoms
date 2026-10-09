import { type DisposerFunction, type Teardown } from '../../core/index.js';
/**
 * Registers `teardown` with the component being initialised. Returns false
 * outside component init (Svelte throws there), so callers keep the teardown.
 */
export declare const bindToComponent: (teardown: Teardown) => boolean;
/** A disposer flushed when the component is destroyed. Outside a component, call it yourself. */
export declare const useDisposer: (...cleanups: Teardown[]) => DisposerFunction;
