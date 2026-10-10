import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  allPass,
  anyPass,
  nonePass,
  not,
  all,
  any,
  none
} from './combinators.ts';

import {
  toResult,
  toResultSync,
  isOk,
  isErr
} from './result.ts';

import {
  createDisposer,
  listen
} from './lifecycle.ts';

import {
  deepFreeze,
  normalizeArray,
  fallback
} from './sentinel.ts';

import {
  createRuleSet,
  ruleTree,
  evaluateRules,
  assertRuleTree
} from './rules.ts';

test('combinators: allPass short-circuits on first false', () => {
  let secondCalled = false;
  const isAdult = (u) => u.age >= 18;
  const hasAccess = () => {
    secondCalled = true;
    return true;
  };

  const check = allPass(isAdult, hasAccess);
  const result = check({ age: 16 });

  assert.equal(result, false);
  assert.equal(secondCalled, false, 'second predicate must not be called when first fails');
});

test('combinators: all thunks short-circuit on first false', () => {
  let secondCalled = false;
  const isOnline = () => false;
  const hasToken = () => {
    secondCalled = true;
    return true;
  };

  const result = all(isOnline, hasToken);
  assert.equal(result, false);
  assert.equal(secondCalled, false, 'second thunk must not be evaluated when first is false');
});

test('combinators: any thunks short-circuit on first true', () => {
  let secondCalled = false;
  const hasCache = () => true;
  const fetchRemote = () => {
    secondCalled = true;
    return false;
  };

  const result = any(hasCache, fetchRemote);
  assert.equal(result, true);
  assert.equal(secondCalled, false, 'subsequent thunks must not be evaluated after true');
});

test('result: toResult returns [data, null] on resolve', async () => {
  const [data, err] = await toResult(Promise.resolve(42));
  assert.equal(data, 42);
  assert.equal(err, null);
  assert.equal(isOk([data, err]), true);
  assert.equal(isErr([data, err]), false);
});

test('result: toResult returns [null, Error] on reject', async () => {
  const [data, err] = await toResult(Promise.reject(new Error('boom')));
  assert.equal(data, null);
  assert.equal(err?.message, 'boom');
  assert.equal(isOk([data, err]), false);
  assert.equal(isErr([data, err]), true);
});

test('result: toResultSync captures throws into tuple', () => {
  const [data, err] = toResultSync(() => {
    throw new Error('sync fail');
  });
  assert.equal(data, null);
  assert.equal(err?.message, 'sync fail');
});

test('lifecycle: createDisposer executes cleanups in reverse order', () => {
  const order = [];
  const cleanup = createDisposer(
    () => order.push(1),
    () => order.push(2)
  );
  cleanup.add(() => order.push(3));
  cleanup();
  assert.deepEqual(order, [3, 2, 1]);
});

test('sentinel: deepFreeze prevents mutation', () => {
  const config = deepFreeze({ api: { timeout: 5000 } });
  assert.throws(() => {
    config.api.timeout = 1000;
  });
});

test('sentinel: normalizeArray handles null, undefined, scalar, array', () => {
  assert.deepEqual(normalizeArray(null), []);
  assert.deepEqual(normalizeArray(undefined), []);
  assert.deepEqual(normalizeArray('a'), ['a']);
  assert.deepEqual(normalizeArray(['a', 'b']), ['a', 'b']);
});

test('rules: createRuleSet evaluates rules and identifies failing key', () => {
  const validator = createRuleSet({
    isAdult: (u) => u.age >= 18,
    hasEmail: (u) => Boolean(u.email)
  });

  const failResult = validator({ age: 15, email: 'test@example.com' });
  assert.equal(failResult.isValid, false);
  assert.equal(failResult.failingKey, 'isAdult');

  const passResult = validator({ age: 20, email: 'test@example.com' });
  assert.equal(passResult.isValid, true);
  assert.equal(failResult.failingKey !== null, true);
  assert.equal(passResult.failingKey, null);
});

test('rules: ruleTree evaluates branches and compiles dual-mode tree and violations', () => {
  const result = ruleTree({
    user: {
      missing: false,
      unverified: true
    },
    cart: {
      empty: false,
      expired: true
    }
  });

  assert.equal(result.ok, false);
  assert.equal(result.first, 'user.unverified');
  assert.deepEqual(result.violations, ['user.unverified', 'cart.expired']);
  assert.deepEqual(result.tree, {
    user: { missing: false, unverified: true },
    cart: { empty: false, expired: true }
  });
});

test('rules: ruleTree supports lazy thunk short-circuiting in failFast mode', () => {
  let downstreamCalled = false;
  const user = null;

  const result = ruleTree({
    user: {
      missing: !user,
      unverified: () => {
        downstreamCalled = true;
        return !user.isVerified; // would throw TypeError if called
      }
    }
  }, { failFast: true });

  assert.equal(result.ok, false);
  assert.equal(result.first, 'user.missing');
  assert.equal(downstreamCalled, false, 'downstream thunk must not be evaluated after preceding failure');
});

test('rules: evaluateRules evaluates flat rule map', () => {
  const result = evaluateRules({
    cart_empty: false,
    insufficient_funds: true,
    unverified: false
  });

  assert.equal(result.ok, false);
  assert.equal(result.first, 'insufficient_funds');
  assert.deepEqual(result.violations, ['insufficient_funds']);
});

test('rules: assertRuleTree executes callback with first violation on failure', () => {
  let reportedKey = null;

  const isAllowed = assertRuleTree({
    auth: {
      unauthorized: true
    }
  }, (key) => {
    reportedKey = key;
  });

  assert.equal(isAllowed, false);
  assert.equal(reportedKey, 'auth.unauthorized');
});

