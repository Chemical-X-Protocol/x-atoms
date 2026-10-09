import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const tsc = resolve(root, 'node_modules/typescript/bin/tsc');

// Each @ts-expect-error fails the probe if a declaration silently degrades to `any`.
const PROBE = `
import { toResult, unwrapOr, mapResult, after, type ResultTuple } from '@chemx/x-atoms/core';
import { computeBtnClasses } from '@chemx/x-atoms';
import { XBtn, createXAtomsPlugin, useAsyncData } from '@chemx/x-atoms/vue';
import { XBtn as ReactBtn, usePredicateFilter } from '@chemx/x-atoms/react';
import { XBtn as SvelteBtn, useDisposer } from '@chemx/x-atoms/svelte';
const loaded: Promise<ResultTuple<number>> = toResult(async () => 1);
const doubled: number = unwrapOr(mapResult([1, null] as ResultTuple<number>, (x) => x * 2), 0);
// @ts-expect-error typed result
const wrongResult: string = unwrapOr([1, null] as ResultTuple<number>, 0);
// @ts-expect-error typed teardown
const wrongTeardown: number = after(1, () => {});
// @ts-expect-error prop contracts ship with the controllers
computeBtnClasses({ variant: 'not-a-variant' });
// @ts-expect-error typed react hook
const wrongReact: number = usePredicateFilter;
// @ts-expect-error typed vue composable
const wrongVue: number = useAsyncData;
// @ts-expect-error typed svelte helper
const wrongSvelte: number = useDisposer;
export { loaded, doubled, wrongResult, wrongTeardown, wrongReact, wrongVue, wrongSvelte, XBtn, createXAtomsPlugin, ReactBtn, SvelteBtn };
`;

const compilerOptions = (mode) => ({
  target: 'ES2022',
  module: mode === 'node16' ? 'node16' : 'ESNext',
  moduleResolution: mode,
  strict: true,
  noEmit: true,
  skipLibCheck: true,
  lib: ['ES2022', 'DOM'],
  types: [],
});

const typecheckConsumer = (mode) => {
  const dir = mkdtempSync(join(tmpdir(), 'x-atoms-types-'));
  try {
    mkdirSync(join(dir, 'node_modules/@chemx'), { recursive: true });
    symlinkSync(root, join(dir, 'node_modules/@chemx/x-atoms'), 'dir');
    writeFileSync(join(dir, 'package.json'), '{"type":"module"}');
    writeFileSync(join(dir, 'probe.ts'), PROBE);
    writeFileSync(join(dir, 'tsconfig.json'), JSON.stringify({ compilerOptions: compilerOptions(mode), files: ['probe.ts'] }));
    execFileSync(process.execPath, [tsc, '-p', dir], { encoding: 'utf8', stdio: 'pipe' });
    return '';
  } catch (err) {
    return String(err.stdout || err.message);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
};

for (const mode of ['bundler', 'node16']) {
  test(`published declarations type-check for a ${mode} consumer`, { timeout: 120_000 }, () => {
    assert.equal(typecheckConsumer(mode), '');
  });
}
