import { after as e, all as t, allPass as n, any as r, anyPass as i, createAsyncRunner as a, createDebounce as o, createDisposer as s, createLatestGate as c, createPredicateFilter as ee, createRestartableInterval as l, createRestartableTimeout as te, createRuleSet as ne, deepFreeze as re, every as ie, fallback as ae, glassTokens as oe, isErr as se, isOk as ce, listen as le, mapResult as ue, matchesAllPredicates as de, matchesAnyPattern as fe, none as pe, nonePass as me, normalizeArray as he, not as ge, radiiTokens as _e, spaceTokens as ve, starshipColors as ye, toError as be, toResult as xe, toResultSync as Se, toStyleString as Ce, toneColors as we, unwrapOr as Te } from "./core.js";
import { A as Ee, G as De, I as Oe, M as ke, O as Ae, P as je, R as Me, U as Ne, W as Pe, X as Fe, Y as Ie, Z as Le, _ as Re, a as ze, b as Be, d as Ve, f as He, g as Ue, h as We, i as Ge, j as Ke, k as qe, l as Je, m as Ye, o as Xe, s as Ze, t as Qe, u as $e, v as et, y as tt } from "./chunks/controllers-CVYLMjJ8.js";
import nt, { starshipLightTheme as rt } from "./theme.js";
import { Fragment as u, computed as d, createBlock as f, createCommentVNode as p, createElementBlock as m, createElementVNode as h, createSlots as g, createTextVNode as _, createVNode as v, defineComponent as y, getCurrentScope as it, guardReactiveProps as b, mergeProps as x, normalizeClass as S, normalizeProps as C, normalizeStyle as w, onScopeDispose as T, openBlock as E, ref as at, renderList as D, renderSlot as O, resolveDynamicComponent as k, shallowRef as ot, toDisplayString as A, toValue as st, unref as j, useAttrs as M, watch as ct, withCtx as N } from "vue";
import { VBtn as lt } from "vuetify/components/VBtn";
import { VCard as ut } from "vuetify/components/VCard";
import { VChip as dt } from "vuetify/components/VChip";
import { VDialog as ft } from "vuetify/components/VDialog";
import { VSheet as pt } from "vuetify/components/VSheet";
import { VTextField as mt } from "vuetify/components/VTextField";
import { VAvatar as ht } from "vuetify/components/VAvatar";
import { VBadge as gt } from "vuetify/components/VBadge";
import { VCheckbox as _t } from "vuetify/components/VCheckbox";
import { VSwitch as vt } from "vuetify/components/VSwitch";
import { VDivider as yt } from "vuetify/components/VDivider";
import { VAlert as bt } from "vuetify/components/VAlert";
import { VProgressLinear as xt } from "vuetify/components/VProgressLinear";
import { VTooltip as St } from "vuetify/components/VTooltip";
import { VMenu as Ct } from "vuetify/components/VMenu";
import { VList as wt, VListItem as Tt } from "vuetify/components/VList";
import { VTextarea as Et } from "vuetify/components/VTextarea";
import { VNavigationDrawer as Dt } from "vuetify/components/VNavigationDrawer";
//#endregion
//#region src/atoms/x-btn/x-btn.vue
var P = /* @__PURE__ */ y({
	name: "XBtn",
	inheritAttrs: !1,
	__name: "x-btn",
	props: {
		variant: { default: void 0 },
		color: { default: void 0 },
		size: { default: "default" },
		block: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		icon: {
			type: [String, Boolean],
			default: !1
		}
	},
	setup(e) {
		let t = e, n = M(), r = d(() => t.variant === "glass"), i = d(() => r.value ? "flat" : t.variant), a = d(() => {
			if (!r.value || t.color) return t.color;
		});
		return (e, o) => (E(), f(lt, x(j(n), {
			variant: i.value,
			color: a.value,
			size: t.size,
			block: t.block,
			loading: t.loading,
			disabled: t.disabled,
			icon: t.icon,
			class: ["x-btn", { "x-btn--glass": r.value }]
		}), g({
			default: N(() => [O(e.$slots, "default")]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: N(() => [O(e.$slots, "prepend")]),
				key: "0"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: N(() => [O(e.$slots, "append")]),
				key: "1"
			} : void 0,
			e.$slots.loader ? {
				name: "loader",
				fn: N(() => [O(e.$slots, "loader")]),
				key: "2"
			} : void 0
		]), 1040, [
			"variant",
			"color",
			"size",
			"block",
			"loading",
			"disabled",
			"icon",
			"class"
		]));
	}
}), F = /* @__PURE__ */ y({
	name: "XCard",
	inheritAttrs: !1,
	__name: "x-card",
	props: {
		variant: { default: void 0 },
		color: { default: void 0 },
		loading: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		hover: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = M(), r = d(() => t.variant === "glass"), i = d(() => r.value ? "flat" : t.variant);
		return (e, a) => (E(), f(ut, x(j(n), {
			variant: i.value,
			color: t.color,
			loading: t.loading,
			disabled: t.disabled,
			class: ["x-card", {
				"x-card--glass": r.value,
				"x-card--hover": t.hover
			}]
		}), g({
			default: N(() => [O(e.$slots, "default")]),
			_: 2
		}, [
			e.$slots.image ? {
				name: "image",
				fn: N(() => [O(e.$slots, "image")]),
				key: "0"
			} : void 0,
			e.$slots.prepend ? {
				name: "prepend",
				fn: N(() => [O(e.$slots, "prepend")]),
				key: "1"
			} : void 0,
			e.$slots.title ? {
				name: "title",
				fn: N(() => [O(e.$slots, "title")]),
				key: "2"
			} : void 0,
			e.$slots.subtitle ? {
				name: "subtitle",
				fn: N(() => [O(e.$slots, "subtitle")]),
				key: "3"
			} : void 0,
			e.$slots.text ? {
				name: "text",
				fn: N(() => [O(e.$slots, "text")]),
				key: "4"
			} : void 0,
			e.$slots.actions ? {
				name: "actions",
				fn: N(() => [O(e.$slots, "actions")]),
				key: "5"
			} : void 0,
			e.$slots.loader ? {
				name: "loader",
				fn: N((t) => [O(e.$slots, "loader", C(b(t || {})))]),
				key: "6"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: N(() => [O(e.$slots, "append")]),
				key: "7"
			} : void 0
		]), 1040, [
			"variant",
			"color",
			"loading",
			"disabled",
			"class"
		]));
	}
}), Ot = /* @__PURE__ */ y({
	name: "XChip",
	inheritAttrs: !1,
	__name: "x-chip",
	props: {
		variant: { default: void 0 },
		color: { default: void 0 },
		size: { default: "default" },
		closable: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		filter: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click:close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d(() => n.variant === "glass"), o = d(() => a.value ? "flat" : n.variant), s = () => {
			r("click:close");
		};
		return (e, t) => (E(), f(dt, x(j(i), {
			variant: o.value,
			color: n.color,
			size: n.size,
			closable: n.closable,
			disabled: n.disabled,
			filter: n.filter,
			class: ["x-chip", { "x-chip--glass": a.value }],
			"onClick:close": s
		}), g({
			default: N((t) => [O(e.$slots, "default", C(b(t || {})))]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: N(() => [O(e.$slots, "prepend")]),
				key: "0"
			} : void 0,
			e.$slots.close ? {
				name: "close",
				fn: N(() => [O(e.$slots, "close")]),
				key: "1"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: N(() => [O(e.$slots, "append")]),
				key: "2"
			} : void 0
		]), 1040, [
			"variant",
			"color",
			"size",
			"closable",
			"disabled",
			"filter",
			"class"
		]));
	}
}), kt = { class: "x-dialog__actions" }, I = /* @__PURE__ */ y({
	name: "XDialog",
	inheritAttrs: !1,
	__name: "x-dialog",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		maxWidth: { default: 600 },
		width: { default: void 0 },
		persistent: {
			type: Boolean,
			default: !1
		},
		scrollable: {
			type: Boolean,
			default: !1
		},
		fullscreen: {
			type: Boolean,
			default: !1
		},
		transition: {}
	},
	emits: ["update:modelValue", "update:model-value"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d({
			get: () => n.modelValue,
			set: (e) => {
				r("update:modelValue", e), r("update:model-value", e);
			}
		});
		return (e, t) => (E(), f(ft, x({
			modelValue: a.value,
			"onUpdate:modelValue": t[0] ||= (e) => a.value = e
		}, j(i), {
			"max-width": n.maxWidth,
			width: n.width,
			persistent: n.persistent,
			scrollable: n.scrollable,
			fullscreen: n.fullscreen,
			transition: n.transition,
			class: "x-dialog"
		}), g({
			default: N(() => [v(ut, { class: "x-dialog__surface" }, g({
				default: N(() => [O(e.$slots, "default")]),
				_: 2
			}, [e.$slots.title ? {
				name: "title",
				fn: N(() => [O(e.$slots, "title")]),
				key: "0"
			} : void 0, e.$slots.actions ? {
				name: "actions",
				fn: N(() => [h("div", kt, [O(e.$slots, "actions")])]),
				key: "1"
			} : void 0]), 1024)]),
			_: 2
		}, [e.$slots.activator ? {
			name: "activator",
			fn: N((t) => [O(e.$slots, "activator", C(b(t || {})))]),
			key: "0"
		} : void 0]), 1040, [
			"modelValue",
			"max-width",
			"width",
			"persistent",
			"scrollable",
			"fullscreen",
			"transition"
		]));
	}
}), L = /* @__PURE__ */ y({
	name: "XSheet",
	inheritAttrs: !1,
	__name: "x-sheet",
	props: {
		color: { default: void 0 },
		elevation: { default: void 0 },
		rounded: {
			type: [
				Boolean,
				String,
				Number
			],
			default: void 0
		},
		border: {
			type: [
				Boolean,
				String,
				Number
			],
			default: void 0
		},
		transparent: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = M(), r = d(() => t.transparent ? "transparent" : t.color);
		return (e, i) => (E(), f(pt, x(j(n), {
			color: r.value,
			elevation: t.elevation,
			rounded: t.rounded,
			border: t.border,
			class: ["x-sheet", { "x-sheet--transparent": t.transparent }]
		}), {
			default: N(() => [O(e.$slots, "default")]),
			_: 3
		}, 16, [
			"color",
			"elevation",
			"rounded",
			"border",
			"class"
		]));
	}
}), R = /* @__PURE__ */ y({
	name: "XTextField",
	inheritAttrs: !1,
	__name: "x-text-field",
	props: {
		modelValue: { default: "" },
		label: { default: void 0 },
		placeholder: { default: void 0 },
		variant: { default: void 0 },
		density: { default: "comfortable" },
		hideDetails: {
			type: [Boolean, String],
			default: !1
		},
		clearable: {
			type: Boolean,
			default: !1
		},
		type: { default: "text" },
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		prefix: { default: void 0 },
		suffix: { default: void 0 }
	},
	emits: ["update:modelValue", "click:clear"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), o = () => {
			r("click:clear");
		};
		return (e, t) => (E(), f(mt, x({
			modelValue: a.value,
			"onUpdate:modelValue": t[0] ||= (e) => a.value = e
		}, j(i), {
			label: n.label,
			placeholder: n.placeholder,
			variant: n.variant,
			density: n.density,
			"hide-details": n.hideDetails,
			clearable: n.clearable,
			type: n.type,
			disabled: n.disabled,
			readonly: n.readonly,
			prefix: n.prefix,
			suffix: n.suffix,
			class: "x-text-field",
			"onClick:clear": o
		}), g({ _: 2 }, [
			e.$slots["prepend-inner"] ? {
				name: "prepend-inner",
				fn: N((t) => [O(e.$slots, "prepend-inner", C(b(t || {})))]),
				key: "0"
			} : void 0,
			e.$slots["append-inner"] ? {
				name: "append-inner",
				fn: N((t) => [O(e.$slots, "append-inner", C(b(t || {})))]),
				key: "1"
			} : void 0,
			e.$slots.prepend ? {
				name: "prepend",
				fn: N((t) => [O(e.$slots, "prepend", C(b(t || {})))]),
				key: "2"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: N((t) => [O(e.$slots, "append", C(b(t || {})))]),
				key: "3"
			} : void 0
		]), 1040, [
			"modelValue",
			"label",
			"placeholder",
			"variant",
			"density",
			"hide-details",
			"clearable",
			"type",
			"disabled",
			"readonly",
			"prefix",
			"suffix"
		]));
	}
}), At = ["src", "alt"], jt = { key: 1 }, z = /* @__PURE__ */ y({
	name: "XAvatar",
	inheritAttrs: !1,
	__name: "x-avatar",
	props: {
		src: { default: void 0 },
		alt: { default: void 0 },
		text: { default: void 0 },
		size: { default: "default" },
		rounded: {
			type: [Boolean, String],
			default: void 0
		},
		bordered: {
			type: Boolean,
			default: !1
		},
		status: { default: void 0 }
	},
	setup(e) {
		let t = e, n = M(), r = d(() => Le(t.text || t.alt)), i = d(() => !!t.src), a = d(() => !!t.status);
		return (e, o) => (E(), f(ht, x(j(n), {
			size: t.size,
			rounded: t.rounded,
			class: j(Fe)(t)
		}), {
			default: N(() => [i.value ? (E(), m("img", {
				key: 0,
				src: t.src,
				alt: t.alt || "Avatar"
			}, null, 8, At)) : r.value ? (E(), m("span", jt, A(r.value), 1)) : O(e.$slots, "default", {}, void 0, void 0, 2), a.value ? (E(), m("span", {
				key: 3,
				class: S(["x-avatar__status-dot", `x-avatar__status-dot--${t.status}`])
			}, null, 2)) : p("", !0)]),
			_: 3
		}, 16, [
			"size",
			"rounded",
			"class"
		]));
	}
}), B = /* @__PURE__ */ y({
	name: "XBadge",
	inheritAttrs: !1,
	__name: "x-badge",
	props: {
		content: { default: void 0 },
		color: { default: "primary" },
		dot: {
			type: Boolean,
			default: !1
		},
		inline: {
			type: Boolean,
			default: !1
		},
		max: { default: 99 },
		floating: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = M(), r = d(() => Ie(t.content, t.max));
		return d(() => !!n.default), (e, i) => (E(), f(gt, x(j(n), {
			content: r.value,
			color: t.color,
			dot: t.dot,
			inline: t.inline,
			max: t.max,
			floating: t.floating,
			class: "x-badge"
		}), {
			default: N(() => [O(e.$slots, "default")]),
			_: 3
		}, 16, [
			"content",
			"color",
			"dot",
			"inline",
			"max",
			"floating"
		]));
	}
}), V = /* @__PURE__ */ y({
	name: "XCheckbox",
	inheritAttrs: !1,
	__name: "x-checkbox",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		label: { default: void 0 },
		disabled: {
			type: Boolean,
			default: !1
		},
		indeterminate: {
			type: Boolean,
			default: !1
		},
		color: { default: "primary" },
		hideDetails: {
			type: [Boolean, String],
			default: "auto"
		}
	},
	emits: ["update:modelValue", "change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d({
			get: () => n.modelValue,
			set: (e) => {
				r("update:modelValue", e), r("change", e);
			}
		});
		return (e, t) => (E(), f(_t, x({
			modelValue: a.value,
			"onUpdate:modelValue": t[0] ||= (e) => a.value = e
		}, j(i), {
			label: n.label,
			disabled: n.disabled,
			indeterminate: n.indeterminate,
			color: n.color,
			"hide-details": n.hideDetails,
			class: "x-checkbox"
		}), g({ _: 2 }, [e.$slots.label ? {
			name: "label",
			fn: N((t) => [O(e.$slots, "label", C(b(t || {})))]),
			key: "0"
		} : void 0, e.$slots.default ? {
			name: "default",
			fn: N((t) => [O(e.$slots, "default", C(b(t || {})))]),
			key: "1"
		} : void 0]), 1040, [
			"modelValue",
			"label",
			"disabled",
			"indeterminate",
			"color",
			"hide-details"
		]));
	}
}), H = /* @__PURE__ */ y({
	name: "XSwitch",
	inheritAttrs: !1,
	__name: "x-switch",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		label: { default: void 0 },
		disabled: {
			type: Boolean,
			default: !1
		},
		color: { default: "primary" },
		hideDetails: {
			type: [Boolean, String],
			default: "auto"
		}
	},
	emits: ["update:modelValue", "change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d({
			get: () => n.modelValue,
			set: (e) => {
				r("update:modelValue", e), r("change", e);
			}
		});
		return (e, t) => (E(), f(vt, x({
			modelValue: a.value,
			"onUpdate:modelValue": t[0] ||= (e) => a.value = e
		}, j(i), {
			label: n.label,
			disabled: n.disabled,
			color: n.color,
			"hide-details": n.hideDetails,
			class: "x-switch"
		}), g({ _: 2 }, [e.$slots.label ? {
			name: "label",
			fn: N((t) => [O(e.$slots, "label", C(b(t || {})))]),
			key: "0"
		} : void 0, e.$slots.thumb ? {
			name: "thumb",
			fn: N((t) => [O(e.$slots, "thumb", C(b(t || {})))]),
			key: "1"
		} : void 0]), 1040, [
			"modelValue",
			"label",
			"disabled",
			"color",
			"hide-details"
		]));
	}
}), U = /* @__PURE__ */ y({
	name: "XDivider",
	inheritAttrs: !1,
	__name: "x-divider",
	props: {
		vertical: {
			type: Boolean,
			default: !1
		},
		inset: {
			type: Boolean,
			default: !1
		},
		color: { default: void 0 },
		thickness: { default: void 0 }
	},
	setup(e) {
		let t = e, n = M(), r = d(() => De(t));
		return (e, i) => (E(), f(yt, x(j(n), {
			vertical: t.vertical,
			inset: t.inset,
			color: t.color,
			thickness: t.thickness,
			class: r.value
		}), null, 16, [
			"vertical",
			"inset",
			"color",
			"thickness",
			"class"
		]));
	}
}), W = /* @__PURE__ */ y({
	name: "XSkeleton",
	__name: "x-skeleton",
	props: {
		shape: { default: "rounded" },
		animation: { default: "shimmer" },
		width: { default: "100%" },
		height: { default: "1rem" },
		delay: { default: "0s" }
	},
	setup(e) {
		let t = e, n = d(() => Ne(t)), r = d(() => Pe(t.width)), i = d(() => Pe(t.height));
		return (e, a) => (E(), m("div", {
			class: S(n.value),
			style: w({
				width: r.value,
				height: i.value,
				"--x-skeleton-delay": t.delay
			})
		}, null, 6));
	}
}), G = /* @__PURE__ */ y({
	name: "XAlert",
	inheritAttrs: !1,
	__name: "x-alert",
	props: {
		type: { default: "info" },
		title: { default: void 0 },
		text: { default: void 0 },
		closable: {
			type: Boolean,
			default: !1
		},
		variant: { default: void 0 }
	},
	emits: ["click:close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d(() => n.variant === "glass" ? "flat" : n.variant), o = () => {
			r("click:close");
		};
		return (e, t) => (E(), f(bt, x(j(i), {
			type: n.type,
			title: n.title,
			text: n.text,
			closable: n.closable,
			variant: a.value,
			class: "x-alert",
			"onClick:close": o
		}), g({
			default: N(() => [O(e.$slots, "default")]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: N(() => [O(e.$slots, "prepend")]),
				key: "0"
			} : void 0,
			e.$slots.title ? {
				name: "title",
				fn: N(() => [O(e.$slots, "title")]),
				key: "1"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: N(() => [O(e.$slots, "append")]),
				key: "2"
			} : void 0,
			e.$slots.close ? {
				name: "close",
				fn: N((t) => [O(e.$slots, "close", C(b(t || {})))]),
				key: "3"
			} : void 0
		]), 1040, [
			"type",
			"title",
			"text",
			"closable",
			"variant"
		]));
	}
}), K = /* @__PURE__ */ y({
	name: "XProgressLinear",
	inheritAttrs: !1,
	__name: "x-progress-linear",
	props: {
		modelValue: { default: 0 },
		indeterminate: {
			type: Boolean,
			default: !1
		},
		color: { default: "primary" },
		height: { default: 4 },
		rounded: {
			type: Boolean,
			default: !0
		},
		striped: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = M(), r = d(() => Me(t.modelValue));
		return (e, i) => (E(), f(xt, x(j(n), {
			"model-value": r.value,
			indeterminate: t.indeterminate,
			color: t.color,
			height: t.height,
			rounded: t.rounded,
			striped: t.striped,
			class: "x-progress-linear"
		}), null, 16, [
			"model-value",
			"indeterminate",
			"color",
			"height",
			"rounded",
			"striped"
		]));
	}
}), Mt = /* @__PURE__ */ y({
	name: "XTooltip",
	inheritAttrs: !1,
	__name: "x-tooltip",
	props: {
		text: { default: void 0 },
		location: { default: "top" },
		disabled: {
			type: Boolean,
			default: !1
		},
		openDelay: { default: 150 },
		closeDelay: { default: 100 }
	},
	setup(e) {
		let t = e, n = M();
		return (e, r) => (E(), f(St, x(j(n), {
			text: t.text,
			location: t.location,
			disabled: t.disabled,
			"open-delay": t.openDelay,
			"close-delay": t.closeDelay
		}), g({
			activator: N(({ props: t }) => [O(e.$slots, "activator", { props: t }, () => [h("span", C(b(t)), [O(e.$slots, "default")], 16)])]),
			_: 2
		}, [e.$slots.default ? {
			name: "default",
			fn: N(() => [O(e.$slots, "default")]),
			key: "0"
		} : void 0]), 1040, [
			"text",
			"location",
			"disabled",
			"open-delay",
			"close-delay"
		]));
	}
}), q = /* @__PURE__ */ y({
	name: "XMenu",
	inheritAttrs: !1,
	__name: "x-menu",
	props: {
		modelValue: {
			type: Boolean,
			default: void 0
		},
		closeOnContentClick: {
			type: Boolean,
			default: !0
		},
		location: { default: void 0 },
		origin: { default: void 0 },
		transition: { default: void 0 },
		disabled: {
			type: Boolean,
			default: !1
		},
		offset: { default: void 0 }
	},
	emits: ["update:modelValue", "update:model-value"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", !!e)
		});
		return (e, t) => (E(), f(Ct, x(j(i), {
			"model-value": n.modelValue === void 0 ? void 0 : a.value,
			"close-on-content-click": n.closeOnContentClick,
			location: n.location,
			origin: n.origin,
			transition: n.transition,
			disabled: n.disabled,
			offset: n.offset,
			class: "x-menu",
			"onUpdate:modelValue": t[0] ||= (e) => n.modelValue === void 0 ? void 0 : r("update:modelValue", e)
		}), g({
			default: N((t) => [O(e.$slots, "default", C(b(t || {})))]),
			_: 2
		}, [e.$slots.activator ? {
			name: "activator",
			fn: N((t) => [O(e.$slots, "activator", C(b(t || {})))]),
			key: "0"
		} : void 0]), 1040, [
			"model-value",
			"close-on-content-click",
			"location",
			"origin",
			"transition",
			"disabled",
			"offset"
		]));
	}
}), J = /* @__PURE__ */ y({
	name: "XList",
	inheritAttrs: !1,
	__name: "x-list",
	props: {
		density: { default: "default" },
		lines: {
			type: [String, Boolean],
			default: "one"
		},
		nav: {
			type: Boolean,
			default: !1
		},
		color: { default: void 0 },
		variant: { default: void 0 },
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = M(), r = d(() => t.variant === "glass"), i = d(() => Oe(t.variant));
		return (e, a) => (E(), f(wt, x(j(n), {
			density: t.density,
			lines: t.lines,
			nav: t.nav,
			color: t.color,
			variant: i.value,
			disabled: t.disabled,
			class: ["x-list", { "x-list--glass": r.value }]
		}), {
			default: N(() => [O(e.$slots, "default")]),
			_: 3
		}, 16, [
			"density",
			"lines",
			"nav",
			"color",
			"variant",
			"disabled",
			"class"
		]));
	}
}), Y = /* @__PURE__ */ y({
	name: "XListItem",
	inheritAttrs: !1,
	__name: "x-list-item",
	props: {
		title: { default: void 0 },
		subtitle: { default: void 0 },
		value: { default: void 0 },
		active: {
			type: Boolean,
			default: void 0
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		color: { default: void 0 },
		density: { default: void 0 },
		lines: {
			type: [String, Boolean],
			default: void 0
		},
		variant: { default: void 0 },
		rounded: {
			type: [
				Boolean,
				String,
				Number
			],
			default: void 0
		},
		ripple: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, n = M(), r = d(() => t.variant === "glass"), i = d(() => je(t.variant));
		return (e, a) => (E(), f(Tt, x(j(n), {
			title: t.title,
			subtitle: t.subtitle,
			value: t.value,
			active: t.active,
			disabled: t.disabled,
			color: t.color,
			density: t.density,
			lines: t.lines,
			variant: i.value,
			rounded: t.rounded,
			ripple: t.ripple,
			class: ["x-list-item", { "x-list-item--glass": r.value }]
		}), g({
			default: N((t) => [O(e.$slots, "default", C(b(t || {})))]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: N((t) => [O(e.$slots, "prepend", C(b(t || {})))]),
				key: "0"
			} : void 0,
			e.$slots.title ? {
				name: "title",
				fn: N((t) => [O(e.$slots, "title", C(b(t || {})))]),
				key: "1"
			} : void 0,
			e.$slots.subtitle ? {
				name: "subtitle",
				fn: N((t) => [O(e.$slots, "subtitle", C(b(t || {})))]),
				key: "2"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: N((t) => [O(e.$slots, "append", C(b(t || {})))]),
				key: "3"
			} : void 0
		]), 1040, [
			"title",
			"subtitle",
			"value",
			"active",
			"disabled",
			"color",
			"density",
			"lines",
			"variant",
			"rounded",
			"ripple",
			"class"
		]));
	}
}), Nt = /* @__PURE__ */ y({
	name: "XText",
	__name: "x-text",
	props: {
		tag: { default: void 0 },
		variant: { default: "body" },
		tone: { default: void 0 },
		weight: { default: void 0 },
		align: { default: void 0 },
		truncate: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = d(() => ke(t)), r = d(() => Ke(t));
		return (e, t) => (E(), f(k(n.value), { class: S(r.value) }, {
			default: N(() => [O(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), Pt = /* @__PURE__ */ y({
	name: "XStack",
	__name: "x-stack",
	props: {
		direction: { default: "column" },
		gap: { default: "md" },
		align: { default: void 0 },
		justify: { default: void 0 },
		wrap: {
			type: Boolean,
			default: !1
		},
		tag: { default: "div" }
	},
	setup(e) {
		let t = e, n = d(() => Ee(t));
		return (e, r) => (E(), f(k(t.tag), { class: S(n.value) }, {
			default: N(() => [O(e.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), Ft = /* @__PURE__ */ y({
	name: "XGrid",
	__name: "x-grid",
	props: {
		columns: { default: 1 },
		minItemWidth: { default: void 0 },
		gap: { default: "md" },
		align: { default: void 0 },
		tag: { default: "div" }
	},
	setup(e) {
		let t = e, n = d(() => Ae(t)), r = d(() => qe(t));
		return (e, i) => (E(), f(k(t.tag), {
			class: S(n.value),
			style: w(r.value)
		}, {
			default: N(() => [O(e.$slots, "default")]),
			_: 3
		}, 8, ["class", "style"]));
	}
}), It = /* @__PURE__ */ y({
	name: "XTextarea",
	inheritAttrs: !1,
	__name: "x-textarea",
	props: {
		modelValue: { default: "" },
		label: { default: void 0 },
		placeholder: { default: void 0 },
		rows: { default: 3 },
		autoGrow: {
			type: Boolean,
			default: !1
		},
		variant: { default: void 0 },
		density: { default: "comfortable" },
		hideDetails: {
			type: [Boolean, String],
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		maxlength: { default: void 0 }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		});
		return (e, t) => (E(), f(Et, x({
			modelValue: a.value,
			"onUpdate:modelValue": t[0] ||= (e) => a.value = e
		}, j(i), {
			label: n.label,
			placeholder: n.placeholder,
			rows: n.rows,
			"auto-grow": n.autoGrow,
			variant: n.variant,
			density: n.density,
			"hide-details": n.hideDetails,
			disabled: n.disabled,
			readonly: n.readonly,
			maxlength: n.maxlength,
			counter: n.maxlength,
			class: "x-textarea"
		}), null, 16, [
			"modelValue",
			"label",
			"placeholder",
			"rows",
			"auto-grow",
			"variant",
			"density",
			"hide-details",
			"disabled",
			"readonly",
			"maxlength",
			"counter"
		]));
	}
}), Lt = /* @__PURE__ */ y({
	name: "XNavDrawer",
	inheritAttrs: !1,
	__name: "x-nav-drawer",
	props: {
		modelValue: {
			type: Boolean,
			default: !0
		},
		location: { default: "start" },
		rail: {
			type: Boolean,
			default: !1
		},
		temporary: {
			type: Boolean,
			default: !1
		},
		permanent: {
			type: Boolean,
			default: !1
		},
		width: { default: 256 },
		floating: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = M(), a = d({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		});
		return (e, t) => (E(), f(Dt, x({
			modelValue: a.value,
			"onUpdate:modelValue": t[0] ||= (e) => a.value = e
		}, j(i), {
			location: n.location,
			rail: n.rail,
			temporary: n.temporary,
			permanent: n.permanent,
			width: n.width,
			floating: n.floating,
			class: "x-nav-drawer"
		}), g({
			default: N(() => [O(e.$slots, "default")]),
			_: 2
		}, [e.$slots.prepend ? {
			name: "prepend",
			fn: N(() => [O(e.$slots, "prepend")]),
			key: "0"
		} : void 0, e.$slots.append ? {
			name: "append",
			fn: N(() => [O(e.$slots, "append")]),
			key: "1"
		} : void 0]), 1040, [
			"modelValue",
			"location",
			"rail",
			"temporary",
			"permanent",
			"width",
			"floating"
		]));
	}
}), Rt = { class: "m-confirm-dialog__body" }, zt = { class: "m-confirm-dialog__title" }, Bt = { class: "m-confirm-dialog__message" }, Vt = /* @__PURE__ */ y({
	name: "MConfirmDialog",
	__name: "m-confirm-dialog",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		title: { default: "Confirm Action" },
		message: { default: "Are you sure you want to proceed?" },
		confirmText: { default: "Confirm" },
		cancelText: { default: "Cancel" },
		confirmColor: { default: "primary" },
		loading: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"confirm",
		"cancel"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = d({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), a = d(() => Be(n)), o = () => {
			r("cancel"), i.value = !1;
		}, s = () => {
			r("confirm");
		};
		return (e, t) => (E(), f(I, {
			modelValue: i.value,
			"onUpdate:modelValue": t[0] ||= (e) => i.value = e,
			"max-width": 480
		}, {
			actions: N(() => [v(P, {
				variant: "text",
				disabled: n.loading,
				onClick: o
			}, {
				default: N(() => [_(A(a.value.cancelText), 1)]),
				_: 1
			}, 8, ["disabled"]), v(P, {
				variant: "elevated",
				color: a.value.confirmColor,
				loading: n.loading,
				onClick: s
			}, {
				default: N(() => [_(A(a.value.confirmText), 1)]),
				_: 1
			}, 8, ["color", "loading"])]),
			default: N(() => [h("div", Rt, [h("h3", zt, A(n.title), 1), h("p", Bt, A(n.message), 1)])]),
			_: 1
		}, 8, ["modelValue"]));
	}
}), Ht = { class: "m-kpi-tile" }, Ut = { class: "m-kpi-tile__header" }, Wt = { class: "m-kpi-tile__label" }, Gt = {
	key: 0,
	class: "m-kpi-tile__icon"
}, Kt = { class: "m-kpi-tile__value" }, qt = {
	key: 0,
	class: "m-kpi-tile__footer"
}, Jt = {
	key: 1,
	class: "m-kpi-tile__subtext"
}, X = /* @__PURE__ */ y({
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
	setup(e) {
		let t = e, n = d(() => et(t.trend)), r = d(() => tt(t.trend)), i = d(() => !!(t.trend && t.trendValue));
		return (e, a) => (E(), f(F, {
			variant: "glass",
			hover: ""
		}, {
			default: N(() => [h("div", Ht, [
				h("div", Ut, [h("span", Wt, A(t.label), 1), O(e.$slots, "icon", {}, () => [t.icon ? (E(), m("span", Gt, A(t.icon), 1)) : p("", !0)])]),
				h("div", Kt, A(t.value), 1),
				t.subtext || i.value ? (E(), m("div", qt, [i.value ? (E(), m("span", {
					key: 0,
					class: S(["m-kpi-tile__trend", n.value])
				}, A(r.value) + A(t.trendValue), 3)) : p("", !0), t.subtext ? (E(), m("span", Jt, A(t.subtext), 1)) : p("", !0)])) : p("", !0)
			])]),
			_: 3
		}));
	}
}), Yt = /* @__PURE__ */ y({
	name: "MSearchInput",
	__name: "m-search-input",
	props: {
		modelValue: { default: "" },
		placeholder: { default: "Search..." },
		debounceMs: { default: 250 },
		loading: {
			type: Boolean,
			default: !1
		},
		clearable: {
			type: Boolean,
			default: !0
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "default" }
	},
	emits: [
		"update:modelValue",
		"search",
		"clear"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = at(n.modelValue), a = o((e) => {
			r("search", e);
		}, n.debounceMs);
		T(a.cancel), ct(() => n.modelValue, (e) => {
			i.value = e;
		});
		let s = (e) => {
			let t = String(e);
			i.value = t, r("update:modelValue", t), a(t);
		}, c = () => {
			i.value = "", r("update:modelValue", ""), r("clear"), r("search", "");
		};
		return (e, t) => (E(), m("div", { class: S(j(Re)(n)) }, [v(R, {
			"model-value": i.value,
			placeholder: n.placeholder,
			disabled: n.disabled,
			clearable: n.clearable,
			density: "compact",
			"hide-details": "",
			"onUpdate:modelValue": s,
			"onClick:clear": c
		}, g({
			"prepend-inner": N(() => [O(e.$slots, "prepend-inner", {}, () => [t[0] ||= h("span", { class: "m-search-input__icon" }, "🔍", -1)])]),
			_: 2
		}, [e.$slots["append-inner"] ? {
			name: "append-inner",
			fn: N((t) => [O(e.$slots, "append-inner", C(b(t || {})))]),
			key: "0"
		} : void 0]), 1032, [
			"model-value",
			"placeholder",
			"disabled",
			"clearable"
		])], 2));
	}
}), Xt = {
	key: 0,
	class: "m-pagination__info"
}, Zt = { key: 1 }, Qt = { class: "m-pagination__controls" }, Z = /* @__PURE__ */ y({
	name: "MPagination",
	__name: "m-pagination",
	props: {
		currentPage: {},
		totalPages: {},
		pageSize: { default: 20 },
		totalItems: { default: 0 },
		maxVisiblePages: { default: 5 },
		showRange: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:currentPage", "pageChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = d(() => We(n.currentPage, n.totalPages, n.maxVisiblePages)), a = d(() => Ye(n.currentPage, n.pageSize, n.totalItems)), o = d(() => n.currentPage > 1), s = d(() => n.currentPage < n.totalPages), c = (e) => {
			Ue(e, n.currentPage, n.totalPages) && (r("update:currentPage", e), r("pageChange", e));
		};
		return (e, t) => (E(), f(L, {
			transparent: "",
			class: "m-pagination"
		}, {
			default: N(() => [n.showRange && n.totalItems ? (E(), m("div", Xt, " Showing " + A(a.value.start) + " to " + A(a.value.end) + " of " + A(a.value.total) + " items ", 1)) : (E(), m("div", Zt)), h("div", Qt, [
				v(P, {
					variant: "glass",
					size: "small",
					disabled: !o.value,
					onClick: t[0] ||= (e) => c(n.currentPage - 1)
				}, {
					default: N(() => [...t[2] ||= [_(" Prev ", -1)]]),
					_: 1
				}, 8, ["disabled"]),
				(E(!0), m(u, null, D(i.value, (e) => (E(), f(P, {
					key: e,
					variant: e === n.currentPage ? "elevated" : "glass",
					size: "small",
					class: S(["m-pagination__btn", { "m-pagination__btn--active": e === n.currentPage }]),
					onClick: (t) => c(e)
				}, {
					default: N(() => [_(A(e), 1)]),
					_: 2
				}, 1032, [
					"variant",
					"class",
					"onClick"
				]))), 128)),
				v(P, {
					variant: "glass",
					size: "small",
					disabled: !s.value,
					onClick: t[1] ||= (e) => c(n.currentPage + 1)
				}, {
					default: N(() => [...t[3] ||= [_(" Next ", -1)]]),
					_: 1
				}, 8, ["disabled"])
			])]),
			_: 1
		}));
	}
}), $t = { class: "m-empty-state__icon-wrap" }, en = { class: "m-empty-state__title" }, tn = {
	key: 0,
	class: "m-empty-state__description"
}, nn = {
	key: 1,
	class: "m-empty-state__actions"
}, rn = /* @__PURE__ */ y({
	name: "MEmptyState",
	__name: "m-empty-state",
	props: {
		title: {},
		description: { default: void 0 },
		icon: { default: "✨" },
		actionText: { default: void 0 }
	},
	emits: ["click:action"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = d(() => !!n.actionText), a = () => {
			r("click:action");
		};
		return (e, t) => (E(), f(F, {
			variant: "glass",
			class: "m-empty-state"
		}, {
			default: N(() => [
				h("div", $t, [O(e.$slots, "icon", {}, () => [h("span", null, A(n.icon), 1)])]),
				h("h3", en, A(n.title), 1),
				n.description ? (E(), m("p", tn, A(n.description), 1)) : p("", !0),
				i.value || e.$slots.action ? (E(), m("div", nn, [O(e.$slots, "action", {}, () => [v(P, {
					variant: "elevated",
					color: "primary",
					onClick: a
				}, {
					default: N(() => [_(A(n.actionText), 1)]),
					_: 1
				})])])) : p("", !0)
			]),
			_: 3
		}));
	}
}), an = { class: "m-toast__message" }, on = { class: "m-toast__actions" }, Q = /* @__PURE__ */ y({
	name: "MToast",
	__name: "m-toast",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		message: {},
		type: { default: "info" },
		duration: { default: 4e3 },
		actionText: { default: void 0 }
	},
	emits: [
		"update:modelValue",
		"click:action",
		"close"
	],
	setup(t, { emit: n }) {
		let r = t, i = n, a = () => {};
		ct(() => [r.modelValue, r.duration], () => {
			a(), a = r.modelValue && r.duration > 0 ? e(r.duration, s) : () => {};
		}, { immediate: !0 }), T(() => a());
		let o = () => {
			i("click:action");
		};
		function s() {
			i("update:modelValue", !1), i("close");
		}
		return (e, t) => (E(), m("div", { class: S(j(He)(r, r.modelValue)) }, [h("span", an, A(r.message), 1), h("div", on, [r.actionText ? (E(), f(P, {
			key: 0,
			variant: "text",
			size: "small",
			color: "primary",
			onClick: o
		}, {
			default: N(() => [_(A(r.actionText), 1)]),
			_: 1
		})) : p("", !0), v(P, {
			variant: "plain",
			size: "x-small",
			icon: "",
			onClick: s
		}, {
			default: N(() => [...t[0] ||= [_(" × ", -1)]]),
			_: 1
		})])], 2));
	}
}), sn = /* @__PURE__ */ y({
	name: "MStatStrip",
	__name: "m-stat-strip",
	props: {
		stats: {},
		columns: { default: 4 }
	},
	setup(e) {
		let t = e, n = d(() => Ve(t.columns));
		return (e, r) => (E(), m("div", {
			class: "m-stat-strip",
			style: w(n.value)
		}, [(E(!0), m(u, null, D(t.stats, (e, t) => (E(), f(X, {
			key: `${e.label}-${t}`,
			label: e.label,
			value: e.value,
			subtext: e.subtext,
			trend: e.trend,
			"trend-value": e.trendValue,
			icon: e.icon
		}, null, 8, [
			"label",
			"value",
			"subtext",
			"trend",
			"trend-value",
			"icon"
		]))), 128))], 4));
	}
}), cn = [
	"aria-selected",
	"disabled",
	"onClick"
], ln = {
	key: 0,
	class: "m-tabs-nav__icon"
}, un = {
	key: 1,
	class: "m-tabs-nav__badge"
}, dn = /* @__PURE__ */ y({
	name: "MTabsNav",
	__name: "m-tabs-nav",
	props: {
		tabs: {},
		modelValue: { default: void 0 },
		grow: {
			type: Boolean,
			default: !1
		},
		align: { default: "start" }
	},
	emits: ["update:modelValue", "tabChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = d({
			get: () => n.modelValue || (n.tabs[0] ? n.tabs[0].id : ""),
			set: (e) => {
				r("update:modelValue", e), r("tabChange", e);
			}
		}), a = (e) => {
			e.disabled || (i.value = e.id);
		};
		return (e, t) => (E(), m("nav", {
			class: S(j($e)(n)),
			role: "tablist"
		}, [(E(!0), m(u, null, D(n.tabs, (e) => (E(), m("button", {
			key: e.id,
			type: "button",
			role: "tab",
			"aria-selected": i.value === e.id,
			disabled: e.disabled,
			class: S(["m-tabs-nav__item", { "m-tabs-nav__item--active": i.value === e.id }]),
			onClick: (t) => a(e)
		}, [
			e.icon ? (E(), m("span", ln, A(e.icon), 1)) : p("", !0),
			h("span", null, A(e.label), 1),
			e.badge ? (E(), m("span", un, A(e.badge), 1)) : p("", !0)
		], 10, cn))), 128))], 2));
	}
}), fn = { class: "m-action-bar__start" }, pn = {
	key: 0,
	class: "m-action-bar__title"
}, mn = {
	key: 0,
	class: "m-action-bar__center"
}, hn = {
	key: 1,
	class: "m-action-bar__end"
}, gn = /* @__PURE__ */ y({
	name: "MActionBar",
	__name: "m-action-bar",
	props: {
		title: { default: void 0 },
		position: { default: "static" },
		bordered: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e;
		return (e, n) => (E(), f(L, { class: S(j(Je)(t)) }, {
			default: N(() => [
				h("div", fn, [O(e.$slots, "start", {}, () => [t.title ? (E(), m("h2", pn, A(t.title), 1)) : p("", !0)])]),
				e.$slots.default ? (E(), m("div", mn, [O(e.$slots, "default")])) : p("", !0),
				e.$slots.end ? (E(), m("div", hn, [O(e.$slots, "end")])) : p("", !0)
			]),
			_: 3
		}, 8, ["class"]));
	}
}), _n = { class: "m-data-table__table" }, vn = ["onClick"], yn = {
	key: 0,
	class: "m-data-table__sort-icon"
}, bn = { key: 0 }, xn = ["colspan"], Sn = ["onClick"], Cn = /* @__PURE__ */ y({
	__name: "m-data-table",
	props: {
		headers: {},
		items: {},
		loading: {
			type: Boolean,
			default: !1
		},
		emptyText: { default: "No records found" },
		itemKey: { default: "id" },
		sortBy: { default: null },
		sortDesc: {
			type: Boolean,
			default: !1
		},
		hoverable: {
			type: Boolean,
			default: !0
		},
		dense: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click:row", "update:sort"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = d(() => Ge(n)), a = d(() => n.items.length > 0), o = d(() => !n.loading && !a.value), s = (e) => {
			Qe(e, !0) && r("update:sort", ze({
				sortBy: n.sortBy,
				sortDesc: n.sortDesc
			}, e.key));
		}, c = (e) => {
			r("click:row", e);
		};
		return (t, n) => (E(), m("div", { class: S(i.value) }, [e.loading ? (E(), f(K, {
			key: 0,
			indeterminate: "",
			color: "primary"
		})) : p("", !0), h("table", _n, [h("thead", null, [h("tr", null, [(E(!0), m(u, null, D(e.headers, (n) => (E(), m("th", {
			key: n.key,
			class: S([
				"m-data-table__th",
				n.sortable && "m-data-table__th--sortable",
				n.align && `m-data-table__th--align-${n.align}`
			]),
			onClick: (e) => s(n)
		}, [O(t.$slots, `header.${n.key}`, { header: n }, () => [_(A(n.title) + " ", 1), e.sortBy === n.key ? (E(), m("span", yn, A(e.sortDesc ? "▼" : "▲"), 1)) : p("", !0)])], 10, vn))), 128))])]), h("tbody", null, [o.value ? (E(), m("tr", bn, [h("td", {
			colspan: e.headers.length,
			class: "m-data-table__empty"
		}, [O(t.$slots, "empty", {}, () => [_(A(e.emptyText), 1)])], 8, xn)])) : p("", !0), (E(!0), m(u, null, D(e.items, (n, r) => (E(), m("tr", {
			key: j(Ze)(n, e.itemKey, r),
			class: "m-data-table__tr",
			onClick: (e) => c(n)
		}, [(E(!0), m(u, null, D(e.headers, (e) => (E(), m("td", {
			key: e.key,
			class: S(["m-data-table__td", e.align && `m-data-table__td--align-${e.align}`])
		}, [O(t.$slots, `item.${e.key}`, {
			item: n,
			value: j(Xe)(n, e)
		}, () => [_(A(j(Xe)(n, e)), 1)])], 2))), 128))], 8, Sn))), 128))])])], 2));
	}
}), $ = (...e) => {
	let t = s(...e);
	return it() && T(t), t;
}, wn = (e, t) => ($(e.stop), t.immediate && e.start(), e), Tn = (e, t, n = {}) => wn(te(e, t), n), En = (e, t, n = {}) => wn(l(e, t), n), Dn = (e, t = {}) => {
	let { immediate: n = !0 } = t, r = ot(null), i = ot(null), o = at(n), s = a(e, (e) => {
		r.value = e.data, i.value = e.error, o.value = e.isLoading;
	}, { isLoading: n });
	return $(s.cancel), n && s.run(), {
		data: r,
		error: i,
		isLoading: o,
		execute: s.run
	};
}, On = (e, ...t) => {
	let n = ee(...t), r = d(() => n(st(e))), i = d(() => r.value.length);
	return {
		filtered: r,
		count: i,
		hasMatches: d(() => i.value > 0)
	};
}, kn = () => ({ install(e) {
	e.component("XBtn", P), e.component("XCard", F), e.component("XChip", Ot), e.component("XDialog", I), e.component("x-dialog", I), e.component("XModal", I), e.component("x-modal", I), e.component("XSheet", L), e.component("XTextField", R), e.component("XAvatar", z), e.component("XBadge", B), e.component("XCheckbox", V), e.component("XSwitch", H), e.component("XDivider", U), e.component("XSkeleton", W), e.component("XAlert", G), e.component("XProgressLinear", K), e.component("XTooltip", Mt), e.component("XMenu", q), e.component("x-menu", q), e.component("XList", J), e.component("x-list", J), e.component("XListItem", Y), e.component("x-list-item", Y), e.component("XText", Nt), e.component("XStack", Pt), e.component("XGrid", Ft), e.component("XTextarea", It), e.component("XNavDrawer", Lt), e.component("MConfirmDialog", Vt), e.component("MKpiTile", X), e.component("MSearchInput", Yt), e.component("MPagination", Z), e.component("MEmptyState", rn), e.component("MToast", Q), e.component("m-toast", Q), e.component("MStatStrip", sn), e.component("MTabsNav", dn), e.component("MActionBar", gn), e.component("MDataTable", Cn);
} });
//#endregion
export { gn as MActionBar, Vt as MConfirmDialog, Cn as MDataTable, rn as MEmptyState, X as MKpiTile, Z as MPagination, Yt as MSearchInput, sn as MStatStrip, dn as MTabsNav, Q as MToast, G as XAlert, z as XAvatar, B as XBadge, P as XBtn, F as XCard, V as XCheckbox, Ot as XChip, I as XDialog, I as XModal, U as XDivider, Ft as XGrid, J as XList, Y as XListItem, q as XMenu, Lt as XNavDrawer, K as XProgressLinear, L as XSheet, W as XSkeleton, Pt as XStack, H as XSwitch, Nt as XText, R as XTextField, It as XTextarea, Mt as XTooltip, e as after, t as all, n as allPass, r as any, i as anyPass, a as createAsyncRunner, o as createDebounce, s as createDisposer, c as createLatestGate, ee as createPredicateFilter, l as createRestartableInterval, te as createRestartableTimeout, ne as createRuleSet, kn as createXAtomsPlugin, kn as default, re as deepFreeze, ie as every, ae as fallback, oe as glassTokens, se as isErr, ce as isOk, le as listen, ue as mapResult, de as matchesAllPredicates, fe as matchesAnyPattern, pe as none, me as nonePass, he as normalizeArray, ge as not, _e as radiiTokens, ve as spaceTokens, ye as starshipColors, nt as starshipDarkTheme, rt as starshipLightTheme, be as toError, xe as toResult, Se as toResultSync, Ce as toStyleString, we as toneColors, Te as unwrapOr, Dn as useAsyncData, $ as useDisposer, On as usePredicateFilter, En as useSelfCleaningInterval, Tn as useSelfCleaningTimeout };
