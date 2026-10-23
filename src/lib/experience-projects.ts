// Product facts reviewed against linked first-party sources on 2026-10-23.
// Contributions: existing portfolio record plus the owner-supplied Sep–Oct 2026 work tracker.
// Keep completed work, pending publication, and product capabilities distinct.
export const experienceProjects = [
  {
    "slug": "xrepai",
    "name": "XrepAI",
    "url": "https://www.xrepai.com/",
    "category": "AI sales development representative",
    "logo": "/assets/experience-xrepai-logo.webp",
    "logoWidth": 1189,
    "logoHeight": 524,
    "about": "XrepAI is an AI sales development representative for websites. It answers from approved business content, qualifies visitors, enriches leads where supported, connects conversations to CRM and calendar workflows, and hands conversations to salespeople.",
    "work": [
      "Implemented the landing page and the updated home, how-it-works, features, integrations, pricing, and footer-page interfaces.",
      "Integrated Mailgun for newsletter, support, and pricing flows; tested email sending for contact, newsletter, and pricing forms.",
      "Added form and email validation, sign-in and demo-scheduling interfaces, pricing popups, and email-status UI.",
      "Created AI avatars and hero visuals, added homepage scroll animation, and tested layouts across mobile and desktop viewports.",
      "Updated content and homepage title, description, metadata, and JSON-LD; fixed reported UI bugs and the trust-page document-request flow."
    ],
    "detail": {
      "seoTitle": "XrepAI | AI Sales Representative — IntelligenceX Experience",
      "seoDescription": "XrepAI’s AI sales workflow and Ujjwal Baunthiyal’s IntelligenceX experience: frontend UI, Mailgun flows, form validation, shared API helpers, and responsive testing.",
      "heading": "XrepAI: Building an AI Sales Experience",
      "title": "An AI sales representative for website conversations",
      "intro": "XrepAI is an AI sales development representative (AI SDR) for business websites. It helps sales, marketing, and revenue operations teams turn visitor questions into qualified leads and scheduled conversations. This portfolio account covers my frontend, API integration, and visual design work during an IntelligenceX internship.",
      "sections": [
        {
          "title": "XrepAI, xRep, and Lina",
          "text": "The official website styles the product name as xRepAI and calls its website representative xRep. Lina is an AI assistant persona presented in the experience. The product’s terms identify its service provider as xRepAI, Inc. My work is recorded here under my IntelligenceX internship; that experience context does not establish the product’s corporate ownership.",
          "sources": [
            "identity",
            "terms"
          ]
        },
        {
          "title": "The gap between interest and a sales conversation",
          "text": "A visitor comparing software or pricing may need an answer before they are ready to fill out a form. XrepAI supports that first conversation using approved website content, documentation, FAQs, and pricing. B2B SaaS teams can use it for product questions and demo qualification; sales and revenue operations teams can use the collected context for follow-up.",
          "sources": [
            "website"
          ]
        },
        {
          "title": "From a visitor question to a qualified meeting",
          "text": "The published workflow starts with engagement by text, voice, or live video, depending on configuration. Answers draw on the business’s approved content. Qualification gathers budget, authority, need, and timing (BANT); enrichment can add available company information from a business email. A prospect can then choose a meeting time from connected calendar availability. Human handoff carries the conversation and qualification context into the next sales conversation.",
          "sources": [
            "workflow"
          ]
        },
        {
          "title": "Connecting the conversation to the sales stack",
          "text": "The integrations directory lists Salesforce and HubSpot among CRM options, Google Calendar and Calendly for scheduling, and Slack and Microsoft Teams for communication. These connections support a workflow from website conversation to lead record, meeting, and follow-up. Availability and synchronization behavior depend on the integration, plan, permissions, and configuration. The directory describes product capabilities; it does not identify which individual integrations I implemented.",
          "sources": [
            "integrations"
          ]
        }
      ],
      "skills": [
        "Frontend implementation",
        "Mailgun API integration",
        "Form validation",
        "Responsive UI testing",
        "Metadata and JSON-LD",
        "Avatar and hero design"
      ],
      "links": [
        {
          "id": "website",
          "label": "Official XrepAI website",
          "url": "https://www.xrepai.com/"
        },
        {
          "id": "workflow",
          "label": "XrepAI visitor-to-meeting workflow",
          "url": "https://www.xrepai.com/how-it-works"
        },
        {
          "id": "integrations",
          "label": "XrepAI integrations and availability",
          "url": "https://www.xrepai.com/integrations"
        },
        {
          "id": "identity",
          "label": "About xRep and Lina",
          "url": "https://www.xrepai.com/about"
        },
        {
          "id": "terms",
          "label": "XrepAI service provider identity",
          "url": "https://www.xrepai.com/terms"
        }
      ],
      "contributionContext": "My work tracker records this interface and integration work across September and October 2026. It includes both the initial landing page and a later UI implementation across the main product pages. The work covers website presentation and communication flows; it does not establish authorship of the sales agent or its underlying AI systems.",
      "engineeringNotes": [
        {
          "title": "Consolidating repeated email and API code",
          "text": "During the cleanup, I merged duplicate API and Mailgun code into shared helpers, removed unused components and dead CSS, and parked the signup flow. Contact, newsletter, and pricing email sending were tested alongside form validation. This made the communication flows a concrete part of my implementation work, beyond the visual layout."
        },
        {
          "title": "Shipping the UI through responsive checks",
          "text": "I implemented the revised home, how-it-works, features, and integrations pages, created AI avatars, and corrected reported interface bugs. My tracker records repeated viewport testing and a completed trust-page document-request fix. The later avatar-video and voice refinements were still marked in progress, so they are not presented here as completed deliverables."
        }
      ]
    },
    "socialImage": "/assets/experience-xrepai-social.png"
  },
  {
    "slug": "aiptx",
    "name": "AIPTx",
    "url": "https://www.aiptx.io/",
    "category": "AI-powered penetration testing",
    "logo": "/assets/experience-aiptx-logo.webp",
    "logoWidth": 668,
    "logoHeight": 134,
    "about": "AIPTx is an AI-powered penetration-testing and vulnerability-assessment platform for security teams. Its published workflow discovers an authorized attack surface, tests candidate weaknesses, captures evidence for validated findings, and prioritizes remediation and retesting.",
    "work": [
      "Updated product UI and imagery across platform, industry, solution, and feature pages, including corrections below the platform hero.",
      "Worked on SEO for the retail industry page and website discoverability for automated agents.",
      "Integrated Mailgun APIs and tested the backend as recorded in the existing project account.",
      "Worked on deployment configuration using render.yaml, compose.yaml, and dockerfile.api, and recorded a temporary test deployment."
    ],
    "detail": {
      "seoTitle": "AIPTx | AI-Powered Penetration Testing — IntelligenceX Experience",
      "seoDescription": "AIPTx’s penetration-testing workflow and Ujjwal Baunthiyal’s IntelligenceX experience with product UI, Mailgun integration, backend testing, SEO, and deployment.",
      "heading": "AIPTx: AI-Powered Security Testing",
      "title": "From attack-surface discovery to a retestable finding",
      "intro": "AIPTx is an AI-powered penetration-testing and vulnerability-assessment platform for security teams assessing authorized applications, APIs, and networks. It connects attack-surface discovery with exploit validation, evidence, and remediation. My IntelligenceX internship work covered product UI, Mailgun API integration, and backend testing.",
      "sections": [
        {
          "title": "Why discovery needs validation",
          "text": "A version match or suspicious response can suggest a weakness without proving that it is exploitable in that environment. AIPTx describes testing those candidates and attempting to reproduce their impact. Validated findings include the request, response, and a reproducible command. Evidence helps an engineer distinguish an observed security failure from a hypothesis that still needs investigation; it does not make testing exhaustive.",
          "sources": [
            "website",
            "platform"
          ]
        },
        {
          "title": "From authorized scope to evidence",
          "text": "The commercial platform documents scope verification before testing, with destructive actions disabled by default. Reconnaissance maps reachable assets and entry points; agents test candidate vulnerabilities, classify findings, and assess attack chains in deeper runs. Web applications, API targets, and network ranges have different configuration needs. Authenticated testing can compare supplied roles to investigate access-control failures.",
          "sources": [
            "platform",
            "docs"
          ]
        },
        {
          "title": "Prioritizing fixes and checking the result",
          "text": "AIPTx’s risk model considers exploitability, impact, asset value, and exposure alongside vulnerability severity. That context helps teams decide which issue to fix first. Reports carry evidence and remediation guidance into engineering workflows, with documented CI/CD integrations and export formats including SARIF. Retesting checks whether a reported issue can still be reproduced after a change.",
          "sources": [
            "risk",
            "platform",
            "company"
          ]
        },
        {
          "title": "Commercial assessments and the public framework",
          "text": "IntelligenceX lists AIPTx as a penetration-testing service with offensive specialists validating findings. Separately, the public AIPTx repository describes an AI-assisted framework for scan orchestration, static and dynamic analysis, and reporting. Its README states that configuration and human judgment remain necessary and that it does not replace manual penetration testing. The repository is useful implementation context, but should not be treated as a complete description of the commercial service.",
          "sources": [
            "company",
            "repository"
          ]
        }
      ],
      "skills": [
        "Product UI",
        "Mailgun API integration",
        "Backend testing",
        "Technical SEO",
        "Docker and deployment configuration"
      ],
      "links": [
        {
          "id": "website",
          "label": "Official AIPTx website",
          "url": "https://www.aiptx.io/"
        },
        {
          "id": "platform",
          "label": "AIPTx assessment workflow and technical scope",
          "url": "https://www.aiptx.io/platform"
        },
        {
          "id": "risk",
          "label": "AIPTx risk prioritization",
          "url": "https://www.aiptx.io/features/risk-prioritization"
        },
        {
          "id": "docs",
          "label": "AIPTx technical documentation",
          "url": "https://docs.aiptx.io/"
        },
        {
          "id": "repository",
          "label": "AIPTx public framework and documented limits",
          "url": "https://github.com/aiptx/aiptx"
        },
        {
          "id": "company",
          "label": "IntelligenceX’s AIPTx service",
          "url": "https://www.intelligencex.org/en/products/aiptx"
        }
      ],
      "contributionContext": "My work tracker adds specific page, SEO, and deployment tasks to the existing record of UI, Mailgun integration, and backend testing. These contributions concern the product website and application delivery. They do not establish ownership of the penetration-testing agents, exploit validation, or risk model.",
      "engineeringNotes": [
        {
          "title": "Interface and deployment work around the product",
          "text": "I corrected imagery and UI below the platform hero and updated visuals across platform, industry, solution, and feature pages. I also worked on the retail page’s SEO. For a temporary deployment, my tracker names Render configuration, a Compose file, and an API Dockerfile. That records deployment work, not a claim about AIPTx’s current production architecture."
        }
      ]
    },
    "socialImage": "/assets/experience-aiptx-social.png"
  },
  {
    "slug": "cspmx",
    "name": "CSPMX",
    "url": "https://www.cspmx.io/",
    "category": "Cloud security posture management",
    "logo": "/assets/experience-cspmx-logo.webp",
    "logoWidth": 668,
    "logoHeight": 134,
    "about": "CSPMX is a cloud security posture management platform for security, IT, and DevSecOps teams. It provides visibility into AWS, Azure, and Google Cloud configurations, identifies misconfigurations and compliance gaps, and supports prioritized remediation and continuous monitoring.",
    "work": [
      "Added and updated content across the CSPMX project.",
      "Made UI changes alongside the content implementation.",
      "Recorded website changes for automated-agent discoverability in the October work tracker; production publication was still pending at that checkpoint."
    ],
    "detail": {
      "seoTitle": "CSPMX | Cloud Security Posture Management — IntelligenceX Experience",
      "seoDescription": "Explore CSPMX’s cloud misconfiguration, compliance, and remediation workflow, alongside Ujjwal Baunthiyal’s content implementation and UI work at IntelligenceX.",
      "heading": "CSPMX: Cloud Security Posture Management",
      "title": "Cloud posture is a continuous operating task",
      "intro": "CSPMX is a cloud security posture management (CSPM) platform for security, IT, and DevSecOps teams. It helps teams see configuration risks across AWS, Microsoft Azure, and Google Cloud and act on misconfigurations and compliance gaps as environments change. My IntelligenceX internship contribution focused on content implementation and UI updates.",
      "sections": [
        {
          "title": "From configuration drift to prioritized action",
          "text": "Cloud accounts change as teams add services, adjust permissions, and expose resources. A periodic assessment can miss later changes. CSPMX describes continuous assessment and monitoring to surface configuration risks and policy violations. Its centralized view connects a finding to the affected resources, relevant compliance controls, and remediation steps so teams can understand why an issue needs attention.",
          "sources": [
            "website",
            "coverage"
          ]
        },
        {
          "title": "Connect, assess, and monitor",
          "text": "The published workflow begins by connecting cloud environments and assessing assets, configurations, and compliance risks. Teams review the resulting posture and prioritize findings before moving into ongoing monitoring. The official about page names AWS, Microsoft Azure, and Google Cloud. Its public material establishes cloud coverage, but does not specify the connector permissions or deployment architecture needed for each provider.",
          "sources": [
            "website",
            "coverage"
          ]
        },
        {
          "title": "Remediation and compliance in the same workflow",
          "text": "CSPMX describes automated correction of predefined misconfigurations and enforcement of security baselines, with manual intervention for complex issues. Compliance checks, audits, and reporting help teams track gaps as configurations change. A mapped control is useful evidence for review; it is not itself a certification or a guarantee of compliance. IntelligenceX’s product entry describes this cycle as connect, scan, remediate, and comply.",
          "sources": [
            "website",
            "company"
          ]
        },
        {
          "title": "Cloud posture and penetration testing serve different needs",
          "text": "CSPMX focuses on ongoing configuration visibility, cloud misconfiguration detection, and compliance management. Penetration testing instead actively tests authorized targets to establish exploitability and impact. The two workflows can inform each other: a posture finding identifies a configuration needing attention, while a penetration test can investigate what that exposure makes possible.",
          "sources": [
            "company"
          ]
        }
      ],
      "skills": [
        "Content implementation",
        "UI updates",
        "Website discoverability",
        "Cloud security product communication"
      ],
      "links": [
        {
          "id": "website",
          "label": "Official CSPMX workflow and capabilities",
          "url": "https://www.cspmx.io/"
        },
        {
          "id": "coverage",
          "label": "CSPMX audience and supported clouds",
          "url": "https://www.cspmx.io/about"
        },
        {
          "id": "company",
          "label": "IntelligenceX’s CSPMX product overview",
          "url": "https://www.intelligencex.org/en/products/cspmx"
        }
      ],
      "contributionContext": "My CSPMX work focused on content and UI, with a later website discoverability task recorded in October 2026. The tracker noted that those later changes still needed publication from the main branch. I therefore do not present that task as a verified production improvement or claim a measured search outcome.",
      "engineeringNotes": [
        {
          "title": "Keeping the contribution scoped to the website",
          "text": "The available project record supports content implementation, UI updates, and work on website discoverability for automated agents. It does not identify the specific discoverability files changed or attribute the cloud connectors, scanning rules, or remediation automation to me."
        }
      ]
    },
    "socialImage": "/assets/experience-cspmx-social.png"
  }
] as const;

export type ExperienceProject = (typeof experienceProjects)[number];

export function getExperienceProject(slug: string): ExperienceProject | undefined {
  return experienceProjects.find((project) => project.slug === slug);
}
