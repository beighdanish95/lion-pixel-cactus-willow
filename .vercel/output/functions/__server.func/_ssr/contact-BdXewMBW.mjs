import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as event, r as EnquiryForm } from "./router-_gGNASto.mjs";
import { i as Section, n as Kicker, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BdXewMBW.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Contact",
		title: "Write to the organisers.",
		lede: `${event.organiser}. Offices in Business Bay and St. Petersburg.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Direct" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-6",
				children: [event.offices.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-ink",
						children: o.label
					}), o.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: l
					}, l))]
				}, o.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [event.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${p.replace(/\s/g, "")}`,
					className: "block text-ink hover:text-primary",
					children: p
				}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${event.email}`,
					className: "mt-2 block text-primary underline",
					children: event.email
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl bg-surface p-6 hairline lg:col-span-3 md:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { intent: "contact" })
		})]
	}) })] });
}
//#endregion
export { ContactPage as component };
