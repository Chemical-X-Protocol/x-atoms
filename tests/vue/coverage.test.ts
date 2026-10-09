import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as Vue from '../../src/vue';

const testedNames = (file: string): Set<string> => {
  const source = readFileSync(resolve(__dirname, file), 'utf8');
  return new Set([...source.matchAll(/Vue\.([XM][A-Za-z]+)/g)].map((match) => match[1]));
};

describe('vue mount coverage', () => {
  it('every exported atom and molecule has a mount test', () => {
    const components = Object.keys(Vue).filter((name) => /^[XM][A-Z]/.test(name));
    const tested = new Set([...testedNames('atoms.test.ts'), ...testedNames('molecules.test.ts')]);
    const untested = components.filter((name) => !tested.has(name));
    expect(untested).toEqual([]);
  });
});
