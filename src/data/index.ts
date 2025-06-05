export interface WorkExperience {
  id: string;
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
  location?: string;
  workType?: string;
}

export interface Project {
  id: string;
  name: string;
  url?: string;
  description: string;
  technologies: string[];
  year: string;
  status: "Ongoing" | "Paused" | string;
  logo?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  username: string;
  url: string;
  icon: string;
}

// Work Experience Data
export const workExperiences: WorkExperience[] = [
  {
    id: "pickup",
    period: "Aug 2024 - Present",
    title: "Full-Stack Developer",
    company: "Pickup ICT Solution",
    companyUrl: "https://pickup.et",
    description:
      "Developed and Delivering eCommerce and delivery applications using Monorepo architecture and RESTful APIs. Contributed to implementing Clean Architecture with SOLID principles in the platform.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind",
      "Node.js",
      "NestJS",
      "Postgres",
      "MongoDB",
      "Redis",
      "Turborepo",
      "GCP",
      "Swagger",
    ],
    location: "Ethiopia, Addis Ababa",
    workType: "Onsite",
  },
  {
    id: "calcom",
    period: "May 2024 - Aug 2024",
    title: "Open-Source Backend Developer",
    company: "Cal.com",
    companyUrl: "https://cal.com",
    description:
      "Worked on issue fixes and feature implementations for the platform and collected bounties. Contributed to tracking changes in organization settings and API privacy enhancements.",
    technologies: ["React", "TypeScript", "Node.js", "REST API"],
    location: "USA",
    workType: "Remote",
  },
];

// Projects Data
export const projects: Project[] = [
  {
    id: "blog-api",
    name: "Blog API",
    url: "https://github.com/TaduJR/BlogAPI",
    description:
      "An API that allows authors to create, manage, and interact with their blog-related content and users. Serves as the backend for a blog platform.",
    technologies: ["REST API", "Node.js", "Express"],
    year: "2024",
    status: "2024",
    logo: "📝",
  },
  {
    id: "data-structures",
    name: "Data Structures and Algorithms",
    url: "https://github.com/TaduJR/Data-Structures-using-CPP",
    description:
      "Implementation of various data structures including Stacks, Linked List, Doubly Linked List, and Queue in C++.",
    technologies: ["C++", "Algorithms", "Data Structures"],
    year: "2023",
    status: "2023",
    logo: "🔍",
  },
];

// Social Links Data
export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "@tadujr",
    url: "https://www.linkedin.com/in/tadujr",
    icon: "linkedin",
  },
  {
    id: "github",
    platform: "Github",
    username: "@TaduJR",
    url: "https://github.com/TaduJR",
    icon: "github",
  },
  {
    id: "website",
    platform: "Website",
    username: "tadujr.com",
    url: "https://tadujr.com",
    icon: "globe",
  },
  {
    id: "email",
    platform: "Email",
    username: "nattysec26@gmail.com",
    url: "mailto:nattysec26@gmail.com",
    icon: "mail",
  },
];

// Skills Data
export const skills: string[] = [
  "TypeScript",
  "React",
  "Tailwind",
  "REST API",
  "NestJS",
  "Node.js",
  "Postgres",
  "MongoDB",
  "Prisma",
  "Redis",
  "Docker",
  "Swagger",
  "Turborepo",
  "GCP",
];

// Personal Info
export const personalInfo = {
  name: "Natnael Yilma (TaduJR)",
  title: "Full-Stack Developer",
  email: "nattysec26@gmail.com",
  address: "Ethiopia, Addis Ababa",
  about:
    "I'm a full-stack developer focused on building clean, efficient applications with modern technologies. I specialize in TypeScript-based stacks and have experience with monorepo architectures and clean code principles.",
};

// Education Data
export interface Education {
  id: string;
  degree: string;
  period: string;
  institution: string;
}
export const educations: Education[] = [
  {
    id: "hilcoe",
    degree: "BSc. Computer Science",
    period: "Oct 2019 - Feb 2023",
    institution: "HiLCoE School of Computer Science and Technology College",
  },
  {
    id: "unity",
    degree: "BSc. Computer Science",
    period: "Feb 2023 - Feb 2025",
    institution: "Unity University",
  },
];
