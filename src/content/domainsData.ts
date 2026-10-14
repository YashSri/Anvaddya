export interface TechnologyDomain {
  id: string;
  num: string;
  title: string;
  desc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  image: string;
  href: string;
  stageFocus: string;
  keyProjects: string[];
  competencies: string[];
}

export const TECHNOLOGY_DOMAINS: TechnologyDomain[] = [
  {
    id: "drones-aerospace",
    num: "01",
    title: "Drones & Aerospace",
    desc: "Flight, navigation, and aerial innovation.",
    fullDesc: "Students explore aerodynamics, flight dynamics, autonomous waypoint navigation, and micro-UAV assembly, investigating how aerial systems monitor ecosystems and deliver emergency supplies.",
    category: "Aeronautics & Autonomous Systems",
    iconName: "drone",
    image: "/domains/drones-aerospace.jpg",
    href: "/technology-and-domains",
    stageFocus: "Middle & Senior School (Classes 6–12)",
    keyProjects: [
      "Quadcopter PID stabilization tuning",
      "Autonomous search-and-rescue waypoint mission",
      "Airfoil aerodynamic wind tunnel testing"
    ],
    competencies: ["Aerospace Dynamics", "Autonomous Flight", "Telemetry Analysis"]
  },
  {
    id: "3d-fabrication",
    num: "02",
    title: "3D Fabrication",
    desc: "Digital design, modelling, and fabrication.",
    fullDesc: "From parametric CAD to subtractive CNC and additive 3D printing, learners turn digital ideas into physical engineering prototypes, optimizing tolerances and material strength.",
    category: "Rapid Prototyping & Digital Making",
    iconName: "cube",
    image: "/domains/3d-fabrication.jpg",
    href: "/technology-and-domains",
    stageFocus: "All Stages (Classes 1–12)",
    keyProjects: [
      "Parametric compliant mechanism design",
      "Lightweight lattice structure structural testing",
      "Custom ergonomic prosthetic assistive grip"
    ],
    competencies: ["Parametric 3D CAD", "Additive Manufacturing", "Iterative Engineering"]
  },
  {
    id: "agri-tech-food",
    num: "03",
    title: "Agri-Tech & Food",
    desc: "Smart agriculture and food systems.",
    fullDesc: "Deploying automated soil moisture telemetry, precision drip micro-controllers, and closed-loop hydroponics to tackle food security and sustainable water management.",
    category: "Biosystems & Environmental Tech",
    iconName: "plant",
    image: "/domains/agri-tech-food.jpg",
    href: "/technology-and-domains",
    stageFocus: "Primary & Middle School (Classes 4–10)",
    keyProjects: [
      "Automated IoT vertical hydroponic garden",
      "Soil NPK optical reflectance telemetry",
      "Micro-climate automated greenhouse controller"
    ],
    competencies: ["Biosystem Sensors", "Precision Resource Monitoring", "Sustainable Systems"]
  },
  {
    id: "health-tech-life",
    num: "04",
    title: "Health-Tech & Life",
    desc: "Medical technology and biological discovery.",
    fullDesc: "Bridging biology and embedded engineering with wearable vitals monitoring, micro-fluidic diagnostic models, and assistive health devices that improve accessibility.",
    category: "Biomedical & Assistive Engineering",
    iconName: "heart",
    image: "/domains/health-tech-life.jpg",
    href: "/technology-and-domains",
    stageFocus: "Middle & Senior School (Classes 6–12)",
    keyProjects: [
      "Wearable optical pulse oximeter with live telemetry",
      "Digital acoustic stethoscope with signal filtering",
      "Haptic navigation belt for visually impaired students"
    ],
    competencies: ["Biomedical Signal Processing", "Assistive Design", "Diagnostic Instrumentation"]
  },
  {
    id: "climate-energy-water",
    num: "05",
    title: "Climate, Energy & Water",
    desc: "Sustainability and resource innovation.",
    fullDesc: "Investigating dual-axis solar trackers, wind power micro-generators, smart water filtration telemetry, and carbon capture models to build community-scale resilience.",
    category: "CleanTech & Renewable Energy",
    iconName: "flame",
    image: "/domains/climate-energy-water.jpg",
    href: "/technology-and-domains",
    stageFocus: "All Stages (Classes 3–12)",
    keyProjects: [
      "Dual-axis solar tracking microcontroller rig",
      "Low-cost turbidity & TDS water purity telemetry",
      "Miniature wind turbine blade pitch optimization"
    ],
    competencies: ["Clean Energy Conversion", "Resource Optimization", "Environmental Sensing"]
  },
  {
    id: "smart-systems-robotics",
    num: "06",
    title: "Smart Systems",
    desc: "Automation, sensors, and intelligent machines.",
    fullDesc: "Multi-axis robotic manipulators, inverse kinematics, computer-vision pick-and-place lines, and industrial automation protocols tailored for K-12 learning laboratories.",
    category: "Robotics & Mechatronics",
    iconName: "robot",
    image: "/domains/smart-systems-robotics.jpg",
    href: "/technology-and-domains",
    stageFocus: "Middle & Senior School (Classes 5–12)",
    keyProjects: [
      "4-DOF articulated robotic arm with inverse kinematics",
      "Autonomous maze-solving SLAM rover",
      "Vision-guided conveyor sorting station"
    ],
    competencies: ["Mechatronics & Kinematics", "Closed-loop Control", "Sensor Fusion"]
  },
  {
    id: "ai-computing",
    num: "07",
    title: "AI & Computing",
    desc: "Artificial intelligence, software, and computational thinking.",
    fullDesc: "Demystifying machine learning, computer vision models, algorithmic graph traversal, and edge neural processing through hands-on model training and ethical AI audits.",
    category: "Artificial Intelligence & Software",
    iconName: "brain",
    image: "/domains/ai-computing.jpg",
    href: "/technology-and-domains",
    stageFocus: "Middle & Senior School (Classes 6–12)",
    keyProjects: [
      "Real-time edge sign language gesture classifier",
      "Predictive municipal bus arrival algorithm",
      "Ethical bias audit of image recognition datasets"
    ],
    competencies: ["Machine Learning Fundamentals", "Edge Inference", "Algorithmic Thinking"]
  },
  {
    id: "electronics-iot",
    num: "08",
    title: "Electronics & IoT",
    desc: "Connected devices, circuits, and embedded systems.",
    fullDesc: "Custom PCB schematic design, soldering surface-mount electronics, MQTT wireless protocols, and mesh networking across campus telemetry nodes.",
    category: "Embedded Hardware & Telemetry",
    iconName: "chip",
    image: "/domains/electronics-iot.jpg",
    href: "/technology-and-domains",
    stageFocus: "All Stages (Classes 3–12)",
    keyProjects: [
      "Custom surface-mount electronic badge layout",
      "Campus-wide LoRa mesh weather station array",
      "Smart power monitoring smart-plug telemetry"
    ],
    competencies: ["Schematic & PCB Design", "Wireless Telemetry", "Firmware Architecture"]
  },
  {
    id: "space-science",
    num: "09",
    title: "Space Science",
    desc: "Astronomy, orbital systems, and space discovery.",
    fullDesc: "Orbital mechanics simulation, CubeSat structure design, high-altitude weather balloon telemetry launches, and radio astronomy dish receiver assembly.",
    category: "Space Exploration & Orbital Dynamics",
    iconName: "satellite",
    image: "/domains/space-science.jpg",
    href: "/technology-and-domains",
    stageFocus: "Middle & Senior School (Classes 7–12)",
    keyProjects: [
      "1U CubeSat payload chassis with sensor bus",
      "High-altitude atmospheric telemetry payload",
      "Orbital transfer delta-v simulation software"
    ],
    competencies: ["Orbital Mechanics", "Payload Engineering", "Space Telemetry"]
  },
  {
    id: "research-innovation",
    num: "10",
    title: "Research & Innovation",
    desc: "Experimentation, scientific thinking, and original solutions.",
    fullDesc: " rigorous hypothesis testing, reproducible experimental methodology, patent landscape search, and peer-reviewed style whitepaper documentation.",
    category: "Empirical Research & Methodology",
    iconName: "flask",
    image: "/domains/research-innovation.jpg",
    href: "/technology-and-domains",
    stageFocus: "Senior School & Capstone (Classes 9–12)",
    keyProjects: [
      "Year-long Capstone peer-reviewed research project",
      "Statistical regression of student sleep and cognitive test scores",
      "Open-source hardware patent documentation portfolio"
    ],
    competencies: ["Hypothesis-Driven Method", "Data Verification", "Technical Documentation"]
  }
];

export interface ImpactStat {
  num: number;
  label: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  { num: 12, label: "Classes, from Class 1 to Class 12" },
  { num: 7, label: "Age-appropriate learning stages" },
  { num: 5, label: "Technology tracks" },
  { num: 6, label: "Real-world problem domains" },
  { num: 4, label: "Signature formats across the year" }
];
