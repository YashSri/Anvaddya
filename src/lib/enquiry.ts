/** Shared enquiry schema + validation, used by both the form (client) and the API route (server). */

export const roles = ["Principal", "School Management", "Academic Leader", "Teacher", "Other"] as const;
export const classGroups = ["Classes 1–3", "Classes 4–5", "Classes 6–8", "Classes 9–10", "Classes 11–12"] as const;

export type EnquiryInput = {
  name: string;
  email: string;
  phone: string;
  school: string;
  role: string;
  city: string;
  state: string;
  classes: string[];
  message: string;
  consent: boolean;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

export const limits = {
  name: 120,
  email: 200,
  phone: 30,
  school: 200,
  city: 100,
  state: 100,
  message: 3000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

export function normalise(raw: Record<string, unknown>): EnquiryInput {
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const classes = Array.isArray(raw.classes) ? raw.classes.filter((c): c is string => typeof c === "string") : [];
  return {
    name: str(raw.name),
    email: str(raw.email).toLowerCase(),
    phone: str(raw.phone),
    school: str(raw.school),
    role: str(raw.role),
    city: str(raw.city),
    state: str(raw.state),
    classes: classes.filter((c) => (classGroups as readonly string[]).includes(c)),
    message: str(raw.message),
    consent: raw.consent === true || raw.consent === "on" || raw.consent === "true",
  };
}

export function validate(input: EnquiryInput): EnquiryErrors {
  const e: EnquiryErrors = {};
  if (!input.name) e.name = "Please enter your name.";
  if (!input.email) e.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(input.email)) e.email = "Please enter a valid email address.";
  if (input.phone && !PHONE_RE.test(input.phone)) e.phone = "Please enter a valid phone number, or leave it blank.";
  if (!input.school) e.school = "Please enter your school or institution.";
  if (!input.role) e.role = "Please select your role.";
  else if (!(roles as readonly string[]).includes(input.role)) e.role = "Please select a role from the list.";
  if (!input.city) e.city = "Please enter your city.";
  if (!input.state) e.state = "Please enter your state.";
  if (input.classes.length === 0) e.classes = "Please select at least one group of classes.";
  if (!input.consent) e.consent = "Please confirm we may contact you about your enquiry.";

  for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
    if (!e[key] && input[key].length > limits[key]) e[key] = `Please keep this under ${limits[key]} characters.`;
  }
  return e;
}
