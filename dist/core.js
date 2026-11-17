const j = {
  bg: "#050811",
  surface: "#0b1329",
  surfaceElevated: "#111c3a",
  surfaceLight: "#1e293b",
  // Signature Cyan
  cyan: "#62c9ff",
  cyanGlow: "rgba(98, 201, 255, 0.4)",
  cyanBorder: "rgba(98, 201, 255, 0.25)",
  cyanSubtle: "rgba(98, 201, 255, 0.08)",
  // Semantics
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#38bdf8",
  // Grayscale & Typography
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  textMuted: "#64748b"
}, B = {
  blurSm: "8px",
  blurMd: "12px",
  blurLg: "20px",
  bgSubtle: "rgba(11, 19, 41, 0.5)",
  bgSurface: "rgba(11, 19, 41, 0.75)",
  bgElevated: "rgba(17, 28, 58, 0.85)",
  borderSubtle: "rgba(98, 201, 255, 0.12)",
  borderHover: "rgba(98, 201, 255, 0.35)",
  borderFocus: "rgba(98, 201, 255, 0.6)"
}, T = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  pill: "9999px"
}, A = {
  primary: "#62c9ff",
  secondary: "#38bdf8",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#38bdf8",
  pink: "#f472b6",
  lime: "#a3e635",
  sky: "#38bdf8",
  purple: "#a78bfa",
  slate: "#94a3b8",
  muted: "#64748b"
}, P = {
  none: "0",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, b = (...e) => (t) => e.every((n) => n(t)), w = (...e) => (t) => e.some((n) => n(t)), I = (...e) => (t) => !e.some((n) => n(t)), z = (e) => (t) => !e(t), D = (...e) => e.every((t) => t()), M = (...e) => e.some((t) => t()), N = (...e) => !e.some((t) => t()), y = (e) => e instanceof Error ? e : new Error(String(e)), k = async (e) => {
  try {
    return [await (typeof e == "function" ? e() : e), null];
  } catch (t) {
    return [null, y(t)];
  }
}, x = (e) => {
  try {
    return [e(), null];
  } catch (t) {
    return [null, y(t)];
  }
}, g = (e) => e[1] === null, v = (e) => e[1] !== null, V = (e, t) => v(e) ? [null, e[1]] : x(() => t(e[0])), $ = (e, t) => g(e) ? e[0] : t, C = (...e) => {
  let t = !1;
  const n = [...e], r = () => {
    var s;
    if (!t) {
      t = !0;
      for (let o = n.length - 1; o >= 0; o--)
        try {
          (s = n[o]) == null || s.call(n);
        } catch (l) {
          typeof console < "u" && !!console.error && console.error("[Disposer] Error during cleanup:", l);
        }
    }
  };
  return r.add = (...s) => {
    if (t)
      for (const o of s) o == null || o();
    else
      n.push(...s);
  }, r;
}, K = (e, t, n, r) => !!e && typeof e.addEventListener == "function" ? (e.addEventListener(t, n, r), () => {
  e.removeEventListener(t, n, r);
}) : () => {
}, p = (e, t) => {
  const n = setTimeout(t, e);
  return () => clearTimeout(n);
}, F = (e, t) => {
  const n = setInterval(t, e);
  return () => clearInterval(n);
}, G = (e, t) => {
  let n = () => {
  };
  return Object.assign((...o) => {
    n(), n = p(t, () => e(...o));
  }, { cancel: () => n() });
}, m = (e) => {
  let t = null;
  const n = () => {
    t == null || t(), t = null;
  };
  return { start: () => (n(), t = e(() => {
    t = null;
  }), n), stop: n, isActive: () => t !== null };
}, U = (e, t) => m((n) => p(t, () => {
  n(), e();
})), H = (e, t) => m(() => F(t, () => {
  e();
})), L = (e) => {
  const t = Object.getOwnPropertyNames(e);
  for (const n of t) {
    const r = e[n];
    !!r && typeof r == "object" && !Object.isFrozen(r) && L(r);
  }
  return Object.freeze(e);
}, R = (e) => e === null || typeof e > "u" ? [] : Array.isArray(e) ? e : [e], q = (e, t) => e !== null && typeof e < "u" ? e : t, J = (...e) => {
  const t = b(...e);
  return (n) => R(n).filter(t);
}, O = (e, t) => t instanceof RegExp ? e.search(t) !== -1 : e.includes(t), Q = (e, t) => t.some((n) => O(e, n)), W = (e, t) => b(...t)(e), S = () => {
  let e = 0;
  return {
    claim: () => {
      const t = ++e;
      return () => t === e;
    },
    cancel: () => {
      e++;
    }
  };
}, X = (e, t, n = {}) => {
  const r = S();
  let s = { data: null, error: null, isLoading: !1, ...n };
  const o = (c) => {
    s = { ...s, ...c }, t(s);
  };
  return { run: async () => {
    const c = r.claim();
    o({ isLoading: !0, error: null });
    const a = await k(e);
    if (!c()) return a;
    const u = g(a) ? { data: a[0], error: null, isLoading: !1 } : { error: a[1], isLoading: !1 };
    return o(u), a;
  }, cancel: r.cancel, getState: () => s };
}, Y = (e) => {
  const t = Object.entries(e);
  return (n) => {
    for (const [r, s] of t)
      if (!s(n))
        return { isValid: !1, failingKey: r };
    return { isValid: !0, failingKey: null };
  };
}, E = (e, t = {}) => {
  const n = t.failFast ?? !1, r = [], s = {};
  for (const [o, l] of Object.entries(e)) {
    const c = {};
    s[o] = c;
    for (const [f, i] of Object.entries(l)) {
      const d = typeof i == "function" ? !!i() : !!i;
      if (c[f] = d, d) {
        const h = `${o}.${f}`;
        if (r.push(h), n) break;
      }
    }
    const a = r.length > 0;
    if (n && a) break;
  }
  return {
    ok: r.length === 0,
    first: r[0] ?? null,
    violations: r,
    tree: s
  };
}, Z = (e, t = {}) => {
  const n = t.failFast ?? !1, r = [];
  for (const [s, o] of Object.entries(e))
    if ((typeof o == "function" ? !!o() : !!o) && (r.push(s), n))
      break;
  return {
    ok: r.length === 0,
    first: r[0] ?? null,
    violations: r
  };
}, _ = (e, t) => {
  const n = E(e, { failFast: !0 }), r = !!t, s = !!n.first;
  return !n.ok && r && s && t(n.first), n.ok;
}, ee = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n}`).join("; ");
export {
  p as after,
  D as all,
  b as allPass,
  M as any,
  w as anyPass,
  _ as assertRuleTree,
  X as createAsyncRunner,
  G as createDebounce,
  C as createDisposer,
  S as createLatestGate,
  J as createPredicateFilter,
  H as createRestartableInterval,
  U as createRestartableTimeout,
  Y as createRuleSet,
  L as deepFreeze,
  Z as evaluateRules,
  F as every,
  q as fallback,
  B as glassTokens,
  v as isErr,
  g as isOk,
  K as listen,
  V as mapResult,
  W as matchesAllPredicates,
  Q as matchesAnyPattern,
  N as none,
  I as nonePass,
  R as normalizeArray,
  z as not,
  T as radiiTokens,
  E as ruleTree,
  P as spaceTokens,
  j as starshipColors,
  y as toError,
  k as toResult,
  x as toResultSync,
  ee as toStyleString,
  A as toneColors,
  $ as unwrapOr
};
