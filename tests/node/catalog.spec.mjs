import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCatalog, serializeCatalog } from '../../build/catalog.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const catalog = JSON.parse(readFileSync(resolve(root, 'catalog.json'), 'utf8'));
const components = [...catalog.atoms, ...catalog.molecules];

// chemx rule ids a helper may claim to fix (cli/audit/rules-registry.js, 2026-10-08).
const KNOWN_RULES = new Set([
  'AI_SLOP_SHALLOW_CATCH', 'AI_SLOP_UTILITY_REINVENTION', 'COMBINATOR_RAW_BOOLEAN', 'COMPLEXITY_CYCLOMATIC_HIGH',
  'CONTROL_FLOW_INLINE_BOOLEAN', 'DATA_FLOW_OPTIONAL_CHAINING_CHURN', 'ERROR_SWALLOWED_EXCEPTION',
  'LIFECYCLE_ORPHANED_LISTENER', 'RENDER_HACK_TIMEOUT', 'SYNTHETIC_MOCK_DATA', 'TIMER_DISCIPLINE',
]);

/** Names declared with `export const` in the modules an index re-exports. */
const declaredIn = (dir) => {
  const indexPath = resolve(root, dir, 'index.ts');
  if (!existsSync(indexPath)) return new Set();
  const modules = [...readFileSync(indexPath, 'utf8').matchAll(/from '\.\/([\w-]+)(?:\.ts)?'/g)].map((m) => m[1]);
  const sources = modules.map((name) => readFileSync(resolve(root, dir, `${name}.ts`), 'utf8')).join('\n');
  return new Set([...sources.matchAll(/export const (\w+)/g)].map((match) => match[1]));
};

const exportedNames = (entryFile) => {
  const source = readFileSync(resolve(root, entryFile), 'utf8');
  return [...source.matchAll(/as ([XM][A-Za-z]+) \}/g)].map((match) => match[1]);
};

test('catalog.json is generated from the current source', () => {
  assert.equal(readFileSync(resolve(root, 'catalog.json'), 'utf8'), serializeCatalog(buildCatalog()), 'run node build/catalog.mjs');
});

test('every component exported by an entry is in the catalog', () => {
  const known = new Set(components.flatMap((c) => [c.name, ...(c.aliases ?? [])]));
  for (const entry of ['src/vue.ts', 'src/react.ts', 'src/svelte.ts']) {
    const missing = exportedNames(entry).filter((name) => !known.has(name));
    assert.deepEqual(missing, [], `${entry} exports components missing from the catalog`);
  }
});

test('catalog frameworks match the entries that export each component', () => {
  for (const [framework, entry] of [['vue', 'src/vue.ts'], ['react', 'src/react.ts'], ['svelte', 'src/svelte.ts']]) {
    const exported = new Set(exportedNames(entry));
    const wrong = components.filter((c) => c.frameworks.includes(framework) !== exported.has(c.name)).map((c) => c.name);
    assert.deepEqual(wrong, [], `${framework} framework list disagrees with ${entry}`);
  }
});

test('every component has a summary, replacement map, props or slots, and a resolvable controller', () => {
  for (const component of components) {
    assert.ok(component.summary, `${component.name} has no summary`);
    assert.ok(Array.isArray(component.replaces.html) && Array.isArray(component.replaces.vuetify), `${component.name} replaces`);
    assert.ok(component.props.length + component.slots.length > 0, `${component.name} has no API surface`);
    const hasController = component.controller === null || existsSync(resolve(root, component.controller));
    assert.ok(hasController, `${component.name} controller path`);
  }
});

test('safe 1:1 swaps only claim Vuetify tags the Vue adapter really renders', () => {
  const wrong = components
    .filter((c) => c.safe1to1)
    .filter((c) => !c.replaces.vuetify.includes(c.vuetifyRoot))
    .map((c) => `${c.name} (${c.vuetifyRoot})`);
  assert.deepEqual(wrong, []);
});

test('every helper is declared in source, importable per entry, and names known hazard rules', () => {
  for (const helper of catalog.helpers) {
    assert.ok(helper.source && existsSync(resolve(root, helper.source)), `${helper.name} source`);
    assert.ok(helper.fixes.length > 0, `${helper.name} fixes no rule`);
    const unknown = helper.fixes.filter((rule) => !KNOWN_RULES.has(rule));
    assert.deepEqual(unknown, [], `${helper.name} names unknown rules`);
    for (const entry of Object.keys(helper.imports)) {
      const isExported = declaredIn('src/core').has(helper.name) || declaredIn(`src/adapters/${entry}`).has(helper.name);
      assert.ok(isExported, `${helper.name} is not exported for ${entry}`);
    }
  }
});

test('core helpers in the catalog are real exports of dist/core.js', async () => {
  const core = await import('@chemx/x-atoms/core');
  const coreHelpers = catalog.helpers.filter((h) => 'core' in h.imports).map((h) => h.name);
  const missing = coreHelpers.filter((name) => typeof core[name] !== 'function');
  assert.deepEqual(missing, []);
});
