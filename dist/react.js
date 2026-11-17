import { jsxs as p, jsx as s, Fragment as T } from "react/jsx-runtime";
import { h as P, i as M, l as $, a7 as K, m as z, n as G, D as O, K as H, f as q, Q as J, g as Q, V as W, k as Y, G as Z, o as V, E as U, P as S, e as ee, A as se, b as ae, B as le, N as te, v as ne, w as re, $ as ce, J as ie, F as oe, q as de, s as ue, L as me, O as ve, x as pe, y as _e, S as he, X as Ne, a1 as fe, a0 as xe, C as Ce, z as be, u as ke, U as ye, M as ge, r as Xe, I as Se, d as Re, H as Te, t as De, _ as je, c as Be, R as we, j as Ie, Y as Ae, W as Fe } from "./chunks/controllers-CBj9TrZR.js";
import { useEffect as x, useState as y, useRef as D, useMemo as j } from "react";
import { listen as Le, createDebounce as Ee, after as B, createDisposer as R, every as Pe, createAsyncRunner as Me, createPredicateFilter as $e } from "./core.js";
import { all as Ds, allPass as js, any as Bs, anyPass as ws, assertRuleTree as Is, createLatestGate as As, createRestartableInterval as Fs, createRestartableTimeout as Ls, createRuleSet as Es, deepFreeze as Ps, evaluateRules as Ms, fallback as $s, glassTokens as Ks, isErr as zs, isOk as Gs, mapResult as Os, matchesAllPredicates as Hs, matchesAnyPattern as qs, none as Js, nonePass as Qs, normalizeArray as Ws, not as Ys, radiiTokens as Zs, ruleTree as Vs, spaceTokens as Us, starshipColors as ea, toError as sa, toResult as aa, toResultSync as la, toStyleString as ta, toneColors as na, unwrapOr as ra } from "./core.js";
const b = ({
  variant: e = void 0,
  color: a = void 0,
  size: l = "default",
  block: t = !1,
  loading: n = !1,
  disabled: c = !1,
  icon: i = !1,
  className: o = "",
  onClick: r = void 0,
  children: d = null,
  prepend: m = null,
  append: u = null
}) => {
  const v = c || n, _ = P(
    { variant: e, size: l, block: t, loading: n, disabled: c },
    o
  ).join(" ");
  return /* @__PURE__ */ p(
    "button",
    {
      type: "button",
      className: _,
      disabled: v,
      onClick: r,
      children: [
        m ? /* @__PURE__ */ s("span", { className: "x-btn__prepend", children: m }) : null,
        d ? /* @__PURE__ */ s("span", { className: "x-btn__content", children: d }) : null,
        u ? /* @__PURE__ */ s("span", { className: "x-btn__append", children: u }) : null
      ]
    }
  );
}, w = ({
  variant: e = void 0,
  color: a = void 0,
  loading: l = !1,
  disabled: t = !1,
  hover: n = !1,
  className: c = "",
  children: i = null,
  title: o = null,
  actions: r = null
}) => {
  const d = M(
    { variant: e, loading: l, disabled: t, hover: n },
    c
  ).join(" ");
  return /* @__PURE__ */ p("div", { className: d, children: [
    o ? /* @__PURE__ */ s("div", { className: "x-card__title", children: o }) : null,
    i ? /* @__PURE__ */ s("div", { className: "x-card__content", children: i }) : null,
    r ? /* @__PURE__ */ s("div", { className: "x-card__actions", children: r }) : null
  ] });
}, Ye = ({
  variant: e = void 0,
  color: a = void 0,
  size: l = "default",
  closable: t = !1,
  disabled: n = !1,
  filter: c = !1,
  className: i = "",
  onClick: o = void 0,
  onClose: r = void 0,
  children: d = null,
  prepend: m = null
}) => {
  const u = $(
    { variant: e, size: l, disabled: n },
    i
  ).join(" ");
  return /* @__PURE__ */ p("div", { className: u, onClick: o, role: "status", children: [
    m ? /* @__PURE__ */ s("span", { className: "x-chip__prepend", children: m }) : null,
    d ? /* @__PURE__ */ s("span", { className: "x-chip__content", children: d }) : null,
    t ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: "x-chip__close",
        onClick: (_) => {
          _.stopPropagation(), r == null || r();
        },
        "aria-label": "Close chip",
        children: "×"
      }
    ) : null
  ] });
}, Ze = ({
  modelValue: e = !1,
  maxWidth: a = 600,
  width: l = void 0,
  persistent: t = !1,
  scrollable: n = !1,
  fullscreen: c = !1,
  className: i = "",
  onUpdateModelValue: o = void 0,
  title: r = null,
  actions: d = null,
  children: m = null
}) => {
  const u = K({ persistent: t }), v = () => {
    u && (o == null || o(!1));
  };
  if (x(() => {
    if (e)
      return Le(globalThis.document, "keydown", (f) => {
        f.key === "Escape" && v();
      });
  }), !e) return null;
  const _ = z({ fullscreen: c, scrollable: n }, `x-dialog--native ${i}`.trim()).join(" "), h = G({ maxWidth: a, width: l });
  return /* @__PURE__ */ s("div", { className: _, role: "presentation", onClick: v, children: /* @__PURE__ */ p(
    "div",
    {
      className: "x-dialog__surface",
      role: "dialog",
      "aria-modal": "true",
      style: h,
      onClick: (f) => f.stopPropagation(),
      children: [
        r ? /* @__PURE__ */ s("div", { className: "x-dialog__title", children: r }) : null,
        /* @__PURE__ */ s("div", { className: "x-dialog__content", children: m }),
        d ? /* @__PURE__ */ s("div", { className: "x-dialog__actions", children: d }) : null
      ]
    }
  ) });
}, Ke = ({
  color: e = void 0,
  elevation: a = void 0,
  rounded: l = void 0,
  border: t = void 0,
  transparent: n = !1,
  className: c = "",
  children: i = null
}) => {
  const o = O(
    { transparent: n },
    c
  ).join(" ");
  return /* @__PURE__ */ s("div", { className: o, children: i });
}, ze = ({
  modelValue: e = "",
  label: a = void 0,
  placeholder: l = void 0,
  type: t = "text",
  disabled: n = !1,
  readonly: c = !1,
  clearable: i = !1,
  className: o = "",
  onChange: r = void 0,
  onClear: d = void 0,
  prependInner: m = null,
  appendInner: u = null
}) => {
  const [v, _] = y(!1), h = H(
    { disabled: n, readonly: c },
    v,
    o
  ).join(" ");
  return /* @__PURE__ */ p("div", { className: h, children: [
    a ? /* @__PURE__ */ s("label", { className: "x-text-field__label", children: a }) : null,
    /* @__PURE__ */ p("div", { className: "x-text-field__input-wrap", children: [
      m ? /* @__PURE__ */ s("span", { className: "x-text-field__prepend-inner", children: m }) : null,
      /* @__PURE__ */ s(
        "input",
        {
          type: t,
          value: e,
          placeholder: l,
          disabled: n,
          readOnly: c,
          onChange: r,
          onFocus: () => _(!0),
          onBlur: () => _(!1),
          className: "x-text-field__native-input"
        }
      ),
      i && !!e ? /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: "x-text-field__clear-btn",
          onClick: d,
          "aria-label": "Clear input",
          children: "×"
        }
      ) : null,
      u ? /* @__PURE__ */ s("span", { className: "x-text-field__append-inner", children: u }) : null
    ] })
  ] });
}, Ve = ({
  src: e = void 0,
  alt: a = void 0,
  text: l = void 0,
  size: t = "default",
  bordered: n = !1,
  status: c = void 0,
  className: i = "",
  children: o = null
}) => {
  const r = q(
    { size: t, bordered: n, status: c },
    i
  ).join(" "), d = J(l || a), m = !!e, u = !!d, v = !!c, _ = () => m ? /* @__PURE__ */ s("img", { src: e, alt: a || "Avatar" }) : u ? /* @__PURE__ */ s("span", { children: d }) : o, h = () => v ? /* @__PURE__ */ s("span", { className: `x-avatar__status-dot x-avatar__status-dot--${c}` }) : null;
  return /* @__PURE__ */ p("div", { className: r, children: [
    _(),
    h()
  ] });
}, Ue = ({
  content: e = void 0,
  color: a = "primary",
  dot: l = !1,
  inline: t = !1,
  max: n = 99,
  floating: c = !0,
  className: i = "",
  children: o = null
}) => {
  const r = W(e, n), d = Q(
    { dot: l, inline: t, floating: c, color: a },
    i
  ).join(" ");
  return o ? /* @__PURE__ */ p("div", { className: "x-badge-wrapper", children: [
    o,
    /* @__PURE__ */ s("span", { className: d, children: l ? null : r })
  ] }) : /* @__PURE__ */ s("span", { className: d, children: l ? null : r });
}, es = ({
  modelValue: e = !1,
  label: a = void 0,
  disabled: l = !1,
  className: t = "",
  onChange: n = void 0,
  children: c = null
}) => {
  const i = Y(
    { disabled: l },
    e,
    t
  ).join(" "), o = () => {
    !l && (n == null || n(!e));
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: i,
      onClick: o,
      onKeyDown: (r) => {
        (r.key === " " || r.key === "Enter") && (r.preventDefault(), o());
      },
      role: "checkbox",
      "aria-checked": e,
      tabIndex: l ? -1 : 0,
      children: [
        /* @__PURE__ */ s("span", { className: "x-checkbox__box", children: e ? /* @__PURE__ */ s("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ s("polyline", { points: "20 6 9 17 4 12" }) }) : null }),
        a ? /* @__PURE__ */ s("span", { className: "x-checkbox__label", children: a }) : c
      ]
    }
  );
}, ss = ({
  modelValue: e = !1,
  label: a = void 0,
  disabled: l = !1,
  className: t = "",
  onChange: n = void 0,
  children: c = null
}) => {
  const i = Z(
    { disabled: l },
    e,
    t
  ).join(" "), o = () => {
    !l && (n == null || n(!e));
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: i,
      onClick: o,
      onKeyDown: (r) => {
        (r.key === " " || r.key === "Enter") && (r.preventDefault(), o());
      },
      role: "switch",
      "aria-checked": e,
      tabIndex: l ? -1 : 0,
      children: [
        /* @__PURE__ */ s("span", { className: "x-switch__track", children: /* @__PURE__ */ s("span", { className: "x-switch__thumb" }) }),
        a ? /* @__PURE__ */ s("span", { className: "x-switch__label", children: a }) : c
      ]
    }
  );
}, as = ({
  vertical: e = !1,
  inset: a = !1,
  className: l = ""
}) => {
  const t = V(
    { vertical: e, inset: a },
    l
  ).join(" ");
  return /* @__PURE__ */ s(
    "hr",
    {
      className: t,
      "aria-orientation": e ? "vertical" : "horizontal"
    }
  );
}, ls = ({
  shape: e = "rounded",
  animation: a = "shimmer",
  width: l = "100%",
  height: t = "1rem",
  delay: n = "0s",
  className: c = ""
}) => {
  const i = U(
    { shape: e, animation: a },
    c
  ).join(" "), o = {
    "--x-skeleton-width": S(l),
    "--x-skeleton-height": S(t),
    "--x-skeleton-delay": n
  };
  return /* @__PURE__ */ s("div", { className: i, style: o });
}, ts = ({
  type: e = "info",
  title: a = void 0,
  text: l = void 0,
  closable: t = !1,
  variant: n = void 0,
  className: c = "",
  onClose: i = void 0,
  children: o = null,
  icon: r = null
}) => {
  const d = ee(
    { type: e, variant: n },
    c
  ).join(" ");
  return /* @__PURE__ */ p("div", { className: d, role: "alert", children: [
    r ? /* @__PURE__ */ s("div", { className: "x-alert__icon", children: r }) : null,
    /* @__PURE__ */ p("div", { className: "x-alert__content", children: [
      a ? /* @__PURE__ */ s("div", { className: "x-alert__title", children: a }) : null,
      l ? /* @__PURE__ */ s("div", { className: "x-alert__text", children: l }) : /* @__PURE__ */ s("div", { className: "x-alert__text", children: o })
    ] }),
    t ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: "x-alert__close",
        onClick: i,
        "aria-label": "Close alert",
        children: "×"
      }
    ) : null
  ] });
}, Ge = ({
  modelValue: e = 0,
  indeterminate: a = !1,
  height: l = 4,
  rounded: t = !0,
  striped: n = !1,
  className: c = ""
}) => {
  const i = ae(e), o = se(
    { indeterminate: a, rounded: t, striped: n },
    c
  ).join(" "), r = le(l, i, a);
  return /* @__PURE__ */ s(
    "div",
    {
      className: o,
      style: r.track,
      role: "progressbar",
      "aria-valuenow": a ? void 0 : i,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ s("div", { className: "x-progress-linear__bar", style: r.bar })
    }
  );
}, ns = ({
  text: e = void 0,
  location: a = "top",
  disabled: l = !1,
  className: t = "",
  children: n,
  tooltip: c = null
}) => {
  if (l)
    return /* @__PURE__ */ s(T, { children: n });
  const i = te(
    { location: a },
    t
  ).join(" ");
  return (
    // Visibility comes from .x-tooltip-wrapper:hover / :focus-within in glass-theme.
    /* @__PURE__ */ p("div", { className: "x-tooltip-wrapper", children: [
      n,
      /* @__PURE__ */ s(
        "div",
        {
          className: i,
          role: "tooltip",
          children: c || e
        }
      )
    ] })
  );
}, rs = ({
  density: e = "default",
  lines: a = "one",
  nav: l = !1,
  color: t = void 0,
  variant: n = void 0,
  disabled: c = !1,
  className: i = "",
  children: o = null
}) => {
  const r = ne(
    { nav: l, variant: n, disabled: c },
    i
  ).join(" ");
  return /* @__PURE__ */ s("div", { className: r, children: o });
}, cs = ({
  title: e = void 0,
  subtitle: a = void 0,
  value: l = void 0,
  active: t = !1,
  disabled: n = !1,
  color: c = void 0,
  density: i = void 0,
  lines: o = void 0,
  variant: r = void 0,
  rounded: d = void 0,
  ripple: m = !0,
  className: u = "",
  children: v = null,
  prepend: _ = null,
  append: h = null
}) => {
  const f = re(
    { active: t, disabled: n, variant: r },
    u
  ).join(" ");
  return /* @__PURE__ */ p("div", { className: f, children: [
    _ ? /* @__PURE__ */ s("div", { className: "x-list-item__prepend", children: _ }) : null,
    /* @__PURE__ */ p("div", { className: "x-list-item__content", children: [
      e ? /* @__PURE__ */ s("div", { className: "x-list-item__title", children: e }) : null,
      a ? /* @__PURE__ */ s("div", { className: "x-list-item__subtitle", children: a }) : null,
      v
    ] }),
    h ? /* @__PURE__ */ s("div", { className: "x-list-item__append", children: h }) : null
  ] });
}, is = ({
  tag: e = void 0,
  variant: a = "body",
  tone: l = void 0,
  weight: t = void 0,
  align: n = void 0,
  truncate: c = !1,
  className: i = "",
  children: o = null
}) => {
  const r = ce({ tag: e, variant: a }), d = ie({ variant: a, tone: l, weight: t, align: n, truncate: c }, i).join(" ");
  return /* @__PURE__ */ s(r, { className: d, children: o });
}, os = ({
  direction: e = "column",
  gap: a = "md",
  align: l = void 0,
  justify: t = void 0,
  wrap: n = !1,
  tag: c = "div",
  className: i = "",
  children: o = null
}) => {
  const r = oe({ direction: e, gap: a, align: l, justify: t, wrap: n }, i).join(" ");
  return /* @__PURE__ */ s(c, { className: r, children: o });
}, ds = ({
  columns: e = 1,
  minItemWidth: a = void 0,
  gap: l = "md",
  align: t = void 0,
  tag: n = "div",
  className: c = "",
  children: i = null
}) => {
  const o = de({ columns: e, minItemWidth: a, gap: l, align: t }, c).join(" "), r = ue({ minItemWidth: a });
  return /* @__PURE__ */ s(n, { className: o, style: r, children: i });
}, us = ({
  modelValue: e = "",
  label: a = void 0,
  placeholder: l = void 0,
  rows: t = 3,
  autoGrow: n = !1,
  disabled: c = !1,
  readonly: i = !1,
  maxlength: o = void 0,
  className: r = "",
  onChange: d = void 0
}) => {
  const [m, u] = y(!1), v = me({ disabled: c, readonly: i, autoGrow: n }, m, `x-textarea--native ${r}`.trim()).join(" "), _ = ve(e, o);
  return /* @__PURE__ */ p("label", { className: v, children: [
    a ? /* @__PURE__ */ s("span", { className: "x-textarea__label", children: a }) : null,
    /* @__PURE__ */ s(
      "textarea",
      {
        className: "x-textarea__native",
        value: e,
        rows: t,
        placeholder: l,
        disabled: c,
        readOnly: i,
        maxLength: o,
        onChange: (h) => d == null ? void 0 : d(h.target.value),
        onFocus: () => u(!0),
        onBlur: () => u(!1)
      }
    ),
    _ ? /* @__PURE__ */ s("span", { className: "x-textarea__counter", children: _ }) : null
  ] });
}, ms = ({
  modelValue: e = !0,
  location: a = "start",
  rail: l = !1,
  temporary: t = !1,
  permanent: n = !1,
  width: c = 256,
  floating: i = !1,
  className: o = "",
  onUpdateModelValue: r = void 0,
  prepend: d = null,
  append: m = null,
  children: u = null
}) => {
  const v = { modelValue: e, location: a, rail: l, temporary: t, permanent: n, width: c, floating: i }, _ = pe(v, `x-nav-drawer--native ${o}`.trim()).join(" "), h = _e(v);
  return /* @__PURE__ */ p(T, { children: [
    he(v) ? /* @__PURE__ */ s("div", { className: "x-nav-drawer__scrim", role: "presentation", onClick: () => r == null ? void 0 : r(!1) }) : null,
    /* @__PURE__ */ p("nav", { className: _, style: h, children: [
      d,
      /* @__PURE__ */ s("div", { className: "x-nav-drawer__content", children: u }),
      m
    ] })
  ] });
}, vs = ({
  modelValue: e = !1,
  title: a = "Confirm Action",
  message: l = "Are you sure you want to proceed?",
  confirmText: t = "Confirm",
  cancelText: n = "Cancel",
  confirmColor: c = "primary",
  loading: i = !1,
  onConfirm: o = void 0,
  onCancel: r = void 0
}) => {
  if (!e) return null;
  const d = Ne({
    confirmText: t,
    cancelText: n,
    confirmColor: c
  });
  return /* @__PURE__ */ s("div", { className: "x-dialog", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ p("div", { className: "x-dialog__surface", children: [
    /* @__PURE__ */ p("div", { className: "m-confirm-dialog__body", children: [
      /* @__PURE__ */ s("h3", { className: "m-confirm-dialog__title", children: a }),
      /* @__PURE__ */ s("p", { className: "m-confirm-dialog__message", children: l })
    ] }),
    /* @__PURE__ */ p("div", { className: "x-dialog__actions", children: [
      /* @__PURE__ */ s(
        b,
        {
          variant: "text",
          disabled: i,
          onClick: r,
          children: d.cancelText
        }
      ),
      /* @__PURE__ */ s(
        b,
        {
          variant: "elevated",
          color: d.confirmColor,
          loading: i,
          onClick: o,
          children: d.confirmText
        }
      )
    ] })
  ] }) });
}, Oe = ({
  label: e,
  value: a,
  subtext: l = void 0,
  trend: t = void 0,
  trendValue: n = void 0,
  icon: c = void 0,
  iconElement: i = null
}) => {
  const o = xe(t), r = fe(t), d = !!(t && n), m = !!l, u = d || m, v = !!i, _ = !!c, h = () => v ? i : _ ? /* @__PURE__ */ s("span", { className: "m-kpi-tile__icon", children: c }) : null, f = () => u ? /* @__PURE__ */ p("div", { className: "m-kpi-tile__footer", children: [
    d ? /* @__PURE__ */ p("span", { className: `m-kpi-tile__trend ${o}`, children: [
      r,
      n
    ] }) : null,
    m ? /* @__PURE__ */ s("span", { className: "m-kpi-tile__subtext", children: l }) : null
  ] }) : null;
  return /* @__PURE__ */ s(w, { variant: "glass", hover: !0, children: /* @__PURE__ */ p("div", { className: "m-kpi-tile", children: [
    /* @__PURE__ */ p("div", { className: "m-kpi-tile__header", children: [
      /* @__PURE__ */ s("span", { className: "m-kpi-tile__label", children: e }),
      h()
    ] }),
    /* @__PURE__ */ s("div", { className: "m-kpi-tile__value", children: a }),
    f()
  ] }) });
}, g = (e) => {
  const a = D(e);
  return x(() => {
    a.current = e;
  }, [e]), a;
}, He = (e, a) => {
  const l = g(e), t = j(
    () => Ee((...n) => l.current(...n), a),
    [a, l]
  );
  return x(() => t.cancel, [t]), t;
}, ps = ({
  modelValue: e = "",
  placeholder: a = "Search...",
  debounceMs: l = 250,
  disabled: t = !1,
  clearable: n = !0,
  className: c = "",
  onSearch: i = void 0,
  onClear: o = void 0
}) => {
  const [r, d] = y(e), m = He((h) => i == null ? void 0 : i(h), l);
  x(() => {
    d(e);
  }, [e]);
  const u = (h) => {
    const f = h.target.value;
    d(f), m(f);
  }, v = () => {
    d(""), o == null || o(), i == null || i("");
  }, _ = Ce(
    { disabled: t },
    c
  ).join(" ");
  return /* @__PURE__ */ s("div", { className: _, children: /* @__PURE__ */ s(
    ze,
    {
      modelValue: r,
      placeholder: a,
      disabled: t,
      clearable: n,
      onChange: u,
      onClear: v,
      prependInner: /* @__PURE__ */ s("span", { className: "m-search-input__icon", children: "🔍" })
    }
  ) });
}, _s = ({
  currentPage: e,
  totalPages: a,
  pageSize: l = 20,
  totalItems: t = 0,
  maxVisiblePages: n = 5,
  showRange: c = !0,
  onPageChange: i = void 0
}) => {
  const o = be(e, a, n), r = ke(e, l, t), d = e > 1, m = e < a, u = (v) => {
    ye(v, e, a) && (i == null || i(v));
  };
  return /* @__PURE__ */ p("div", { className: "m-pagination", children: [
    c && t ? /* @__PURE__ */ p("div", { className: "m-pagination__info", children: [
      "Showing ",
      r.start,
      " to ",
      r.end,
      " of ",
      r.total,
      " items"
    ] }) : /* @__PURE__ */ s("div", {}),
    /* @__PURE__ */ p("div", { className: "m-pagination__controls", children: [
      /* @__PURE__ */ s(
        b,
        {
          variant: "glass",
          size: "small",
          disabled: !d,
          onClick: () => u(e - 1),
          children: "Prev"
        }
      ),
      o.map((v) => /* @__PURE__ */ s(
        b,
        {
          variant: v === e ? "elevated" : "glass",
          size: "small",
          className: `m-pagination__btn ${v === e ? "m-pagination__btn--active" : ""}`,
          onClick: () => u(v),
          children: v
        },
        v
      )),
      /* @__PURE__ */ s(
        b,
        {
          variant: "glass",
          size: "small",
          disabled: !m,
          onClick: () => u(e + 1),
          children: "Next"
        }
      )
    ] })
  ] });
}, hs = ({
  title: e,
  description: a = void 0,
  icon: l = "✨",
  actionText: t = void 0,
  className: n = "",
  onClickAction: c = void 0,
  iconElement: i = null,
  actionElement: o = null
}) => {
  const r = !!i, d = !!a, m = !!o, u = !!t, v = () => r ? i : /* @__PURE__ */ s("span", { children: l }), _ = () => d ? /* @__PURE__ */ s("p", { className: "m-empty-state__description", children: a }) : null, h = () => m ? /* @__PURE__ */ s("div", { className: "m-empty-state__actions", children: o }) : u ? /* @__PURE__ */ s("div", { className: "m-empty-state__actions", children: /* @__PURE__ */ s(b, { variant: "elevated", color: "primary", onClick: c, children: t }) }) : null;
  return /* @__PURE__ */ p(w, { variant: "glass", className: `m-empty-state ${n}`, children: [
    /* @__PURE__ */ s("div", { className: "m-empty-state__icon-wrap", children: v() }),
    /* @__PURE__ */ s("h3", { className: "m-empty-state__title", children: e }),
    _(),
    h()
  ] });
}, Ns = ({
  modelValue: e = !1,
  message: a,
  type: l = "info",
  duration: t = 4e3,
  actionText: n = void 0,
  className: c = "",
  onClickAction: i = void 0,
  onClose: o = void 0
}) => {
  const r = g(o);
  x(() => e && t > 0 ? B(t, () => {
    var u;
    return (u = r.current) == null ? void 0 : u.call(r);
  }) : void 0, [e, t, r]);
  const d = ge(
    { type: l },
    e,
    c
  ).join(" ");
  return /* @__PURE__ */ p("div", { className: d, role: "status", children: [
    /* @__PURE__ */ s("span", { className: "m-toast__message", children: a }),
    /* @__PURE__ */ p("div", { className: "m-toast__actions", children: [
      n ? /* @__PURE__ */ s(
        b,
        {
          variant: "text",
          size: "small",
          color: "primary",
          onClick: i,
          children: n
        }
      ) : null,
      /* @__PURE__ */ s(
        b,
        {
          variant: "plain",
          size: "x-small",
          icon: !0,
          onClick: o,
          children: "×"
        }
      )
    ] })
  ] });
}, fs = ({
  stats: e,
  columns: a = 4
}) => {
  const l = Xe(a);
  return /* @__PURE__ */ s("div", { className: "m-stat-strip", style: l, children: e.map((t, n) => /* @__PURE__ */ s(
    Oe,
    {
      label: t.label,
      value: t.value,
      subtext: t.subtext,
      trend: t.trend,
      trendValue: t.trendValue,
      icon: t.icon
    },
    `${t.label}-${n}`
  )) });
}, xs = ({
  tabs: e,
  modelValue: a = void 0,
  grow: l = !1,
  align: t = "start",
  className: n = "",
  onTabChange: c = void 0
}) => {
  const i = a || (e[0] ? e[0].id : ""), o = Se(
    { grow: l, align: t },
    n
  ).join(" "), r = (d) => {
    !d.disabled && (c == null || c(d.id));
  };
  return /* @__PURE__ */ s("nav", { className: o, role: "tablist", children: e.map((d) => {
    const m = i === d.id;
    return /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m,
        disabled: d.disabled,
        className: `m-tabs-nav__item ${m ? "m-tabs-nav__item--active" : ""}`,
        onClick: () => r(d),
        children: [
          d.icon ? /* @__PURE__ */ s("span", { className: "m-tabs-nav__icon", children: d.icon }) : null,
          /* @__PURE__ */ s("span", { children: d.label }),
          d.badge ? /* @__PURE__ */ s("span", { className: "m-tabs-nav__badge", children: d.badge }) : null
        ]
      },
      d.id
    );
  }) });
}, Cs = ({
  title: e = void 0,
  position: a = "static",
  bordered: l = !0,
  className: t = "",
  start: n = null,
  children: c = null,
  end: i = null
}) => {
  const o = Re(
    { position: a, bordered: l },
    t
  ).join(" "), r = !!n, d = !!e, m = !!c, u = !!i, v = () => r ? n : d ? /* @__PURE__ */ s("h2", { className: "m-action-bar__title", children: e }) : null, _ = () => m ? /* @__PURE__ */ s("div", { className: "m-action-bar__center", children: c }) : null, h = () => u ? /* @__PURE__ */ s("div", { className: "m-action-bar__end", children: i }) : null;
  return /* @__PURE__ */ p(Ke, { className: o, children: [
    /* @__PURE__ */ s("div", { className: "m-action-bar__start", children: v() }),
    _(),
    h()
  ] });
}, bs = ({
  headers: e = [],
  items: a = [],
  loading: l = !1,
  emptyText: t = "No records found",
  itemKey: n = "id",
  sortBy: c = null,
  sortDesc: i = !1,
  hoverable: o = !0,
  dense: r = !1,
  className: d = "",
  onRowClick: m = void 0,
  onSortChange: u = void 0,
  renderEmpty: v = void 0,
  renderCell: _ = void 0
}) => {
  const h = Te(
    { hoverable: o, dense: r, loading: l },
    d
  ).join(" "), f = a.length > 0, X = !l && !f, I = (N) => {
    Be(N, !!u) && (u == null || u(we({ sortBy: c, sortDesc: i }, N.key)));
  }, A = (N) => {
    const C = je({ sortBy: c, sortDesc: i }, N.key);
    return C ? /* @__PURE__ */ s("span", { className: "m-data-table__sort-icon", children: C }) : null;
  }, F = (N, C) => {
    const k = Fe(N, C);
    return _ ? _(N, C, k) : String(k);
  }, L = (N, C) => /* @__PURE__ */ s(
    "tr",
    {
      className: "m-data-table__tr",
      onClick: () => m == null ? void 0 : m(N),
      children: e.map((k) => /* @__PURE__ */ s("td", { className: Ie(k), children: F(N, k) }, k.key))
    },
    Ae(N, n, C)
  ), E = /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s("td", { colSpan: e.length, className: "m-data-table__empty", children: v ? v() : t }) });
  return /* @__PURE__ */ p("div", { className: h, children: [
    l ? /* @__PURE__ */ s(Ge, { indeterminate: !0, color: "primary" }) : null,
    /* @__PURE__ */ p("table", { className: "m-data-table__table", children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((N) => /* @__PURE__ */ p(
        "th",
        {
          className: De(N),
          onClick: () => I(N),
          children: [
            N.title,
            A(N)
          ]
        },
        N.key
      )) }) }),
      /* @__PURE__ */ s("tbody", { children: X ? E : a.map(L) })
    ] })
  ] });
}, ks = () => {
  const e = D(R());
  x(() => () => {
    e.current(), e.current = R();
  }, []);
  const [a] = y(() => Object.assign(
    () => e.current(),
    { add: (...l) => e.current.add(...l) }
  ));
  return a;
}, ys = (e, a) => {
  const l = g(e);
  x(() => {
    if (a !== null)
      return Pe(a, () => l.current());
  }, [a, l]);
}, gs = (e, a) => {
  const l = g(e);
  x(() => {
    if (a !== null)
      return B(a, () => l.current());
  }, [a, l]);
}, Xs = (e, a = !0) => {
  const l = g(e), [t, n] = y({ data: null, error: null, isLoading: a }), [c] = y(() => Me(() => l.current(), n, { isLoading: a }));
  return x(() => (a && c.run(), c.cancel), [c, a]), { ...t, execute: c.run };
}, Ss = (e, ...a) => {
  const l = j(
    () => $e(...a)(e),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, ...a]
  ), t = l.length;
  return { filtered: l, count: t, hasMatches: t > 0 };
};
export {
  Cs as MActionBar,
  vs as MConfirmDialog,
  bs as MDataTable,
  hs as MEmptyState,
  Oe as MKpiTile,
  _s as MPagination,
  ps as MSearchInput,
  fs as MStatStrip,
  xs as MTabsNav,
  Ns as MToast,
  ts as XAlert,
  Ve as XAvatar,
  Ue as XBadge,
  b as XBtn,
  w as XCard,
  es as XCheckbox,
  Ye as XChip,
  Ze as XDialog,
  as as XDivider,
  ds as XGrid,
  rs as XList,
  cs as XListItem,
  Ze as XModal,
  ms as XNavDrawer,
  Ge as XProgressLinear,
  Ke as XSheet,
  ls as XSkeleton,
  os as XStack,
  ss as XSwitch,
  is as XText,
  ze as XTextField,
  us as XTextarea,
  ns as XTooltip,
  B as after,
  Ds as all,
  js as allPass,
  Bs as any,
  ws as anyPass,
  Is as assertRuleTree,
  Me as createAsyncRunner,
  Ee as createDebounce,
  R as createDisposer,
  As as createLatestGate,
  $e as createPredicateFilter,
  Fs as createRestartableInterval,
  Ls as createRestartableTimeout,
  Es as createRuleSet,
  Ps as deepFreeze,
  Ms as evaluateRules,
  Pe as every,
  $s as fallback,
  Ks as glassTokens,
  zs as isErr,
  Gs as isOk,
  Le as listen,
  Os as mapResult,
  Hs as matchesAllPredicates,
  qs as matchesAnyPattern,
  Js as none,
  Qs as nonePass,
  Ws as normalizeArray,
  Ys as not,
  Zs as radiiTokens,
  Vs as ruleTree,
  Us as spaceTokens,
  ea as starshipColors,
  sa as toError,
  aa as toResult,
  la as toResultSync,
  ta as toStyleString,
  na as toneColors,
  ra as unwrapOr,
  Xs as useAsyncData,
  He as useDebouncedCallback,
  ks as useDisposer,
  g as useLatest,
  Ss as usePredicateFilter,
  ys as useSelfCleaningInterval,
  gs as useSelfCleaningTimeout
};
