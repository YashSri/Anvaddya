import type { IconName } from "@/components/Icon";

export const portfolioItems = [
  "Project briefs and problem statements",
  "Design sketches, system maps, and planning notes",
  "Prototype photographs or demonstrations",
  "Measurements, graphs, test results, and iterations",
  "Code, CAD files, or other artefacts where appropriate",
  "Research summaries and source notes",
  "Presentations, pitches, and oral-defence records",
  "Reflection on failures, trade-offs, and next steps",
];

export const competencies: { name: string; evidence: string; icon: IconName }[] = [
  { name: "Communication and expression", evidence: "Pitches, presentations, and vivas", icon: "mic" },
  { name: "Logic and critical thinking", evidence: "Error analysis and reasoning", icon: "logic" },
  { name: "Systems thinking", evidence: "System maps and trade-offs", icon: "network" },
  { name: "Collaboration and leadership", evidence: "Team roles and ownership", icon: "people" },
  { name: "Creativity and ideation", evidence: "Reframing problems and generating options", icon: "bulb" },
  { name: "Technical making", evidence: "Working, tested builds", icon: "wrench" },
];

/** What the programme is designed to help students develop — aspirations, not guarantees. */
export const graduateProfile = [
  { name: "Open thinker", body: "Curious, adaptable, and not boxed into one path." },
  { name: "Strong fundamentals", body: "Concepts understood physically, not only memorised." },
  { name: "Capable maker", body: "Able to build working prototypes from first principles." },
  { name: "Systems thinker", body: "Understands constraints, trade-offs, and failure points." },
  { name: "Clear communicator", body: "Can explain methods, data, and failures to a panel." },
  { name: "Evidence-led chooser", body: "Reflects on documented work when making academic choices." },
];

export const evidenceHighlights = [
  "Working prototypes",
  "Project documentation",
  "Research",
  "Presentations",
  "Team contributions",
  "Reflections on testing and failure",
];
