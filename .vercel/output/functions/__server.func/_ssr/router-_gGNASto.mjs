import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, m as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-uv3Khhh9.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-[opacity,transform,box-shadow,background-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-ink hover:bg-accent-hover focus-visible:ring-accent hover:shadow-[0_0_28px_0_color-mix(in_oklab,var(--color-accent)_50%,transparent)]",
			secondary: "bg-plum text-on-primary hover:opacity-90 focus-visible:ring-plum",
			solid: "bg-primary text-on-primary hover:bg-primary-dark focus-visible:ring-primary",
			outline: "bg-transparent text-on-primary ring-1 ring-on-primary/40 hover:bg-on-primary/10 focus-visible:ring-on-primary",
			ghost: "bg-transparent text-ink hover:bg-paper focus-visible:ring-primary",
			ink: "bg-ink text-on-primary hover:opacity-90 focus-visible:ring-ink"
		},
		size: {
			sm: "h-11 rounded-pill px-4 text-sm",
			md: "h-12 rounded-pill px-5 text-sm",
			lg: "h-14 rounded-pill px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-_gGNASto.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function HelixMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className: cn("h-9 w-9", className),
		"aria-hidden": "true",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13 5c8 6 8 24 0 30",
				stroke: "currentColor",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M27 5c-8 6-8 24 0 30",
				stroke: "currentColor",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14.5 11h11",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 16h8",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 20h8",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 24h8",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14.5 29h11",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13.2",
				cy: "11",
				r: "1.6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "26.8",
				cy: "11",
				r: "1.6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "15.2",
				cy: "20",
				r: "1.6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24.8",
				cy: "20",
				r: "1.6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13.2",
				cy: "29",
				r: "1.6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "26.8",
				cy: "29",
				r: "1.6",
				fill: "currentColor"
			})
		]
	});
}
function Logo({ inverted = false, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-3 no-underline", inverted ? "text-on-primary" : "text-ink"),
		"aria-label": "Future Biotech Expo home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelixMark, { className: inverted ? "text-on-primary" : "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("leading-tight", compact && "hidden sm:block"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-lg font-semibold tracking-tight md:text-xl",
				children: "Future Biotech Expo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block text-xs font-semibold tracking-[0.18em] uppercase", inverted ? "text-on-primary/70" : "text-muted"),
				children: "Philadelphia 2027"
			})]
		})]
	});
}
var fieldClass = "h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink shadow-none outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-primary/20";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		suppressHydrationWarning: true,
		className: cn(fieldClass, className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn(fieldClass, "h-32 resize-y py-3 leading-relaxed", className),
		...props
	});
}
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		suppressHydrationWarning: true,
		className: cn(fieldClass, "appearance-none pr-10", className),
		...props,
		children
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-sm font-medium text-ink", className),
		...props
	});
}
var event = {
	name: "Future Biotech Expo",
	short: "FBE",
	hashtag: "#FBE27",
	city: "Philadelphia",
	year: "2027",
	tagline: "The science that treats.",
	eyebrow: "Red biotechnology",
	centerStage: "Cell & gene therapy",
	organiser: "Maxpo Exhibitions",
	email: "info@futurebiotechexpo.com",
	sponsorshipEmail: "sponsorships@maxpoexhibitions.com",
	speakingEmail: "speaking@maxpoexhibitions.com",
	phones: ["+971 50 943 1529", "+91 7780 985 893"],
	offices: [{
		label: "Head office",
		lines: [
			"Citadel Tower",
			"Marasi Dr, Business Bay",
			"United Arab Emirates"
		]
	}, {
		label: "Registered office",
		lines: [
			"7901 4th St N Ste 300",
			"St. Petersburg, FL 33702",
			"USA"
		]
	}]
};
var stats = [
	{
		value: "3,500+",
		label: "Industry leaders"
	},
	{
		value: "200+",
		label: "Exhibitors"
	},
	{
		value: "80+",
		label: "Speakers"
	},
	{
		value: "40+",
		label: "Countries"
	}
];
var theatres = [
	{
		n: "01",
		title: "Next-generation cell therapy",
		body: "Autologous, allogeneic, and in-vivo CAR. Durability, antigen escape, vein-to-vein time."
	},
	{
		n: "02",
		title: "Gene editing",
		body: "CRISPR, base, prime, and epigenetic editors. Precision, immunogenicity, first-in-human."
	},
	{
		n: "03",
		title: "Delivery",
		body: "AAV, LNPs, and non-viral systems. Tropism, redosing, and the plant behind the construct."
	},
	{
		n: "04",
		title: "Manufacturing & CMC",
		body: "Closed systems, analytics, comparability, and cost of goods. Scale is the science now."
	},
	{
		n: "05",
		title: "Regulatory & access",
		body: "FDA and EMA pathways, evidence payers will buy, and the post-approval contract with patients."
	},
	{
		n: "06",
		title: "Pipeline to patient",
		body: "Oncology, rare disease, autoimmune, and regenerative programmes moving from signal to standard of care."
	}
];
var conferenceDays = [{
	day: "Day 01",
	title: "The science of scale",
	sessions: [
		"Opening plenary — Cellicon Valley and the next decade of CGT",
		"In-vivo editing: what actually reaches the nucleus",
		"Allogeneic vs autologous: a manufacturing argument",
		"Vector and LNP theatre with CDMO roundtables",
		"Investor hour — platforms that can be plants"
	]
}, {
	day: "Day 02",
	title: "The business of access",
	sessions: [
		"Plenary — From BLA to bedside: evidence, price, and trust",
		"CMC comparability without slowing the clinic",
		"Hospital systems as manufacturers and buyers",
		"Startup acceleration finals and partnering",
		"Closing conversation — who gets treated in 2030"
	]
}];
var conferenceFormats = [
	{
		title: "Keynote addresses",
		body: "Headline presentations from CGT operators, scientists, and policy leaders."
	},
	{
		title: "Technical theatres",
		body: "Deep sessions on editing, delivery, CMC, and comparability."
	},
	{
		title: "Closed-door roundtables",
		body: "Off-record rooms for CDMOs, hospital systems, and capital."
	},
	{
		title: "Fireside conversations",
		body: "Interview-style exchanges with people who have taken a product to patients."
	},
	{
		title: "Investor hour",
		body: "Platforms that can be plants — not a corridor of decks."
	},
	{
		title: "Live Q&A",
		body: "Audience-driven engagement built into every major session."
	}
];
var sectors = [
	"Cell processing",
	"Viral vectors",
	"Non-viral delivery",
	"Raw materials",
	"Analytics & QC",
	"Cryo & logistics",
	"Fill-finish",
	"CDMOs & CROs",
	"Digital & AI",
	"Closed systems"
];
var programmes = [
	{
		slug: "hosted-buyer",
		kicker: "Hosted Buyer Program",
		title: "Skip the noise. Meet the right people.",
		body: "Qualified scientific and procurement leaders travel with a pre-set diary of meetings — the deal engine of the expo, rebuilt for CGT purchasing."
	},
	{
		slug: "startup",
		kicker: "Startup acceleration",
		title: "A stage, not a hallway.",
		body: "Structured showcases, mentor clinics, and a dedicated investor track for companies still proving the platform — with manufacturing-ready CGT as the filter."
	},
	{
		slug: "matchmaking",
		kicker: "B2B matchmaking",
		title: "Curated, timed, followed up.",
		body: "Introductions are scheduled against intent, not badges. CDMO capacity, vector slots, analytics, and capital sit on the same grid."
	},
	{
		slug: "investors",
		kicker: "Investor sessions",
		title: "Capital, not a pitch queue.",
		body: "Closed-door conversations for funds and strategics who buy platforms, plants, and pipelines — not a corridor of decks."
	}
];
var audiences = [
	"Cell & gene therapy companies",
	"Pharma & biopharma",
	"CDMOs & CROs",
	"Vaccine developers",
	"Diagnostics & genomics",
	"Clinical research",
	"Digital health & AI",
	"Hospital systems & AMCs",
	"Investors & policymakers",
	"Raw-material & equipment suppliers"
];
var participate = [
	{
		intent: "pass",
		title: "Delegate pass",
		body: "Two days of plenaries, theatres, and the exhibition floor.",
		cta: "Request a pass"
	},
	{
		intent: "exhibit",
		title: "Book a stand",
		body: "CGT Pavilion and the surrounding red-biotech floor.",
		cta: "Exhibit enquiry"
	},
	{
		intent: "sponsor",
		title: "Sponsorship",
		body: "Theatres, receptions, and the Hosted Buyer lounge.",
		cta: "Sponsor packs"
	},
	{
		intent: "buyer",
		title: "Hosted Buyer",
		body: "Apply if you buy, partner, or in-license in CGT.",
		cta: "Apply to the programme"
	}
];
var philadelphia = [
	"Penn Medicine’s CAR-T pioneering",
	"CHOP’s paediatric gene-therapy programmes",
	"The first FDA-approved in-vivo gene therapy, born here",
	"A lattice of hospitals, CDMOs, venture, and talent from University City to the Navy Yard",
	"One of the world’s leading clusters for cell and gene therapy",
	"Boston, New York, and the FDA corridor a short hop away"
];
var gains = [
	"Discover the science that is actually reaching patients — and the plants that can make the dose.",
	"Sit with CDMOs, vector suppliers, and hospital systems who buy, partner, and in-license.",
	"Walk a floor reserved for cell processing, delivery, analytics, cryo, and closed systems.",
	"Enter structured matchmaking instead of a badge-swap hallway.",
	"Hear operators, not filler keynotes. Eighty speakers. No spectators.",
	"Place your organisation inside Cellicon Valley’s commercial and scientific density."
];
var exhibitReasons = [
	"Meet qualified scientific and procurement leaders, not foot traffic.",
	"Stand in the CGT Pavilion at the centre of the floor — or on the surrounding red-biotech ring.",
	"Put processing, vectors, non-viral delivery, analytics, or cryo in front of people who can sign.",
	"Use the same matchmaking grid as hosted buyers, CDMOs, and capital.",
	"Launch a platform, a plant, or a partnership in the US CGT market."
];
var buyerEntitlements = [
	{
		title: "Pre-scheduled 1:1 meetings",
		body: "A diary of high-relevance appointments matched to CGT purchasing, partnering, and in-licensing intent."
	},
	{
		title: "Concierge on the floor",
		body: "A liaison manages the schedule, resolves conflicts, and keeps every meeting on time."
	},
	{
		title: "Full event access",
		body: "Plenaries, theatres, the exhibition floor, and evening rooms — included."
	},
	{
		title: "Hosted Buyer lounge",
		body: "A quiet room to debrief between meetings, with dedicated seating and catering."
	},
	{
		title: "Directory listing",
		body: "Your organisation is listed for exhibitors, so inbound requests arrive with context."
	},
	{
		title: "Follow-up, not a badge scan",
		body: "Introductions are timed, recorded, and followed up after the floor closes."
	}
];
var startupPackage = [
	"Investor-ready pitch session with funds who buy platforms, plants, and pipelines",
	"A dedicated presence in the startup zone — a stage, not a hallway table",
	"Mentor clinics with operators who have taken CGT from signal to dose",
	"Introductions to CDMOs, hospital systems, and strategics",
	"Full delegate access for core team members",
	"Listing in the startup directory circulated to attendees and capital"
];
var sponsorTiers = [
	{
		title: "Theatre",
		body: "Put your name on a scientific room — cell therapy, editing, delivery, CMC, access, or pipeline."
	},
	{
		title: "Reception",
		body: "Host the evening room where operators, capital, and hospital systems actually talk."
	},
	{
		title: "Hosted Buyer lounge",
		body: "Be present where qualified buyers debrief between meetings."
	},
	{
		title: "Floor identity",
		body: "Own a corridor, a pavilion node, or the matchmaking desk on the CGT floor."
	}
];
var faqs = [
	{
		q: "What is Future Biotech Expo?",
		a: "The United States’ dedicated red biotechnology exhibition and conference. Red biotech is the science at the intersection of biology and human health. This edition places cell and gene therapy at the centre of the floor and the programme."
	},
	{
		q: "Where is it held?",
		a: "Philadelphia — Cellicon Valley. Staging the expo here puts every attendee inside the most concentrated cell and gene therapy ecosystem in the United States."
	},
	{
		q: "Who should attend?",
		a: "Cell and gene therapy companies, pharma, CDMOs and CROs, hospital systems and AMCs, investors, policymakers, and the suppliers who make the dose — processing, vectors, analytics, cryo, and closed systems."
	},
	{
		q: "How do I request a delegate pass?",
		a: "Open Participate, choose Delegate pass, and send an enquiry. The team confirms eligibility and issues joining details."
	},
	{
		q: "How do I exhibit?",
		a: "The centre of the floor is reserved for cell and gene therapy. Request a stand in the CGT Pavilion or on the surrounding red-biotech floor via Participate."
	},
	{
		q: "What is the Hosted Buyer Program?",
		a: "Qualified scientific and procurement leaders travel with a pre-set diary of meetings. Apply if you buy, partner, or in-license in CGT."
	},
	{
		q: "Can startups take part?",
		a: "Yes. The Startup Acceleration programme is a stage with mentor clinics and an investor track, filtered for manufacturing-ready CGT. Apply from Participate."
	},
	{
		q: "Are there speaking opportunities?",
		a: "The conference is built for operators, not spectators. Eighty speakers. No filler keynotes. The line-up is being confirmed — write to speaking@maxpoexhibitions.com."
	},
	{
		q: "Who organises the expo?",
		a: "Maxpo Exhibitions, with offices in Business Bay, Dubai and St. Petersburg, Florida."
	},
	{
		q: "How do I stay updated?",
		a: "Subscribe in the footer, or send an enquiry. Speaker announcements and floor updates go to the list first."
	}
];
var nav = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/conference",
		label: "Conference"
	},
	{
		to: "/exhibition",
		label: "Exhibition"
	},
	{
		to: "/programmes",
		label: "Programmes"
	},
	{
		to: "/sponsors",
		label: "Sponsors"
	},
	{
		to: "/faq",
		label: "FAQ"
	}
];
var STORAGE_KEY = "fbe27-enquiries";
function canUseStorage() {
	return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}
