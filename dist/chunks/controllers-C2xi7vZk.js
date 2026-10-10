//#region src/atoms/x-btn/x-btn.controller.ts
var e = (e, t) => {
	let n = e.variant === "glass", r = !!e.block, i = !!e.loading, a = !!e.disabled, o = ["x-btn"];
	return n && o.push("x-btn--glass"), r && o.push("x-btn--block"), i && o.push("x-btn--loading"), a && o.push("x-btn--disabled"), e.size && e.size !== "default" && o.push(`x-btn--${e.size}`), t && o.push(t), o;
}, t = (e) => e === "glass" ? "flat" : e || "elevated", n = (e, t) => {
	let n = e.variant === "glass", r = !!e.hover, i = !!e.loading, a = !!e.disabled, o = ["x-card"];
	return n && o.push("x-card--glass"), r && o.push("x-card--hover"), i && o.push("x-card--loading"), a && o.push("x-card--disabled"), t && o.push(t), o;
}, r = (e) => e === "glass" ? "flat" : e || "elevated", i = (e, t) => {
	let n = e.variant === "glass", r = !!e.disabled, i = ["x-chip"];
	return n && i.push("x-chip--glass"), r && i.push("x-chip--disabled"), e.size && e.size !== "default" && i.push(`x-chip--${e.size}`), t && i.push(t), i;
}, a = (e) => e === "glass" ? "flat" : e || "flat", o = (e, t) => {
	let n = !!e.fullscreen, r = !!e.scrollable, i = ["x-dialog"];
	return n && i.push("x-dialog--fullscreen"), r && i.push("x-dialog--scrollable"), t && i.push(t), i;
}, s = (e) => typeof e == "number" ? `${e}px` : e, c = (e) => {
	let t = {}, n = s(e.maxWidth), r = s(e.width);
	return n && (t["--x-dialog-max-width"] = n), r && (t["--x-dialog-width"] = r), t;
}, ee = (e) => !e.persistent, l = (e, t) => {
	let n = !!e.transparent, r = ["x-sheet"];
	return n && r.push("x-sheet--transparent"), t && r.push(t), r;
}, te = (e, t, n) => {
	let r = !!e.disabled, i = !!e.readonly, a = ["x-text-field"];
	return t && a.push("x-text-field--focused"), r && a.push("x-text-field--disabled"), i && a.push("x-text-field--readonly"), n && a.push(n), a;
}, u = (e, t) => {
	let n = !!e.bordered, r = typeof e.size == "string", i = !!e.status, a = ["x-avatar"];
	return n && a.push("x-avatar--bordered"), r && a.push(`x-avatar--${e.size}`), i && a.push(`x-avatar--status-${e.status}`), t && a.push(t), a;
}, d = (e) => {
	if (!e) return "";
	let t = e.trim();
	if (!t) return "";
	let n = t.split(/\s+/);
	return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : t.slice(0, 2).toUpperCase();
}, f = (e, t) => e == null || e === "" ? "" : typeof e == "number" && typeof t == "number" && t > 0 && e > t ? `${t}+` : String(e), p = (e, t) => {
	let n = !!e.dot, r = !!e.inline, i = !!e.floating, a = ["x-badge"];
	return n && a.push("x-badge--dot"), r && a.push("x-badge--inline"), i && a.push("x-badge--floating"), e.color && a.push(`x-badge--color-${e.color}`), t && a.push(t), a;
}, m = (e, t, n) => {
	let r = !!e.disabled, i = !!e.indeterminate, a = ["x-checkbox"];
	return t && a.push("x-checkbox--checked"), i && a.push("x-checkbox--indeterminate"), r && a.push("x-checkbox--disabled"), n && a.push(n), a;
}, h = (e, t, n) => {
	let r = !!e.disabled, i = ["x-switch"];
	return t && i.push("x-switch--on"), r && i.push("x-switch--disabled"), n && i.push(n), i;
}, g = (e, t) => {
	let n = !!e.vertical, r = !!e.inset, i = ["x-divider"];
	return n ? i.push("x-divider--vertical") : i.push("x-divider--horizontal"), r && i.push("x-divider--inset"), t && i.push(t), i;
}, _ = (e, t) => {
	let n = e.shape || "rounded", r = e.animation || "shimmer", i = [
		"x-skeleton",
		`x-skeleton--${n}`,
		`x-skeleton--${r}`
	];
	return t && i.push(t), i;
}, v = (e) => e == null ? "100%" : typeof e == "number" ? `${e}px` : e, y = (e, t) => {
	let n = e.type || "info", r = e.variant || "glass", i = [
		"x-alert",
		`x-alert--${n}`,
		`x-alert--${r}`
	];
	return t && i.push(t), i;
}, b = (e) => e == null ? 0 : Math.min(Math.max(e, 0), 100), x = (e, t) => {
	let n = !!e.indeterminate, r = !!e.rounded, i = !!e.striped, a = ["x-progress-linear"];
	return n && a.push("x-progress-linear--indeterminate"), r && a.push("x-progress-linear--rounded"), i && a.push("x-progress-linear--striped"), t && a.push(t), a;
}, S = (e) => typeof e == "number" ? `${e}px` : e, C = (e, t, n) => {
	let r = S(e);
	return {
		track: r ? { height: r } : {},
		bar: n ? {} : { width: `${t}%` }
	};
}, w = (e, t) => {
	let n = ["x-tooltip", `x-tooltip--${e.location || "top"}`];
	return t && n.push(t), n;
}, T = (e, t) => {
	let n = e.variant === "glass", r = !!e.nav, i = !!e.disabled, a = ["x-list"];
	return n && a.push("x-list--glass"), r && a.push("x-list--nav"), i && a.push("x-list--disabled"), t && a.push(t), a;
}, E = (e) => e === "glass" ? "flat" : e, D = (e, t) => {
	let n = e.variant === "glass", r = !!e.active, i = !!e.disabled, a = ["x-list-item"];
	return n && a.push("x-list-item--glass"), r && a.push("x-list-item--active"), i && a.push("x-list-item--disabled"), t && a.push(t), a;
}, O = (e) => e === "glass" ? "flat" : e, k = {
	display: "h1",
	title: "h2",
	subtitle: "h3",
	body: "p",
	caption: "span",
	overline: "span",
	code: "code"
}, A = (e) => e.tag ?? k[e.variant ?? "body"], j = (e, t) => {
	let n = ["x-text", `x-text--${e.variant ?? "body"}`], r = !!e.tone, i = !!e.weight, a = !!e.align, o = !!e.truncate;
	return r && n.push(`x-tone--${e.tone}`), i && n.push(`x-text--weight-${e.weight}`), a && n.push(`x-text--align-${e.align}`), o && n.push("x-text--truncate"), t && n.push(t), n;
}, M = (e, t) => {
	let n = [
		"x-stack",
		`x-stack--${e.direction ?? "column"}`,
		`x-stack--gap-${e.gap ?? "md"}`
	], r = !!e.align, i = !!e.justify, a = !!e.wrap;
	return r && n.push(`x-stack--align-${e.align}`), i && n.push(`x-stack--justify-${e.justify}`), a && n.push("x-stack--wrap"), t && n.push(t), n;
}, N = 12, P = (e) => Math.min(Math.max(Math.round(e ?? 1), 1), N), F = (e, t) => {
	let n = [
		"x-grid",
		e.minItemWidth === void 0 ? `x-grid--cols-${P(e.columns)}` : "x-grid--auto-fill",
		`x-grid--gap-${e.gap ?? "md"}`
	];
	return e.align && n.push(`x-grid--align-${e.align}`), t && n.push(t), n;
}, I = (e) => e.minItemWidth === void 0 ? {} : { "--x-grid-min": typeof e.minItemWidth == "number" ? `${e.minItemWidth}px` : String(e.minItemWidth) }, L = (e, t, n) => {
	let r = ["x-textarea"];
	t && r.push("x-textarea--focused");
	let i = !!e.disabled, a = !!e.readonly, o = !!e.autoGrow;
	return i && r.push("x-textarea--disabled"), a && r.push("x-textarea--readonly"), o && r.push("x-textarea--auto-grow"), n && r.push(n), r;
}, R = (e, t) => typeof t == "number" ? `${(e ?? "").length} / ${t}` : null, z = (e) => !!e.permanent || e.modelValue !== !1, B = (e, t) => {
	let n = ["x-nav-drawer", `x-nav-drawer--${e.location ?? "start"}`];
	z(e) || n.push("x-nav-drawer--closed");
	let r = !!e.rail, i = !!e.temporary, a = !!e.floating;
	return r && n.push("x-nav-drawer--rail"), i && n.push("x-nav-drawer--temporary"), a && n.push("x-nav-drawer--floating"), t && n.push(t), n;
}, V = (e) => ({ "--x-nav-drawer-width": `${e.rail ? 56 : e.width ?? 256}px` }), H = (e) => !!e.temporary && z(e), U = (e) => ({
	confirmText: e.confirmText || "Confirm",
	cancelText: e.cancelText || "Cancel",
	confirmColor: e.confirmColor || "primary"
}), W = {
	up: "m-kpi-tile__trend--up",
	down: "m-kpi-tile__trend--down"
}, G = {
	up: "+",
	down: "-"
}, K = (e) => W[e ?? ""] ?? "m-kpi-tile__trend--neutral", q = (e) => G[e ?? ""] ?? "", J = (e, t) => {
	let n = !!e.loading, r = !!e.disabled, i = ["m-search-input"];
	return n && i.push("m-search-input--loading"), r && i.push("m-search-input--disabled"), e.size && e.size !== "default" && i.push(`m-search-input--${e.size}`), t && i.push(t), i;
}, Y = (e, t, n = 5) => {
	let r = [], i = Math.max(1, e - Math.floor(n / 2)), a = i + n - 1;
	a > t && (a = t, i = Math.max(1, a - n + 1));
	for (let e = i; e <= a; e++) r.push(e);
	return r;
}, X = (e, t, n) => t && n ? {
	start: (e - 1) * t + 1,
	end: Math.min(e * t, n),
	total: n
} : {
	start: 0,
	end: 0,
	total: 0
}, Z = (e, t, n) => e >= 1 && e <= n && e !== t, Q = (e, t) => {
	let n = ["m-empty-state"];
	return t && n.push(t), n;
}, ne = (e, t, n) => {
	let r = ["m-toast", `m-toast--${e.type || "info"}`];
	return t && r.push("m-toast--open"), n && r.push(n), r;
}, re = (e) => ({
	gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
	"--stat-strip-cols": String(e || 4)
}), ie = (e, t) => {
	let n = !!e.grow, r = ["m-tabs-nav", `m-tabs-nav--align-${e.align || "start"}`];
	return n && r.push("m-tabs-nav--grow"), t && r.push(t), r;
}, ae = (e, t) => {
	let n = e.position || "static", r = e.bordered !== !1, i = ["m-action-bar", `m-action-bar--${n}`];
	return r && i.push("m-action-bar--bordered"), t && i.push(t), i;
}, oe = (e, t) => {
	let n = ["m-data-table"], r = !!e.hoverable, i = !!e.dense, a = !!e.loading;
	return r && n.push("m-data-table--hoverable"), i && n.push("m-data-table--dense"), a && n.push("m-data-table--loading"), t && n.push(t), n;
}, $ = (e, t) => {
	let n = e.sortBy === t, r = n && !e.sortDesc;
	return n ? r ? {
		sortBy: t,
		sortDesc: !0
	} : {
		sortBy: null,
		sortDesc: !1
	} : {
		sortBy: t,
		sortDesc: !1
	};
}, se = (e, t, n = 0) => {
	let r = t ?? "";
	return r !== "" && r in e ? String(e[r]) : n;
}, ce = (e, t) => e[t.key] ?? "", le = (e) => {
	let t = ["m-data-table__th"], n = !!e.sortable, r = !!e.align;
	return n && t.push("m-data-table__th--sortable"), r && t.push(`m-data-table__th--align-${e.align}`), t.join(" ");
}, ue = (e) => {
	let t = ["m-data-table__td"];
	return e.align && t.push(`m-data-table__td--align-${e.align}`), t.join(" ");
}, de = (e, t) => e.sortBy === t ? e.sortDesc ? "▼" : "▲" : null, fe = (e, t) => !!e.sortable && t;
//#endregion
export { l as $, M as A, C as B, H as C, P as D, R as E, T as F, g as G, y as H, E as I, p as J, h as K, w as L, A as M, D as N, F as O, O as P, te as Q, b as R, V as S, L as T, _ as U, S as V, v as W, u as X, f as Y, d as Z, J as _, $ as a, a as at, U as b, de as c, e as ct, re as d, o as et, ne as f, Z as g, Y as h, oe as i, i as it, j, I as k, ae as l, t as lt, X as m, ue as n, ee as nt, ce as o, n as ot, Q as p, m as q, le as r, s as rt, se as s, r as st, fe as t, c as tt, ie as u, K as v, z as w, B as x, q as y, x as z };
