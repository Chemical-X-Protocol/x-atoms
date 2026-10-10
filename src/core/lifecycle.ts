/**
 * Chemical X Protocol: Self-Cleaning Disposer & Lifecycle Teardown
 * Pure functional teardown pairs for subscriptions, timers, and DOM events.
 */

export type Teardown = () => void;

export interface DisposerFunction {
  (): void;
  add: (...more: Teardown[]) => void;
}

export const createDisposer = (...cleanups: Teardown[]): DisposerFunction => {
  let isDisposed = false;
  const list = [...cleanups];

  const disposer = () => {
    if (isDisposed) return;
    isDisposed = true;
    for (let i = list.length - 1; i >= 0; i--) {
      try {
        list[i]?.();
      } catch (err) {
        const canLog = typeof console !== 'undefined' && Boolean(console.error);
        if (canLog) {
          console.error('[Disposer] Error during cleanup:', err);
        }
      }
    }
  };

  disposer.add = (...more: Teardown[]) => {
    if (isDisposed) {
      for (const fn of more) fn?.();
    } else {
      list.push(...more);
    }
  };

  return disposer;
};

export const listen = (
  target: EventTarget | null | undefined,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): Teardown => {
  const canListen = !!target && typeof target.addEventListener === 'function';
  if (!canListen) {
    return () => {};
  }
  target.addEventListener(event, handler, options);
  return () => {
    target.removeEventListener(event, handler, options);
  };
};
