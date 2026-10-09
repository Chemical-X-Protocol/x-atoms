import { describe, it, expect, afterEach } from 'vitest';
import { defineComponent, h, nextTick } from 'vue';
import { VLayout } from 'vuetify/components';
import * as Vue from '../../src/vue';
import { mountAtom, bodyText } from './mount';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('vue atoms mount and honour their contract', () => {
  it('XAlert renders title and text', () => {
    const wrapper = mountAtom(Vue.XAlert, { props: { type: 'success', title: 'Saved', text: 'All good' } });
    expect(wrapper.find('.x-alert').exists()).toBe(true);
    expect(wrapper.text()).toContain('Saved');
    expect(wrapper.text()).toContain('All good');
  });

  it('XAvatar renders initials', () => {
    const wrapper = mountAtom(Vue.XAvatar, { props: { text: 'AB' } });
    expect(wrapper.find('.x-avatar').exists()).toBe(true);
    expect(wrapper.text()).toContain('AB');
  });

  it('XBadge renders its content over the slot', () => {
    const wrapper = mountAtom(Vue.XBadge, { props: { content: 5 }, slots: { default: 'Inbox' } });
    expect(wrapper.find('.x-badge').exists()).toBe(true);
    expect(wrapper.text()).toContain('5');
    expect(wrapper.text()).toContain('Inbox');
  });

  it('XBtn renders its slot and forwards clicks', async () => {
    let clicks = 0;
    const wrapper = mountAtom(Vue.XBtn, { props: { variant: 'glass' }, slots: { default: 'Go' }, attrs: { onClick: () => clicks++ } });
    const button = wrapper.find('button.x-btn');
    expect(button.classes()).toContain('x-btn--glass');
    await button.trigger('click');
    expect(clicks).toBe(1);
  });

  it('XCard renders title and body slots', () => {
    const wrapper = mountAtom(Vue.XCard, { slots: { title: 'Card title', default: 'Card body' } });
    expect(wrapper.find('.x-card').exists()).toBe(true);
    expect(wrapper.text()).toContain('Card title');
    expect(wrapper.text()).toContain('Card body');
  });

  it('XCheckbox emits update:modelValue on toggle', async () => {
    const wrapper = mountAtom(Vue.XCheckbox, { props: { modelValue: false, label: 'Agree' } });
    expect(wrapper.find('.x-checkbox').exists()).toBe(true);
    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });

  it('XChip renders its label', () => {
    const wrapper = mountAtom(Vue.XChip, { slots: { default: 'Tag' } });
    expect(wrapper.find('.x-chip').exists()).toBe(true);
    expect(wrapper.text()).toContain('Tag');
  });

  it('XDialog and its XModal alias open into the document', async () => {
    expect(Vue.XModal).toBe(Vue.XDialog);
    mountAtom(Vue.XDialog, { props: { modelValue: true }, slots: { title: 'Dialog title', default: 'Dialog body' } });
    await nextTick();
    expect(document.querySelector('.x-dialog__surface')).not.toBeNull();
    expect(bodyText()).toContain('Dialog body');
  });

  it('XDivider renders', () => {
    const wrapper = mountAtom(Vue.XDivider);
    expect(wrapper.find('.x-divider').exists()).toBe(true);
  });

  it('XList renders XListItem rows', () => {
    const wrapper = mountAtom(Vue.XList, {
      slots: { default: () => [h(Vue.XListItem, { title: 'Row one' }), h(Vue.XListItem, { title: 'Row two', subtitle: 'Second' })] },
    });
    expect(wrapper.find('.x-list').exists()).toBe(true);
    expect(wrapper.findAll('.x-list-item')).toHaveLength(2);
    expect(wrapper.text()).toContain('Second');
  });

  it('XMenu shows its content when open', async () => {
    mountAtom(Vue.XMenu, {
      props: { modelValue: true },
      slots: { activator: ({ props }: any) => h('button', props, 'Open'), default: () => h('div', { class: 'menu-body' }, 'Menu content') },
    });
    await nextTick();
    expect(bodyText()).toContain('Open');
    expect(bodyText()).toContain('Menu content');
  });

  it('XProgressLinear reflects its value', () => {
    const wrapper = mountAtom(Vue.XProgressLinear, { props: { modelValue: 40 } });
    expect(wrapper.find('.x-progress-linear').exists()).toBe(true);
    expect(wrapper.find('[aria-valuenow="40"]').exists()).toBe(true);
  });

  it('XSheet renders its slot', () => {
    const wrapper = mountAtom(Vue.XSheet, { slots: { default: 'Sheet' } });
    expect(wrapper.find('.x-sheet').exists()).toBe(true);
  });

  it('XSkeleton renders a placeholder', () => {
    const wrapper = mountAtom(Vue.XSkeleton, { props: { shape: 'circle' } });
    expect(wrapper.find('.x-skeleton').exists()).toBe(true);
  });

  it('XSwitch emits update:modelValue on toggle', async () => {
    const wrapper = mountAtom(Vue.XSwitch, { props: { modelValue: false, label: 'Live' } });
    expect(wrapper.find('.x-switch').exists()).toBe(true);
    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });

  it('XTextField shows its value and emits edits', async () => {
    const wrapper = mountAtom(Vue.XTextField, { props: { modelValue: 'hi', label: 'Name' } });
    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).value).toBe('hi');
    await input.setValue('yo');
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['yo']);
  });

  it('XTooltip renders its activator', () => {
    const wrapper = mountAtom(Vue.XTooltip, {
      props: { text: 'Tip' },
      slots: { activator: ({ props }: any) => h('span', { ...props, class: 'tip-target' }, 'Hover me') },
    });
    expect(wrapper.find('.tip-target').exists()).toBe(true);
  });

  it('XText picks the variant element, tone and weight classes', () => {
    const wrapper = mountAtom(Vue.XText, { props: { variant: 'title', tone: 'pink', weight: 'bold' }, slots: { default: 'Hello' } });
    const root = wrapper.find('h2');
    expect(root.classes()).toEqual(expect.arrayContaining(['x-text', 'x-text--title', 'x-tone--pink', 'x-text--weight-bold']));
    expect(root.text()).toBe('Hello');
    const inline = mountAtom(Vue.XText, { props: { tag: 'span', variant: 'caption' }, slots: { default: 'small' } });
    expect(inline.find('span.x-text--caption').exists()).toBe(true);
  });

  it('XStack lays out children with direction, gap and alignment classes', () => {
    const wrapper = mountAtom(Vue.XStack, { props: { direction: 'row', gap: 'lg', align: 'center', wrap: true, tag: 'section' }, slots: { default: '<i>a</i><i>b</i>' } });
    const root = wrapper.find('section');
    expect(root.classes()).toEqual(expect.arrayContaining(['x-stack', 'x-stack--row', 'x-stack--gap-lg', 'x-stack--align-center', 'x-stack--wrap']));
    expect(root.findAll('i')).toHaveLength(2);
  });

  it('XGrid supports fixed columns and responsive auto-fill', () => {
    const fixed = mountAtom(Vue.XGrid, { props: { columns: 3 }, slots: { default: '<i>a</i>' } });
    expect(fixed.find('.x-grid').classes()).toContain('x-grid--cols-3');
    const fluid = mountAtom(Vue.XGrid, { props: { minItemWidth: 180, gap: 'sm' } });
    const root = fluid.find('.x-grid');
    expect(root.classes()).toEqual(expect.arrayContaining(['x-grid--auto-fill', 'x-grid--gap-sm']));
    expect(root.attributes('style')).toContain('--x-grid-min: 180px');
  });

  it('XTextarea shows its value and emits edits', async () => {
    const wrapper = mountAtom(Vue.XTextarea, { props: { modelValue: 'draft', label: 'Notes', maxlength: 100 } });
    const textarea = wrapper.find('textarea');
    expect((textarea.element as HTMLTextAreaElement).value).toBe('draft');
    await textarea.setValue('final');
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['final']);
  });

  it('XNavDrawer renders inside a Vuetify layout', () => {
    const Host = defineComponent({
      render: () => h(VLayout, null, () => h(Vue.XNavDrawer, { permanent: true }, { default: () => 'Navigation', append: () => 'Footer' })),
    });
    const wrapper = mountAtom(Host);
    expect(wrapper.find('.x-nav-drawer').exists()).toBe(true);
    expect(wrapper.text()).toContain('Navigation');
    expect(wrapper.text()).toContain('Footer');
  });
});