function loadEnquiries() {
	if (!canUseStorage()) return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveEnquiry(type, fields) {
	const enquiry = {
		id: `FBE-${Date.now().toString(36).toUpperCase()}`,
		type,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		fields
	};
	const next = [enquiry, ...loadEnquiries()].slice(0, 50);
	if (canUseStorage()) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	return enquiry;
}
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	function onSubscribe(e) {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Enter a valid email.");
			return;
		}
		saveEnquiry("newsletter", { email });
		toast.success("You’re on the list.");
		setEmail("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "hero-wash text-on-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-on-primary/75",
							children: "The United States’ dedicated red biotechnology exhibition and conference. Cell and gene therapy at the centre of the floor — and the programme."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs font-semibold tracking-[0.2em] uppercase text-on-primary/60",
							children: ["Organised by ", event.organiser]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] uppercase text-on-primary/55",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-on-primary/85 hover:text-on-primary",
								children: item.label
							}) }, item.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/participate",
								className: "text-on-primary/85 hover:text-on-primary",
								children: "Participate"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-on-primary/85 hover:text-on-primary",
								children: "Contact"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.18em] uppercase text-on-primary/55",
							children: "Offices"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-4 text-sm text-on-primary/80",
							children: event.offices.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium text-on-primary",
								children: office.label
							}), office.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: line
							}, line))] }, office.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm",
							children: [event.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${p.replace(/\s/g, "")}`,
								className: "block text-on-primary/85 hover:text-on-primary",
								children: p
							}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${event.email}`,
								className: "mt-1 block text-on-primary/85 hover:text-on-primary",
								children: event.email
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.18em] uppercase text-on-primary/55",
							children: "Newsletter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-on-primary/75",
							children: "Speaker announcements and floor updates. No filler."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: onSubscribe,
							className: "mt-4 flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "Work email",
								className: "border-on-primary/20 bg-on-primary/10 text-on-primary placeholder:text-on-primary/50"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "primary",
								children: "Subscribe"
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-on-primary/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-on-primary/60 md:flex-row md:items-center md:justify-between md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					event.hashtag,
					" · ",
					event.organiser
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-on-primary",
						children: "Terms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-on-primary",
						children: "Privacy"
					})]
				})]
			})
		})]
	});
}
var copy = {
	pass: {
		title: "Request a delegate pass",
		lede: "Two days of plenaries, theatres, and the exhibition floor.",
		submit: "Request a pass",
		extra: {
			name: "passType",
			label: "Pass type",
			options: [
				"Full expo pass",
				"Conference + floor",
				"Exhibition floor only"
			]
		}
	},
	exhibit: {
		title: "Book a stand",
		lede: "CGT Pavilion and the surrounding red-biotech floor.",
		submit: "Send exhibit enquiry",
		extra: {
			name: "stand",
			label: "Stand interest",
			options: [
				"CGT Pavilion",
				"Red-biotech floor",
				"Startup zone",
				"Not sure yet"
			]
		}
	},
	sponsor: {
		title: "Sponsorship enquiry",
		lede: "Theatres, receptions, and the Hosted Buyer lounge.",
		submit: "Request sponsor packs",
		extra: {
			name: "interest",
			label: "Interest",
			options: [
				"Theatre",
				"Reception",
				"Hosted Buyer lounge",
				"Floor identity",
				"Package overview"
			]
		}
	},
	buyer: {
		title: "Apply to Hosted Buyer",
		lede: "Apply if you buy, partner, or in-license in CGT.",
		submit: "Submit application",
		extra: {
			name: "role",
			label: "Your role in CGT",
			options: [
				"Scientific / R&D lead",
				"Procurement / sourcing",
				"Business development / in-licensing",
				"Hospital system / AMC",
				"CDMO capacity buyer"
			]
		}
	},
	startup: {
		title: "Startup Acceleration",
		lede: "A stage, not a hallway — manufacturing-ready CGT as the filter.",
		submit: "Apply to the programme",
		extra: {
			name: "stage",
			label: "Company stage",
			options: [
				"Seed",
				"Series A",
				"Series B",
				"Later / platform"
			]
		}
	},
	meeting: {
		title: "Book a meeting",
		lede: "Tell us what you need. The team will come back with a time.",
		submit: "Request a meeting",
		extra: {
			name: "topic",
			label: "Topic",
			options: [
				"Exhibiting",
				"Sponsoring",
				"Delegate pass",
				"Hosted Buyer",
				"Speaking",
				"Partnership"
			]
		}
	},
	contact: {
		title: "Write to the organisers",
		lede: "Maxpo Exhibitions. We read every note.",
		submit: "Send message"
	}
};
function Field({ id, label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-primary",
			children: error
		}) : null
	] });
}
function EnquiryForm({ intent, compact = false, onDone }) {
	const meta = copy[intent];
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		organisation: "",
		title: "",
		country: "",
		message: "",
		extra: meta.extra?.options[0] ?? ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const extraName = meta.extra?.name ?? "extra";
	const prefix = `fbe-${intent}`;
	const fields = (0, import_react.useMemo)(() => [
		{
			key: "name",
			label: "Full name",
			type: "text",
			auto: "name"
		},
		{
			key: "email",
			label: "Work email",
			type: "email",
			auto: "email"
		},
		{
			key: "organisation",
			label: "Organisation",
			type: "text",
			auto: "organization"
		},
		{
			key: "title",
			label: "Job title",
			type: "text",
			auto: "organization-title"
		},
		{
			key: "country",
			label: "Country",
			type: "text",
			auto: "country-name"
		}
	], []);
	function validate() {
		const next = {};
		if (!values.name.trim()) next.name = "Name is required.";
		if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "A valid work email is required.";
		if (!values.organisation.trim()) next.organisation = "Organisation is required.";
		return next;
	}
	function onSubmit(e) {
		e.preventDefault();
		const next = validate();
		setErrors(next);
		if (Object.keys(next).length) return;
		setBusy(true);
		const payload = {
			name: values.name.trim(),
			email: values.email.trim(),
			organisation: values.organisation.trim(),
			title: values.title.trim(),
			country: values.country.trim(),
			message: values.message.trim()
		};
		if (meta.extra) payload[extraName] = values.extra;
		const enquiry = saveEnquiry(intent, payload);
		setSent({ id: enquiry.id });
		setBusy(false);
		toast.success("Enquiry received", { description: `Reference ${enquiry.id}` });
		onDone?.();
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-paper px-6 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
				children: "Received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-2 text-3xl text-ink",
				children: "We’ll be in touch."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-md text-muted",
				children: [
					"Your enquiry is logged under reference",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-ink",
						children: sent.id
					}),
					". The Maxpo team reviews every request."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				className: "mt-6",
				onClick: () => {
					setSent(null);
					setValues({
						name: "",
						email: "",
						organisation: "",
						title: "",
						country: "",
						message: "",
						extra: meta.extra?.options[0] ?? ""
					});
				},
				children: "Send another"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: cn("grid gap-4", compact ? "" : "sm:grid-cols-2"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn(compact ? "" : "sm:col-span-2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
						children: "Enquire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-3xl text-ink",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: meta.lede
					})
				]
			}),
			fields.map((f) => {
				const id = `${prefix}-${f.key}`;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id,
					label: f.label,
					error: errors[f.key],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id,
						name: f.key,
						type: f.type,
						autoComplete: f.auto,
						value: values[f.key],
						onChange: (e) => setValues((v) => ({
							...v,
							[f.key]: e.target.value
						})),
						required: f.key === "name" || f.key === "email" || f.key === "organisation"
					})
				}, f.key);
			}),
			meta.extra ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: `${prefix}-extra`,
				label: meta.extra.label,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					id: `${prefix}-extra`,
					name: extraName,
					value: values.extra,
					onChange: (e) => setValues((v) => ({
						...v,
						extra: e.target.value
					})),
					children: meta.extra.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: opt,
						children: opt
					}, opt))
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn(compact ? "" : "sm:col-span-2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: `${prefix}-message`,
					label: "Message (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: `${prefix}-message`,
						name: "message",
						value: values.message,
						onChange: (e) => setValues((v) => ({
							...v,
							message: e.target.value
						})),
						placeholder: "What should the team know?"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn(compact ? "" : "sm:col-span-2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "primary",
					size: "lg",
					disabled: busy,
					children: meta.submit
				})
			})
		]
	});
}
function MeetingDialog({ open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-[60] bg-ink/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-1/2 left-1/2 z-[70] w-[min(92vw,560px)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-surface p-6 shadow-xl focus:outline-none md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-start justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Book a meeting"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-11 w-11 px-0",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
				intent: "meeting",
				compact: true,
				onDone: () => onOpenChange(false)
			})]
		})] })
	});
}
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [meeting, setMeeting] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-wash",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							size: "sm",
							onClick: () => setMeeting(true),
							children: "Book a meeting"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "primary",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/participate",
								search: { intent: "pass" },
								children: "Get your pass"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-11 w-11 items-center justify-center rounded-pill text-on-primary lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden border-t border-on-primary/15 lg:block",
				"aria-label": "Primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 px-6 py-2.5 text-sm text-on-primary/80",
					children: nav.map((item) => {
						const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("inline-flex h-10 items-center border-b-2 border-transparent transition-colors hover:text-on-primary", active && "border-accent text-on-primary"),
							children: item.label
						}) }, item.to);
					})
				})
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-wash border-t border-on-primary/15 px-4 py-4 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Mobile",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "flex min-h-12 items-center text-on-primary",
							onClick: () => setOpen(false),
							children: item.label
						}) }, item.to))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: () => {
							setOpen(false);
							setMeeting(true);
						},
						children: "Book a meeting"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/participate",
							search: { intent: "pass" },
							onClick: () => setOpen(false),
							children: "Get your pass"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs tracking-[0.18em] text-on-primary/60 uppercase",
					children: event.hashtag
				})
			]
		}) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeetingDialog, {
		open: meeting,
		onOpenChange: setMeeting
	})] });
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var styles_default = "/assets/styles-Cyx4UPeA.css";
var APP_NAME = "Future Biotech Expo";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Future Biotech Expo — the United States’ dedicated red biotechnology exhibition and conference. Cell and gene therapy at the centre of the floor and the programme. Philadelphia."
			},
			{
				name: "theme-color",
				content: "#E23940"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
			}
		]
	}),
	errorComponent: AppErrorComponent,
	notFoundComponent: NotFound,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg font-sans text-ink",
			suppressHydrationWarning: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					position: "top-center",
					richColors: true,
					closeButton: true
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.28em] text-primary uppercase",
				children: "#FBE27"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-4xl",
				children: "This page isn’t on the floor."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "The link may have moved. Head back to the expo home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 inline-flex h-12 items-center rounded-pill bg-accent px-6 font-semibold text-ink",
				children: "Return home"
			})
		]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-gocyuYNQ.mjs");
