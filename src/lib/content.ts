export const event = {
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
  offices: [
    {
      label: "Head office",
      lines: ["Citadel Tower", "Marasi Dr, Business Bay", "United Arab Emirates"],
    },
    {
      label: "Registered office",
      lines: ["7901 4th St N Ste 300", "St. Petersburg, FL 33702", "USA"],
    },
  ],
} as const;

export const stats = [
  { value: "3,500+", label: "Industry leaders" },
  { value: "200+", label: "Exhibitors" },
  { value: "80+", label: "Speakers" },
  { value: "40+", label: "Countries" },
] as const;

export const theatres = [
  {
    n: "01",
    title: "Next-generation cell therapy",
    body: "Autologous, allogeneic, and in-vivo CAR. Durability, antigen escape, vein-to-vein time.",
  },
  {
    n: "02",
    title: "Gene editing",
    body: "CRISPR, base, prime, and epigenetic editors. Precision, immunogenicity, first-in-human.",
  },
  {
    n: "03",
    title: "Delivery",
    body: "AAV, LNPs, and non-viral systems. Tropism, redosing, and the plant behind the construct.",
  },
  {
    n: "04",
    title: "Manufacturing & CMC",
    body: "Closed systems, analytics, comparability, and cost of goods. Scale is the science now.",
  },
  {
    n: "05",
    title: "Regulatory & access",
    body: "FDA and EMA pathways, evidence payers will buy, and the post-approval contract with patients.",
  },
  {
    n: "06",
    title: "Pipeline to patient",
    body: "Oncology, rare disease, autoimmune, and regenerative programmes moving from signal to standard of care.",
  },
] as const;

export const conferenceDays = [
  {
    day: "Day 01",
    title: "The science of scale",
    sessions: [
      "Opening plenary — Cellicon Valley and the next decade of CGT",
      "In-vivo editing: what actually reaches the nucleus",
      "Allogeneic vs autologous: a manufacturing argument",
      "Vector and LNP theatre with CDMO roundtables",
      "Investor hour — platforms that can be plants",
    ],
  },
  {
    day: "Day 02",
    title: "The business of access",
    sessions: [
      "Plenary — From BLA to bedside: evidence, price, and trust",
      "CMC comparability without slowing the clinic",
      "Hospital systems as manufacturers and buyers",
      "Startup acceleration finals and partnering",
      "Closing conversation — who gets treated in 2030",
    ],
  },
] as const;

export const conferenceFormats = [
  { title: "Keynote addresses", body: "Headline presentations from CGT operators, scientists, and policy leaders." },
  { title: "Technical theatres", body: "Deep sessions on editing, delivery, CMC, and comparability." },
  { title: "Closed-door roundtables", body: "Off-record rooms for CDMOs, hospital systems, and capital." },
  { title: "Fireside conversations", body: "Interview-style exchanges with people who have taken a product to patients." },
  { title: "Investor hour", body: "Platforms that can be plants — not a corridor of decks." },
  { title: "Live Q&A", body: "Audience-driven engagement built into every major session." },
] as const;

export const sectors = [
  "Cell processing",
  "Viral vectors",
  "Non-viral delivery",
  "Raw materials",
  "Analytics & QC",
  "Cryo & logistics",
  "Fill-finish",
  "CDMOs & CROs",
  "Digital & AI",
  "Closed systems",
] as const;

export const programmes = [
  {
    slug: "hosted-buyer",
    kicker: "Hosted Buyer Program",
    title: "Skip the noise. Meet the right people.",
    body: "Qualified scientific and procurement leaders travel with a pre-set diary of meetings — the deal engine of the expo, rebuilt for CGT purchasing.",
  },
  {
    slug: "startup",
    kicker: "Startup acceleration",
    title: "A stage, not a hallway.",
    body: "Structured showcases, mentor clinics, and a dedicated investor track for companies still proving the platform — with manufacturing-ready CGT as the filter.",
  },
  {
    slug: "matchmaking",
    kicker: "B2B matchmaking",
    title: "Curated, timed, followed up.",
    body: "Introductions are scheduled against intent, not badges. CDMO capacity, vector slots, analytics, and capital sit on the same grid.",
  },
  {
    slug: "investors",
    kicker: "Investor sessions",
    title: "Capital, not a pitch queue.",
    body: "Closed-door conversations for funds and strategics who buy platforms, plants, and pipelines — not a corridor of decks.",
  },
] as const;

export const audiences = [
  "Cell & gene therapy companies",
  "Pharma & biopharma",
  "CDMOs & CROs",
  "Vaccine developers",
  "Diagnostics & genomics",
  "Clinical research",
  "Digital health & AI",
  "Hospital systems & AMCs",
  "Investors & policymakers",
  "Raw-material & equipment suppliers",
] as const;

export const participate = [
  {
    intent: "pass" as const,
    title: "Delegate pass",
    body: "Two days of plenaries, theatres, and the exhibition floor.",
    cta: "Request a pass",
  },
  {
    intent: "exhibit" as const,
    title: "Book a stand",
    body: "CGT Pavilion and the surrounding red-biotech floor.",
    cta: "Exhibit enquiry",
  },
  {
    intent: "sponsor" as const,
    title: "Sponsorship",
    body: "Theatres, receptions, and the Hosted Buyer lounge.",
    cta: "Sponsor packs",
  },
  {
    intent: "buyer" as const,
    title: "Hosted Buyer",
    body: "Apply if you buy, partner, or in-license in CGT.",
    cta: "Apply to the programme",
  },
] as const;

