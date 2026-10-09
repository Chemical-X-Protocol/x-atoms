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
}, l = (e) => !e.persistent, u = (e, t) => {
	let n = !!e.transparent, r = ["x-sheet"];
	return n && r.push("x-sheet--transparent"), t && r.push(t), r;
}, d = (e, t, n) => {
	let r = !!e.disabled, i = !!e.readonly, a = ["x-text-field"];
	return t && a.push("x-text-field--focused"), r && a.push("x-text-field--disabled"), i && a.push("x-text-field--readonly"), n && a.push(n), a;
}, f = (e, t) => {
	let n = !!e.bordered, r = ["x-avatar"];
	return n && r.push("x-avatar--bordered"), typeof e.size == "string" && r.push(`x-avatar--${e.size}`), e.status && r.push(`x-avatar--status-${e.status}`), t && r.push(t), r;
}, p = (e) => {
	if (!e) return "";
	let t = e.trim();
	if (!t) return "";
	let n = t.split(/\s+/);
	return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : t.slice(0, 2).toUpperCase();
}, m = (e, t) => e == null || e === "" ? "" : typeof e == "number" && t && e > t ? `${t}+` : String(e), h = (e, t) => {
	let n = !!e.dot, r = !!e.inline, i = !!e.floating, a = ["x-badge"];
	return n && a.push("x-badge--dot"), r && a.push("x-badge--inline"), i && a.push("x-badge--floating"), e.color && a.push(`x-badge--color-${e.color}`), t && a.push(t), a;
}, g = (e, t, n) => {
	let r = !!e.disabled, i = !!e.indeterminate, a = ["x-checkbox"];
	return t && a.push("x-checkbox--checked"), i && a.push("x-checkbox--indeterminate"), r && a.push("x-checkbox--disabled"), n && a.push(n), a;
}, _ = (e, t, n) => {
	let r = !!e.disabled, i = ["x-switch"];
	return t && i.push("x-switch--on"), r && i.push("x-switch--disabled"), n && i.push(n), i;
}, v = (e, t) => {
	let n = !!e.vertical, r = !!e.inset, i = ["x-divider"];
	return n ? i.push("x-divider--vertical") : i.push("x-divider--horizontal"), r && i.push("x-divider--inset"), t && i.push(t), i;
}, y = (e, t) => {
	let n = e.shape || "rounded", r = e.animation || "shimmer", i = [
		"x-skeleton",
		`x-skeleton--${n}`,
		`x-skeleton--${r}`
	];
	return t && i.push(t), i;
}, b = (e) => e == null ? "100%" : typeof e == "number" ? `${e}px` : e, x = (e, t) => {
	let n = e.type || "info", r = e.variant || "glass", i = [
		"x-alert",
		`x-alert--${n}`,
		`x-alert--${r}`
	];
	return t && i.push(t), i;
}, S = (e) => e == null ? 0 : Math.min(Math.max(e, 0), 100), C = (e, t) => {
	let n = !!e.indeterminate, r = !!e.rounded, i = !!e.striped, a = ["x-progress-linear"];
	return n && a.push("x-progress-linear--indeterminate"), r && a.push("x-progress-linear--rounded"), i && a.push("x-progress-linear--striped"), t && a.push(t), a;
}, w = (e, t) => {
	let n = ["x-tooltip", `x-tooltip--${e.location || "top"}`];
	return t && n.push(t), n;
}, T = (e, t) => {
	let n = e.variant === "glass", r = !!e.nav, i = !!e.disabled, a = ["x-list"];
	return n && a.push("x-list--glass"), r && a.push("x-list--nav"), i && a.push("x-list--disabled"), t && a.push(t), a;
}, E = (e) => e === "glass" ? "flat" : e, D = (e, t) => {
	let n = e.variant === "glass", r = !!e.active, i = !!e.disabled, a = ["x-list-item"];
	return n && a.push("x-list-item--glass"), r && a.push("x-list-item--active"), i && a.push("x-list-item--disabled"), t && a.push(t), a;
}, O = (e) => e === "glass" ? "flat" : e, k = (e) => ({
	confirmText: e.confirmText || "Confirm",
	cancelText: e.cancelText || "Cancel",
	confirmColor: e.confirmColor || "primary"
}), A = (e) => e === "up" ? "m-kpi-tile__trend--up" : e === "down" ? "m-kpi-tile__trend--down" : "m-kpi-tile__trend--neutral", j = (e) => e === "up" ? "+" : e === "down" ? "-" : "", M = (e, t) => {
	let n = !!e.loading, r = !!e.disabled, i = ["m-search-input"];
	return n && i.push("m-search-input--loading"), r && i.push("m-search-input--disabled"), e.size && e.size !== "default" && i.push(`m-search-input--${e.size}`), t && i.push(t), i;
}, N = (e, t, n = 5) => {
	let r = [], i = Math.max(1, e - Math.floor(n / 2)), a = i + n - 1;
	a > t && (a = t, i = Math.max(1, a - n + 1));
	for (let e = i; e <= a; e++) r.push(e);
	return r;
}, P = (e, t, n) => !t || !n ? {
	start: 0,
	end: 0,
	total: 0
} : {
	start: (e - 1) * t + 1,
	end: Math.min(e * t, n),
	total: n
}, F = (e, t) => {
	let n = ["m-empty-state"];
	return t && n.push(t), n;
}, I = (e, t, n) => {
	let r = ["m-toast", `m-toast--${e.type || "info"}`];
	return t && r.push("m-toast--open"), n && r.push(n), r;
}, L = (e) => ({
	gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
	"--stat-strip-cols": String(e || 4)
}), R = (e, t) => {
	let n = !!e.grow, r = ["m-tabs-nav", `m-tabs-nav--align-${e.align || "start"}`];
	return n && r.push("m-tabs-nav--grow"), t && r.push(t), r;
}, z = (e, t) => {
	let n = e.position || "static", r = e.bordered !== !1, i = ["m-action-bar", `m-action-bar--${n}`];
	return r && i.push("m-action-bar--bordered"), t && i.push(t), i;
}, B = (e, t) => {
	let n = ["m-data-table"], r = !!e.hoverable, i = !!e.dense, a = !!e.loading;
	return r && n.push("m-data-table--hoverable"), i && n.push("m-data-table--dense"), a && n.push("m-data-table--loading"), t && n.push(t), n;
}, V = (e, t) => {
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
}, H = (e, t, n = 0) => t && t in e && t ? String(e[t]) : n, U = (e, t) => e[t.key] ?? "";
//#endregion
export { m as A, a as B, x as C, _ as D, v as E, o as F, r as H, c as I, l as L, p as M, d as N, g as O, u as P, s as R, C as S, b as T, e as U, n as V, t as W, O as _, z as a, w as b, I as c, N as d, M as f, D as g, k as h, H as i, f as j, h as k, F as l, j as m, V as n, R as o, A as p, U as r, L as s, B as t, P as u, T as v, y as w, S as x, E as y, i as z };