var Route$12 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./about-Dals8x5D.mjs");
var Route$11 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./conference-BSwEde6c.mjs");
var Route$10 = createFileRoute("/conference")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./contact-BdXewMBW.mjs");
var Route$9 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./exhibition-m0HA_asi.mjs");
var Route$8 = createFileRoute("/exhibition")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./faq-DW0-QCcD.mjs");
var Route$7 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./participate-D2WWC1MX.mjs");
var intents = [
	"pass",
	"exhibit",
	"sponsor",
	"buyer",
	"startup"
];
function isIntent(v) {
	return typeof v === "string" && intents.includes(v);
}
var Route$6 = createFileRoute("/participate")({
	validateSearch: (search) => ({ intent: isIntent(search.intent) ? search.intent : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-lFVIu4C1.mjs");
var Route$5 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./sponsors-XmDOczQM.mjs");
var Route$4 = createFileRoute("/sponsors")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./terms-eYBH1_AY.mjs");
var Route$3 = createFileRoute("/terms")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./programmes-B0XnovTf.mjs");
var Route$2 = createFileRoute("/programmes/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./hosted-buyer-CFPkS3Wo.mjs");
var Route$1 = createFileRoute("/programmes/hosted-buyer")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./startup-COKgIzjP.mjs");
var Route = createFileRoute("/programmes/startup")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var ConferenceRoute = Route$10.update({
	id: "/conference",
	path: "/conference",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var ExhibitionRoute = Route$8.update({
	id: "/exhibition",
	path: "/exhibition",
	getParentRoute: () => Route$13
});
var FaqRoute = Route$7.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$13
});
var ParticipateRoute = Route$6.update({
	id: "/participate",
	path: "/participate",
	getParentRoute: () => Route$13
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$13
});
var SponsorsRoute = Route$4.update({
	id: "/sponsors",
	path: "/sponsors",
	getParentRoute: () => Route$13
});
var TermsRoute = Route$3.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$13
});
var ProgrammesIndexRoute = Route$2.update({
	id: "/programmes/",
	path: "/programmes/",
	getParentRoute: () => Route$13
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ConferenceRoute,
	ContactRoute,
	ExhibitionRoute,
	FaqRoute,
	ParticipateRoute,
	PrivacyRoute,
	SponsorsRoute,
	TermsRoute,
	ProgrammesHostedBuyerRoute: Route$1.update({
		id: "/programmes/hosted-buyer",
		path: "/programmes/hosted-buyer",
		getParentRoute: () => Route$13
	}),
	ProgrammesStartupRoute: Route.update({
		id: "/programmes/startup",
		path: "/programmes/startup",
		getParentRoute: () => Route$13
	}),
	ProgrammesIndexRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { startupPackage as _, buyerEntitlements as a, Button as b, event as c, gains as d, participate as f, sponsorTiers as g, sectors as h, audiences as i, exhibitReasons as l, programmes as m, Route$6 as n, conferenceDays as o, philadelphia as p, EnquiryForm as r, conferenceFormats as s, router_exports as t, faqs as u, stats as v, cn as x, theatres as y };
