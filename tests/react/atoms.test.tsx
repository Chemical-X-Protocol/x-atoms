import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { render } from './render';
import * as React from '../../src/react';

describe('react adapters of the new atoms', () => {
  it('XText, XStack and XGrid render the same classes as Vue', () => {
    const view = render(() => (
      <React.XStack direction="row" gap="lg">
        <React.XText variant="title" tone="lime">Title</React.XText>
        <React.XGrid minItemWidth={120}>cell</React.XGrid>
      </React.XStack>
    ));
    expect(view.container.querySelector('div.x-stack.x-stack--row.x-stack--gap-lg')).not.toBeNull();
    expect(view.container.querySelector('h2.x-text--title.x-tone--lime')?.textContent).toBe('Title');
    const grid = view.container.querySelector<HTMLElement>('.x-grid--auto-fill');
    expect(grid?.style.getPropertyValue('--x-grid-min')).toBe('120px');
    view.unmount();
  });

  it('XTextarea reports edits and shows a counter', () => {
    const onChange = vi.fn();
    const view = render(React.XTextarea, { modelValue: 'abc', maxlength: 10, onChange });
    const textarea = view.container.querySelector('textarea')!;
    expect(view.container.querySelector('.x-textarea__counter')?.textContent).toBe('3 / 10');
    act(() => {
      const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')!.set!;
      setter.call(textarea, 'abcd');
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    });
    expect(onChange).toHaveBeenCalledWith('abcd');
    view.unmount();
  });

  it('XNavDrawer closes from its scrim when temporary', () => {
    const onUpdateModelValue = vi.fn();
    const view = render(React.XNavDrawer, { temporary: true, onUpdateModelValue, children: 'Menu' });
    expect(view.container.querySelector('nav.x-nav-drawer--native')?.textContent).toContain('Menu');
    act(() => (view.container.querySelector('.x-nav-drawer__scrim') as HTMLElement).click());
    expect(onUpdateModelValue).toHaveBeenCalledWith(false);
    view.unmount();
  });

  it('XDialog renders when open and closes on Escape unless persistent', () => {
    const onUpdateModelValue = vi.fn();
    const view = render(React.XDialog, { modelValue: true, onUpdateModelValue, title: 'Hi', children: 'Body' });
    expect(view.container.querySelector('[role="dialog"]')?.textContent).toContain('Body');
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(onUpdateModelValue).toHaveBeenCalledWith(false);
    view.rerender({ modelValue: true, persistent: true, onUpdateModelValue, children: 'Body' });
    onUpdateModelValue.mockClear();
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(onUpdateModelValue).not.toHaveBeenCalled();
    view.unmount();
  });

  it('defaults match the Vue adapter: XBtn has no implicit glass variant', () => {
    const view = render(React.XBtn, { children: 'Go' });
    expect(view.container.querySelector('button')?.classList.contains('x-btn--glass')).toBe(false);
    view.unmount();
  });
});
