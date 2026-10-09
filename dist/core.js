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
}, r = (...e) => (t) => {
	for (let n of e) if (!n(t)) return !1;
	return !0;
}, i = (...e) => (t) => {
	for (let n of e) if (n(t)) return !0;
	return !1;
}, a = (...e) => (t) => {
	for (let n of e) if (n(t)) return !1;
	return !0;
}, o = (e) => (t) => !e(t), s = (...e) => {
	for (let t of e) if (!t()) return !1;
	return !0;
}, c = (...e) => {
	for (let t of e) if (t()) return !0;
	return !1;
}, l = (...e) => {
	for (let t of e) if (t()) return !1;
	return !0;
}, u = (e) => e instanceof Error ? e : Error(String(e)), d = async (e) => {
	try {
		return [await (typeof e == "function" ? e() : e), null];
	} catch (e) {
		return [null, u(e)];
	}
}, f = (e) => {
	try {
		return [e(), null];
	} catch (e) {
		return [null, u(e)];
	}
}, p = (e) => e[1] === null, m = (e) => e[1] !== null, h = (e, t) => m(e) ? [null, e[1]] : f(() => t(e[0])), g = (e, t) => p(e) ? e[0] : t, _ = (...e) => {
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
}, v = (e, t, n, r) => !e || typeof e.addEventListener != "function" ? () => {} : (e.addEventListener(t, n, r), () => {
	e.removeEventListener(t, n, r);
}), y = (e, t) => {
	let n = setTimeout(t, e);
	return () => clearTimeout(n);
}, b = (e, t) => {
	let n = setInterval(t, e);
	return () => clearInterval(n);
}, x = (e, t) => {
	let n = () => {};
	return Object.assign((...r) => {
		n(), n = y(t, () => e(...r));
	}, { cancel: () => n() });
}, S = (e) => {
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
}, C = (e, t) => S((n) => y(t, () => {
	n(), e();
})), w = (e, t) => S(() => b(t, () => {
	e();
})), T = (e) => {
	let t = Object.getOwnPropertyNames(e);
	for (let n of t) {
		let t = e[n];
		t && typeof t == "object" && !Object.isFrozen(t) && T(t);
	}
	return Object.freeze(e);
}, E = (e) => e == null ? [] : Array.isArray(e) ? e : [e], D = (e, t) => e ?? t, O = (...e) => {
	let t = r(...e);
	return (e) => E(e).filter(t);
}, k = (e, t) => t instanceof RegExp ? e.search(t) !== -1 : e.includes(t), A = (e, t) => t.some((t) => k(e, t)), j = (e, t) => r(...t)(e), M = () => {
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
}, N = (e, t, n = {}) => {
	let r = M(), i = {
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
			let n = await d(e);
			if (!t()) return n;
			let i = p(n) ? {
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
}, P = (e) => {
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
};
//#endregion
export { y as after, s as all, r as allPass, c as any, i as anyPass, N as createAsyncRunner, x as createDebounce, _ as createDisposer, M as createLatestGate, O as createPredicateFilter, w as createRestartableInterval, C as createRestartableTimeout, P as createRuleSet, T as deepFreeze, b as every, D as fallback, t as glassTokens, m as isErr, p as isOk, v as listen, h as mapResult, j as matchesAllPredicates, A as matchesAnyPattern, l as none, a as nonePass, E as normalizeArray, o as not, n as radiiTokens, e as starshipColors, u as toError, d as toResult, f as toResultSync, g as unwrapOr };
