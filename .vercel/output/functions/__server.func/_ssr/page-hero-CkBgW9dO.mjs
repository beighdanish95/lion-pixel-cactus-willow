import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-CkBgW9dO.js
var import_jsx_runtime = require_jsx_runtime();
function HelixField({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: `pointer-events-none absolute inset-0 h-full w-full opacity-25 ${className}`,
		viewBox: "0 0 800 800",
		preserveAspectRatio: "xMidYMid slice",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "helixStroke",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "white",
					stopOpacity: "0.9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "white",
					stopOpacity: "0.15"
				})]
			}) }),
			Array.from({ length: 9 }).map((_, i) => {
				const x = 80 + i * 80;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					opacity: .55 - i * .04,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x} 40 C ${x + 50} 180, ${x - 50} 320, ${x} 460 S ${x + 50} 700, ${x} 780`,
						fill: "none",
						stroke: "url(#helixStroke)",
						strokeWidth: "1.2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x} 40 C ${x - 50} 180, ${x + 50} 320, ${x} 460 S ${x - 50} 700, ${x} 780`,
						fill: "none",
						stroke: "url(#helixStroke)",
						strokeWidth: "1.2"
					})]
				}, i);
			}),
			Array.from({ length: 18 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: 120 + i * 97 % 620,
				cy: 70 + i * 137 % 660,
				r: i % 3 === 0 ? 3.2 : 1.8,
				fill: "white",
				opacity: .35
			}, `n-${i}`))
		]
	});
}
function PageHero({ kicker, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero-wash relative overflow-hidden text-on-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelixField, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.28em] text-on-primary/70 uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight md:text-6xl",
					children: title
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg leading-relaxed text-on-primary/80",
					children: lede
				}) : null,
				children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children
				}) : null
			]
		})]
	});
}
function Section({ children, className = "", tone = "bg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `${{
			bg: "bg-bg text-ink",
			paper: "bg-paper text-ink",
			surface: "bg-surface text-ink",
			ink: "bg-ink text-on-primary"
		}[tone]} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24",
			children
		})
	});
}
function Kicker({ children, onDark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `text-xs font-semibold tracking-[0.28em] uppercase ${onDark ? "text-accent" : "text-primary"}`,
		children
	});
}
//#endregion
export { Section as i, Kicker as n, PageHero as r, HelixField as t };
