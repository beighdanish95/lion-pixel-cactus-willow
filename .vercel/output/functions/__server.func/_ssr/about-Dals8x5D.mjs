import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button, c as event, d as gains, i as audiences, p as philadelphia, v as stats } from "./router-_gGNASto.mjs";
import { t as CloseCta } from "./close-cta-wCARd0Q2.mjs";
import { i as Section, n as Kicker, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Dals8x5D.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "The edition",
			title: "Built as the United States’ dedicated red biotechnology expo.",
			lede: "Purpose-built for the science at the intersection of biology and human health. A world-class exhibition floor, a two-day conference, structured startup showcases, investor sessions, curated B2B matchmaking, and an exclusive Hosted Buyer Program."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Red biotechnology" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl leading-tight font-medium",
					children: "The same commercial architecture. A sharper scientific argument."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: [event.name, " gathers leaders around products, platforms, and manufacturing innovations — not a general life-sciences bazaar. In Philadelphia the expo is larger, more precise, and cell and gene therapy is the centre of gravity."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "From pharmaceutical innovation and gene therapy to delivery, CMC, and access, red biotech is rewriting what is possible in healthcare. This floor exists to accelerate that progress — and to ask who reaches patients at a cost the system can bear."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-px bg-line",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-surface px-5 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl text-primary",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase",
						children: s.label
					})]
				}, s.label))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Why this city" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl leading-tight font-medium md:text-5xl",
					children: "They call it Cellicon Valley for a reason."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl leading-relaxed text-muted",
					children: [
						"Staging ",
						event.hashtag,
						" in Philadelphia puts every attendee inside the most concentrated cell and gene therapy ecosystem in the United States."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-3 md:grid-cols-2",
					children: philadelphia.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-lg border border-primary/30 bg-surface px-4 py-3 text-sm leading-relaxed text-muted",
						children: item
					}, item))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "What you gain" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-4xl font-medium",
				children: "Science meets commerce."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 space-y-5",
				children: gains.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 border-t border-line pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-primary",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed",
						children: g
					})]
				}, g))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
					onDark: true,
					children: "Who is in the room"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-medium",
					children: "The people who prevent, diagnose, and treat."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-on-primary/15",
					children: audiences.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-3 text-lg",
						children: a
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "primary",
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/participate",
						children: "Request a pass"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseCta, {})
	] });
}
//#endregion
export { AboutPage as component };
