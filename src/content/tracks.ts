import type { IconName } from "@/components/Icon";

export type ExplorerItem = {
  id: string;
  title: string;
  icon: IconName;
  short: string;
  detail: string;
  /** Illustrative only — not completed student projects. Replace when real projects are approved. */
  examples: string[];
};

export const tracks: ExplorerItem[] = [
  {
    id: "robotics",
    title: "Robotics",
    icon: "robot",
    short: "Motors, control systems, and hardware integration.",
    detail: "Build and integrate mechanisms, motors, drivers, and control systems.",
    examples: [
      "A rover that follows a marked path and corrects its own drift",
      "A small arm that sorts objects by colour",
    ],
  },
  {
    id: "iot",
    title: "IoT & Telemetry",
    icon: "signal",
    short: "Sensors, connected devices, data pipelines, and dashboards.",
    detail:
      "Collect information from sensors, move data through connected systems, and use dashboards to interpret it.",
    examples: [
      "A classroom air-quality monitor with a live dashboard",
      "A network of soil-moisture sensors that logs readings over a week",
    ],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    icon: "spark",
    short: "No-code exploration, data reasoning, Python, and responsible AI.",
    detail:
      "Explore patterns in data, begin with no-code models, and progress toward Python and responsible AI practices.",
    examples: [
      "An image classifier trained with a no-code tool, then checked for bias",
      "Analysing a term of school energy-use data in Python",
    ],
  },
  {
    id: "drones",
    title: "Drones & Aerospace",
    icon: "drone",
    short: "Flight simulation, testing, and telemetry.",
    detail: "Explore flight principles, simulation, thrust testing, and drone-related data.",
    examples: [
      "A thrust-stand test comparing two propeller designs",
      "A simulated survey flight plan over a crop field",
    ],
  },
  {
    id: "fabrication",
    title: "3D Fabrication",
    icon: "cube",
    short: "CAD, print preparation, and functional prototypes.",
    detail: "Turn digital designs into physical objects using CAD and 3D-printing workflows.",
    examples: [
      "An assistive grip designed for someone who finds a spoon hard to hold",
      "Iterating a protective enclosure for a sensor kit",
    ],
  },
];

export const domains: ExplorerItem[] = [
  {
    id: "agri",
    title: "Agri-Tech & Food",
    icon: "leaf",
    short: "Crop monitoring, farm sensing, automation, and post-harvest systems.",
    detail: "Crop monitoring, farm sensing, automation, and post-harvest systems.",
    examples: [
      "A drip-irrigation trigger driven by soil-moisture readings",
      "A temperature logger for stored produce",
    ],
  },
  {
    id: "health",
    title: "Health-Tech & Life",
    icon: "pulse",
    short: "Diagnostics concepts, accessibility devices, telemetry, and responsible data use.",
    detail: "Diagnostics concepts, accessibility devices, telemetry, and responsible data use.",
    examples: [
      "A posture reminder that nudges after long periods of sitting",
      "Tactile signage designed with visually impaired users in mind",
    ],
  },
  {
    id: "climate",
    title: "Climate, Energy & Water",
    icon: "drop",
    short: "Solar systems, water monitoring, energy audits, and conservation.",
    detail: "Solar systems, water monitoring, energy audits, and conservation.",
    examples: [
      "Tracking a school solar panel's output across seasons",
      "A water-tank level monitor that flags waste",
    ],
  },
  {
    id: "cities",
    title: "Smart Cities & Mobility",
    icon: "city",
    short: "Traffic, public infrastructure, sensor telemetry, and mapping.",
    detail: "Traffic, public infrastructure, sensor telemetry, and mapping.",
    examples: [
      "Counting traffic flow at the school gate during drop-off",
      "Mapping streetlight coverage around a neighbourhood",
    ],
  },
  {
    id: "fintech",
    title: "FinTech & Enterprise",
    icon: "chart",
    short: "Financial inclusion, digital risk, analytics, and enterprise systems.",
    detail: "Financial inclusion, digital risk, analytics, and enterprise systems.",
    examples: [
      "A simple sales-and-savings tracker designed for a local shop",
      "Investigating how common digital-payment scams work and how to spot them",
    ],
  },
  {
    id: "creative",
    title: "Creative Tech & Design",
    icon: "palette",
    short: "Interactive media, 3D spatial thinking, and communication design.",
    detail: "Interactive media, 3D spatial thinking, and communication design.",
    examples: [
      "An interactive exhibit that explains a science concept to younger students",
      "A 3D model of a redesigned public space",
    ],
  },
];
