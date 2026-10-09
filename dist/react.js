import { after as e, all as t, allPass as n, any as r, anyPass as i, createAsyncRunner as a, createDebounce as o, createDisposer as s, createLatestGate as c, createPredicateFilter as l, createRestartableInterval as u, createRestartableTimeout as d, createRuleSet as f, deepFreeze as p, every as m, fallback as h, glassTokens as g, isErr as _, isOk as v, listen as y, mapResult as b, matchesAllPredicates as ee, matchesAnyPattern as te, none as ne, nonePass as re, normalizeArray as ie, not as ae, radiiTokens as oe, starshipColors as se, toError as ce, toResult as le, toResultSync as ue, unwrapOr as de } from "./core.js";
import { A as fe, C as pe, D as me, E as he, F as ge, I as x, L as S, M as C, N as w, O as T, P as E, S as D, T as O, U as k, V as A, a as j, b as M, c as N, d as P, f as F, g as I, h as L, i as _e, j as ve, k as ye, m as be, n as xe, o as Se, p as Ce, r as we, s as Te, t as Ee, u as De, v as Oe, w as ke, x as Ae, z as je } from "./chunks/controllers-BIZs0NS8.js";
import { useEffect as R, useMemo as z, useRef as B, useState as V } from "react";
import { Fragment as Me, jsx as H, jsxs as U } from "react/jsx-runtime";
//#region src/atoms/x-btn/x-btn.tsx
var W = ({ variant: e = "glass", color: t = void 0, size: n = "default", block: r = !1, loading: i = !1, disabled: a = !1, icon: o = !1, className: s = "", onClick: c = void 0, children: l = null, prepend: u = null, append: d = null }) => {
	let f = a || i, p = k({
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
}, G = ({ variant: e = "glass", color: t = void 0, loading: n = !1, disabled: r = !1, hover: i = !1, className: a = "", children: o = null, title: s = null, actions: c = null }) => {
	let l = A({
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
}, Ne = ({ variant: e = "glass", color: t = void 0, size: n = "default", closable: r = !1, disabled: i = !1, filter: a = !1, className: o = "", onClick: s = void 0, onClose: c = void 0, children: l = null, prepend: u = null }) => {
	let d = je({
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
	let d = S({ persistent: r }), f = () => {
		d && s?.(!1);
	};
	if (R(() => {
		if (e) return y(globalThis.document, "keydown", (e) => {
			e.key === "Escape" && f();
		});
	}), !e) return null;
	let p = ge({
		fullscreen: a,
		scrollable: i
	}, `x-dialog--native ${o}`.trim()).join(" "), m = x({
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
	let s = E({
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
	let [f, p] = V(!1), m = w({
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
}, Pe = ({ src: e = void 0, alt: t = void 0, text: n = void 0, size: r = "default", bordered: i = !1, status: a = void 0, className: o = "", children: s = null }) => {
	let c = ve({
		size: r,
		bordered: i,
		status: a
	}, o).join(" "), l = C(n || t);
	return /* @__PURE__ */ U("div", {
		className: c,
		children: [e ? /* @__PURE__ */ H("img", {
			src: e,
			alt: t || "Avatar"
		}) : l ? /* @__PURE__ */ H("span", { children: l }) : s, a ? /* @__PURE__ */ H("span", { className: `x-avatar__status-dot x-avatar__status-dot--${a}` }) : null]
	});
}, Fe = ({ content: e = void 0, color: t = "primary", dot: n = !1, inline: r = !1, max: i = 99, floating: a = !0, className: o = "", children: s = null }) => {
	let c = fe(e, i), l = ye({
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
}, Ie = ({ modelValue: e = !1, label: t = void 0, disabled: n = !1, className: r = "", onChange: i = void 0, children: a = null }) => {
	let o = T({ disabled: n }, e, r).join(" "), s = () => {
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
}, Le = ({ modelValue: e = !1, label: t = void 0, disabled: n = !1, className: r = "", onChange: i = void 0, children: a = null }) => {
	let o = me({ disabled: n }, e, r).join(" "), s = () => {
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
}, Re = ({ vertical: e = !1, inset: t = !1, className: n = "" }) => {
	let r = he({
		vertical: e,
		inset: t
	}, n).join(" ");
	return /* @__PURE__ */ H("hr", {
		className: r,
		"aria-orientation": e ? "vertical" : "horizontal"
	});
}, ze = ({ shape: e = "rounded", animation: t = "shimmer", width: n = "100%", height: r = "1rem", delay: i = "0s", className: a = "" }) => {
	let o = ke({
		shape: e,
		animation: t
	}, a).join(" "), s = {
		width: O(n),
		height: O(r),
		"--x-skeleton-delay": i
	};
	return /* @__PURE__ */ H("div", {
		className: o,
		style: s
	});
}, Be = ({ type: e = "info", title: t = void 0, text: n = void 0, closable: r = !1, variant: i = "glass", className: a = "", onClose: o = void 0, children: s = null, icon: c = null }) => {
	let l = pe({
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
	let o = Ae(e), s = D({
		indeterminate: t,
		rounded: r,
		striped: i
	}, a).join(" "), c = typeof n == "number" ? `${n}px` : n, l = t ? {} : { width: `${o}%` };
	return /* @__PURE__ */ H("div", {
		className: s,
		style: { height: c },
		role: "progressbar",
		"aria-valuenow": t ? void 0 : o,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ H("div", {
			className: "x-progress-linear__bar",
			style: l
		})
	});
}, Ve = ({ text: e = void 0, location: t = "top", disabled: n = !1, className: r = "", children: i, tooltip: a = null }) => {
	let [o, s] = V(!1);
	if (n) return /* @__PURE__ */ H(Me, { children: i });
	let c = M({ location: t }, r).join(" ");
	return /* @__PURE__ */ U("div", {
		className: "x-tooltip-wrapper",
		onMouseEnter: () => s(!0),
		onMouseLeave: () => s(!1),
		onFocus: () => s(!0),
		onBlur: () => s(!1),
		children: [i, /* @__PURE__ */ H("div", {
			className: c,
			role: "tooltip",
			style: {
				opacity: +!!o,
				visibility: o ? "visible" : "hidden"
			},
			children: a || e
		})]
	});
}, He = ({ density: e = "default", lines: t = "one", nav: n = !1, color: r = void 0, variant: i = void 0, disabled: a = !1, className: o = "", children: s = null }) => {
	let c = Oe({
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
}, Ue = ({ title: e = void 0, subtitle: t = void 0, value: n = void 0, active: r = !1, disabled: i = !1, color: a = void 0, density: o = void 0, lines: s = void 0, variant: c = void 0, rounded: l = void 0, ripple: u = !0, className: d = "", children: f = null, prepend: p = null, append: m = null }) => {
	let h = I({
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
}, We = ({ modelValue: e = !1, title: t = "Confirm Action", message: n = "Are you sure you want to proceed?", confirmText: r = "Confirm", cancelText: i = "Cancel", confirmColor: a = "primary", loading: o = !1, onConfirm: s = void 0, onCancel: c = void 0 }) => {
	if (!e) return null;
	let l = L({
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
	let s = Ce(r), c = be(r), l = !!(r && i), u = !!n;
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
	let t = B(e);
	return R(() => {
		t.current = e;
	}, [e]), t;
}, Q = (e, t) => {
	let n = Z(e), r = z(() => o((...e) => n.current(...e), t), [t, n]);
	return R(() => r.cancel, [r]), r;
}, $ = ({ modelValue: e = "", placeholder: t = "Search...", debounceMs: n = 250, disabled: r = !1, clearable: i = !0, className: a = "", onSearch: o = void 0, onClear: s = void 0 }) => {
	let [c, l] = V(e), u = Q((e) => o?.(e), n);
	R(() => {
		l(e);
	}, [e]);
	let d = (e) => {
		let t = e.target.value;
		l(t), u(t);
	}, f = () => {
		l(""), s?.(), o?.("");
	}, p = F({ disabled: r }, a).join(" ");
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
}, Ge = ({ currentPage: e, totalPages: t, pageSize: n = 20, totalItems: r = 0, maxVisiblePages: i = 5, showRange: a = !0, onPageChange: o = void 0 }) => {
	let s = P(e, t, i), c = De(e, n, r), l = e > 1, u = e < t, d = (n) => {
		n >= 1 && n <= t && n !== e && o?.(n);
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
}, Ke = ({ title: e, description: t = void 0, icon: n = "✨", actionText: r = void 0, className: i = "", onClickAction: a = void 0, iconElement: o = null, actionElement: s = null }) => {
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
}, qe = ({ modelValue: e = !1, message: t, type: n = "info", duration: r = 4e3, actionText: i = void 0, className: a = "", onClickAction: o = void 0, onClose: s = void 0 }) => {
	let c = B(null);
	R(() => (c.current && clearTimeout(c.current), e && r > 0 && (c.current = setTimeout(() => {
		s?.();
	}, r)), () => {
		c.current && clearTimeout(c.current);
	}), [
		e,
		r,
		s
	]);
	let l = N({
		message: t,
		type: n
	}, e, a).join(" ");
	return /* @__PURE__ */ U("div", {
		className: l,
		role: "status",
		children: [/* @__PURE__ */ H("span", {
			className: "m-toast__message",
			children: t
		}), /* @__PURE__ */ U("div", {
			className: "m-toast__actions",
			children: [i ? /* @__PURE__ */ H(W, {
				variant: "text",
				size: "small",
				color: "primary",
				onClick: o,
				children: i
			}) : null, /* @__PURE__ */ H(W, {
				variant: "plain",
				size: "x-small",
				icon: !0,
				onClick: s,
				children: "×"
			})]
		})]
	});
}, Je = ({ stats: e, columns: t = 4 }) => {
	let n = Te(t);
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
}, Ye = ({ tabs: e, modelValue: t = void 0, grow: n = !1, align: r = "start", className: i = "", onTabChange: a = void 0 }) => {
	let o = t || (e[0] ? e[0].id : ""), s = Se({
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
}, Xe = ({ title: e = void 0, position: t = "static", bordered: n = !0, className: r = "", start: i = null, children: a = null, end: o = null }) => {
	let s = j({
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
}, Ze = ({ headers: e = [], items: t = [], loading: n = !1, emptyText: r = "No records found", itemKey: i = "id", sortBy: a = null, sortDesc: o = !1, hoverable: s = !0, dense: c = !1, className: l = "", onRowClick: u = void 0, onSortChange: d = void 0, renderEmpty: f = void 0, renderCell: p = void 0 }) => {
	let m = Ee({
		hoverable: s,
		dense: c,
		loading: n
	}, l).join(" "), h = t.length > 0, g = !n && !h, _ = (e) => {
		e.sortable && d && d(xe({
			sortBy: a,
			sortDesc: o
		}, e.key));
	}, v = (e) => {
		u && u(e);
	};
	return /* @__PURE__ */ U("div", {
		className: m,
		children: [n ? /* @__PURE__ */ H(Y, {
			indeterminate: !0,
			color: "primary"
		}) : null, /* @__PURE__ */ U("table", {
			className: "m-data-table__table",
			children: [/* @__PURE__ */ H("thead", { children: /* @__PURE__ */ H("tr", { children: e.map((e) => /* @__PURE__ */ U("th", {
				className: [
					"m-data-table__th",
					e.sortable ? "m-data-table__th--sortable" : "",
					e.align ? `m-data-table__th--align-${e.align}` : ""
				].filter(Boolean).join(" "),
				onClick: () => _(e),
				children: [e.title, a === e.key ? /* @__PURE__ */ H("span", {
					className: "m-data-table__sort-icon",
					children: o ? "▼" : "▲"
				}) : null]
			}, e.key)) }) }), /* @__PURE__ */ H("tbody", { children: g ? /* @__PURE__ */ H("tr", { children: /* @__PURE__ */ H("td", {
				colSpan: e.length,
				className: "m-data-table__empty",
				children: f ? f() : r
			}) }) : t.map((t, n) => /* @__PURE__ */ H("tr", {
				className: "m-data-table__tr",
				onClick: () => v(t),
				children: e.map((e) => {
					let n = we(t, e);
					return /* @__PURE__ */ H("td", {
						className: ["m-data-table__td", e.align ? `m-data-table__td--align-${e.align}` : ""].filter(Boolean).join(" "),
						children: p ? p(t, e, n) : String(n)
					}, e.key);
				})
			}, _e(t, i, n))) })]
		})]
	});
}, Qe = () => {
	let e = B(s());
	R(() => () => {
		e.current(), e.current = s();
	}, []);
	let [t] = V(() => Object.assign(() => e.current(), { add: (...t) => e.current.add(...t) }));
	return t;
}, $e = (e, t) => {
	let n = Z(e);
	R(() => {
		if (t !== null) return m(t, () => n.current());
	}, [t, n]);
}, et = (t, n) => {
	let r = Z(t);
	R(() => {
		if (n !== null) return e(n, () => r.current());
	}, [n, r]);
}, tt = (e, t = !0) => {
	let n = Z(e), [r, i] = V({
		data: null,
		error: null,
		isLoading: t
	}), [o] = V(() => a(() => n.current(), i, { isLoading: t }));
	return R(() => (t && o.run(), o.cancel), [o, t]), {
		...r,
		execute: o.run
	};
}, nt = (e, ...t) => {
	let n = z(() => l(...t)(e), [e, ...t]), r = n.length;
	return {
		filtered: n,
		count: r,
		hasMatches: r > 0
	};
};
//#endregion
export { Xe as MActionBar, We as MConfirmDialog, Ze as MDataTable, Ke as MEmptyState, X as MKpiTile, Ge as MPagination, $ as MSearchInput, Je as MStatStrip, Ye as MTabsNav, qe as MToast, Be as XAlert, Pe as XAvatar, Fe as XBadge, W as XBtn, G as XCard, Ie as XCheckbox, Ne as XChip, K as XDialog, K as XModal, Re as XDivider, He as XList, Ue as XListItem, Y as XProgressLinear, q as XSheet, ze as XSkeleton, Le as XSwitch, J as XTextField, Ve as XTooltip, e as after, t as all, n as allPass, r as any, i as anyPass, a as createAsyncRunner, o as createDebounce, s as createDisposer, c as createLatestGate, l as createPredicateFilter, u as createRestartableInterval, d as createRestartableTimeout, f as createRuleSet, p as deepFreeze, m as every, h as fallback, g as glassTokens, _ as isErr, v as isOk, y as listen, b as mapResult, ee as matchesAllPredicates, te as matchesAnyPattern, ne as none, re as nonePass, ie as normalizeArray, ae as not, oe as radiiTokens, se as starshipColors, ce as toError, le as toResult, ue as toResultSync, de as unwrapOr, tt as useAsyncData, Q as useDebouncedCallback, Qe as useDisposer, Z as useLatest, nt as usePredicateFilter, $e as useSelfCleaningInterval, et as useSelfCleaningTimeout };
