import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as buyerEntitlements, b as Button } from "./router-_gGNASto.mjs";
import { t as CloseCta } from "./close-cta-wCARd0Q2.mjs";
import { i as Section, n as Kicker, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hosted-buyer-CFPkS3Wo.js
var import_jsx_runtime = require_jsx_runtime();
function HostedBuyerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Hosted Buyer Program",
			title: "Skip the noise. Meet the right people.",
			lede: "Qualified scientific and procurement leaders travel with a pre-set diary of meetings — the deal engine of the expo, rebuilt for CGT purchasing.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "primary",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/participate",
					search: { intent: "buyer" },
					children: "Apply to the programme"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Entitlements" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-4xl font-medium",
				children: "Every meeting counts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-2",
				children: buyerEntitlements.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-6 hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: e.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed text-muted",
						children: e.body
					})]
				}, e.title))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Who qualifies" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-medium",
					children: "Apply if you buy, partner, or in-license in CGT."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-4 text-lg leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-line pt-4",
							children: "Purchasing influence — scientific, procurement, or business-development leaders who shape technology, capacity, and in-licensing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-line pt-4",
							children: "Organisation profile — cell and gene therapy companies, pharma, CDMOs, hospital systems and AMCs, and well-funded platforms investing in the dose."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-line pt-4",
							children: "Meeting commitment — a diary of high-value 1:1s across the two-day floor, matched against intent."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/participate",
						search: { intent: "buyer" },
						children: "Submit an application"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseCta, {})
	] });
}
//#endregion
export { HostedBuyerPage as component };
