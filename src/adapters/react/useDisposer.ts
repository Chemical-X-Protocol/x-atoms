import { useEffect, useRef, useState } from 'react';
import { createDisposer, type DisposerFunction, type Teardown } from '../../core';

/**
 * A stable disposer whose teardowns run on unmount. A fresh inner disposer is
 * armed after each unmount, so StrictMode's mount, unmount, mount stays correct.
 */
export const useDisposer = (): DisposerFunction => {
  const current = useRef<DisposerFunction>(createDisposer());
  useEffect(() => () => {
    current.current();
    current.current = createDisposer();
  }, []);
  const [stable] = useState(() => Object.assign(
    () => current.current(),
    { add: (...more: Teardown[]) => current.current.add(...more) }
  ));
  return stable;
};
