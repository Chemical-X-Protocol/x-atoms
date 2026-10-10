import { after as e, all as t, allPass as n, any as r, anyPass as i, assertRuleTree as a, createAsyncRunner as o, createDebounce as s, createDisposer as c, createLatestGate as l, createPredicateFilter as u, createRestartableInterval as d, createRestartableTimeout as f, createRuleSet as p, deepFreeze as m, evaluateRules as h, every as g, fallback as _, glassTokens as v, isErr as y, isOk as b, listen as x, mapResult as S, matchesAllPredicates as C, matchesAnyPattern as w, none as T, nonePass as E, normalizeArray as ee, not as te, radiiTokens as ne, ruleTree as re, spaceTokens as ie, starshipColors as ae, toError as oe, toResult as se, toResultSync as D, toStyleString as O, toneColors as ce, unwrapOr as le } from "./core.js";
import { $ as ue, A as de, C as fe, E as pe, F as me, G as he, H as k, J as A, K as j, L as M, M as N, N as P, O as F, Q as I, R as L, S as R, T as ge, U as _e, W as z, X as ve, Y as ye, Z as be, _ as xe, a as Se, b as Ce, ct as we, d as Te, et as Ee, f as De, h as Oe, i as ke, it as Ae, j as je, k as Me, l as Ne, m as Pe, nt as Fe, o as Ie, ot as Le, q as Re, s as ze, tt as Be, u as Ve, v as He, x as Ue, y as We, z as Ge } from "./chunks/controllers-CVYLMjJ8.js";
import "svelte/internal/disclose-version";
import * as B from "svelte/internal/client";
import { onDestroy as V } from "svelte";
import { derived as Ke, readable as qe, writable as Je } from "svelte/store";
//#region src/atoms/x-btn/x-btn.svelte
var Ye = B.from_html("<span class=\"x-btn__prepend\"><!></span>"), Xe = B.from_html("<span class=\"x-btn__content\"><!></span>"), Ze = B.from_html("<span class=\"x-btn__append\"><!></span>"), Qe = B.from_html("<button type=\"button\"><!> <!> <!></button>");
function H(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "variant", 3, void 0), r = B.prop(t, "color", 3, void 0), i = B.prop(t, "size", 3, "default"), a = B.prop(t, "block", 3, !1), o = B.prop(t, "loading", 3, !1), s = B.prop(t, "disabled", 3, !1), c = B.prop(t, "icon", 3, !1), l = B.prop(t, "class", 3, ""), u = B.derived(() => we({
		variant: n(),
		size: i(),
		block: a(),
		loading: o(),
		disabled: s(),
		icon: c(),
		color: r()
	}, l()).join(" "));
	var d = Qe(), f = B.child(d), p = (e) => {
		var n = Ye(), r = B.child(n);
		B.snippet(r, () => t.prepend), B.reset(n), B.append(e, n);
	};
	B.if(f, (e) => {
		t.prepend && e(p);
	});
	var m = B.sibling(f, 2), h = (e) => {
		var n = Xe(), r = B.child(n);
		B.snippet(r, () => t.children), B.reset(n), B.append(e, n);
	};
	B.if(m, (e) => {
		t.children && e(h);
	});
	var g = B.sibling(m, 2), _ = (e) => {
		var n = Ze(), r = B.child(n);
		B.snippet(r, () => t.append), B.reset(n), B.append(e, n);
	};
	B.if(g, (e) => {
		t.append && e(_);
	}), B.reset(d), B.template_effect(() => {
		B.set_class(d, 1, B.clsx(B.get(u))), d.disabled = s() || o();
	}), B.delegated("click", d, function(...e) {
		t.onclick?.apply(this, e);
	}), B.append(e, d), B.pop();
}
B.delegate(["click"]);
//#endregion
//#region src/atoms/x-card/x-card.svelte
var $e = B.from_html("<div class=\"x-card__title\"><!></div>"), et = B.from_html("<div class=\"x-card__content\"><!></div>"), tt = B.from_html("<div class=\"x-card__actions\"><!></div>"), nt = B.from_html("<div><!> <!> <!></div>");
function U(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "variant", 3, void 0), r = B.prop(t, "color", 3, void 0), i = B.prop(t, "loading", 3, !1), a = B.prop(t, "disabled", 3, !1), o = B.prop(t, "hover", 3, !1), s = B.prop(t, "class", 3, ""), c = B.derived(() => Le({
		variant: n(),
		color: r(),
		loading: i(),
		disabled: a(),
		hover: o()
	}, s()).join(" "));
	var l = nt(), u = B.child(l), d = (e) => {
		var n = $e(), r = B.child(n);
		B.snippet(r, () => t.title), B.reset(n), B.append(e, n);
	};
	B.if(u, (e) => {
		t.title && e(d);
	});
	var f = B.sibling(u, 2), p = (e) => {
		var n = et(), r = B.child(n);
		B.snippet(r, () => t.children), B.reset(n), B.append(e, n);
	};
	B.if(f, (e) => {
		t.children && e(p);
	});
	var m = B.sibling(f, 2), h = (e) => {
		var n = tt(), r = B.child(n);
		B.snippet(r, () => t.actions), B.reset(n), B.append(e, n);
	};
	B.if(m, (e) => {
		t.actions && e(h);
	}), B.reset(l), B.template_effect(() => B.set_class(l, 1, B.clsx(B.get(c)))), B.append(e, l), B.pop();
}
//#endregion
//#region src/atoms/x-chip/x-chip.svelte
var rt = B.from_html("<span class=\"x-chip__prepend\"><!></span>"), it = B.from_html("<span class=\"x-chip__content\"><!></span>"), at = B.from_html("<button type=\"button\" class=\"x-chip__close\" aria-label=\"Close chip\">&times;</button>"), ot = B.from_html("<div role=\"status\"><!> <!> <!></div>");
function st(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "variant", 3, void 0), r = B.prop(t, "color", 3, void 0), i = B.prop(t, "size", 3, "default"), a = B.prop(t, "closable", 3, !1), o = B.prop(t, "disabled", 3, !1), s = B.prop(t, "filter", 3, !1), c = B.prop(t, "class", 3, ""), l = B.derived(() => Ae({
		variant: n(),
		color: r(),
		size: i(),
		closable: a(),
		disabled: o(),
		filter: s()
	}, c()).join(" "));
	var u = ot(), d = B.child(u), f = (e) => {
		var n = rt(), r = B.child(n);
		B.snippet(r, () => t.prepend), B.reset(n), B.append(e, n);
	};
	B.if(d, (e) => {
		t.prepend && e(f);
	});
	var p = B.sibling(d, 2), m = (e) => {
		var n = it(), r = B.child(n);
		B.snippet(r, () => t.children), B.reset(n), B.append(e, n);
	};
	B.if(p, (e) => {
		t.children && e(m);
	});
	var h = B.sibling(p, 2), g = (e) => {
		var n = at();
		B.delegated("click", n, (e) => {
			e.stopPropagation(), t.onclose?.();
		}), B.append(e, n);
	};
	B.if(h, (e) => {
		a() && e(g);
	}), B.reset(u), B.template_effect(() => B.set_class(u, 1, B.clsx(B.get(l)))), B.delegated("click", u, function(...e) {
		t.onclick?.apply(this, e);
	}), B.append(e, u), B.pop();
}
B.delegate(["click"]);
//#endregion
//#region src/atoms/x-dialog/x-dialog.svelte
var ct = B.from_html("<div class=\"x-dialog__title\"><!></div>"), lt = B.from_html("<div class=\"x-dialog__actions\"><!></div>"), ut = B.from_html("<div role=\"presentation\"><div class=\"x-dialog__surface\" role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\"><!> <div class=\"x-dialog__content\"><!></div> <!></div></div>");
function W(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "modelValue", 15, !1), r = B.prop(t, "maxWidth", 3, 600), i = B.prop(t, "width", 3, void 0), a = B.prop(t, "persistent", 3, !1), o = B.prop(t, "scrollable", 3, !1), s = B.prop(t, "fullscreen", 3, !1), c = B.prop(t, "class", 3, ""), l = B.derived(() => Ee({
		fullscreen: s(),
		scrollable: o()
	}, `x-dialog--native ${c()}`.trim()).join(" ")), u = B.derived(() => O(Be({
		maxWidth: r(),
		width: i()
	}))), d = () => {
		Fe({ persistent: a() }) && n(!1);
	};
	B.user_effect(() => {
		if (n()) return x(globalThis.document, "keydown", (e) => {
			e.key === "Escape" && d();
		});
	});
	var f = B.comment(), p = B.first_child(f), m = (e) => {
		var n = ut(), r = B.child(n), i = B.child(r), a = (e) => {
			var n = ct(), r = B.child(n);
			B.snippet(r, () => t.title), B.reset(n), B.append(e, n);
		};
		B.if(i, (e) => {
			t.title && e(a);
		});
		var o = B.sibling(i, 2), s = B.child(o);
		B.snippet(s, () => t.children ?? B.noop), B.reset(o);
		var c = B.sibling(o, 2), f = (e) => {
			var n = lt(), r = B.child(n);
			B.snippet(r, () => t.actions), B.reset(n), B.append(e, n);
		};
		B.if(c, (e) => {
			t.actions && e(f);
		}), B.reset(r), B.reset(n), B.template_effect(() => {
			B.set_class(n, 1, B.clsx(B.get(l))), B.set_style(r, B.get(u));
		}), B.delegated("click", n, d), B.delegated("click", r, (e) => e.stopPropagation()), B.append(e, n);
	};
	B.if(p, (e) => {
		n() && e(m);
	}), B.append(e, f), B.pop();
}
B.delegate(["click"]);
//#endregion
//#region src/atoms/x-sheet/x-sheet.svelte
var dt = B.from_html("<div><!></div>");
function G(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "color", 3, void 0), r = B.prop(t, "elevation", 3, void 0), i = B.prop(t, "rounded", 3, void 0), a = B.prop(t, "border", 3, void 0), o = B.prop(t, "transparent", 3, !1), s = B.prop(t, "class", 3, ""), c = B.derived(() => ue({
		transparent: o(),
		color: n(),
		elevation: r(),
		rounded: i(),
		border: a()
	}, s()).join(" "));
	var l = dt(), u = B.child(l), d = (e) => {
		var n = B.comment(), r = B.first_child(n);
		B.snippet(r, () => t.children), B.append(e, n);
	};
	B.if(u, (e) => {
		t.children && e(d);
	}), B.reset(l), B.template_effect(() => B.set_class(l, 1, B.clsx(B.get(c)))), B.append(e, l), B.pop();
}
//#endregion
//#region src/atoms/x-text-field/x-text-field.svelte
var ft = B.from_html("<label class=\"x-text-field__label\"> </label>"), pt = B.from_html("<span class=\"x-text-field__prepend-inner\"><!></span>"), mt = B.from_html("<button type=\"button\" class=\"x-text-field__clear-btn\" aria-label=\"Clear text\">&times;</button>"), ht = B.from_html("<span class=\"x-text-field__append-inner\"><!></span>"), gt = B.from_html("<div><!> <div class=\"x-text-field__input-wrap\"><!> <input class=\"x-text-field__native-input\"/> <!> <!></div></div>");
function K(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "modelValue", 15, ""), r = B.prop(t, "label", 3, void 0), i = B.prop(t, "placeholder", 3, void 0), a = B.prop(t, "type", 3, "text"), o = B.prop(t, "disabled", 3, !1), s = B.prop(t, "readonly", 3, !1), c = B.prop(t, "clearable", 3, !1), l = B.prop(t, "class", 3, ""), u = B.state(!1), d = B.derived(() => I({
		disabled: o(),
		readonly: s()
	}, B.get(u), l()).join(" "));
	var f = gt(), p = B.child(f), m = (e) => {
		var t = ft(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, r())), B.append(e, t);
	};
	B.if(p, (e) => {
		r() && e(m);
	});
	var h = B.sibling(p, 2), g = B.child(h), _ = (e) => {
		var n = pt(), r = B.child(n);
		B.snippet(r, () => t.prependInner), B.reset(n), B.append(e, n);
	};
	B.if(g, (e) => {
		t.prependInner && e(_);
	});
	var v = B.sibling(g, 2);
	B.remove_input_defaults(v);
	var y = B.sibling(v, 2), b = (e) => {
		var r = mt();
		B.delegated("click", r, () => {
			n(""), t.onclear?.();
		}), B.append(e, r);
	};
	B.if(y, (e) => {
		c() && n() && e(b);
	});
	var x = B.sibling(y, 2), S = (e) => {
		var n = ht(), r = B.child(n);
		B.snippet(r, () => t.appendInner), B.reset(n), B.append(e, n);
	};
	B.if(x, (e) => {
		t.appendInner && e(S);
	}), B.reset(h), B.reset(f), B.template_effect(() => {
		B.set_class(f, 1, B.clsx(B.get(d))), B.set_attribute(v, "type", a()), B.set_attribute(v, "placeholder", i()), v.disabled = o(), v.readOnly = s();
	}), B.delegated("input", v, function(...e) {
		t.oninput?.apply(this, e);
	}), B.event("focus", v, () => {
		B.set(u, !0);
	}), B.event("blur", v, () => {
		B.set(u, !1);
	}), B.bind_value(v, n), B.append(e, f), B.pop();
}
B.delegate(["input", "click"]);
//#endregion
//#region src/atoms/x-avatar/x-avatar.svelte
var _t = B.from_html("<img/>"), vt = B.from_html("<span> </span>"), yt = B.from_html("<span></span>"), bt = B.from_html("<div><!> <!></div>");
function xt(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "src", 3, void 0), r = B.prop(t, "alt", 3, void 0), i = B.prop(t, "text", 3, void 0), a = B.prop(t, "size", 3, "default"), o = B.prop(t, "bordered", 3, !1), s = B.prop(t, "status", 3, void 0), c = B.prop(t, "class", 3, ""), l = B.derived(() => ve({
		size: a(),
		bordered: o(),
		status: s()
	}, c()).join(" ")), u = B.derived(() => be(i() || r()));
	var d = bt(), f = B.child(d), p = (e) => {
		var t = _t();
		B.template_effect(() => {
			B.set_attribute(t, "src", n()), B.set_attribute(t, "alt", r() || "Avatar");
		}), B.append(e, t);
	}, m = (e) => {
		var t = vt(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, B.get(u))), B.append(e, t);
	}, h = (e) => {
		var n = B.comment(), r = B.first_child(n);
		B.snippet(r, () => t.children), B.append(e, n);
	};
	B.if(f, (e) => {
		n() ? e(p) : B.get(u) ? e(m, 1) : t.children && e(h, 2);
	});
	var g = B.sibling(f, 2), _ = (e) => {
		var t = yt();
		B.template_effect((e) => B.set_class(t, 1, e), [() => B.clsx(["x-avatar__status-dot", `x-avatar__status-dot--${s()}`].join(" "))]), B.append(e, t);
	};
	B.if(g, (e) => {
		s() && e(_);
	}), B.reset(d), B.template_effect(() => B.set_class(d, 1, B.clsx(B.get(l)))), B.append(e, d), B.pop();
}
//#endregion
//#region src/atoms/x-badge/x-badge.svelte
var St = B.from_html("<div class=\"x-badge-wrapper\"><!> <span><!></span></div>"), Ct = B.from_html("<span><!></span>");
function wt(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "content", 3, void 0), r = B.prop(t, "color", 3, "primary"), i = B.prop(t, "dot", 3, !1), a = B.prop(t, "inline", 3, !1), o = B.prop(t, "max", 3, 99), s = B.prop(t, "floating", 3, !0), c = B.prop(t, "class", 3, ""), l = B.derived(() => ye(n(), o())), u = B.derived(() => A({
		dot: i(),
		inline: a(),
		floating: s(),
		color: r()
	}, c()).join(" "));
	var d = B.comment(), f = B.first_child(d), p = (e) => {
		var n = St(), r = B.child(n);
		B.snippet(r, () => t.children);
		var a = B.sibling(r, 2), o = B.child(a), s = (e) => {
			var t = B.text();
			B.template_effect(() => B.set_text(t, B.get(l))), B.append(e, t);
		};
		B.if(o, (e) => {
			i() || e(s);
		}), B.reset(a), B.reset(n), B.template_effect(() => B.set_class(a, 1, B.clsx(B.get(u)))), B.append(e, n);
	}, m = (e) => {
		var t = Ct(), n = B.child(t), r = (e) => {
			var t = B.text();
			B.template_effect(() => B.set_text(t, B.get(l))), B.append(e, t);
		};
		B.if(n, (e) => {
			i() || e(r);
		}), B.reset(t), B.template_effect(() => B.set_class(t, 1, B.clsx(B.get(u)))), B.append(e, t);
	};
	B.if(f, (e) => {
		t.children ? e(p) : e(m, -1);
	}), B.append(e, d), B.pop();
}
//#endregion
//#region src/atoms/x-checkbox/x-checkbox.svelte
var Tt = B.from_svg("<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>"), Et = B.from_html("<span class=\"x-checkbox__label\"> </span>"), Dt = B.from_html("<div role=\"checkbox\"><span class=\"x-checkbox__box\"><!></span> <!></div>");
function Ot(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "modelValue", 15, !1), r = B.prop(t, "label", 3, void 0), i = B.prop(t, "disabled", 3, !1), a = B.prop(t, "class", 3, ""), o = B.derived(() => Re({ disabled: i() }, n(), a()).join(" ")), s = () => {
		i() || (n(!n()), t.onchange?.(n()));
	};
	var c = Dt(), l = B.child(c), u = B.child(l), d = (e) => {
		var t = Tt();
		B.append(e, t);
	};
	B.if(u, (e) => {
		n() && e(d);
	}), B.reset(l);
	var f = B.sibling(l, 2), p = (e) => {
		var t = Et(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, r())), B.append(e, t);
	}, m = (e) => {
		var n = B.comment(), r = B.first_child(n);
		B.snippet(r, () => t.children), B.append(e, n);
	};
	B.if(f, (e) => {
		r() ? e(p) : t.children && e(m, 1);
	}), B.reset(c), B.template_effect(() => {
		B.set_class(c, 1, B.clsx(B.get(o))), B.set_attribute(c, "aria-checked", n()), B.set_attribute(c, "tabindex", i() ? -1 : 0);
	}), B.delegated("click", c, s), B.delegated("keydown", c, (e) => {
		(e.key === " " || e.key === "Enter") && (e.preventDefault(), s());
	}), B.append(e, c), B.pop();
}
B.delegate(["click", "keydown"]);
//#endregion
//#region src/atoms/x-switch/x-switch.svelte
var kt = B.from_html("<span class=\"x-switch__label\"> </span>"), At = B.from_html("<div role=\"switch\"><span class=\"x-switch__track\"><span class=\"x-switch__thumb\"></span></span> <!></div>");
function jt(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "modelValue", 15, !1), r = B.prop(t, "label", 3, void 0), i = B.prop(t, "disabled", 3, !1), a = B.prop(t, "class", 3, ""), o = B.derived(() => j({ disabled: i() }, n(), a()).join(" ")), s = () => {
		i() || (n(!n()), t.onchange?.(n()));
	};
	var c = At(), l = B.sibling(B.child(c), 2), u = (e) => {
		var t = kt(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, r())), B.append(e, t);
	}, d = (e) => {
		var n = B.comment(), r = B.first_child(n);
		B.snippet(r, () => t.children), B.append(e, n);
	};
	B.if(l, (e) => {
		r() ? e(u) : t.children && e(d, 1);
	}), B.reset(c), B.template_effect(() => {
		B.set_class(c, 1, B.clsx(B.get(o))), B.set_attribute(c, "aria-checked", n()), B.set_attribute(c, "tabindex", i() ? -1 : 0);
	}), B.delegated("click", c, s), B.delegated("keydown", c, (e) => {
		(e.key === " " || e.key === "Enter") && (e.preventDefault(), s());
	}), B.append(e, c), B.pop();
}
B.delegate(["click", "keydown"]);
//#endregion
//#region src/atoms/x-divider/x-divider.svelte
var Mt = B.from_html("<hr/>");
function Nt(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "vertical", 3, !1), r = B.prop(t, "inset", 3, !1), i = B.prop(t, "class", 3, ""), a = B.derived(() => he({
		vertical: n(),
		inset: r()
	}, i()).join(" "));
	var o = Mt();
	B.template_effect(() => {
		B.set_class(o, 1, B.clsx(B.get(a))), B.set_attribute(o, "aria-orientation", n() ? "vertical" : "horizontal");
	}), B.append(e, o), B.pop();
}
//#endregion
//#region src/atoms/x-skeleton/x-skeleton.svelte
var Pt = B.from_html("<div></div>");
function Ft(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "shape", 3, "rounded"), r = B.prop(t, "animation", 3, "shimmer"), i = B.prop(t, "width", 3, "100%"), a = B.prop(t, "height", 3, "1rem"), o = B.prop(t, "delay", 3, "0s"), s = B.prop(t, "class", 3, ""), c = B.derived(() => _e({
		shape: n(),
		animation: r()
	}, s()).join(" ")), l = B.derived(() => z(i())), u = B.derived(() => z(a()));
	var d = Pt();
	let f;
	B.template_effect(() => {
		B.set_class(d, 1, B.clsx(B.get(c))), f = B.set_style(d, "", f, {
			width: B.get(l),
			height: B.get(u),
			"--x-skeleton-delay": o()
		});
	}), B.append(e, d), B.pop();
}
//#endregion
//#region src/atoms/x-alert/x-alert.svelte
var It = B.from_html("<div class=\"x-alert__icon\"><!></div>"), Lt = B.from_html("<div class=\"x-alert__title\"><!></div>"), Rt = B.from_html("<div class=\"x-alert__title\"> </div>"), zt = B.from_html("<div class=\"x-alert__text\"> </div>"), Bt = B.from_html("<div class=\"x-alert__text\"><!></div>"), Vt = B.from_html("<button type=\"button\" class=\"x-alert__close\" aria-label=\"Close alert\">&times;</button>"), Ht = B.from_html("<div role=\"alert\"><!> <div class=\"x-alert__content\"><!> <!></div> <!></div>");
function Ut(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "type", 3, "info"), r = B.prop(t, "title", 3, void 0), i = B.prop(t, "text", 3, void 0), a = B.prop(t, "closable", 3, !1), o = B.prop(t, "variant", 3, void 0), s = B.prop(t, "class", 3, ""), c = B.derived(() => k({
		type: n(),
		variant: o()
	}, s()).join(" "));
	var l = Ht(), u = B.child(l), d = (e) => {
		var n = It(), r = B.child(n);
		B.snippet(r, () => t.icon), B.reset(n), B.append(e, n);
	};
	B.if(u, (e) => {
		t.icon && e(d);
	});
	var f = B.sibling(u, 2), p = B.child(f), m = (e) => {
		var n = Lt(), r = B.child(n);
		B.snippet(r, () => t.titleSnippet), B.reset(n), B.append(e, n);
	}, h = (e) => {
		var t = Rt(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, r())), B.append(e, t);
	};
	B.if(p, (e) => {
		t.titleSnippet ? e(m) : r() && e(h, 1);
	});
	var g = B.sibling(p, 2), _ = (e) => {
		var t = zt(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, i())), B.append(e, t);
	}, v = (e) => {
		var n = Bt(), r = B.child(n);
		B.snippet(r, () => t.children), B.reset(n), B.append(e, n);
	};
	B.if(g, (e) => {
		i() ? e(_) : t.children && e(v, 1);
	}), B.reset(f);
	var y = B.sibling(f, 2), b = (e) => {
		var n = Vt();
		B.delegated("click", n, function(...e) {
			t.onclose?.apply(this, e);
		}), B.append(e, n);
	};
	B.if(y, (e) => {
		a() && e(b);
	}), B.reset(l), B.template_effect(() => B.set_class(l, 1, B.clsx(B.get(c)))), B.append(e, l), B.pop();
}
B.delegate(["click"]);
//#endregion
//#region src/atoms/x-progress-linear/x-progress-linear.svelte
var Wt = B.from_html("<div role=\"progressbar\"><div class=\"x-progress-linear__bar\"></div></div>");
function q(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "modelValue", 3, 0), r = B.prop(t, "indeterminate", 3, !1), i = B.prop(t, "height", 3, 4), a = B.prop(t, "rounded", 3, !0), o = B.prop(t, "striped", 3, !1), s = B.prop(t, "class", 3, ""), c = B.derived(() => L(n())), l = B.derived(() => Ge({
		indeterminate: r(),
		rounded: a(),
		striped: o()
	}, s()).join(" ")), u = B.derived(() => typeof i() == "number" ? `${i()}px` : i());
	var d = Wt();
	B.set_attribute(d, "aria-valuemin", 0), B.set_attribute(d, "aria-valuemax", 100);
	let f;
	var p = B.child(d);
	let m;
	B.reset(d), B.template_effect(() => {
		B.set_class(d, 1, B.clsx(B.get(l))), B.set_attribute(d, "aria-valuenow", r() ? void 0 : B.get(c)), f = B.set_style(d, "", f, { height: B.get(u) }), m = B.set_style(p, "", m, { width: r() ? void 0 : `${B.get(c)}%` });
	}), B.append(e, d), B.pop();
}
//#endregion
//#region src/atoms/x-tooltip/x-tooltip.svelte
var Gt = B.from_html("<div class=\"x-tooltip-wrapper\"><!> <div role=\"tooltip\"><!></div></div>");
function Kt(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "text", 3, void 0), r = B.prop(t, "location", 3, "top"), i = B.prop(t, "disabled", 3, !1), a = B.prop(t, "class", 3, ""), o = B.derived(() => M({ location: r() }, a()).join(" "));
	var s = B.comment(), c = B.first_child(s), l = (e) => {
		var n = B.comment(), r = B.first_child(n), i = (e) => {
			var n = B.comment(), r = B.first_child(n);
			B.snippet(r, () => t.children), B.append(e, n);
		};
		B.if(r, (e) => {
			t.children && e(i);
		}), B.append(e, n);
	}, u = (e) => {
		var r = Gt(), i = B.child(r), a = (e) => {
			var n = B.comment(), r = B.first_child(n);
			B.snippet(r, () => t.children), B.append(e, n);
		};
		B.if(i, (e) => {
			t.children && e(a);
		});
		var s = B.sibling(i, 2), c = B.child(s), l = (e) => {
			var n = B.comment(), r = B.first_child(n);
			B.snippet(r, () => t.tooltip), B.append(e, n);
		}, u = (e) => {
			var t = B.text();
			B.template_effect(() => B.set_text(t, n())), B.append(e, t);
		};
		B.if(c, (e) => {
			t.tooltip ? e(l) : e(u, -1);
		}), B.reset(s), B.reset(r), B.template_effect(() => B.set_class(s, 1, B.clsx(B.get(o)))), B.append(e, r);
	};
	B.if(c, (e) => {
		i() ? e(l) : e(u, -1);
	}), B.append(e, s), B.pop();
}
//#endregion
//#region src/atoms/x-list/x-list.svelte
var qt = B.from_html("<div><!></div>");
function Jt(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "density", 3, "default"), r = B.prop(t, "lines", 3, "one"), i = B.prop(t, "nav", 3, !1), a = B.prop(t, "color", 3, void 0), o = B.prop(t, "variant", 3, void 0), s = B.prop(t, "disabled", 3, !1), c = B.prop(t, "class", 3, ""), l = B.derived(() => me({
		density: n(),
		lines: r(),
		nav: i(),
		color: a(),
		variant: o(),
		disabled: s()
	}, c()).join(" "));
	var u = qt(), d = B.child(u), f = (e) => {
		var n = B.comment(), r = B.first_child(n);
		B.snippet(r, () => t.children), B.append(e, n);
	};
	B.if(d, (e) => {
		t.children && e(f);
	}), B.reset(u), B.template_effect(() => B.set_class(u, 1, B.clsx(B.get(l)))), B.append(e, u), B.pop();
}
//#endregion
//#region src/atoms/x-list-item/x-list-item.svelte
var Yt = B.from_html("<div class=\"x-list-item__prepend\"><!></div>"), Xt = B.from_html("<div class=\"x-list-item__title\"> </div>"), Zt = B.from_html("<div class=\"x-list-item__subtitle\"> </div>"), Qt = B.from_html("<div class=\"x-list-item__append\"><!></div>"), $t = B.from_html("<div><!> <div class=\"x-list-item__content\"><!> <!> <!></div> <!></div>");
function en(e, t) {
	B.push(t, !0);
	let n = B.prop(t, "title", 3, void 0), r = B.prop(t, "subtitle", 3, void 0), i = B.prop(t, "value", 3, void 0), a = B.prop(t, "active", 3, !1), o = B.prop(t, "disabled", 3, !1), s = B.prop(t, "color", 3, void 0), c = B.prop(t, "density", 3, void 0), l = B.prop(t, "lines", 3, void 0), u = B.prop(t, "variant", 3, void 0), d = B.prop(t, "rounded", 3, void 0), f = B.prop(t, "ripple", 3, !0), p = B.prop(t, "class", 3, ""), m = B.derived(() => P({
		title: n(),
		subtitle: r(),
		value: i(),
		active: a(),
		disabled: o(),
		color: s(),
		density: c(),
		lines: l(),
		variant: u(),
		rounded: d(),
		ripple: f()
	}, p()).join(" "));
	var h = $t(), g = B.child(h), _ = (e) => {
		var n = Yt(), r = B.child(n);
		B.snippet(r, () => t.prepend), B.reset(n), B.append(e, n);
	};
	B.if(g, (e) => {
		t.prepend && e(_);
	});
	var v = B.sibling(g, 2), y = B.child(v), b = (e) => {
		var t = Xt(), r = B.only_child(t, !0);
		B.template_effect(() => B.set_text(r, n())), B.append(e, t);
	};
	B.if(y, (e) => {
		n() && e(b);
	});
	var x = B.sibling(y, 2), S = (e) => {
		var t = Zt(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, r())), B.append(e, t);
	};
	B.if(x, (e) => {
		r() && e(S);
	});
	var C = B.sibling(x, 2), w = (e) => {
		var n = B.comment(), r = B.first_child(n);
		B.snippet(r, () => t.children), B.append(e, n);
	};
	B.if(C, (e) => {
		t.children && e(w);
	}), B.reset(v);
	var T = B.sibling(v, 2), E = (e) => {
		var n = Qt(), r = B.child(n);
		B.snippet(r, () => t.append), B.reset(n), B.append(e, n);
	};
	B.if(T, (e) => {
		t.append && e(E);
	}), B.reset(h), B.template_effect(() => B.set_class(h, 1, B.clsx(B.get(m)))), B.append(e, h), B.pop();
}
//#endregion
//#region src/atoms/x-text/x-text.svelte
var tn = {
	hash: "svelte-1h4bff7",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,\n.v-theme--dark.svelte-1h4bff7 {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-1h4bff7 {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.x-text.svelte-1h4bff7 {margin:0;color:inherit;font-family:inherit;line-height:1.5;}.x-text--display.svelte-1h4bff7 {font-size:2.25rem;line-height:1.15;font-weight:700;letter-spacing:-0.02em;}.x-text--title.svelte-1h4bff7 {font-size:1.375rem;line-height:1.25;font-weight:600;}.x-text--subtitle.svelte-1h4bff7 {font-size:1.0625rem;line-height:1.35;font-weight:500;}.x-text--body.svelte-1h4bff7 {font-size:0.9375rem;}.x-text--caption.svelte-1h4bff7 {font-size:0.8125rem;opacity:0.8;}.x-text--overline.svelte-1h4bff7 {font-size:0.6875rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;}.x-text--code.svelte-1h4bff7 {font-family:ui-monospace, SFMono-Regular, Menlo, monospace;font-size:0.875em;}.x-text--weight-regular.svelte-1h4bff7 {font-weight:400;}.x-text--weight-medium.svelte-1h4bff7 {font-weight:500;}.x-text--weight-semibold.svelte-1h4bff7 {font-weight:600;}.x-text--weight-bold.svelte-1h4bff7 {font-weight:700;}.x-text--align-start.svelte-1h4bff7 {text-align:start;}.x-text--align-center.svelte-1h4bff7 {text-align:center;}.x-text--align-end.svelte-1h4bff7 {text-align:end;}.x-text--truncate.svelte-1h4bff7 {overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.x-tone--primary.svelte-1h4bff7 {color:var(--x-tone-primary);}.x-tone--secondary.svelte-1h4bff7 {color:var(--x-tone-secondary);}.x-tone--success.svelte-1h4bff7 {color:var(--x-tone-success);}.x-tone--warning.svelte-1h4bff7 {color:var(--x-tone-warning);}.x-tone--error.svelte-1h4bff7 {color:var(--x-tone-error);}.x-tone--info.svelte-1h4bff7 {color:var(--x-tone-info);}.x-tone--pink.svelte-1h4bff7 {color:var(--x-tone-pink);}.x-tone--lime.svelte-1h4bff7 {color:var(--x-tone-lime);}.x-tone--sky.svelte-1h4bff7 {color:var(--x-tone-sky);}.x-tone--purple.svelte-1h4bff7 {color:var(--x-tone-purple);}.x-tone--slate.svelte-1h4bff7 {color:var(--x-tone-slate);}.x-tone--muted.svelte-1h4bff7 {color:var(--x-tone-muted);}"
};
function nn(e, t) {
	B.push(t, !0), B.append_styles(e, tn);
	let n = B.prop(t, "tag", 3, void 0), r = B.prop(t, "variant", 3, "body"), i = B.prop(t, "tone", 3, void 0), a = B.prop(t, "weight", 3, void 0), o = B.prop(t, "align", 3, void 0), s = B.prop(t, "truncate", 3, !1), c = B.prop(t, "class", 3, ""), l = B.derived(() => N({
		tag: n(),
		variant: r()
	})), u = B.derived(() => je({
		variant: r(),
		tone: i(),
		weight: a(),
		align: o(),
		truncate: s()
	}, c()).join(" "));
	var d = B.comment(), f = B.first_child(d);
	B.element(f, () => B.get(l), !1, (e, n) => {
		B.attribute_effect(e, () => ({ class: B.get(u) }), void 0, void 0, void 0, "svelte-1h4bff7");
		var r = B.comment(), i = B.first_child(r);
		B.snippet(i, () => t.children ?? B.noop), B.append(n, r);
	}), B.append(e, d), B.pop();
}
//#endregion
//#region src/atoms/x-stack/x-stack.svelte
var rn = {
	hash: "svelte-tj0tbh",
	code: ".x-stack.svelte-tj0tbh {display:flex;min-width:0;margin:0;padding:0;}.x-stack--row.svelte-tj0tbh {flex-direction:row;}.x-stack--column.svelte-tj0tbh {flex-direction:column;}.x-stack--wrap.svelte-tj0tbh {flex-wrap:wrap;}.x-stack--gap-none.svelte-tj0tbh {gap:var(--x-space-none, 0);}.x-stack--gap-xs.svelte-tj0tbh {gap:var(--x-space-xs, 4px);}.x-stack--gap-sm.svelte-tj0tbh {gap:var(--x-space-sm, 8px);}.x-stack--gap-md.svelte-tj0tbh {gap:var(--x-space-md, 12px);}.x-stack--gap-lg.svelte-tj0tbh {gap:var(--x-space-lg, 16px);}.x-stack--gap-xl.svelte-tj0tbh {gap:var(--x-space-xl, 24px);}.x-stack--justify-start.svelte-tj0tbh {justify-content:flex-start;}.x-stack--justify-center.svelte-tj0tbh {justify-content:center;}.x-stack--justify-end.svelte-tj0tbh {justify-content:flex-end;}.x-stack--justify-between.svelte-tj0tbh {justify-content:space-between;}.x-stack--justify-around.svelte-tj0tbh {justify-content:space-around;}.x-stack--justify-evenly.svelte-tj0tbh {justify-content:space-evenly;}.x-stack--align-start.svelte-tj0tbh {align-items:flex-start;}.x-stack--align-center.svelte-tj0tbh {align-items:center;}.x-stack--align-end.svelte-tj0tbh {align-items:flex-end;}.x-stack--align-stretch.svelte-tj0tbh {align-items:stretch;}.x-stack--align-baseline.svelte-tj0tbh {align-items:baseline;}"
};
function an(e, t) {
	B.push(t, !0), B.append_styles(e, rn);
	let n = B.prop(t, "direction", 3, "column"), r = B.prop(t, "gap", 3, "md"), i = B.prop(t, "align", 3, void 0), a = B.prop(t, "justify", 3, void 0), o = B.prop(t, "wrap", 3, !1), s = B.prop(t, "tag", 3, "div"), c = B.prop(t, "class", 3, ""), l = B.derived(() => de({
		direction: n(),
		gap: r(),
		align: i(),
		justify: a(),
		wrap: o()
	}, c()).join(" "));
	var u = B.comment(), d = B.first_child(u);
	B.element(d, s, !1, (e, n) => {
		B.attribute_effect(e, () => ({ class: B.get(l) }), void 0, void 0, void 0, "svelte-tj0tbh");
		var r = B.comment(), i = B.first_child(r);
		B.snippet(i, () => t.children ?? B.noop), B.append(n, r);
	}), B.append(e, u), B.pop();
}
//#endregion
//#region src/atoms/x-grid/x-grid.svelte
var on = {
	hash: "svelte-u07wj9",
	code: ".x-grid.svelte-u07wj9 {display:grid;min-width:0;margin:0;padding:0;}.x-grid--auto-fill.svelte-u07wj9 {grid-template-columns:repeat(auto-fill, minmax(min(var(--x-grid-min, 200px), 100%), 1fr));}.x-grid--cols-1.svelte-u07wj9 {grid-template-columns:repeat(1, minmax(0, 1fr));}.x-grid--cols-2.svelte-u07wj9 {grid-template-columns:repeat(2, minmax(0, 1fr));}.x-grid--cols-3.svelte-u07wj9 {grid-template-columns:repeat(3, minmax(0, 1fr));}.x-grid--cols-4.svelte-u07wj9 {grid-template-columns:repeat(4, minmax(0, 1fr));}.x-grid--cols-5.svelte-u07wj9 {grid-template-columns:repeat(5, minmax(0, 1fr));}.x-grid--cols-6.svelte-u07wj9 {grid-template-columns:repeat(6, minmax(0, 1fr));}.x-grid--cols-7.svelte-u07wj9 {grid-template-columns:repeat(7, minmax(0, 1fr));}.x-grid--cols-8.svelte-u07wj9 {grid-template-columns:repeat(8, minmax(0, 1fr));}.x-grid--cols-9.svelte-u07wj9 {grid-template-columns:repeat(9, minmax(0, 1fr));}.x-grid--cols-10.svelte-u07wj9 {grid-template-columns:repeat(10, minmax(0, 1fr));}.x-grid--cols-11.svelte-u07wj9 {grid-template-columns:repeat(11, minmax(0, 1fr));}.x-grid--cols-12.svelte-u07wj9 {grid-template-columns:repeat(12, minmax(0, 1fr));}.x-grid--gap-none.svelte-u07wj9 {gap:var(--x-space-none, 0);}.x-grid--gap-xs.svelte-u07wj9 {gap:var(--x-space-xs, 4px);}.x-grid--gap-sm.svelte-u07wj9 {gap:var(--x-space-sm, 8px);}.x-grid--gap-md.svelte-u07wj9 {gap:var(--x-space-md, 12px);}.x-grid--gap-lg.svelte-u07wj9 {gap:var(--x-space-lg, 16px);}.x-grid--gap-xl.svelte-u07wj9 {gap:var(--x-space-xl, 24px);}.x-grid--align-start.svelte-u07wj9 {align-items:start;}.x-grid--align-center.svelte-u07wj9 {align-items:center;}.x-grid--align-end.svelte-u07wj9 {align-items:end;}.x-grid--align-stretch.svelte-u07wj9 {align-items:stretch;}"
};
function sn(e, t) {
	B.push(t, !0), B.append_styles(e, on);
	let n = B.prop(t, "columns", 3, 1), r = B.prop(t, "minItemWidth", 3, void 0), i = B.prop(t, "gap", 3, "md"), a = B.prop(t, "align", 3, void 0), o = B.prop(t, "tag", 3, "div"), s = B.prop(t, "class", 3, ""), c = B.derived(() => F({
		columns: n(),
		minItemWidth: r(),
		gap: i(),
		align: a()
	}, s()).join(" ")), l = B.derived(() => O(Me({ minItemWidth: r() })));
	var u = B.comment(), d = B.first_child(u);
	B.element(d, o, !1, (e, n) => {
		B.attribute_effect(e, () => ({
			class: B.get(c),
			style: B.get(l)
		}), void 0, void 0, void 0, "svelte-u07wj9");
		var r = B.comment(), i = B.first_child(r);
		B.snippet(i, () => t.children ?? B.noop), B.append(n, r);
	}), B.append(e, u), B.pop();
}
//#endregion
//#region src/atoms/x-textarea/x-textarea.svelte
var cn = B.from_html("<span class=\"x-textarea__label svelte-1eqd095\"> </span>"), ln = B.from_html("<span class=\"x-textarea__counter svelte-1eqd095\"> </span>"), un = B.from_html("<label><!> <textarea class=\"x-textarea__native svelte-1eqd095\"></textarea> <!></label>"), dn = {
	hash: "svelte-1eqd095",
	code: ".x-textarea--native.svelte-1eqd095 {display:flex;flex-direction:column;gap:4px;}.x-textarea--native.svelte-1eqd095 .x-textarea__label:where(.svelte-1eqd095) {font-size:0.8125rem;opacity:0.8;}.x-textarea--native.svelte-1eqd095 .x-textarea__native:where(.svelte-1eqd095) {width:100%;min-height:3em;padding:8px 12px;border:1px solid var(--x-glass-border, rgba(98, 201, 255, 0.15));border-radius:10px;background:var(--x-glass-bg-subtle, rgba(11, 19, 41, 0.5));color:inherit;font:inherit;resize:vertical;}.x-textarea--native.x-textarea--focused.svelte-1eqd095 .x-textarea__native:where(.svelte-1eqd095) {border-color:var(--x-glass-border-focus, rgba(98, 201, 255, 0.6));outline:none;}.x-textarea--native.x-textarea--auto-grow.svelte-1eqd095 .x-textarea__native:where(.svelte-1eqd095) {field-sizing:content;resize:none;}.x-textarea--native.x-textarea--disabled.svelte-1eqd095 {opacity:0.5;}.x-textarea--native.svelte-1eqd095 .x-textarea__counter:where(.svelte-1eqd095) {align-self:flex-end;font-size:0.75rem;opacity:0.7;}"
};
function fn(e, t) {
	B.push(t, !0), B.append_styles(e, dn);
	let n = B.prop(t, "modelValue", 15, ""), r = B.prop(t, "label", 3, void 0), i = B.prop(t, "placeholder", 3, void 0), a = B.prop(t, "rows", 3, 3), o = B.prop(t, "autoGrow", 3, !1), s = B.prop(t, "disabled", 3, !1), c = B.prop(t, "readonly", 3, !1), l = B.prop(t, "maxlength", 3, void 0), u = B.prop(t, "class", 3, ""), d = B.state(!1), f = B.derived(() => ge({
		disabled: s(),
		readonly: c(),
		autoGrow: o()
	}, B.get(d), `x-textarea--native ${u()}`.trim()).join(" ")), p = B.derived(() => pe(n(), l()));
	var m = un(), h = B.child(m), g = (e) => {
		var t = cn(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, r())), B.append(e, t);
	};
	B.if(h, (e) => {
		r() && e(g);
	});
	var _ = B.sibling(h, 2);
	B.remove_textarea_child(_);
	var v = B.sibling(_, 2), y = (e) => {
		var t = ln(), n = B.only_child(t, !0);
		B.template_effect(() => B.set_text(n, B.get(p))), B.append(e, t);
	};
	B.if(v, (e) => {
		B.get(p) && e(y);
	}), B.reset(m), B.template_effect(() => {
		B.set_class(m, 1, B.clsx(B.get(f)), "svelte-1eqd095"), B.set_attribute(_, "rows", a()), B.set_attribute(_, "placeholder", i()), _.disabled = s(), _.readOnly = c(), B.set_attribute(_, "maxlength", l());
	}), B.delegated("input", _, function(...e) {
		t.oninput?.apply(this, e);
	}), B.event("focus", _, () => {
		B.set(d, !0);
	}), B.event("blur", _, () => {
		B.set(d, !1);
	}), B.bind_value(_, n), B.append(e, m), B.pop();
}
B.delegate(["input"]);
//#endregion
//#region src/atoms/x-nav-drawer/x-nav-drawer.svelte
var pn = B.from_html("<div class=\"x-nav-drawer__scrim svelte-137z9nv\" role=\"presentation\"></div>"), mn = B.from_html("<!> <nav><!> <div class=\"x-nav-drawer__content svelte-137z9nv\"><!></div> <!></nav>", 1), hn = {
	hash: "svelte-137z9nv",
	code: ".x-nav-drawer--native.svelte-137z9nv {display:flex;flex-direction:column;width:var(--x-nav-drawer-width, 256px);height:100%;overflow-y:auto;background:var(--x-glass-bg, rgba(11, 19, 41, 0.75));border-inline-end:1px solid var(--x-glass-border, rgba(98, 201, 255, 0.15));transition:width 0.2s ease;}.x-nav-drawer--native.x-nav-drawer--end.svelte-137z9nv {border-inline-end:none;border-inline-start:1px solid var(--x-glass-border, rgba(98, 201, 255, 0.15));}.x-nav-drawer--native.x-nav-drawer--temporary.svelte-137z9nv {position:fixed;inset-block:0;z-index:2000;}.x-nav-drawer--native.x-nav-drawer--temporary.x-nav-drawer--start.svelte-137z9nv {inset-inline-start:0;}.x-nav-drawer--native.x-nav-drawer--temporary.x-nav-drawer--end.svelte-137z9nv {inset-inline-end:0;}.x-nav-drawer--native.x-nav-drawer--closed.svelte-137z9nv {display:none;}.x-nav-drawer--native.x-nav-drawer--floating.svelte-137z9nv {border:none;}.x-nav-drawer--native.svelte-137z9nv .x-nav-drawer__content:where(.svelte-137z9nv) {flex:1 1 auto;}.x-nav-drawer__scrim.svelte-137z9nv {position:fixed;inset:0;z-index:1999;background:rgba(5, 8, 17, 0.5);}"
};
function gn(e, t) {
	B.push(t, !0), B.append_styles(e, hn);
	let n = B.prop(t, "modelValue", 15, !0), r = B.prop(t, "location", 3, "start"), i = B.prop(t, "rail", 3, !1), a = B.prop(t, "temporary", 3, !1), o = B.prop(t, "permanent", 3, !1), s = B.prop(t, "width", 3, 256), c = B.prop(t, "floating", 3, !1), l = B.prop(t, "class", 3, ""), u = B.derived(() => ({
		modelValue: n(),
		location: r(),
		rail: i(),
		temporary: a(),
		permanent: o(),
		width: s(),
		floating: c()
	})), d = B.derived(() => Ue(B.get(u), `x-nav-drawer--native ${l()}`.trim()).join(" ")), f = B.derived(() => O(R(B.get(u)))), p = B.derived(() => fe(B.get(u)));
	var m = mn(), h = B.first_child(m), g = (e) => {
		var t = pn();
		B.delegated("click", t, () => {
			n(!1);
		}), B.append(e, t);
	};
	B.if(h, (e) => {
		B.get(p) && e(g);
	});
	var _ = B.sibling(h, 2), v = B.child(_);
	B.snippet(v, () => t.prepend ?? B.noop);
	var y = B.sibling(v, 2), b = B.child(y);
	B.snippet(b, () => t.children ?? B.noop), B.reset(y);
	var x = B.sibling(y, 2);
	B.snippet(x, () => t.append ?? B.noop), B.reset(_), B.template_effect(() => {
		B.set_class(_, 1, B.clsx(B.get(d)), "svelte-137z9nv"), B.set_style(_, B.get(f));
	}), B.append(e, m), B.pop();
}
B.delegate(["click"]);
//#endregion
//#region src/molecules/m-confirm-dialog/m-confirm-dialog.svelte
var _n = B.from_html("<div class=\"x-dialog\" role=\"dialog\" aria-modal=\"true\"><div class=\"x-dialog__surface\"><div class=\"m-confirm-dialog__body svelte-wjql4s\"><h3 class=\"m-confirm-dialog__title svelte-wjql4s\"> </h3> <p class=\"m-confirm-dialog__message svelte-wjql4s\"> </p></div> <div class=\"x-dialog__actions\"><!> <!></div></div></div>"), vn = {
	hash: "svelte-wjql4s",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-confirm-dialog__body.svelte-wjql4s {padding:24px;}.m-confirm-dialog__title.svelte-wjql4s {font-size:1.15rem;font-weight:600;color:#f8fafc;margin-bottom:8px;}.m-confirm-dialog__message.svelte-wjql4s {font-size:0.95rem;color:#94a3b8;line-height:1.5;}"
};
function yn(e, t) {
	B.push(t, !0), B.append_styles(e, vn);
	let n = B.prop(t, "modelValue", 15, !1), r = B.prop(t, "title", 3, "Confirm Action"), i = B.prop(t, "message", 3, "Are you sure you want to proceed?"), a = B.prop(t, "confirmText", 3, "Confirm"), o = B.prop(t, "cancelText", 3, "Cancel"), s = B.prop(t, "confirmColor", 3, "primary"), c = B.prop(t, "loading", 3, !1), l = B.derived(() => Ce({
		confirmText: a(),
		cancelText: o(),
		confirmColor: s()
	})), u = () => {
		n(!1), t.oncancel?.();
	}, d = () => {
		t.onconfirm?.();
	};
	var f = B.comment(), p = B.first_child(f), m = (e) => {
		var t = _n(), n = B.child(t), a = B.child(n), o = B.child(a), s = B.only_child(o, !0), f = B.sibling(o, 2), p = B.only_child(f, !0);
		B.reset(a);
		var m = B.sibling(a, 2), h = B.child(m);
		H(h, {
			variant: "text",
			get disabled() {
				return c();
			},
			onclick: u,
			children: (e) => {
				B.next();
				var t = B.text();
				B.template_effect(() => B.set_text(t, B.get(l).cancelText)), B.append(e, t);
			},
			$$slots: { default: !0 }
		}), H(B.sibling(h, 2), {
			variant: "elevated",
			get color() {
				return B.get(l).confirmColor;
			},
			get loading() {
				return c();
			},
			onclick: d,
			children: (e) => {
				B.next();
				var t = B.text();
				B.template_effect(() => B.set_text(t, B.get(l).confirmText)), B.append(e, t);
			},
			$$slots: { default: !0 }
		}), B.reset(m), B.reset(n), B.reset(t), B.template_effect(() => {
			B.set_text(s, r()), B.set_text(p, i());
		}), B.append(e, t);
	};
	B.if(p, (e) => {
		n() && e(m);
	}), B.append(e, f), B.pop();
}
//#endregion
//#region src/molecules/m-kpi-tile/m-kpi-tile.svelte
var bn = B.from_html("<span class=\"m-kpi-tile__icon\"> </span>"), xn = B.from_html("<span> </span>"), Sn = B.from_html("<span class=\"m-kpi-tile__subtext\"> </span>"), Cn = B.from_html("<div class=\"m-kpi-tile__footer svelte-s77j7w\"><!> <!></div>"), wn = B.from_html("<div class=\"m-kpi-tile svelte-s77j7w\"><div class=\"m-kpi-tile__header svelte-s77j7w\"><span class=\"m-kpi-tile__label svelte-s77j7w\"> </span> <!></div> <div class=\"m-kpi-tile__value svelte-s77j7w\"> </div> <!></div>"), Tn = {
	hash: "svelte-s77j7w",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,\n.v-theme--dark.svelte-s77j7w {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-s77j7w {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-kpi-tile.svelte-s77j7w {padding:20px;display:flex;flex-direction:column;gap:8px;}.m-kpi-tile__header.svelte-s77j7w {display:flex;justify-content:space-between;align-items:center;}.m-kpi-tile__label.svelte-s77j7w {font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;color:#64748b;font-weight:600;}.m-kpi-tile__value.svelte-s77j7w {font-family:\"JetBrains Mono\", monospace;font-size:1.75rem;font-weight:700;color:#f8fafc;line-height:1.2;}.m-kpi-tile__footer.svelte-s77j7w {display:flex;align-items:center;gap:8px;font-size:0.8rem;color:#94a3b8;}.m-kpi-tile__trend.svelte-s77j7w {font-family:\"JetBrains Mono\", monospace;font-weight:600;font-size:0.75rem;padding:2px 6px;border-radius:6px;}.m-kpi-tile__trend--up.svelte-s77j7w {color:#10b981;background:rgba(16, 185, 129, 0.15);}.m-kpi-tile__trend--down.svelte-s77j7w {color:#ef4444;background:rgba(239, 68, 68, 0.15);}.m-kpi-tile__trend--neutral.svelte-s77j7w {color:#64748b;background:rgba(148, 163, 184, 0.15);}"
};
function J(e, t) {
	B.push(t, !0), B.append_styles(e, Tn);
	let n = B.prop(t, "subtext", 3, void 0), r = B.prop(t, "trend", 3, void 0), i = B.prop(t, "trendValue", 3, void 0), a = B.prop(t, "icon", 3, void 0), o = B.derived(() => He(r())), s = B.derived(() => We(r())), c = B.derived(() => !!(r() && i()));
	U(e, {
		variant: "glass",
		hover: !0,
		children: (e) => {
			var r = wn(), l = B.child(r), u = B.child(l), d = B.only_child(u, !0), f = B.sibling(u, 2), p = (e) => {
				var n = B.comment(), r = B.first_child(n);
				B.snippet(r, () => t.iconSnippet), B.append(e, n);
			}, m = (e) => {
				var t = bn(), n = B.only_child(t, !0);
				B.template_effect(() => B.set_text(n, a())), B.append(e, t);
			};
			B.if(f, (e) => {
				t.iconSnippet ? e(p) : a() && e(m, 1);
			}), B.reset(l);
			var h = B.sibling(l, 2), g = B.only_child(h, !0), _ = B.sibling(h, 2), v = (e) => {
				var t = Cn(), r = B.child(t), a = (e) => {
					var t = xn(), n = B.only_child(t);
					B.template_effect((e) => {
						B.set_class(t, 1, e, "svelte-s77j7w"), B.set_text(n, `${B.get(s) ?? ""}${i() ?? ""}`);
					}, [() => B.clsx(["m-kpi-tile__trend", B.get(o)].join(" "))]), B.append(e, t);
				};
				B.if(r, (e) => {
					B.get(c) && e(a);
				});
				var l = B.sibling(r, 2), u = (e) => {
					var t = Sn(), r = B.only_child(t, !0);
					B.template_effect(() => B.set_text(r, n())), B.append(e, t);
				};
				B.if(l, (e) => {
					n() && e(u);
				}), B.reset(t), B.append(e, t);
			};
			B.if(_, (e) => {
				(n() || B.get(c)) && e(v);
			}), B.reset(r), B.template_effect(() => {
				B.set_text(d, t.label), B.set_text(g, t.value);
			}), B.append(e, r);
		},
		$$slots: { default: !0 }
	}), B.pop();
}
//#endregion
//#region src/molecules/m-search-input/m-search-input.svelte
var En = B.from_html("<span class=\"m-search-input__icon svelte-195e8nk\">🔍</span>"), Dn = B.from_html("<div><!></div>"), On = {
	hash: "svelte-195e8nk",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,\n.v-theme--dark.svelte-195e8nk {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-195e8nk {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-search-input.svelte-195e8nk {position:relative;width:100%;max-width:420px;}.m-search-input__icon.svelte-195e8nk {display:inline-flex;align-items:center;justify-content:center;color:#64748b;font-size:0.9rem;padding-left:8px;}"
};
function kn(e, t) {
	B.push(t, !0), B.append_styles(e, On);
	let n = B.prop(t, "modelValue", 15, ""), r = B.prop(t, "placeholder", 3, "Search..."), i = B.prop(t, "debounceMs", 3, 250), a = B.prop(t, "disabled", 3, !1), o = B.prop(t, "clearable", 3, !0), c = B.prop(t, "class", 3, ""), l = s((e) => {
		t.onsearch?.(e);
	}, i());
	V(l.cancel);
	let u = (e) => {
		let t = e.target;
		n(t.value), l(t.value);
	}, d = () => {
		n(""), t.onclear?.(), t.onsearch?.("");
	};
	var f = Dn();
	K(B.child(f), {
		get placeholder() {
			return r();
		},
		get disabled() {
			return a();
		},
		get clearable() {
			return o();
		},
		oninput: u,
		onclear: d,
		get modelValue() {
			return n();
		},
		set modelValue(e) {
			n(e);
		},
		prependInner: (e) => {
			var t = En();
			B.append(e, t);
		},
		$$slots: { prependInner: !0 }
	}), B.reset(f), B.template_effect((e) => B.set_class(f, 1, e, "svelte-195e8nk"), [() => B.clsx(xe({ disabled: a() }, c()).join(" "))]), B.append(e, f), B.pop();
}
//#endregion
//#region src/molecules/m-pagination/m-pagination.svelte
var An = B.from_html("<div class=\"m-pagination__info svelte-5t8q66\"> </div>"), jn = B.from_html("<div></div>"), Mn = B.from_html("<div class=\"m-pagination svelte-5t8q66\"><!> <div class=\"m-pagination__controls svelte-5t8q66\"><!> <!> <!></div></div>"), Nn = {
	hash: "svelte-5t8q66",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-pagination.svelte-5t8q66 {display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:12px 16px;font-family:\"JetBrains Mono\", monospace;}.m-pagination__info.svelte-5t8q66 {font-size:0.8rem;color:#64748b;}.m-pagination__controls.svelte-5t8q66 {display:flex;align-items:center;gap:6px;}"
};
function Pn(e, t) {
	B.push(t, !0), B.append_styles(e, Nn);
	let n = B.prop(t, "currentPage", 15, 1), r = B.prop(t, "pageSize", 3, 20), i = B.prop(t, "totalItems", 3, 0), a = B.prop(t, "maxVisiblePages", 3, 5), o = B.prop(t, "showRange", 3, !0), s = B.derived(() => Oe(n(), t.totalPages, a())), c = B.derived(() => Pe(n(), r(), i())), l = B.derived(() => n() > 1), u = B.derived(() => n() < t.totalPages), d = (e) => {
		e >= 1 && e <= t.totalPages && e !== n() && (n(e), t.onpagechange?.(e));
	};
	var f = Mn(), p = B.child(f), m = (e) => {
		var t = An(), n = B.only_child(t);
		B.template_effect(() => B.set_text(n, `Showing ${B.get(c).start ?? ""} to ${B.get(c).end ?? ""} of ${B.get(c).total ?? ""} items`)), B.append(e, t);
	}, h = (e) => {
		var t = jn();
		B.append(e, t);
	};
	B.if(p, (e) => {
		o() && i() ? e(m) : e(h, -1);
	});
	var g = B.sibling(p, 2), _ = B.child(g);
	{
		let e = (e) => {
			B.next();
			var t = B.text("Prev");
			B.append(e, t);
		}, t = B.derived(() => !B.get(l));
		H(_, {
			variant: "glass",
			size: "small",
			get disabled() {
				return B.get(t);
			},
			onclick: () => d(n() - 1),
			children: e,
			$$slots: { default: !0 }
		});
	}
	var v = B.sibling(_, 2);
	B.each(v, 16, () => B.get(s), (e) => e, (e, t) => {
		{
			let r = (e) => {
				B.next();
				var n = B.text();
				B.template_effect(() => B.set_text(n, t)), B.append(e, n);
			}, i = B.derived(() => t === n() ? "elevated" : "glass"), a = B.derived(() => t === n() ? "m-pagination__btn m-pagination__btn--active" : "m-pagination__btn");
			H(e, {
				get variant() {
					return B.get(i);
				},
				size: "small",
				get class() {
					return B.get(a);
				},
				onclick: () => d(t),
				children: r,
				$$slots: { default: !0 }
			});
		}
	});
	var y = B.sibling(v, 2);
	{
		let e = (e) => {
			B.next();
			var t = B.text("Next");
			B.append(e, t);
		}, t = B.derived(() => !B.get(u));
		H(y, {
			variant: "glass",
			size: "small",
			get disabled() {
				return B.get(t);
			},
			onclick: () => d(n() + 1),
			children: e,
			$$slots: { default: !0 }
		});
	}
	B.reset(g), B.reset(f), B.append(e, f), B.pop();
}
//#endregion
//#region src/molecules/m-empty-state/m-empty-state.svelte
var Fn = B.from_html("<span> </span>"), In = B.from_html("<p class=\"m-empty-state__description svelte-1pkzlwk\"> </p>"), Y = B.from_html("<div class=\"m-empty-state__actions svelte-1pkzlwk\"><!></div>"), Ln = B.from_html("<div class=\"m-empty-state__icon-wrap svelte-1pkzlwk\"><!></div> <h3 class=\"m-empty-state__title svelte-1pkzlwk\"> </h3> <!> <!>", 1), Rn = {
	hash: "svelte-1pkzlwk",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-empty-state__icon-wrap.svelte-1pkzlwk {display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:50%;background:rgba(17, 28, 58, 0.85);border:1px solid rgba(98, 201, 255, 0.12);font-size:2rem;margin-bottom:16px;color:#62c9ff;box-shadow:0 0 20px rgba(98, 201, 255, 0.08);}.m-empty-state__title.svelte-1pkzlwk {font-size:1.25rem;font-weight:600;color:#f8fafc;margin-bottom:8px;}.m-empty-state__description.svelte-1pkzlwk {font-size:0.9rem;color:#94a3b8;max-width:440px;line-height:1.5;margin-bottom:24px;}.m-empty-state__actions.svelte-1pkzlwk {display:flex;align-items:center;gap:12px;}"
};
function zn(e, t) {
	B.append_styles(e, Rn);
	let n = B.prop(t, "description", 3, void 0), r = B.prop(t, "icon", 3, "✨"), i = B.prop(t, "actionText", 3, void 0);
	U(e, {
		variant: "glass",
		class: "m-empty-state",
		children: (e) => {
			var a = Ln(), o = B.first_child(a), s = B.child(o), c = (e) => {
				var n = B.comment(), r = B.first_child(n);
				B.snippet(r, () => t.iconSnippet), B.append(e, n);
			}, l = (e) => {
				var t = Fn(), n = B.only_child(t, !0);
				B.template_effect(() => B.set_text(n, r())), B.append(e, t);
			};
			B.if(s, (e) => {
				t.iconSnippet ? e(c) : e(l, -1);
			}), B.reset(o);
			var u = B.sibling(o, 2), d = B.only_child(u, !0), f = B.sibling(u, 2), p = (e) => {
				var t = In(), r = B.only_child(t, !0);
				B.template_effect(() => B.set_text(r, n())), B.append(e, t);
			};
			B.if(f, (e) => {
				n() && e(p);
			});
			var m = B.sibling(f, 2), h = (e) => {
				var n = Y(), r = B.child(n);
				B.snippet(r, () => t.actionSnippet), B.reset(n), B.append(e, n);
			}, g = (e) => {
				var n = Y();
				H(B.child(n), {
					variant: "elevated",
					color: "primary",
					get onclick() {
						return t.onclickaction;
					},
					children: (e) => {
						B.next();
						var t = B.text();
						B.template_effect(() => B.set_text(t, i())), B.append(e, t);
					},
					$$slots: { default: !0 }
				}), B.reset(n), B.append(e, n);
			};
			B.if(m, (e) => {
				t.actionSnippet ? e(h) : i() && e(g, 1);
			}), B.template_effect(() => B.set_text(d, t.title)), B.append(e, a);
		},
		$$slots: { default: !0 }
	});
}
//#endregion
//#region src/molecules/m-toast/m-toast.svelte
var Bn = B.from_html("<div role=\"status\"><span class=\"m-toast__message svelte-m2j5ak\"> </span> <div class=\"m-toast__actions svelte-m2j5ak\"><!> <!></div></div>"), Vn = {
	hash: "svelte-m2j5ak",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,\n.v-theme--dark.svelte-m2j5ak {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-m2j5ak {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-toast.svelte-m2j5ak {position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;align-items:center;justify-content:space-between;gap:16px;min-width:280px;max-width:440px;padding:12px 18px;border-radius:10px;background:rgba(17, 28, 58, 0.85);border:1px solid rgba(98, 201, 255, 0.12);color:#f8fafc;backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(98, 201, 255, 0.08);transform:translateY(100px);opacity:0;pointer-events:none;transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;}.m-toast--open.svelte-m2j5ak {transform:translateY(0);opacity:1;pointer-events:auto;}\n@media (max-width: 600px) {.m-toast.svelte-m2j5ak {bottom:80px;right:16px;left:16px;min-width:auto;max-width:none;}\n}.m-toast__message.svelte-m2j5ak {font-size:0.875rem;font-weight:500;}.m-toast__actions.svelte-m2j5ak {display:flex;align-items:center;gap:8px;}.m-toast--success.svelte-m2j5ak {border-left:4px solid #10b981;}.m-toast--warning.svelte-m2j5ak {border-left:4px solid #f59e0b;}.m-toast--error.svelte-m2j5ak {border-left:4px solid #ef4444;}.m-toast--info.svelte-m2j5ak {border-left:4px solid #62c9ff;}"
};
function Hn(t, n) {
	B.push(n, !0), B.append_styles(t, Vn);
	let r = B.prop(n, "modelValue", 15, !1), i = B.prop(n, "type", 3, "info"), a = B.prop(n, "duration", 3, 4e3), o = B.prop(n, "actionText", 3, void 0), s = B.prop(n, "class", 3, ""), c = () => {
		r(!1), n.onclose?.();
	};
	B.user_effect(() => r() && a() > 0 ? e(a(), c) : void 0);
	let l = B.derived(() => De({
		message: n.message,
		type: i()
	}, r(), s()).join(" "));
	var u = Bn(), d = B.child(u), f = B.only_child(d, !0), p = B.sibling(d, 2), m = B.child(p), h = (e) => {
		H(e, {
			variant: "text",
			size: "small",
			get onclick() {
				return n.onclickaction;
			},
			children: (e) => {
				B.next();
				var t = B.text();
				B.template_effect(() => B.set_text(t, o())), B.append(e, t);
			},
			$$slots: { default: !0 }
		});
	};
	B.if(m, (e) => {
		o() && e(h);
	}), H(B.sibling(m, 2), {
		variant: "plain",
		size: "x-small",
		icon: !0,
		onclick: c,
		children: (e) => {
			B.next();
			var t = B.text("×");
			B.append(e, t);
		},
		$$slots: { default: !0 }
	}), B.reset(p), B.reset(u), B.template_effect(() => {
		B.set_class(u, 1, B.clsx(B.get(l)), "svelte-m2j5ak"), B.set_text(f, n.message);
	}), B.append(t, u), B.pop();
}
//#endregion
//#region src/molecules/m-stat-strip/m-stat-strip.svelte
var Un = B.from_html("<div class=\"m-stat-strip svelte-8xcni4\"></div>"), Wn = {
	hash: "svelte-8xcni4",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-stat-strip.svelte-8xcni4 {display:grid;gap:16px;width:100%;}"
};
function Gn(e, t) {
	B.push(t, !0), B.append_styles(e, Wn);
	let n = B.prop(t, "columns", 3, 4), r = B.derived(() => Te(n()));
	var i = Un();
	let a;
	B.each(i, 23, () => t.stats, (e, t) => `${e.label}-${t}`, (e, t) => {
		J(e, {
			get label() {
				return B.get(t).label;
			},
			get value() {
				return B.get(t).value;
			},
			get subtext() {
				return B.get(t).subtext;
			},
			get trend() {
				return B.get(t).trend;
			},
			get trendValue() {
				return B.get(t).trendValue;
			},
			get icon() {
				return B.get(t).icon;
			}
		});
	}), B.reset(i), B.template_effect(() => a = B.set_style(i, "", a, { "grid-template-columns": B.get(r).gridTemplateColumns })), B.append(e, i), B.pop();
}
//#endregion
//#region src/molecules/m-tabs-nav/m-tabs-nav.svelte
var Kn = B.from_html("<span class=\"m-tabs-nav__icon\"> </span>"), qn = B.from_html("<span class=\"m-tabs-nav__badge svelte-1f6dmse\"> </span>"), Jn = B.from_html("<button type=\"button\" role=\"tab\"><!> <span> </span> <!></button>"), Yn = B.from_html("<nav role=\"tablist\"></nav>"), Xn = {
	hash: "svelte-1f6dmse",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,\n.v-theme--dark.svelte-1f6dmse {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-1f6dmse {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-tabs-nav.svelte-1f6dmse {display:flex;align-items:center;gap:6px;padding:4px;border-radius:10px;background:rgba(11, 19, 41, 0.5);border:1px solid rgba(98, 201, 255, 0.12);backdrop-filter:blur(8px);width:fit-content;}.m-tabs-nav--grow.svelte-1f6dmse {width:100%;}.m-tabs-nav--grow.svelte-1f6dmse .m-tabs-nav__item:where(.svelte-1f6dmse) {flex:1;}.m-tabs-nav--align-center.svelte-1f6dmse {margin:0 auto;}.m-tabs-nav--align-end.svelte-1f6dmse {margin-left:auto;}.m-tabs-nav__item.svelte-1f6dmse {display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:8px 16px;border-radius:6px;font-size:0.85rem;font-weight:500;color:#94a3b8;background:transparent;border:none;cursor:pointer;user-select:none;transition:all 0.2s ease;}.m-tabs-nav__item.svelte-1f6dmse:hover:not(:disabled) {color:#f8fafc;background:rgba(255, 255, 255, 0.05);}.m-tabs-nav__item.svelte-1f6dmse:disabled {opacity:0.4;cursor:not-allowed;}.m-tabs-nav__item--active.svelte-1f6dmse {color:#050811 !important;background:#62c9ff !important;font-weight:600;box-shadow:0 0 12px rgba(98, 201, 255, 0.4);}.m-tabs-nav__badge.svelte-1f6dmse {padding:2px 6px;border-radius:9999px;font-size:0.7rem;font-weight:700;background:rgba(0, 0, 0, 0.2);}"
};
function X(e, t) {
	B.push(t, !0), B.append_styles(e, Xn);
	let n = B.prop(t, "modelValue", 31, () => B.proxy(t.tabs[0] ? t.tabs[0].id : "")), r = B.prop(t, "grow", 3, !1), i = B.prop(t, "align", 3, "start"), a = B.prop(t, "class", 3, ""), o = B.derived(() => Ve({
		tabs: t.tabs,
		grow: r(),
		align: i()
	}, a()).join(" ")), s = (e) => {
		e.disabled || (n(e.id), t.ontabchange?.(e.id));
	};
	var c = Yn();
	B.each(c, 21, () => t.tabs, (e) => e.id, (e, t) => {
		var r = Jn(), i = B.child(r), a = (e) => {
			var n = Kn(), r = B.only_child(n, !0);
			B.template_effect(() => B.set_text(r, B.get(t).icon)), B.append(e, n);
		};
		B.if(i, (e) => {
			B.get(t).icon && e(a);
		});
		var o = B.sibling(i, 2), c = B.only_child(o, !0), l = B.sibling(o, 2), u = (e) => {
			var n = qn(), r = B.only_child(n, !0);
			B.template_effect(() => B.set_text(r, B.get(t).badge)), B.append(e, n);
		};
		B.if(l, (e) => {
			B.get(t).badge && e(u);
		}), B.reset(r), B.template_effect((e) => {
			B.set_attribute(r, "aria-selected", n() === B.get(t).id), r.disabled = B.get(t).disabled, B.set_class(r, 1, e, "svelte-1f6dmse"), B.set_text(c, B.get(t).label);
		}, [() => B.clsx(["m-tabs-nav__item", n() === B.get(t).id ? "m-tabs-nav__item--active" : ""].join(" "))]), B.delegated("click", r, () => s(B.get(t))), B.append(e, r);
	}), B.reset(c), B.template_effect(() => B.set_class(c, 1, B.clsx(B.get(o)), "svelte-1f6dmse")), B.append(e, c), B.pop();
}
B.delegate(["click"]);
//#endregion
//#region src/molecules/m-action-bar/m-action-bar.svelte
var Zn = B.from_html("<h2 class=\"m-action-bar__title svelte-1mzpk3e\"> </h2>"), Qn = B.from_html("<div class=\"m-action-bar__center\"><!></div>"), $n = B.from_html("<div class=\"m-action-bar__end svelte-1mzpk3e\"><!></div>"), er = B.from_html("<div class=\"m-action-bar__start svelte-1mzpk3e\"><!></div> <!> <!>", 1), tr = {
	hash: "svelte-1mzpk3e",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.m-action-bar__start.svelte-1mzpk3e {display:flex;align-items:center;gap:12px;}.m-action-bar__title.svelte-1mzpk3e {font-size:1.1rem;font-weight:600;color:#f8fafc;letter-spacing:-0.01em;}.m-action-bar__end.svelte-1mzpk3e {display:flex;align-items:center;gap:8px;margin-left:auto;}"
};
function nr(e, t) {
	B.push(t, !0), B.append_styles(e, tr);
	let n = B.prop(t, "title", 3, void 0), r = B.prop(t, "position", 3, "static"), i = B.prop(t, "bordered", 3, !0), a = B.prop(t, "class", 3, ""), o = B.derived(() => Ne({
		position: r(),
		bordered: i()
	}, a()).join(" "));
	G(e, {
		get class() {
			return B.get(o);
		},
		children: (e) => {
			var r = er(), i = B.first_child(r), a = B.child(i), o = (e) => {
				var n = B.comment(), r = B.first_child(n);
				B.snippet(r, () => t.start), B.append(e, n);
			}, s = (e) => {
				var t = Zn(), r = B.only_child(t, !0);
				B.template_effect(() => B.set_text(r, n())), B.append(e, t);
			};
			B.if(a, (e) => {
				t.start ? e(o) : n() && e(s, 1);
			}), B.reset(i);
			var c = B.sibling(i, 2), l = (e) => {
				var n = Qn(), r = B.child(n);
				t.children(r), B.reset(n), B.append(e, n);
			};
			B.if(c, (e) => {
				t.children && e(l);
			});
			var u = B.sibling(c, 2), d = (e) => {
				var n = $n(), r = B.child(n);
				B.snippet(r, () => t.end), B.reset(n), B.append(e, n);
			};
			B.if(u, (e) => {
				t.end && e(d);
			}), B.append(e, r);
		},
		$$slots: { default: !0 }
	}), B.pop();
}
//#endregion
//#region src/molecules/m-data-table/m-data-table.svelte
var rr = B.from_html("<span class=\"m-data-table__sort-icon svelte-1ymnl0k\"> </span>"), ir = B.from_html("<th> <!></th>"), ar = B.from_html("<tr><td class=\"m-data-table__empty svelte-1ymnl0k\"> </td></tr>"), or = B.from_html("<td> </td>"), sr = B.from_html("<tr class=\"m-data-table__tr svelte-1ymnl0k\"></tr>"), cr = B.from_html("<div><!> <table class=\"m-data-table__table svelte-1ymnl0k\"><thead><tr></tr></thead><tbody><!></tbody></table></div>"), lr = {
	hash: "svelte-1ymnl0k",
	code: ":root {--x-tone-primary: rgb(var(--v-theme-primary, 98, 201, 255));--x-tone-secondary: rgb(var(--v-theme-secondary, 56, 189, 248));--x-tone-success: rgb(var(--v-theme-success, 16, 185, 129));--x-tone-warning: rgb(var(--v-theme-warning, 245, 158, 11));--x-tone-error: rgb(var(--v-theme-error, 239, 68, 68));--x-tone-info: rgb(var(--v-theme-info, 56, 189, 248));--x-tone-pink: rgb(var(--v-theme-pink, 244, 114, 182));--x-tone-lime: rgb(var(--v-theme-lime, 163, 230, 53));--x-tone-sky: rgb(var(--v-theme-sky, 56, 189, 248));--x-tone-purple: rgb(var(--v-theme-purple, 167, 139, 250));--x-tone-slate: rgb(var(--v-theme-slate, 148, 163, 184));--x-tone-muted: rgb(var(--v-theme-muted, 100, 116, 139));--x-space-none: 0;--x-space-xs: 4px;--x-space-sm: 8px;--x-space-md: 12px;--x-space-lg: 16px;--x-space-xl: 24px;}:root,\n.v-theme--dark.svelte-1ymnl0k {--x-glass-bg: rgba(var(--v-theme-surface, 11, 19, 41), 0.75);--x-glass-bg-subtle: rgba(var(--v-theme-surface, 11, 19, 41), 0.5);--x-glass-bg-elevated: rgba(var(--v-theme-surface-bright, 17, 28, 58), 0.85);--x-glass-border: rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-glass-border-hover: rgba(var(--v-theme-primary, 98, 201, 255), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 98, 201, 255), 0.6);--x-glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);--x-glass-glow: 0 0 15px rgba(var(--v-theme-primary, 98, 201, 255), 0.15);--x-text-contrast: rgb(var(--v-theme-on-surface, 248, 250, 252));}.v-theme--light.svelte-1ymnl0k {--x-glass-bg: rgba(255, 255, 255, 0.88);--x-glass-bg-subtle: rgba(255, 255, 255, 0.65);--x-glass-bg-elevated: rgba(255, 255, 255, 0.98);--x-glass-border: rgba(var(--v-theme-on-surface, 15, 23, 42), 0.08);--x-glass-border-hover: rgba(var(--v-theme-primary, 2, 132, 199), 0.35);--x-glass-border-focus: rgba(var(--v-theme-primary, 2, 132, 199), 0.6);--x-glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);--x-glass-glow: 0 0 10px rgba(var(--v-theme-primary, 2, 132, 199), 0.1);--x-text-contrast: rgb(var(--v-theme-on-surface, 15, 23, 42));}.m-data-table.svelte-1ymnl0k {width:100%;overflow-x:auto;background:rgba(11, 19, 41, 0.75);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(98, 201, 255, 0.12);border-radius:12px;}.m-data-table__table.svelte-1ymnl0k {width:100%;border-collapse:collapse;font-size:0.875rem;color:#f8fafc;}.m-data-table__th.svelte-1ymnl0k {padding:12px 16px;text-align:left;font-weight:600;color:#94a3b8;border-bottom:1px solid rgba(98, 201, 255, 0.12);user-select:none;white-space:nowrap;}.m-data-table__th--sortable.svelte-1ymnl0k {cursor:pointer;}.m-data-table__th--sortable.svelte-1ymnl0k:hover {color:#62c9ff;}.m-data-table__th--align-center.svelte-1ymnl0k {text-align:center;}.m-data-table__th--align-end.svelte-1ymnl0k {text-align:right;}.m-data-table__sort-icon.svelte-1ymnl0k {display:inline-block;margin-left:6px;font-size:0.75rem;color:#62c9ff;}.m-data-table__td.svelte-1ymnl0k {padding:14px 16px;border-bottom:1px solid rgba(98, 201, 255, 0.12);color:#f8fafc;}.m-data-table__td--align-center.svelte-1ymnl0k {text-align:center;}.m-data-table__td--align-end.svelte-1ymnl0k {text-align:right;}.m-data-table__empty.svelte-1ymnl0k {padding:32px 16px;text-align:center;color:#94a3b8;}.m-data-table--hoverable.svelte-1ymnl0k .m-data-table__tr:where(.svelte-1ymnl0k):hover .m-data-table__td:where(.svelte-1ymnl0k) {background:rgba(98, 201, 255, 0.05);cursor:pointer;}.m-data-table--dense.svelte-1ymnl0k .m-data-table__th:where(.svelte-1ymnl0k) {padding:8px 12px;}.m-data-table--dense.svelte-1ymnl0k .m-data-table__td:where(.svelte-1ymnl0k) {padding:8px 12px;}"
};
function ur(e, t) {
	B.push(t, !0), B.append_styles(e, lr);
	let n = B.prop(t, "headers", 19, () => []), r = B.prop(t, "items", 19, () => []), i = B.prop(t, "loading", 3, !1), a = B.prop(t, "emptyText", 3, "No records found"), o = B.prop(t, "itemKey", 3, "id"), s = B.prop(t, "sortBy", 3, null), c = B.prop(t, "sortDesc", 3, !1), l = B.prop(t, "hoverable", 3, !0), u = B.prop(t, "dense", 3, !1), d = B.prop(t, "class", 3, ""), f = B.derived(() => ke({
		hoverable: l(),
		dense: u(),
		loading: i()
	}, d()).join(" ")), p = B.derived(() => !i() && r().length === 0), m = (e) => {
		if (!e.sortable || !t.onsortchange) return;
		let n = Se({
			sortBy: s(),
			sortDesc: c()
		}, e.key);
		t.onsortchange(n);
	}, h = (e) => {
		t.onrowclick && t.onrowclick(e);
	};
	var g = cr(), _ = B.child(g), v = (e) => {
		q(e, {
			indeterminate: !0,
			color: "primary"
		});
	};
	B.if(_, (e) => {
		i() && e(v);
	});
	var y = B.sibling(_, 2), b = B.child(y), x = B.child(b);
	B.each(x, 21, n, (e) => e.key, (e, t) => {
		var n = ir(), r = B.child(n), i = B.sibling(r), a = (e) => {
			var t = rr(), n = B.only_child(t, !0);
			B.template_effect(() => B.set_text(n, c() ? "▼" : "▲")), B.append(e, t);
		};
		B.if(i, (e) => {
			s() === B.get(t).key && e(a);
		}), B.reset(n), B.template_effect((e) => {
			B.set_class(n, 1, e, "svelte-1ymnl0k"), B.set_text(r, `${B.get(t).title ?? ""} `);
		}, [() => B.clsx([
			"m-data-table__th",
			B.get(t).sortable && "m-data-table__th--sortable",
			B.get(t).align && `m-data-table__th--align-${B.get(t).align}`
		].filter(Boolean).join(" "))]), B.delegated("click", n, () => m(B.get(t))), B.append(e, n);
	}), B.reset(x), B.reset(b);
	var S = B.sibling(b), C = B.child(S), w = (e) => {
		var t = ar(), r = B.child(t), i = B.only_child(r, !0);
		B.reset(t), B.template_effect(() => {
			B.set_attribute(r, "colspan", n().length), B.set_text(i, a());
		}), B.append(e, t);
	}, T = (e) => {
		var t = B.comment(), i = B.first_child(t);
		B.each(i, 19, r, (e, t) => ze(e, o(), t), (e, t) => {
			var r = sr();
			B.each(r, 21, n, (e) => e.key, (e, n) => {
				var r = or(), i = B.only_child(r, !0);
				B.template_effect((e, t) => {
					B.set_class(r, 1, e, "svelte-1ymnl0k"), B.set_text(i, t);
				}, [() => B.clsx(["m-data-table__td", B.get(n).align && `m-data-table__td--align-${B.get(n).align}`].filter(Boolean).join(" ")), () => String(Ie(B.get(t), B.get(n)))]), B.append(e, r);
			}), B.reset(r), B.delegated("click", r, () => h(B.get(t))), B.append(e, r);
		}), B.append(e, t);
	};
	B.if(C, (e) => {
		B.get(p) ? e(w) : e(T, -1);
	}), B.reset(S), B.reset(y), B.reset(g), B.template_effect(() => B.set_class(g, 1, B.clsx(B.get(f)), "svelte-1ymnl0k")), B.append(e, g), B.pop();
}
B.delegate(["click"]);
//#endregion
//#region src/adapters/svelte/useDisposer.ts
var Z = (e) => {
	let [, t] = D(() => V(e));
	return t === null;
}, Q = (...e) => {
	let t = c(...e);
	return Z(t), t;
}, $ = (e, t) => (Q(e.stop), t.immediate && e.start(), e), dr = (e, t, n = {}) => $(f(e, t), n), fr = (e, t, n = {}) => $(d(e, t), n), pr = (e, t = {}) => {
	let { immediate: n = !0 } = t, r = {
		data: null,
		error: null,
		isLoading: n
	}, i = Je(r), a = o(e, i.set, r);
	return Q(a.cancel), n && a.run(), {
		subscribe: i.subscribe,
		execute: a.run,
		cancel: a.cancel
	};
}, mr = (e) => typeof e?.subscribe == "function", hr = (e, ...t) => {
	let n = u(...t), r = mr(e) ? e : qe(e);
	return Ke(r, (e) => {
		let t = n(e);
		return {
			filtered: t,
			count: t.length,
			hasMatches: t.length > 0
		};
	});
};
//#endregion
export { nr as MActionBar, yn as MConfirmDialog, ur as MDataTable, zn as MEmptyState, J as MKpiTile, Pn as MPagination, kn as MSearchInput, Gn as MStatStrip, X as MTabsNav, Hn as MToast, Ut as XAlert, xt as XAvatar, wt as XBadge, H as XBtn, U as XCard, Ot as XCheckbox, st as XChip, W as XDialog, W as XModal, Nt as XDivider, sn as XGrid, Jt as XList, en as XListItem, gn as XNavDrawer, q as XProgressLinear, G as XSheet, Ft as XSkeleton, an as XStack, jt as XSwitch, nn as XText, K as XTextField, fn as XTextarea, Kt as XTooltip, e as after, t as all, n as allPass, r as any, i as anyPass, a as assertRuleTree, Z as bindToComponent, o as createAsyncRunner, s as createDebounce, c as createDisposer, l as createLatestGate, u as createPredicateFilter, d as createRestartableInterval, f as createRestartableTimeout, p as createRuleSet, m as deepFreeze, h as evaluateRules, g as every, _ as fallback, v as glassTokens, y as isErr, b as isOk, x as listen, S as mapResult, C as matchesAllPredicates, w as matchesAnyPattern, T as none, E as nonePass, ee as normalizeArray, te as not, ne as radiiTokens, re as ruleTree, ie as spaceTokens, ae as starshipColors, oe as toError, se as toResult, D as toResultSync, O as toStyleString, ce as toneColors, le as unwrapOr, pr as useAsyncData, Q as useDisposer, hr as usePredicateFilter, fr as useSelfCleaningInterval, dr as useSelfCleaningTimeout };
