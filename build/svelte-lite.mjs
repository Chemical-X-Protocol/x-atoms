/**
 * Minimal Vite plugin that compiles .svelte files with the installed Svelte 5
 * compiler. It supports `<style lang="scss" src="./file.scss">` through sass,
 * so x-atoms needs no extra Svelte tooling to build or test.
 */
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { compile, preprocess } from 'svelte/compiler';
import * as sass from 'sass';

const compileScssStyle = async ({ content, attributes, filename }) => {
  const isScss = attributes.lang === 'scss';
  return isScss ? compileScss({ content, attributes, filename }) : { code: content };
};

const compileScss = async ({ content, attributes, filename }) => {
  const baseDir = dirname(filename);
  const hasSrc = typeof attributes.src === 'string';
  const source = hasSrc ? await readFile(resolve(baseDir, attributes.src), 'utf8') : content;
  const { css } = sass.compileString(source, { loadPaths: [baseDir] });
  return { code: css, attributes: {} };
};

export const svelteLite = ({ css = 'injected', dev = false } = {}) => ({
  name: 'x-atoms:svelte-lite',
  enforce: 'pre',
  async transform(code, id) {
    const file = id.split('?')[0];
    const isSvelteFile = file.endsWith('.svelte');
    // Rollup convention: null means "not mine, leave the module untouched".
    if (!isSvelteFile) return null;
    const processed = await preprocess(code, { style: compileScssStyle }, { filename: file });
    const output = compile(processed.code, { filename: file, generate: 'client', css, dev });
    return { code: output.js.code, map: output.js.map };
  },
});

export default svelteLite;
