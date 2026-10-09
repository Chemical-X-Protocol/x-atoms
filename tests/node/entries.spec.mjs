import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const FRAMEWORKS = ['vue', 'vuetify', 'react', 'react-dom', 'svelte'];

const IMPORT_SPECIFIER = /(?:^|[\s;])(?:import|export)\s*(?:[^'"]*?\sfrom\s*)?['"]([^'"]+)['"]/g;
const RESOLVABLE_EXTENSIONS = ['', '.ts', '.tsx', '.js', '/index.ts'];

const specifiersOf = (file) => {
  const source = readFileSync(file, 'utf8');
  return [...source.matchAll(IMPORT_SPECIFIER)].map((match) => match[1]);
};

const isRelative = (specifier) => specifier.startsWith('.');
const frameworkOf = (specifier) => FRAMEWORKS.find((name) => specifier === name || specifier.startsWith(`${name}/`));

/** Bare specifiers reachable from a dist file through its relative imports. */
const externalImportsOf = (entryFile, seen = new Set()) => {
  if (seen.has(entryFile)) return [];
  seen.add(entryFile);
  const specifiers = specifiersOf(entryFile);
  const bare = specifiers.filter((s) => !isRelative(s));
  const nested = specifiers.filter(isRelative).flatMap((s) => externalImportsOf(resolve(dirname(entryFile), s), seen));
  return [...new Set([...bare, ...nested])];
};

const distFile = (name) => resolve(root, 'dist', name);

test('every relative import in the framework entry files resolves to a real file', () => {
  const entryFiles = ['src/index.ts', 'src/vue.ts', 'src/react.ts', 'src/svelte.ts'];
  const missing = entryFiles.flatMap((entry) => {
    const entryPath = resolve(root, entry);
    return specifiersOf(entryPath)
      .filter(isRelative)
      .filter((s) => !RESOLVABLE_EXTENSIONS.some((ext) => existsSync(resolve(dirname(entryPath), s + ext))))
      .map((s) => `${entry} -> ${s}`);
  });
  assert.deepEqual(missing, []);
});

test('package exports list `types` first and never point JS conditions at TypeScript source', () => {
  const problems = [];
  for (const [subpath, target] of Object.entries(pkg.exports)) {
    const isConditional = typeof target === 'object';
    if (!isConditional) continue;
    const conditions = Object.keys(target);
    if (conditions[0] !== 'types') problems.push(`${subpath}: types is not first (${conditions.join(',')})`);
    for (const condition of ['import', 'default']) {
      const isSourceTarget = /\.(ts|tsx|vue|svelte)$/.test(target[condition] ?? '') && !target[condition].endsWith('.d.ts');
      if (isSourceTarget) problems.push(`${subpath}: ${condition} points at source ${target[condition]}`);
    }
  }
  assert.deepEqual(problems, []);
});

test('every package export target exists on disk', () => {
  const targets = Object.values(pkg.exports).flatMap((t) => (typeof t === 'string' ? [t] : Object.values(t)));
  const missing = targets.filter((t) => !existsSync(resolve(root, t)));
  assert.deepEqual(missing, []);
});

test('dist/core.js and dist/index.js reach zero framework imports', () => {
  for (const name of ['core.js', 'index.js', 'theme.js']) {
    const externals = externalImportsOf(distFile(name));
    assert.deepEqual(externals, [], `${name} imports ${externals.join(', ')}`);
  }
});

test('each framework bundle imports only its own framework', () => {
  const allowed = { 'vue.js': ['vue', 'vuetify'], 'react.js': ['react', 'react-dom'], 'svelte.js': ['svelte'] };
  for (const [name, frameworks] of Object.entries(allowed)) {
    const used = new Set(externalImportsOf(distFile(name)).map(frameworkOf));
    const foreign = [...used].filter((f) => !frameworks.includes(f));
    assert.deepEqual(foreign, [], `${name} imports foreign packages: ${foreign.join(', ')}`);
    assert.ok(used.has(frameworks[0]), `${name} should import ${frameworks[0]}`);
  }
});

test('@chemx/x-atoms/core loads in bare Node and matches the source exports', async () => {
  const core = await import('@chemx/x-atoms/core');
  const source = await import('../../src/core/index.ts');
  assert.deepEqual(Object.keys(core).sort(), Object.keys(source).sort(), 'dist/core.js is stale: run npm run build');
  const [value] = await core.toResult(() => 'bare-node');
  assert.equal(value, 'bare-node');
});

test('@chemx/x-atoms root loads in bare Node and is a superset of core', async () => {
  const rootModule = await import('@chemx/x-atoms');
  const core = await import('@chemx/x-atoms/core');
  assert.notEqual(rootModule, core, 'root and core must be distinct entries');
  const missing = Object.keys(core).filter((key) => !(key in rootModule));
  assert.deepEqual(missing, []);
  assert.equal(typeof rootModule.computeBtnClasses, 'function');
});

test('framework CSS ships prebuilt', () => {
  for (const name of ['vue.css', 'glass.css', 'tokens.css', 'components.css']) {
    const css = readFileSync(distFile(name), 'utf8');
    assert.ok(css.length > 100, `${name} is empty`);
    assert.equal(/@use|@include|\$[a-z-]+:/.test(css), false, `${name} still contains SCSS`);
  }
});
