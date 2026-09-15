export const homeContent = {
  identity: {
    name: "Ujjwal Baunthiyal",
    brand: "ujjwaluzu",
    monogram: "U",
  },
  hero: {
    eyebrow: "WEB DEVELOPER",
    intro: "Hey, I'm",
    firstName: "UJJWAL",
    lastName: "BAUNTHIYAL",
    tagline: "I like to build things for the web.",
    description:
      "Web Developer Intern at IntelligenceX, exploring ideas, building products, and turning concepts into real experiences.",
    status: "Currently building on the web",
  },
  tools: [
    { name: "JavaScript", icon: "javascript.png", alt: "JavaScript logo" },
    { name: "TypeScript", icon: "typescript.png", alt: "TypeScript logo" },
    { name: "React", icon: "react.png", alt: "React logo" },
    { name: "Next.js", icon: "nextjs.png", alt: "Next.js logo" },
    { name: "Tailwind CSS", icon: "tailwindcss.png", alt: "Tailwind CSS logo" },
    { name: "Python", icon: "python.png", alt: "Python logo" },
    { name: "Django", icon: "django.png", alt: "Django logo" },
    { name: "MongoDB", icon: "mongodb.png", alt: "MongoDB logo" },
  ],
  projects: [
    {
      name: "RepoTeam",
      description: "Find your team. Build together. A platform for connecting collaborators and building projects.",
      tags: ["Django", "Python", "SQLite"],
      accent: "blue",
      mark: "••",
    },
    {
      name: "AniCluster",
      description: "A platform for anime communities to connect, share, and discover.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      accent: "purple",
      mark: "アニメ",
    },
    {
      name: "SkillSync",
      description: "A platform to match learners with the right mentors.",
      tags: ["Next.js", "MongoDB", "Tailwind"],
      accent: "sky",
      mark: "sync",
    },
    {
      name: "Uzzutv",
      description: "A modern streaming platform for entertainment lovers.",
      tags: ["Next.js", "MongoDB", "Tailwind"],
      accent: "charcoal",
      mark: "more than\nentertainment.",
    },
  ],
  about: {
    eyebrow: "ABOUT ME",
    title: "A curious builder who loves the web.",
    titleLines: ["A curious builder", "who loves the", "web."],
    description:
      "I'm Ujjwal, a web developer who enjoys exploring technologies, building useful experiences, and turning ideas into products. I'm always learning, experimenting, and looking for what's next.",
    labels: ["Ideas", "Projects", "Repositories"],
    note: ["Development", "Design", "Problem Solving", "Good Coffee", "And", "A Brighter Tomorrow"],
  },
  experience: {
    eyebrow: "EXPERIENCE",
    role: "Web Developer Intern",
    company: "IntelligenceX",
    period: "2026 - present",
    description:
      "Building and maintaining web applications, exploring modern technologies, and contributing to impactful products.",
    quote: "Build with curiosity. Ship with purpose.",
  },
  contact: {
    eyebrow: "LET'S CONNECT",
    title: ["LET'S BUILD", "SOMETHING", "COOL TOGETHER."],
    description: "Ideas, opportunities, or just a friendly hello. My inbox is always open.",
    socials: ["GitHub", "LinkedIn", "X", "Instagram", "Email"],
  },
} as const;
