export const ENQUIRY_TYPES = [
  "pass",
  "exhibit",
  "sponsor",
  "buyer",
  "startup",
  "meeting",
  "contact",
  "newsletter",
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export type Enquiry = {
  id: string;
  type: EnquiryType;
  createdAt: string;
  fields: Record<string, string>;
};

const STORAGE_KEY = "fbe27-enquiries";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadEnquiries(): Enquiry[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Enquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveEnquiry(type: EnquiryType, fields: Record<string, string>): Enquiry {
  const enquiry: Enquiry = {
    id: `FBE-${Date.now().toString(36).toUpperCase()}`,
    type,
    createdAt: new Date().toISOString(),
    fields,
  };
  const next = [enquiry, ...loadEnquiries()].slice(0, 50);
  if (canUseStorage()) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  return enquiry;
}
