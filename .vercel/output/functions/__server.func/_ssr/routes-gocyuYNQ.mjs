import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as Button, c as event, f as participate, h as sectors, i as audiences, m as programmes, v as stats, y as theatres } from "./router-_gGNASto.mjs";
import { t as CloseCta } from "./close-cta-wCARd0Q2.mjs";
import { i as Section, n as Kicker, t as HelixField } from "./page-hero-CkBgW9dO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gocyuYNQ.js
var import_jsx_runtime = require_jsx_runtime();
function programmeTo(slug) {
	if (slug === "hosted-buyer") return "/programmes/hosted-buyer";
	if (slug === "startup") return "/programmes/startup";
	return "/programmes";
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-wash relative overflow-hidden text-on-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelixField, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.32em] text-on-primary/70 uppercase",
							children: event.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display mt-5 text-5xl leading-[0.95] font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl",
							children: [
								"Future",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Biotech",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Expo"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display mt-4 text-3xl italic text-on-primary/90 md:text-4xl",
							children: ["Philadelphia ", event.year]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 max-w-lg border-t border-on-primary/20 pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-[0.28em] text-accent uppercase",
									children: "Center stage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display mt-2 text-3xl md:text-4xl",
									children: event.centerStage
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base leading-relaxed text-on-primary/80",
									children: "The United States’ dedicated red biotechnology exhibition and conference. One question: who reaches patients at a cost the system can bear."
								})
							]
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
									to: "/exhibition",
									children: "See the floor"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-end md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hashtag-stroke font-display text-right text-6xl font-semibold tracking-tight text-transparent opacity-40 md:text-7xl lg:text-8xl",
						children: event.hashtag
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-right text-sm text-on-primary/70",
						children: event.tagline
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-on-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-8 md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-medium tracking-tight md:text-5xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs font-semibold tracking-[0.18em] text-on-primary/60 uppercase",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The argument" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 max-w-3xl text-4xl leading-tight font-medium md:text-5xl",
				children: "Cell & gene therapy takes the centre of the floor — and the programme."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-lg text-muted",
				children: "Six theatres. Built for operators, not spectators."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2",
				children: theatres.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-t border-line pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-[0.2em] text-primary",
							children: t.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-2 text-2xl",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted",
							children: t.body
						})
					]
				}, t.n))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "The floor" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-3 text-4xl leading-tight font-medium md:text-5xl",
						children: "A curated red-biotech showcase with a CGT pavilion at its heart."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted",
						children: "Products, platforms, and manufacturing innovations meeting qualified buyers — not a general life-sciences bazaar. The centre of the floor is reserved for cell and gene therapy: processing, vectors, non-viral delivery, analytics, cryo, and the CDMOs who can actually make the dose."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ink",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/exhibition",
							children: ["Exhibition overview ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-1 gap-px sm:grid-cols-2",
					children: sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "flex min-h-14 items-center border-b border-line bg-surface/40 px-4 text-sm font-medium",
						children: s
					}, s))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Carried forward" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 max-w-3xl text-4xl leading-tight font-medium md:text-5xl",
				children: "Four ways the floor creates deals — all tighter."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: programmes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: programmeTo(p.slug),
					className: "group rounded-xl bg-surface p-6 hairline transition-transform duration-200 hover:-translate-y-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
							children: p.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-3 text-2xl group-hover:text-primary",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted",
							children: p.body
						})
					]
				}, p.slug))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
					onDark: true,
					children: "Who is in the room"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl leading-tight font-medium md:text-5xl",
					children: "The people who prevent, diagnose, and treat."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 divide-y divide-on-primary/15",
					children: audiences.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-3 text-lg text-on-primary/90",
						children: a
					}, a))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Participate" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-medium md:text-5xl",
					children: "Take your place."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2",
					children: participate.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/participate",
						search: { intent: p.intent },
						className: "rounded-xl bg-surface p-6 hairline transition-transform duration-200 hover:-translate-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: p.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-semibold tracking-wide text-primary uppercase",
								children: p.cta
							})
						]
					}, p.intent))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseCta, {})
	] });
}
//#endregion
export { Home as component };
