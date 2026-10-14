import type { IconName } from "@/components/Icon";

export const challenges = [
  {
    title: "Theory without enough application",
    body: "Connect school concepts to observable, measurable systems.",
  },
  {
    title: "Limited real-world exposure",
    body: "Bring practical challenges and practitioner perspectives closer to students.",
  },
  {
    title: "Short-term activities without continuity",
    body: "Build a year-round pathway instead of isolated workshops.",
  },
  {
    title: "Choices made without enough evidence",
    body: "Help students reflect on documented work, interests, and demonstrated engagement.",
  },
];

export const orbitPillars = [
  "School-integrated delivery",
  "Practical, project-led learning",
  "Connections to relevant academic concepts",
  "Portfolio-based progress and competency evidence",
  "Age-appropriate progression from exploration to research and capstone work",
];

export const partnershipIncludes = [
  "A structured, grade-appropriate learning pathway",
  "Dedicated facilitators supporting regular delivery",
  "Coordination with school leadership and timetable teams",
  "Curriculum resources and preparation routines",
  "Connections between practical work and relevant academic concepts",
  "Student progress documentation and portfolio-based assessment",
  "Opportunities for practitioner sessions and showcase events",
];

export const academicPriorities: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Co-curricular timing",
    body: "Designed to run in suitable co-curricular, laboratory, and activity periods.",
    icon: "calendar",
  },
  {
    title: "Board-aware rhythm",
    body: "Lighter engagement for board classes, with pauses during major board-exam periods as agreed with the school.",
    icon: "shield",
  },
  {
    title: "Curriculum connections",
    body: "Relevant builds are designed to connect with concepts students meet in class.",
    icon: "link",
  },
  {
    title: "No added homework",
    body: "Work is designed to be completed during scheduled sessions, without an after-school burden.",
    icon: "clock",
  },
];

export const ecosystem: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Students",
    body: "Build, research, communicate, and reflect on their choices with evidence.",
    icon: "cap",
  },
  {
    title: "Teacher champions",
    body: "Collaborate on practical sessions and help link builds to classroom chapters.",
    icon: "board",
  },
  {
    title: "Parents",
    body: "See their child's work first-hand at orientations, reviews, and showcases.",
    icon: "people",
  },
  {
    title: "Practitioners",
    body: "People working in technical and applied fields who share real challenges and give feedback.",
    icon: "briefcase",
  },
];

export const deliveryModel = [
  {
    title: "Dedicated facilitators",
    body: "Facilitators support regular, scheduled delivery on campus rather than occasional visits.",
  },
  {
    title: "Working with school teams",
    body: "Facilitators coordinate with timetable teams, academic heads, and teacher champions.",
  },
  {
    title: "Consistent preparation",
    body: "Shared curriculum resources, regular preparation routines, and structured progress records.",
  },
  {
    title: "Planned milestones",
    body: "Learning milestones across the year keep delivery steady and visible to the school.",
  },
];

/** How a partnership conversation begins. Implementation details are finalised with each school. */
export const partnershipSteps = [
  {
    title: "Share your context",
    body: "Tell us about your school, the classes you have in mind, and what you would like to explore.",
  },
  {
    title: "A conversation about fit",
    body: "The Anvaddya team follows up to discuss programme fit, academic scheduling, and student age groups.",
  },
  {
    title: "A plan shaped around your school",
    body: "Timetabling, spaces, and milestones are agreed with your leadership team rather than assumed.",
  },
];
