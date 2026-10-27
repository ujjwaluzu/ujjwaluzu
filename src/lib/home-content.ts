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
    { name: "JavaScript", icon: "javascript.webp", alt: "JavaScript logo" },
    { name: "TypeScript", icon: "typescript.webp", alt: "TypeScript logo" },
    { name: "React", icon: "react.webp", alt: "React logo" },
    { name: "Next.js", icon: "nextjs.webp", alt: "Next.js logo" },
    { name: "Tailwind CSS", icon: "tailwindcss.webp", alt: "Tailwind CSS logo" },
    { name: "Python", icon: "python.webp", alt: "Python logo" },
    { name: "Django", icon: "django.webp", alt: "Django logo" },
    { name: "MongoDB", icon: "mongodb.webp", alt: "MongoDB logo" },
  ],
  projects: [
    {
      slug: "uzzutv",
      name: "UzzUTV",
      description:
        "An all-in-one streaming platform for movies, TV, and anime with discovery, watchlists, reviews, profiles, and Watch Parties.",
      technologies: ["Django", "Python", "Bootstrap", "JavaScript", "TMDB API", "AniList", "Supabase", "SQLite"],
      githubUrl: "https://github.com/ujjwaluzu/uzzutv",
      category: "Streaming platform",
      theme: "cinema",
      image: "uzzutv.webp",
    },
    {
      slug: "crewlab",
      name: "CrewLab",
      description:
        "A collaboration workspace where builders find projects that fit their skills, form a crew, and work together.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Row-level security"],
      githubUrl: "https://github.com/ujjwaluzu/appCrewLab",
      category: "Collaboration workspace",
      theme: "collab",
      image: "crewlab-homepage.png",
      imageSize: { width: 1534, height: 717 },
    },
    {
      slug: "commerce",
      name: "Commerce",
      description:
        "An eBay-style auction platform with listings, bidding, watchlists, comments, and category browsing.",
      technologies: ["Python", "Django", "HTML", "CSS", "SQLite", "Django ORM"],
      githubUrl: "https://github.com/ujjwaluzu/cs50w-commerce",
      category: "CS50W project",
      theme: "auction",
      image: "auction.webp",
    },
    {
      slug: "wiki",
      name: "Wiki",
      description:
        "A web-based encyclopedia built with Django, where Markdown-powered entries can be searched, created, edited, and explored.",
      technologies: ["Python", "Django", "HTML", "CSS", "Markdown", "markdown2"],
      githubUrl: "https://github.com/ujjwaluzu/cs50w-wiki",
      category: "CS50W project",
      theme: "wiki",
      image: "wiki.webp",
    },
    {
      slug: "mail",
      name: "Mail",
      description:
        "A single-page email client built with Django and JavaScript, featuring asynchronous email actions without full-page reloads.",
      technologies: ["Python", "Django", "JavaScript", "HTML", "CSS", "Fetch API"],
      githubUrl: "https://github.com/ujjwaluzu/cs50w-mail",
      category: "CS50W project",
      theme: "wiki",
      image: "mail.svg",
    },
    {
      slug: "network",
      name: "Network",
      description:
        "A Django social network with posts, profiles, following, likes, AJAX interactions, and paginated feeds.",
      technologies: ["Python", "Django", "JavaScript", "AJAX", "Bootstrap 4", "SQLite"],
      githubUrl: "https://github.com/ujjwaluzu/cs50w-network",
      category: "CS50W project",
      theme: "network",
      image: "network.svg",
    },
    {
      slug: "ghprofile",
      name: "ghprofile",
      description:
        "A lightweight Python library for fetching and summarizing GitHub profile and repository data.",
      technologies: ["Python", "GitHub API", "PyPI"],
      githubUrl: "https://github.com/ujjwaluzu/ghprofile",
      category: "PYTHON LIBRARY",
      theme: "ghprofile",
      image: "",
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
    companyUrl: "https://intelligencex.org",
    duration: "3 months",
    companyDescription: "IntelligenceX is a cybersecurity company providing penetration testing, managed security, and compliance services.",
    period: "July 2026 - Oct 2026",
    description:
      "Building and maintaining web applications, exploring modern technologies, and contributing to impactful products.",
    quote: "Build with curiosity. Ship with purpose.",
  },
  contact: {
    eyebrow: "LET'S CONNECT",
    title: ["LET'S BUILD", "SOMETHING", "COOL TOGETHER."],
    description: "Ideas, opportunities, or just a friendly hello. My inbox is always open.",
    /** Platform ids; URLs are defined once in `site.socials`. */
    socials: ["linkedin", "x", "github"],
  },
} as const;
