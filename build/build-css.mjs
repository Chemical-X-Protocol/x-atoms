/** Compiles the public SCSS entry points to plain CSS in dist/. */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sass from 'sass';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const CSS_OUTPUTS = {
  'tokens.css': 'src/styles/index.scss',
  'glass.css': 'src/styles/glass-theme.scss',
  'components.css': 'src/styles/components.scss',
};

mkdirSync(resolve(root, 'dist'), { recursive: true });
for (const [outName, source] of Object.entries(CSS_OUTPUTS)) {
  const { css } = sass.compile(resolve(root, source), { style: 'expanded' });
  writeFileSync(resolve(root, 'dist', outName), `${css}\n`);
}
