/**
 * Source extractors for the catalog: props, defaults, emits and slots are read
 * from each capsule's files so catalog.json cannot drift from the code.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const read = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');

const PROP_LINE = /^\s+(?:readonly\s+)?(\w+)(\?)?:\s*(.+?);\s*$/;
const EMIT_LINE = /\(e:\s*'([^']+)'/g;

/** Body of `export interface <name> { ... }`, or '' when missing. */
const interfaceBody = (source, name) => {
  const start = source.indexOf(`export interface ${name}`);
  if (start === -1) return '';
  const open = source.indexOf('{', start);
  const close = source.indexOf('\n}', open);
  return source.slice(open + 1, close);
};

const docFor = (lines, index) => {
  const previous = lines[index - 1] ?? '';
  const match = previous.match(/\/\*\*\s*(.+?)\s*\*\//);
  return match ? match[1] : undefined;
};

export const extractProps = (typesSource, propsInterface) => {
  const lines = interfaceBody(typesSource, propsInterface).split('\n');
  return lines.flatMap((line, index) => {
    const match = line.match(PROP_LINE);
    if (!match) return [];
    const [, name, optional, type] = match;
    const description = docFor(lines, index);
    return [{ name, type, required: !optional, ...(description ? { description } : {}) }];
  });
};

export const extractEmits = (typesSource, emitsInterface) => {
  const body = interfaceBody(typesSource, emitsInterface);
  return [...new Set([...body.matchAll(EMIT_LINE)].map((match) => match[1]))];
};

const normalizeDefault = (raw) => raw
  .trim()
  .replace(/,$/, '')
  .replace(/^\$bindable\((.*)\)$/, '$1')
  .replace(/^\(\) => /, '')
  .replace(/"/g, "'");

const parseAssignments = (block, separator) => {
  const pattern = separator === ':' ? /^\s{2}(\w+):\s*(.+?),?\s*$/ : /^\s{2}(\w+)(?::\s*\w+)?\s*=\s*(.+?),?\s*$/;
  const entries = block.split('\n').map((line) => line.match(pattern)).filter(Boolean);
  return Object.fromEntries(entries.map(([, name, value]) => [name, normalizeDefault(value)]));
};

/** Prop defaults per framework adapter; a framework without the file is omitted. */
export const extractDefaults = (dir, name) => {
  const vue = read(join(dir, `${name}.vue`)).match(/withDefaults\([^,]+,\s*\{([\s\S]*?)\n\}\)/);
  const svelte = read(join(dir, `${name}.svelte`)).match(/let \{([\s\S]*?)\n\}/);
  const react = read(join(dir, `${name}.tsx`)).match(/= \(?\{([\s\S]*?)\n\}/);
  return {
    ...(vue ? { vue: parseAssignments(vue[1], ':') } : {}),
    ...(svelte ? { svelte: parseAssignments(svelte[1], '=') } : {}),
    ...(react ? { react: parseAssignments(react[1], '=') } : {}),
  };
};

/** Named and default slots used in the Vue template. */
export const extractSlots = (vueSource) => {
  const named = [...vueSource.matchAll(/<slot\s+name="([^"]+)"/g)].map((match) => match[1]);
  const dynamic = [...vueSource.matchAll(/<slot\s+:name="`([^`$]*)\$\{[^}]*\}`"/g)].map((match) => `${match[1]}<key>`);
  const hasDefault = /<slot(\s*\/>|\s*>|\s+v-bind)/.test(vueSource);
  return [...new Set([...(hasDefault ? ['default'] : []), ...named, ...dynamic])];
};

/** The Vuetify element a Vue adapter renders at its root, if any. */
export const extractVuetifyRoot = (vueSource) => {
  const template = vueSource.slice(vueSource.indexOf('<template>') + '<template>'.length);
  const firstElement = template.match(/<\s*([a-zA-Z][\w-]*)/);
  const isVuetifyRoot = Boolean(firstElement) && firstElement[1].startsWith('v-');
  return isVuetifyRoot ? firstElement[1] : null;
};

export const FRAMEWORK_FILES = { vue: '.vue', svelte: '.svelte', react: '.tsx' };

export const frameworksOf = (dir, name) => Object.entries(FRAMEWORK_FILES)
  .filter(([, ext]) => existsSync(join(dir, `${name}${ext}`)))
  .map(([framework]) => framework);
