import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as event } from "./router-_gGNASto.mjs";
import { i as Section, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-eYBH1_AY.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Legal",
		title: "Terms and conditions."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-4 leading-relaxed text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				event.name,
				" is organised by ",
				event.organiser,
				". Enquiries submitted through this site are received by the organising team and used solely to respond to your request — passes, stands, sponsorship, hosted buyer, startup, or general contact."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Submitting an enquiry does not constitute a confirmed booking, stand allocation, or hosted-buyer place. Confirmations are issued in writing by the organisers." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "All trademarks and programme names remain the property of their respective owners. Content on this site describes the exhibition and conference and may be updated as the programme is confirmed." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Questions:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-primary underline",
					href: `mailto:${event.email}`,
					children: event.email
				}),
				"."
			] })
		]
	}) })] });
}
//#endregion
export { TermsPage as component };
