/**
 * Post-processes dist/types after vue-tsc emits declarations:
 * - relative `.ts` and extensionless specifiers become explicit `.js` paths, which
 *   every TS resolution mode (bundler, node16, nodenext) maps to `.d.ts`;
 * - hand-written `.d.ts` prop contracts under src/ are copied, since tsc never emits them;
 * - svelte.d.ts gets the `*.svelte` module shim so non-Svelte TS consumers still type-check.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const typesDir = resolve(root, 'dist/types');
const RELATIVE_SPECIFIER = /(from\s+|import\s*\(\s*)(['"])(\.{1,2}\/[^'"]+)\2/g;
const KEEP_AS_IS = /\.(js|vue|svelte|css|scss)$/;

/** Maps one relative specifier to an explicit `.js` path, or leaves it when nothing matches. */
const explicitSpecifier = (fromFile, specifier) => {
  const keep = KEEP_AS_IS.test(specifier);
  if (keep) return specifier;
  const bare = specifier.replace(/(\.d)?\.ts$|\.d$/, '');
  const base = resolve(dirname(fromFile), bare);
  const candidates = [[`${base}.d.ts`, `${bare}.js`], [join(base, 'index.d.ts'), `${bare}/index.js`]];
  const match = candidates.find(([declaration]) => existsSync(declaration));
  return match ? match[1] : specifier;
};

const declarationFiles = (dir) => readdirSync(dir).flatMap((name) => {
  const full = join(dir, name);
  const isDir = statSync(full).isDirectory();
  if (isDir) return declarationFiles(full);
  return name.endsWith('.d.ts') ? [full] : [];
});

const srcDir = resolve(root, 'src');
for (const handWritten of declarationFiles(srcDir)) {
  const target = join(typesDir, handWritten.slice(srcDir.length));
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(handWritten, target);
}

for (const file of declarationFiles(typesDir)) {
  const source = readFileSync(file, 'utf8');
  const rewritten = source.replace(
    RELATIVE_SPECIFIER,
    (_all, lead, quote, specifier) => `${lead}${quote}${explicitSpecifier(file, specifier)}${quote}`
  );
  if (rewritten !== source) writeFileSync(file, rewritten);
}

const svelteTypes = resolve(typesDir, 'svelte.d.ts');
const shimReference = '/// <reference path="./shims-svelte.d.ts" />\n';
const svelteSource = readFileSync(svelteTypes, 'utf8');
const hasShim = svelteSource.startsWith(shimReference);
if (!hasShim) writeFileSync(svelteTypes, shimReference + svelteSource);
