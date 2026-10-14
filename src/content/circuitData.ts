export type CircuitModuleId = "curiosity" | "prototype" | "sensor-data" | "evidence" | "capability";

export type CircuitModule = {
  id: CircuitModuleId;
  index: string;
  title: string;
  subtitle: string;
  microLabel: string;
  iconName: "lightbulb" | "cube" | "signal" | "document" | "bars";
  description: string;
  domain: string;
  domainHref: string;
  actionLabel: string;
  actionHref: string;
  // Position in the 760x520 technical grid
  gridCoords: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  // Path points from center to this module [startX, startY, ...midPoints, endX, endY]
  pathD: string;
  pulsePathD: string;
  annotation: string;
  stage: string;
};

export const CIRCUIT_MODULES: CircuitModule[] = [
  {
    id: "curiosity",
    index: "01",
    title: "Curiosity",
    subtitle: "Ask Better Questions",
    microLabel: "INQUIRY & HYPOTHESIS",
    iconName: "lightbulb",
    description:
      "Students move beyond rote memorisation to formulate sharp, testable questions rooted in real-world problems. Curiosity is structured into hypothesis design and systematic inquiry.",
    domain: "Research & Applied Science",
    domainHref: "/technology-and-domains",
    actionLabel: "Explore How We Learn",
    actionHref: "/how-we-learn",
    gridCoords: { x: 38, y: 46, width: 188, height: 86 },
    // From center hub (380, 240) to Curiosity (132, 132)
    pathD: "M 320 220 H 132 V 132",
    pulsePathD: "M 320 220 H 132 V 132",
    annotation: "REF. 01/INQ · BUS-A",
    stage: "Stage 01 · Primary & Middle",
  },
  {
    id: "prototype",
    index: "02",
    title: "Prototype",
    subtitle: "Turn Ideas into Models",
    microLabel: "RAPID FABRICATION",
    iconName: "cube",
    description:
      "Ideas become physical and digital prototypes through hands-on fabrication, embedded circuitry, CAD modeling, and iterative software builds.",
    domain: "Robotics & Engineering",
    domainHref: "/technology-and-domains",
    actionLabel: "View Curriculum Pathways",
    actionHref: "/curriculum",
    gridCoords: { x: 534, y: 46, width: 188, height: 86 },
    // From center hub (380, 220) to Prototype (628, 132)
    pathD: "M 440 220 H 628 V 132",
    pulsePathD: "M 440 220 H 628 V 132",
    annotation: "REF. 02/PRT · BUS-B",
    stage: "Stage 02 · Middle School",
  },
  {
    id: "sensor-data",
    index: "03",
    title: "Sensor Data",
    subtitle: "Explore the Real World",
    microLabel: "TELEMETRY & IOT",
    iconName: "signal",
    description:
      "Students hook up environmental sensors, microcontrollers, and IoT networks to gather empirical data from soil, air, motion, and acoustic feeds.",
    domain: "IoT & Smart Hardware",
    domainHref: "/technology-and-domains",
    actionLabel: "Explore IoT & Sensors",
    actionHref: "/technology-and-domains",
    gridCoords: { x: 38, y: 350, width: 188, height: 86 },
    // From center hub (320, 280) to Sensor Data (132, 350)
    pathD: "M 320 280 H 132 V 350",
    pulsePathD: "M 320 280 H 132 V 350",
    annotation: "REF. 03/DAT · BUS-C",
    stage: "Stage 03 · Secondary",
  },
  {
    id: "evidence",
    index: "04",
    title: "Evidence",
    subtitle: "Show What You've Built",
    microLabel: "VERIFIED PORTFOLIOS",
    iconName: "document",
    description:
      "Every project is documented with technical schematics, code repositories, benchmark tests, and video walkthroughs, culminating in an authenticated student portfolio.",
    domain: "Applied AI & Research",
    domainHref: "/student-outcomes",
    actionLabel: "See Student Outcomes",
    actionHref: "/student-outcomes",
    gridCoords: { x: 534, y: 350, width: 188, height: 86 },
    // From center hub (440, 280) to Evidence (628, 350)
    pathD: "M 440 280 H 628 V 350",
    pulsePathD: "M 440 280 H 628 V 350",
    annotation: "REF. 04/EVD · BUS-D",
    stage: "Stage 04 · Senior Secondary",
  },
  {
    id: "capability",
    index: "05",
    title: "Capability",
    subtitle: "Build Practical Skills",
    microLabel: "SYSTEMS MASTERY",
    iconName: "bars",
    description:
      "Students synthesize computational thinking, engineering rigor, and creative problem-solving into authentic technical capability that shapes college admissions and future careers.",
    domain: "STEM & Real-World Innovation",
    domainHref: "/student-outcomes",
    actionLabel: "Review Graduate Outcomes",
    actionHref: "/student-outcomes",
    gridCoords: { x: 286, y: 388, width: 188, height: 82 },
    // From center hub bottom (380, 296) straight down to Capability (380, 388)
    pathD: "M 380 296 V 388",
    pulsePathD: "M 380 296 V 388",
    annotation: "REF. 05/CAP · FEEDBACK",
    stage: "Culmination · Classes 1–12",
  },
];

export type CircuitDomain = {
  id: string;
  name: string;
  tagline: string;
  href: string;
  description: string;
};

export const CIRCUIT_DOMAINS: CircuitDomain[] = [
  {
    id: "stem",
    name: "STEM",
    tagline: "Applied Sciences",
    href: "/technology-and-domains",
    description: "Hands-on physics, mechanics, circuit analysis, and mathematical modeling.",
  },
  {
    id: "robotics",
    name: "Robotics",
    tagline: "Autonomous Systems",
    href: "/technology-and-domains",
    description: "Kinematics, actuator control, mechanical design, and embedded microprocessors.",
  },
  {
    id: "iot",
    name: "IoT",
    tagline: "Connected Systems",
    href: "/technology-and-domains",
    description: "Microcontroller networking, telemetry streaming, and environmental sensing.",
  },
  {
    id: "ai",
    name: "AI",
    tagline: "Machine Intelligence",
    href: "/technology-and-domains",
    description: "Computer vision, data pipelines, predictive models, and edge inference.",
  },
  {
    id: "research",
    name: "Research",
    tagline: "Empirical Studies",
    href: "/technology-and-domains",
    description: "Scientific methodology, academic documentation, and peer-reviewed rigor.",
  },
];
