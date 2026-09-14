import { getCurrentScope as e, onScopeDispose as t, ref as n } from "vue";
//#region src/core/tokens.ts
var r = {
	bg: "#050811",
	surface: "#0b1329",
	surfaceElevated: "#111c3a",
	surfaceLight: "#1e293b",
	cyan: "#62c9ff",
	cyanGlow: "rgba(98, 201, 255, 0.4)",
	cyanBorder: "rgba(98, 201, 255, 0.25)",
	cyanSubtle: "rgba(98, 201, 255, 0.08)",
	success: "#10b981",
	warning: "#f59e0b",
	error: "#ef4444",
	info: "#38bdf8",
	textPrimary: "#f8fafc",
	textSecondary: "#94a3b8",
	textMuted: "#64748b"
}, i = {
	blurSm: "8px",
	blurMd: "12px",
	blurLg: "20px",
	bgSubtle: "rgba(11, 19, 41, 0.5)",
	bgSurface: "rgba(11, 19, 41, 0.75)",
	bgElevated: "rgba(17, 28, 58, 0.85)",
	borderSubtle: "rgba(98, 201, 255, 0.12)",
	borderHover: "rgba(98, 201, 255, 0.35)",
	borderFocus: "rgba(98, 201, 255, 0.6)"
}, a = {
	sm: "6px",
	md: "10px",
	lg: "16px",
	pill: "9999px"
}, o = (e, t) => {
	let n = null, r = null, i = () => {
		n !== null && (clearTimeout(n), n = null), r = null;
	}, a = () => {
		n !== null && r !== null && (clearTimeout(n), n = null, e(...r), r = null);
	}, o = (...a) => (r = a, n !== null && clearTimeout(n), n = setTimeout(() => {
		n = null;
		let t = r;
		r = null, t !== null && e(...t);
	}, t), i);
	return o.cancel = i, o.flush = a, Object.defineProperty(o, "isPending", {
		get: () => n !== null,
		configurable: !0
	}), o;
}, s = (e, t) => {
	let n = null, r = () => {
		n !== null && (clearTimeout(n), n = null);
	};
	return {
		start: () => (r(), n = setTimeout(() => {
			n = null, e();
		}, t), r),
		stop: r,
		get isPending() {
			return n !== null;
		}
	};
}, c = (r, i) => {
	let a = n(!1), o = null, s = () => {
		o !== null && (clearTimeout(o), o = null), a.value = !1;
	};
	return e() && t(s), {
		isPending: a,
		start: () => (s(), i <= 0 ? (r(), s) : (a.value = !0, o = setTimeout(() => {
			o = null, a.value = !1, r();
		}, i), s)),
		stop: s
	};
}, l = (e, t) => {
	let n = e.variant === "glass", r = !!e.block, i = !!e.loading, a = !!e.disabled, o = ["x-btn"];
	return n && o.push("x-btn--glass"), r && o.push("x-btn--block"), i && o.push("x-btn--loading"), a && o.push("x-btn--disabled"), e.size && e.size !== "default" && o.push(`x-btn--${e.size}`), t && o.push(t), o;
}, u = (e) => e === "glass" ? "flat" : e || "elevated", d = (e, t) => {
	let n = e.variant === "glass", r = !!e.hover, i = !!e.loading, a = !!e.disabled, o = ["x-card"];
	return n && o.push("x-card--glass"), r && o.push("x-card--hover"), i && o.push("x-card--loading"), a && o.push("x-card--disabled"), t && o.push(t), o;
}, f = (e) => e === "glass" ? "flat" : e || "elevated", p = (e, t) => {
	let n = e.variant === "glass", r = !!e.disabled, i = ["x-chip"];
	return n && i.push("x-chip--glass"), r && i.push("x-chip--disabled"), e.size && e.size !== "default" && i.push(`x-chip--${e.size}`), t && i.push(t), i;
}, m = (e) => e === "glass" ? "flat" : e || "flat", h = (e, t) => {
	let n = !!e.fullscreen, r = !!e.persistent, i = !!e.scrollable, a = ["x-dialog"];
	return n && a.push("x-dialog--fullscreen"), r && a.push("x-dialog--persistent"), i && a.push("x-dialog--scrollable"), t && a.push(t), a;
}, g = (e, t) => {
	let n = !!e.transparent, r = ["x-sheet"];
	return n && r.push("x-sheet--transparent"), t && r.push(t), r;
}, _ = (e, t, n) => {
	let r = !!e.disabled, i = !!e.readonly, a = ["x-text-field"];
	return t && a.push("x-text-field--focused"), r && a.push("x-text-field--disabled"), i && a.push("x-text-field--readonly"), n && a.push(n), a;
}, v = (e, t) => {
	let n = !!e.bordered, r = ["x-avatar"];
	return n && r.push("x-avatar--bordered"), typeof e.size == "string" && r.push(`x-avatar--${e.size}`), e.status && r.push(`x-avatar--status-${e.status}`), t && r.push(t), r;
}, y = (e) => {
	if (!e) return "";
	let t = e.trim();
	if (!t) return "";
	let n = t.split(/\s+/);
	return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : t.slice(0, 2).toUpperCase();
}, b = (e, t) => e == null || e === "" ? "" : typeof e == "number" && t && e > t ? `${t}+` : String(e), x = (e, t) => {
	let n = !!e.dot, r = !!e.inline, i = !!e.floating, a = ["x-badge"];
	return n && a.push("x-badge--dot"), r && a.push("x-badge--inline"), i && a.push("x-badge--floating"), e.color && a.push(`x-badge--color-${e.color}`), t && a.push(t), a;
}, S = (e, t, n) => {
	let r = !!e.disabled, i = !!e.indeterminate, a = ["x-checkbox"];
	return t && a.push("x-checkbox--checked"), i && a.push("x-checkbox--indeterminate"), r && a.push("x-checkbox--disabled"), n && a.push(n), a;
}, C = (e, t, n) => {
	let r = !!e.disabled, i = ["x-switch"];
	return t && i.push("x-switch--on"), r && i.push("x-switch--disabled"), n && i.push(n), i;
}, w = (e, t) => {
	let n = !!e.vertical, r = !!e.inset, i = ["x-divider"];
	return n ? i.push("x-divider--vertical") : i.push("x-divider--horizontal"), r && i.push("x-divider--inset"), t && i.push(t), i;
}, T = (e, t) => {
	let n = e.shape || "rounded", r = e.animation || "shimmer", i = [
		"x-skeleton",
		`x-skeleton--${n}`,
		`x-skeleton--${r}`
	];
	return t && i.push(t), i;
}, E = (e) => e == null ? "100%" : typeof e == "number" ? `${e}px` : e, D = (e, t) => {
	let n = e.type || "info", r = e.variant || "glass", i = [
		"x-alert",
		`x-alert--${n}`,
		`x-alert--${r}`
	];
	return t && i.push(t), i;
}, O = (e) => e == null ? 0 : Math.min(Math.max(e, 0), 100), ee = (e, t) => {
	let n = !!e.indeterminate, r = !!e.rounded, i = !!e.striped, a = ["x-progress-linear"];
	return n && a.push("x-progress-linear--indeterminate"), r && a.push("x-progress-linear--rounded"), i && a.push("x-progress-linear--striped"), t && a.push(t), a;
}, k = (e, t, n) => {
	let r = { "--x-progress-height": typeof e == "number" ? `${e}px` : e || "4px" };
	return !n && t !== void 0 && (r["--x-progress-width"] = `${t}%`), r;
}, A = (e, t) => {
	let n = ["x-tooltip", `x-tooltip--${e.location || "top"}`];
	return t && n.push(t), n;
}, j = (e, t) => {
	let n = e.variant === "glass", r = !!e.nav, i = !!e.disabled, a = ["x-list"];
	return n && a.push("x-list--glass"), r && a.push("x-list--nav"), i && a.push("x-list--disabled"), t && a.push(t), a;
}, M = (e) => e === "glass" ? "flat" : e, N = (e, t) => {
	let n = e.variant === "glass", r = !!e.active, i = !!e.disabled, a = ["x-list-item"];
	return n && a.push("x-list-item--glass"), r && a.push("x-list-item--active"), i && a.push("x-list-item--disabled"), t && a.push(t), a;
}, P = (e) => e === "glass" ? "flat" : e, F = (e) => ({
	confirmText: e.confirmText || "Confirm",
	cancelText: e.cancelText || "Cancel",
	confirmColor: e.confirmColor || "primary"
}), I = (e) => e === "up" ? "m-kpi-tile__trend--up" : e === "down" ? "m-kpi-tile__trend--down" : "m-kpi-tile__trend--neutral", L = (e) => e === "up" ? "+" : e === "down" ? "-" : "", R = (e, t) => {
	let n = !!e.loading, r = !!e.disabled, i = ["m-search-input"];
	return n && i.push("m-search-input--loading"), r && i.push("m-search-input--disabled"), e.size && e.size !== "default" && i.push(`m-search-input--${e.size}`), t && i.push(t), i;
}, z = (e, t, n = 5) => {
	let r = [], i = Math.max(1, e - Math.floor(n / 2)), a = i + n - 1;
	a > t && (a = t, i = Math.max(1, a - n + 1));
	for (let e = i; e <= a; e++) r.push(e);
	return r;
}, B = (e, t, n) => !t || !n ? {
	start: 0,
	end: 0,
	total: 0
} : {
	start: (e - 1) * t + 1,
	end: Math.min(e * t, n),
	total: n
}, V = (e, t) => {
	let n = ["m-empty-state"];
	return t && n.push(t), n;
}, H = (e, t, n) => {
	let r = ["m-toast", `m-toast--${e.type || "info"}`];
	return t && r.push("m-toast--open"), n && r.push(n), r;
}, U = (e) => ({
	gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
	"--stat-strip-cols": String(e || 4)
}), W = (e, t) => {
	let n = !!e.grow, r = ["m-tabs-nav", `m-tabs-nav--align-${e.align || "start"}`];
	return n && r.push("m-tabs-nav--grow"), t && r.push(t), r;
}, G = (e, t) => {
	let n = e.position || "static", r = e.bordered !== !1, i = ["m-action-bar", `m-action-bar--${n}`];
	return r && i.push("m-action-bar--bordered"), t && i.push(t), i;
}, K = (e, t) => {
	let n = ["m-data-table"];
	return e.hoverable && n.push("m-data-table--hoverable"), e.dense && n.push("m-data-table--dense"), e.loading && n.push("m-data-table--loading"), t && n.push(t), n;
}, q = (e) => {
	let t = ["m-data-table__th"];
	return e.sortable && t.push("m-data-table__th--sortable"), e.align && t.push(`m-data-table__th--align-${e.align}`), t;
}, J = (e) => {
	let t = ["m-data-table__td"];
	return e.align && t.push(`m-data-table__td--align-${e.align}`), t;
}, Y = (e, t, n) => t === e ? n ? "▼" : "▲" : "", X = (e, t) => {
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
}, Z = (e, t, n = 0) => t && t in e && t ? String(e[t]) : n, Q = (e, t) => e[t.key] ?? "", $ = {
	dark: !0,
	colors: {
		background: "#050811",
		surface: "#0b1329",
		"surface-bright": "#111c3a",
		"surface-light": "#1e293b",
		"surface-variant": "#0f172a",
		"on-surface-variant": "#94a3b8",
		primary: "#62c9ff",
		"primary-darken-1": "#38bdf8",
		secondary: "#38bdf8",
		"secondary-darken-1": "#0284c7",
		error: "#ef4444",
		info: "#62c9ff",
		success: "#10b981",
		warning: "#f59e0b"
	}
};
//#endregion
export { O as clampProgress, G as computeActionBarClasses, D as computeAlertClasses, v as computeAvatarClasses, x as computeBadgeClasses, J as computeBodyCellClasses, l as computeBtnClasses, d as computeCardClasses, S as computeCheckboxClasses, p as computeChipClasses, h as computeDialogClasses, w as computeDividerClasses, V as computeEmptyStateClasses, U as computeGridColumnsStyle, q as computeHeaderCellClasses, B as computeItemRange, j as computeListClasses, N as computeListItemClasses, z as computePageNumbers, ee as computeProgressClasses, k as computeProgressCustomProperties, R as computeSearchInputClasses, g as computeSheetClasses, T as computeSkeletonClasses, C as computeSwitchClasses, K as computeTableClasses, W as computeTabsNavClasses, _ as computeTextFieldClasses, H as computeToastClasses, A as computeTooltipClasses, o as createDebounce, s as createTimeout, E as formatDimension, y as getInitials, X as getNextSortState, i as glassTokens, a as radiiTokens, b as resolveBadgeDisplay, Q as resolveCellValue, F as resolveDialogButtonLabels, Z as resolveItemKey, Y as resolveSortIcon, I as resolveTrendClass, L as resolveTrendSymbol, f as resolveVuetifyCardVariant, m as resolveVuetifyChipVariant, P as resolveVuetifyListItemVariant, M as resolveVuetifyListVariant, u as resolveVuetifyVariant, r as starshipColors, $ as starshipDarkTheme, c as useTimeoutFn };
