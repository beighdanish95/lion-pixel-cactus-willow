import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/input";
import { saveEnquiry, type EnquiryType } from "@/lib/enquiries";
import { cn } from "@/lib/utils";

export type Intent = "pass" | "exhibit" | "sponsor" | "buyer" | "startup" | "meeting" | "contact";

const copy: Record<
  Intent,
  { title: string; lede: string; submit: string; extra?: { name: string; label: string; options: string[] } }
> = {
  pass: {
    title: "Request a delegate pass",
    lede: "Two days of plenaries, theatres, and the exhibition floor.",
    submit: "Request a pass",
    extra: {
      name: "passType",
      label: "Pass type",
      options: ["Full expo pass", "Conference + floor", "Exhibition floor only"],
    },
  },
  exhibit: {
    title: "Book a stand",
    lede: "CGT Pavilion and the surrounding red-biotech floor.",
    submit: "Send exhibit enquiry",
    extra: {
      name: "stand",
      label: "Stand interest",
      options: ["CGT Pavilion", "Red-biotech floor", "Startup zone", "Not sure yet"],
    },
  },
  sponsor: {
    title: "Sponsorship enquiry",
    lede: "Theatres, receptions, and the Hosted Buyer lounge.",
    submit: "Request sponsor packs",
    extra: {
      name: "interest",
      label: "Interest",
      options: ["Theatre", "Reception", "Hosted Buyer lounge", "Floor identity", "Package overview"],
    },
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
        "CDMO capacity buyer",
      ],
    },
  },
  startup: {
    title: "Startup Acceleration",
    lede: "A stage, not a hallway — manufacturing-ready CGT as the filter.",
    submit: "Apply to the programme",
    extra: {
      name: "stage",
      label: "Company stage",
      options: ["Seed", "Series A", "Series B", "Later / platform"],
    },
  },
  meeting: {
    title: "Book a meeting",
    lede: "Tell us what you need. The team will come back with a time.",
    submit: "Request a meeting",
    extra: {
      name: "topic",
      label: "Topic",
      options: ["Exhibiting", "Sponsoring", "Delegate pass", "Hosted Buyer", "Speaking", "Partnership"],
    },
  },
  contact: {
    title: "Write to the organisers",
    lede: "Maxpo Exhibitions. We read every note.",
    submit: "Send message",
  },
};

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? <p className="mt-1 text-sm text-primary">{error}</p> : null}
    </div>
  );
}

export function EnquiryForm({
  intent,
  compact = false,
  onDone,
}: {
  intent: Intent;
  compact?: boolean;
  onDone?: () => void;
}) {
  const meta = copy[intent];
  const [values, setValues] = useState<Record<string, string>>({
    name: "",
    email: "",
    organisation: "",
    title: "",
    country: "",
    message: "",
    extra: meta.extra?.options[0] ?? "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<{ id: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const extraName = meta.extra?.name ?? "extra";
  const prefix = `fbe-${intent}`;

  const fields = useMemo(
    () => [
      { key: "name", label: "Full name", type: "text", auto: "name" },
      { key: "email", label: "Work email", type: "email", auto: "email" },
      { key: "organisation", label: "Organisation", type: "text", auto: "organization" },
      { key: "title", label: "Job title", type: "text", auto: "organization-title" },
      { key: "country", label: "Country", type: "text", auto: "country-name" },
    ],
    [],
  );

  function validate() {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "A valid work email is required.";
    }
    if (!values.organisation.trim()) next.organisation = "Organisation is required.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setBusy(true);
    const payload: Record<string, string> = {
      name: values.name.trim(),
      email: values.email.trim(),
      organisation: values.organisation.trim(),
      title: values.title.trim(),
      country: values.country.trim(),
      message: values.message.trim(),
    };
    if (meta.extra) payload[extraName] = values.extra;
    const enquiry = saveEnquiry(intent as EnquiryType, payload);
    setSent({ id: enquiry.id });
    setBusy(false);
    toast.success("Enquiry received", { description: `Reference ${enquiry.id}` });
    onDone?.();
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-paper px-6 py-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Received</p>
        <h3 className="font-display mt-2 text-3xl text-ink">We’ll be in touch.</h3>
        <p className="mt-3 max-w-md text-muted">
          Your enquiry is logged under reference{" "}
          <span className="font-semibold text-ink">{sent.id}</span>. The Maxpo team reviews every
          request.
        </p>
        <Button
          type="button"
          variant="ghost"
          className="mt-6"
          onClick={() => {
            setSent(null);
            setValues({
              name: "",
              email: "",
              organisation: "",
              title: "",
              country: "",
              message: "",
              extra: meta.extra?.options[0] ?? "",
            });
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", compact ? "" : "sm:grid-cols-2")}>
      <div className={cn(compact ? "" : "sm:col-span-2")}>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Enquire</p>
        <h3 className="font-display mt-1 text-3xl text-ink">{meta.title}</h3>
        <p className="mt-2 text-muted">{meta.lede}</p>
      </div>
      {fields.map((f) => {
        const id = `${prefix}-${f.key}`;
        return (
          <Field key={f.key} id={id} label={f.label} error={errors[f.key]}>
            <Input
              id={id}
              name={f.key}
              type={f.type}
              autoComplete={f.auto}
              value={values[f.key]}
              onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
              required={f.key === "name" || f.key === "email" || f.key === "organisation"}
            />
          </Field>
        );
      })}
      {meta.extra ? (
        <Field id={`${prefix}-extra`} label={meta.extra.label}>
          <Select
            id={`${prefix}-extra`}
            name={extraName}
            value={values.extra}
            onChange={(e) => setValues((v) => ({ ...v, extra: e.target.value }))}
          >
            {meta.extra.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </Field>
      ) : null}
      <div className={cn(compact ? "" : "sm:col-span-2")}>
        <Field id={`${prefix}-message`} label="Message (optional)">
          <Textarea
            id={`${prefix}-message`}
            name="message"
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            placeholder="What should the team know?"
          />
        </Field>
      </div>
      <div className={cn(compact ? "" : "sm:col-span-2")}>
        <Button type="submit" variant="primary" size="lg" disabled={busy}>
          {meta.submit}
        </Button>
      </div>
    </form>
  );
}
