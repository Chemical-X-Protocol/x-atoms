import { type DisposerFunction } from '../../core/index.js';
/**
 * A stable disposer whose teardowns run on unmount. A fresh inner disposer is
 * armed after each unmount, so StrictMode's mount, unmount, mount stays correct.
 */
export declare const useDisposer: () => DisposerFunction;
