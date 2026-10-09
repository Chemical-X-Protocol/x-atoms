import { act, createElement, type FunctionComponent } from 'react';
import { createRoot, type Root } from 'react-dom/client';

export interface Rendered {
  container: HTMLElement;
  rerender: (props?: Record<string, unknown>) => void;
  unmount: () => void;
}

/** Minimal render helper on react-dom/client, so tests need no extra testing library. */
export const render = (component: FunctionComponent<any>, props: Record<string, unknown> = {}): Rendered => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  let root: Root | null = null;
  act(() => {
    root = createRoot(container);
    root.render(createElement(component, props));
  });
  return {
    container,
    rerender: (next = props) => act(() => root?.render(createElement(component, next))),
    unmount: () => {
      act(() => root?.unmount());
      container.remove();
    },
  };
};
