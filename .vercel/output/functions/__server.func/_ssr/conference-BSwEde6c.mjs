import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button, c as event, o as conferenceDays, s as conferenceFormats, y as theatres } from "./router-_gGNASto.mjs";
import { t as CloseCta } from "./close-cta-wCARd0Q2.mjs";
import { i as Section, n as Kicker, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conference-BSwEde6c.js
var import_jsx_runtime = require_jsx_runtime();
function ConferencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Conference",
			title: "High-calibre sessions for people already shaping the sector.",
			lede: "Built for operators, not spectators. Plenary mornings, technical theatres, and closed-door roundtables. Eighty speakers. No filler keynotes. Speaker line-up to be announced.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "primary",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/participate",
					search: { intent: "pass" },
					children: "Get a delegate pass"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Two-day programme" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-4xl font-medium",
				children: "The science of scale. The business of access."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-2",
				children: conferenceDays.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-6 hairline md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.22em] text-primary uppercase",
							children: day.day
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-2 text-3xl",
							children: day.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: day.sessions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-line pt-3 leading-relaxed text-muted",
								children: s
							}, s))
						})
					]
				}, day.day))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Six theatres" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 max-w-3xl text-4xl font-medium",
					children: "One question: who reaches patients at a cost the system can bear."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: theatres.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-t border-line pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-primary",
								children: t.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-1 text-xl",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: t.body
							})
						]
					}, t.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "On the floor" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-4xl font-medium",
				children: "What to expect."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: conferenceFormats.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: f.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: f.body
					})]
				}, f.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-muted",
				children: [
					"Speaking enquiries:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-medium text-primary underline",
						href: `mailto:${event.speakingEmail}`,
						children: event.speakingEmail
					})
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseCta, {})
	] });
}
//#endregion
export { ConferencePage as component };
