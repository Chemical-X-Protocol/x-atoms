import { defineComponent as v, useAttrs as V, computed as m, openBlock as u, createBlock as y, mergeProps as B, unref as h, createSlots as X, withCtx as r, renderSlot as c, normalizeProps as $, guardReactiveProps as k, createVNode as w, createElementVNode as g, createElementBlock as f, toDisplayString as _, normalizeClass as S, createCommentVNode as x, normalizeStyle as I, resolveDynamicComponent as L, createTextVNode as T, ref as q, onScopeDispose as G, watch as Q, Fragment as P, renderList as M, getCurrentScope as le, shallowRef as E, toValue as se } from "vue";
import { VBtn as oe } from "vuetify/components/VBtn";
import { VCard as J } from "vuetify/components/VCard";
import { VChip as ne } from "vuetify/components/VChip";
import { VDialog as ie } from "vuetify/components/VDialog";
import { VSheet as re } from "vuetify/components/VSheet";
import { VTextField as de } from "vuetify/components/VTextField";
import { Q as ue, f as ce, V as me, o as pe, E as fe, P as F, b as ve, a5 as ye, a4 as _e, $ as he, J as be, F as ge, q as $e, s as ke, X as Ve, a0 as Be, a1 as Ce, C as xe, z as Se, u as Xe, U as Te, M as De, r as we, I as Ae, d as Pe, H as Me, Y as ze, W as O, c as Ne, R as Ie } from "./chunks/controllers-CBj9TrZR.js";
import { VAvatar as Le } from "vuetify/components/VAvatar";
import { VBadge as Ge } from "vuetify/components/VBadge";
import { VCheckbox as Re } from "vuetify/components/VCheckbox";
import { VSwitch as Ue } from "vuetify/components/VSwitch";
import { VDivider as Ee } from "vuetify/components/VDivider";
import { VAlert as Fe } from "vuetify/components/VAlert";
import { VProgressLinear as Oe } from "vuetify/components/VProgressLinear";
import { VTooltip as Ke } from "vuetify/components/VTooltip";
import { VMenu as We } from "vuetify/components/VMenu";
import { VList as He, VListItem as je } from "vuetify/components/VList";
import { VTextarea as qe } from "vuetify/components/VTextarea";
import { VNavigationDrawer as Qe } from "vuetify/components/VNavigationDrawer";
import { createDebounce as Je, after as Ye, createDisposer as Ze, createRestartableTimeout as et, createRestartableInterval as tt, createAsyncRunner as at, createPredicateFilter as lt } from "./core.js";
import { all as za, allPass as Na, any as Ia, anyPass as La, assertRuleTree as Ga, createLatestGate as Ra, createRuleSet as Ua, deepFreeze as Ea, evaluateRules as Fa, every as Oa, fallback as Ka, glassTokens as Wa, isErr as Ha, isOk as ja, listen as qa, mapResult as Qa, matchesAllPredicates as Ja, matchesAnyPattern as Ya, none as Za, nonePass as el, normalizeArray as tl, not as al, radiiTokens as ll, ruleTree as sl, spaceTokens as ol, starshipColors as nl, toError as il, toResult as rl, toResultSync as dl, toStyleString as ul, toneColors as cl, unwrapOr as ml } from "./core.js";
import { default as fl, starshipLightTheme as vl } from "./theme.js";
const D = /* @__PURE__ */ v({
  name: "XBtn",
  inheritAttrs: !1,
  __name: "x-btn",
  props: {
    variant: { default: void 0 },
    color: { default: void 0 },
    size: { default: "default" },
    block: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    icon: { type: [String, Boolean], default: !1 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => t.variant === "glass"), n = m(() => s.value ? "flat" : t.variant), l = m(() => {
      if (!(s.value && !t.color))
        return t.color;
    });
    return (o, i) => (u(), y(oe, B(h(e), {
      variant: n.value,
      color: l.value,
      size: t.size,
      block: t.block,
      loading: t.loading,
      disabled: t.disabled,
      icon: t.icon,
      class: ["x-btn", { "x-btn--glass": s.value }]
    }), X({
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 2
    }, [
      o.$slots.prepend ? {
        name: "prepend",
        fn: r(() => [
          c(o.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      o.$slots.append ? {
        name: "append",
        fn: r(() => [
          c(o.$slots, "append")
        ]),
        key: "1"
      } : void 0,
      o.$slots.loader ? {
        name: "loader",
        fn: r(() => [
          c(o.$slots, "loader")
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["variant", "color", "size", "block", "loading", "disabled", "icon", "class"]));
  }
}), R = /* @__PURE__ */ v({
  name: "XCard",
  inheritAttrs: !1,
  __name: "x-card",
  props: {
    variant: { default: void 0 },
    color: { default: void 0 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => t.variant === "glass"), n = m(() => s.value ? "flat" : t.variant);
    return (l, o) => (u(), y(J, B(h(e), {
      variant: n.value,
      color: t.color,
      loading: t.loading,
      disabled: t.disabled,
      class: [
        "x-card",
        {
          "x-card--glass": s.value,
          "x-card--hover": t.hover
        }
      ]
    }), X({
      default: r(() => [
        c(l.$slots, "default")
      ]),
      _: 2
    }, [
      l.$slots.image ? {
        name: "image",
        fn: r(() => [
          c(l.$slots, "image")
        ]),
        key: "0"
      } : void 0,
      l.$slots.prepend ? {
        name: "prepend",
        fn: r(() => [
          c(l.$slots, "prepend")
        ]),
        key: "1"
      } : void 0,
      l.$slots.title ? {
        name: "title",
        fn: r(() => [
          c(l.$slots, "title")
        ]),
        key: "2"
      } : void 0,
      l.$slots.subtitle ? {
        name: "subtitle",
        fn: r(() => [
          c(l.$slots, "subtitle")
        ]),
        key: "3"
      } : void 0,
      l.$slots.text ? {
        name: "text",
        fn: r(() => [
          c(l.$slots, "text")
        ]),
        key: "4"
      } : void 0,
      l.$slots.actions ? {
        name: "actions",
        fn: r(() => [
          c(l.$slots, "actions")
        ]),
        key: "5"
      } : void 0,
      l.$slots.loader ? {
        name: "loader",
        fn: r((i) => [
          c(l.$slots, "loader", $(k(i || {})))
        ]),
        key: "6"
      } : void 0,
      l.$slots.append ? {
        name: "append",
        fn: r(() => [
          c(l.$slots, "append")
        ]),
        key: "7"
      } : void 0
    ]), 1040, ["variant", "color", "loading", "disabled", "class"]));
  }
}), st = /* @__PURE__ */ v({
  name: "XChip",
  inheritAttrs: !1,
  __name: "x-chip",
  props: {
    variant: { default: void 0 },
    color: { default: void 0 },
    size: { default: "default" },
    closable: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    filter: { type: Boolean, default: !1 }
  },
  emits: ["click:close"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m(() => e.variant === "glass"), o = m(() => l.value ? "flat" : e.variant), i = () => {
      s("click:close");
    };
    return (d, p) => (u(), y(ne, B(h(n), {
      variant: o.value,
      color: e.color,
      size: e.size,
      closable: e.closable,
      disabled: e.disabled,
      filter: e.filter,
      class: ["x-chip", { "x-chip--glass": l.value }],
      "onClick:close": i
    }), X({
      default: r((C) => [
        c(d.$slots, "default", $(k(C || {})))
      ]),
      _: 2
    }, [
      d.$slots.prepend ? {
        name: "prepend",
        fn: r(() => [
          c(d.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      d.$slots.close ? {
        name: "close",
        fn: r(() => [
          c(d.$slots, "close")
        ]),
        key: "1"
      } : void 0,
      d.$slots.append ? {
        name: "append",
        fn: r(() => [
          c(d.$slots, "append")
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["variant", "color", "size", "closable", "disabled", "filter", "class"]));
  }
}), ot = { class: "x-dialog__actions" }, z = /* @__PURE__ */ v({
  name: "XDialog",
  inheritAttrs: !1,
  __name: "x-dialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    maxWidth: { default: 600 },
    width: { default: void 0 },
    persistent: { type: Boolean, default: !1 },
    scrollable: { type: Boolean, default: !1 },
    fullscreen: { type: Boolean, default: !1 },
    transition: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m({
      get: () => e.modelValue,
      set: (o) => {
        s("update:modelValue", o), s("update:model-value", o);
      }
    });
    return (o, i) => (u(), y(ie, B({
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
    }, h(n), {
      "max-width": e.maxWidth,
      width: e.width,
      persistent: e.persistent,
      scrollable: e.scrollable,
      fullscreen: e.fullscreen,
      transition: e.transition,
      class: "x-dialog"
    }), X({
      default: r(() => [
        w(J, { class: "x-dialog__surface" }, X({
          default: r(() => [
            c(o.$slots, "default")
          ]),
          _: 2
        }, [
          o.$slots.title ? {
            name: "title",
            fn: r(() => [
              c(o.$slots, "title")
            ]),
            key: "0"
          } : void 0,
          o.$slots.actions ? {
            name: "actions",
            fn: r(() => [
              g("div", ot, [
                c(o.$slots, "actions")
              ])
            ]),
            key: "1"
          } : void 0
        ]), 1024)
      ]),
      _: 2
    }, [
      o.$slots.activator ? {
        name: "activator",
        fn: r((d) => [
          c(o.$slots, "activator", $(k(d || {})))
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["modelValue", "max-width", "width", "persistent", "scrollable", "fullscreen", "transition"]));
  }
}), U = /* @__PURE__ */ v({
  name: "XSheet",
  inheritAttrs: !1,
  __name: "x-sheet",
  props: {
    color: { default: void 0 },
    elevation: { default: void 0 },
    rounded: { type: [Boolean, String, Number], default: void 0 },
    border: { type: [Boolean, String, Number], default: void 0 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => t.transparent ? "transparent" : t.color);
    return (n, l) => (u(), y(re, B(h(e), {
      color: s.value,
      elevation: t.elevation,
      rounded: t.rounded,
      border: t.border,
      class: ["x-sheet", { "x-sheet--transparent": t.transparent }]
    }), {
      default: r(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["color", "elevation", "rounded", "border", "class"]));
  }
}), Y = /* @__PURE__ */ v({
  name: "XTextField",
  inheritAttrs: !1,
  __name: "x-text-field",
  props: {
    modelValue: { default: "" },
    label: { default: void 0 },
    placeholder: { default: void 0 },
    variant: { default: void 0 },
    density: { default: "comfortable" },
    hideDetails: { type: [Boolean, String], default: !1 },
    clearable: { type: Boolean, default: !1 },
    type: { default: "text" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    prefix: { default: void 0 },
    suffix: { default: void 0 }
  },
  emits: ["update:modelValue", "click:clear"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m({
      get: () => e.modelValue,
      set: (i) => s("update:modelValue", i)
    }), o = () => {
      s("click:clear");
    };
    return (i, d) => (u(), y(de, B({
      modelValue: l.value,
      "onUpdate:modelValue": d[0] || (d[0] = (p) => l.value = p)
    }, h(n), {
      label: e.label,
      placeholder: e.placeholder,
      variant: e.variant,
      density: e.density,
      "hide-details": e.hideDetails,
      clearable: e.clearable,
      type: e.type,
      disabled: e.disabled,
      readonly: e.readonly,
      prefix: e.prefix,
      suffix: e.suffix,
      class: "x-text-field",
      "onClick:clear": o
    }), X({ _: 2 }, [
      i.$slots["prepend-inner"] ? {
        name: "prepend-inner",
        fn: r((p) => [
          c(i.$slots, "prepend-inner", $(k(p || {})))
        ]),
        key: "0"
      } : void 0,
      i.$slots["append-inner"] ? {
        name: "append-inner",
        fn: r((p) => [
          c(i.$slots, "append-inner", $(k(p || {})))
        ]),
        key: "1"
      } : void 0,
      i.$slots.prepend ? {
        name: "prepend",
        fn: r((p) => [
          c(i.$slots, "prepend", $(k(p || {})))
        ]),
        key: "2"
      } : void 0,
      i.$slots.append ? {
        name: "append",
        fn: r((p) => [
          c(i.$slots, "append", $(k(p || {})))
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["modelValue", "label", "placeholder", "variant", "density", "hide-details", "clearable", "type", "disabled", "readonly", "prefix", "suffix"]));
  }
}), nt = ["src", "alt"], it = { key: 1 }, rt = /* @__PURE__ */ v({
  name: "XAvatar",
  inheritAttrs: !1,
  __name: "x-avatar",
  props: {
    src: { default: void 0 },
    alt: { default: void 0 },
    text: { default: void 0 },
    size: { default: "default" },
    rounded: { type: [Boolean, String], default: void 0 },
    bordered: { type: Boolean, default: !1 },
    status: { default: void 0 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => ue(t.text || t.alt)), n = m(() => !!t.src), l = m(() => !!t.status);
    return (o, i) => (u(), y(Le, B(h(e), {
      size: t.size,
      rounded: t.rounded,
      class: h(ce)(t)
    }), {
      default: r(() => [
        n.value ? (u(), f("img", {
          key: 0,
          src: t.src,
          alt: t.alt || "Avatar"
        }, null, 8, nt)) : s.value ? (u(), f("span", it, _(s.value), 1)) : c(o.$slots, "default", {}, void 0, void 0, 2),
        l.value ? (u(), f("span", {
          key: 3,
          class: S(["x-avatar__status-dot", `x-avatar__status-dot--${t.status}`])
        }, null, 2)) : x("", !0)
      ]),
      _: 3
    }, 16, ["size", "rounded", "class"]));
  }
}), dt = /* @__PURE__ */ v({
  name: "XBadge",
  inheritAttrs: !1,
  __name: "x-badge",
  props: {
    content: { default: void 0 },
    color: { default: "primary" },
    dot: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    max: { default: 99 },
    floating: { type: Boolean, default: !0 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => me(t.content, t.max));
    return m(() => !!e.default), (n, l) => (u(), y(Ge, B(h(e), {
      content: s.value,
      color: t.color,
      dot: t.dot,
      inline: t.inline,
      max: t.max,
      floating: t.floating,
      class: "x-badge"
    }), {
      default: r(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["content", "color", "dot", "inline", "max", "floating"]));
  }
}), ut = /* @__PURE__ */ v({
  name: "XCheckbox",
  inheritAttrs: !1,
  __name: "x-checkbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    color: { default: "primary" },
    hideDetails: { type: [Boolean, String], default: "auto" }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m({
      get: () => e.modelValue,
      set: (o) => {
        s("update:modelValue", o), s("change", o);
      }
    });
    return (o, i) => (u(), y(Re, B({
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
    }, h(n), {
      label: e.label,
      disabled: e.disabled,
      indeterminate: e.indeterminate,
      color: e.color,
      "hide-details": e.hideDetails,
      class: "x-checkbox"
    }), X({ _: 2 }, [
      o.$slots.label ? {
        name: "label",
        fn: r((d) => [
          c(o.$slots, "label", $(k(d || {})))
        ]),
        key: "0"
      } : void 0,
      o.$slots.default ? {
        name: "default",
        fn: r((d) => [
          c(o.$slots, "default", $(k(d || {})))
        ]),
        key: "1"
      } : void 0
    ]), 1040, ["modelValue", "label", "disabled", "indeterminate", "color", "hide-details"]));
  }
}), ct = /* @__PURE__ */ v({
  name: "XSwitch",
  inheritAttrs: !1,
  __name: "x-switch",
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: "primary" },
    hideDetails: { type: [Boolean, String], default: "auto" }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m({
      get: () => e.modelValue,
      set: (o) => {
        s("update:modelValue", o), s("change", o);
      }
    });
    return (o, i) => (u(), y(Ue, B({
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
    }, h(n), {
      label: e.label,
      disabled: e.disabled,
      color: e.color,
      "hide-details": e.hideDetails,
      class: "x-switch"
    }), X({ _: 2 }, [
      o.$slots.label ? {
        name: "label",
        fn: r((d) => [
          c(o.$slots, "label", $(k(d || {})))
        ]),
        key: "0"
      } : void 0,
      o.$slots.thumb ? {
        name: "thumb",
        fn: r((d) => [
          c(o.$slots, "thumb", $(k(d || {})))
        ]),
        key: "1"
      } : void 0
    ]), 1040, ["modelValue", "label", "disabled", "color", "hide-details"]));
  }
}), mt = /* @__PURE__ */ v({
  name: "XDivider",
  inheritAttrs: !1,
  __name: "x-divider",
  props: {
    vertical: { type: Boolean, default: !1 },
    inset: { type: Boolean, default: !1 },
    color: { default: void 0 },
    thickness: { default: void 0 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => pe(t));
    return (n, l) => (u(), y(Ee, B(h(e), {
      vertical: t.vertical,
      inset: t.inset,
      color: t.color,
      thickness: t.thickness,
      class: s.value
    }), null, 16, ["vertical", "inset", "color", "thickness", "class"]));
  }
}), pt = /* @__PURE__ */ v({
  name: "XSkeleton",
  __name: "x-skeleton",
  props: {
    shape: { default: "rounded" },
    animation: { default: "shimmer" },
    width: { default: "100%" },
    height: { default: "1rem" },
    delay: { default: "0s" }
  },
  setup(a) {
    const t = a, e = m(() => fe(t)), s = m(() => F(t.width)), n = m(() => F(t.height));
    return (l, o) => (u(), f("div", {
      class: S(e.value),
      style: I({
        "--x-skeleton-width": s.value,
        "--x-skeleton-height": n.value,
        "--x-skeleton-delay": t.delay
      })
    }, null, 6));
  }
}), ft = /* @__PURE__ */ v({
  name: "XAlert",
  inheritAttrs: !1,
  __name: "x-alert",
  props: {
    type: { default: "info" },
    title: { default: void 0 },
    text: { default: void 0 },
    closable: { type: Boolean, default: !1 },
    variant: { default: void 0 }
  },
  emits: ["click:close"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m(() => e.variant === "glass" ? "flat" : e.variant), o = () => {
      s("click:close");
    };
    return (i, d) => (u(), y(Fe, B(h(n), {
      type: e.type,
      title: e.title,
      text: e.text,
      closable: e.closable,
      variant: l.value,
      class: "x-alert",
      "onClick:close": o
    }), X({
      default: r(() => [
        c(i.$slots, "default")
      ]),
      _: 2
    }, [
      i.$slots.prepend ? {
        name: "prepend",
        fn: r(() => [
          c(i.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      i.$slots.title ? {
        name: "title",
        fn: r(() => [
          c(i.$slots, "title")
        ]),
        key: "1"
      } : void 0,
      i.$slots.append ? {
        name: "append",
        fn: r(() => [
          c(i.$slots, "append")
        ]),
        key: "2"
      } : void 0,
      i.$slots.close ? {
        name: "close",
        fn: r((p) => [
          c(i.$slots, "close", $(k(p || {})))
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["type", "title", "text", "closable", "variant"]));
  }
}), Z = /* @__PURE__ */ v({
  name: "XProgressLinear",
  inheritAttrs: !1,
  __name: "x-progress-linear",
  props: {
    modelValue: { default: 0 },
    indeterminate: { type: Boolean, default: !1 },
    color: { default: "primary" },
    height: { default: 4 },
    rounded: { type: Boolean, default: !0 },
    striped: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => ve(t.modelValue));
    return (n, l) => (u(), y(Oe, B(h(e), {
      "model-value": s.value,
      indeterminate: t.indeterminate,
      color: t.color,
      height: t.height,
      rounded: t.rounded,
      striped: t.striped,
      class: "x-progress-linear"
    }), null, 16, ["model-value", "indeterminate", "color", "height", "rounded", "striped"]));
  }
}), vt = /* @__PURE__ */ v({
  name: "XTooltip",
  inheritAttrs: !1,
  __name: "x-tooltip",
  props: {
    text: { default: void 0 },
    location: { default: "top" },
    disabled: { type: Boolean, default: !1 },
    openDelay: { default: 150 },
    closeDelay: { default: 100 }
  },
  setup(a) {
    const t = a, e = V();
    return (s, n) => (u(), y(Ke, B(h(e), {
      text: t.text,
      location: t.location,
      disabled: t.disabled,
      "open-delay": t.openDelay,
      "close-delay": t.closeDelay
    }), X({
      activator: r(({ props: l }) => [
        c(s.$slots, "activator", { props: l }, () => [
          g("span", $(k(l)), [
            c(s.$slots, "default")
          ], 16)
        ])
      ]),
      _: 2
    }, [
      s.$slots.default ? {
        name: "default",
        fn: r(() => [
          c(s.$slots, "default")
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["text", "location", "disabled", "open-delay", "close-delay"]));
  }
}), K = /* @__PURE__ */ v({
  name: "XMenu",
  inheritAttrs: !1,
  __name: "x-menu",
  props: {
    modelValue: { type: Boolean, default: void 0 },
    closeOnContentClick: { type: Boolean, default: !0 },
    location: { default: void 0 },
    origin: { default: void 0 },
    transition: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    offset: { default: void 0 }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m({
      get: () => e.modelValue,
      set: (o) => s("update:modelValue", !!o)
    });
    return (o, i) => (u(), y(We, B(h(n), {
      "model-value": e.modelValue !== void 0 ? l.value : void 0,
      "close-on-content-click": e.closeOnContentClick,
      location: e.location,
      origin: e.origin,
      transition: e.transition,
      disabled: e.disabled,
      offset: e.offset,
      class: "x-menu",
      "onUpdate:modelValue": i[0] || (i[0] = (d) => e.modelValue !== void 0 ? s("update:modelValue", d) : void 0)
    }), X({
      default: r((d) => [
        c(o.$slots, "default", $(k(d || {})))
      ]),
      _: 2
    }, [
      o.$slots.activator ? {
        name: "activator",
        fn: r((d) => [
          c(o.$slots, "activator", $(k(d || {})))
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["model-value", "close-on-content-click", "location", "origin", "transition", "disabled", "offset"]));
  }
}), W = /* @__PURE__ */ v({
  name: "XList",
  inheritAttrs: !1,
  __name: "x-list",
  props: {
    density: { default: "default" },
    lines: { type: [String, Boolean], default: "one" },
    nav: { type: Boolean, default: !1 },
    color: { default: void 0 },
    variant: { default: void 0 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => t.variant === "glass"), n = m(() => ye(t.variant));
    return (l, o) => (u(), y(He, B(h(e), {
      density: t.density,
      lines: t.lines,
      nav: t.nav,
      color: t.color,
      variant: n.value,
      disabled: t.disabled,
      class: [
        "x-list",
        {
          "x-list--glass": s.value
        }
      ]
    }), {
      default: r(() => [
        c(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["density", "lines", "nav", "color", "variant", "disabled", "class"]));
  }
}), H = /* @__PURE__ */ v({
  name: "XListItem",
  inheritAttrs: !1,
  __name: "x-list-item",
  props: {
    title: { default: void 0 },
    subtitle: { default: void 0 },
    value: { default: void 0 },
    active: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    color: { default: void 0 },
    density: { default: void 0 },
    lines: { type: [String, Boolean], default: void 0 },
    variant: { default: void 0 },
    rounded: { type: [Boolean, String, Number], default: void 0 },
    ripple: { type: Boolean, default: !0 }
  },
  setup(a) {
    const t = a, e = V(), s = m(() => t.variant === "glass"), n = m(() => _e(t.variant));
    return (l, o) => (u(), y(je, B(h(e), {
      title: t.title,
      subtitle: t.subtitle,
      value: t.value,
      active: t.active,
      disabled: t.disabled,
      color: t.color,
      density: t.density,
      lines: t.lines,
      variant: n.value,
      rounded: t.rounded,
      ripple: t.ripple,
      class: [
        "x-list-item",
        {
          "x-list-item--glass": s.value
        }
      ]
    }), X({
      default: r((i) => [
        c(l.$slots, "default", $(k(i || {})))
      ]),
      _: 2
    }, [
      l.$slots.prepend ? {
        name: "prepend",
        fn: r((i) => [
          c(l.$slots, "prepend", $(k(i || {})))
        ]),
        key: "0"
      } : void 0,
      l.$slots.title ? {
        name: "title",
        fn: r((i) => [
          c(l.$slots, "title", $(k(i || {})))
        ]),
        key: "1"
      } : void 0,
      l.$slots.subtitle ? {
        name: "subtitle",
        fn: r((i) => [
          c(l.$slots, "subtitle", $(k(i || {})))
        ]),
        key: "2"
      } : void 0,
      l.$slots.append ? {
        name: "append",
        fn: r((i) => [
          c(l.$slots, "append", $(k(i || {})))
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["title", "subtitle", "value", "active", "disabled", "color", "density", "lines", "variant", "rounded", "ripple", "class"]));
  }
}), yt = /* @__PURE__ */ v({
  name: "XText",
  __name: "x-text",
  props: {
    tag: { default: void 0 },
    variant: { default: "body" },
    tone: { default: void 0 },
    weight: { default: void 0 },
    align: { default: void 0 },
    truncate: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, e = m(() => he(t)), s = m(() => be(t));
    return (n, l) => (u(), y(L(e.value), {
      class: S(s.value)
    }, {
      default: r(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _t = /* @__PURE__ */ v({
  name: "XStack",
  __name: "x-stack",
  props: {
    direction: { default: "column" },
    gap: { default: "md" },
    align: { default: void 0 },
    justify: { default: void 0 },
    wrap: { type: Boolean, default: !1 },
    tag: { default: "div" }
  },
  setup(a) {
    const t = a, e = m(() => ge(t));
    return (s, n) => (u(), y(L(t.tag), {
      class: S(e.value)
    }, {
      default: r(() => [
        c(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ht = /* @__PURE__ */ v({
  name: "XGrid",
  __name: "x-grid",
  props: {
    columns: { default: 1 },
    minItemWidth: { default: void 0 },
    gap: { default: "md" },
    align: { default: void 0 },
    tag: { default: "div" }
  },
  setup(a) {
    const t = a, e = m(() => $e(t)), s = m(() => ke(t));
    return (n, l) => (u(), y(L(t.tag), {
      class: S(e.value),
      style: I(s.value)
    }, {
      default: r(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), bt = /* @__PURE__ */ v({
  name: "XTextarea",
  inheritAttrs: !1,
  __name: "x-textarea",
  props: {
    modelValue: { default: "" },
    label: { default: void 0 },
    placeholder: { default: void 0 },
    rows: { default: 3 },
    autoGrow: { type: Boolean, default: !1 },
    variant: { default: void 0 },
    density: { default: "comfortable" },
    hideDetails: { type: [Boolean, String], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    maxlength: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m({
      get: () => e.modelValue,
      set: (o) => s("update:modelValue", o)
    });
    return (o, i) => (u(), y(qe, B({
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
    }, h(n), {
      label: e.label,
      placeholder: e.placeholder,
      rows: e.rows,
      "auto-grow": e.autoGrow,
      variant: e.variant,
      density: e.density,
      "hide-details": e.hideDetails,
      disabled: e.disabled,
      readonly: e.readonly,
      maxlength: e.maxlength,
      counter: e.maxlength,
      class: "x-textarea"
    }), null, 16, ["modelValue", "label", "placeholder", "rows", "auto-grow", "variant", "density", "hide-details", "disabled", "readonly", "maxlength", "counter"]));
  }
}), gt = /* @__PURE__ */ v({
  name: "XNavDrawer",
  inheritAttrs: !1,
  __name: "x-nav-drawer",
  props: {
    modelValue: { type: Boolean, default: !0 },
    location: { default: "start" },
    rail: { type: Boolean, default: !1 },
    temporary: { type: Boolean, default: !1 },
    permanent: { type: Boolean, default: !1 },
    width: { default: 256 },
    floating: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = V(), l = m({
      get: () => e.modelValue,
      set: (o) => s("update:modelValue", o)
    });
    return (o, i) => (u(), y(Qe, B({
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value = d)
    }, h(n), {
      location: e.location,
      rail: e.rail,
      temporary: e.temporary,
      permanent: e.permanent,
      width: e.width,
      floating: e.floating,
      class: "x-nav-drawer"
    }), X({
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 2
    }, [
      o.$slots.prepend ? {
        name: "prepend",
        fn: r(() => [
          c(o.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      o.$slots.append ? {
        name: "append",
        fn: r(() => [
          c(o.$slots, "append")
        ]),
        key: "1"
      } : void 0
    ]), 1040, ["modelValue", "location", "rail", "temporary", "permanent", "width", "floating"]));
  }
}), $t = { class: "m-confirm-dialog__body" }, kt = { class: "m-confirm-dialog__title" }, Vt = { class: "m-confirm-dialog__message" }, Bt = /* @__PURE__ */ v({
  name: "MConfirmDialog",
  __name: "m-confirm-dialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "Confirm Action" },
    message: { default: "Are you sure you want to proceed?" },
    confirmText: { default: "Confirm" },
    cancelText: { default: "Cancel" },
    confirmColor: { default: "primary" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "confirm", "cancel"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = m({
      get: () => e.modelValue,
      set: (d) => s("update:modelValue", d)
    }), l = m(() => Ve(e)), o = () => {
      s("cancel"), n.value = !1;
    }, i = () => {
      s("confirm");
    };
    return (d, p) => (u(), y(z, {
      modelValue: n.value,
      "onUpdate:modelValue": p[0] || (p[0] = (C) => n.value = C),
      "max-width": 480
    }, {
      actions: r(() => [
        w(D, {
          variant: "text",
          disabled: e.loading,
          onClick: o
        }, {
          default: r(() => [
            T(_(l.value.cancelText), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        w(D, {
          variant: "elevated",
          color: l.value.confirmColor,
          loading: e.loading,
          onClick: i
        }, {
          default: r(() => [
            T(_(l.value.confirmText), 1)
          ]),
          _: 1
        }, 8, ["color", "loading"])
      ]),
      default: r(() => [
        g("div", $t, [
          g("h3", kt, _(e.title), 1),
          g("p", Vt, _(e.message), 1)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Ct = { class: "m-kpi-tile" }, xt = { class: "m-kpi-tile__header" }, St = { class: "m-kpi-tile__label" }, Xt = {
  key: 0,
  class: "m-kpi-tile__icon"
}, Tt = { class: "m-kpi-tile__value" }, Dt = {
  key: 0,
  class: "m-kpi-tile__footer"
}, wt = {
  key: 1,
  class: "m-kpi-tile__subtext"
}, ee = /* @__PURE__ */ v({
  name: "MKpiTile",
  __name: "m-kpi-tile",
  props: {
    label: {},
    value: {},
    subtext: { default: void 0 },
    trend: { default: void 0 },
    trendValue: { default: void 0 },
    icon: { default: void 0 }
  },
  setup(a) {
    const t = a, e = m(() => Be(t.trend)), s = m(() => Ce(t.trend)), n = m(() => !!(t.trend && t.trendValue));
    return (l, o) => (u(), y(R, {
      variant: "glass",
      hover: ""
    }, {
      default: r(() => [
        g("div", Ct, [
          g("div", xt, [
            g("span", St, _(t.label), 1),
            c(l.$slots, "icon", {}, () => [
              t.icon ? (u(), f("span", Xt, _(t.icon), 1)) : x("", !0)
            ])
          ]),
          g("div", Tt, _(t.value), 1),
          t.subtext || n.value ? (u(), f("div", Dt, [
            n.value ? (u(), f("span", {
              key: 0,
              class: S(["m-kpi-tile__trend", e.value])
            }, _(s.value) + _(t.trendValue), 3)) : x("", !0),
            t.subtext ? (u(), f("span", wt, _(t.subtext), 1)) : x("", !0)
          ])) : x("", !0)
        ])
      ]),
      _: 3
    }));
  }
}), At = /* @__PURE__ */ v({
  name: "MSearchInput",
  __name: "m-search-input",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search..." },
    debounceMs: { default: 250 },
    loading: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    size: { default: "default" }
  },
  emits: ["update:modelValue", "search", "clear"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = q(e.modelValue), l = Je((d) => {
      s("search", d);
    }, e.debounceMs);
    G(l.cancel), Q(
      () => e.modelValue,
      (d) => {
        n.value = d;
      }
    );
    const o = (d) => {
      const p = String(d);
      n.value = p, s("update:modelValue", p), l(p);
    }, i = () => {
      n.value = "", s("update:modelValue", ""), s("clear"), s("search", "");
    };
    return (d, p) => (u(), f("div", {
      class: S(h(xe)(e))
    }, [
      w(Y, {
        "model-value": n.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        clearable: e.clearable,
        density: "compact",
        "hide-details": "",
        "onUpdate:modelValue": o,
        "onClick:clear": i
      }, X({
        "prepend-inner": r(() => [
          c(d.$slots, "prepend-inner", {}, () => [
            p[0] || (p[0] = g("span", { class: "m-search-input__icon" }, "🔍", -1))
          ])
        ]),
        _: 2
      }, [
        d.$slots["append-inner"] ? {
          name: "append-inner",
          fn: r((C) => [
            c(d.$slots, "append-inner", $(k(C || {})))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["model-value", "placeholder", "disabled", "clearable"])
    ], 2));
  }
}), Pt = {
  key: 0,
  class: "m-pagination__info"
}, Mt = { key: 1 }, zt = { class: "m-pagination__controls" }, Nt = /* @__PURE__ */ v({
  name: "MPagination",
  __name: "m-pagination",
  props: {
    currentPage: {},
    totalPages: {},
    pageSize: { default: 20 },
    totalItems: { default: 0 },
    maxVisiblePages: { default: 5 },
    showRange: { type: Boolean, default: !0 }
  },
  emits: ["update:currentPage", "pageChange"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = m(
      () => Se(e.currentPage, e.totalPages, e.maxVisiblePages)
    ), l = m(
      () => Xe(e.currentPage, e.pageSize, e.totalItems)
    ), o = m(() => e.currentPage > 1), i = m(() => e.currentPage < e.totalPages), d = (p) => {
      Te(p, e.currentPage, e.totalPages) && (s("update:currentPage", p), s("pageChange", p));
    };
    return (p, C) => (u(), y(U, {
      transparent: "",
      class: "m-pagination"
    }, {
      default: r(() => [
        e.showRange && e.totalItems ? (u(), f("div", Pt, " Showing " + _(l.value.start) + " to " + _(l.value.end) + " of " + _(l.value.total) + " items ", 1)) : (u(), f("div", Mt)),
        g("div", zt, [
          w(D, {
            variant: "glass",
            size: "small",
            disabled: !o.value,
            onClick: C[0] || (C[0] = (b) => d(e.currentPage - 1))
          }, {
            default: r(() => [...C[2] || (C[2] = [
              T(" Prev ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          (u(!0), f(P, null, M(n.value, (b) => (u(), y(D, {
            key: b,
            variant: b === e.currentPage ? "elevated" : "glass",
            size: "small",
            class: S([
              "m-pagination__btn",
              { "m-pagination__btn--active": b === e.currentPage }
            ]),
            onClick: (N) => d(b)
          }, {
            default: r(() => [
              T(_(b), 1)
            ]),
            _: 2
          }, 1032, ["variant", "class", "onClick"]))), 128)),
          w(D, {
            variant: "glass",
            size: "small",
            disabled: !i.value,
            onClick: C[1] || (C[1] = (b) => d(e.currentPage + 1))
          }, {
            default: r(() => [...C[3] || (C[3] = [
              T(" Next ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), It = { class: "m-empty-state__icon-wrap" }, Lt = { class: "m-empty-state__title" }, Gt = {
  key: 0,
  class: "m-empty-state__description"
}, Rt = {
  key: 1,
  class: "m-empty-state__actions"
}, Ut = /* @__PURE__ */ v({
  name: "MEmptyState",
  __name: "m-empty-state",
  props: {
    title: {},
    description: { default: void 0 },
    icon: { default: "✨" },
    actionText: { default: void 0 }
  },
  emits: ["click:action"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = m(() => !!e.actionText), l = () => {
      s("click:action");
    };
    return (o, i) => (u(), y(R, {
      variant: "glass",
      class: "m-empty-state"
    }, {
      default: r(() => [
        g("div", It, [
          c(o.$slots, "icon", {}, () => [
            g("span", null, _(e.icon), 1)
          ])
        ]),
        g("h3", Lt, _(e.title), 1),
        e.description ? (u(), f("p", Gt, _(e.description), 1)) : x("", !0),
        n.value || o.$slots.action ? (u(), f("div", Rt, [
          c(o.$slots, "action", {}, () => [
            w(D, {
              variant: "elevated",
              color: "primary",
              onClick: l
            }, {
              default: r(() => [
                T(_(e.actionText), 1)
              ]),
              _: 1
            })
          ])
        ])) : x("", !0)
      ]),
      _: 3
    }));
  }
}), Et = { class: "m-toast__message" }, Ft = { class: "m-toast__actions" }, j = /* @__PURE__ */ v({
  name: "MToast",
  __name: "m-toast",
  props: {
    modelValue: { type: Boolean, default: !1 },
    message: {},
    type: { default: "info" },
    duration: { default: 4e3 },
    actionText: { default: void 0 }
  },
  emits: ["update:modelValue", "click:action", "close"],
  setup(a, { emit: t }) {
    const e = a, s = t;
    let n = () => {
    };
    Q(() => [e.modelValue, e.duration], () => {
      n(), n = e.modelValue && e.duration > 0 ? Ye(e.duration, i) : () => {
      };
    }, { immediate: !0 }), G(() => n());
    const o = () => {
      s("click:action");
    };
    function i() {
      s("update:modelValue", !1), s("close");
    }
    return (d, p) => (u(), f("div", {
      class: S(h(De)(e, e.modelValue))
    }, [
      g("span", Et, _(e.message), 1),
      g("div", Ft, [
        e.actionText ? (u(), y(D, {
          key: 0,
          variant: "text",
          size: "small",
          color: "primary",
          onClick: o
        }, {
          default: r(() => [
            T(_(e.actionText), 1)
          ]),
          _: 1
        })) : x("", !0),
        w(D, {
          variant: "plain",
          size: "x-small",
          icon: "",
          onClick: i
        }, {
          default: r(() => [...p[0] || (p[0] = [
            T(" × ", -1)
          ])]),
          _: 1
        })
      ])
    ], 2));
  }
}), Ot = /* @__PURE__ */ v({
  name: "MStatStrip",
  __name: "m-stat-strip",
  props: {
    stats: {},
    columns: { default: 4 }
  },
  setup(a) {
    const t = a, e = m(() => we(t.columns));
    return (s, n) => (u(), f("div", {
      class: "m-stat-strip",
      style: I(e.value)
    }, [
      (u(!0), f(P, null, M(t.stats, (l, o) => (u(), y(ee, {
        key: `${l.label}-${o}`,
        label: l.label,
        value: l.value,
        subtext: l.subtext,
        trend: l.trend,
        "trend-value": l.trendValue,
        icon: l.icon
      }, null, 8, ["label", "value", "subtext", "trend", "trend-value", "icon"]))), 128))
    ], 4));
  }
}), Kt = ["aria-selected", "disabled", "onClick"], Wt = {
  key: 0,
  class: "m-tabs-nav__icon"
}, Ht = {
  key: 1,
  class: "m-tabs-nav__badge"
}, jt = /* @__PURE__ */ v({
  name: "MTabsNav",
  __name: "m-tabs-nav",
  props: {
    tabs: {},
    modelValue: { default: void 0 },
    grow: { type: Boolean, default: !1 },
    align: { default: "start" }
  },
  emits: ["update:modelValue", "tabChange"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = m({
      get: () => e.modelValue || (e.tabs[0] ? e.tabs[0].id : ""),
      set: (o) => {
        s("update:modelValue", o), s("tabChange", o);
      }
    }), l = (o) => {
      o.disabled || (n.value = o.id);
    };
    return (o, i) => (u(), f("nav", {
      class: S(h(Ae)(e)),
      role: "tablist"
    }, [
      (u(!0), f(P, null, M(e.tabs, (d) => (u(), f("button", {
        key: d.id,
        type: "button",
        role: "tab",
        "aria-selected": n.value === d.id,
        disabled: d.disabled,
        class: S([
          "m-tabs-nav__item",
          { "m-tabs-nav__item--active": n.value === d.id }
        ]),
        onClick: (p) => l(d)
      }, [
        d.icon ? (u(), f("span", Wt, _(d.icon), 1)) : x("", !0),
        g("span", null, _(d.label), 1),
        d.badge ? (u(), f("span", Ht, _(d.badge), 1)) : x("", !0)
      ], 10, Kt))), 128))
    ], 2));
  }
}), qt = { class: "m-action-bar__start" }, Qt = {
  key: 0,
  class: "m-action-bar__title"
}, Jt = {
  key: 0,
  class: "m-action-bar__center"
}, Yt = {
  key: 1,
  class: "m-action-bar__end"
}, Zt = /* @__PURE__ */ v({
  name: "MActionBar",
  __name: "m-action-bar",
  props: {
    title: { default: void 0 },
    position: { default: "static" },
    bordered: { type: Boolean, default: !0 }
  },
  setup(a) {
    const t = a;
    return (e, s) => (u(), y(U, {
      class: S(h(Pe)(t))
    }, {
      default: r(() => [
        g("div", qt, [
          c(e.$slots, "start", {}, () => [
            t.title ? (u(), f("h2", Qt, _(t.title), 1)) : x("", !0)
          ])
        ]),
        e.$slots.default ? (u(), f("div", Jt, [
          c(e.$slots, "default")
        ])) : x("", !0),
        e.$slots.end ? (u(), f("div", Yt, [
          c(e.$slots, "end")
        ])) : x("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ea = { class: "m-data-table__table" }, ta = ["onClick"], aa = {
  key: 0,
  class: "m-data-table__sort-icon"
}, la = { key: 0 }, sa = ["colspan"], oa = ["onClick"], na = /* @__PURE__ */ v({
  __name: "m-data-table",
  props: {
    headers: {},
    items: {},
    loading: { type: Boolean, default: !1 },
    emptyText: { default: "No records found" },
    itemKey: { default: "id" },
    sortBy: { default: null },
    sortDesc: { type: Boolean, default: !1 },
    hoverable: { type: Boolean, default: !0 },
    dense: { type: Boolean, default: !1 }
  },
  emits: ["click:row", "update:sort"],
  setup(a, { emit: t }) {
    const e = a, s = t, n = m(() => Me(e)), l = m(() => e.items.length > 0), o = m(() => !e.loading && !l.value), i = (p) => {
      Ne(p, !0) && s("update:sort", Ie({ sortBy: e.sortBy, sortDesc: e.sortDesc }, p.key));
    }, d = (p) => {
      s("click:row", p);
    };
    return (p, C) => (u(), f("div", {
      class: S(n.value)
    }, [
      a.loading ? (u(), y(Z, {
        key: 0,
        indeterminate: "",
        color: "primary"
      })) : x("", !0),
      g("table", ea, [
        g("thead", null, [
          g("tr", null, [
            (u(!0), f(P, null, M(a.headers, (b) => (u(), f("th", {
              key: b.key,
              class: S([
                "m-data-table__th",
                b.sortable && "m-data-table__th--sortable",
                b.align && `m-data-table__th--align-${b.align}`
              ]),
              onClick: (N) => i(b)
            }, [
              c(p.$slots, `header.${b.key}`, { header: b }, () => [
                T(_(b.title) + " ", 1),
                a.sortBy === b.key ? (u(), f("span", aa, _(a.sortDesc ? "▼" : "▲"), 1)) : x("", !0)
              ])
            ], 10, ta))), 128))
          ])
        ]),
        g("tbody", null, [
          o.value ? (u(), f("tr", la, [
            g("td", {
              colspan: a.headers.length,
              class: "m-data-table__empty"
            }, [
              c(p.$slots, "empty", {}, () => [
                T(_(a.emptyText), 1)
              ])
            ], 8, sa)
          ])) : x("", !0),
          (u(!0), f(P, null, M(a.items, (b, N) => (u(), f("tr", {
            key: h(ze)(b, a.itemKey, N),
            class: "m-data-table__tr",
            onClick: (A) => d(b)
          }, [
            (u(!0), f(P, null, M(a.headers, (A) => (u(), f("td", {
              key: A.key,
              class: S([
                "m-data-table__td",
                A.align && `m-data-table__td--align-${A.align}`
              ])
            }, [
              c(p.$slots, `item.${A.key}`, {
                item: b,
                value: h(O)(b, A)
              }, () => [
                T(_(h(O)(b, A)), 1)
              ])
            ], 2))), 128))
          ], 8, oa))), 128))
        ])
      ])
    ], 2));
  }
}), te = (...a) => {
  const t = Ze(...a);
  return !!le() && G(t), t;
}, ae = (a, t) => (te(a.stop), !!t.immediate && a.start(), a), Xa = (a, t, e = {}) => ae(et(a, t), e), Ta = (a, t, e = {}) => ae(tt(a, t), e), Da = (a, t = {}) => {
  const { immediate: e = !0 } = t, s = E(null), n = E(null), l = q(e), o = at(a, (i) => {
    s.value = i.data, n.value = i.error, l.value = i.isLoading;
  }, { isLoading: e });
  return te(o.cancel), e && o.run(), { data: s, error: n, isLoading: l, execute: o.run };
}, wa = (a, ...t) => {
  const e = lt(...t), s = m(() => e(se(a))), n = m(() => s.value.length), l = m(() => n.value > 0);
  return { filtered: s, count: n, hasMatches: l };
}, Aa = () => ({
  install(a) {
    a.component("XBtn", D), a.component("XCard", R), a.component("XChip", st), a.component("XDialog", z), a.component("x-dialog", z), a.component("XModal", z), a.component("x-modal", z), a.component("XSheet", U), a.component("XTextField", Y), a.component("XAvatar", rt), a.component("XBadge", dt), a.component("XCheckbox", ut), a.component("XSwitch", ct), a.component("XDivider", mt), a.component("XSkeleton", pt), a.component("XAlert", ft), a.component("XProgressLinear", Z), a.component("XTooltip", vt), a.component("XMenu", K), a.component("x-menu", K), a.component("XList", W), a.component("x-list", W), a.component("XListItem", H), a.component("x-list-item", H), a.component("XText", yt), a.component("XStack", _t), a.component("XGrid", ht), a.component("XTextarea", bt), a.component("XNavDrawer", gt), a.component("MConfirmDialog", Bt), a.component("MKpiTile", ee), a.component("MSearchInput", At), a.component("MPagination", Nt), a.component("MEmptyState", Ut), a.component("MToast", j), a.component("m-toast", j), a.component("MStatStrip", Ot), a.component("MTabsNav", jt), a.component("MActionBar", Zt), a.component("MDataTable", na);
  }
});
export {
  Zt as MActionBar,
  Bt as MConfirmDialog,
  na as MDataTable,
  Ut as MEmptyState,
  ee as MKpiTile,
  Nt as MPagination,
  At as MSearchInput,
  Ot as MStatStrip,
  jt as MTabsNav,
  j as MToast,
  ft as XAlert,
  rt as XAvatar,
  dt as XBadge,
  D as XBtn,
  R as XCard,
  ut as XCheckbox,
  st as XChip,
  z as XDialog,
  mt as XDivider,
  ht as XGrid,
  W as XList,
  H as XListItem,
  K as XMenu,
  z as XModal,
  gt as XNavDrawer,
  Z as XProgressLinear,
  U as XSheet,
  pt as XSkeleton,
  _t as XStack,
  ct as XSwitch,
  yt as XText,
  Y as XTextField,
  bt as XTextarea,
  vt as XTooltip,
  Ye as after,
  za as all,
  Na as allPass,
  Ia as any,
  La as anyPass,
  Ga as assertRuleTree,
  at as createAsyncRunner,
  Je as createDebounce,
  Ze as createDisposer,
  Ra as createLatestGate,
  lt as createPredicateFilter,
  tt as createRestartableInterval,
  et as createRestartableTimeout,
  Ua as createRuleSet,
  Aa as createXAtomsPlugin,
  Ea as deepFreeze,
  Aa as default,
  Fa as evaluateRules,
  Oa as every,
  Ka as fallback,
  Wa as glassTokens,
  Ha as isErr,
  ja as isOk,
  qa as listen,
  Qa as mapResult,
  Ja as matchesAllPredicates,
  Ya as matchesAnyPattern,
  Za as none,
  el as nonePass,
  tl as normalizeArray,
  al as not,
  ll as radiiTokens,
  sl as ruleTree,
  ol as spaceTokens,
  nl as starshipColors,
  fl as starshipDarkTheme,
  vl as starshipLightTheme,
  il as toError,
  rl as toResult,
  dl as toResultSync,
  ul as toStyleString,
  cl as toneColors,
  ml as unwrapOr,
  Da as useAsyncData,
  te as useDisposer,
  wa as usePredicateFilter,
  Ta as useSelfCleaningInterval,
  Xa as useSelfCleaningTimeout
};
