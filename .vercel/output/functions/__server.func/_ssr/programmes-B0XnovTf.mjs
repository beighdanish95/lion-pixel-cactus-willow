import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as programmes } from "./router-_gGNASto.mjs";
import { t as CloseCta } from "./close-cta-wCARd0Q2.mjs";
import { i as Section, n as Kicker, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes-B0XnovTf.js
var import_jsx_runtime = require_jsx_runtime();
function ProgrammesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Programmes",
			title: "Four ways the floor creates deals — all tighter.",
			lede: "Hosted buyers, startup acceleration, B2B matchmaking, and investor sessions. Introductions scheduled against intent, not badges."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: programmes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-7 hairline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
						children: p.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-3 text-3xl",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted",
						children: p.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammeLink, { slug: p.slug })
				]
			}, p.slug))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The grid" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-medium",
					children: "CDMO capacity, vector slots, analytics, and capital sit on the same diary."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl leading-relaxed text-muted",
					children: "Matchmaking is curated, timed, and followed up. Hosted buyers diaries, startup pitch rooms, and closed-door investor sessions share one commercial spine — so a conversation on the floor can become a slot, a plant, or a term sheet."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseCta, {})
	] });
}
function ProgrammeLink({ slug }) {
	const className = "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink";
	if (slug === "hosted-buyer") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/programmes/hosted-buyer",
		className,
		children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
	});
	if (slug === "startup") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/programmes/startup",
		className,
		children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/participate",
		className,
		children: ["Take part ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
	});
}
//#endregion
export { ProgrammesPage as component };
