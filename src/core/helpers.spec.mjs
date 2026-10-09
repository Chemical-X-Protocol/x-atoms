import { test } from 'node:test';
import assert from 'node:assert/strict';

import * as core from './index.ts';

const {
  toResult,
  toResultSync,
  mapResult,
  unwrapOr,
  isOk,
  after,
  every,
  createPredicateFilter,
  matchesAnyPattern,
  matchesAllPredicates,
  createLatestGate,
  createAsyncRunner,
} = core;

const tick = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Polls until `check` holds (or 1s passes), so timer specs survive a loaded machine. */
const waitFor = async (check) => {
  for (let waited = 0; waited < 1000 && !check(); waited += 5) await tick(5);
  return check();
};

test('toResult accepts a promise', async () => {
  const [data, err] = await toResult(Promise.resolve('ok'));
  assert.equal(data, 'ok');
  assert.equal(err, null);
});

test('toResult accepts a thunk and awaits its value', async () => {
  const [data, err] = await toResult(async () => 7);
  assert.equal(data, 7);
  assert.equal(err, null);
});

test('toResult accepts a sync thunk', async () => {
  const [data, err] = await toResult(() => 'sync');
  assert.equal(data, 'sync');
  assert.equal(err, null);
});

test('toResult captures a synchronous throw inside the thunk', async () => {
  const [data, err] = await toResult(() => {
    throw new Error('thrown early');
  });
  assert.equal(data, null);
  assert.equal(err.message, 'thrown early');
});

test('toResult normalizes non-Error rejections', async () => {
  const [, err] = await toResult(Promise.reject('plain string'));
  assert.ok(err instanceof Error);
  assert.equal(err.message, 'plain string');
});

test('mapResult maps the ok value and passes errors through', () => {
  const doubled = mapResult([21, null], (n) => n * 2);
  assert.deepEqual(doubled, [42, null]);

  const failure = new Error('nope');
  const passed = mapResult([null, failure], (n) => n * 2);
  assert.equal(passed[1], failure);
});

test('mapResult captures a throwing mapper as an error tuple', () => {
  const [data, err] = mapResult([1, null], () => {
    throw new Error('mapper broke');
  });
  assert.equal(data, null);
  assert.equal(err.message, 'mapper broke');
});

test('unwrapOr returns data on ok and the fallback on error', () => {
  assert.equal(unwrapOr([5, null], 0), 5);
  assert.equal(unwrapOr([null, new Error('x')], 0), 0);
  assert.equal(unwrapOr(toResultSync(() => JSON.parse('{')), 'fallback'), 'fallback');
});

test('after runs once and its teardown cancels it', async () => {
  let fired = 0;
  after(5, () => fired++);
  const cancel = after(5, () => fired++);
  cancel();
  cancel();
  await tick(20);
  assert.equal(fired, 1);
});

test('every repeats until its teardown runs', async () => {
  let count = 0;
  const stop = every(5, () => count++);
  assert.ok(await waitFor(() => count >= 2), `expected at least 2 ticks, saw ${count}`);
  stop();
  const seen = count;
  await tick(20);
  assert.equal(count, seen, 'no ticks after teardown');
});

test('createPredicateFilter combines predicates and tolerates nullish lists', () => {
  const isEven = (n) => n % 2 === 0;
  const isPositive = (n) => n > 0;
  const keepPositiveEvens = createPredicateFilter(isEven, isPositive);
  assert.deepEqual(keepPositiveEvens([-2, 1, 2, 3, 4]), [2, 4]);
  assert.deepEqual(keepPositiveEvens(null), []);
  assert.deepEqual(keepPositiveEvens(undefined), []);
});

test('matchesAnyPattern supports substrings and regular expressions', () => {
  assert.equal(matchesAnyPattern('src/ui/app.vue', ['node_modules', '/ui/']), true);
  assert.equal(matchesAnyPattern('src/core/a.ts', ['node_modules']), false);
  const globalPattern = /\.vue$/g;
  assert.equal(matchesAnyPattern('a.vue', [globalPattern]), true);
  assert.equal(matchesAnyPattern('a.vue', [globalPattern]), true, 'global regex state must not leak');
  assert.equal(matchesAnyPattern('a.ts', []), false);
});

test('matchesAllPredicates short-circuits on the first failing predicate', () => {
  let laterCalled = false;
  const result = matchesAllPredicates(3, [
    (n) => n > 5,
    () => {
      laterCalled = true;
      return true;
    },
  ]);
  assert.equal(result, false);
  assert.equal(laterCalled, false);
  assert.equal(matchesAllPredicates(3, []), true);
});

test('createLatestGate marks earlier claims stale and cancel invalidates all', () => {
  const gate = createLatestGate();
  const first = gate.claim();
  const second = gate.claim();
  assert.equal(first(), false);
  assert.equal(second(), true);
  gate.cancel();
  assert.equal(second(), false);
});

test('createAsyncRunner reports loading, data and error, ignoring stale runs', async () => {
  const states = [];
  let callCount = 0;
  const fetcher = async () => {
    callCount++;
    const own = callCount;
    await tick(own === 1 ? 20 : 1);
    if (own === 3) throw new Error('third failed');
    return own;
  };
  const runner = createAsyncRunner(fetcher, (state) => states.push(state));

  const slow = runner.run();
  const fast = runner.run();
  const [fastData] = await fast;
  const [slowData] = await slow;
  assert.equal(fastData, 2);
  assert.equal(slowData, 1, 'stale run still returns its own result');
  const settled = states.filter((s) => s.isLoading === false);
  assert.deepEqual(settled, [{ data: 2, error: null, isLoading: false }]);

  const failed = await runner.run();
  assert.equal(isOk(failed), false);
  assert.equal(states.at(-1).error.message, 'third failed');
  assert.equal(states.at(-1).isLoading, false);
  assert.equal(states.at(-1).data, 2, 'an error keeps the last good data');
});

test('createAsyncRunner drops results after cancel', async () => {
  const states = [];
  const runner = createAsyncRunner(async () => {
    await tick(5);
    return 'late';
  }, (state) => states.push(state));
  const pending = runner.run();
  runner.cancel();
  await pending;
  assert.deepEqual(states, [{ data: null, error: null, isLoading: true }]);
  assert.deepEqual(runner.getState(), { data: null, error: null, isLoading: true });
});

test('createRestartableTimeout re-arms, reports activity and stops', async () => {
  const { createRestartableTimeout, createRestartableInterval } = core;
  let fired = 0;
  const timer = createRestartableTimeout(() => fired++, 5);
  assert.equal(timer.isActive(), false);
  timer.start();
  timer.start();
  assert.equal(timer.isActive(), true);
  await tick(20);
  assert.equal(fired, 1, 'restart replaces the pending run');
  assert.equal(timer.isActive(), false, 'a fired timeout is inactive');
  const stop = timer.start();
  stop();
  await tick(15);
  assert.equal(fired, 1);

  let ticks = 0;
  const interval = createRestartableInterval(() => ticks++, 5);
  interval.start();
  assert.ok(await waitFor(() => ticks >= 2));
  interval.stop();
  const seen = ticks;
  await tick(15);
  assert.equal(ticks, seen);
  assert.equal(interval.isActive(), false);
});
