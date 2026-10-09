import { mount, type MountingOptions } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import { starshipDarkTheme } from '../../src/theme/starship-theme';

const vuetify = createVuetify({
  theme: { defaultTheme: 'starship', themes: { starship: starshipDarkTheme } },
});

/** Mounts with Vuetify and the Starship theme, attached to the document for overlays. */
export const mountAtom = (component: any, options: MountingOptions<any> = {}) => {
  const host = document.createElement('div');
  document.body.appendChild(host);
  return mount(component, {
    attachTo: host,
    ...options,
    global: { plugins: [vuetify], ...(options.global ?? {}) },
  });
};

/** Overlays teleport out of the wrapper; read them from the document. */
export const bodyText = (): string => document.body.textContent ?? '';
