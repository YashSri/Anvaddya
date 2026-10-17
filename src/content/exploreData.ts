export interface ExploreCardItem {
  id: string;
  num: string;
  title: string;
  description: string;
  href: string;
  icon: "compass" | "network" | "robot" | "bulb" | "folder" | "scale" | "cap" | "calendar";
  image: string;
  accentBorder?: boolean;
}

export const EXPLORE_CARDS: ExploreCardItem[] = [
  {
    id: "programme",
    num: "01",
    title: "The Programme",
    description: "What Orbit is, how it's delivered, and what it is not.",
    href: "/programme",
    icon: "compass",
    image: "/explore/the-programme.jpg",
    accentBorder: true,
  },
  {
    id: "curriculum",
    num: "02",
    title: "Curriculum",
    description: "Seven stages from tactile curiosity in Class 1 to a capstone in Class 12.",
    href: "/curriculum",
    icon: "network",
    image: "/explore/curriculum.jpg",
  },
  {
    id: "technology",
    num: "03",
    title: "Technology & Domains",
    description: "Five technology tracks applied across six real-world problem areas.",
    href: "/technology-and-domains",
    icon: "robot",
    image: "/explore/technology.jpg",
  },
  {
    id: "howWeLearn",
    num: "04",
    title: "How We Learn",
    description: "See-the-Science and the FORGE problem-solving loop.",
    href: "/how-we-learn",
    icon: "bulb",
    image: "/explore/how-we-learn.jpg",
  },
  {
    id: "outcomes",
    num: "05",
    title: "Student Outcomes",
    description: "Portfolio-based evidence and six competencies.",
    href: "/student-outcomes",
    icon: "folder",
    image: "/explore/outcomes.jpg",
  },
  {
    id: "streamChoice",
    num: "06",
    title: "Stream Choice & Pathways",
    description: "Using two years of documented work to reflect on subject choices.",
    href: "/stream-choice",
    icon: "scale",
    image: "/explore/pathways.jpg",
  },
  {
    id: "forSchools",
    num: "07",
    title: "For Schools",
    description: "What a partnership includes and how it respects academic priorities.",
    href: "/for-schools",
    icon: "cap",
    image: "/explore/for-schools.jpg",
  },
  {
    id: "events",
    num: "08",
    title: "Events & Experiences",
    description: "Camps, the January Expo, and monthly practitioner masterclasses.",
    href: "/events",
    icon: "calendar",
    image: "/explore/events.jpg",
  },
];
