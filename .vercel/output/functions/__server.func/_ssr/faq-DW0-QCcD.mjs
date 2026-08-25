import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as ChevronDown } from "../_libs/lucide-react.mjs";
import { u as faqs, x as cn } from "./router-_gGNASto.mjs";
import { t as CloseCta } from "./close-cta-wCARd0Q2.mjs";
import { i as Section, r as PageHero } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DW0-QCcD.js
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-line", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-xl font-medium text-ink transition-colors hover:text-primary [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 shrink-0 text-muted transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden data-[state=closed]:animate-none",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pb-5 text-base leading-relaxed text-muted", className),
			children
		})
	});
}
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "FAQ",
			title: "Straight answers.",
			lede: "Passes, the floor, hosted buyers, startups, and how to reach the organisers."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "mx-auto max-w-3xl",
			children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: `q-${i}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
			}, f.q))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseCta, {})
	] });
}
//#endregion
export { FaqPage as component };
