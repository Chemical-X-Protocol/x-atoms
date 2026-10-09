import { describe, it, expect, afterEach, vi } from 'vitest';
import { nextTick } from 'vue';
import * as Vue from '../../src/vue';
import { mountAtom, bodyText } from './mount';

afterEach(() => {
  document.body.innerHTML = '';
  vi.useRealTimers();
});

describe('vue molecules mount and honour their contract', () => {
  it('MActionBar renders its title and slots', () => {
    const wrapper = mountAtom(Vue.MActionBar, { props: { title: 'Toolbar' }, slots: { default: 'Middle', end: 'End' } });
    expect(wrapper.find('.m-action-bar__title').text()).toBe('Toolbar');
    expect(wrapper.text()).toContain('End');
  });

  it('MConfirmDialog emits confirm and cancel', async () => {
    const wrapper = mountAtom(Vue.MConfirmDialog, { props: { modelValue: true, title: 'Delete?', message: 'This is final' } });
    await nextTick();
    expect(bodyText()).toContain('This is final');
    const buttons = [...document.querySelectorAll<HTMLButtonElement>('.x-dialog__surface button')];
    buttons.at(-1)?.click();
    buttons.at(0)?.click();
    await nextTick();
    expect(wrapper.emitted('confirm')).toHaveLength(1);
    expect(wrapper.emitted('cancel')).toHaveLength(1);
  });

  it('MDataTable renders rows, sorts on header click and shows the empty text', async () => {
    const headers = [{ key: 'name', title: 'Name', sortable: true }, { key: 'role', title: 'Role' }];
    const wrapper = mountAtom(Vue.MDataTable, { props: { headers, items: [{ id: 1, name: 'Ada', role: 'Eng' }] } });
    expect(wrapper.findAll('tbody tr')).toHaveLength(1);
    expect(wrapper.text()).toContain('Ada');
    await wrapper.findAll('th')[0].trigger('click');
    expect(wrapper.emitted('update:sort')?.[0]).toEqual([{ sortBy: 'name', sortDesc: false }]);
    await wrapper.findAll('th')[1].trigger('click');
    expect(wrapper.emitted('update:sort')).toHaveLength(1);
    const empty = mountAtom(Vue.MDataTable, { props: { headers, items: [], emptyText: 'Nothing here' } });
    expect(empty.text()).toContain('Nothing here');
  });

  it('MEmptyState emits click:action', async () => {
    const wrapper = mountAtom(Vue.MEmptyState, { props: { title: 'No tasks', description: 'Create one', actionText: 'Add task' } });
    expect(wrapper.find('.m-empty-state__title').text()).toBe('No tasks');
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click:action')).toHaveLength(1);
  });

  it('MKpiTile renders label, value and trend', () => {
    const wrapper = mountAtom(Vue.MKpiTile, { props: { label: 'Tokens', value: '12k', trend: 'up', trendValue: '+4%' } });
    expect(wrapper.find('.m-kpi-tile__label').text()).toBe('Tokens');
    expect(wrapper.find('.m-kpi-tile__value').text()).toContain('12k');
    expect(wrapper.find('.m-kpi-tile__trend').exists()).toBe(true);
  });

  it('MPagination moves to the next page and refuses out-of-range pages', async () => {
    const wrapper = mountAtom(Vue.MPagination, { props: { currentPage: 1, totalPages: 3 } });
    const buttons = wrapper.findAll('button');
    await buttons.at(-1)!.trigger('click');
    expect(wrapper.emitted('update:currentPage')?.[0]).toEqual([2]);
    await buttons[0].trigger('click');
    expect(wrapper.emitted('update:currentPage')).toHaveLength(1);
  });

  it('MSearchInput emits input immediately and search after the debounce', async () => {
    vi.useFakeTimers();
    const wrapper = mountAtom(Vue.MSearchInput, { props: { modelValue: '', debounceMs: 100 } });
    await wrapper.find('input').setValue('atoms');
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['atoms']);
    expect(wrapper.emitted('search')).toBeUndefined();
    vi.advanceTimersByTime(100);
    expect(wrapper.emitted('search')?.[0]).toEqual(['atoms']);
  });

  it('MSearchInput drops a pending search on unmount', async () => {
    vi.useFakeTimers();
    const wrapper = mountAtom(Vue.MSearchInput, { props: { modelValue: '', debounceMs: 100 } });
    await wrapper.find('input').setValue('late');
    const emitted = wrapper.emitted();
    wrapper.unmount();
    vi.advanceTimersByTime(200);
    expect(emitted.search).toBeUndefined();
  });

  it('MStatStrip renders one tile per stat', () => {
    const wrapper = mountAtom(Vue.MStatStrip, { props: { stats: [{ label: 'A', value: 1 }, { label: 'B', value: 2 }] } });
    expect(wrapper.findAll('.m-kpi-tile')).toHaveLength(2);
  });

  it('MTabsNav emits the selected tab', async () => {
    const wrapper = mountAtom(Vue.MTabsNav, { props: { tabs: [{ id: 'a', label: 'Alpha' }, { id: 'b', label: 'Beta' }], modelValue: 'a' } });
    const tabs = wrapper.findAll('[role="tab"]');
    expect(tabs).toHaveLength(2);
    await tabs[1].trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b']);
  });

  it('MToast auto-dismisses after its duration and stops on unmount', async () => {
    vi.useFakeTimers();
    const wrapper = mountAtom(Vue.MToast, { props: { modelValue: true, message: 'Saved', duration: 50 } });
    expect(wrapper.text()).toContain('Saved');
    vi.advanceTimersByTime(50);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
    expect(wrapper.emitted('close')).toHaveLength(1);

    const second = mountAtom(Vue.MToast, { props: { modelValue: true, message: 'Bye', duration: 50 } });
    const emitted = second.emitted();
    second.unmount();
    vi.advanceTimersByTime(100);
    expect(emitted.close).toBeUndefined();
  });
});
