/**
 * Chemical X Protocol: Self-Cleaning Disposer & Lifecycle Teardown
 * Pure functional teardown pairs for subscriptions, timers, and DOM events.
 */
export type Teardown = () => void;
export interface DisposerFunction {
    (): void;
    add: (...more: Teardown[]) => void;
}
export declare const createDisposer: (...cleanups: Teardown[]) => DisposerFunction;
export declare const listen: (target: EventTarget | null | undefined, event: string, handler: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => Teardown;
