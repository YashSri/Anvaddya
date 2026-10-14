export type Stage = {
  id: string;
  name: string;
  classes: string;
  /** Short label for compact UI (tabs, timeline). */
  short: string;
  focus: string;
  summary: string;
  involves: string[];
  senior: boolean;
  /** Engagement rhythm, described as a principle — no hour counts are published. */
  rhythm?: string;
};

export const stages: Stage[] = [
  {
    id: "wonder",
    name: "Wonder",
    classes: "Classes 1–3",
    short: "1–3",
    focus: "Tactile curiosity",
    summary: "Discover patterns and scientific ideas through tactile exploration.",
    involves: ["Levers and balance", "Shadow mechanics", "Physical exploration", "Patterns in nature"],
    senior: false,
  },
  {
    id: "mechanism",
    name: "Mechanism",
    classes: "Classes 4–5",
    short: "4–5",
    focus: "First making",
    summary: "Understand simple mechanisms, circuits, and logic by making.",
    involves: ["Pulleys", "Simple circuits", "Mechanical linkages", "Visual block logic"],
    senior: false,
  },
  {
    id: "explore",
    name: "Explore",
    classes: "Classes 6–8",
    short: "6–8",
    focus: "Structured thinking",
    summary:
      "Develop systems thinking through software concepts, urban systems, AI ethics, and structured problem-solving.",
    involves: [
      "Databases and APIs explained through everyday analogies",
      "Urban-system mapping",
      "AI ethics and bias discussions",
      "Early venture blueprints",
    ],
    senior: false,
  },
  {
    id: "discover",
    name: "Discover",
    classes: "Class 9",
    short: "9",
    focus: "Domain exploration",
    summary: "Explore technology domains and begin building a portfolio of practical work.",
    involves: ["Breadboarding", "Robotics", "IoT", "Technical fundamentals", "Initial portfolio evidence"],
    senior: true,
    rhythm: "Deeper, regular weekly engagement",
  },
  {
    id: "sustain",
    name: "Sustain",
    classes: "Class 10",
    short: "10",
    focus: "Reflection and stream choice",
    summary: "Maintain applied learning while protecting board preparation and reflecting on stream choices.",
    involves: [
      "Applied learning in a lighter schedule",
      "Board-aware delivery",
      "A review of accumulated project work",
    ],
    senior: true,
    rhythm: "Lighter, fortnightly, board-aware rhythm",
  },
  {
    id: "specialise",
    name: "Specialise",
    classes: "Class 11",
    short: "11",
    focus: "Technical depth",
    summary: "Develop deeper technical capability and undertake research-led projects.",
    involves: ["Domain focus", "Field sensors", "Machine-learning pipelines", "Original research work"],
    senior: true,
    rhythm: "Deeper, regular weekly engagement",
  },
  {
    id: "launch",
    name: "Launch",
    classes: "Class 12",
    short: "12",
    focus: "Capstone and communication",
    summary: "Complete a capstone, communicate findings, and assemble a documented portfolio.",
    involves: [
      "A domain capstone",
      "Expert review",
      "Presentation or viva",
      "A documented future-pathway portfolio",
    ],
    senior: true,
    rhythm: "Lighter, fortnightly, board-aware rhythm",
  },
];

/** Middle-school (Explore) detail — illustrates how ideas are introduced without screens or coding gatekeepers. */
export const exploreHighlights = [
  {
    title: "Software without code",
    body: "Databases become filing cabinets and APIs become waiters taking orders — students design a working app on paper before touching a screen.",
  },
  {
    title: "Urban systems mapping",
    body: "Students plan a neighbourhood from scratch, thinking through flows of people, zones, and utility networks.",
  },
  {
    title: "AI ethics and bias",
    body: "What happens when training data is limited? Students examine errors, made-up answers, and fairness through structured debate.",
  },
  {
    title: "Venture blueprint",
    body: "Teams frame a problem, sketch how a solution would work, and think through its impact — then explain their thinking out loud.",
  },
];
