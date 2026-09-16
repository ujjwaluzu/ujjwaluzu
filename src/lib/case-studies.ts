export type ScreenItem =
  | { kind: "image"; image: string; label: string; alt: string }
  | { kind: "placeholder"; label: string };

export type ProjectCaseStudy = {
  slug: string;
  seoDescription: string;
  heroTechs: string[];
  idea: { eyebrow: string; heading: string; paragraphs: string[]; note: string };
  featureGroups: { id: string; index: string; title: string; items: string[]; featured?: boolean }[];
  stack: { label: string; value: string[] }[];
  highlights: { heading: string; text: string }[];
  watchParty?: { title: string; text: string; callTitle: string; callControls: string[]; note: string };
  aniuzu?: { title: string; text: string; items: string[] };
  continueWatching?: { eyebrow: string; title: string; text: string; fields: string[] };
  journey?: { step: string; text: string }[];
  screenshots: ScreenItem[];
  details: { label: string; value: string }[];
  repoteam?: RepoTeamData;
  commerce?: CommerceData;
  wiki?: WikiData;
  mail?: MailData;
  network?: NetworkData;
  ghprofile?: GhProfileData;
};

export type RepoTeamData = {
  status: { eyebrow: string; heading: string; text: string; tag: string };
  workflow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    path: string[];
    steps: string[];
  };
  issues: {
    eyebrow: string;
    title: string;
    text: string;
    statuses: string[];
    priorities: string[];
  };
  roles: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    accent: string;
    ownerNote: string;
    groups: { name: string; tagline: string; items: string[] }[];
  };
  server: { eyebrow: string; title: string; chips: string[]; text: string };
  dataModel: {
    eyebrow: string;
    title: string;
    chain: string[];
    assignment: { from: string; arrow: string; to: string; note: string };
    note: string;
  };
  ideaToDone: { eyebrow: string; title: string; steps: string[] };
  structure: { eyebrow: string; title: string; chain: string[]; note: string };
  next: {
    eyebrow: string;
    title: string;
    subtitle: string;
    currentLabel: string;
    currentDesc: string;
    current: string[];
    futureLabel: string;
    futureDesc: string;
    future: string[];
    note: string;
  };
};

export type CommerceData = {
  context: { eyebrow: string; heading: string; text: string; tag: string; stamp: string };
  workflow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    path: string[];
    panelTitle: string;
    panelText: string;
    panelChecks: string[];
  };
  details: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: { eyebrow: string; title: string; text: string }[];
    adminTitle: string;
    adminText: string;
    adminChips: string[];
  };
  bidding: { eyebrow: string; title: string; text: string; rules: string[]; note: string };
  closing: { eyebrow: string; title: string; text: string; states: string[]; note: string };
  dataModel: {
    eyebrow: string;
    title: string;
    text: string;
    relations: { nodes: string[]; caption: string }[];
  };
  relational: { eyebrow: string; title: string; text: string; chips: string[] };
  forms: { eyebrow: string; title: string; text: string; chips: string[] };
  learning: {
    objectives: { eyebrow: string; title: string };
    outcomes: { eyebrow: string; title: string };
  };
  outcomes: string[];
  structure: { eyebrow: string; title: string; chain: string[]; note: string };
};

export type WikiData = {
  context: { eyebrow: string; heading: string; text: string; tag: string; stamp: string };
  heroNote: string;
  flows: {
    eyebrow: string;
    title: string;
    subtitle: string;
    flows: { label: string; steps: string[] }[];
  };
  search: {
    eyebrow: string;
    title: string;
    text: string;
    exact: { label: string; text: string };
    partial: { label: string; text: string };
    query: string;
    result: string;
    note: string;
  };
  markdown: {
    eyebrow: string;
    title: string;
    text: string;
    chain: string[];
    sample: { md: string[]; html: string[]; arrow: string };
    note: string;
  };
  edit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    create: { label: string; title: string; steps: string[] };
    existing: { label: string; title: string; steps: string[] };
  };
  edges: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cases: { label: string; title: string; text: string }[];
  };
  layers: { eyebrow: string; title: string; subtitle: string; layers: { label: string; text: string }[] };
  fileChain: {
    eyebrow: string;
    title: string;
    text: string;
    chain: string[];
    note: string;
  };
  why: { eyebrow: string; title: string; text: string; chips: string[] };
  learning: { eyebrow: string; title: string; subtitle: string };
  structure: {
    eyebrow: string;
    title: string;
    files: { path: string; desc: string }[];
  };
  cta: { title: string; text: string };
  screencastHref: string;
};

export type MailData = {
  context: { eyebrow: string; heading: string; text: string; tag: string; stamp: string };
  heroIntro: string;
  heroNote: string;
  challenge: {
    eyebrow: string;
    title: string;
    text: string;
    traditional: { label: string; steps: string[] };
    mail: { label: string; steps: string[] };
  };
  mailboxes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    boxes: { label: string; text: string }[];
  };
  lifecycle: {
    eyebrow: string;
    title: string;
    subtitle: string;
    flows: { label: string; steps: string[] }[];
  };
  fetchFlow: {
    eyebrow: string;
    title: string;
    text: string;
    chain: string[];
    note: string;
  };
  state: {
    eyebrow: string;
    title: string;
    text: string;
    examples: string[];
  };
  auth: { eyebrow: string; title: string; text: string; steps: string[] };
  archive: { eyebrow: string; title: string; text: string; chain: string[]; note: string };
  reply: { eyebrow: string; title: string; text: string; chain: string[]; note: string };
  hood: {
    eyebrow: string;
    title: string;
    subtitle: string;
    columns: { label: string; items: string[] }[];
  };
  structure: {
    eyebrow: string;
    title: string;
    files: { path: string; desc: string; featured?: boolean }[];
  };
  jsCore: { eyebrow: string; title: string; text: string; bullets: string[] };
  learning: { eyebrow: string; title: string; subtitle: string };
  pipeline: {
    eyebrow: string;
    title: string;
    text: string;
    chain: string[];
    note: string;
  };
  cta: { title: string; text: string };
  screencastHref: string;
};

export type NetworkData = {
  context: { eyebrow: string; heading: string; text: string; tag: string; stamp: string };
  heroIntro: string;
  heroNote: string;
  ideaCombo: string[];
  socialGraph: {
    eyebrow: string;
    title: string;
    text: string;
    flows: { label: string; steps: string[] }[];
  };
  ajax: {
    eyebrow: string;
    title: string;
    text: string;
    interactions: string[];
    chain: string[];
    note: string;
  };
  posts: { eyebrow: string; title: string; text: string; chain: string[] };
  profiles: { eyebrow: string; title: string; text: string; items: string[] };
  following: { eyebrow: string; title: string; text: string; chain: string[]; points: string[] };
  likes: { eyebrow: string; title: string; text: string; like: string[]; unlike: string[]; note: string };
  pagination: { eyebrow: string; title: string; text: string; targets: string[] };
  hood: {
    eyebrow: string;
    title: string;
    subtitle: string;
    columns: { label: string; items: string[] }[];
  };
  model: { eyebrow: string; title: string; text: string };
  auth: { eyebrow: string; title: string; text: string; steps: string[] };
  feed: { eyebrow: string; title: string; text: string; views: { label: string; text: string }[] };
  learning: { eyebrow: string; title: string; subtitle: string };
  structure: { eyebrow: string; title: string; text: string; chain: string[] };
  flow: { eyebrow: string; title: string; text: string; chain: string[]; note: string };
  cta: { title: string; text: string };
};

export type GhProfileData = {
  heroIntro: string;
  heroNote: string;
  ideaCombo: string[];
  whyLibrary: {
    eyebrow: string;
    title: string;
    subtitle: string;
    methods: string[];
  };
  fetches: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { label: string; title: string; text: string }[];
  };
  flow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: string[];
    calls: string[];
  };
  simpleApi: {
    eyebrow: string;
    title: string;
    subtitle: string;
    methods: string[];
  };
  auth: {
    eyebrow: string;
    title: string;
    without: { label: string; items: string[] };
    with: { label: string; items: string[] };
    note: string;
  };
  pinned: {
    eyebrow: string;
    title: string;
    text: string;
  };
  errorHandling: {
    eyebrow: string;
    title: string;
    text: string;
    chain: string[];
  };
  hood: {
    eyebrow: string;
    title: string;
    subtitle: string;
    chain: string[];
    columns: { label: string; items: string[] }[];
  };
  packageStructure: {
    eyebrow: string;
    title: string;
    files: { path: string; desc: string; featured?: boolean }[];
  };
  contributing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  learning: { eyebrow: string; title: string; subtitle: string };
  pypi: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  cta: { title: string; text: string; installText: string };
};

