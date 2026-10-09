import { describe, it, expect } from 'vitest';
import { createElement, act } from 'react';
import { createRoot } from 'react-dom/client';
import { createRawSnippet, flushSync, mount as mountSvelte, unmount as unmountSvelte } from 'svelte';
import { mount as mountVue } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as ReactBundle from '../../dist/react.js';
import * as SvelteBundle from '../../dist/svelte.js';
import * as VueBundle from '../../dist/vue.js';

const label = (text: string) => createRawSnippet(() => ({ render: () => `<span>${text}</span>` }));

describe('prebuilt dist bundles render without compiling source', () => {
  it('dist/react.js renders XBtn', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    act(() => root.render(createElement(ReactBundle.XBtn, { variant: 'glass' }, 'Go')));
    expect(container.querySelector('button.x-btn')?.textContent).toBe('Go');
    act(() => root.unmount());
  });

  it('dist/svelte.js mounts XBtn', () => {
    const target = document.createElement('div');
    const instance = mountSvelte(SvelteBundle.XBtn, { target, props: { children: label('Go') } });
    flushSync();
    expect(target.querySelector('button.x-btn')?.textContent?.trim()).toBe('Go');
    unmountSvelte(instance);
  });

  it('dist/vue.js mounts XBtn through Vuetify', () => {
    const wrapper = mountVue(VueBundle.XBtn, {
      slots: { default: 'Go' },
      global: { plugins: [createVuetify()] },
    });
    expect(wrapper.find('.x-btn').exists()).toBe(true);
    expect(wrapper.text()).toContain('Go');
    wrapper.unmount();
  });

  it('every framework bundle exposes the same helper names', () => {
    const helpers = ['useAsyncData', 'usePredicateFilter', 'useSelfCleaningInterval', 'useSelfCleaningTimeout', 'useDisposer', 'toResult'];
    for (const bundle of [ReactBundle, SvelteBundle, VueBundle]) {
      const missing = helpers.filter((name) => typeof (bundle as Record<string, unknown>)[name] !== 'function');
      expect(missing).toEqual([]);
    }
  });
});
