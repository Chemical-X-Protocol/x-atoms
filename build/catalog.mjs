/**
 * Generates catalog.json: every atom, molecule and helper with its props,
 * slots, emits, defaults per framework, what it replaces, and the chemx hazard
 * rules each helper fixes. Run `node build/catalog.mjs` to write it;
 * `node build/catalog.mjs --check` exits 1 when catalog.json is stale.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractDefaults, extractEmits, extractProps, extractSlots, extractVuetifyRoot, frameworksOf } from './catalog/extract.mjs';
import { COMPONENT_META, HELPER_META } from './catalog/meta.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PACKAGE = '@chemx/x-atoms';
const read = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');
const pascal = (tag) => tag.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('');

const withDefaults = (props, defaults) => props.map((prop) => {
  const perFramework = Object.fromEntries(
    Object.entries(defaults)
      .filter(([, values]) => prop.name in values)
      .map(([framework, values]) => [framework, values[prop.name]])
  );
  return Object.keys(perFramework).length ? { ...prop, default: perFramework } : prop;
});

const describeComponent = (tier, tag) => {
  const dir = join(root, 'src', tier, tag);
  const name = pascal(tag);
  const types = read(join(dir, 'types.d.ts'));
  const vueSource = read(join(dir, `${tag}.vue`));
  const meta = COMPONENT_META[tag] ?? {};
  const frameworks = frameworksOf(dir, tag);
  const props = withDefaults(extractProps(types, `${name}Props`), extractDefaults(dir, tag));
  const controller = join(dir, `${tag}.controller.ts`);
  return {
    name,
    tag,
    tier: tier === 'atoms' ? 'atom' : 'molecule',
    summary: meta.summary ?? '',
    frameworks,
    imports: Object.fromEntries(frameworks.map((fw) => [fw, { from: `${PACKAGE}/${fw}`, name }])),
    ...(meta.aliases ? { aliases: meta.aliases } : {}),
    vuetifyRoot: extractVuetifyRoot(vueSource),
    replaces: meta.replaces ?? { html: [], vuetify: [] },
    safe1to1: Boolean(meta.safe1to1),
    propMap: meta.safe1to1 ? Object.fromEntries(props.map((prop) => [prop.name, prop.name])) : {},
    props,
    emits: extractEmits(types, `${name}Emits`),
    slots: extractSlots(vueSource),
    controller: existsSync(controller) ? relative(root, controller) : null,
  };
};

const capsules = (tier) => readdirSync(join(root, 'src', tier))
  .filter((tag) => existsSync(join(root, 'src', tier, tag, `${tag}.vue`)))
  .sort();

/** Source file that declares `export const <name>` under core or an adapter. */
const declarationOf = (name, entry) => {
  const dir = entry === 'core' ? join(root, 'src/core') : join(root, 'src/adapters', entry);
  const file = readdirSync(dir).find((f) => f.endsWith('.ts') && read(join(dir, f)).includes(`export const ${name} `));
  return file ? relative(root, join(dir, file)) : null;
};

const describeHelper = ([name, meta]) => {
  const sources = Object.fromEntries(meta.entries.map((entry) => [entry, declarationOf(name, entry)]));
  const definedIn = Object.values(sources).find(Boolean) ?? null;
  return {
    name,
    summary: meta.summary,
    fixes: meta.fixes,
    imports: Object.fromEntries(meta.entries.map((entry) => [entry, { from: `${PACKAGE}/${entry}`, name }])),
    source: definedIn,
  };
};

export const buildCatalog = () => {
  const pkg = JSON.parse(read(join(root, 'package.json')));
  return {
    catalogVersion: 1,
    package: PACKAGE,
    version: pkg.version,
    css: { vue: `${PACKAGE}/css/vue`, components: `${PACKAGE}/css/components`, glass: `${PACKAGE}/css/glass`, tokens: `${PACKAGE}/css/tokens` },
    atoms: capsules('atoms').map((tag) => describeComponent('atoms', tag)),
    molecules: capsules('molecules').map((tag) => describeComponent('molecules', tag)),
    helpers: Object.entries(HELPER_META).map(describeHelper).sort((a, b) => a.name.localeCompare(b.name)),
  };
};

export const serializeCatalog = (catalog) => `${JSON.stringify(catalog, null, 2)}\n`;

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  const target = join(root, 'catalog.json');
  const next = serializeCatalog(buildCatalog());
  const isCheck = process.argv.includes('--check');
  const isStale = read(target) !== next;
  if (isCheck) {
    process.stdout.write(isStale ? 'catalog.json is stale: run node build/catalog.mjs\n' : 'catalog.json is current\n');
    process.exitCode = isStale ? 1 : 0;
  } else {
    writeFileSync(target, next);
  }
}
