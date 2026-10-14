import type { IconName } from "@/components/Icon";

export type PageKey =
  | "programme"
  | "curriculum"
  | "technology"
  | "howWeLearn"
  | "outcomes"
  | "streamChoice"
  | "forSchools"
  | "events"
  | "faq"
  | "contact"
  | "privacy"
  | "terms";

export type PageInfo = { title: string; href: string; summary: string; icon: IconName };

/** Single registry of public pages — drives home cards, related links, the 404 page, and sitemap.xml. */
export const pages: Record<PageKey, PageInfo> = {
  programme: {
    title: "The Programme",
    href: "/programme",
    summary: "What Orbit is, how it's delivered, and what it is not.",
    icon: "compass",
  },
  curriculum: {
    title: "Curriculum",
    href: "/curriculum",
    summary: "Seven stages from tactile curiosity in Class 1 to a capstone in Class 12.",
    icon: "network",
  },
  technology: {
    title: "Technology & Domains",
    href: "/technology-and-domains",
    summary: "Five technology tracks applied across six real-world problem areas.",
    icon: "robot",
  },
  howWeLearn: {
    title: "How We Learn",
    href: "/how-we-learn",
    summary: "See-the-Science and the FORGE problem-solving loop.",
    icon: "bulb",
  },
  outcomes: {
    title: "Student Outcomes",
    href: "/student-outcomes",
    summary: "Portfolio-based evidence and six competencies.",
    icon: "folder",
  },
  streamChoice: {
    title: "Stream Choice & Pathways",
    href: "/stream-choice",
    summary: "Using two years of documented work to reflect on subject choices.",
    icon: "scale",
  },
  forSchools: {
    title: "For Schools",
    href: "/for-schools",
    summary: "What a partnership includes and how it respects academic priorities.",
    icon: "cap",
  },
  events: {
    title: "Events & Experiences",
    href: "/events",
    summary: "Camps, the January Expo, and monthly practitioner masterclasses.",
    icon: "calendar",
  },
  faq: {
    title: "FAQ",
    href: "/faq",
    summary: "Straight answers to common questions from schools and parents.",
    icon: "bulb",
  },
  contact: {
    title: "Partner With Us",
    href: "/contact",
    summary: "Start a conversation about bringing Orbit to your school.",
    icon: "mail",
  },
  privacy: {
    title: "Privacy Policy",
    href: "/privacy",
    summary: "How enquiry information is collected and used.",
    icon: "shield",
  },
  terms: {
    title: "Terms of Use",
    href: "/terms",
    summary: "Terms for using this website.",
    icon: "scale",
  },
};

/** The eight programme pages shown as cards on the home page. */
export const explorePages: PageKey[] = [
  "programme",
  "curriculum",
  "technology",
  "howWeLearn",
  "outcomes",
  "streamChoice",
  "forSchools",
  "events",
];

/** "Keep exploring" links shown near the end of each page. */
export const related: Partial<Record<PageKey, PageKey[]>> = {
  programme: ["curriculum", "howWeLearn", "forSchools"],
  curriculum: ["technology", "streamChoice", "outcomes"],
  technology: ["howWeLearn", "curriculum", "events"],
  howWeLearn: ["outcomes", "technology", "forSchools"],
  outcomes: ["streamChoice", "howWeLearn", "events"],
  streamChoice: ["outcomes", "curriculum", "faq"],
  forSchools: ["programme", "events", "faq"],
  events: ["forSchools", "outcomes", "programme"],
  faq: ["programme", "forSchools", "curriculum"],
};
