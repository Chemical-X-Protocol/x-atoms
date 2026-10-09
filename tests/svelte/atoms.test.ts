import { describe, it, expect } from 'vitest';
import { createRawSnippet, flushSync, mount, unmount } from 'svelte';
import * as Svelte from '../../src/svelte';

const text = (value: string) => createRawSnippet(() => ({ render: () => `<span>${value}</span>` }));

const mountInto = (component: any, props: Record<string, unknown>) => {
  const target = document.createElement('div');
  document.body.appendChild(target);
  const instance = mount(component, { target, props });
  flushSync();
  return { target, destroy: () => unmount(instance) };
};

describe('svelte adapters of the new atoms', () => {
  it('XText renders the variant element with tone classes', () => {
    const view = mountInto(Svelte.XText, { variant: 'subtitle', tone: 'sky', children: text('Sub') });
    expect(view.target.querySelector('h3.x-text.x-text--subtitle.x-tone--sky')?.textContent).toBe('Sub');
    view.destroy();
  });

  it('XStack and XGrid render layout classes', () => {
    const stack = mountInto(Svelte.XStack, { direction: 'row', gap: 'xs', children: text('a') });
    expect(stack.target.querySelector('.x-stack--row.x-stack--gap-xs')).not.toBeNull();
    const grid = mountInto(Svelte.XGrid, { columns: 4, children: text('b') });
    expect(grid.target.querySelector('.x-grid--cols-4')).not.toBeNull();
    stack.destroy();
    grid.destroy();
  });

  it('XTextarea shows its value and counter', () => {
    const view = mountInto(Svelte.XTextarea, { modelValue: 'hello', maxlength: 20, label: 'Notes' });
    expect(view.target.querySelector('textarea')?.value).toBe('hello');
    expect(view.target.querySelector('.x-textarea__counter')?.textContent).toBe('5 / 20');
    view.destroy();
  });

  it('XNavDrawer hides when closed and shows content when open', () => {
    const open = mountInto(Svelte.XNavDrawer, { children: text('Links') });
    expect(open.target.querySelector('nav.x-nav-drawer--native')?.textContent).toContain('Links');
    const closed = mountInto(Svelte.XNavDrawer, { modelValue: false });
    expect(closed.target.querySelector('nav')?.classList.contains('x-nav-drawer--closed')).toBe(true);
    open.destroy();
    closed.destroy();
  });

  it('XDialog renders when open and closes on Escape', () => {
    const view = mountInto(Svelte.XDialog, { modelValue: true, children: text('Dialog body') });
    expect(view.target.querySelector('[role="dialog"]')?.textContent).toContain('Dialog body');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    flushSync();
    expect(view.target.querySelector('[role="dialog"]')).toBeNull();
    view.destroy();
  });
});
