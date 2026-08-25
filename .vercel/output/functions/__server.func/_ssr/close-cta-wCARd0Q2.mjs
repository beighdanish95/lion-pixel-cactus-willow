import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Button, c as event } from "./router-_gGNASto.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/close-cta-wCARd0Q2.js
var import_jsx_runtime = require_jsx_runtime();
function CloseCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero-wash relative overflow-hidden text-on-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.28em] text-on-primary/70 uppercase",
					children: event.hashtag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-4 max-w-3xl text-4xl leading-tight font-medium md:text-5xl",
					children: "There’s a place for you on the floor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg text-on-primary/80",
					children: "Whether you exhibit, sponsor, speak, buy, or come to learn — the programme is built for people already shaping cell and gene therapy."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "primary",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/participate",
							children: "Claim your place"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Talk to the organisers"
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { CloseCta as t };
