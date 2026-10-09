import { type DisposerFunction, type Teardown } from '../../core/index.js';
/**
 * A disposer that flushes when the current effect scope (component setup,
 * `effectScope`, or a Pinia store) is disposed. Outside a scope, call it yourself.
 */
export declare const useDisposer: (...cleanups: Teardown[]) => DisposerFunction;
