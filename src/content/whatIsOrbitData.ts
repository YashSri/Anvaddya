export interface FrameworkItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: "school" | "cube" | "book" | "document" | "growth";
  expandedDetails: {
    focusArea: string;
    keyPoints: string[];
    academicLink: string;
    evidenceType: string;
  };
}

export const FRAMEWORK_ITEMS: FrameworkItem[] = [
  {
    id: "framework-01",
    num: "01",
    title: "School-integrated delivery",
    description: "Learning that works alongside the existing school curriculum.",
    icon: "school",
    expandedDetails: {
      focusArea: "Timetable & Calendar Harmony",
      keyPoints: [
        "Delivered during scheduled co-curricular, laboratory, and activity periods.",
        "Zero added homework burden; builds are completed within class sessions.",
        "Synchronized with school exam calendars and major board exam cycles.",
        "Dedicated on-campus facilitators support regular school faculty."
      ],
      academicLink: "Integrates with existing lab timetables without timetable disruption.",
      evidenceType: "Faculty coordination records & session delivery logs"
    }
  },
  {
    id: "framework-02",
    num: "02",
    title: "Practical, project-led learning",
    description: "Students learn by experimenting, creating, and solving practical problems.",
    icon: "cube",
    expandedDetails: {
      focusArea: "Empirical Engineering & Prototyping",
      keyPoints: [
        "Hands-on hardware kits, breadboards, IoT sensors, and fabrication tools.",
        "Iterative engineering loop: Understand, brainstorm, test rules, and simplify.",
        "Students build measurable physical prototypes rather than simulated models.",
        "Encourages calculated risk-taking and learning from physical breakages."
      ],
      academicLink: "Translates abstract theory into functional mechanical & digital systems.",
      evidenceType: "Physical working prototypes, design logs & git commits"
    }
  },
  {
    id: "framework-03",
    num: "03",
    title: "Connections to relevant academic concepts",
    description: "Hands-on activities connect to relevant academic concepts.",
    icon: "book",
    expandedDetails: {
      focusArea: "See-the-Science Curriculum Linkage",
      keyPoints: [
        "Systematic loop: Predict, build & measure, visualise, derive, and apply.",
        "Direct bridges to NCERT, CBSE, ICSE, and Cambridge science syllabi.",
        "Kinematic equations, electromagnetism, and logic gates verified by physical sensors.",
        "Reinforces classroom theory right before high-stakes board evaluations."
      ],
      academicLink: "Directly maps to Class 6–12 Physics, Chemistry, Math & CS curricula.",
      evidenceType: "Empirical sensor telemetry, data graphs & mathematical derivations"
    }
  },
  {
    id: "framework-04",
    num: "04",
    title: "Portfolio-based progress and evidence",
    description: "Students document progress and demonstrate competencies through tangible work.",
    icon: "document",
    expandedDetails: {
      focusArea: "Verifiable Competency Documentation",
      keyPoints: [
        "Every student maintains a living portfolio of authentic engineering work.",
        "Rubric-based assessment measuring problem-solving, craft, and collaboration.",
        "Public showcase readiness with presentation decks, video demos, and code repositories.",
        "Concrete proof for college admissions, scholarship applications, and competitions."
      ],
      academicLink: "Replaces rote memorisation marks with demonstrable technical proof.",
      evidenceType: "Student project documentation, jury reviews & showcase artifacts"
    }
  },
  {
    id: "framework-05",
    num: "05",
    title: "Age-appropriate progression",
    description: "Learning develops from exploration to research and capstone work.",
    icon: "growth",
    expandedDetails: {
      focusArea: "Multi-Year Developmental Pathway (Classes 1–12)",
      keyPoints: [
        "Wonder (Classes 1–3): Tactile curiosity, balance, and shadow mechanics.",
        "Mechanism & Explore (Classes 4–8): Pulleys, circuits, logic, and systems thinking.",
        "Discover & Synthesise (Classes 9–10): Deep track exploration and portfolio builds.",
        "Research & Capstone (Classes 11–12): Independent investigation, venture prototypes & jury reviews."
      ],
      academicLink: "Scaffolded difficulty matching cognitive stages from primary to senior secondary.",
      evidenceType: "Stage milestone completions & capstone jury evaluation rubrics"
    }
  }
];

export interface OrbitMetric {
  value: number;
  label: string;
  sublabel: string;
}

export const ORBIT_METRICS: OrbitMetric[] = [
  { value: 12, label: "Classes", sublabel: "(1 to 12)" },
  { value: 7, label: "Learning", sublabel: "stages" },
  { value: 5, label: "Technology", sublabel: "tracks" },
  { value: 6, label: "Problem", sublabel: "domains" },
  { value: 4, label: "Signature", sublabel: "formats" }
];
