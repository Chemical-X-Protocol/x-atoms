import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { h as H, i as J, l as Y, m as Q, n as U, a7 as Z, D as $, K as ee, f as te, Q as ae, V as re, g as se, k as le, G as ne, o as ie, E as oe, P as R, e as de, b as ve, A as ce, N as me, v as pe, w as ge, $ as xe, J as fe, F as he, q as be, s as _e, L as ue, O as ye, x as we, y as ke, S as je, X as Ce, a0 as ze, a1 as Se, C as Te, z as Xe, u as Ne, M as Ve, r as qe, I as De, d as Me, H as Ie, R as Pe, Y as Be, W as Re } from "./chunks/controllers-CBj9TrZR.js";
import { toStyleString as B, listen as Ae, createDebounce as Ge, after as Ee, toResultSync as Fe, createDisposer as Le, createRestartableTimeout as We, createRestartableInterval as Ke, createAsyncRunner as Oe, createPredicateFilter as He } from "./core.js";
import { all as Vr, allPass as qr, any as Dr, anyPass as Mr, assertRuleTree as Ir, createLatestGate as Pr, createRuleSet as Br, deepFreeze as Rr, evaluateRules as Ar, every as Gr, fallback as Er, glassTokens as Fr, isErr as Lr, isOk as Wr, mapResult as Kr, matchesAllPredicates as Or, matchesAnyPattern as Hr, none as Jr, nonePass as Yr, normalizeArray as Qr, not as Ur, radiiTokens as Zr, ruleTree as $r, spaceTokens as es, starshipColors as ts, toError as as, toResult as rs, toneColors as ss, unwrapOr as ls } from "./core.js";
import { onDestroy as G } from "svelte";
import { writable as Je, readable as Ye, derived as Qe } from "svelte/store";
var Ue = e.from_html('<span class="x-btn__prepend"><!></span>'), Ze = e.from_html('<span class="x-btn__content"><!></span>'), $e = e.from_html('<span class="x-btn__append"><!></span>'), et = e.from_html('<button type="button"><!> <!> <!></button>');
function M(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "variant", 3, void 0), f = e.prop(t, "color", 3, void 0), p = e.prop(t, "size", 3, "default"), y = e.prop(t, "block", 3, !1), w = e.prop(t, "loading", 3, !1), u = e.prop(t, "disabled", 3, !1), g = e.prop(t, "icon", 3, !1), h = e.prop(t, "class", 3, "");
  const m = e.derived(() => H(
    {
      variant: s(),
      size: p(),
      block: y(),
      loading: w(),
      disabled: u(),
      icon: g(),
      color: f()
    },
    h()
  ).join(" "));
  var n = et(), d = e.child(n);
  {
    var b = (a) => {
      var r = Ue(), l = e.child(r);
      e.snippet(l, () => t.prepend), e.reset(r), e.append(a, r);
    };
    e.if(d, (a) => {
      t.prepend && a(b);
    });
  }
  var x = e.sibling(d, 2);
  {
    var o = (a) => {
      var r = Ze(), l = e.child(r);
      e.snippet(l, () => t.children), e.reset(r), e.append(a, r);
    };
    e.if(x, (a) => {
      t.children && a(o);
    });
  }
  var c = e.sibling(x, 2);
  {
    var v = (a) => {
      var r = $e(), l = e.child(r);
      e.snippet(l, () => t.append), e.reset(r), e.append(a, r);
    };
    e.if(c, (a) => {
      t.append && a(v);
    });
  }
  e.reset(n), e.template_effect(() => {
    e.set_class(n, 1, e.clsx(e.get(m))), n.disabled = u() || w();
  }), e.delegated("click", n, function(...a) {
    var r;
    (r = t.onclick) == null || r.apply(this, a);
  }), e.append(i, n), e.pop();
}
e.delegate(["click"]);
var tt = e.from_html('<div class="x-card__title"><!></div>'), at = e.from_html('<div class="x-card__content"><!></div>'), rt = e.from_html('<div class="x-card__actions"><!></div>'), st = e.from_html("<div><!> <!> <!></div>");
function E(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "variant", 3, void 0), f = e.prop(t, "color", 3, void 0), p = e.prop(t, "loading", 3, !1), y = e.prop(t, "disabled", 3, !1), w = e.prop(t, "hover", 3, !1), u = e.prop(t, "class", 3, "");
  const g = e.derived(() => J(
    {
      variant: s(),
      color: f(),
      loading: p(),
      disabled: y(),
      hover: w()
    },
    u()
  ).join(" "));
  var h = st(), m = e.child(h);
  {
    var n = (c) => {
      var v = tt(), a = e.child(v);
      e.snippet(a, () => t.title), e.reset(v), e.append(c, v);
    };
    e.if(m, (c) => {
      t.title && c(n);
    });
  }
  var d = e.sibling(m, 2);
  {
    var b = (c) => {
      var v = at(), a = e.child(v);
      e.snippet(a, () => t.children), e.reset(v), e.append(c, v);
    };
    e.if(d, (c) => {
      t.children && c(b);
    });
  }
  var x = e.sibling(d, 2);
  {
    var o = (c) => {
      var v = rt(), a = e.child(v);
      e.snippet(a, () => t.actions), e.reset(v), e.append(c, v);
    };
    e.if(x, (c) => {
      t.actions && c(o);
    });
  }
  e.reset(h), e.template_effect(() => e.set_class(h, 1, e.clsx(e.get(g)))), e.append(i, h), e.pop();
}
var lt = e.from_html('<span class="x-chip__prepend"><!></span>'), nt = e.from_html('<span class="x-chip__content"><!></span>'), it = e.from_html('<button type="button" class="x-chip__close" aria-label="Close chip">&times;</button>'), ot = e.from_html('<div role="status"><!> <!> <!></div>');
function $a(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "variant", 3, void 0), f = e.prop(t, "color", 3, void 0), p = e.prop(t, "size", 3, "default"), y = e.prop(t, "closable", 3, !1), w = e.prop(t, "disabled", 3, !1), u = e.prop(t, "filter", 3, !1), g = e.prop(t, "class", 3, "");
  const h = e.derived(() => Y(
    {
      variant: s(),
      color: f(),
      size: p(),
      closable: y(),
      disabled: w(),
      filter: u()
    },
    g()
  ).join(" "));
  var m = ot(), n = e.child(m);
  {
    var d = (v) => {
      var a = lt(), r = e.child(a);
      e.snippet(r, () => t.prepend), e.reset(a), e.append(v, a);
    };
    e.if(n, (v) => {
      t.prepend && v(d);
    });
  }
  var b = e.sibling(n, 2);
  {
    var x = (v) => {
      var a = nt(), r = e.child(a);
      e.snippet(r, () => t.children), e.reset(a), e.append(v, a);
    };
    e.if(b, (v) => {
      t.children && v(x);
    });
  }
  var o = e.sibling(b, 2);
  {
    var c = (v) => {
      var a = it();
      e.delegated("click", a, (r) => {
        var l;
        r.stopPropagation(), (l = t.onclose) == null || l.call(t);
      }), e.append(v, a);
    };
    e.if(o, (v) => {
      y() && v(c);
    });
  }
  e.reset(m), e.template_effect(() => e.set_class(m, 1, e.clsx(e.get(h)))), e.delegated("click", m, function(...v) {
    var a;
    (a = t.onclick) == null || a.apply(this, v);
  }), e.append(i, m), e.pop();
}
e.delegate(["click"]);
var dt = e.from_html('<div class="x-dialog__title"><!></div>'), vt = e.from_html('<div class="x-dialog__actions"><!></div>'), ct = e.from_html('<div role="presentation"><div class="x-dialog__surface" role="dialog" aria-modal="true" tabindex="-1"><!> <div class="x-dialog__content"><!></div> <!></div></div>');
function er(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "modelValue", 15, !1), f = e.prop(t, "maxWidth", 3, 600), p = e.prop(t, "width", 3, void 0), y = e.prop(t, "persistent", 3, !1), w = e.prop(t, "scrollable", 3, !1), u = e.prop(t, "fullscreen", 3, !1), g = e.prop(t, "class", 3, "");
  const h = e.derived(() => Q({ fullscreen: u(), scrollable: w() }, `x-dialog--native ${g()}`.trim()).join(" ")), m = e.derived(() => B(U({ maxWidth: f(), width: p() }))), n = () => {
    Z({ persistent: y() }) && s(!1);
  };
  e.user_effect(() => {
    if (s())
      return Ae(globalThis.document, "keydown", (o) => {
        o.key === "Escape" && n();
      });
  });
  var d = e.comment(), b = e.first_child(d);
  {
    var x = (o) => {
      var c = ct(), v = e.child(c), a = e.child(v);
      {
        var r = (C) => {
          var N = dt(), T = e.child(N);
          e.snippet(T, () => t.title), e.reset(N), e.append(C, N);
        };
        e.if(a, (C) => {
          t.title && C(r);
        });
      }
      var l = e.sibling(a, 2), _ = e.child(l);
      e.snippet(_, () => t.children ?? e.noop), e.reset(l);
      var k = e.sibling(l, 2);
      {
        var j = (C) => {
          var N = vt(), T = e.child(N);
          e.snippet(T, () => t.actions), e.reset(N), e.append(C, N);
        };
        e.if(k, (C) => {
          t.actions && C(j);
        });
      }
      e.reset(v), e.reset(c), e.template_effect(() => {
        e.set_class(c, 1, e.clsx(e.get(h))), e.set_style(v, e.get(m));
      }), e.delegated("click", c, n), e.delegated("click", v, (C) => C.stopPropagation()), e.append(o, c);
    };
    e.if(b, (o) => {
      s() && o(x);
    });
  }
  e.append(i, d), e.pop();
}
e.delegate(["click"]);
var mt = e.from_html("<div><!></div>");
function pt(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "color", 3, void 0), f = e.prop(t, "elevation", 3, void 0), p = e.prop(t, "rounded", 3, void 0), y = e.prop(t, "border", 3, void 0), w = e.prop(t, "transparent", 3, !1), u = e.prop(t, "class", 3, "");
  const g = e.derived(() => $(
    {
      transparent: w(),
      color: s(),
      elevation: f(),
      rounded: p(),
      border: y()
    },
    u()
  ).join(" "));
  var h = mt(), m = e.child(h);
  {
    var n = (d) => {
      var b = e.comment(), x = e.first_child(b);
      e.snippet(x, () => t.children), e.append(d, b);
    };
    e.if(m, (d) => {
      t.children && d(n);
    });
  }
  e.reset(h), e.template_effect(() => e.set_class(h, 1, e.clsx(e.get(g)))), e.append(i, h), e.pop();
}
var gt = e.from_html('<label class="x-text-field__label"> </label>'), xt = e.from_html('<span class="x-text-field__prepend-inner"><!></span>'), ft = e.from_html('<button type="button" class="x-text-field__clear-btn" aria-label="Clear text">&times;</button>'), ht = e.from_html('<span class="x-text-field__append-inner"><!></span>'), bt = e.from_html('<div><!> <div class="x-text-field__input-wrap"><!> <input class="x-text-field__native-input"/> <!> <!></div></div>');
function _t(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "modelValue", 15, ""), f = e.prop(t, "label", 3, void 0), p = e.prop(t, "placeholder", 3, void 0), y = e.prop(t, "type", 3, "text"), w = e.prop(t, "disabled", 3, !1), u = e.prop(t, "readonly", 3, !1), g = e.prop(t, "clearable", 3, !1), h = e.prop(t, "class", 3, ""), m = e.state(!1);
  const n = e.derived(() => ee({ disabled: w(), readonly: u() }, e.get(m), h()).join(" "));
  var d = bt(), b = e.child(d);
  {
    var x = (j) => {
      var C = gt(), N = e.only_child(C, !0);
      e.template_effect(() => e.set_text(N, f())), e.append(j, C);
    };
    e.if(b, (j) => {
      f() && j(x);
    });
  }
  var o = e.sibling(b, 2), c = e.child(o);
  {
    var v = (j) => {
      var C = xt(), N = e.child(C);
      e.snippet(N, () => t.prependInner), e.reset(C), e.append(j, C);
    };
    e.if(c, (j) => {
      t.prependInner && j(v);
    });
  }
  var a = e.sibling(c, 2);
  e.remove_input_defaults(a);
  var r = e.sibling(a, 2);
  {
    var l = (j) => {
      var C = ft();
      e.delegated("click", C, () => {
        var N;
        s(""), (N = t.onclear) == null || N.call(t);
      }), e.append(j, C);
    };
    e.if(r, (j) => {
      g() && s() && j(l);
    });
  }
  var _ = e.sibling(r, 2);
  {
    var k = (j) => {
      var C = ht(), N = e.child(C);
      e.snippet(N, () => t.appendInner), e.reset(C), e.append(j, C);
    };
    e.if(_, (j) => {
      t.appendInner && j(k);
    });
  }
  e.reset(o), e.reset(d), e.template_effect(() => {
    e.set_class(d, 1, e.clsx(e.get(n))), e.set_attribute(a, "type", y()), e.set_attribute(a, "placeholder", p()), a.disabled = w(), a.readOnly = u();
  }), e.delegated("input", a, function(...j) {
    var C;
    (C = t.oninput) == null || C.apply(this, j);
  }), e.event("focus", a, () => {
    e.set(m, !0);
  }), e.event("blur", a, () => {
    e.set(m, !1);
  }), e.bind_value(a, s), e.append(i, d), e.pop();
}
e.delegate(["input", "click"]);
var ut = e.from_html("<img/>"), yt = e.from_html("<span> </span>"), wt = e.from_html("<span></span>"), kt = e.from_html("<div><!> <!></div>");
function tr(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "src", 3, void 0), f = e.prop(t, "alt", 3, void 0), p = e.prop(t, "text", 3, void 0), y = e.prop(t, "size", 3, "default"), w = e.prop(t, "bordered", 3, !1), u = e.prop(t, "status", 3, void 0), g = e.prop(t, "class", 3, "");
  const h = e.derived(() => te({ size: y(), bordered: w(), status: u() }, g()).join(" ")), m = e.derived(() => ae(p() || f()));
  var n = kt(), d = e.child(n);
  {
    var b = (a) => {
      var r = ut();
      e.template_effect(() => {
        e.set_attribute(r, "src", s()), e.set_attribute(r, "alt", f() || "Avatar");
      }), e.append(a, r);
    }, x = (a) => {
      var r = yt(), l = e.only_child(r, !0);
      e.template_effect(() => e.set_text(l, e.get(m))), e.append(a, r);
    }, o = (a) => {
      var r = e.comment(), l = e.first_child(r);
      e.snippet(l, () => t.children), e.append(a, r);
    };
    e.if(d, (a) => {
      s() ? a(b) : e.get(m) ? a(x, 1) : t.children && a(o, 2);
    });
  }
  var c = e.sibling(d, 2);
  {
    var v = (a) => {
      var r = wt();
      e.template_effect((l) => e.set_class(r, 1, l), [
        () => e.clsx(["x-avatar__status-dot", `x-avatar__status-dot--${u()}`].join(" "))
      ]), e.append(a, r);
    };
    e.if(c, (a) => {
      u() && a(v);
    });
  }
  e.reset(n), e.template_effect(() => e.set_class(n, 1, e.clsx(e.get(h)))), e.append(i, n), e.pop();
}
var jt = e.from_html('<div class="x-badge-wrapper"><!> <span><!></span></div>'), Ct = e.from_html("<span><!></span>");
function ar(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "content", 3, void 0), f = e.prop(t, "color", 3, "primary"), p = e.prop(t, "dot", 3, !1), y = e.prop(t, "inline", 3, !1), w = e.prop(t, "max", 3, 99), u = e.prop(t, "floating", 3, !0), g = e.prop(t, "class", 3, "");
  const h = e.derived(() => re(s(), w())), m = e.derived(() => se(
    {
      dot: p(),
      inline: y(),
      floating: u(),
      color: f()
    },
    g()
  ).join(" "));
  var n = e.comment(), d = e.first_child(n);
  {
    var b = (o) => {
      var c = jt(), v = e.child(c);
      e.snippet(v, () => t.children);
      var a = e.sibling(v, 2), r = e.child(a);
      {
        var l = (_) => {
          var k = e.text();
          e.template_effect(() => e.set_text(k, e.get(h))), e.append(_, k);
        };
        e.if(r, (_) => {
          p() || _(l);
        });
      }
      e.reset(a), e.reset(c), e.template_effect(() => e.set_class(a, 1, e.clsx(e.get(m)))), e.append(o, c);
    }, x = (o) => {
      var c = Ct(), v = e.child(c);
      {
        var a = (r) => {
          var l = e.text();
          e.template_effect(() => e.set_text(l, e.get(h))), e.append(r, l);
        };
        e.if(v, (r) => {
          p() || r(a);
        });
      }
      e.reset(c), e.template_effect(() => e.set_class(c, 1, e.clsx(e.get(m)))), e.append(o, c);
    };
    e.if(d, (o) => {
      t.children ? o(b) : o(x, -1);
    });
  }
  e.append(i, n), e.pop();
}
var zt = e.from_svg('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'), St = e.from_html('<span class="x-checkbox__label"> </span>'), Tt = e.from_html('<div role="checkbox"><span class="x-checkbox__box"><!></span> <!></div>');
function rr(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "modelValue", 15, !1), f = e.prop(t, "label", 3, void 0), p = e.prop(t, "disabled", 3, !1), y = e.prop(t, "class", 3, "");
  const w = e.derived(() => le({ disabled: p() }, s(), y()).join(" ")), u = () => {
    var o;
    p() || (s(!s()), (o = t.onchange) == null || o.call(t, s()));
  };
  var g = Tt(), h = e.child(g), m = e.child(h);
  {
    var n = (o) => {
      var c = zt();
      e.append(o, c);
    };
    e.if(m, (o) => {
      s() && o(n);
    });
  }
  e.reset(h);
  var d = e.sibling(h, 2);
  {
    var b = (o) => {
      var c = St(), v = e.only_child(c, !0);
      e.template_effect(() => e.set_text(v, f())), e.append(o, c);
    }, x = (o) => {
      var c = e.comment(), v = e.first_child(c);
      e.snippet(v, () => t.children), e.append(o, c);
    };
    e.if(d, (o) => {
      f() ? o(b) : t.children && o(x, 1);
    });
  }
  e.reset(g), e.template_effect(() => {
    e.set_class(g, 1, e.clsx(e.get(w))), e.set_attribute(g, "aria-checked", s()), e.set_attribute(g, "tabindex", p() ? -1 : 0);
  }), e.delegated("click", g, u), e.delegated("keydown", g, (o) => {
    (o.key === " " || o.key === "Enter") && (o.preventDefault(), u());
  }), e.append(i, g), e.pop();
}
e.delegate(["click", "keydown"]);
var Xt = e.from_html('<span class="x-switch__label"> </span>'), Nt = e.from_html('<div role="switch"><span class="x-switch__track"><span class="x-switch__thumb"></span></span> <!></div>');
function sr(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "modelValue", 15, !1), f = e.prop(t, "label", 3, void 0), p = e.prop(t, "disabled", 3, !1), y = e.prop(t, "class", 3, "");
  const w = e.derived(() => ne({ disabled: p() }, s(), y()).join(" ")), u = () => {
    var d;
    p() || (s(!s()), (d = t.onchange) == null || d.call(t, s()));
  };
  var g = Nt(), h = e.sibling(e.child(g), 2);
  {
    var m = (d) => {
      var b = Xt(), x = e.only_child(b, !0);
      e.template_effect(() => e.set_text(x, f())), e.append(d, b);
    }, n = (d) => {
      var b = e.comment(), x = e.first_child(b);
      e.snippet(x, () => t.children), e.append(d, b);
    };
    e.if(h, (d) => {
      f() ? d(m) : t.children && d(n, 1);
    });
  }
  e.reset(g), e.template_effect(() => {
    e.set_class(g, 1, e.clsx(e.get(w))), e.set_attribute(g, "aria-checked", s()), e.set_attribute(g, "tabindex", p() ? -1 : 0);
  }), e.delegated("click", g, u), e.delegated("keydown", g, (d) => {
    (d.key === " " || d.key === "Enter") && (d.preventDefault(), u());
  }), e.append(i, g), e.pop();
}
e.delegate(["click", "keydown"]);
var Vt = e.from_html("<hr/>");
function lr(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "vertical", 3, !1), f = e.prop(t, "inset", 3, !1), p = e.prop(t, "class", 3, "");
  const y = e.derived(() => ie({ vertical: s(), inset: f() }, p()).join(" "));
  var w = Vt();
  e.template_effect(() => {
    e.set_class(w, 1, e.clsx(e.get(y))), e.set_attribute(w, "aria-orientation", s() ? "vertical" : "horizontal");
  }), e.append(i, w), e.pop();
}
var qt = e.from_html("<div></div>");
function nr(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "shape", 3, "rounded"), f = e.prop(t, "animation", 3, "shimmer"), p = e.prop(t, "width", 3, "100%"), y = e.prop(t, "height", 3, "1rem"), w = e.prop(t, "delay", 3, "0s"), u = e.prop(t, "class", 3, "");
  const g = e.derived(() => oe({ shape: s(), animation: f() }, u()).join(" ")), h = e.derived(() => R(p())), m = e.derived(() => R(y()));
  var n = qt();
  let d;
  e.template_effect(() => {
    e.set_class(n, 1, e.clsx(e.get(g))), d = e.set_style(n, "", d, {
      "--x-skeleton-width": e.get(h),
      "--x-skeleton-height": e.get(m),
      "--x-skeleton-delay": w()
    });
  }), e.append(i, n), e.pop();
}
var Dt = e.from_html('<div class="x-alert__icon"><!></div>'), Mt = e.from_html('<div class="x-alert__title"><!></div>'), It = e.from_html('<div class="x-alert__title"> </div>'), Pt = e.from_html('<div class="x-alert__text"> </div>'), Bt = e.from_html('<div class="x-alert__text"><!></div>'), Rt = e.from_html('<button type="button" class="x-alert__close" aria-label="Close alert">&times;</button>'), At = e.from_html('<div role="alert"><!> <div class="x-alert__content"><!> <!></div> <!></div>');
function ir(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "type", 3, "info"), f = e.prop(t, "title", 3, void 0), p = e.prop(t, "text", 3, void 0), y = e.prop(t, "closable", 3, !1), w = e.prop(t, "variant", 3, void 0), u = e.prop(t, "class", 3, "");
  const g = e.derived(() => de({ type: s(), variant: w() }, u()).join(" "));
  var h = At(), m = e.child(h);
  {
    var n = (_) => {
      var k = Dt(), j = e.child(k);
      e.snippet(j, () => t.icon), e.reset(k), e.append(_, k);
    };
    e.if(m, (_) => {
      t.icon && _(n);
    });
  }
  var d = e.sibling(m, 2), b = e.child(d);
  {
    var x = (_) => {
      var k = Mt(), j = e.child(k);
      e.snippet(j, () => t.titleSnippet), e.reset(k), e.append(_, k);
    }, o = (_) => {
      var k = It(), j = e.only_child(k, !0);
      e.template_effect(() => e.set_text(j, f())), e.append(_, k);
    };
    e.if(b, (_) => {
      t.titleSnippet ? _(x) : f() && _(o, 1);
    });
  }
  var c = e.sibling(b, 2);
  {
    var v = (_) => {
      var k = Pt(), j = e.only_child(k, !0);
      e.template_effect(() => e.set_text(j, p())), e.append(_, k);
    }, a = (_) => {
      var k = Bt(), j = e.child(k);
      e.snippet(j, () => t.children), e.reset(k), e.append(_, k);
    };
    e.if(c, (_) => {
      p() ? _(v) : t.children && _(a, 1);
    });
  }
  e.reset(d);
  var r = e.sibling(d, 2);
  {
    var l = (_) => {
      var k = Rt();
      e.delegated("click", k, function(...j) {
        var C;
        (C = t.onclose) == null || C.apply(this, j);
      }), e.append(_, k);
    };
    e.if(r, (_) => {
      y() && _(l);
    });
  }
  e.reset(h), e.template_effect(() => e.set_class(h, 1, e.clsx(e.get(g)))), e.append(i, h), e.pop();
}
e.delegate(["click"]);
var Gt = e.from_html('<div role="progressbar"><div class="x-progress-linear__bar"></div></div>');
function Et(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "modelValue", 3, 0), f = e.prop(t, "indeterminate", 3, !1), p = e.prop(t, "height", 3, 4), y = e.prop(t, "rounded", 3, !0), w = e.prop(t, "striped", 3, !1), u = e.prop(t, "class", 3, "");
  const g = e.derived(() => ve(s())), h = e.derived(() => ce(
    {
      indeterminate: f(),
      rounded: y(),
      striped: w()
    },
    u()
  ).join(" ")), m = e.derived(() => typeof p() == "number" ? `${p()}px` : p());
  var n = Gt();
  e.set_attribute(n, "aria-valuemin", 0), e.set_attribute(n, "aria-valuemax", 100);
  let d;
  var b = e.child(n);
  let x;
  e.reset(n), e.template_effect(() => {
    e.set_class(n, 1, e.clsx(e.get(h))), e.set_attribute(n, "aria-valuenow", f() ? void 0 : e.get(g)), d = e.set_style(n, "", d, { height: e.get(m) }), x = e.set_style(b, "", x, {
      width: f() ? void 0 : `${e.get(g)}%`
    });
  }), e.append(i, n), e.pop();
}
var Ft = e.from_html('<div class="x-tooltip-wrapper"><!> <div role="tooltip"><!></div></div>');
function or(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "text", 3, void 0), f = e.prop(t, "location", 3, "top"), p = e.prop(t, "disabled", 3, !1), y = e.prop(t, "class", 3, "");
  const w = e.derived(() => me({ location: f() }, y()).join(" "));
  var u = e.comment(), g = e.first_child(u);
  {
    var h = (n) => {
      var d = e.comment(), b = e.first_child(d);
      {
        var x = (o) => {
          var c = e.comment(), v = e.first_child(c);
          e.snippet(v, () => t.children), e.append(o, c);
        };
        e.if(b, (o) => {
          t.children && o(x);
        });
      }
      e.append(n, d);
    }, m = (n) => {
      var d = Ft(), b = e.child(d);
      {
        var x = (r) => {
          var l = e.comment(), _ = e.first_child(l);
          e.snippet(_, () => t.children), e.append(r, l);
        };
        e.if(b, (r) => {
          t.children && r(x);
        });
      }
      var o = e.sibling(b, 2), c = e.child(o);
      {
        var v = (r) => {
          var l = e.comment(), _ = e.first_child(l);
          e.snippet(_, () => t.tooltip), e.append(r, l);
        }, a = (r) => {
          var l = e.text();
          e.template_effect(() => e.set_text(l, s())), e.append(r, l);
        };
        e.if(c, (r) => {
          t.tooltip ? r(v) : r(a, -1);
        });
      }
      e.reset(o), e.reset(d), e.template_effect(() => e.set_class(o, 1, e.clsx(e.get(w)))), e.append(n, d);
    };
    e.if(g, (n) => {
      p() ? n(h) : n(m, -1);
    });
  }
  e.append(i, u), e.pop();
}
var Lt = e.from_html("<div><!></div>");
function dr(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "density", 3, "default"), f = e.prop(t, "lines", 3, "one"), p = e.prop(t, "nav", 3, !1), y = e.prop(t, "color", 3, void 0), w = e.prop(t, "variant", 3, void 0), u = e.prop(t, "disabled", 3, !1), g = e.prop(t, "class", 3, "");
  const h = e.derived(() => pe(
    {
      density: s(),
      lines: f(),
      nav: p(),
      color: y(),
      variant: w(),
      disabled: u()
    },
    g()
  ).join(" "));
  var m = Lt(), n = e.child(m);
  {
    var d = (b) => {
      var x = e.comment(), o = e.first_child(x);
      e.snippet(o, () => t.children), e.append(b, x);
    };
    e.if(n, (b) => {
      t.children && b(d);
    });
  }
  e.reset(m), e.template_effect(() => e.set_class(m, 1, e.clsx(e.get(h)))), e.append(i, m), e.pop();
}
var Wt = e.from_html('<div class="x-list-item__prepend"><!></div>'), Kt = e.from_html('<div class="x-list-item__title"> </div>'), Ot = e.from_html('<div class="x-list-item__subtitle"> </div>'), Ht = e.from_html('<div class="x-list-item__append"><!></div>'), Jt = e.from_html('<div><!> <div class="x-list-item__content"><!> <!> <!></div> <!></div>');
function vr(i, t) {
  e.push(t, !0);
  let s = e.prop(t, "title", 3, void 0), f = e.prop(t, "subtitle", 3, void 0), p = e.prop(t, "value", 3, void 0), y = e.prop(t, "active", 3, !1), w = e.prop(t, "disabled", 3, !1), u = e.prop(t, "color", 3, void 0), g = e.prop(t, "density", 3, void 0), h = e.prop(t, "lines", 3, void 0), m = e.prop(t, "variant", 3, void 0), n = e.prop(t, "rounded", 3, void 0), d = e.prop(t, "ripple", 3, !0), b = e.prop(t, "class", 3, "");
  const x = e.derived(() => ge(
    {
      title: s(),
      subtitle: f(),
      value: p(),
      active: y(),
      disabled: w(),
      color: u(),
      density: g(),
      lines: h(),
      variant: m(),
      rounded: n(),
      ripple: d()
    },
    b()
  ).join(" "));
  var o = Jt(), c = e.child(o);
  {
    var v = (S) => {
      var z = Wt(), X = e.child(z);
      e.snippet(X, () => t.prepend), e.reset(z), e.append(S, z);
    };
    e.if(c, (S) => {
      t.prepend && S(v);
    });
  }
  var a = e.sibling(c, 2), r = e.child(a);
  {
    var l = (S) => {
      var z = Kt(), X = e.only_child(z, !0);
      e.template_effect(() => e.set_text(X, s())), e.append(S, z);
    };
    e.if(r, (S) => {
      s() && S(l);
    });
  }
  var _ = e.sibling(r, 2);
  {
    var k = (S) => {
      var z = Ot(), X = e.only_child(z, !0);
      e.template_effect(() => e.set_text(X, f())), e.append(S, z);
    };
    e.if(_, (S) => {
      f() && S(k);
    });
  }
  var j = e.sibling(_, 2);
  {
    var C = (S) => {
      var z = e.comment(), X = e.first_child(z);
      e.snippet(X, () => t.children), e.append(S, z);
    };
    e.if(j, (S) => {
      t.children && S(C);
    });
  }
  e.reset(a);
  var N = e.sibling(a, 2);
  {
    var T = (S) => {
      var z = Ht(), X = e.child(z);
      e.snippet(X, () => t.append), e.reset(z), e.append(S, z);
    };
    e.if(N, (S) => {
      t.append && S(T);
    });
  }
  e.reset(o), e.template_effect(() => e.set_class(o, 1, e.clsx(e.get(x)))), e.append(i, o), e.pop();
}
const Yt = {
  hash: "svelte-1h4bff7",
  code: `:root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,
.v-theme--dark.svelte-1h4bff7 {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-1h4bff7 {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.x-text.svelte-1h4bff7 {margin:0;color:inherit;font-family:inherit;line-height:1.5;}.x-text--display.svelte-1h4bff7 {font-size:2.25rem;line-height:1.15;font-weight:700;letter-spacing:-0.02em;}.x-text--title.svelte-1h4bff7 {font-size:1.375rem;line-height:1.25;font-weight:600;}.x-text--subtitle.svelte-1h4bff7 {font-size:1.0625rem;line-height:1.35;font-weight:500;}.x-text--body.svelte-1h4bff7 {font-size:0.9375rem;}.x-text--caption.svelte-1h4bff7 {font-size:0.8125rem;opacity:0.8;}.x-text--overline.svelte-1h4bff7 {font-size:0.6875rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;}.x-text--code.svelte-1h4bff7 {font-family:ui-monospace, SFMono-Regular, Menlo, monospace;font-size:0.875em;}.x-text--weight-regular.svelte-1h4bff7 {font-weight:400;}.x-text--weight-medium.svelte-1h4bff7 {font-weight:500;}.x-text--weight-semibold.svelte-1h4bff7 {font-weight:600;}.x-text--weight-bold.svelte-1h4bff7 {font-weight:700;}.x-text--align-start.svelte-1h4bff7 {text-align:start;}.x-text--align-center.svelte-1h4bff7 {text-align:center;}.x-text--align-end.svelte-1h4bff7 {text-align:end;}.x-text--truncate.svelte-1h4bff7 {overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.x-tone--primary.svelte-1h4bff7 {color:var(--x-tone-primary);}.x-tone--secondary.svelte-1h4bff7 {color:var(--x-tone-secondary);}.x-tone--success.svelte-1h4bff7 {color:var(--x-tone-success);}.x-tone--warning.svelte-1h4bff7 {color:var(--x-tone-warning);}.x-tone--error.svelte-1h4bff7 {color:var(--x-tone-error);}.x-tone--info.svelte-1h4bff7 {color:var(--x-tone-info);}.x-tone--pink.svelte-1h4bff7 {color:var(--x-tone-pink);}.x-tone--lime.svelte-1h4bff7 {color:var(--x-tone-lime);}.x-tone--sky.svelte-1h4bff7 {color:var(--x-tone-sky);}.x-tone--purple.svelte-1h4bff7 {color:var(--x-tone-purple);}.x-tone--slate.svelte-1h4bff7 {color:var(--x-tone-slate);}.x-tone--muted.svelte-1h4bff7 {color:var(--x-tone-muted);}`
};
function cr(i, t) {
  e.push(t, !0), e.append_styles(i, Yt);
  let s = e.prop(t, "tag", 3, void 0), f = e.prop(t, "variant", 3, "body"), p = e.prop(t, "tone", 3, void 0), y = e.prop(t, "weight", 3, void 0), w = e.prop(t, "align", 3, void 0), u = e.prop(t, "truncate", 3, !1), g = e.prop(t, "class", 3, "");
  const h = e.derived(() => xe({ tag: s(), variant: f() })), m = e.derived(() => fe(
    {
      variant: f(),
      tone: p(),
      weight: y(),
      align: w(),
      truncate: u()
    },
    g()
  ).join(" "));
  var n = e.comment(), d = e.first_child(n);
  e.element(d, () => e.get(h), !1, (b, x) => {
    e.attribute_effect(b, () => ({ class: e.get(m) }), void 0, void 0, void 0, "svelte-1h4bff7");
    var o = e.comment(), c = e.first_child(o);
    e.snippet(c, () => t.children ?? e.noop), e.append(x, o);
  }), e.append(i, n), e.pop();
}
const Qt = {
  hash: "svelte-tj0tbh",
  code: ".x-stack.svelte-tj0tbh {display:flex;min-width:0;margin:0;padding:0;}.x-stack--row.svelte-tj0tbh {flex-direction:row;}.x-stack--column.svelte-tj0tbh {flex-direction:column;}.x-stack--wrap.svelte-tj0tbh {flex-wrap:wrap;}.x-stack--gap-none.svelte-tj0tbh {gap:var(--x-space-none, 0);}.x-stack--gap-xs.svelte-tj0tbh {gap:var(--x-space-xs, 4px);}.x-stack--gap-sm.svelte-tj0tbh {gap:var(--x-space-sm, 8px);}.x-stack--gap-md.svelte-tj0tbh {gap:var(--x-space-md, 12px);}.x-stack--gap-lg.svelte-tj0tbh {gap:var(--x-space-lg, 16px);}.x-stack--gap-xl.svelte-tj0tbh {gap:var(--x-space-xl, 24px);}.x-stack--justify-start.svelte-tj0tbh {justify-content:flex-start;}.x-stack--justify-center.svelte-tj0tbh {justify-content:center;}.x-stack--justify-end.svelte-tj0tbh {justify-content:flex-end;}.x-stack--justify-between.svelte-tj0tbh {justify-content:space-between;}.x-stack--justify-around.svelte-tj0tbh {justify-content:space-around;}.x-stack--justify-evenly.svelte-tj0tbh {justify-content:space-evenly;}.x-stack--align-start.svelte-tj0tbh {align-items:flex-start;}.x-stack--align-center.svelte-tj0tbh {align-items:center;}.x-stack--align-end.svelte-tj0tbh {align-items:flex-end;}.x-stack--align-stretch.svelte-tj0tbh {align-items:stretch;}.x-stack--align-baseline.svelte-tj0tbh {align-items:baseline;}"
};
function mr(i, t) {
  e.push(t, !0), e.append_styles(i, Qt);
  let s = e.prop(t, "direction", 3, "column"), f = e.prop(t, "gap", 3, "md"), p = e.prop(t, "align", 3, void 0), y = e.prop(t, "justify", 3, void 0), w = e.prop(t, "wrap", 3, !1), u = e.prop(t, "tag", 3, "div"), g = e.prop(t, "class", 3, "");
  const h = e.derived(() => he(
    {
      direction: s(),
      gap: f(),
      align: p(),
      justify: y(),
      wrap: w()
    },
    g()
  ).join(" "));
  var m = e.comment(), n = e.first_child(m);
  e.element(n, u, !1, (d, b) => {
    e.attribute_effect(d, () => ({ class: e.get(h) }), void 0, void 0, void 0, "svelte-tj0tbh");
    var x = e.comment(), o = e.first_child(x);
    e.snippet(o, () => t.children ?? e.noop), e.append(b, x);
  }), e.append(i, m), e.pop();
}
const Ut = {
  hash: "svelte-u07wj9",
  code: ".x-grid.svelte-u07wj9 {display:grid;min-width:0;margin:0;padding:0;}.x-grid--auto-fill.svelte-u07wj9 {grid-template-columns:repeat(auto-fill, minmax(min(var(--x-grid-min, 200px), 100%), 1fr));}.x-grid--cols-1.svelte-u07wj9 {grid-template-columns:repeat(1, minmax(0, 1fr));}.x-grid--cols-2.svelte-u07wj9 {grid-template-columns:repeat(2, minmax(0, 1fr));}.x-grid--cols-3.svelte-u07wj9 {grid-template-columns:repeat(3, minmax(0, 1fr));}.x-grid--cols-4.svelte-u07wj9 {grid-template-columns:repeat(4, minmax(0, 1fr));}.x-grid--cols-5.svelte-u07wj9 {grid-template-columns:repeat(5, minmax(0, 1fr));}.x-grid--cols-6.svelte-u07wj9 {grid-template-columns:repeat(6, minmax(0, 1fr));}.x-grid--cols-7.svelte-u07wj9 {grid-template-columns:repeat(7, minmax(0, 1fr));}.x-grid--cols-8.svelte-u07wj9 {grid-template-columns:repeat(8, minmax(0, 1fr));}.x-grid--cols-9.svelte-u07wj9 {grid-template-columns:repeat(9, minmax(0, 1fr));}.x-grid--cols-10.svelte-u07wj9 {grid-template-columns:repeat(10, minmax(0, 1fr));}.x-grid--cols-11.svelte-u07wj9 {grid-template-columns:repeat(11, minmax(0, 1fr));}.x-grid--cols-12.svelte-u07wj9 {grid-template-columns:repeat(12, minmax(0, 1fr));}.x-grid--gap-none.svelte-u07wj9 {gap:var(--x-space-none, 0);}.x-grid--gap-xs.svelte-u07wj9 {gap:var(--x-space-xs, 4px);}.x-grid--gap-sm.svelte-u07wj9 {gap:var(--x-space-sm, 8px);}.x-grid--gap-md.svelte-u07wj9 {gap:var(--x-space-md, 12px);}.x-grid--gap-lg.svelte-u07wj9 {gap:var(--x-space-lg, 16px);}.x-grid--gap-xl.svelte-u07wj9 {gap:var(--x-space-xl, 24px);}.x-grid--align-start.svelte-u07wj9 {align-items:start;}.x-grid--align-center.svelte-u07wj9 {align-items:center;}.x-grid--align-end.svelte-u07wj9 {align-items:end;}.x-grid--align-stretch.svelte-u07wj9 {align-items:stretch;}"
};
function pr(i, t) {
  e.push(t, !0), e.append_styles(i, Ut);
  let s = e.prop(t, "columns", 3, 1), f = e.prop(t, "minItemWidth", 3, void 0), p = e.prop(t, "gap", 3, "md"), y = e.prop(t, "align", 3, void 0), w = e.prop(t, "tag", 3, "div"), u = e.prop(t, "class", 3, "");
  const g = e.derived(() => be(
    {
      columns: s(),
      minItemWidth: f(),
      gap: p(),
      align: y()
    },
    u()
  ).join(" ")), h = e.derived(() => B(_e({ minItemWidth: f() })));
  var m = e.comment(), n = e.first_child(m);
  e.element(n, w, !1, (d, b) => {
    e.attribute_effect(d, () => ({ class: e.get(g), style: e.get(h) }), void 0, void 0, void 0, "svelte-u07wj9");
    var x = e.comment(), o = e.first_child(x);
    e.snippet(o, () => t.children ?? e.noop), e.append(b, x);
  }), e.append(i, m), e.pop();
}
var Zt = e.from_html('<span class="x-textarea__label svelte-1eqd095"> </span>'), $t = e.from_html('<span class="x-textarea__counter svelte-1eqd095"> </span>'), ea = e.from_html('<label><!> <textarea class="x-textarea__native svelte-1eqd095"></textarea> <!></label>');
const ta = {
  hash: "svelte-1eqd095",
  code: ".x-textarea--native.svelte-1eqd095 {display:flex;flex-direction:column;gap:4px;}.x-textarea--native.svelte-1eqd095 .x-textarea__label:where(.svelte-1eqd095) {font-size:0.8125rem;opacity:0.8;}.x-textarea--native.svelte-1eqd095 .x-textarea__native:where(.svelte-1eqd095) {width:100%;min-height:3em;padding:8px 12px;border:1px solid var(--x-glass-border, rgba(98, 201, 255, 0.15));border-radius:10px;background:var(--x-glass-bg-subtle, rgba(11, 19, 41, 0.5));color:inherit;font:inherit;resize:vertical;}.x-textarea--native.x-textarea--focused.svelte-1eqd095 .x-textarea__native:where(.svelte-1eqd095) {border-color:var(--x-glass-border-focus, rgba(98, 201, 255, 0.6));outline:none;}.x-textarea--native.x-textarea--auto-grow.svelte-1eqd095 .x-textarea__native:where(.svelte-1eqd095) {field-sizing:content;resize:none;}.x-textarea--native.x-textarea--disabled.svelte-1eqd095 {opacity:0.5;}.x-textarea--native.svelte-1eqd095 .x-textarea__counter:where(.svelte-1eqd095) {align-self:flex-end;font-size:0.75rem;opacity:0.7;}"
};
function gr(i, t) {
  e.push(t, !0), e.append_styles(i, ta);
  let s = e.prop(t, "modelValue", 15, ""), f = e.prop(t, "label", 3, void 0), p = e.prop(t, "placeholder", 3, void 0), y = e.prop(t, "rows", 3, 3), w = e.prop(t, "autoGrow", 3, !1), u = e.prop(t, "disabled", 3, !1), g = e.prop(t, "readonly", 3, !1), h = e.prop(t, "maxlength", 3, void 0), m = e.prop(t, "class", 3, ""), n = e.state(!1);
  const d = e.derived(() => ue(
    {
      disabled: u(),
      readonly: g(),
      autoGrow: w()
    },
    e.get(n),
    `x-textarea--native ${m()}`.trim()
  ).join(" ")), b = e.derived(() => ye(s(), h()));
  var x = ea(), o = e.child(x);
  {
    var c = (l) => {
      var _ = Zt(), k = e.only_child(_, !0);
      e.template_effect(() => e.set_text(k, f())), e.append(l, _);
    };
    e.if(o, (l) => {
      f() && l(c);
    });
  }
  var v = e.sibling(o, 2);
  e.remove_textarea_child(v);
  var a = e.sibling(v, 2);
  {
    var r = (l) => {
      var _ = $t(), k = e.only_child(_, !0);
      e.template_effect(() => e.set_text(k, e.get(b))), e.append(l, _);
    };
    e.if(a, (l) => {
      e.get(b) && l(r);
    });
  }
  e.reset(x), e.template_effect(() => {
    e.set_class(x, 1, e.clsx(e.get(d)), "svelte-1eqd095"), e.set_attribute(v, "rows", y()), e.set_attribute(v, "placeholder", p()), v.disabled = u(), v.readOnly = g(), e.set_attribute(v, "maxlength", h());
  }), e.delegated("input", v, function(...l) {
    var _;
    (_ = t.oninput) == null || _.apply(this, l);
  }), e.event("focus", v, () => {
    e.set(n, !0);
  }), e.event("blur", v, () => {
    e.set(n, !1);
  }), e.bind_value(v, s), e.append(i, x), e.pop();
}
e.delegate(["input"]);
var aa = e.from_html('<div class="x-nav-drawer__scrim svelte-137z9nv" role="presentation"></div>'), ra = e.from_html('<!> <nav><!> <div class="x-nav-drawer__content svelte-137z9nv"><!></div> <!></nav>', 1);
const sa = {
  hash: "svelte-137z9nv",
  code: ".x-nav-drawer--native.svelte-137z9nv {display:flex;flex-direction:column;width:var(--x-nav-drawer-width, 256px);height:100%;overflow-y:auto;background:var(--x-glass-bg, rgba(11, 19, 41, 0.75));border-inline-end:1px solid var(--x-glass-border, rgba(98, 201, 255, 0.15));transition:width 0.2s ease;}.x-nav-drawer--native.x-nav-drawer--end.svelte-137z9nv {border-inline-end:none;border-inline-start:1px solid var(--x-glass-border, rgba(98, 201, 255, 0.15));}.x-nav-drawer--native.x-nav-drawer--temporary.svelte-137z9nv {position:fixed;inset-block:0;z-index:2000;}.x-nav-drawer--native.x-nav-drawer--temporary.x-nav-drawer--start.svelte-137z9nv {inset-inline-start:0;}.x-nav-drawer--native.x-nav-drawer--temporary.x-nav-drawer--end.svelte-137z9nv {inset-inline-end:0;}.x-nav-drawer--native.x-nav-drawer--closed.svelte-137z9nv {display:none;}.x-nav-drawer--native.x-nav-drawer--floating.svelte-137z9nv {border:none;}.x-nav-drawer--native.svelte-137z9nv .x-nav-drawer__content:where(.svelte-137z9nv) {flex:1 1 auto;}.x-nav-drawer__scrim.svelte-137z9nv {position:fixed;inset:0;z-index:1999;background:rgba(5, 8, 17, 0.5);}"
};
function xr(i, t) {
  e.push(t, !0), e.append_styles(i, sa);
  let s = e.prop(t, "modelValue", 15, !0), f = e.prop(t, "location", 3, "start"), p = e.prop(t, "rail", 3, !1), y = e.prop(t, "temporary", 3, !1), w = e.prop(t, "permanent", 3, !1), u = e.prop(t, "width", 3, 256), g = e.prop(t, "floating", 3, !1), h = e.prop(t, "class", 3, "");
  const m = e.derived(() => ({
    modelValue: s(),
    location: f(),
    rail: p(),
    temporary: y(),
    permanent: w(),
    width: u(),
    floating: g()
  })), n = e.derived(() => we(e.get(m), `x-nav-drawer--native ${h()}`.trim()).join(" ")), d = e.derived(() => B(ke(e.get(m)))), b = e.derived(() => je(e.get(m)));
  var x = ra(), o = e.first_child(x);
  {
    var c = (k) => {
      var j = aa();
      e.delegated("click", j, () => {
        s(!1);
      }), e.append(k, j);
    };
    e.if(o, (k) => {
      e.get(b) && k(c);
    });
  }
  var v = e.sibling(o, 2), a = e.child(v);
  e.snippet(a, () => t.prepend ?? e.noop);
  var r = e.sibling(a, 2), l = e.child(r);
  e.snippet(l, () => t.children ?? e.noop), e.reset(r);
  var _ = e.sibling(r, 2);
  e.snippet(_, () => t.append ?? e.noop), e.reset(v), e.template_effect(() => {
    e.set_class(v, 1, e.clsx(e.get(n)), "svelte-137z9nv"), e.set_style(v, e.get(d));
  }), e.append(i, x), e.pop();
}
e.delegate(["click"]);
var la = e.from_html('<div class="x-dialog" role="dialog" aria-modal="true"><div class="x-dialog__surface"><div class="m-confirm-dialog__body svelte-wjql4s"><h3 class="m-confirm-dialog__title svelte-wjql4s"> </h3> <p class="m-confirm-dialog__message svelte-wjql4s"> </p></div> <div class="x-dialog__actions"><!> <!></div></div></div>');
const na = {
  hash: "svelte-wjql4s",
  code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-confirm-dialog__body.svelte-wjql4s {padding:24px;}.m-confirm-dialog__title.svelte-wjql4s {font-size:1.15rem;font-weight:600;color:#f8fafc;margin-bottom:8px;}.m-confirm-dialog__message.svelte-wjql4s {font-size:0.95rem;color:#94a3b8;line-height:1.5;}"
};
function fr(i, t) {
  e.push(t, !0), e.append_styles(i, na);
  let s = e.prop(t, "modelValue", 15, !1), f = e.prop(t, "title", 3, "Confirm Action"), p = e.prop(t, "message", 3, "Are you sure you want to proceed?"), y = e.prop(t, "confirmText", 3, "Confirm"), w = e.prop(t, "cancelText", 3, "Cancel"), u = e.prop(t, "confirmColor", 3, "primary"), g = e.prop(t, "loading", 3, !1);
  const h = e.derived(() => Ce({
    confirmText: y(),
    cancelText: w(),
    confirmColor: u()
  })), m = () => {
    var o;
    s(!1), (o = t.oncancel) == null || o.call(t);
  }, n = () => {
    var o;
    (o = t.onconfirm) == null || o.call(t);
  };
  var d = e.comment(), b = e.first_child(d);
  {
    var x = (o) => {
      var c = la(), v = e.child(c), a = e.child(v), r = e.child(a), l = e.only_child(r, !0), _ = e.sibling(r, 2), k = e.only_child(_, !0);
      e.reset(a);
      var j = e.sibling(a, 2), C = e.child(j);
      M(C, {
        variant: "text",
        get disabled() {
          return g();
        },
        onclick: m,
        children: (S) => {
          e.next();
          var z = e.text();
          e.template_effect(() => e.set_text(z, e.get(h).cancelText)), e.append(S, z);
        },
        $$slots: { default: !0 }
      });
      var N = e.sibling(C, 2);
      M(N, {
        variant: "elevated",
        get color() {
          return e.get(h).confirmColor;
        },
        get loading() {
          return g();
        },
        onclick: n,
        children: (S) => {
          e.next();
          var z = e.text();
          e.template_effect(() => e.set_text(z, e.get(h).confirmText)), e.append(S, z);
        },
        $$slots: { default: !0 }
      }), e.reset(j), e.reset(v), e.reset(c), e.template_effect(() => {
        e.set_text(l, f()), e.set_text(k, p());
      }), e.append(o, c);
    };
    e.if(b, (o) => {
      s() && o(x);
    });
  }
  e.append(i, d), e.pop();
}
var ia = e.from_html('<span class="m-kpi-tile__icon"> </span>'), oa = e.from_html("<span> </span>"), da = e.from_html('<span class="m-kpi-tile__subtext"> </span>'), va = e.from_html('<div class="m-kpi-tile__footer svelte-s77j7w"><!> <!></div>'), ca = e.from_html('<div class="m-kpi-tile svelte-s77j7w"><div class="m-kpi-tile__header svelte-s77j7w"><span class="m-kpi-tile__label svelte-s77j7w"> </span> <!></div> <div class="m-kpi-tile__value svelte-s77j7w"> </div> <!></div>');
const ma = {
  hash: "svelte-s77j7w",
  code: `:root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,
.v-theme--dark.svelte-s77j7w {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-s77j7w {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-kpi-tile.svelte-s77j7w {padding:20px;display:flex;flex-direction:column;gap:8px;}.m-kpi-tile__header.svelte-s77j7w {display:flex;justify-content:space-between;align-items:center;}.m-kpi-tile__label.svelte-s77j7w {font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;font-weight:600;}.m-kpi-tile__value.svelte-s77j7w {font-family:"JetBrains Mono", monospace;font-size:1.75rem;font-weight:700;color:#f8fafc;line-height:1.2;}.m-kpi-tile__footer.svelte-s77j7w {display:flex;align-items:center;gap:8px;font-size:0.8rem;color:#94a3b8;}.m-kpi-tile__trend.svelte-s77j7w {font-family:"JetBrains Mono", monospace;font-weight:600;font-size:0.75rem;padding:2px 6px;border-radius:6px;}.m-kpi-tile__trend--up.svelte-s77j7w {color:#10b981;background:rgba(16, 185, 129, 0.15);}.m-kpi-tile__trend--down.svelte-s77j7w {color:#ef4444;background:rgba(239, 68, 68, 0.15);}.m-kpi-tile__trend--neutral.svelte-s77j7w {color:#64748b;background:rgba(148, 163, 184, 0.15);}`
};
function pa(i, t) {
  e.push(t, !0), e.append_styles(i, ma);
  let s = e.prop(t, "subtext", 3, void 0), f = e.prop(t, "trend", 3, void 0), p = e.prop(t, "trendValue", 3, void 0), y = e.prop(t, "icon", 3, void 0);
  const w = e.derived(() => ze(f())), u = e.derived(() => Se(f())), g = e.derived(() => !!(f() && p()));
  E(i, {
    variant: "glass",
    hover: !0,
    children: (m) => {
      var n = ca(), d = e.child(n), b = e.child(d), x = e.only_child(b, !0), o = e.sibling(b, 2);
      {
        var c = (k) => {
          var j = e.comment(), C = e.first_child(j);
          e.snippet(C, () => t.iconSnippet), e.append(k, j);
        }, v = (k) => {
          var j = ia(), C = e.only_child(j, !0);
          e.template_effect(() => e.set_text(C, y())), e.append(k, j);
        };
        e.if(o, (k) => {
          t.iconSnippet ? k(c) : y() && k(v, 1);
        });
      }
      e.reset(d);
      var a = e.sibling(d, 2), r = e.only_child(a, !0), l = e.sibling(a, 2);
      {
        var _ = (k) => {
          var j = va(), C = e.child(j);
          {
            var N = (z) => {
              var X = oa(), V = e.only_child(X);
              e.template_effect(
                (D) => {
                  e.set_class(X, 1, D, "svelte-s77j7w"), e.set_text(V, `${e.get(u) ?? ""}${p() ?? ""}`);
                },
                [
                  () => e.clsx(["m-kpi-tile__trend", e.get(w)].join(" "))
                ]
              ), e.append(z, X);
            };
            e.if(C, (z) => {
              e.get(g) && z(N);
            });
          }
          var T = e.sibling(C, 2);
          {
            var S = (z) => {
              var X = da(), V = e.only_child(X, !0);
              e.template_effect(() => e.set_text(V, s())), e.append(z, X);
            };
            e.if(T, (z) => {
              s() && z(S);
            });
          }
          e.reset(j), e.append(k, j);
        };
        e.if(l, (k) => {
          (s() || e.get(g)) && k(_);
        });
      }
      e.reset(n), e.template_effect(() => {
        e.set_text(x, t.label), e.set_text(r, t.value);
      }), e.append(m, n);
    },
    $$slots: { default: !0 }
  }), e.pop();
}
var ga = e.from_html('<span class="m-search-input__icon svelte-195e8nk">🔍</span>'), xa = e.from_html("<div><!></div>");
const fa = {
  hash: "svelte-195e8nk",
  code: `:root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,
.v-theme--dark.svelte-195e8nk {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-195e8nk {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-search-input.svelte-195e8nk {position:relative;width:100%;max-width:420px;}.m-search-input__icon.svelte-195e8nk {display:inline-flex;align-items:center;justify-content:center;color:#64748b;font-size:0.9rem;padding-left:8px;}`
};
function hr(i, t) {
  e.push(t, !0), e.append_styles(i, fa);
  let s = e.prop(t, "modelValue", 15, ""), f = e.prop(t, "placeholder", 3, "Search..."), p = e.prop(t, "debounceMs", 3, 250), y = e.prop(t, "disabled", 3, !1), w = e.prop(t, "clearable", 3, !0), u = e.prop(t, "class", 3, "");
  const g = Ge(
    (b) => {
      var x;
      (x = t.onsearch) == null || x.call(t, b);
    },
    p()
  );
  G(g.cancel);
  const h = (b) => {
    const x = b.target;
    s(x.value), g(x.value);
  }, m = () => {
    var b, x;
    s(""), (b = t.onclear) == null || b.call(t), (x = t.onsearch) == null || x.call(t, "");
  };
  var n = xa(), d = e.child(n);
  _t(d, {
    get placeholder() {
      return f();
    },
    get disabled() {
      return y();
    },
    get clearable() {
      return w();
    },
    oninput: h,
    onclear: m,
    get modelValue() {
      return s();
    },
    set modelValue(x) {
      s(x);
    },
    prependInner: (x) => {
      var o = ga();
      e.append(x, o);
    },
    $$slots: { prependInner: !0 }
  }), e.reset(n), e.template_effect((b) => e.set_class(n, 1, b, "svelte-195e8nk"), [
    () => e.clsx(Te({ disabled: y() }, u()).join(" "))
  ]), e.append(i, n), e.pop();
}
var ha = e.from_html('<div class="m-pagination__info svelte-5t8q66"> </div>'), ba = e.from_html("<div></div>"), _a = e.from_html('<div class="m-pagination svelte-5t8q66"><!> <div class="m-pagination__controls svelte-5t8q66"><!> <!> <!></div></div>');
const ua = {
  hash: "svelte-5t8q66",
  code: ':root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-pagination.svelte-5t8q66 {display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:12px 16px;font-family:"JetBrains Mono", monospace;}.m-pagination__info.svelte-5t8q66 {font-size:0.8rem;color:#64748b;}.m-pagination__controls.svelte-5t8q66 {display:flex;align-items:center;gap:6px;}'
};
function br(i, t) {
  e.push(t, !0), e.append_styles(i, ua);
  let s = e.prop(t, "currentPage", 15, 1), f = e.prop(t, "pageSize", 3, 20), p = e.prop(t, "totalItems", 3, 0), y = e.prop(t, "maxVisiblePages", 3, 5), w = e.prop(t, "showRange", 3, !0);
  const u = e.derived(() => Xe(s(), t.totalPages, y())), g = e.derived(() => Ne(s(), f(), p())), h = e.derived(() => s() > 1), m = e.derived(() => s() < t.totalPages), n = (l) => {
    var j;
    l >= 1 && l <= t.totalPages && l !== s() && (s(l), (j = t.onpagechange) == null || j.call(t, l));
  };
  var d = _a(), b = e.child(d);
  {
    var x = (l) => {
      var _ = ha(), k = e.only_child(_);
      e.template_effect(() => e.set_text(k, `Showing ${e.get(g).start ?? ""} to ${e.get(g).end ?? ""} of ${e.get(g).total ?? ""} items`)), e.append(l, _);
    }, o = (l) => {
      var _ = ba();
      e.append(l, _);
    };
    e.if(b, (l) => {
      w() && p() ? l(x) : l(o, -1);
    });
  }
  var c = e.sibling(b, 2), v = e.child(c);
  {
    const l = (k) => {
      e.next();
      var j = e.text("Prev");
      e.append(k, j);
    };
    let _ = e.derived(() => !e.get(h));
    M(v, {
      variant: "glass",
      size: "small",
      get disabled() {
        return e.get(_);
      },
      onclick: () => n(s() - 1),
      children: l,
      $$slots: { default: !0 }
    });
  }
  var a = e.sibling(v, 2);
  e.each(a, 16, () => e.get(u), (l) => l, (l, _) => {
    {
      const k = (N) => {
        e.next();
        var T = e.text();
        e.template_effect(() => e.set_text(T, _)), e.append(N, T);
      };
      let j = e.derived(() => _ === s() ? "elevated" : "glass"), C = e.derived(() => _ === s() ? "m-pagination__btn m-pagination__btn--active" : "m-pagination__btn");
      M(l, {
        get variant() {
          return e.get(j);
        },
        size: "small",
        get class() {
          return e.get(C);
        },
        onclick: () => n(_),
        children: k,
        $$slots: { default: !0 }
      });
    }
  });
  var r = e.sibling(a, 2);
  {
    const l = (k) => {
      e.next();
      var j = e.text("Next");
      e.append(k, j);
    };
    let _ = e.derived(() => !e.get(m));
    M(r, {
      variant: "glass",
      size: "small",
      get disabled() {
        return e.get(_);
      },
      onclick: () => n(s() + 1),
      children: l,
      $$slots: { default: !0 }
    });
  }
  e.reset(c), e.reset(d), e.append(i, d), e.pop();
}
var ya = e.from_html("<span> </span>"), wa = e.from_html('<p class="m-empty-state__description svelte-1pkzlwk"> </p>'), A = e.from_html('<div class="m-empty-state__actions svelte-1pkzlwk"><!></div>'), ka = e.from_html('<div class="m-empty-state__icon-wrap svelte-1pkzlwk"><!></div> <h3 class="m-empty-state__title svelte-1pkzlwk"> </h3> <!> <!>', 1);
const ja = {
  hash: "svelte-1pkzlwk",
  code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-empty-state__icon-wrap.svelte-1pkzlwk {display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:50%;background:rgba(17, 28, 58, 0.85);border:1px solid rgba(98, 201, 255, 0.12);font-size:2rem;margin-bottom:16px;color:#62c9ff;box-shadow:0 0 20px rgba(98, 201, 255, 0.08);}.m-empty-state__title.svelte-1pkzlwk {font-size:1.25rem;font-weight:600;color:#f8fafc;margin-bottom:8px;}.m-empty-state__description.svelte-1pkzlwk {font-size:0.9rem;color:#94a3b8;max-width:440px;line-height:1.5;margin-bottom:24px;}.m-empty-state__actions.svelte-1pkzlwk {display:flex;align-items:center;gap:12px;}"
};
function _r(i, t) {
  e.append_styles(i, ja);
  let s = e.prop(t, "description", 3, void 0), f = e.prop(t, "icon", 3, "✨"), p = e.prop(t, "actionText", 3, void 0);
  E(i, {
    variant: "glass",
    class: "m-empty-state",
    children: (w) => {
      var u = ka(), g = e.first_child(u), h = e.child(g);
      {
        var m = (r) => {
          var l = e.comment(), _ = e.first_child(l);
          e.snippet(_, () => t.iconSnippet), e.append(r, l);
        }, n = (r) => {
          var l = ya(), _ = e.only_child(l, !0);
          e.template_effect(() => e.set_text(_, f())), e.append(r, l);
        };
        e.if(h, (r) => {
          t.iconSnippet ? r(m) : r(n, -1);
        });
      }
      e.reset(g);
      var d = e.sibling(g, 2), b = e.only_child(d, !0), x = e.sibling(d, 2);
      {
        var o = (r) => {
          var l = wa(), _ = e.only_child(l, !0);
          e.template_effect(() => e.set_text(_, s())), e.append(r, l);
        };
        e.if(x, (r) => {
          s() && r(o);
        });
      }
      var c = e.sibling(x, 2);
      {
        var v = (r) => {
          var l = A(), _ = e.child(l);
          e.snippet(_, () => t.actionSnippet), e.reset(l), e.append(r, l);
        }, a = (r) => {
          var l = A(), _ = e.child(l);
          M(_, {
            variant: "elevated",
            color: "primary",
            get onclick() {
              return t.onclickaction;
            },
            children: (j) => {
              e.next();
              var C = e.text();
              e.template_effect(() => e.set_text(C, p())), e.append(j, C);
            },
            $$slots: { default: !0 }
          }), e.reset(l), e.append(r, l);
        };
        e.if(c, (r) => {
          t.actionSnippet ? r(v) : p() && r(a, 1);
        });
      }
      e.template_effect(() => e.set_text(b, t.title)), e.append(w, u);
    },
    $$slots: { default: !0 }
  });
}
var Ca = e.from_html('<div role="status"><span class="m-toast__message svelte-m2j5ak"> </span> <div class="m-toast__actions svelte-m2j5ak"><!> <!></div></div>');
const za = {
  hash: "svelte-m2j5ak",
  code: `:root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,
.v-theme--dark.svelte-m2j5ak {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-m2j5ak {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-toast.svelte-m2j5ak {position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;align-items:center;justify-content:space-between;gap:16px;min-width:280px;max-width:440px;padding:12px 18px;border-radius:10px;background:rgba(17, 28, 58, 0.85);border:1px solid rgba(98, 201, 255, 0.12);color:#f8fafc;backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(98, 201, 255, 0.08);transform:translateY(100px);opacity:0;pointer-events:none;transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;}.m-toast--open.svelte-m2j5ak {transform:translateY(0);opacity:1;pointer-events:auto;}
@media (max-width: 600px) {.m-toast.svelte-m2j5ak {bottom:80px;right:16px;left:16px;min-width:auto;max-width:none;}
}.m-toast__message.svelte-m2j5ak {font-size:0.875rem;font-weight:500;}.m-toast__actions.svelte-m2j5ak {display:flex;align-items:center;gap:8px;}.m-toast--success.svelte-m2j5ak {border-left:4px solid #10b981;}.m-toast--warning.svelte-m2j5ak {border-left:4px solid #f59e0b;}.m-toast--error.svelte-m2j5ak {border-left:4px solid #ef4444;}.m-toast--info.svelte-m2j5ak {border-left:4px solid #62c9ff;}`
};
function ur(i, t) {
  e.push(t, !0), e.append_styles(i, za);
  let s = e.prop(t, "modelValue", 15, !1), f = e.prop(t, "type", 3, "info"), p = e.prop(t, "duration", 3, 4e3), y = e.prop(t, "actionText", 3, void 0), w = e.prop(t, "class", 3, "");
  const u = () => {
    var c;
    s(!1), (c = t.onclose) == null || c.call(t);
  };
  e.user_effect(() => s() && p() > 0 ? Ee(p(), u) : void 0);
  const g = e.derived(() => Ve({ message: t.message, type: f() }, s(), w()).join(" "));
  var h = Ca(), m = e.child(h), n = e.only_child(m, !0), d = e.sibling(m, 2), b = e.child(d);
  {
    var x = (c) => {
      M(c, {
        variant: "text",
        size: "small",
        get onclick() {
          return t.onclickaction;
        },
        children: (a) => {
          e.next();
          var r = e.text();
          e.template_effect(() => e.set_text(r, y())), e.append(a, r);
        },
        $$slots: { default: !0 }
      });
    };
    e.if(b, (c) => {
      y() && c(x);
    });
  }
  var o = e.sibling(b, 2);
  M(o, {
    variant: "plain",
    size: "x-small",
    icon: !0,
    onclick: u,
    children: (v) => {
      e.next();
      var a = e.text("×");
      e.append(v, a);
    },
    $$slots: { default: !0 }
  }), e.reset(d), e.reset(h), e.template_effect(() => {
    e.set_class(h, 1, e.clsx(e.get(g)), "svelte-m2j5ak"), e.set_text(n, t.message);
  }), e.append(i, h), e.pop();
}
var Sa = e.from_html('<div class="m-stat-strip svelte-8xcni4"></div>');
const Ta = {
  hash: "svelte-8xcni4",
  code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-stat-strip.svelte-8xcni4 {display:grid;gap:16px;width:100%;}"
};
function yr(i, t) {
  e.push(t, !0), e.append_styles(i, Ta);
  let s = e.prop(t, "columns", 3, 4);
  const f = e.derived(() => qe(s()));
  var p = Sa();
  let y;
  e.each(p, 23, () => t.stats, (w, u) => `${w.label}-${u}`, (w, u) => {
    pa(w, {
      get label() {
        return e.get(u).label;
      },
      get value() {
        return e.get(u).value;
      },
      get subtext() {
        return e.get(u).subtext;
      },
      get trend() {
        return e.get(u).trend;
      },
      get trendValue() {
        return e.get(u).trendValue;
      },
      get icon() {
        return e.get(u).icon;
      }
    });
  }), e.reset(p), e.template_effect(() => y = e.set_style(p, "", y, {
    "grid-template-columns": e.get(f).gridTemplateColumns
  })), e.append(i, p), e.pop();
}
var Xa = e.from_html('<span class="m-tabs-nav__icon"> </span>'), Na = e.from_html('<span class="m-tabs-nav__badge svelte-1f6dmse"> </span>'), Va = e.from_html('<button type="button" role="tab"><!> <span> </span> <!></button>'), qa = e.from_html('<nav role="tablist"></nav>');
const Da = {
  hash: "svelte-1f6dmse",
  code: `:root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,
.v-theme--dark.svelte-1f6dmse {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-1f6dmse {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-tabs-nav.svelte-1f6dmse {display:flex;align-items:center;gap:6px;padding:4px;border-radius:10px;background:rgba(11, 19, 41, 0.5);border:1px solid rgba(98, 201, 255, 0.12);backdrop-filter:blur(8px);width:fit-content;}.m-tabs-nav--grow.svelte-1f6dmse {width:100%;}.m-tabs-nav--grow.svelte-1f6dmse .m-tabs-nav__item:where(.svelte-1f6dmse) {flex:1;}.m-tabs-nav--align-center.svelte-1f6dmse {margin:0 auto;}.m-tabs-nav--align-end.svelte-1f6dmse {margin-left:auto;}.m-tabs-nav__item.svelte-1f6dmse {display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:8px 16px;border-radius:6px;font-size:0.85rem;font-weight:500;color:#94a3b8;background:transparent;border:none;cursor:pointer;user-select:none;transition:all 0.2s ease;}.m-tabs-nav__item.svelte-1f6dmse:hover:not(:disabled) {color:#f8fafc;background:rgba(255, 255, 255, 0.05);}.m-tabs-nav__item.svelte-1f6dmse:disabled {opacity:0.4;cursor:not-allowed;}.m-tabs-nav__item--active.svelte-1f6dmse {color:#050811 !important;background:#62c9ff !important;font-weight:600;box-shadow:0 0 12px rgba(98, 201, 255, 0.4);}.m-tabs-nav__badge.svelte-1f6dmse {padding:2px 6px;border-radius:9999px;font-size:0.7rem;font-weight:700;background:rgba(0, 0, 0, 0.2);}`
};
function wr(i, t) {
  e.push(t, !0), e.append_styles(i, Da);
  let s = e.prop(t, "modelValue", 31, () => e.proxy(t.tabs[0] ? t.tabs[0].id : "")), f = e.prop(t, "grow", 3, !1), p = e.prop(t, "align", 3, "start"), y = e.prop(t, "class", 3, "");
  const w = e.derived(() => De({ tabs: t.tabs, grow: f(), align: p() }, y()).join(" ")), u = (h) => {
    var n;
    h.disabled || (s(h.id), (n = t.ontabchange) == null || n.call(t, h.id));
  };
  var g = qa();
  e.each(g, 21, () => t.tabs, (h) => h.id, (h, m) => {
    var n = Va(), d = e.child(n);
    {
      var b = (a) => {
        var r = Xa(), l = e.only_child(r, !0);
        e.template_effect(() => e.set_text(l, e.get(m).icon)), e.append(a, r);
      };
      e.if(d, (a) => {
        e.get(m).icon && a(b);
      });
    }
    var x = e.sibling(d, 2), o = e.only_child(x, !0), c = e.sibling(x, 2);
    {
      var v = (a) => {
        var r = Na(), l = e.only_child(r, !0);
        e.template_effect(() => e.set_text(l, e.get(m).badge)), e.append(a, r);
      };
      e.if(c, (a) => {
        e.get(m).badge && a(v);
      });
    }
    e.reset(n), e.template_effect(
      (a) => {
        e.set_attribute(n, "aria-selected", s() === e.get(m).id), n.disabled = e.get(m).disabled, e.set_class(n, 1, a, "svelte-1f6dmse"), e.set_text(o, e.get(m).label);
      },
      [
        () => e.clsx([
          "m-tabs-nav__item",
          s() === e.get(m).id ? "m-tabs-nav__item--active" : ""
        ].join(" "))
      ]
    ), e.delegated("click", n, () => u(e.get(m))), e.append(h, n);
  }), e.reset(g), e.template_effect(() => e.set_class(g, 1, e.clsx(e.get(w)), "svelte-1f6dmse")), e.append(i, g), e.pop();
}
e.delegate(["click"]);
var Ma = e.from_html('<h2 class="m-action-bar__title svelte-1mzpk3e"> </h2>'), Ia = e.from_html('<div class="m-action-bar__center"><!></div>'), Pa = e.from_html('<div class="m-action-bar__end svelte-1mzpk3e"><!></div>'), Ba = e.from_html('<div class="m-action-bar__start svelte-1mzpk3e"><!></div> <!> <!>', 1);
const Ra = {
  hash: "svelte-1mzpk3e",
  code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-action-bar__start.svelte-1mzpk3e {display:flex;align-items:center;gap:12px;}.m-action-bar__title.svelte-1mzpk3e {font-size:1.1rem;font-weight:600;color:#f8fafc;letter-spacing:-0.01em;}.m-action-bar__end.svelte-1mzpk3e {display:flex;align-items:center;gap:8px;margin-left:auto;}"
};
function kr(i, t) {
  e.push(t, !0), e.append_styles(i, Ra);
  let s = e.prop(t, "title", 3, void 0), f = e.prop(t, "position", 3, "static"), p = e.prop(t, "bordered", 3, !0), y = e.prop(t, "class", 3, "");
  const w = e.derived(() => Me({ position: f(), bordered: p() }, y()).join(" "));
  pt(i, {
    get class() {
      return e.get(w);
    },
    children: (g) => {
      var h = Ba(), m = e.first_child(h), n = e.child(m);
      {
        var d = (a) => {
          var r = e.comment(), l = e.first_child(r);
          e.snippet(l, () => t.start), e.append(a, r);
        }, b = (a) => {
          var r = Ma(), l = e.only_child(r, !0);
          e.template_effect(() => e.set_text(l, s())), e.append(a, r);
        };
        e.if(n, (a) => {
          t.start ? a(d) : s() && a(b, 1);
        });
      }
      e.reset(m);
      var x = e.sibling(m, 2);
      {
        var o = (a) => {
          var r = Ia(), l = e.child(r);
          t.children(l), e.reset(r), e.append(a, r);
        };
        e.if(x, (a) => {
          t.children && a(o);
        });
      }
      var c = e.sibling(x, 2);
      {
        var v = (a) => {
          var r = Pa(), l = e.child(r);
          e.snippet(l, () => t.end), e.reset(r), e.append(a, r);
        };
        e.if(c, (a) => {
          t.end && a(v);
        });
      }
      e.append(g, h);
    },
    $$slots: { default: !0 }
  }), e.pop();
}
var Aa = e.from_html('<span class="m-data-table__sort-icon svelte-1ymnl0k"> </span>'), Ga = e.from_html("<th> <!></th>"), Ea = e.from_html('<tr><td class="m-data-table__empty svelte-1ymnl0k"> </td></tr>'), Fa = e.from_html("<td> </td>"), La = e.from_html('<tr class="m-data-table__tr svelte-1ymnl0k"></tr>'), Wa = e.from_html('<div><!> <table class="m-data-table__table svelte-1ymnl0k"><thead><tr></tr></thead><tbody><!></tbody></table></div>');
const Ka = {
  hash: "svelte-1ymnl0k",
  code: `:root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,
.v-theme--dark.svelte-1ymnl0k {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-1ymnl0k {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-data-table.svelte-1ymnl0k {width:100%;overflow-x:auto;background:rgba(11, 19, 41, 0.75);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(98, 201, 255, 0.12);border-radius:12px;}.m-data-table__table.svelte-1ymnl0k {width:100%;border-collapse:collapse;font-size:0.875rem;color:#f8fafc;}.m-data-table__th.svelte-1ymnl0k {padding:12px 16px;text-align:left;font-weight:600;color:#94a3b8;border-bottom:1px solid rgba(98, 201, 255, 0.12);user-select:none;white-space:nowrap;}.m-data-table__th--sortable.svelte-1ymnl0k {cursor:pointer;}.m-data-table__th--sortable.svelte-1ymnl0k:hover {color:#62c9ff;}.m-data-table__th--align-center.svelte-1ymnl0k {text-align:center;}.m-data-table__th--align-end.svelte-1ymnl0k {text-align:right;}.m-data-table__sort-icon.svelte-1ymnl0k {display:inline-block;margin-left:6px;font-size:0.75rem;color:#62c9ff;}.m-data-table__td.svelte-1ymnl0k {padding:14px 16px;border-bottom:1px solid rgba(98, 201, 255, 0.12);color:#f8fafc;}.m-data-table__td--align-center.svelte-1ymnl0k {text-align:center;}.m-data-table__td--align-end.svelte-1ymnl0k {text-align:right;}.m-data-table__empty.svelte-1ymnl0k {padding:32px 16px;text-align:center;color:#94a3b8;}.m-data-table--hoverable.svelte-1ymnl0k .m-data-table__tr:where(.svelte-1ymnl0k):hover .m-data-table__td:where(.svelte-1ymnl0k) {background:rgba(98, 201, 255, 0.05);cursor:pointer;}.m-data-table--dense.svelte-1ymnl0k .m-data-table__th:where(.svelte-1ymnl0k) {padding:8px 12px;}.m-data-table--dense.svelte-1ymnl0k .m-data-table__td:where(.svelte-1ymnl0k) {padding:8px 12px;}`
};
function jr(i, t) {
  e.push(t, !0), e.append_styles(i, Ka);
  let s = e.prop(t, "headers", 19, () => []), f = e.prop(t, "items", 19, () => []), p = e.prop(t, "loading", 3, !1), y = e.prop(t, "emptyText", 3, "No records found"), w = e.prop(t, "itemKey", 3, "id"), u = e.prop(t, "sortBy", 3, null), g = e.prop(t, "sortDesc", 3, !1), h = e.prop(t, "hoverable", 3, !0), m = e.prop(t, "dense", 3, !1), n = e.prop(t, "class", 3, "");
  const d = e.derived(() => Ie({ hoverable: h(), dense: m(), loading: p() }, n()).join(" ")), b = e.derived(() => !p() && f().length === 0), x = (T) => {
    var X;
    if (!(!!T.sortable && !!t.onsortchange)) return;
    const z = Pe({ sortBy: u(), sortDesc: g() }, T.key);
    (X = t.onsortchange) == null || X.call(t, z);
  }, o = (T) => {
    t.onrowclick && t.onrowclick(T);
  };
  var c = Wa(), v = e.child(c);
  {
    var a = (T) => {
      Et(T, { indeterminate: !0, color: "primary" });
    };
    e.if(v, (T) => {
      p() && T(a);
    });
  }
  var r = e.sibling(v, 2), l = e.child(r), _ = e.child(l);
  e.each(_, 21, s, (T) => T.key, (T, S) => {
    var z = Ga(), X = e.child(z), V = e.sibling(X);
    {
      var D = (q) => {
        var I = Aa(), P = e.only_child(I, !0);
        e.template_effect(() => e.set_text(P, g() ? "▼" : "▲")), e.append(q, I);
      };
      e.if(V, (q) => {
        u() === e.get(S).key && q(D);
      });
    }
    e.reset(z), e.template_effect(
      (q) => {
        e.set_class(z, 1, q, "svelte-1ymnl0k"), e.set_text(X, `${e.get(S).title ?? ""} `);
      },
      [
        () => e.clsx([
          "m-data-table__th",
          e.get(S).sortable && "m-data-table__th--sortable",
          e.get(S).align && `m-data-table__th--align-${e.get(S).align}`
        ].filter(Boolean).join(" "))
      ]
    ), e.delegated("click", z, () => x(e.get(S))), e.append(T, z);
  }), e.reset(_), e.reset(l);
  var k = e.sibling(l), j = e.child(k);
  {
    var C = (T) => {
      var S = Ea(), z = e.child(S), X = e.only_child(z, !0);
      e.reset(S), e.template_effect(() => {
        e.set_attribute(z, "colspan", s().length), e.set_text(X, y());
      }), e.append(T, S);
    }, N = (T) => {
      var S = e.comment(), z = e.first_child(S);
      e.each(z, 19, f, (X, V) => Be(X, w(), V), (X, V) => {
        var D = La();
        e.each(D, 21, s, (q) => q.key, (q, I) => {
          var P = Fa(), W = e.only_child(P, !0);
          e.template_effect(
            (K, O) => {
              e.set_class(P, 1, K, "svelte-1ymnl0k"), e.set_text(W, O);
            },
            [
              () => e.clsx([
                "m-data-table__td",
                e.get(I).align && `m-data-table__td--align-${e.get(I).align}`
              ].filter(Boolean).join(" ")),
              () => String(Re(e.get(V), e.get(I)))
            ]
          ), e.append(q, P);
        }), e.reset(D), e.delegated("click", D, () => o(e.get(V))), e.append(X, D);
      }), e.append(T, S);
    };
    e.if(j, (T) => {
      e.get(b) ? T(C) : T(N, -1);
    });
  }
  e.reset(k), e.reset(r), e.reset(c), e.template_effect(() => e.set_class(c, 1, e.clsx(e.get(d)), "svelte-1ymnl0k")), e.append(i, c), e.pop();
}
e.delegate(["click"]);
const Oa = (i) => {
  const [, t] = Fe(() => G(i));
  return t === null;
}, F = (...i) => {
  const t = Le(...i);
  return Oa(t), t;
}, L = (i, t) => (F(i.stop), !!t.immediate && i.start(), i), Cr = (i, t, s = {}) => L(We(i, t), s), zr = (i, t, s = {}) => L(Ke(i, t), s), Sr = (i, t = {}) => {
  const { immediate: s = !0 } = t, f = { data: null, error: null, isLoading: s }, p = Je(f), y = Oe(i, p.set, f);
  return F(y.cancel), s && y.run(), { subscribe: p.subscribe, execute: y.run, cancel: y.cancel };
}, Ha = (i) => typeof (i == null ? void 0 : i.subscribe) == "function", Tr = (i, ...t) => {
  const s = He(...t), f = Ha(i) ? i : Ye(i);
  return Qe(f, (p) => {
    const y = s(p);
    return { filtered: y, count: y.length, hasMatches: y.length > 0 };
  });
};
export {
  kr as MActionBar,
  fr as MConfirmDialog,
  jr as MDataTable,
  _r as MEmptyState,
  pa as MKpiTile,
  br as MPagination,
  hr as MSearchInput,
  yr as MStatStrip,
  wr as MTabsNav,
  ur as MToast,
  ir as XAlert,
  tr as XAvatar,
  ar as XBadge,
  M as XBtn,
  E as XCard,
  rr as XCheckbox,
  $a as XChip,
  er as XDialog,
  lr as XDivider,
  pr as XGrid,
  dr as XList,
  vr as XListItem,
  er as XModal,
  xr as XNavDrawer,
  Et as XProgressLinear,
  pt as XSheet,
  nr as XSkeleton,
  mr as XStack,
  sr as XSwitch,
  cr as XText,
  _t as XTextField,
  gr as XTextarea,
  or as XTooltip,
  Ee as after,
  Vr as all,
  qr as allPass,
  Dr as any,
  Mr as anyPass,
  Ir as assertRuleTree,
  Oa as bindToComponent,
  Oe as createAsyncRunner,
  Ge as createDebounce,
  Le as createDisposer,
  Pr as createLatestGate,
  He as createPredicateFilter,
  Ke as createRestartableInterval,
  We as createRestartableTimeout,
  Br as createRuleSet,
  Rr as deepFreeze,
  Ar as evaluateRules,
  Gr as every,
  Er as fallback,
  Fr as glassTokens,
  Lr as isErr,
  Wr as isOk,
  Ae as listen,
  Kr as mapResult,
  Or as matchesAllPredicates,
  Hr as matchesAnyPattern,
  Jr as none,
  Yr as nonePass,
  Qr as normalizeArray,
  Ur as not,
  Zr as radiiTokens,
  $r as ruleTree,
  es as spaceTokens,
  ts as starshipColors,
  as as toError,
  rs as toResult,
  Fe as toResultSync,
  B as toStyleString,
  ss as toneColors,
  ls as unwrapOr,
  Sr as useAsyncData,
  F as useDisposer,
  Tr as usePredicateFilter,
  zr as useSelfCleaningInterval,
  Cr as useSelfCleaningTimeout
};