export const philadelphia = [
  "Penn Medicine’s CAR-T pioneering",
  "CHOP’s paediatric gene-therapy programmes",
  "The first FDA-approved in-vivo gene therapy, born here",
  "A lattice of hospitals, CDMOs, venture, and talent from University City to the Navy Yard",
  "One of the world’s leading clusters for cell and gene therapy",
  "Boston, New York, and the FDA corridor a short hop away",
] as const;

export const gains = [
  "Discover the science that is actually reaching patients — and the plants that can make the dose.",
  "Sit with CDMOs, vector suppliers, and hospital systems who buy, partner, and in-license.",
  "Walk a floor reserved for cell processing, delivery, analytics, cryo, and closed systems.",
  "Enter structured matchmaking instead of a badge-swap hallway.",
  "Hear operators, not filler keynotes. Eighty speakers. No spectators.",
  "Place your organisation inside Cellicon Valley’s commercial and scientific density.",
] as const;

export const exhibitReasons = [
  "Meet qualified scientific and procurement leaders, not foot traffic.",
  "Stand in the CGT Pavilion at the centre of the floor — or on the surrounding red-biotech ring.",
  "Put processing, vectors, non-viral delivery, analytics, or cryo in front of people who can sign.",
  "Use the same matchmaking grid as hosted buyers, CDMOs, and capital.",
  "Launch a platform, a plant, or a partnership in the US CGT market.",
] as const;

export const buyerEntitlements = [
  {
    title: "Pre-scheduled 1:1 meetings",
    body: "A diary of high-relevance appointments matched to CGT purchasing, partnering, and in-licensing intent.",
  },
  {
    title: "Concierge on the floor",
    body: "A liaison manages the schedule, resolves conflicts, and keeps every meeting on time.",
  },
  {
    title: "Full event access",
    body: "Plenaries, theatres, the exhibition floor, and evening rooms — included.",
  },
  {
    title: "Hosted Buyer lounge",
    body: "A quiet room to debrief between meetings, with dedicated seating and catering.",
  },
  {
    title: "Directory listing",
    body: "Your organisation is listed for exhibitors, so inbound requests arrive with context.",
  },
  {
    title: "Follow-up, not a badge scan",
    body: "Introductions are timed, recorded, and followed up after the floor closes.",
  },
] as const;

export const startupPackage = [
  "Investor-ready pitch session with funds who buy platforms, plants, and pipelines",
  "A dedicated presence in the startup zone — a stage, not a hallway table",
  "Mentor clinics with operators who have taken CGT from signal to dose",
  "Introductions to CDMOs, hospital systems, and strategics",
  "Full delegate access for core team members",
  "Listing in the startup directory circulated to attendees and capital",
] as const;

export const sponsorTiers = [
  {
    title: "Theatre",
    body: "Put your name on a scientific room — cell therapy, editing, delivery, CMC, access, or pipeline.",
  },
  {
    title: "Reception",
    body: "Host the evening room where operators, capital, and hospital systems actually talk.",
  },
  {
    title: "Hosted Buyer lounge",
    body: "Be present where qualified buyers debrief between meetings.",
  },
  {
    title: "Floor identity",
    body: "Own a corridor, a pavilion node, or the matchmaking desk on the CGT floor.",
  },
] as const;

export const faqs = [
  {
    q: "What is Future Biotech Expo?",
    a: "The United States’ dedicated red biotechnology exhibition and conference. Red biotech is the science at the intersection of biology and human health. This edition places cell and gene therapy at the centre of the floor and the programme.",
  },
  {
    q: "Where is it held?",
    a: "Philadelphia — Cellicon Valley. Staging the expo here puts every attendee inside the most concentrated cell and gene therapy ecosystem in the United States.",
  },
  {
    q: "Who should attend?",
    a: "Cell and gene therapy companies, pharma, CDMOs and CROs, hospital systems and AMCs, investors, policymakers, and the suppliers who make the dose — processing, vectors, analytics, cryo, and closed systems.",
  },
  {
    q: "How do I request a delegate pass?",
    a: "Open Participate, choose Delegate pass, and send an enquiry. The team confirms eligibility and issues joining details.",
  },
  {
    q: "How do I exhibit?",
    a: "The centre of the floor is reserved for cell and gene therapy. Request a stand in the CGT Pavilion or on the surrounding red-biotech floor via Participate.",
  },
  {
    q: "What is the Hosted Buyer Program?",
    a: "Qualified scientific and procurement leaders travel with a pre-set diary of meetings. Apply if you buy, partner, or in-license in CGT.",
  },
  {
    q: "Can startups take part?",
    a: "Yes. The Startup Acceleration programme is a stage with mentor clinics and an investor track, filtered for manufacturing-ready CGT. Apply from Participate.",
  },
  {
    q: "Are there speaking opportunities?",
    a: "The conference is built for operators, not spectators. Eighty speakers. No filler keynotes. The line-up is being confirmed — write to speaking@maxpoexhibitions.com.",
  },
  {
    q: "Who organises the expo?",
    a: "Maxpo Exhibitions, with offices in Business Bay, Dubai and St. Petersburg, Florida.",
  },
  {
    q: "How do I stay updated?",
    a: "Subscribe in the footer, or send an enquiry. Speaker announcements and floor updates go to the list first.",
  },
] as const;

export const nav = [
  { to: "/about", label: "About" },
  { to: "/conference", label: "Conference" },
  { to: "/exhibition", label: "Exhibition" },
  { to: "/programmes", label: "Programmes" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/faq", label: "FAQ" },
] as const;
