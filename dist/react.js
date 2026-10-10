import { after as e, all as t, allPass as n, any as r, anyPass as i, assertRuleTree as a, createAsyncRunner as o, createDebounce as s, createDisposer as c, createLatestGate as l, createPredicateFilter as u, createRestartableInterval as d, createRestartableTimeout as f, createRuleSet as p, deepFreeze as m, evaluateRules as h, every as g, fallback as _, glassTokens as v, isErr as y, isOk as b, listen as x, mapResult as ee, matchesAllPredicates as te, matchesAnyPattern as ne, none as re, nonePass as ie, normalizeArray as ae, not as oe, radiiTokens as se, ruleTree as ce, spaceTokens as le, starshipColors as ue, toError as de, toResult as fe, toResultSync as pe, toStyleString as me, toneColors as he, unwrapOr as ge } from "./core.js";
import { $ as _e, A as ve, B as S, C, E as w, F as T, G as E, H as D, J as O, K as k, L as A, M as j, N as M, O as N, Q as P, R as F, S as ye, T as be, U as xe, W as I, X as Se, Y as Ce, Z as we, _ as Te, a as Ee, b as De, c as Oe, ct as ke, d as Ae, et as je, f as Me, g as Ne, h as Pe, i as Fe, it as Ie, j as Le, k as Re, l as ze, m as Be, n as Ve, nt as He, o as Ue, ot as We, q as Ge, r as Ke, s as qe, t as Je, tt as Ye, u as Xe, v as Ze, x as Qe, y as $e, z as et } from "./chunks/controllers-C2xi7vZk.js";
import { useEffect as L, useMemo as R, useRef as z, useState as B } from "react";
import { Fragment as V, jsx as H, jsxs as U } from "react/jsx-runtime";
//#region src/atoms/x-btn/x-btn.tsx
var W = ({ variant: e = void 0, color: t = void 0, size: n = "default", block: r = !1, loading: i = !1, disabled: a = !1, icon: o = !1, className: s = "", onClick: c = void 0, children: l = null, prepend: u = null, append: d = null }) => {
	let f = a || i, p = ke({
		variant: e,
		color: t,
		size: n,
		block: r,
		loading: i,
		disabled: a,
		icon: o
	}, s).join(" ");
	return /* @__PURE__ */ U("button", {
		type: "button",
		className: p,
		disabled: f,
		onClick: c,
		children: [
			u ? /* @__PURE__ */ H("span", {
				className: "x-btn__prepend",
				children: u
			}) : null,
			l ? /* @__PURE__ */ H("span", {
				className: "x-btn__content",
				children: l
			}) : null,
			d ? /* @__PURE__ */ H("span", {
				className: "x-btn__append",
				children: d
			}) : null
		]
	});
}, G = ({ variant: e = void 0, color: t = void 0, loading: n = !1, disabled: r = !1, hover: i = !1, className: a = "", children: o = null, title: s = null, actions: c = null }) => {
	let l = We({
		variant: e,
		color: t,
		loading: n,
		disabled: r,
		hover: i
	}, a).join(" ");
	return /* @__PURE__ */ U("div", {
		className: l,
		children: [
			s ? /* @__PURE__ */ H("div", {
				className: "x-card__title",
				children: s
			}) : null,
			o ? /* @__PURE__ */ H("div", {
				className: "x-card__content",
				children: o
			}) : null,
			c ? /* @__PURE__ */ H("div", {
				className: "x-card__actions",
				children: c
			}) : null
		]
	});
}, tt = ({ variant: e = void 0, color: t = void 0, size: n = "default", closable: r = !1, disabled: i = !1, filter: a = !1, className: o = "", onClick: s = void 0, onClose: c = void 0, children: l = null, prepend: u = null }) => {
	let d = Ie({
		variant: e,
		color: t,
		size: n,
		closable: r,
		disabled: i,
		filter: a
	}, o).join(" ");
	return /* @__PURE__ */ U("div", {
		className: d,
		onClick: s,
		role: "status",
		children: [
			u ? /* @__PURE__ */ H("span", {
				className: "x-chip__prepend",
				children: u
			}) : null,
			l ? /* @__PURE__ */ H("span", {
				className: "x-chip__content",
				children: l
			}) : null,
			r ? /* @__PURE__ */ H("button", {
				type: "button",
				className: "x-chip__close",
				onClick: (e) => {
					e.stopPropagation(), c?.();
				},
				"aria-label": "Close chip",
				children: "×"
			}) : null
		]
	});
}, K = ({ modelValue: e = !1, maxWidth: t = 600, width: n = void 0, persistent: r = !1, scrollable: i = !1, fullscreen: a = !1, className: o = "", onUpdateModelValue: s = void 0, title: c = null, actions: l = null, children: u = null }) => {
	let d = He({ persistent: r }), f = () => {
		d && s?.(!1);
	};
	if (L(() => {
		if (e) return x(globalThis.document, "keydown", (e) => {
			e.key === "Escape" && f();
		});
	}), !e) return null;
	let p = je({
		fullscreen: a,
		scrollable: i
	}, `x-dialog--native ${o}`.trim()).join(" "), m = Ye({
		maxWidth: t,
		width: n
	});
	return /* @__PURE__ */ H("div", {
		className: p,
		role: "presentation",
		onClick: f,
		children: /* @__PURE__ */ U("div", {
			className: "x-dialog__surface",
			role: "dialog",
			"aria-modal": "true",
			style: m,
			onClick: (e) => e.stopPropagation(),
			children: [
				c ? /* @__PURE__ */ H("div", {
					className: "x-dialog__title",
					children: c
				}) : null,
				/* @__PURE__ */ H("div", {
					className: "x-dialog__content",
					children: u
				}),
				l ? /* @__PURE__ */ H("div", {
					className: "x-dialog__actions",
					children: l
				}) : null
			]
		})
	});
}, q = ({ color: e = void 0, elevation: t = void 0, rounded: n = void 0, border: r = void 0, transparent: i = !1, className: a = "", children: o = null }) => {
	let s = _e({
		transparent: i,
		color: e,
		elevation: t,
		rounded: n,
		border: r
	}, a).join(" ");
	return /* @__PURE__ */ H("div", {
		className: s,
		children: o
	});
}, J = ({ modelValue: e = "", label: t = void 0, placeholder: n = void 0, type: r = "text", disabled: i = !1, readonly: a = !1, clearable: o = !1, className: s = "", onChange: c = void 0, onClear: l = void 0, prependInner: u = null, appendInner: d = null }) => {
	let [f, p] = B(!1), m = P({
		disabled: i,
		readonly: a
	}, f, s).join(" ");
	return /* @__PURE__ */ U("div", {
		className: m,
		children: [t ? /* @__PURE__ */ H("label", {
			className: "x-text-field__label",
			children: t
		}) : null, /* @__PURE__ */ U("div", {
			className: "x-text-field__input-wrap",
			children: [
				u ? /* @__PURE__ */ H("span", {
					className: "x-text-field__prepend-inner",
					children: u
				}) : null,
				/* @__PURE__ */ H("input", {
					type: r,
					value: e,
					placeholder: n,
					disabled: i,
					readOnly: a,
					onChange: c,
					onFocus: () => p(!0),
					onBlur: () => p(!1),
					className: "x-text-field__native-input"
				}),
				o && e ? /* @__PURE__ */ H("button", {
					type: "button",
					className: "x-text-field__clear-btn",
					onClick: l,
					"aria-label": "Clear input",
					children: "×"
				}) : null,
				d ? /* @__PURE__ */ H("span", {
					className: "x-text-field__append-inner",
					children: d
				}) : null
			]
		})]
	});
}, nt = ({ src: e = void 0, alt: t = void 0, text: n = void 0, size: r = "default", bordered: i = !1, status: a = void 0, className: o = "", children: s = null }) => {
	let c = Se({
		size: r,
		bordered: i,
		status: a
	}, o).join(" "), l = we(n || t);
	return /* @__PURE__ */ U("div", {
		className: c,
		children: [e ? /* @__PURE__ */ H("img", {
			src: e,
			alt: t || "Avatar"
		}) : l ? /* @__PURE__ */ H("span", { children: l }) : s, a ? /* @__PURE__ */ H("span", { className: `x-avatar__status-dot x-avatar__status-dot--${a}` }) : null]
	});
}, rt = ({ content: e = void 0, color: t = "primary", dot: n = !1, inline: r = !1, max: i = 99, floating: a = !0, className: o = "", children: s = null }) => {
	let c = Ce(e, i), l = O({
		dot: n,
		inline: r,
		floating: a,
		color: t
	}, o).join(" ");
	return s ? /* @__PURE__ */ U("div", {
		className: "x-badge-wrapper",
		children: [s, /* @__PURE__ */ H("span", {
			className: l,
			children: n ? null : c
		})]
	}) : /* @__PURE__ */ H("span", {
		className: l,
		children: n ? null : c
	});
}, it = ({ modelValue: e = !1, label: t = void 0, disabled: n = !1, className: r = "", onChange: i = void 0, children: a = null }) => {
	let o = Ge({ disabled: n }, e, r).join(" "), s = () => {
		n || i?.(!e);
	};
	return /* @__PURE__ */ U("div", {
		className: o,
		onClick: s,
		onKeyDown: (e) => {
			(e.key === " " || e.key === "Enter") && (e.preventDefault(), s());
		},
		role: "checkbox",
		"aria-checked": e,
		tabIndex: n ? -1 : 0,
		children: [/* @__PURE__ */ H("span", {
			className: "x-checkbox__box",
			children: e ? /* @__PURE__ */ H("svg", {
				width: "12",
				height: "12",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "3",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: /* @__PURE__ */ H("polyline", { points: "20 6 9 17 4 12" })
			}) : null
		}), t ? /* @__PURE__ */ H("span", {
			className: "x-checkbox__label",
			children: t
		}) : a]
	});
}, at = ({ modelValue: e = !1, label: t = void 0, disabled: n = !1, className: r = "", onChange: i = void 0, children: a = null }) => {
	let o = k({ disabled: n }, e, r).join(" "), s = () => {
		n || i?.(!e);
	};
	return /* @__PURE__ */ U("div", {
		className: o,
		onClick: s,
		onKeyDown: (e) => {
			(e.key === " " || e.key === "Enter") && (e.preventDefault(), s());
		},
		role: "switch",
		"aria-checked": e,
		tabIndex: n ? -1 : 0,
		children: [/* @__PURE__ */ H("span", {
			className: "x-switch__track",
			children: /* @__PURE__ */ H("span", { className: "x-switch__thumb" })
		}), t ? /* @__PURE__ */ H("span", {
			className: "x-switch__label",
			children: t
		}) : a]
	});
}, ot = ({ vertical: e = !1, inset: t = !1, className: n = "" }) => {
	let r = E({
		vertical: e,
		inset: t
	}, n).join(" ");
	return /* @__PURE__ */ H("hr", {
		className: r,
		"aria-orientation": e ? "vertical" : "horizontal"
	});
}, st = ({ shape: e = "rounded", animation: t = "shimmer", width: n = "100%", height: r = "1rem", delay: i = "0s", className: a = "" }) => {
	let o = xe({
		shape: e,
		animation: t
	}, a).join(" "), s = {
		"--x-skeleton-width": I(n),
		"--x-skeleton-height": I(r),
		"--x-skeleton-delay": i
	};
	return /* @__PURE__ */ H("div", {
		className: o,
		style: s
	});
}, ct = ({ type: e = "info", title: t = void 0, text: n = void 0, closable: r = !1, variant: i = void 0, className: a = "", onClose: o = void 0, children: s = null, icon: c = null }) => {
	let l = D({
		type: e,
		variant: i
	}, a).join(" ");
	return /* @__PURE__ */ U("div", {
		className: l,
		role: "alert",
		children: [
			c ? /* @__PURE__ */ H("div", {
				className: "x-alert__icon",
				children: c
			}) : null,
			/* @__PURE__ */ U("div", {
				className: "x-alert__content",
				children: [t ? /* @__PURE__ */ H("div", {
					className: "x-alert__title",
					children: t
				}) : null, n ? /* @__PURE__ */ H("div", {
					className: "x-alert__text",
					children: n
				}) : /* @__PURE__ */ H("div", {
					className: "x-alert__text",
					children: s
				})]
			}),
			r ? /* @__PURE__ */ H("button", {
				type: "button",
				className: "x-alert__close",
				onClick: o,
				"aria-label": "Close alert",
				children: "×"
			}) : null
		]
	});
}, Y = ({ modelValue: e = 0, indeterminate: t = !1, height: n = 4, rounded: r = !0, striped: i = !1, className: a = "" }) => {
	let o = F(e), s = et({
		indeterminate: t,
		rounded: r,
		striped: i
	}, a).join(" "), c = S(n, o, t);
	return /* @__PURE__ */ H("div", {
		className: s,
		style: c.track,
		role: "progressbar",
		"aria-valuenow": t ? void 0 : o,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ H("div", {
			className: "x-progress-linear__bar",
			style: c.bar
		})
	});
}, lt = ({ text: e = void 0, location: t = "top", disabled: n = !1, className: r = "", children: i, tooltip: a = null }) => {
	if (n) return /* @__PURE__ */ H(V, { children: i });
	let o = A({ location: t }, r).join(" ");
	return /* @__PURE__ */ U("div", {
		className: "x-tooltip-wrapper",
		children: [i, /* @__PURE__ */ H("div", {
			className: o,
			role: "tooltip",
			children: a || e
		})]
	});
}, ut = ({ density: e = "default", lines: t = "one", nav: n = !1, color: r = void 0, variant: i = void 0, disabled: a = !1, className: o = "", children: s = null }) => {
	let c = T({
		density: e,
		lines: t,
		nav: n,
		color: r,
		variant: i,
		disabled: a
	}, o).join(" ");
	return /* @__PURE__ */ H("div", {
		className: c,
		children: s
	});
}, dt = ({ title: e = void 0, subtitle: t = void 0, value: n = void 0, active: r = !1, disabled: i = !1, color: a = void 0, density: o = void 0, lines: s = void 0, variant: c = void 0, rounded: l = void 0, ripple: u = !0, className: d = "", children: f = null, prepend: p = null, append: m = null }) => {
	let h = M({
		title: e,
		subtitle: t,
		value: n,
		active: r,
		disabled: i,
		color: a,
		density: o,
		lines: s,
		variant: c,
		rounded: l,
		ripple: u
	}, d).join(" ");
	return /* @__PURE__ */ U("div", {
		className: h,
		children: [
			p ? /* @__PURE__ */ H("div", {
				className: "x-list-item__prepend",
				children: p
			}) : null,
			/* @__PURE__ */ U("div", {
				className: "x-list-item__content",
				children: [
					e ? /* @__PURE__ */ H("div", {
						className: "x-list-item__title",
						children: e
					}) : null,
					t ? /* @__PURE__ */ H("div", {
						className: "x-list-item__subtitle",
						children: t
					}) : null,
					f
				]
			}),
			m ? /* @__PURE__ */ H("div", {
				className: "x-list-item__append",
				children: m
			}) : null
		]
	});
}, ft = ({ tag: e = void 0, variant: t = "body", tone: n = void 0, weight: r = void 0, align: i = void 0, truncate: a = !1, className: o = "", children: s = null }) => {
	let c = j({
		tag: e,
		variant: t
	}), l = Le({
		variant: t,
		tone: n,
		weight: r,
		align: i,
		truncate: a
	}, o).join(" ");
	return /* @__PURE__ */ H(c, {
		className: l,
		children: s
	});
}, pt = ({ direction: e = "column", gap: t = "md", align: n = void 0, justify: r = void 0, wrap: i = !1, tag: a = "div", className: o = "", children: s = null }) => {
	let c = ve({
		direction: e,
		gap: t,
		align: n,
		justify: r,
		wrap: i
	}, o).join(" ");
	return /* @__PURE__ */ H(a, {
		className: c,
		children: s
	});
}, mt = ({ columns: e = 1, minItemWidth: t = void 0, gap: n = "md", align: r = void 0, tag: i = "div", className: a = "", children: o = null }) => {
	let s = N({
		columns: e,
		minItemWidth: t,
		gap: n,
		align: r
	}, a).join(" "), c = Re({ minItemWidth: t });
	return /* @__PURE__ */ H(i, {
		className: s,
		style: c,
		children: o
	});
}, ht = ({ modelValue: e = "", label: t = void 0, placeholder: n = void 0, rows: r = 3, autoGrow: i = !1, disabled: a = !1, readonly: o = !1, maxlength: s = void 0, className: c = "", onChange: l = void 0 }) => {
	let [u, d] = B(!1), f = be({
		disabled: a,
		readonly: o,
		autoGrow: i
	}, u, `x-textarea--native ${c}`.trim()).join(" "), p = w(e, s);
	return /* @__PURE__ */ U("label", {
		className: f,
		children: [
			t ? /* @__PURE__ */ H("span", {
				className: "x-textarea__label",
				children: t
			}) : null,
			/* @__PURE__ */ H("textarea", {
				className: "x-textarea__native",
				value: e,
				rows: r,
				placeholder: n,
				disabled: a,
				readOnly: o,
				maxLength: s,
				onChange: (e) => l?.(e.target.value),
				onFocus: () => d(!0),
				onBlur: () => d(!1)
			}),
			p ? /* @__PURE__ */ H("span", {
				className: "x-textarea__counter",
				children: p
			}) : null
		]
	});
}, gt = ({ modelValue: e = !0, location: t = "start", rail: n = !1, temporary: r = !1, permanent: i = !1, width: a = 256, floating: o = !1, className: s = "", onUpdateModelValue: c = void 0, prepend: l = null, append: u = null, children: d = null }) => {
	let f = {
		modelValue: e,
		location: t,
		rail: n,
		temporary: r,
		permanent: i,
		width: a,
		floating: o
	}, p = Qe(f, `x-nav-drawer--native ${s}`.trim()).join(" "), m = ye(f);
	return /* @__PURE__ */ U(V, { children: [C(f) ? /* @__PURE__ */ H("div", {
		className: "x-nav-drawer__scrim",
		role: "presentation",
		onClick: () => c?.(!1)
	}) : null, /* @__PURE__ */ U("nav", {
		className: p,
		style: m,
		children: [
			l,
			/* @__PURE__ */ H("div", {
				className: "x-nav-drawer__content",
				children: d
			}),
			u
		]
	})] });
}, _t = ({ modelValue: e = !1, title: t = "Confirm Action", message: n = "Are you sure you want to proceed?", confirmText: r = "Confirm", cancelText: i = "Cancel", confirmColor: a = "primary", loading: o = !1, onConfirm: s = void 0, onCancel: c = void 0 }) => {
	if (!e) return null;
	let l = De({
		confirmText: r,
		cancelText: i,
		confirmColor: a
	});
	return /* @__PURE__ */ H("div", {
		className: "x-dialog",
		role: "dialog",
		"aria-modal": "true",
		children: /* @__PURE__ */ U("div", {
			className: "x-dialog__surface",
			children: [/* @__PURE__ */ U("div", {
				className: "m-confirm-dialog__body",
				children: [/* @__PURE__ */ H("h3", {
					className: "m-confirm-dialog__title",
					children: t
				}), /* @__PURE__ */ H("p", {
					className: "m-confirm-dialog__message",
					children: n
				})]
			}), /* @__PURE__ */ U("div", {
				className: "x-dialog__actions",
				children: [/* @__PURE__ */ H(W, {
					variant: "text",
					disabled: o,
					onClick: c,
					children: l.cancelText
				}), /* @__PURE__ */ H(W, {
					variant: "elevated",
					color: l.confirmColor,
					loading: o,
					onClick: s,
					children: l.confirmText
				})]
			})]
		})
	});
}, X = ({ label: e, value: t, subtext: n = void 0, trend: r = void 0, trendValue: i = void 0, icon: a = void 0, iconElement: o = null }) => {
	let s = Ze(r), c = $e(r), l = !!(r && i), u = !!n;
	return /* @__PURE__ */ H(G, {
		variant: "glass",
		hover: !0,
		children: /* @__PURE__ */ U("div", {
			className: "m-kpi-tile",
			children: [
				/* @__PURE__ */ U("div", {
					className: "m-kpi-tile__header",
					children: [/* @__PURE__ */ H("span", {
						className: "m-kpi-tile__label",
						children: e
					}), o || (a ? /* @__PURE__ */ H("span", {
						className: "m-kpi-tile__icon",
						children: a
					}) : null)]
				}),
				/* @__PURE__ */ H("div", {
					className: "m-kpi-tile__value",
					children: t
				}),
				l || u ? /* @__PURE__ */ U("div", {
					className: "m-kpi-tile__footer",
					children: [l ? /* @__PURE__ */ U("span", {
						className: `m-kpi-tile__trend ${s}`,
						children: [c, i]
					}) : null, u ? /* @__PURE__ */ H("span", {
						className: "m-kpi-tile__subtext",
						children: n
					}) : null]
				}) : null
			]
		})
	});
}, Z = (e) => {
	let t = z(e);
	return L(() => {
		t.current = e;
	}, [e]), t;
}, Q = (e, t) => {
	let n = Z(e), r = R(() => s((...e) => n.current(...e), t), [t, n]);
	return L(() => r.cancel, [r]), r;
}, vt = ({ modelValue: e = "", placeholder: t = "Search...", debounceMs: n = 250, disabled: r = !1, clearable: i = !0, className: a = "", onSearch: o = void 0, onClear: s = void 0 }) => {
	let [c, l] = B(e), u = Q((e) => o?.(e), n);
	L(() => {
		l(e);
	}, [e]);
	let d = (e) => {
		let t = e.target.value;
		l(t), u(t);
	}, f = () => {
		l(""), s?.(), o?.("");
	}, p = Te({ disabled: r }, a).join(" ");
	return /* @__PURE__ */ H("div", {
		className: p,
		children: /* @__PURE__ */ H(J, {
			modelValue: c,
			placeholder: t,
			disabled: r,
			clearable: i,
			onChange: d,
			onClear: f,
			prependInner: /* @__PURE__ */ H("span", {
				className: "m-search-input__icon",
				children: "🔍"
			})
		})
	});
}, yt = ({ currentPage: e, totalPages: t, pageSize: n = 20, totalItems: r = 0, maxVisiblePages: i = 5, showRange: a = !0, onPageChange: o = void 0 }) => {
	let s = Pe(e, t, i), c = Be(e, n, r), l = e > 1, u = e < t, d = (n) => {
		Ne(n, e, t) && o?.(n);
	};
	return /* @__PURE__ */ U("div", {
		className: "m-pagination",
		children: [a && r ? /* @__PURE__ */ U("div", {
			className: "m-pagination__info",
			children: [
				"Showing ",
				c.start,
				" to ",
				c.end,
				" of ",
				c.total,
				" items"
			]
		}) : /* @__PURE__ */ H("div", {}), /* @__PURE__ */ U("div", {
			className: "m-pagination__controls",
			children: [
				/* @__PURE__ */ H(W, {
					variant: "glass",
					size: "small",
					disabled: !l,
					onClick: () => d(e - 1),
					children: "Prev"
				}),
				s.map((t) => /* @__PURE__ */ H(W, {
					variant: t === e ? "elevated" : "glass",
					size: "small",
					className: `m-pagination__btn ${t === e ? "m-pagination__btn--active" : ""}`,
					onClick: () => d(t),
					children: t
				}, t)),
				/* @__PURE__ */ H(W, {
					variant: "glass",
					size: "small",
					disabled: !u,
					onClick: () => d(e + 1),
					children: "Next"
				})
			]
		})]
	});
}, $ = ({ title: e, description: t = void 0, icon: n = "✨", actionText: r = void 0, className: i = "", onClickAction: a = void 0, iconElement: o = null, actionElement: s = null }) => {
	let c = !!o, l = !!t, u = !!s, d = !!r;
	return /* @__PURE__ */ U(G, {
		variant: "glass",
		className: `m-empty-state ${i}`,
		children: [
			/* @__PURE__ */ H("div", {
				className: "m-empty-state__icon-wrap",
				children: c ? o : /* @__PURE__ */ H("span", { children: n })
			}),
			/* @__PURE__ */ H("h3", {
				className: "m-empty-state__title",
				children: e
			}),
			l ? /* @__PURE__ */ H("p", {
				className: "m-empty-state__description",
				children: t
			}) : null,
			u ? /* @__PURE__ */ H("div", {
				className: "m-empty-state__actions",
				children: s
			}) : d ? /* @__PURE__ */ H("div", {
				className: "m-empty-state__actions",
				children: /* @__PURE__ */ H(W, {
					variant: "elevated",
					color: "primary",
					onClick: a,
					children: r
				})
			}) : null
		]
	});
}, bt = ({ modelValue: t = !1, message: n, type: r = "info", duration: i = 4e3, actionText: a = void 0, className: o = "", onClickAction: s = void 0, onClose: c = void 0 }) => {
	let l = Z(c);
	L(() => t && i > 0 ? e(i, () => l.current?.()) : void 0, [
		t,
		i,
		l
	]);
	let u = Me({
		message: n,
		type: r
	}, t, o).join(" ");
	return /* @__PURE__ */ U("div", {
		className: u,
		role: "status",
		children: [/* @__PURE__ */ H("span", {
			className: "m-toast__message",
			children: n
		}), /* @__PURE__ */ U("div", {
			className: "m-toast__actions",
			children: [a ? /* @__PURE__ */ H(W, {
				variant: "text",
				size: "small",
				color: "primary",
				onClick: s,
				children: a
			}) : null, /* @__PURE__ */ H(W, {
				variant: "plain",
				size: "x-small",
				icon: !0,
				onClick: c,
				children: "×"
			})]
		})]
	});
}, xt = ({ stats: e, columns: t = 4 }) => {
	let n = Ae(t);
	return /* @__PURE__ */ H("div", {
		className: "m-stat-strip",
		style: n,
		children: e.map((e, t) => /* @__PURE__ */ H(X, {
			label: e.label,
			value: e.value,
			subtext: e.subtext,
			trend: e.trend,
			trendValue: e.trendValue,
			icon: e.icon
		}, `${e.label}-${t}`))
	});
}, St = ({ tabs: e, modelValue: t = void 0, grow: n = !1, align: r = "start", className: i = "", onTabChange: a = void 0 }) => {
	let o = t || (e[0] ? e[0].id : ""), s = Xe({
		tabs: e,
		grow: n,
		align: r
	}, i).join(" "), c = (e) => {
		e.disabled || a?.(e.id);
	};
	return /* @__PURE__ */ H("nav", {
		className: s,
		role: "tablist",
		children: e.map((e) => {
			let t = o === e.id;
			return /* @__PURE__ */ U("button", {
				type: "button",
				role: "tab",
				"aria-selected": t,
				disabled: e.disabled,
				className: `m-tabs-nav__item ${t ? "m-tabs-nav__item--active" : ""}`,
				onClick: () => c(e),
				children: [
					e.icon ? /* @__PURE__ */ H("span", {
						className: "m-tabs-nav__icon",
						children: e.icon
					}) : null,
					/* @__PURE__ */ H("span", { children: e.label }),
					e.badge ? /* @__PURE__ */ H("span", {
						className: "m-tabs-nav__badge",
						children: e.badge
					}) : null
				]
			}, e.id);
		})
	});
}, Ct = ({ title: e = void 0, position: t = "static", bordered: n = !0, className: r = "", start: i = null, children: a = null, end: o = null }) => {
	let s = ze({
		position: t,
		bordered: n
	}, r).join(" ");
	return /* @__PURE__ */ U(q, {
		className: s,
		children: [
			/* @__PURE__ */ H("div", {
				className: "m-action-bar__start",
				children: i || (e ? /* @__PURE__ */ H("h2", {
					className: "m-action-bar__title",
					children: e
				}) : null)
			}),
			a ? /* @__PURE__ */ H("div", {
				className: "m-action-bar__center",
				children: a
			}) : null,
			o ? /* @__PURE__ */ H("div", {
				className: "m-action-bar__end",
				children: o
			}) : null
		]
	});
}, wt = ({ headers: e = [], items: t = [], loading: n = !1, emptyText: r = "No records found", itemKey: i = "id", sortBy: a = null, sortDesc: o = !1, hoverable: s = !0, dense: c = !1, className: l = "", onRowClick: u = void 0, onSortChange: d = void 0, renderEmpty: f = void 0, renderCell: p = void 0 }) => {
	let m = Fe({
		hoverable: s,
		dense: c,
		loading: n
	}, l).join(" "), h = t.length > 0, g = !n && !h, _ = (e) => {
		Je(e, !!d) && d?.(Ee({
			sortBy: a,
			sortDesc: o
		}, e.key));
	}, v = (e) => {
		let t = Oe({
			sortBy: a,
			sortDesc: o
		}, e.key);
		return t ? /* @__PURE__ */ H("span", {
			className: "m-data-table__sort-icon",
			children: t
		}) : null;
	}, y = (e, t) => {
		let n = Ue(e, t);
		return p ? p(e, t, n) : String(n);
	}, b = (t, n) => /* @__PURE__ */ H("tr", {
		className: "m-data-table__tr",
		onClick: () => u?.(t),
		children: e.map((e) => /* @__PURE__ */ H("td", {
			className: Ve(e),
			children: y(t, e)
		}, e.key))
	}, qe(t, i, n)), x = /* @__PURE__ */ H("tr", { children: /* @__PURE__ */ H("td", {
		colSpan: e.length,
		className: "m-data-table__empty",
		children: f ? f() : r
	}) });
	return /* @__PURE__ */ U("div", {
		className: m,
		children: [n ? /* @__PURE__ */ H(Y, {
			indeterminate: !0,
			color: "primary"
		}) : null, /* @__PURE__ */ U("table", {
			className: "m-data-table__table",
			children: [/* @__PURE__ */ H("thead", { children: /* @__PURE__ */ H("tr", { children: e.map((e) => /* @__PURE__ */ U("th", {
				className: Ke(e),
				onClick: () => _(e),
				children: [e.title, v(e)]
			}, e.key)) }) }), /* @__PURE__ */ H("tbody", { children: g ? x : t.map(b) })]
		})]
	});
}, Tt = () => {
	let e = z(c());
	L(() => () => {
		e.current(), e.current = c();
	}, []);
	let [t] = B(() => Object.assign(() => e.current(), { add: (...t) => e.current.add(...t) }));
	return t;
}, Et = (e, t) => {
	let n = Z(e);
	L(() => {
		if (t !== null) return g(t, () => n.current());
	}, [t, n]);
}, Dt = (t, n) => {
	let r = Z(t);
	L(() => {
		if (n !== null) return e(n, () => r.current());
	}, [n, r]);
}, Ot = (e, t = !0) => {
	let n = Z(e), [r, i] = B({
		data: null,
		error: null,
		isLoading: t
	}), [a] = B(() => o(() => n.current(), i, { isLoading: t }));
	return L(() => (t && a.run(), a.cancel), [a, t]), {
		...r,
		execute: a.run
	};
}, kt = (e, ...t) => {
	let n = R(() => u(...t)(e), [e, ...t]), r = n.length;
	return {
		filtered: n,
		count: r,
		hasMatches: r > 0
	};
};
//#endregion
export { Ct as MActionBar, _t as MConfirmDialog, wt as MDataTable, $ as MEmptyState, X as MKpiTile, yt as MPagination, vt as MSearchInput, xt as MStatStrip, St as MTabsNav, bt as MToast, ct as XAlert, nt as XAvatar, rt as XBadge, W as XBtn, G as XCard, it as XCheckbox, tt as XChip, K as XDialog, K as XModal, ot as XDivider, mt as XGrid, ut as XList, dt as XListItem, gt as XNavDrawer, Y as XProgressLinear, q as XSheet, st as XSkeleton, pt as XStack, at as XSwitch, ft as XText, J as XTextField, ht as XTextarea, lt as XTooltip, e as after, t as all, n as allPass, r as any, i as anyPass, a as assertRuleTree, o as createAsyncRunner, s as createDebounce, c as createDisposer, l as createLatestGate, u as createPredicateFilter, d as createRestartableInterval, f as createRestartableTimeout, p as createRuleSet, m as deepFreeze, h as evaluateRules, g as every, _ as fallback, v as glassTokens, y as isErr, b as isOk, x as listen, ee as mapResult, te as matchesAllPredicates, ne as matchesAnyPattern, re as none, ie as nonePass, ae as normalizeArray, oe as not, se as radiiTokens, ce as ruleTree, le as spaceTokens, ue as starshipColors, de as toError, fe as toResult, pe as toResultSync, me as toStyleString, he as toneColors, ge as unwrapOr, Ot as useAsyncData, Q as useDebouncedCallback, Tt as useDisposer, Z as useLatest, kt as usePredicateFilter, Et as useSelfCleaningInterval, Dt as useSelfCleaningTimeout };
