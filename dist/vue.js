import { after as e, all as t, allPass as n, any as r, anyPass as i, createAsyncRunner as a, createDebounce as o, createDisposer as s, createLatestGate as c, createPredicateFilter as l, createRestartableInterval as ee, createRestartableTimeout as te, createRuleSet as ne, deepFreeze as re, every as ie, fallback as ae, glassTokens as oe, isErr as se, isOk as ce, listen as le, mapResult as ue, matchesAllPredicates as de, matchesAnyPattern as fe, none as pe, nonePass as me, normalizeArray as he, not as ge, radiiTokens as _e, starshipColors as ve, toError as ye, toResult as be, toResultSync as xe, unwrapOr as Se } from "./core.js";
import { A as Ce, E as we, M as Te, T as Ee, _ as De, a as Oe, c as ke, d as Ae, f as je, h as Me, i as Ne, j as Pe, m as Fe, n as Ie, o as Le, p as Re, r as ze, s as Be, t as Ve, u as He, w as Ue, x as We, y as Ge } from "./chunks/controllers-BIZs0NS8.js";
import Ke from "./theme.js";
import { Fragment as u, computed as d, createBlock as f, createCommentVNode as p, createElementBlock as m, createElementVNode as h, createSlots as g, createTextVNode as _, createVNode as v, defineComponent as y, getCurrentScope as qe, guardReactiveProps as b, mergeProps as x, normalizeClass as S, normalizeProps as C, normalizeStyle as w, onScopeDispose as T, openBlock as E, ref as D, renderList as O, renderSlot as k, shallowRef as Je, toDisplayString as A, toValue as Ye, unref as j, useAttrs as M, watch as N, withCtx as P } from "vue";
import { VBtn as Xe } from "vuetify/components/VBtn";
import { VCard as Ze } from "vuetify/components/VCard";
import { VChip as Qe } from "vuetify/components/VChip";
import { VDialog as $e } from "vuetify/components/VDialog";
import { VSheet as et } from "vuetify/components/VSheet";
import { VTextField as tt } from "vuetify/components/VTextField";
import { VAvatar as nt } from "vuetify/components/VAvatar";
import { VBadge as rt } from "vuetify/components/VBadge";
import { VCheckbox as it } from "vuetify/components/VCheckbox";
import { VSwitch as at } from "vuetify/components/VSwitch";
import { VDivider as ot } from "vuetify/components/VDivider";
import { VAlert as st } from "vuetify/components/VAlert";
import { VProgressLinear as ct } from "vuetify/components/VProgressLinear";
import { VTooltip as lt } from "vuetify/components/VTooltip";
import { VMenu as ut } from "vuetify/components/VMenu";
import { VList as dt, VListItem as ft } from "vuetify/components/VList";
//#endregion
//#region src/atoms/x-btn/x-btn.vue
var F = /* @__PURE__ */ y({
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
		return (e, o) => (E(), f(Xe, x(j(n), {
			variant: i.value,
			color: a.value,
			size: t.size,
			block: t.block,
			loading: t.loading,
			disabled: t.disabled,
			icon: t.icon,
			class: ["x-btn", { "x-btn--glass": r.value }]
		}), g({
			default: P(() => [k(e.$slots, "default")]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: P(() => [k(e.$slots, "prepend")]),
				key: "0"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: P(() => [k(e.$slots, "append")]),
				key: "1"
			} : void 0,
			e.$slots.loader ? {
				name: "loader",
				fn: P(() => [k(e.$slots, "loader")]),
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
}), I = /* @__PURE__ */ y({
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
		return (e, a) => (E(), f(Ze, x(j(n), {
			variant: i.value,
			color: t.color,
			loading: t.loading,
			disabled: t.disabled,
			class: ["x-card", {
				"x-card--glass": r.value,
				"x-card--hover": t.hover
			}]
		}), g({
			default: P(() => [k(e.$slots, "default")]),
			_: 2
		}, [
			e.$slots.image ? {
				name: "image",
				fn: P(() => [k(e.$slots, "image")]),
				key: "0"
			} : void 0,
			e.$slots.prepend ? {
				name: "prepend",
				fn: P(() => [k(e.$slots, "prepend")]),
				key: "1"
			} : void 0,
			e.$slots.title ? {
				name: "title",
				fn: P(() => [k(e.$slots, "title")]),
				key: "2"
			} : void 0,
			e.$slots.subtitle ? {
				name: "subtitle",
				fn: P(() => [k(e.$slots, "subtitle")]),
				key: "3"
			} : void 0,
			e.$slots.text ? {
				name: "text",
				fn: P(() => [k(e.$slots, "text")]),
				key: "4"
			} : void 0,
			e.$slots.actions ? {
				name: "actions",
				fn: P(() => [k(e.$slots, "actions")]),
				key: "5"
			} : void 0,
			e.$slots.loader ? {
				name: "loader",
				fn: P((t) => [k(e.$slots, "loader", C(b(t || {})))]),
				key: "6"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: P(() => [k(e.$slots, "append")]),
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
}), pt = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f(Qe, x(j(i), {
			variant: o.value,
			color: n.color,
			size: n.size,
			closable: n.closable,
			disabled: n.disabled,
			filter: n.filter,
			class: ["x-chip", { "x-chip--glass": a.value }],
			"onClick:close": s
		}), g({
			default: P((t) => [k(e.$slots, "default", C(b(t || {})))]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: P(() => [k(e.$slots, "prepend")]),
				key: "0"
			} : void 0,
			e.$slots.close ? {
				name: "close",
				fn: P(() => [k(e.$slots, "close")]),
				key: "1"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: P(() => [k(e.$slots, "append")]),
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
}), mt = { class: "x-dialog__actions" }, L = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f($e, x({
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
			default: P(() => [v(Ze, { class: "x-dialog__surface" }, g({
				default: P(() => [k(e.$slots, "default")]),
				_: 2
			}, [e.$slots.title ? {
				name: "title",
				fn: P(() => [k(e.$slots, "title")]),
				key: "0"
			} : void 0, e.$slots.actions ? {
				name: "actions",
				fn: P(() => [h("div", mt, [k(e.$slots, "actions")])]),
				key: "1"
			} : void 0]), 1024)]),
			_: 2
		}, [e.$slots.activator ? {
			name: "activator",
			fn: P((t) => [k(e.$slots, "activator", C(b(t || {})))]),
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
}), R = /* @__PURE__ */ y({
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
		return (e, i) => (E(), f(et, x(j(n), {
			color: r.value,
			elevation: t.elevation,
			rounded: t.rounded,
			border: t.border,
			class: ["x-sheet", { "x-sheet--transparent": t.transparent }]
		}), {
			default: P(() => [k(e.$slots, "default")]),
			_: 3
		}, 16, [
			"color",
			"elevation",
			"rounded",
			"border",
			"class"
		]));
	}
}), z = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f(tt, x({
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
				fn: P((t) => [k(e.$slots, "prepend-inner", C(b(t || {})))]),
				key: "0"
			} : void 0,
			e.$slots["append-inner"] ? {
				name: "append-inner",
				fn: P((t) => [k(e.$slots, "append-inner", C(b(t || {})))]),
				key: "1"
			} : void 0,
			e.$slots.prepend ? {
				name: "prepend",
				fn: P((t) => [k(e.$slots, "prepend", C(b(t || {})))]),
				key: "2"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: P((t) => [k(e.$slots, "append", C(b(t || {})))]),
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
}), ht = ["src", "alt"], gt = { key: 1 }, B = /* @__PURE__ */ y({
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
		let t = e, n = M(), r = d(() => Te(t.text || t.alt)), i = d(() => !!t.src), a = d(() => !!t.status);
		return (e, o) => (E(), f(nt, x(j(n), {
			size: t.size,
			rounded: t.rounded,
			class: j(Pe)(t)
		}), {
			default: P(() => [i.value ? (E(), m("img", {
				key: 0,
				src: t.src,
				alt: t.alt || "Avatar"
			}, null, 8, ht)) : r.value ? (E(), m("span", gt, A(r.value), 1)) : k(e.$slots, "default", {}, void 0, void 0, 2), a.value ? (E(), m("span", {
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
}), V = /* @__PURE__ */ y({
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
		let t = e, n = M(), r = d(() => Ce(t.content, t.max));
		return d(() => !!n.default), (e, i) => (E(), f(rt, x(j(n), {
			content: r.value,
			color: t.color,
			dot: t.dot,
			inline: t.inline,
			max: t.max,
			floating: t.floating,
			class: "x-badge"
		}), {
			default: P(() => [k(e.$slots, "default")]),
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
}), H = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f(it, x({
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
			fn: P((t) => [k(e.$slots, "label", C(b(t || {})))]),
			key: "0"
		} : void 0, e.$slots.default ? {
			name: "default",
			fn: P((t) => [k(e.$slots, "default", C(b(t || {})))]),
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
}), U = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f(at, x({
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
			fn: P((t) => [k(e.$slots, "label", C(b(t || {})))]),
			key: "0"
		} : void 0, e.$slots.thumb ? {
			name: "thumb",
			fn: P((t) => [k(e.$slots, "thumb", C(b(t || {})))]),
			key: "1"
		} : void 0]), 1040, [
			"modelValue",
			"label",
			"disabled",
			"color",
			"hide-details"
		]));
	}
}), W = /* @__PURE__ */ y({
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
		let t = e, n = M(), r = d(() => we(t));
		return (e, i) => (E(), f(ot, x(j(n), {
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
}), G = /* @__PURE__ */ y({
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
		let t = e, n = d(() => Ue(t)), r = d(() => Ee(t.width)), i = d(() => Ee(t.height));
		return (e, a) => (E(), m("div", {
			class: S(n.value),
			style: w({
				width: r.value,
				height: i.value,
				"--x-skeleton-delay": t.delay
			})
		}, null, 6));
	}
}), K = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f(st, x(j(i), {
			type: n.type,
			title: n.title,
			text: n.text,
			closable: n.closable,
			variant: a.value,
			class: "x-alert",
			"onClick:close": o
		}), g({
			default: P(() => [k(e.$slots, "default")]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: P(() => [k(e.$slots, "prepend")]),
				key: "0"
			} : void 0,
			e.$slots.title ? {
				name: "title",
				fn: P(() => [k(e.$slots, "title")]),
				key: "1"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: P(() => [k(e.$slots, "append")]),
				key: "2"
			} : void 0,
			e.$slots.close ? {
				name: "close",
				fn: P((t) => [k(e.$slots, "close", C(b(t || {})))]),
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
}), q = /* @__PURE__ */ y({
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
		let t = e, n = M(), r = d(() => We(t.modelValue));
		return (e, i) => (E(), f(ct, x(j(n), {
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
}), _t = /* @__PURE__ */ y({
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
		return (e, r) => (E(), f(lt, x(j(n), {
			text: t.text,
			location: t.location,
			disabled: t.disabled,
			"open-delay": t.openDelay,
			"close-delay": t.closeDelay
		}), g({
			activator: P(({ props: t }) => [k(e.$slots, "activator", { props: t }, () => [h("span", C(b(t)), [k(e.$slots, "default")], 16)])]),
			_: 2
		}, [e.$slots.default ? {
			name: "default",
			fn: P(() => [k(e.$slots, "default")]),
			key: "0"
		} : void 0]), 1040, [
			"text",
			"location",
			"disabled",
			"open-delay",
			"close-delay"
		]));
	}
}), J = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f(ut, x(j(i), {
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
			default: P((t) => [k(e.$slots, "default", C(b(t || {})))]),
			_: 2
		}, [e.$slots.activator ? {
			name: "activator",
			fn: P((t) => [k(e.$slots, "activator", C(b(t || {})))]),
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
}), Y = /* @__PURE__ */ y({
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
		let t = e, n = M(), r = d(() => t.variant === "glass"), i = d(() => Ge(t.variant));
		return (e, a) => (E(), f(dt, x(j(n), {
			density: t.density,
			lines: t.lines,
			nav: t.nav,
			color: t.color,
			variant: i.value,
			disabled: t.disabled,
			class: ["x-list", { "x-list--glass": r.value }]
		}), {
			default: P(() => [k(e.$slots, "default")]),
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
}), X = /* @__PURE__ */ y({
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
		let t = e, n = M(), r = d(() => t.variant === "glass"), i = d(() => De(t.variant));
		return (e, a) => (E(), f(ft, x(j(n), {
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
			default: P((t) => [k(e.$slots, "default", C(b(t || {})))]),
			_: 2
		}, [
			e.$slots.prepend ? {
				name: "prepend",
				fn: P((t) => [k(e.$slots, "prepend", C(b(t || {})))]),
				key: "0"
			} : void 0,
			e.$slots.title ? {
				name: "title",
				fn: P((t) => [k(e.$slots, "title", C(b(t || {})))]),
				key: "1"
			} : void 0,
			e.$slots.subtitle ? {
				name: "subtitle",
				fn: P((t) => [k(e.$slots, "subtitle", C(b(t || {})))]),
				key: "2"
			} : void 0,
			e.$slots.append ? {
				name: "append",
				fn: P((t) => [k(e.$slots, "append", C(b(t || {})))]),
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
}), vt = { class: "m-confirm-dialog__body" }, yt = { class: "m-confirm-dialog__title" }, bt = { class: "m-confirm-dialog__message" }, xt = /* @__PURE__ */ y({
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
		}), a = d(() => Me(n)), o = () => {
			r("cancel"), i.value = !1;
		}, s = () => {
			r("confirm");
		};
		return (e, t) => (E(), f(L, {
			modelValue: i.value,
			"onUpdate:modelValue": t[0] ||= (e) => i.value = e,
			"max-width": 480
		}, {
			actions: P(() => [v(F, {
				variant: "text",
				disabled: n.loading,
				onClick: o
			}, {
				default: P(() => [_(A(a.value.cancelText), 1)]),
				_: 1
			}, 8, ["disabled"]), v(F, {
				variant: "elevated",
				color: a.value.confirmColor,
				loading: n.loading,
				onClick: s
			}, {
				default: P(() => [_(A(a.value.confirmText), 1)]),
				_: 1
			}, 8, ["color", "loading"])]),
			default: P(() => [h("div", vt, [h("h3", yt, A(n.title), 1), h("p", bt, A(n.message), 1)])]),
			_: 1
		}, 8, ["modelValue"]));
	}
}), St = { class: "m-kpi-tile" }, Ct = { class: "m-kpi-tile__header" }, wt = { class: "m-kpi-tile__label" }, Tt = {
	key: 0,
	class: "m-kpi-tile__icon"
}, Et = { class: "m-kpi-tile__value" }, Dt = {
	key: 0,
	class: "m-kpi-tile__footer"
}, Ot = {
	key: 1,
	class: "m-kpi-tile__subtext"
}, Z = /* @__PURE__ */ y({
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
		let t = e, n = d(() => Re(t.trend)), r = d(() => Fe(t.trend)), i = d(() => !!(t.trend && t.trendValue));
		return (e, a) => (E(), f(I, {
			variant: "glass",
			hover: ""
		}, {
			default: P(() => [h("div", St, [
				h("div", Ct, [h("span", wt, A(t.label), 1), k(e.$slots, "icon", {}, () => [t.icon ? (E(), m("span", Tt, A(t.icon), 1)) : p("", !0)])]),
				h("div", Et, A(t.value), 1),
				t.subtext || i.value ? (E(), m("div", Dt, [i.value ? (E(), m("span", {
					key: 0,
					class: S(["m-kpi-tile__trend", n.value])
				}, A(r.value) + A(t.trendValue), 3)) : p("", !0), t.subtext ? (E(), m("span", Ot, A(t.subtext), 1)) : p("", !0)])) : p("", !0)
			])]),
			_: 3
		}));
	}
}), kt = /* @__PURE__ */ y({
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
		let n = e, r = t, i = D(n.modelValue), a = o((e) => {
			r("search", e);
		}, n.debounceMs);
		T(a.cancel), N(() => n.modelValue, (e) => {
			i.value = e;
		});
		let s = (e) => {
			let t = String(e);
			i.value = t, r("update:modelValue", t), a(t);
		}, c = () => {
			i.value = "", r("update:modelValue", ""), r("clear"), r("search", "");
		};
		return (e, t) => (E(), m("div", { class: S(j(je)(n)) }, [v(z, {
			"model-value": i.value,
			placeholder: n.placeholder,
			disabled: n.disabled,
			clearable: n.clearable,
			density: "compact",
			"hide-details": "",
			"onUpdate:modelValue": s,
			"onClick:clear": c
		}, g({
			"prepend-inner": P(() => [k(e.$slots, "prepend-inner", {}, () => [t[0] ||= h("span", { class: "m-search-input__icon" }, "🔍", -1)])]),
			_: 2
		}, [e.$slots["append-inner"] ? {
			name: "append-inner",
			fn: P((t) => [k(e.$slots, "append-inner", C(b(t || {})))]),
			key: "0"
		} : void 0]), 1032, [
			"model-value",
			"placeholder",
			"disabled",
			"clearable"
		])], 2));
	}
}), At = {
	key: 0,
	class: "m-pagination__info"
}, jt = { key: 1 }, Mt = { class: "m-pagination__controls" }, Nt = /* @__PURE__ */ y({
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
		let n = e, r = t, i = d(() => Ae(n.currentPage, n.totalPages, n.maxVisiblePages)), a = d(() => He(n.currentPage, n.pageSize, n.totalItems)), o = d(() => n.currentPage > 1), s = d(() => n.currentPage < n.totalPages), c = (e) => {
			e >= 1 && e <= n.totalPages && e !== n.currentPage && (r("update:currentPage", e), r("pageChange", e));
		};
		return (e, t) => (E(), f(R, {
			transparent: "",
			class: "m-pagination"
		}, {
			default: P(() => [n.showRange && n.totalItems ? (E(), m("div", At, " Showing " + A(a.value.start) + " to " + A(a.value.end) + " of " + A(a.value.total) + " items ", 1)) : (E(), m("div", jt)), h("div", Mt, [
				v(F, {
					variant: "glass",
					size: "small",
					disabled: !o.value,
					onClick: t[0] ||= (e) => c(n.currentPage - 1)
				}, {
					default: P(() => [...t[2] ||= [_(" Prev ", -1)]]),
					_: 1
				}, 8, ["disabled"]),
				(E(!0), m(u, null, O(i.value, (e) => (E(), f(F, {
					key: e,
					variant: e === n.currentPage ? "elevated" : "glass",
					size: "small",
					class: S(["m-pagination__btn", { "m-pagination__btn--active": e === n.currentPage }]),
					onClick: (t) => c(e)
				}, {
					default: P(() => [_(A(e), 1)]),
					_: 2
				}, 1032, [
					"variant",
					"class",
					"onClick"
				]))), 128)),
				v(F, {
					variant: "glass",
					size: "small",
					disabled: !s.value,
					onClick: t[1] ||= (e) => c(n.currentPage + 1)
				}, {
					default: P(() => [...t[3] ||= [_(" Next ", -1)]]),
					_: 1
				}, 8, ["disabled"])
			])]),
			_: 1
		}));
	}
}), Pt = { class: "m-empty-state__icon-wrap" }, Ft = { class: "m-empty-state__title" }, It = {
	key: 0,
	class: "m-empty-state__description"
}, Lt = {
	key: 1,
	class: "m-empty-state__actions"
}, Rt = /* @__PURE__ */ y({
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
		return (e, t) => (E(), f(I, {
			variant: "glass",
			class: "m-empty-state"
		}, {
			default: P(() => [
				h("div", Pt, [k(e.$slots, "icon", {}, () => [h("span", null, A(n.icon), 1)])]),
				h("h3", Ft, A(n.title), 1),
				n.description ? (E(), m("p", It, A(n.description), 1)) : p("", !0),
				i.value || e.$slots.action ? (E(), m("div", Lt, [k(e.$slots, "action", {}, () => [v(F, {
					variant: "elevated",
					color: "primary",
					onClick: a
				}, {
					default: P(() => [_(A(n.actionText), 1)]),
					_: 1
				})])])) : p("", !0)
			]),
			_: 3
		}));
	}
}), zt = { class: "m-toast__message" }, Bt = { class: "m-toast__actions" }, Q = /* @__PURE__ */ y({
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
	setup(e, { emit: t }) {
		let n = e, r = t, i = null, a = () => {
			i &&= (clearTimeout(i), null);
		}, o = () => {
			a(), n.duration > 0 && n.modelValue && (i = setTimeout(() => {
				r("update:modelValue", !1), r("close");
			}, n.duration));
		};
		N(() => n.modelValue, (e) => {
			e ? o() : a();
		}, { immediate: !0 }), T(() => {
			a();
		});
		let s = () => {
			r("click:action");
		}, c = () => {
			r("update:modelValue", !1), r("close");
		};
		return (e, t) => (E(), m("div", { class: S(j(ke)(n, n.modelValue)) }, [h("span", zt, A(n.message), 1), h("div", Bt, [n.actionText ? (E(), f(F, {
			key: 0,
			variant: "text",
			size: "small",
			color: "primary",
			onClick: s
		}, {
			default: P(() => [_(A(n.actionText), 1)]),
			_: 1
		})) : p("", !0), v(F, {
			variant: "plain",
			size: "x-small",
			icon: "",
			onClick: c
		}, {
			default: P(() => [...t[0] ||= [_(" × ", -1)]]),
			_: 1
		})])], 2));
	}
}), Vt = /* @__PURE__ */ y({
	name: "MStatStrip",
	__name: "m-stat-strip",
	props: {
		stats: {},
		columns: { default: 4 }
	},
	setup(e) {
		let t = e, n = d(() => Be(t.columns));
		return (e, r) => (E(), m("div", {
			class: "m-stat-strip",
			style: w(n.value)
		}, [(E(!0), m(u, null, O(t.stats, (e, t) => (E(), f(Z, {
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
}), Ht = [
	"aria-selected",
	"disabled",
	"onClick"
], Ut = {
	key: 0,
	class: "m-tabs-nav__icon"
}, Wt = {
	key: 1,
	class: "m-tabs-nav__badge"
}, Gt = /* @__PURE__ */ y({
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
			class: S(j(Le)(n)),
			role: "tablist"
		}, [(E(!0), m(u, null, O(n.tabs, (e) => (E(), m("button", {
			key: e.id,
			type: "button",
			role: "tab",
			"aria-selected": i.value === e.id,
			disabled: e.disabled,
			class: S(["m-tabs-nav__item", { "m-tabs-nav__item--active": i.value === e.id }]),
			onClick: (t) => a(e)
		}, [
			e.icon ? (E(), m("span", Ut, A(e.icon), 1)) : p("", !0),
			h("span", null, A(e.label), 1),
			e.badge ? (E(), m("span", Wt, A(e.badge), 1)) : p("", !0)
		], 10, Ht))), 128))], 2));
	}
}), Kt = { class: "m-action-bar__start" }, qt = {
	key: 0,
	class: "m-action-bar__title"
}, Jt = {
	key: 0,
	class: "m-action-bar__center"
}, Yt = {
	key: 1,
	class: "m-action-bar__end"
}, Xt = /* @__PURE__ */ y({
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
		return (e, n) => (E(), f(R, { class: S(j(Oe)(t)) }, {
			default: P(() => [
				h("div", Kt, [k(e.$slots, "start", {}, () => [t.title ? (E(), m("h2", qt, A(t.title), 1)) : p("", !0)])]),
				e.$slots.default ? (E(), m("div", Jt, [k(e.$slots, "default")])) : p("", !0),
				e.$slots.end ? (E(), m("div", Yt, [k(e.$slots, "end")])) : p("", !0)
			]),
			_: 3
		}, 8, ["class"]));
	}
}), Zt = { class: "m-data-table__table" }, Qt = ["onClick"], $t = {
	key: 0,
	class: "m-data-table__sort-icon"
}, en = { key: 0 }, tn = ["colspan"], nn = ["onClick"], rn = /* @__PURE__ */ y({
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
		let n = e, r = t, i = d(() => Ve(n)), a = d(() => n.items.length > 0), o = d(() => !n.loading && !a.value), s = (e) => {
			if (!e.sortable) return;
			let t = Ie({
				sortBy: n.sortBy,
				sortDesc: n.sortDesc
			}, e.key);
			r("update:sort", t);
		}, c = (e) => {
			r("click:row", e);
		};
		return (t, n) => (E(), m("div", { class: S(i.value) }, [e.loading ? (E(), f(q, {
			key: 0,
			indeterminate: "",
			color: "primary"
		})) : p("", !0), h("table", Zt, [h("thead", null, [h("tr", null, [(E(!0), m(u, null, O(e.headers, (n) => (E(), m("th", {
			key: n.key,
			class: S([
				"m-data-table__th",
				n.sortable && "m-data-table__th--sortable",
				n.align && `m-data-table__th--align-${n.align}`
			]),
			onClick: (e) => s(n)
		}, [k(t.$slots, `header.${n.key}`, { header: n }, () => [_(A(n.title) + " ", 1), e.sortBy === n.key ? (E(), m("span", $t, A(e.sortDesc ? "▼" : "▲"), 1)) : p("", !0)])], 10, Qt))), 128))])]), h("tbody", null, [o.value ? (E(), m("tr", en, [h("td", {
			colspan: e.headers.length,
			class: "m-data-table__empty"
		}, [k(t.$slots, "empty", {}, () => [_(A(e.emptyText), 1)])], 8, tn)])) : p("", !0), (E(!0), m(u, null, O(e.items, (n, r) => (E(), m("tr", {
			key: j(Ne)(n, e.itemKey, r),
			class: "m-data-table__tr",
			onClick: (e) => c(n)
		}, [(E(!0), m(u, null, O(e.headers, (e) => (E(), m("td", {
			key: e.key,
			class: S(["m-data-table__td", e.align && `m-data-table__td--align-${e.align}`])
		}, [k(t.$slots, `item.${e.key}`, {
			item: n,
			value: j(ze)(n, e)
		}, () => [_(A(j(ze)(n, e)), 1)])], 2))), 128))], 8, nn))), 128))])])], 2));
	}
}), $ = (...e) => {
	let t = s(...e);
	return qe() && T(t), t;
}, an = (e, t) => ($(e.stop), t.immediate && e.start(), e), on = (e, t, n = {}) => an(te(e, t), n), sn = (e, t, n = {}) => an(ee(e, t), n), cn = (e, t = {}) => {
	let { immediate: n = !0 } = t, r = Je(null), i = Je(null), o = D(n), s = a(e, (e) => {
		r.value = e.data, i.value = e.error, o.value = e.isLoading;
	}, { isLoading: n });
	return $(s.cancel), n && s.run(), {
		data: r,
		error: i,
		isLoading: o,
		execute: s.run
	};
}, ln = (e, ...t) => {
	let n = l(...t), r = d(() => n(Ye(e))), i = d(() => r.value.length);
	return {
		filtered: r,
		count: i,
		hasMatches: d(() => i.value > 0)
	};
}, un = () => ({ install(e) {
	e.component("XBtn", F), e.component("XCard", I), e.component("XChip", pt), e.component("XDialog", L), e.component("x-dialog", L), e.component("XModal", L), e.component("x-modal", L), e.component("XSheet", R), e.component("XTextField", z), e.component("XAvatar", B), e.component("XBadge", V), e.component("XCheckbox", H), e.component("XSwitch", U), e.component("XDivider", W), e.component("XSkeleton", G), e.component("XAlert", K), e.component("XProgressLinear", q), e.component("XTooltip", _t), e.component("XMenu", J), e.component("x-menu", J), e.component("XList", Y), e.component("x-list", Y), e.component("XListItem", X), e.component("x-list-item", X), e.component("MConfirmDialog", xt), e.component("MKpiTile", Z), e.component("MSearchInput", kt), e.component("MPagination", Nt), e.component("MEmptyState", Rt), e.component("MToast", Q), e.component("m-toast", Q), e.component("MStatStrip", Vt), e.component("MTabsNav", Gt), e.component("MActionBar", Xt), e.component("MDataTable", rn);
} });
//#endregion
export { Xt as MActionBar, xt as MConfirmDialog, rn as MDataTable, Rt as MEmptyState, Z as MKpiTile, Nt as MPagination, kt as MSearchInput, Vt as MStatStrip, Gt as MTabsNav, Q as MToast, K as XAlert, B as XAvatar, V as XBadge, F as XBtn, I as XCard, H as XCheckbox, pt as XChip, L as XDialog, L as XModal, W as XDivider, Y as XList, X as XListItem, J as XMenu, q as XProgressLinear, R as XSheet, G as XSkeleton, U as XSwitch, z as XTextField, _t as XTooltip, e as after, t as all, n as allPass, r as any, i as anyPass, a as createAsyncRunner, o as createDebounce, s as createDisposer, c as createLatestGate, l as createPredicateFilter, ee as createRestartableInterval, te as createRestartableTimeout, ne as createRuleSet, un as createXAtomsPlugin, un as default, re as deepFreeze, ie as every, ae as fallback, oe as glassTokens, se as isErr, ce as isOk, le as listen, ue as mapResult, de as matchesAllPredicates, fe as matchesAnyPattern, pe as none, me as nonePass, he as normalizeArray, ge as not, _e as radiiTokens, ve as starshipColors, Ke as starshipDarkTheme, ye as toError, be as toResult, xe as toResultSync, Se as unwrapOr, cn as useAsyncData, $ as useDisposer, ln as usePredicateFilter, sn as useSelfCleaningInterval, on as useSelfCleaningTimeout };