export const caseStudies: Record<string, ProjectCaseStudy> = {
  uzzutv: {
    slug: "uzzutv",
    seoDescription:
      "UzzUTV is a Django-based streaming platform for movies, TV, and anime, featuring discovery, watchlists, reviews, profiles, Continue Watching, and Watch Parties.",
    heroTechs: ["Python", "Django", "JavaScript", "Bootstrap", "TMDB", "AniList", "Supabase"],
    idea: {
      eyebrow: "THE IDEA",
      heading: "A streaming platform, built the Django way.",
      paragraphs: [
        "UzzUTV is a Netflix-style streaming platform built with Django for discovering, searching, and watching movies and TV series. TMDB supplies the movie and TV data, while AniList powers the Aniuzu anime catalogue.",
        "The goal was to explore what it takes to build a real, feature-heavy media product end to end: rich browsing, accounts, playback tracking, reviews, and a social watch-party experience.",
      ],
      note: "search, watch, review, repeat.",
    },
    featureGroups: [
      {
        id: "discovery",
        index: "01",
        title: "Discovery",
        items: [
          "Browse trending, popular and top-rated titles",
          "Filter the catalogue by genre categories",
          "Rich detail pages with cast information",
          "Search across movies, TV and anime",
        ],
      },
      {
        id: "watching",
        index: "02",
        title: "Watching",
        items: [
          "Stream movies and TV episodes",
          "Move through seasons and episodes",
          "Continue Watching resumes your spot",
          "Save titles to your watchlist",
        ],
      },
      {
        id: "social",
        index: "03",
        title: "Social",
        items: [
          "Accounts powered by Supabase Auth",
          "Leave ratings and reviews on titles",
          "Personal profiles for users",
          "Watch Parties with synced playback",
        ],
      },
      {
        id: "anime",
        index: "04",
        title: "Anime",
        items: [
          "Aniuzu anime catalogue powered by AniList",
          "Anime detail pages with related titles",
          "SUB/DUB selection and server switching",
          "Episode search and Continue Watching for anime",
        ],
      },
    ],
    stack: [
      { label: "Backend", value: ["Python", "Django 5.2.16"] },
      { label: "Frontend", value: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"] },
      { label: "Data", value: ["TMDB API", "AniList"] },
      { label: "Auth + Realtime", value: ["Supabase"] },
      { label: "Database", value: ["SQLite"] },
      { label: "Cache", value: ["Django DatabaseCache"] },
      { label: "Deployment", value: ["PythonAnywhere"] },
    ],
    highlights: [
      {
        heading: "Response caching",
        text: "TMDB responses are cached in the database so repeat browsing stays fast without hammering the API.",
      },
      {
        heading: "AniList backoff",
        text: "AniList calls are cached too, with rate-limit and backoff handling when the API asks for a pause.",
      },
      {
        heading: "GZip compression",
        text: "Responses are gzip-compressed to keep pages lighter over the wire.",
      },
      {
        heading: "Lazy-loaded images",
        text: "Posters and artwork load lazily so the catalogue stays quick on long scrolls.",
      },
      {
        heading: "Supabase auth",
        text: "Accounts and sessions are handled by Supabase Auth, no homegrown password storage.",
      },
      {
        heading: "Realtime rooms",
        text: "Supabase Realtime powers synchronized Watch Party playback and calls.",
      },
      {
        heading: "Server-side only",
        text: "The Supabase service-role credential never reaches the client; account deletion is handled server-side.",
      },
      {
        heading: "Progress tracking",
        text: "Continue Watching stores per-user playback state and resumes exactly where you stopped.",
      },
      {
        heading: "Responsive layouts",
        text: "The UI adapts from desktop to mobile without losing the catalogue experience.",
      },
    ],
    watchParty: {
      title: "Watch Party",
      text: "Create or join a watch party and stream together in a synchronized playback room. Supabase Realtime keeps everyone locked to the same moment of the same episode.",
      callTitle: "One-to-one video calling",
      callControls: ["Accept", "Decline", "Cancel", "Timeout", "Reconnect", "Camera", "Microphone", "Minimize", "End call"],
      note: "call a friend, hit play together",
    },
    aniuzu: {
      title: "Aniuzu",
      text: "The anime side of UzzUTV, powered by AniList. Anime gets its own discovery, metadata, and watch experience alongside movies and TV.",
      items: ["Discovery", "Anime metadata", "Detail pages", "Watchlist", "Episode navigation", "SUB/DUB selection", "Server switching", "Episode search", "Continue Watching", "Related anime"],
    },
    continueWatching: {
      eyebrow: "STATE PERSISTENCE",
      title: "Continue Watching.",
      text: "Playback history is tied to the authenticated user and stores exactly what it takes to resume later:",
      fields: ["Title", "Release year", "Selected server", "TV season / episode", "Playback position", "Duration", "Progress percentage"],
    },
    journey: [
      { step: "Idea", text: "A Netflix-style platform to explore Django, real data APIs, and a rich media UI." },
      { step: "Build", text: "Full-stack Django app: templates, accounts, external APIs, caching and deployment." },
      { step: "Features", text: "Discovery, watch pages, anime, reviews and the Watch Party social layer." },
      { step: "Learning", text: "API caching, rate limits, realtime sync, auth patterns and state persistence." },
    ],
    screenshots: [
      { kind: "image", image: "uzzutv.png", label: "Home / discovery", alt: "UzzUTV homepage showing movies and TV series to discover" },
      { kind: "placeholder", label: "Media detail" },
      { kind: "placeholder", label: "Watch page" },
      { kind: "placeholder", label: "Aniuzu" },
      { kind: "placeholder", label: "Watch Party" },
    ],
    details: [
      { label: "Category", value: "Streaming platform" },
      { label: "Stack", value: "Python / Django / JavaScript / Bootstrap / TMDB / AniList / Supabase" },
      { label: "Database", value: "SQLite" },
      { label: "Deployment", value: "PythonAnywhere" },
      { label: "License", value: "MIT" },
    ],
  },
  repoteam: {
    slug: "repoteam",
    seoDescription:
      "RepoTeam is a Django-based collaborative project-management MVP for teams, projects, issue tracking, and role-based access control.",
    heroTechs: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    idea: {
      eyebrow: "THE IDEA",
      heading: "A central place to organize the work.",
      paragraphs: [
        "Development teams juggle a lot: who is on which team, what projects exist, what work is open, and who owns it. RepoTeam gives those teams one central place to create teams, organize software projects, track issues, assign work, and collaborate on development-related work.",
        "The whole product is built around a simple spine: teams contain projects, and projects contain issues. The MVP exists to validate that exact workflow before anything bigger gets layered on.",
      ],
      note: "teams → projects → issues.",
    },
    featureGroups: [
      {
        id: "accounts",
        index: "01",
        title: "Accounts & authentication",
        items: [
          "Registration with username, email, and password confirmation",
          "Login and CSRF-protected logout",
          "Personalized welcome screen for authenticated users",
        ],
      },
      {
        id: "dashboard",
        index: "02",
        title: "Dashboard",
        items: [
          "Personal workspace summarizing your teams",
          "Live counters for teams, projects, and open issues",
          "Quick “Create team” action and team list",
          "Open and empty states handled",
        ],
      },
      {
        id: "teams",
        index: "03",
        title: "Teams",
        featured: true,
        items: [
          "Create teams with a name and description",
          "Workspace with member list and project list",
          "Invite members by username",
          "Remove members and change roles",
          "Owner / Admin / Member roles",
          "Owner-only for role changes",
        ],
      },
      {
        id: "projects",
        index: "04",
        title: "Projects",
        items: [
          "Projects belong to a team",
          "Created inside a team workspace",
          "Project workspace listing all issues",
          "Creator metadata on every project",
        ],
      },
      {
        id: "issues",
        index: "05",
        title: "Issues",
        items: [
          "Create with title, description, status, priority, and assignee",
          "Edit any field at any time",
          "Delete with a confirmation step",
          "Assign issues to any team member",
        ],
      },
      {
        id: "permissions",
        index: "06",
        title: "Permissions",
        items: [
          "Checks on every authenticated page",
          "Gates for invites, removals, and role changes",
          "Non-members redirected to the dashboard",
        ],
      },
    ],
    stack: [
      { label: "Backend", value: ["Python", "Django 5.2"] },
      { label: "Database", value: ["SQLite"] },
      { label: "Templates", value: ["Django Template Language", "HTML"] },
      { label: "Styling", value: ["Custom CSS", "CSS variables", "Design-system approach"] },
      { label: "Scripting", value: ["Minimal vanilla JavaScript"] },
    ],
    highlights: [
      {
        heading: "Page rendering",
        text: "Every page view is covered by the automated test suite.",
      },
      {
        heading: "Issue CRUD flows",
        text: "Create, edit, and delete runs are tested end to end.",
      },
      {
        heading: "Team creation",
        text: "Team setup is exercised from the dashboard flow.",
      },
      {
        heading: "Project creation",
        text: "Creating a project inside a team is covered.",
      },
      {
        heading: "Issue creation",
        text: "Issue creation within a project is covered.",
      },
      {
        heading: "Permission checks",
        text: "Role-based rules for owners, admins, and members are verified.",
      },
    ],
    screenshots: [
      {
        kind: "image",
        image: "repoteam/dashboard.png",
        label: "Dashboard",
        alt: "RepoTeam dashboard showing the user's teams, team projects, and open issue counters",
      },
      {
        kind: "image",
        image: "repoteam/team-detail.png",
        label: "Team workspace",
        alt: "RepoTeam team workspace showing the member list and project list",
      },
      {
        kind: "image",
        image: "repoteam/project-detail.png",
        label: "Project workspace",
        alt: "RepoTeam project workspace listing the team's issues",
      },
      {
        kind: "image",
        image: "repoteam/home.png",
        label: "Homepage",
        alt: "RepoTeam homepage",
      },
    ],
    details: [
      { label: "Project", value: "RepoTeam" },
      { label: "Category", value: "MVP" },
      { label: "Stack", value: "Python / Django / SQLite / HTML / CSS / JavaScript" },
      { label: "Architecture", value: "Django server-rendered templates" },
      { label: "Database", value: "SQLite" },
      { label: "Status", value: "MVP / Active development" },
      { label: "License", value: "No license currently selected" },
    ],
    repoteam: {
      status: {
        eyebrow: "PROJECT STATUS",
        heading: "MVP — Minimal Viable Product.",
        text: "RepoTeam is designed to validate the core team → project → issue workflow. It is under active development and not yet production-ready.",
        tag: "Under active development",
      },
      workflow: {
        eyebrow: "THE CORE WORKFLOW",
        title: "One spine: team → project → issue.",
        subtitle: "The MVP is organized around a single path through the product.",
        path: ["User", "Team", "Project", "Issues", "Track work"],
        steps: [
          "Register an account",
          "Log in",
          "Create a team",
          "Invite team members by username",
          "Create a project inside the team",
          "Create and assign issues",
          "Update issue statuses and priorities",
          "Manage team members and roles",
          "Track work from dashboard and workspaces",
        ],
      },
      issues: {
        eyebrow: "ISSUE TRACKING",
        title: "Issues that move toward done.",
        text: "Each issue carries a title, description, status, priority, and an optional assignee from the team.",
        statuses: ["To Do", "In Progress", "In Review", "Done"],
        priorities: ["Low", "Medium", "High"],
      },
      roles: {
        eyebrow: "WHO CAN DO WHAT?",
        title: "Three roles, clear boundaries.",
        subtitle: "Permission checks run on every authenticated page.",
        note: "Unauthorized actions redirect back to the team page with a message; non-members are redirected to the dashboard.",
        accent: "roles",
        ownerNote: "The owner's own membership can't be removed or re-assigned.",
        groups: [
          {
            name: "Owner",
            tagline: "Runs the team. Full control.",
            items: [
              "Full team access",
              "Invite members",
              "Remove members, including admins",
              "Change member roles",
              "Create projects",
              "Create, edit, and delete issues",
            ],
          },
          {
            name: "Admin",
            tagline: "Full team access, with limits.",
            items: [
              "Full team access",
              "Invite members",
              "Remove eligible members — never an owner or another admin",
              "Cannot change roles",
              "Create projects",
              "Create, edit, and delete issues",
            ],
          },
          {
            name: "Member",
            tagline: "Read access plus issue work.",
            items: [
              "Read access to team workspace",
              "Create projects",
              "Create, edit, and delete issues",
            ],
          },
        ],
      },
      server: {
        eyebrow: "ENGINEERING NOTE",
        title: "Server-rendered by design.",
        chips: ["Django Templates", "Custom CSS", "Minimal Vanilla JS"],
        text: "RepoTeam deliberately uses Django server-rendered templates rather than a frontend framework. Every page round-trips through Django, a custom CSS design system holds the styling, and interaction stays minimal.",
      },
      dataModel: {
        eyebrow: "THE DATA MODEL",
        title: "Five models down one spine.",
        chain: ["User", "Membership", "Team", "Project", "Issue"],
        assignment: { from: "Issue", arrow: "assigned_to", to: "User", note: "nullable — issues can be unassigned" },
        note: "A Comment model exists in the data layer, but commenting is not yet implemented in the UI.",
      },
      ideaToDone: {
        eyebrow: "FROM IDEA TO DONE",
        title: "The issue lifecycle.",
        steps: ["Create", "Assign", "Set priority", "Update status", "Edit", "Delete"],
      },
      structure: {
        eyebrow: "PROJECT STRUCTURE",
        title: "A compact Django layout.",
        chain: ["Django project", "Core app", "Models", "Views", "Forms", "Templates", "Static assets"],
        note: "manage.py sits at the root; the core app keeps models, views, forms, admin, tests, templates, and static assets together.",
      },
      next: {
        eyebrow: "WHAT'S NEXT",
        title: "Shipped today, and the direction ahead.",
        subtitle: "An MVP intentionally draws a line between what exists now and what could come later.",
        currentLabel: "CURRENT MVP",
        currentDesc: "Implemented and working in the codebase today.",
        current: ["Accounts & authentication", "Dashboard", "Teams", "Projects", "Issues", "Permissions"],
        futureLabel: "FUTURE IDEAS",
        futureDesc: "Documented as planned or potential — not in the codebase.",
        future: [
          "Real-time notifications",
          "Activity feeds",
          "Advanced issue filtering & search",
          "File attachments",
          "GitHub integration",
          "Email invitations",
          "Kanban board",
          "Analytics & reporting",
          "Dark mode",
          "Issue comments UI",
          "Production deployment",
        ],
        note: "None of these future ideas exist in the codebase today — they're direction, not features.",
      },
    },
  },
  commerce: {
    slug: "commerce",
    seoDescription:
      "Commerce is a Django-based auction marketplace built for CS50W, featuring listings, bidding, watchlists, comments, categories, and auction management.",
    heroTechs: ["Python", "Django", "HTML", "CSS", "SQLite", "Django ORM"],
    idea: {
      eyebrow: "THE IDEA",
      heading: "An auction house, built one model at a time.",
      paragraphs: [
        "Commerce is an eBay-like auction web application. Users create listings, place bids, leave comments, keep a personal watchlist, and browse listings by category — built for CS50's Web Programming with Python and JavaScript (CS50W).",
        "The focus was the backend: designing a relational schema in Django, wiring up user authentication, validating every form on the server, and getting the auction business logic exactly right.",
      ],
      note: "list, bid, watch, comment.",
    },
    featureGroups: [
      {
        id: "auth",
        index: "01",
        title: "Authentication",
        items: ["Register, log in, and log out", "A signed-in identity drives the whole app"],
      },
      {
        id: "listings",
        index: "02",
        title: "Auction listings",
        items: ["Create listings with title, description, and starting bid", "Optional image URL", "Every listing picks a category"],
      },
      {
        id: "bidding",
        index: "03",
        title: "Bidding",
        featured: true,
        items: ["Place bids with validation enforced", "The current price is the highest bid", "Every bid is recorded and owned by a user"],
      },
      {
        id: "watchlist",
        index: "04",
        title: "Watchlist",
        items: ["Add and remove listings in one click", "Backed by a many-to-many relationship"],
      },
      {
        id: "comments",
        index: "05",
        title: "Comments",
        items: ["Leave comments on any listing", "Authors can delete their own comments"],
      },
      {
        id: "categories",
        index: "06",
        title: "Categories",
        items: ["Browse the full category index", "Drill into the active listings of any one"],
      },
      {
        id: "closing",
        index: "07",
        title: "Auction closing",
        items: ["Owners close their own auctions", "The highest bidder is the winner"],
      },
      {
        id: "admin",
        index: "08",
        title: "Admin control",
        items: ["Django admin manages listings, bids, and comments"],
      },
    ],
    stack: [
      { label: "Backend", value: ["Python", "Django"] },
      { label: "Frontend", value: ["HTML", "CSS"] },
      { label: "Database", value: ["SQLite"] },
      { label: "Data layer", value: ["Django ORM"] },
    ],
    highlights: [
      { heading: "Django models", text: "Defining users, listings, bids, comments, and categories as real data." },
      { heading: "Database relationships", text: "Foreign keys and many-to-many links between the models." },
      { heading: "User authentication", text: "Django's built-in users, with registration, login, and logout." },
      { heading: "Authorization", text: "Deciding what a signed-in user can and cannot do." },
      { heading: "Django forms", text: "ModelForms that turn requests into validated, typed data." },
      { heading: "Server-side validation", text: "Checking input on the server before it ever hits the database." },
      { heading: "The Django ORM", text: "Querying relational data without writing raw SQL." },
      { heading: "Bidding business logic", text: "The rules that keep every auction fair." },
      { heading: "Dynamic pages", text: "Pages that change with the logged-in user and auction state." },
    ],
    screenshots: [
      {
        kind: "image",
        image: "auction.png",
        label: "Active listings",
        alt: "Commerce auction application showing active listings on the marketplace homepage",
      },
      { kind: "placeholder", label: "Listing detail" },
      { kind: "placeholder", label: "Create listing" },
      { kind: "placeholder", label: "Watchlist" },
    ],
    details: [
      { label: "PROJECT", value: "Commerce" },
      { label: "CATEGORY", value: "CS50W project" },
      { label: "STACK", value: "Python, Django, HTML, CSS, SQLite" },
      { label: "DATA", value: "Django ORM" },
      { label: "TYPE", value: "Auction marketplace" },
    ],
    commerce: {
      context: {
        eyebrow: "BUILT WITH CS50W",
        heading: "Built with CS50W.",
        text: "Commerce is a course project from CS50's Web Programming with Python and JavaScript — Django, from database schema to server-rendered pages.",
        tag: "CS50W course project",
        stamp: "(an honest MVP)",
      },
      workflow: {
        eyebrow: "HOW AN AUCTION WORKS",
        title: "From listing to hammer-down.",
        subtitle: "The five moves behind every auction on the site.",
        path: ["Create listing", "Users place bids", "Bid validation", "Auction closes", "Winning bidder"],
        panelTitle: "Every bid is checked.",
        panelText:
          "A bid only earns its place if it clears the current price — the highest bid so far, or the starting bid when the auction is fresh.",
        panelChecks: ["Must be a valid amount", "Must beat the current price", "Becomes the new highest bid", "Updates the current price"],
      },
      details: {
        eyebrow: "THE FEATURES IN DETAIL",
        title: "Six systems, one marketplace.",
        subtitle: "The flow behind the features, from accounts to admin.",
        cards: [
          {
            eyebrow: "AUTHENTICATION",
            title: "One identity for everything.",
            text: "Django's built-in user system drives registration, login, and logout. Bidding, watchlisting, and commenting all tie back to the signed-in user.",
          },
          {
            eyebrow: "AUCTION LISTINGS",
            title: "Set a starting bid, open the floor.",
            text: "Anyone can publish a listing with a title, description, starting bid, optional image URL, and a category. Active listings flow straight onto the homepage.",
          },
          {
            eyebrow: "WATCHLIST",
            title: "Save it for later.",
            text: "A personal watchlist per user via Django's many-to-many field. One click adds, one click removes, and a dedicated page lists everything saved.",
          },
          {
            eyebrow: "COMMENTS",
            title: "Say something useful.",
            text: "Signed-in users can leave comments on any listing and delete their own. Every comment is stored with its listing and its author.",
          },
          {
            eyebrow: "CATEGORIES",
            title: "Shop a shelf, not the whole store.",
            text: "Every listing belongs to a category. Browse the category index, then open one to see its active listings only.",
          },
          {
            eyebrow: "ADMIN",
            title: "Manage it from the admin.",
            text: "Django's admin interface handles listings, bids, and comments out of the box — no custom dashboard needed.",
          },
        ],
        adminTitle: "Admin control.",
        adminText: "The Django admin is the cockpit: listings, bids, and comments, managed without touching the app's own code.",
        adminChips: ["Listings", "Bids", "Comments"],
      },
      bidding: {
        eyebrow: "BIDDING LOGIC",
        title: "Bids that have to earn their place.",
        text: "Placing a bid is where Commerce does its real work. Every bid is checked before it ever touches the database.",
        rules: [
          "A bid must be a valid numeric amount",
          "It must beat the current price — the highest bid so far, or the starting bid when there are none",
          "If it fails, it's rejected with a clear message",
          "If it passes, it's saved and becomes the new highest bid",
        ],
        note: "bid higher, win the lot",
      },
      closing: {
        eyebrow: "CLOSING THE AUCTION",
        title: "When the hammer comes down.",
        text: "Only a listing's owner can close it. Once closed, the auction is over and the highest bidder takes the win.",
        states: ["Open", "Bidding", "Closed", "Winner"],
        note: "hammer down — highest bid wins",
      },
      dataModel: {
        eyebrow: "THE DATA MODEL",
        title: "Five models, one centre: the listing.",
        text: "Users, listings, bids, comments, and categories — with listings at the centre of almost every relationship.",
        relations: [
          { nodes: ["User", "Listings", "Bids"], caption: "Bids hang off a listing and remember who placed them." },
          { nodes: ["User", "Watchlist", "Listings"], caption: "A many-to-many watchlist links users to saved listings." },
          { nodes: ["Listing", "Comments"], caption: "Comments belong to a listing, each with an author." },
          { nodes: ["Listing", "Category"], caption: "Every listing is filed under one category." },
        ],
      },
      relational: {
        eyebrow: "RELATIONAL DATA",
        title: "Relational by design.",
        text: "Everything sits on Django's ORM. The current price is derived from the related bid records, the watchlist is a through-table in the background, and per-user pages are just filtered queries.",
        chips: ["Listings", "Bids", "Comments", "Categories", "Watchlists"],
      },
      forms: {
        eyebrow: "FORMS THAT DO THE WORK",
        title: "Django forms, server-side.",
        text: "Every form — new listing, bid, comment — is validated server-side before anything is saved. A ModelForm turns clean user input into a real listing.",
        chips: ["New listing form", "Bid amount checks", "Comment posting", "Validation before save"],
      },
      learning: {
        objectives: { eyebrow: "WHAT I WAS LEARNING", title: "Coursework, put to work." },
        outcomes: { eyebrow: "WHAT THIS PROJECT TAUGHT ME", title: "Six wins from the build." },
      },
      outcomes: [
        "Designing relational database schemas",
        "Implementing bidding logic and constraints",
        "Using Django's authentication system",
        "Managing many-to-many watchlists",
        "Handling form submission and validation",
        "Building maintainable Django applications",
      ],
      structure: {
        eyebrow: "PROJECT STRUCTURE",
        title: "A compact Django layout.",
        chain: ["Django project", "Auctions app", "Models", "Views", "Forms", "URLs", "Templates", "Admin"],
        note: "manage.py sits at the project root; the auctions app keeps models, views, URLs, admin, and templates together, and the forms live in views.py.",
      },
    },
  },
  wiki: {
    slug: "wiki",
    seoDescription:
      "Wiki is a Django-based encyclopedia built for CS50W, where Markdown-powered entries can be searched, created, edited, and explored.",
    heroTechs: ["Python", "Django", "HTML", "CSS", "Markdown"],
    idea: {
      eyebrow: "THE IDEA",
      heading: "A web encyclopedia, Markdown all the way down.",
      paragraphs: [
        "Wiki is a web-based encyclopedia built as part of CS50's Web Programming with Python and JavaScript (CS50W). Entries live as Markdown files on disk, and every page is rendered server-side by Django — no database to manage, just files that read and write.",
        "The brief was deceptively simple: browse an index, look up an entry, search for one, create a new one, edit an existing one. The interesting work is in the parts invisible on screen — reading files, converting Markdown, routing titles to pages, and keeping duplicate entries out.",
      ],
      note: "all content, stored as files",
    },
    featureGroups: [
      {
        id: "entries",
        index: "01",
        title: "Entry pages",
        items: [
          "Unique URLs for every entry",
          "The entry title becomes the page heading",
          "Missing entries get a clear error page",
        ],
      },
      {
        id: "search",
        index: "02",
        title: "Search",
        items: [
          "Exact matches redirect straight to the entry",
          "Partial matches list every relevant result",
          "Results stay one click away from their entries",
        ],
      },
      {
        id: "create",
        index: "03",
        title: "Create page",
        items: [
          "A title field plus a Markdown textarea",
          "New entries are saved straight to disk",
          "The app redirects to the finished page",
        ],
      },
      {
        id: "edit",
        index: "04",
        title: "Edit page",
        items: [
          "Existing Markdown is pre-filled for editing",
          "Changes save back over the entry file",
        ],
      },
      {
        id: "random",
        index: "05",
        title: "Random",
        items: ["One route to any entry", "A dice roll that lands somewhere new"],
      },
      {
        id: "markdown",
        index: "06",
        title: "Markdown",
        items: ["Entries written and stored in Markdown", "Converted to HTML before it reaches the page"],
      },
      {
        id: "index",
        index: "07",
        title: "Index",
        items: ["Every entry name, listed in one place", "A clickable map of the whole encyclopedia"],
      },
    ],
    stack: [
      { label: "Backend", value: ["Python", "Django"] },
      { label: "Frontend", value: ["HTML", "CSS"] },
      { label: "Content", value: ["Markdown"] },
    ],
    highlights: [
      { heading: "Titles become routes", text: "Each entry's name maps to its own URL — and Django routes that request to the matching view." },
      { heading: "The filesystem is the database", text: "Entries live as .md files on disk. Listing, reading, and writing entries all talk straight to the filesystem." },
      { heading: "Rendering happens on the server", text: "Stored Markdown is converted to HTML in the view, not in the browser — a clean server-side render." },
      { heading: "Search keeps its promises", text: "An exact match jumps straight to the entry; anything else returns a breadcrumb of partial matches." },
      { heading: "Forms feed the file store", text: "Creating and editing are ordinary form submissions that write Markdown back to disk." },
      { heading: "Edge cases get real pages", text: "Duplicate titles and missing entries fail loudly and clearly instead of silently." },
      { heading: "Small, readable code", text: "Virtually all logic lives in a handful of views and a small helper module — easy to follow." },
    ],
    screenshots: [
      { kind: "image", image: "wiki.png", label: "The Wiki encyclopedia", alt: "Wiki encyclopedia interface built with Django" },
      { kind: "placeholder", label: "Index — every entry in one list" },
      { kind: "placeholder", label: "Create — a new Markdown entry" },
      { kind: "placeholder", label: "Edit — pre-filled Markdown" },
      { kind: "placeholder", label: "Search — matching results" },
    ],
    details: [
      { label: "Project", value: "Wiki" },
      { label: "Category", value: "CS50W project" },
      { label: "Built with", value: "Python, Django, HTML, CSS, Markdown" },
      { label: "Repository", value: "github.com/ujjwaluzu/cs50w-wiki" },
      { label: "Screencast", value: "YouTube" },
    ],
    wiki: {
      context: {
        eyebrow: "BUILT WITH CS50W",
        heading: "A course project, built to learn.",
        text: "Wiki is a CS50W project through and through — a chance to put Python, Django, and server-side rendering into practice with a real, working application rather than an exercise.",
        tag: "CS50W project",
        stamp: "an honest MVP",
      },
      heroNote: "search, read, create, edit.",
      flows: {
        eyebrow: "HOW THE WIKI WORKS",
        title: "Three loops, one encyclopedia.",
        subtitle: "Reading, creating, and editing each follow a clean server-side path.",
        flows: [
          { label: "SEARCH / INDEX → READ", steps: ["Search or open the index", "Find the entry", "Read the Markdown", "Convert to HTML", "Display the entry"] },
          { label: "CREATE", steps: ["Submit a title and body", "Write the Markdown to disk", "View the new entry"] },
          { label: "EDIT", steps: ["Load the existing Markdown", "Update the content", "Save changes back to disk"] },
        ],
      },
      search: {
        eyebrow: "SEARCH, BUT SMARTER",
        title: "One query, two answers.",
        text: "The search box doesn't just match — it decides what to do with a match. An exact title hit jumps straight to the entry; anything else becomes a list of partial matches to choose from.",
        exact: { label: "EXACT MATCH", text: "The query matches an entry name, so the app redirects straight to that entry." },
        partial: { label: "PARTIAL MATCH", text: "Otherwise it returns a page listing every entry that contains the query as a substring." },
        query: "ytho",
        result: "Python",
        note: "type ytho, land at Python",
      },
      markdown: {
        eyebrow: "FROM MARKDOWN TO HTML",
        title: "Stored small, served big.",
        text: "Entries are kept as lightweight Markdown files. Each request reads the file, converts the Markdown to HTML, and hands the rendered page to the template.",
        chain: ["Markdown file", "Read content", "Convert", "HTML", "Rendered entry"],
        sample: {
          md: ["# Python", "Python is a programming", "language."],
          html: ["<h1>Python</h1>", "<p>Python is a programming", "language.</p>"],
          arrow: "markdown → html",
        },
        note: "the same content, re-rendered every request",
      },
      edit: {
        eyebrow: "EDIT THE ENCYCLOPEDIA",
        title: "Created and edited from the browser.",
        subtitle: "No database admin. The encyclopedia grows and changes through plain forms.",
        create: {
          label: "CREATE NEW PAGE",
          title: "Add an entry.",
          steps: [
            "Enter a unique title",
            "Write the body in Markdown",
            "Save the entry",
            "Duplicate title? Get told off clearly",
            "Redirect to the new entry",
          ],
        },
        existing: {
          label: "EDIT EXISTING PAGE",
          title: "Change an entry.",
          steps: [
            "Open an existing entry",
            "The current Markdown fills the form",
            "Edit as much as you like",
            "Save changes back to the file",
            "Return to the updated entry",
          ],
        },
      },
      edges: {
        eyebrow: "EDGE CASES",
        title: "The failure paths, built in.",
        subtitle: "The invisible work of a web app is how it fails.",
        cases: [
          {
            label: "MISSING ENTRY",
            title: "\"An error occurred\"",
            text: "Request an entry that doesn't exist and Django serves a clear error page instead of crashing.",
          },
          {
            label: "DUPLICATE ENTRY",
            title: "One title, one entry.",
            text: "Trying to create a page whose title already exists is rejected — the encyclopedia never clobbers an existing entry.",
          },
        ],
      },
      layers: {
        eyebrow: "UNDER THE HOOD",
        title: "From URL to served page.",
        subtitle: "The request flows through a small set of Django pieces.",
        layers: [
          { label: "URLs", text: "A urlpatterns map that turns entry names into routes." },
          { label: "Views", text: "Functions that find entries, render pages, and handle search, create, edit, and random." },
          { label: "Templates", text: "HTML shells that receive data — and the rendered Markdown — from the views." },
          { label: "Filesystem", text: "The entry store: plain .md files under entries/." },
          { label: "Util", text: "A thin helper module that lists, reads, and writes those files." },
          { label: "Markdown", text: "The conversion step turns stored Markdown into HTML at request time." },
        ],
      },
      fileChain: {
        eyebrow: "A FILE-BASED ENCYCLOPEDIA",
        title: "No database — just files.",
        text: "The whole encyclopedia is a folder of Markdown files. A title is a filename, a page is a file read from disk, and the conversion happens fresh on every request.",
        chain: ["Entry title", "Markdown file", "Filesystem", "Django view", "Markdown → HTML", "Entry page"],
        note: "the database is a directory",
      },
      why: {
        eyebrow: "WHY DJANGO?",
        title: "The batteries that mattered.",
        text: "Django supplied routing, views, templates, and forms out of the box — and its server-side discipline keeps all the encyclopedia logic in one place.",
        chips: [
          "URL routing",
          "Views",
          "Templates",
          "Forms",
          "Server-side handling",
          "Redirects",
          "Error handling",
        ],
      },
      learning: {
        eyebrow: "WHAT THIS PROJECT TAUGHT ME",
        title: "Server-side, start to finish.",
        subtitle: "The whole loop — request, route, render, write — is one Django application.",
      },
      structure: {
        eyebrow: "PROJECT STRUCTURE",
        title: "A small, tidy Django layout.",
        files: [
          { path: "entries/", desc: "The encyclopedia itself — one Markdown file per entry." },
          { path: "templates/", desc: "HTML templates for the layout, index, entries, search, and edit pages." },
          { path: "views.py", desc: "The application's logic: index, entry lookup, search, create, edit, random." },
          { path: "urls.py", desc: "Maps URLs to views, including the /wiki/TITLE entry routes." },
          { path: "util.py", desc: "Helpers that list, read, and write the entry files." },
        ],
      },
      cta: {
        title: "Want to see the encyclopedia?",
        text: "Browse the Django views, walk the entry files, and watch the screencast.",
      },
      screencastHref: "https://youtu.be/hnYdDZRMS50?si=FAiwGwBMiWvpxc_5",
    },
  },
  mail: {
    slug: "mail",
    seoDescription:
      "Mail is a single-page email client built with Django and JavaScript for CS50W, where inboxes, messages, replies, and archives update dynamically without full-page reloads.",
    heroTechs: ["Python", "Django", "JavaScript", "HTML", "CSS", "Fetch API"],
    idea: {
      eyebrow: "THE IDEA",
      heading: "One page. One app. No reloads.",
      paragraphs: [
        "Mail is a single-page email client built as part of CS50's Web Programming with Python and JavaScript (CS50W). It recreates the core loop of an email service like Gmail — send, receive, read, archive, reply — but every switch, open, and action happens inside one page.",
        "The backend API was provided by the project, so the build was never about inventing mail infrastructure. The real work was the front end: JavaScript that fetches from that API, then updates the interface on the other side of each response.",
      ],
      note: "one page, dynamic all the way through",
    },
    featureGroups: [
      {
        id: "auth",
        index: "01",
        title: "Authentication",
        items: [
          "Register a new user account",
          "Log in and log out",
          "Your own mailbox, always on file",
        ],
      },
      {
        id: "inbox",
        index: "02",
        title: "Inbox",
        items: [
          "Received emails, listed in the inbox",
          "Open any message from the same screen",
          "Read state updates as you view",
        ],
      },
      {
        id: "sent",
        index: "03",
        title: "Sent",
        items: ["All sent messages, in one list", "The full outbox, revisit anytime"],
      },
      {
        id: "archive",
        index: "04",
        title: "Archive",
        items: [
          "Archive received emails away",
          "Unarchive them straight back to the inbox",
        ],
      },
      {
        id: "compose",
        index: "05",
        title: "Compose",
        items: [
          "Write and send new messages",
          "Recipients, subject, and body",
        ],
      },
      {
        id: "read",
        index: "06",
        title: "Read",
        items: [
          "Open individual emails",
          "Mark emails as read when opened",
        ],
      },
      {
        id: "reply",
        index: "07",
        title: "Reply",
        items: [
          "Reply to emails with the key fields pre-filled",
          "Send the reply straight from the view",
        ],
      },
      {
        id: "dynamic",
        index: "08",
        title: "Dynamic UI",
        items: [
          "Mailboxes and messages swap in place",
          "New views, rendered without a page reload",
        ],
        featured: true,
      },
    ],
    stack: [
      { label: "Backend", value: ["Python", "Django"] },
      { label: "Client", value: ["JavaScript", "HTML", "CSS"] },
      { label: "Data moves", value: ["Fetch API"] },
    ],
    highlights: [
      { heading: "Building single-page applications", text: "Every email experience — inbox, read, compose, reply, archive — happens on one page with no navigation between files." },
      { heading: "Async API calls with JavaScript", text: "The Fetch API drives it all: each user action becomes a request, and the interface waits for nothing." },
      { heading: "Rendering through DOM manipulation", text: "The visible interface is built and rebuilt by JavaScript — mailboxes list emails, and views render messages." },
      { heading: "Managing multiple UI views", text: "Inbox, sent, archive, compose, and a single email view coexist as states within one page." },
      { heading: "Client-side business logic", text: "Reading, archiving, unarchiving, and replying are decided and executed in the browser." },
      { heading: "Front-end JavaScript meets a Django backend", text: "Django serves the API and the data; JavaScript is the layer that asks for it and paints the result." },
    ],
    screenshots: [
      { kind: "placeholder", label: "01 — Inbox" },
      { kind: "placeholder", label: "02 — Email view" },
      { kind: "placeholder", label: "03 — Compose" },
      { kind: "placeholder", label: "04 — Archive" },
      { kind: "placeholder", label: "05 — Reply" },
    ],
    details: [
      { label: "Project", value: "Mail" },
      { label: "Category", value: "CS50W project" },
      { label: "Built with", value: "Python, Django, JavaScript, HTML, CSS, Fetch API" },
      { label: "Repository", value: "github.com/ujjwaluzu/cs50w-mail" },
      { label: "Screencast", value: "YouTube" },
    ],
    mail: {
      context: {
        eyebrow: "BUILT WITH CS50W",
        heading: "A course project, focused on the front end.",
        text: "Mail was created as part of CS50's Web Programming with Python and JavaScript (CS50W). The spotlight fell on JavaScript — APIs, asynchronous requests, DOM manipulation, and single-page behaviour — with Django serving the backend.",
        tag: "CS50W project",
        stamp: "a real SPA, by hand",
      },
      heroIntro:
        "A single-page email client built with Django and JavaScript, where inboxes, messages, replies, and archives update dynamically without full-page reloads.",
      heroNote: "inbox, sent, archive, reply.",
      challenge: {
        eyebrow: "THE CHALLENGE",
        title: "Reloads were the enemy.",
        text: "A conventional multi-page flow could reload the browser every time someone opened a mailbox, read an email, archived something, or replied. Mail instead had to respond dynamically — no reload, just an updated page.",
        traditional: {
          label: "TRADITIONAL FLOW",
          steps: ["CLICK", "REQUEST", "PAGE RELOAD", "NEW PAGE"],
        },
        mail: {
          label: "MAIL SPA FLOW",
          steps: ["CLICK", "FETCH API REQUEST", "UPDATE STATE", "UPDATE DOM", "NO FULL RELOAD"],
        },
      },
      mailboxes: {
        eyebrow: "MAILBOX EXPERIENCE",
        title: "One client. Multiple mailboxes.",
        subtitle: "Users move between their mailboxes inside the same single-page interface — no new page, no full reload.",
        boxes: [
          { label: "INBOX", text: "Received emails, listed and ready to open." },
          { label: "SENT", text: "Everything the user has sent, in one place." },
          { label: "ARCHIVE", text: "Filed-away emails, retrievable at any time." },
        ],
      },
      lifecycle: {
        eyebrow: "THE EMAIL LIFECYCLE",
        title: "Three journeys, one page.",
        subtitle: "Compose, read, and file away — each flows through the same single-page interface.",
        flows: [
          { label: "SEND", steps: ["COMPOSE", "SEND", "SENT"] },
          { label: "READ", steps: ["INBOX", "OPEN EMAIL", "MARK AS READ", "REPLY"] },
          { label: "FILE AWAY", steps: ["INBOX", "ARCHIVE", "ARCHIVE MAILBOX"] },
        ],
      },
      fetchFlow: {
        eyebrow: "FETCH, THEN RENDER",
        title: "Ask the API, paint the screen.",
        text: "The JavaScript client talks to the provided backend API through the browser's Fetch API. Every user action becomes a request, and the returned data is what the interface renders — no full-page reloads for the core email actions.",
        chain: ["USER ACTION", "FETCH REQUEST", "BACKEND API", "RESPONSE", "JAVASCRIPT", "DOM UPDATE"],
        note: "fetch, render, repeat",
      },
      state: {
        eyebrow: "DYNAMIC DOM",
        title: "The page is the state.",
        text: "JavaScript decides what the user sees at any moment by changing the DOM in place — mailboxes, messages, compose views, and reply forms all live in the same page.",
        examples: [
          "Switching mailboxes",
          "Opening messages",
          "Displaying email content",
          "Updating read state",
          "Archiving and unarchiving",
          "Rendering sent mail",
          "Composing email views",
          "Rendering reply forms",
        ],
      },
      auth: {
        eyebrow: "AUTHENTICATION",
        title: "Account flow.",
        text: "A classic, documented loop: new users register, existing users log in, and everyone can log out."
          + " The email interface sits behind this authenticated experience.",
        steps: ["REGISTER", "LOGIN", "LOGOUT"],
      },
      archive: {
        eyebrow: "ARCHIVE SYSTEM",
        title: "Archive without deleting.",
        text: "Received emails can be archived and later unarchived — filed away, never lost, and always one click from the inbox again.",
        chain: ["INBOX", "ARCHIVE", "ARCHIVE MAILBOX", "UNARCHIVE", "INBOX"],
        note: "archive now, unarchive anytime",
      },
      reply: {
        eyebrow: "REPLY EXPERIENCE",
        title: "Reply, pre-filled.",
        text: "Replying to an email carries the original message along — the reply form is pre-filled from the email being answered, so a reply is almost a one-click send.",
        chain: ["OPEN EMAIL", "REPLY", "PRE-FILLED FIELDS", "SEND"],
        note: "reply, edit lightly, send",
      },
      hood: {
        eyebrow: "UNDER THE HOOD",
        title: "Two layers, one app.",
        subtitle: "Django structures the app and serves the API; JavaScript is the client-side layer that requests data and updates the interface.",
        columns: [
          { label: "DJANGO", items: ["BACKEND API", "VIEWS", "TEMPLATES", "APPLICATION STRUCTURE"] },
          { label: "JAVASCRIPT", items: ["FETCH REQUESTS", "DOM MANIPULATION", "UI STATE", "EMAIL INTERACTIONS"] },
          { label: "STYLE", items: ["CSS"] },
        ],
      },
      structure: {
        eyebrow: "PROJECT STRUCTURE",
        title: "A tidy Django layout.",
        files: [
          { path: "mail/", desc: "Main application — views, templates, static files, and API logic." },
          { path: "project3/", desc: "Django project configuration." },
          { path: "templates/mail/", desc: "HTML templates for the email client." },
          { path: "static/mail/inbox.js", desc: "The core JavaScript file driving the SPA behaviour.", featured: true },
          { path: "static/mail/styles.css", desc: "Styling for the email client." },
          { path: "manage.py", desc: "Django management utility." },
        ],
      },
      jsCore: {
        eyebrow: "JAVASCRIPT AS THE CORE",
        title: "JavaScript did the heavy lifting.",
        text: "Every email action — loading a mailbox, reading a message, archiving, replying, composing — is handled in JavaScript. The browser asks the API, and the page updates itself in response.",
        bullets: [
          "Asynchronous fetch requests",
          "User interaction handling",
          "DOM manipulation",
          "Changing mailbox views",
          "Rendering email content",
          "Managing the client-side flow",
        ],
      },
      learning: {
        eyebrow: "WHAT THIS PROJECT TAUGHT ME",
        title: "The front end is the app.",
        subtitle: "A single page, a backend API, and JavaScript that holds the whole experience together.",
      },
      pipeline: {
        eyebrow: "TECHNICAL PIPELINE",
        title: "From click to screen.",
        text: "This is the project's key story: a user action, a JavaScript event, a fetch, backend data, and a DOM update — the complete round trip that keeps the page feeling alive.",
        chain: ["USER ACTION", "JAVASCRIPT EVENT", "FETCH REQUEST", "BACKEND API", "RESPONSE DATA", "DOM MANIPULATION", "UPDATED UI"],
        note: "click → request → response → render",
      },
      cta: {
        title: "Want to see the code?",
        text: "The whole single-page client lives on GitHub — and the screencast walks through it.",
      },
      screencastHref: "https://youtu.be/pvPQ_UUkhbA?si=0GlpQkQbAP_Z_B5Q",
    },
  },
  network: {
    slug: "network",
    seoDescription:
      "Network is a social network built with Django for CS50W — posts, profiles, following, likes, AJAX interactions, and paginated feeds. Explore where people and posts connect.",
    heroTechs: ["Python", "Django", "JavaScript", "HTML", "CSS", "AJAX", "Bootstrap 4", "SQLite"],
    idea: {
      eyebrow: "THE IDEA",
      heading: "People, posts, and the connections between them.",
      paragraphs: [
        "Network is a social media web application built with Django as part of Harvard's CS50 Web Programming with Python and JavaScript (CS50W). It explores how a social-media-style application comes together — users creating posts, connecting with other users, and interacting with each other's content.",
        "The project combines users, posts, following, likes, AJAX, and pagination into one connected application. The backend handles the data and logic; JavaScript adds the responsive, no-reload feel.",
      ],
      note: "a social network, one Django app",
    },
    featureGroups: [
      {
        id: "newposts",
        index: "01",
        title: "New posts",
        items: [
          "Create new posts from anywhere",
          "Publish them straight into the application",
          "Compose and submit in one flow",
        ],
      },
      {
        id: "allposts",
        index: "02",
        title: "All posts",
        items: [
          "Browse all posts in a paginated feed",
          "See every post regardless of who wrote it",
        ],
      },
      {
        id: "editposts",
        index: "03",
        title: "Edit posts",
        items: [
          "Edit your own posts",
          "AJAX-powered updates without a full page reload",
        ],
        featured: true,
      },
      {
        id: "profiles",
        index: "04",
        title: "Profiles",
        items: [
          "A profile page for every user",
          "See their posts, followers, and following",
        ],
      },
      {
        id: "following",
        index: "05",
        title: "Following",
        items: [
          "Follow and unfollow other users",
          "A dedicated Following feed for personalized browsing",
        ],
      },
      {
        id: "likes",
        index: "06",
        title: "Likes",
        items: [
          "Like and unlike posts",
          "Like counts update dynamically",
        ],
      },
      {
        id: "pagination",
        index: "07",
        title: "Pagination",
        items: [
          "Paginated post feeds",
          "Paginated profile pages and Following feed",
        ],
      },
    ],
    stack: [
      { label: "Backend", value: ["Python", "Django"] },
      { label: "Client", value: ["JavaScript", "AJAX", "HTML", "CSS"] },
      { label: "Styling", value: ["Bootstrap 4"] },
      { label: "Data", value: ["SQLite"] },
    ],
    highlights: [
      { heading: "Django application development", text: "Views, routing, models, and server-side behaviour all live in one Django project." },
      { heading: "JavaScript / AJAX interactions", text: "Core actions use AJAX so the page stays put while the data behind it changes." },
      { heading: "DOM updates", text: "Posts, like counts, and follow states update in place through the DOM." },
      { heading: "User relationships", text: "Following and followers give the app its social graph — and its personalized feed." },
      { heading: "Follow / unfollow logic", text: "The relationship between users is created and removed through clean, AJAX-backed endpoints." },
      { heading: "Like / unlike logic", text: "A toggle that tracks, persists, and renders the like state of every post." },
      { heading: "Pagination", text: "Feeds and profiles are split into pages so content stays readable." },
      { heading: "Profile pages", text: "Each user gets their own page with their posts and their connection counts." },
      { heading: "Server / client interaction", text: "Django answers the front end, and the front end decides what to repaint." },
    ],
    screenshots: [
      { kind: "placeholder", label: "01 — All posts" },
      { kind: "placeholder", label: "02 — Profile" },
      { kind: "placeholder", label: "03 — Following feed" },
      { kind: "placeholder", label: "04 — Post editing" },
      { kind: "placeholder", label: "05 — Like / follow interactions" },
    ],
    details: [
      { label: "Project", value: "Network" },
      { label: "Category", value: "CS50W project" },
      { label: "Built with", value: "Python, Django, JavaScript, HTML, CSS, AJAX, Bootstrap 4, SQLite" },
      { label: "Repository", value: "github.com/ujjwaluzu/cs50w-network" },
    ],
    network: {
      context: {
        eyebrow: "BUILT WITH CS50W",
        heading: "From idea to feed.",
        text: "Network was built as part of Harvard's CS50 Web Programming with Python and JavaScript. The project applies Django and JavaScript concepts to a social-media-style web application.",
        tag: "CS50W project",
        stamp: "a social network, by hand",
      },
      heroIntro:
        "A Django-powered social network where users can post, follow, like, edit, and explore a personalized feed through AJAX-driven interactions.",
      heroNote: "posts, profiles, following, likes.",
      ideaCombo: ["USERS", "POSTS", "FOLLOWING", "LIKES", "AJAX", "PAGINATION"],
      socialGraph: {
        eyebrow: "THE SOCIAL GRAPH",
        title: "People. Posts. Connections.",
        text: "The whole application is built on two simple loops: creators publish content, and users connect with each other. Everything else flows from those.",
        flows: [
          {
            label: "CONTENT LOOP",
            steps: ["USER", "CREATES POST", "OTHER USERS SEE IT", "LIKE / INTERACT"],
          },
          {
            label: "CONNECTION LOOP",
            steps: ["USER", "FOLLOWS ANOTHER USER", "FOLLOWING FEED", "SEES THEIR POSTS"],
          },
        ],
      },
      ajax: {
        eyebrow: "AJAX EXPERIENCE",
        title: "No need to reload.",
        text: "AJAX powers the interactions that should feel instant. Instead of a full browser refresh, the client makes a request in the background and the page updates just the part that changed.",
        interactions: ["EDIT POST", "FOLLOW / UNFOLLOW", "LIKE / UNLIKE"],
        chain: ["USER ACTION", "JAVASCRIPT / AJAX", "DJANGO", "RESPONSE", "PAGE UPDATE"],
        note: "in-place updates, no full reload",
      },
      posts: {
        eyebrow: "POSTS",
        title: "The posting loop.",
        text: "Users create new posts, browse the feed, and edit their own posts. Editing is AJAX-powered — the post interface updates in place without a full page reload.",
        chain: ["CREATE", "PUBLISH", "VIEW", "EDIT", "INTERACT"],
      },
      profiles: {
        eyebrow: "PROFILES",
        title: "Your profile, your network.",
        text: "Every user has a profile page that brings their corner of the network together: the posts they've made, their follower count, and their following count.",
        items: ["The user's posts", "Follower count", "Following count"],
      },
      following: {
        eyebrow: "FOLLOWING SYSTEM",
        title: "Building the feed.",
        text: "Following creates the personalized side of the network: a dedicated Following feed shows the posts of the users you follow.",
        chain: ["USER A", "FOLLOWS", "USER B", "USER B'S POSTS", "FOLLOWING FEED"],
        points: ["Follow users", "Unfollow users", "Dedicated Following feed", "AJAX-powered follow / unfollow"],
      },
      likes: {
        eyebrow: "LIKE SYSTEM",
        title: "Like. Unlike. Update.",
        text: "Likes are a simple toggle. The like count updates in place through an AJAX request — no page refresh needed to see the number change.",
        like: ["♡ LIKE", "AJAX", "LIKE COUNT"],
        unlike: ["♥ UNLIKE", "AJAX", "UPDATED COUNT"],
        note: "the count changes in place",
      },
      pagination: {
        eyebrow: "PAGINATION",
        title: "Keeping the feed moving.",
        text: "Content is split across pages so long feeds stay readable.",
        targets: ["Post feeds", "Profile pages", "Following feed"],
      },
      hood: {
        eyebrow: "UNDER THE HOOD",
        title: "One app, a few layers.",
        subtitle: "Django owns the data and logic, JavaScript makes it feel alive, and the structure stays simple.",
        columns: [
          { label: "DJANGO", items: ["Application logic", "Views", "Routing", "Server-side behaviour"] },
          { label: "JAVASCRIPT", items: ["AJAX interactions", "Dynamic interface updates", "Client-side behaviour"] },
          { label: "HTML / CSS", items: ["Page structure", "Styling"] },
          { label: "BOOTSTRAP 4", items: ["Interface / layout utilities"] },
          { label: "SQLITE", items: ["Application data storage"] },
        ],
      },
      model: {
        eyebrow: "CORE APPLICATION MODEL",
        title: "Users to posts. Posts to likes.",
        text: "Users and posts are connected through social interactions: every user can publish posts, follow other users, and be followed, while posts collect likes.",
      },
      auth: {
        eyebrow: "AUTHENTICATION",
        title: "The account flow.",
        text: "A standard, documented loop: register an account, log in, use the network, and log out when you're done.",
        steps: ["REGISTER", "LOGIN", "USE NETWORK", "LOGOUT"],
      },
      feed: {
        eyebrow: "THE FEED",
        title: "From everyone to following.",
        text: "Network offers different views into posts. The Following feed personalizes what the user sees based on the users they follow — nothing more, nothing invented.",
        views: [
          { label: "ALL POSTS", text: "Every post in the application, in one paginated feed." },
          { label: "FOLLOWING", text: "Only the posts of users you follow, in their own feed." },
        ],
      },
      learning: {
        eyebrow: "WHAT THIS PROJECT TAUGHT ME",
        title: "The web is a conversation.",
        subtitle: "A social app is really about the requests and responses between users, servers, and pages.",
      },
      structure: {
        eyebrow: "PROJECT STRUCTURE",
        title: "A Django application.",
        text: "A single Django application powers the whole experience — views serve the data, templates render it, and JavaScript keeps the interface responsive.",
        chain: ["DJANGO APPLICATION", "VIEWS", "TEMPLATES", "JAVASCRIPT / AJAX", "DYNAMIC UI"],
      },
      flow: {
        eyebrow: "TECHNICAL FLOW",
        title: "From click to update.",
        text: "This is the request round-trip behind every AJAX interaction — a user action, a background request, a server response, and a DOM update. No WebSockets, no real-time stream, just clean requests and responses.",
        chain: ["USER CLICKS", "JAVASCRIPT", "AJAX REQUEST", "DJANGO", "SERVER RESPONSE", "DOM UPDATE", "USER SEES CHANGE"],
        note: "click, request, respond, repaint",
      },
      cta: {
        title: "Want to see the code?",
        text: "The full social network lives on GitHub — the Django application, its templates, and the AJAX layer.",
      },
    },
  },
  ghprofile: {
    slug: "ghprofile",
    seoDescription:
      "ghprofile is a lightweight Python library for fetching and summarizing a GitHub user's public profile and repository statistics — bio, followers, repositories, stars, and pinned repos.",
    heroTechs: ["Python", "GitHub API", "PyPI"],
    idea: {
      eyebrow: "THE IDEA",
      heading: "GitHub data, straight into Python.",
      paragraphs: [
        "ghprofile was created as a lightweight abstraction around GitHub profile information. Instead of repeatedly implementing API requests and profile parsing logic, the library provides a compact Python interface for retrieving common GitHub information.",
        "It is not a web application — it is a Python package anyone can install and import. Where the CS50W projects put Django on a server, ghprofile puts a small library on your machine.",
      ],
      note: "import it, point it, get data",
    },
    featureGroups: [
      {
        id: "profile",
        index: "01",
        title: "Profile information",
        items: [
          "Get a GitHub user's bio",
          "Get followers count",
          "Get following count",
        ],
      },
      {
        id: "repositories",
        index: "02",
        title: "Repositories",
        items: ["List all public repositories"],
      },
      {
        id: "stars",
        index: "03",
        title: "Stars",
        items: ["Count total stars across repositories"],
      },
      {
        id: "pinned",
        index: "04",
        title: "Pinned repositories",
        items: ["Fetch pinned repositories via scraping"],
      },
      {
        id: "errors",
        index: "05",
        title: "Error handling",
        items: ["Custom exception handling for failed API calls"],
      },
      {
        id: "api",
        index: "06",
        title: "Simple API",
        featured: true,
        items: ["Designed to be simple to use and extend"],
      },
    ],
    stack: [
      { label: "Language", value: ["Python"] },
      { label: "Data source", value: ["GitHub API"] },
      { label: "Ecosystem", value: ["Python package / library"] },
      { label: "Extras", value: ["GitHub scraping (pinned repos)"] },
    ],
    highlights: [
      { heading: "Packaging a Python library", text: "Taking small, useful functionality and turning it into an installable, reusable package." },
      { heading: "Designing a small public API", text: "A handful of clearly named methods — get_bio, get_followers, get_repo, get_stars, get_pinned_repos." },
      { heading: "Interacting with the GitHub API", text: "Fetching public profile and repository data through GitHub's REST API." },
      { heading: "Handling API errors", text: "Failed calls are wrapped under a custom GhprofileError exception the caller can catch." },
      { heading: "Working with rate limits", text: "Token-based access changes the documented API call allowance." },
      { heading: "Repository-level statistics", text: "Computing totals like the star count across a user's repositories." },
      { heading: "Combining API and scraping", text: "Bringing the GitHub API together with scraping for pinned repositories." },
      { heading: "Publishing to PyPI", text: "The package is published and installable through pip — with a real PyPI project page." },
    ],
    screenshots: [
      { kind: "placeholder", label: "01 — PYPI PACKAGE" },
      { kind: "placeholder", label: "02 — PYTHON IMPORT" },
      { kind: "placeholder", label: "03 — PROFILE DATA" },
      { kind: "placeholder", label: "04 — REPOSITORY STATS" },
    ],
    details: [
      { label: "Project", value: "ghprofile" },
      { label: "Category", value: "Python library" },
      { label: "Built with", value: "Python / GitHub API" },
      { label: "Distribution", value: "PyPI" },
      { label: "Repository", value: "github.com/ujjwaluzu/ghprofile" },
      { label: "Package", value: "pypi.org/project/ghprofile/" },
      { label: "License", value: "MIT" },
    ],
    ghprofile: {
      heroIntro:
        "A lightweight Python library for fetching and summarizing GitHub profile and repository data through a simple Python interface.",
      heroNote: "install it, import it, query it",
      ideaCombo: ["GITHUB PROFILE", "REPOSITORIES", "STARS", "PINNED REPOS", "SIMPLE PYTHON API"],
      whyLibrary: {
        eyebrow: "WHY A LIBRARY?",
        title: "Turn the API into a tool.",
        subtitle:
          "The goal is to make GitHub profile and repository information easier to retrieve from Python through a simple, reusable library. Instead of exposing users directly to every API call, ghprofile provides methods such as:",
        methods: ["get_bio()", "get_followers()", "get_repo()", "get_stars()", "get_pinned_repos()"],
      },
      fetches: {
        eyebrow: "WHAT IT FETCHES",
        title: "One profile. More signal.",
        subtitle: "Six facts about any GitHub user, through one small interface.",
        items: [
          { label: "BIO", title: "Bio", text: "Retrieve a user's GitHub bio." },
          { label: "FOLLOWERS", title: "Followers", text: "Retrieve follower count." },
          { label: "FOLLOWING", title: "Following", text: "Retrieve following count." },
          { label: "REPOSITORIES", title: "Repositories", text: "List public repositories." },
          { label: "STARS", title: "Stars", text: "Calculate total stars across repositories." },
          { label: "PINNED", title: "Pinned", text: "Fetch pinned repositories." },
        ],
      },
      flow: {
        eyebrow: "FROM USERNAME TO DATA",
        title: "From username to profile.",
        subtitle: "A username in, a Python object out — the whole point of the library.",
        steps: ["USERNAME", "GHPROFILE", "GITHUB DATA", "PYTHON OBJECT", "RESULT"],
        calls: ["get_bio()", "get_followers()", "get_repo()", "get_stars()", "get_pinned_repos()"],
      },
      simpleApi: {
        eyebrow: "SIMPLE API",
        title: "Simple by design.",
        subtitle: "The documented interface is intentionally small, named, and straightforward.",
        methods: ["gh.get_bio()", "gh.get_followers()", "gh.get_repo()", "gh.get_stars()", "gh.get_pinned_repos()"],
      },
      auth: {
        eyebrow: "AUTHENTICATION",
        title: "Token optional.",
        without: {
          label: "WITHOUT TOKEN",
          items: ["Public data", "Lower API rate limit", "Simple setup"],
        },
        with: {
          label: "WITH TOKEN",
          items: ["Higher API rate limit", "Private data access", "Token passed into Ghprofile"],
        },
        note: "Rate limits are documented by the project and originate from GitHub's API access model.",
      },
      pinned: {
        eyebrow: "PINNED REPOSITORIES",
        title: "The pinned part.",
        text: "The library can fetch a GitHub user's pinned repositories. The project's documentation notes that pinned repositories are retrieved via scraping — not through an official GitHub API endpoint.",
      },
      errorHandling: {
        eyebrow: "ERROR HANDLING",
        title: "Fail loud. Fail cleanly.",
        text: "Errors are wrapped under the custom GhprofileError class, so a failed API call raises a single, catchable exception instead of leaking raw API failures.",
        chain: ["API / USER ERROR", "CUSTOM EXCEPTION", "APPLICATION CAN HANDLE IT"],
      },
      hood: {
        eyebrow: "UNDER THE HOOD",
        title: "A small conceptual architecture.",
        subtitle: "The library sits between your Python application and GitHub.",
        chain: ["PYTHON APPLICATION", "GHPROFILE", "GITHUB API — PROFILE / REPOSITORY DATA", "PINNED REPO SCRAPING", "PYTHON RESULTS"],
        columns: [
          { label: "PYTHON APPLICATION", items: ["Calls the public API"] },
          { label: "GHPROFILE", items: ["Small Python interface"] },
          { label: "GITHUB API", items: ["Profile data", "Repository statistics"] },
          { label: "SCRAPING", items: ["Pinned repositories"] },
        ],
      },
      packageStructure: {
        eyebrow: "PACKAGE STRUCTURE",
        title: "A library you import.",
        files: [
          { path: "ghprofile.core", desc: "The documented public module — where Ghprofile and GhprofileError live.", featured: true },
          { path: "Ghprofile", desc: "The main class. Pass a username (and optionally a token) to start querying." },
          { path: "GhprofileError", desc: "The custom exception class wrapping failed API calls." },
        ],
      },
      contributing: {
        eyebrow: "CONTRIBUTING",
        title: "Built to extend.",
        subtitle:
          "The project's documentation welcomes contributions — new features, improved error handling, test coverage, refactoring, and optimization. Ideas such as commit history and language breakdown appear there as possible future work, not as features that exist today.",
        items: ["New features", "Improved error handling", "Test coverage", "Refactoring", "Optimization"],
      },
      learning: {
        eyebrow: "WHAT THIS PROJECT TAUGHT ME",
        title: "From script to package.",
        subtitle:
          "This project demonstrates packaging Python functionality into a reusable library, designing a small public API, interacting with the GitHub API, handling API errors, working with rate limits, retrieving repository-level statistics, combining API access with scraping, and publishing a package to PyPI.",
      },
      pypi: {
        eyebrow: "THE PYPI MOMENT",
        title: "Published. Installable. Reusable.",
        subtitle: "A pip install away from any Python project.",
      },
      cta: {
        title: "Want to see the code?",
        text: "The whole library lives on GitHub — and you can install it from PyPI.",
        installText: "pip install ghprofile",
      },
    },
  },
};

export function getCaseStudy(slug: string): ProjectCaseStudy | undefined {
  return caseStudies[slug];
}

export const caseStudySlugs = Object.keys(caseStudies);