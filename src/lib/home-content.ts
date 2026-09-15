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
      name: "UzzUTV",
      description:
        "An all-in-one streaming platform for movies, TV, and anime with discovery, watchlists, reviews, profiles, and Watch Parties.",
      technologies: ["Django", "Python", "Bootstrap", "JavaScript", "TMDB API", "AniList", "Supabase", "SQLite"],
      githubUrl: "https://github.com/ujjwaluzu/uzzutv",
      category: "Streaming platform",
      theme: "cinema",
    },
    {
      name: "RepoTeam",
      description:
        "A collaborative project-management platform for teams to organize projects, track issues, and work together.",
      technologies: ["Django", "Python", "SQLite", "Django ORM", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ujjwaluzu/RepoTeam-MVP",
      category: "MVP",
      theme: "collab",
    },
    {
      name: "Commerce",
      description:
        "An eBay-style auction platform with listings, bidding, watchlists, comments, and category browsing.",
      technologies: ["Python", "Django", "HTML", "CSS", "SQLite", "Django ORM"],
      githubUrl: "https://github.com/ujjwaluzu/cs50w-commerce",
      category: "CS50W project",
      theme: "auction",
    },
    {
      name: "Wiki",
      description:
        "A Wikipedia-inspired encyclopedia built with Django, featuring searchable Markdown-based entries and editing.",
      technologies: ["Python", "Django", "HTML", "CSS", "Markdown", "markdown2"],
      githubUrl: "https://github.com/ujjwaluzu/cs50w-wiki",
      category: "CS50W project",
      theme: "wiki",
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
