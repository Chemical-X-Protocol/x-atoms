import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const catalog = JSON.parse(readFileSync(resolve(root, 'catalog.json'), 'utf8'));

// Differences that are behaviourally identical, with the reason.
const EQUIVALENT = {
  // Vuetify treats active=undefined as "auto"; the raw adapters have no router, so false is the same.
  'XListItem.active': ['undefined', 'false'],
  // Svelte resolves the first tab in the prop default; Vue and React resolve it in the body.
  'MTabsNav.modelValue': ['undefined', "tabs[0] ? tabs[0].id : ''"],
};

test('prop defaults agree across the Vue, Svelte and React adapters', () => {
  const mismatches = [];
  for (const component of [...catalog.atoms, ...catalog.molecules]) {
    for (const prop of component.props) {
      const values = new Set(Object.values(prop.default ?? {}));
      const key = `${component.name}.${prop.name}`;
      const allowed = new Set(EQUIVALENT[key] ?? []);
      const unexplained = [...values].filter((value) => !allowed.has(value));
      const disagrees = values.size > 1 && unexplained.length > 0;
      if (disagrees) mismatches.push(`${key}: ${JSON.stringify(prop.default)}`);
    }
  }
  assert.deepEqual(mismatches, []);
});
