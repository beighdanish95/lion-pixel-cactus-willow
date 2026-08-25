import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as event } from "./router-_gGNASto.mjs";
import { i as Section, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-lFVIu4C1.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Legal",
		title: "Privacy."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-4 leading-relaxed text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"When you send an enquiry or subscribe, we store the details you provide — name, work email, organisation, and message — so the ",
				event.organiser,
				" team can reply. In this preview, those records stay on your device."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"We do not sell enquiry data. We do not use it for unrelated marketing lists. You may ask for a record to be removed by writing to",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-primary underline",
					href: `mailto:${event.email}`,
					children: event.email
				}),
				"."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"This site is operated from offices in the United Arab Emirates and the United States. By sending an enquiry you agree that the organisers may contact you about",
				" ",
				event.name,
				"."
			] })
		]
	}) })] });
}
//#endregion
export { PrivacyPage as component };
