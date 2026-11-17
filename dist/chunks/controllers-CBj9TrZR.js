const x = (s, t) => {
  const e = s.variant === "glass", a = !!s.block, n = !!s.loading, o = !!s.disabled, i = ["x-btn"];
  return e && i.push("x-btn--glass"), a && i.push("x-btn--block"), n && i.push("x-btn--loading"), o && i.push("x-btn--disabled"), !!s.size && s.size !== "default" && i.push(`x-btn--${s.size}`), t && i.push(t), i;
}, b = (s) => s === "glass" ? "flat" : s || "elevated", p = (s, t) => {
  const e = s.variant === "glass", a = !!s.hover, n = !!s.loading, o = !!s.disabled, i = ["x-card"];
  return e && i.push("x-card--glass"), a && i.push("x-card--hover"), n && i.push("x-card--loading"), o && i.push("x-card--disabled"), t && i.push(t), i;
}, B = (s) => s === "glass" ? "flat" : s || "elevated", v = (s, t) => {
  const e = s.variant === "glass", a = !!s.disabled, n = ["x-chip"];
  return e && n.push("x-chip--glass"), a && n.push("x-chip--disabled"), !!s.size && s.size !== "default" && n.push(`x-chip--${s.size}`), t && n.push(t), n;
}, y = (s) => s === "glass" ? "flat" : s || "flat", w = (s, t) => {
  const e = !!s.fullscreen, a = !!s.scrollable, n = ["x-dialog"];
  return e && n.push("x-dialog--fullscreen"), a && n.push("x-dialog--scrollable"), t && n.push(t), n;
}, c = (s) => typeof s == "number" ? `${s}px` : s, C = (s) => {
  const t = {}, e = c(s.maxWidth), a = c(s.width);
  return e && (t["--x-dialog-max-width"] = e), a && (t["--x-dialog-width"] = a), t;
}, S = (s) => !s.persistent, $ = (s, t) => {
  const e = !!s.transparent, a = ["x-sheet"];
  return e && a.push("x-sheet--transparent"), t && a.push(t), a;
}, D = (s, t, e) => {
  const a = !!s.disabled, n = !!s.readonly, o = ["x-text-field"];
  return t && o.push("x-text-field--focused"), a && o.push("x-text-field--disabled"), n && o.push("x-text-field--readonly"), e && o.push(e), o;
}, k = (s, t) => {
  const e = !!s.bordered, a = typeof s.size == "string", n = !!s.status, o = ["x-avatar"];
  return e && o.push("x-avatar--bordered"), a && o.push(`x-avatar--${s.size}`), n && o.push(`x-avatar--status-${s.status}`), t && o.push(t), o;
}, T = (s) => {
  if (!s) return "";
  const t = s.trim();
  if (!t) return "";
  const e = t.split(/\s+/);
  return e.length >= 2 ? (e[0][0] + e[e.length - 1][0]).toUpperCase() : t.slice(0, 2).toUpperCase();
}, G = (s, t) => s == null || s === "" ? "" : typeof s == "number" && typeof t == "number" && t > 0 && s > t ? `${t}+` : String(s), A = (s, t) => {
  const e = !!s.dot, a = !!s.inline, n = !!s.floating, o = ["x-badge"];
  return e && o.push("x-badge--dot"), a && o.push("x-badge--inline"), n && o.push("x-badge--floating"), !!s.color && o.push(`x-badge--color-${s.color}`), t && o.push(t), o;
}, _ = (s, t, e) => {
  const a = !!s.disabled, n = !!s.indeterminate, o = ["x-checkbox"];
  return t && o.push("x-checkbox--checked"), n && o.push("x-checkbox--indeterminate"), a && o.push("x-checkbox--disabled"), e && o.push(e), o;
}, M = (s, t, e) => {
  const a = !!s.disabled, n = ["x-switch"];
  return t && n.push("x-switch--on"), a && n.push("x-switch--disabled"), e && n.push(e), n;
}, L = (s, t) => {
  const e = !!s.vertical, a = !!s.inset, n = ["x-divider"];
  return e ? n.push("x-divider--vertical") : n.push("x-divider--horizontal"), a && n.push("x-divider--inset"), t && n.push(t), n;
}, z = (s, t) => {
  const e = s.shape || "rounded", a = s.animation || "shimmer", n = ["x-skeleton", `x-skeleton--${e}`, `x-skeleton--${a}`];
  return t && n.push(t), n;
}, I = (s) => s == null ? "100%" : typeof s == "number" ? `${s}px` : s, N = (s, t) => {
  const e = s.type || "info", a = s.variant || "glass", n = ["x-alert", `x-alert--${e}`, `x-alert--${a}`];
  return t && n.push(t), n;
}, V = (s) => s == null ? 0 : Math.min(Math.max(s, 0), 100), F = (s, t) => {
  const e = !!s.indeterminate, a = !!s.rounded, n = !!s.striped, o = ["x-progress-linear"];
  return e && o.push("x-progress-linear--indeterminate"), a && o.push("x-progress-linear--rounded"), n && o.push("x-progress-linear--striped"), t && o.push(t), o;
}, u = (s) => typeof s == "number" ? `${s}px` : s, R = (s, t, e) => {
  const a = u(s), n = a ? { height: a } : {}, o = e ? {} : { width: `${t}%` };
  return { track: n, bar: o };
}, P = (s, t) => {
  const a = ["x-tooltip", `x-tooltip--${s.location || "top"}`];
  return t && a.push(t), a;
}, W = (s, t) => {
  const e = s.variant === "glass", a = !!s.nav, n = !!s.disabled, o = ["x-list"];
  return e && o.push("x-list--glass"), a && o.push("x-list--nav"), n && o.push("x-list--disabled"), t && o.push(t), o;
}, H = (s) => s === "glass" ? "flat" : s, j = (s, t) => {
  const e = s.variant === "glass", a = !!s.active, n = !!s.disabled, o = ["x-list-item"];
  return e && o.push("x-list-item--glass"), a && o.push("x-list-item--active"), n && o.push("x-list-item--disabled"), t && o.push(t), o;
}, E = (s) => s === "glass" ? "flat" : s, d = {
  display: "h1",
  title: "h2",
  subtitle: "h3",
  body: "p",
  caption: "span",
  overline: "span",
  code: "code"
}, U = (s) => s.tag ?? d[s.variant ?? "body"], K = (s, t) => {
  const e = ["x-text", `x-text--${s.variant ?? "body"}`], a = !!s.tone, n = !!s.weight, o = !!s.align, i = !!s.truncate;
  return a && e.push(`x-tone--${s.tone}`), n && e.push(`x-text--weight-${s.weight}`), o && e.push(`x-text--align-${s.align}`), i && e.push("x-text--truncate"), t && e.push(t), e;
}, O = (s, t) => {
  const e = [
    "x-stack",
    `x-stack--${s.direction ?? "column"}`,
    `x-stack--gap-${s.gap ?? "md"}`
  ], a = !!s.align, n = !!s.justify, o = !!s.wrap;
  return a && e.push(`x-stack--align-${s.align}`), n && e.push(`x-stack--justify-${s.justify}`), o && e.push("x-stack--wrap"), t && e.push(t), e;
}, h = 12, f = (s) => {
  const t = Math.round(s ?? 1);
  return Math.min(Math.max(t, 1), h);
}, q = (s, t) => {
  const n = ["x-grid", s.minItemWidth !== void 0 ? "x-grid--auto-fill" : `x-grid--cols-${f(s.columns)}`, `x-grid--gap-${s.gap ?? "md"}`];
  return !!s.align && n.push(`x-grid--align-${s.align}`), t && n.push(t), n;
}, J = (s) => s.minItemWidth !== void 0 ? { "--x-grid-min": typeof s.minItemWidth == "number" ? `${s.minItemWidth}px` : String(s.minItemWidth) } : {}, X = (s, t, e) => {
  const a = ["x-textarea"];
  t && a.push("x-textarea--focused");
  const n = !!s.disabled, o = !!s.readonly, i = !!s.autoGrow;
  return n && a.push("x-textarea--disabled"), o && a.push("x-textarea--readonly"), i && a.push("x-textarea--auto-grow"), e && a.push(e), a;
}, Y = (s, t) => typeof t == "number" ? `${(s ?? "").length} / ${t}` : null, r = (s) => !!s.permanent || s.modelValue !== !1, Q = (s, t) => {
  const e = ["x-nav-drawer", `x-nav-drawer--${s.location ?? "start"}`];
  r(s) || e.push("x-nav-drawer--closed");
  const a = !!s.rail, n = !!s.temporary, o = !!s.floating;
  return a && e.push("x-nav-drawer--rail"), n && e.push("x-nav-drawer--temporary"), o && e.push("x-nav-drawer--floating"), t && e.push(t), e;
}, Z = (s) => ({ "--x-nav-drawer-width": `${s.rail ? 56 : s.width ?? 256}px` }), ss = (s) => !!s.temporary && r(s), ts = (s) => {
  const t = s.confirmText || "Confirm", e = s.cancelText || "Cancel", a = s.confirmColor || "primary";
  return {
    confirmText: t,
    cancelText: e,
    confirmColor: a
  };
}, m = {
  up: "m-kpi-tile__trend--up",
  down: "m-kpi-tile__trend--down"
}, g = {
  up: "+",
  down: "-"
}, es = (s) => m[s ?? ""] ?? "m-kpi-tile__trend--neutral", ns = (s) => g[s ?? ""] ?? "", as = (s, t) => {
  const e = !!s.loading, a = !!s.disabled, n = ["m-search-input"];
  return e && n.push("m-search-input--loading"), a && n.push("m-search-input--disabled"), !!s.size && s.size !== "default" && n.push(`m-search-input--${s.size}`), t && n.push(t), n;
}, os = (s, t, e = 5) => {
  const a = [];
  let n = Math.max(1, s - Math.floor(e / 2)), o = n + e - 1;
  o > t && (o = t, n = Math.max(1, o - e + 1));
  for (let l = n; l <= o; l++)
    a.push(l);
  return a;
}, is = (s, t, e) => {
  if (!(!!t && !!e))
    return { start: 0, end: 0, total: 0 };
  const n = (s - 1) * t + 1, o = Math.min(s * t, e);
  return { start: n, end: o, total: e };
}, ls = (s, t, e) => s >= 1 && s <= e && s !== t, cs = (s, t) => {
  const e = ["m-empty-state"];
  return t && e.push(t), e;
}, rs = (s, t, e) => {
  const n = ["m-toast", `m-toast--${s.type || "info"}`];
  return t && n.push("m-toast--open"), e && n.push(e), n;
}, us = (s) => ({
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  "--stat-strip-cols": String(s || 4)
}), ds = (s, t) => {
  const e = !!s.grow, n = ["m-tabs-nav", `m-tabs-nav--align-${s.align || "start"}`];
  return e && n.push("m-tabs-nav--grow"), t && n.push(t), n;
}, hs = (s, t) => {
  const e = s.position || "static", a = s.bordered !== !1, n = ["m-action-bar", `m-action-bar--${e}`];
  return a && n.push("m-action-bar--bordered"), t && n.push(t), n;
}, fs = (s, t) => {
  const e = ["m-data-table"], a = !!s.hoverable, n = !!s.dense, o = !!s.loading;
  return a && e.push("m-data-table--hoverable"), n && e.push("m-data-table--dense"), o && e.push("m-data-table--loading"), t && e.push(t), e;
}, ms = (s, t) => {
  const e = s.sortBy === t, a = e && !s.sortDesc;
  return e ? a ? { sortBy: t, sortDesc: !0 } : { sortBy: null, sortDesc: !1 } : { sortBy: t, sortDesc: !1 };
}, gs = (s, t, e = 0) => {
  const a = t ?? "";
  return a !== "" && a in s ? String(s[a]) : e;
}, xs = (s, t) => s[t.key] ?? "", bs = (s) => {
  const t = ["m-data-table__th"], e = !!s.sortable, a = !!s.align;
  return e && t.push("m-data-table__th--sortable"), a && t.push(`m-data-table__th--align-${s.align}`), t.join(" ");
}, ps = (s) => {
  const t = ["m-data-table__td"];
  return !!s.align && t.push(`m-data-table__td--align-${s.align}`), t.join(" ");
}, Bs = (s, t) => s.sortBy === t ? s.sortDesc ? "▼" : "▲" : null, vs = (s, t) => !!s.sortable && t;
export {
  U as $,
  F as A,
  R as B,
  as as C,
  $ as D,
  z as E,
  O as F,
  M as G,
  fs as H,
  ds as I,
  K as J,
  D as K,
  X as L,
  rs as M,
  P as N,
  Y as O,
  I as P,
  T as Q,
  ms as R,
  ss as S,
  r as T,
  ls as U,
  G as V,
  xs as W,
  ts as X,
  gs as Y,
  u as Z,
  Bs as _,
  f as a,
  es as a0,
  ns as a1,
  B as a2,
  y as a3,
  E as a4,
  H as a5,
  b as a6,
  S as a7,
  c as a8,
  V as b,
  vs as c,
  hs as d,
  N as e,
  k as f,
  A as g,
  x as h,
  p as i,
  ps as j,
  _ as k,
  v as l,
  w as m,
  C as n,
  L as o,
  cs as p,
  q,
  us as r,
  J as s,
  bs as t,
  is as u,
  W as v,
  j as w,
  Q as x,
  Z as y,
  os as z
};
