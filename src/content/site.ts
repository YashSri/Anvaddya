export const site = {
  programme: "Anvaddya Orbit",
  company: "Anvaddya",
  legalName: "Anvaddya Education Pvt. Ltd.",
  tagline: "From Curiosity to Capability. From Capability to Evidence.",
  description:
    "Anvaddya Orbit helps schools bring applied STEM, robotics, IoT, AI, research, and real-world problem-solving into a connected student learning journey.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.anvaddya.com").replace(/\/$/, ""),
  contact: {
    email: "contact@anvaddya.com",
    headquarters: "Greater Noida, Uttar Pradesh",
  },
} as const;

export const cta = {
  primary: { label: "Discuss a School Partnership", href: "/contact" },
  programme: { label: "Explore the Programme", href: "/programme" },
  journey: { label: "See the Learning Journey", href: "/curriculum" },
  domains: { label: "Discover the Domains", href: "/technology-and-domains" },
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

/** Primary navigation. Every page from the brief is reachable; related pages are grouped. */
export const navigation: NavItem[] = [
  {
    label: "Programme",
    href: "/programme",
    children: [
      { label: "The Programme", href: "/programme", description: "A year-round, school-embedded learning layer" },
      { label: "Curriculum", href: "/curriculum", description: "The Classes 1–12 journey, stage by stage" },
      { label: "How We Learn", href: "/how-we-learn", description: "See-the-Science and the FORGE loop" },
      { label: "Stream Choice & Pathways", href: "/stream-choice", description: "Using evidence to reflect on choices" },
    ],
  },
  { label: "Technology & Domains", href: "/technology-and-domains" },
  { label: "Student Outcomes", href: "/student-outcomes" },
  { label: "For Schools", href: "/for-schools" },
  { label: "Events", href: "/events" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Programme",
    links: [
      { label: "The Programme", href: "/programme" },
      { label: "Curriculum", href: "/curriculum" },
      { label: "Technology & Domains", href: "/technology-and-domains" },
      { label: "How We Learn", href: "/how-we-learn" },
    ],
  },
  {
    title: "Students & Schools",
    links: [
      { label: "Student Outcomes", href: "/student-outcomes" },
      { label: "Stream Choice & Pathways", href: "/stream-choice" },
      { label: "For Schools", href: "/for-schools" },
      { label: "Events & Experiences", href: "/events" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Partner With Us", href: "/contact" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/privacy#cookies" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];
