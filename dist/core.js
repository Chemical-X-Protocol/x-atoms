//#region src/core/tokens.ts
var e = {
	bg: "#050811",
	surface: "#0b1329",
	surfaceElevated: "#111c3a",
	surfaceLight: "#1e293b",
	cyan: "#62c9ff",
	cyanGlow: "rgba(98, 201, 255, 0.4)",
	cyanBorder: "rgba(98, 201, 255, 0.25)",
	cyanSubtle: "rgba(98, 201, 255, 0.08)",
	success: "#10b981",
	warning: "#f59e0b",
	error: "#ef4444",
	info: "#38bdf8",
	textPrimary: "#f8fafc",
	textSecondary: "#94a3b8",
	textMuted: "#64748b"
}, t = {
	blurSm: "8px",
	blurMd: "12px",
	blurLg: "20px",
	bgSubtle: "rgba(11, 19, 41, 0.5)",
	bgSurface: "rgba(11, 19, 41, 0.75)",
	bgElevated: "rgba(17, 28, 58, 0.85)",
	borderSubtle: "rgba(98, 201, 255, 0.12)",
	borderHover: "rgba(98, 201, 255, 0.35)",
	borderFocus: "rgba(98, 201, 255, 0.6)"
}, n = {
	sm: "6px",
	md: "10px",
	lg: "16px",
	pill: "9999px"
}, r = {
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
}, i = {
	none: "0",
	xs: "4px",
	sm: "8px",
	md: "12px",
	lg: "16px",
	xl: "24px"
}, a = (...e) => (t) => e.every((e) => e(t)), o = (...e) => (t) => e.some((e) => e(t)), s = (...e) => (t) => !e.some((e) => e(t)), c = (e) => (t) => !e(t), l = (...e) => e.every((e) => e()), u = (...e) => e.some((e) => e()), d = (...e) => !e.some((e) => e()), f = (e) => e instanceof Error ? e : Error(String(e)), p = async (e) => {
	try {
		return [await (typeof e == "function" ? e() : e), null];
	} catch (e) {
		return [null, f(e)];
	}
}, m = (e) => {
	try {
		return [e(), null];
	} catch (e) {
		return [null, f(e)];
	}
}, h = (e) => e[1] === null, g = (e) => e[1] !== null, _ = (e, t) => g(e) ? [null, e[1]] : m(() => t(e[0])), v = (e, t) => h(e) ? e[0] : t, y = (...e) => {
	let t = !1, n = [...e], r = () => {
		if (!t) {
			t = !0;
			for (let e = n.length - 1; e >= 0; e--) try {
				n[e]?.();
			} catch (e) {
				typeof console < "u" && console.error && console.error("[Disposer] Error during cleanup:", e);
			}
		}
	};
	return r.add = (...e) => {
		if (t) for (let t of e) t?.();
		else n.push(...e);
	}, r;
}, b = (e, t, n, r) => e && typeof e.addEventListener == "function" ? (e.addEventListener(t, n, r), () => {
	e.removeEventListener(t, n, r);
}) : () => {}, x = (e, t) => {
	let n = setTimeout(t, e);
	return () => clearTimeout(n);
}, S = (e, t) => {
	let n = setInterval(t, e);
	return () => clearInterval(n);
}, C = (e, t) => {
	let n = () => {};
	return Object.assign((...r) => {
		n(), n = x(t, () => e(...r));
	}, { cancel: () => n() });
}, w = (e) => {
	let t = null, n = () => {
		t?.(), t = null;
	};
	return {
		start: () => (n(), t = e(() => {
			t = null;
		}), n),
		stop: n,
		isActive: () => t !== null
	};
}, T = (e, t) => w((n) => x(t, () => {
	n(), e();
})), E = (e, t) => w(() => S(t, () => {
	e();
})), D = (e) => {
	let t = Object.getOwnPropertyNames(e);
	for (let n of t) {
		let t = e[n];
		t && typeof t == "object" && !Object.isFrozen(t) && D(t);
	}
	return Object.freeze(e);
}, O = (e) => e == null ? [] : Array.isArray(e) ? e : [e], k = (e, t) => e ?? t, A = (...e) => {
	let t = a(...e);
	return (e) => O(e).filter(t);
}, j = (e, t) => t instanceof RegExp ? e.search(t) !== -1 : e.includes(t), M = (e, t) => t.some((t) => j(e, t)), N = (e, t) => a(...t)(e), P = () => {
	let e = 0;
	return {
		claim: () => {
			let t = ++e;
			return () => t === e;
		},
		cancel: () => {
			e++;
		}
	};
}, F = (e, t, n = {}) => {
	let r = P(), i = {
		data: null,
		error: null,
		isLoading: !1,
		...n
	}, a = (e) => {
		i = {
			...i,
			...e
		}, t(i);
	};
	return {
		run: async () => {
			let t = r.claim();
			a({
				isLoading: !0,
				error: null
			});
			let n = await p(e);
			if (!t()) return n;
			let i = h(n) ? {
				data: n[0],
				error: null,
				isLoading: !1
			} : {
				error: n[1],
				isLoading: !1
			};
			return a(i), n;
		},
		cancel: r.cancel,
		getState: () => i
	};
}, I = (e) => {
	let t = Object.entries(e);
	return (e) => {
		for (let [n, r] of t) if (!r(e)) return {
			isValid: !1,
			failingKey: n
		};
		return {
			isValid: !0,
			failingKey: null
		};
	};
}, L = (e, t = {}) => {
	let n = t.failFast ?? !1, r = [], i = {};
	for (let [t, a] of Object.entries(e)) {
		let e = {};
		i[t] = e;
		for (let [i, o] of Object.entries(a)) {
			let a = typeof o == "function" ? !!o() : !!o;
			if (e[i] = a, a) {
				let e = `${t}.${i}`;
				if (r.push(e), n) break;
			}
		}
		let o = r.length > 0;
		if (n && o) break;
	}
	return {
		ok: r.length === 0,
		first: r[0] ?? null,
		violations: r,
		tree: i
	};
}, R = (e, t = {}) => {
	let n = t.failFast ?? !1, r = [];
	for (let [t, i] of Object.entries(e)) if ((typeof i == "function" ? i() : i) && (r.push(t), n)) break;
	return {
		ok: r.length === 0,
		first: r[0] ?? null,
		violations: r
	};
}, z = (e, t) => {
	let n = L(e, { failFast: !0 }), r = !!t, i = !!n.first;
	return !n.ok && r && i && t(n.first), n.ok;
}, B = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t}`).join("; ");
//#endregion
export { x as after, l as all, a as allPass, u as any, o as anyPass, z as assertRuleTree, F as createAsyncRunner, C as createDebounce, y as createDisposer, P as createLatestGate, A as createPredicateFilter, E as createRestartableInterval, T as createRestartableTimeout, I as createRuleSet, D as deepFreeze, R as evaluateRules, S as every, k as fallback, t as glassTokens, g as isErr, h as isOk, b as listen, _ as mapResult, N as matchesAllPredicates, M as matchesAnyPattern, d as none, s as nonePass, O as normalizeArray, c as not, n as radiiTokens, L as ruleTree, i as spaceTokens, e as starshipColors, f as toError, p as toResult, m as toResultSync, B as toStyleString, r as toneColors, v as unwrapOr };
