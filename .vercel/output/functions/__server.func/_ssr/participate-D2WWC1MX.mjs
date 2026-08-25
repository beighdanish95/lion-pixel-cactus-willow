import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as participate, n as Route$6, r as EnquiryForm, x as cn } from "./router-_gGNASto.mjs";
import { i as Section, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/participate-D2WWC1MX.js
var import_jsx_runtime = require_jsx_runtime();
function ParticipatePage() {
	const { intent: raw } = Route$6.useSearch();
	const intent = raw ?? "pass";
	const navigate = Route$6.useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Take your place",
		title: "The people who prevent, diagnose, and treat.",
		lede: "Request a pass, book a stand, sponsor a theatre, or apply as a hosted buyer. Every enquiry reaches the Maxpo team."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [participate.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => navigate({ search: { intent: p.intent } }),
			className: cn("h-11 rounded-pill px-4 text-sm font-semibold transition-colors", intent === p.intent ? "bg-primary text-on-primary" : "bg-paper text-ink hover:bg-line"),
			children: p.title
		}, p.intent)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => navigate({ search: { intent: "startup" } }),
			className: cn("h-11 rounded-pill px-4 text-sm font-semibold transition-colors", intent === "startup" ? "bg-primary text-on-primary" : "bg-paper text-ink hover:bg-line"),
			children: "Startup"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 rounded-xl bg-surface p-6 hairline md:p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { intent }, intent)
	})] })] });
}
//#endregion
export { ParticipatePage as component };
