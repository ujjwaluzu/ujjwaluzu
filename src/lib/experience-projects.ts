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
      "Built the XrepAI website as my first solo project. I started with a supplied homepage template, implemented a few sections, then independently built the full site UI and all pages.",
      "Integrated Mailgun for newsletter, support, and pricing flows; tested email sending for contact, newsletter, and pricing forms.",
      "Built form validation, demo-scheduling interfaces, pricing popups, and email-status UI.",
      "Created AI avatars, avatar videos, and hero visuals, and added the homepage scroll animation.",
      "Updated site content and homepage metadata, fixed UI issues, and repaired the trust-page document-request flow.",
      "Satyam Sir later added ConsentX cookie management and the Ask Lina bot; those additions were not part of my implementation.",
      "Prepared the site’s content for AI agents; the IsItAgentReady content-profile scan for XrepAI scored 86."
    ],
    "detail": {
      "seoTitle": "XrepAI | AI Sales Representative: IntelligenceX Experience",
      "seoDescription": "My first solo project: I built the XrepAI website, Mailgun flows, UI and AI avatars; its IsItAgentReady content scan scored 86.",
      "heading": "XrepAI: Building an AI Sales Experience",
      "title": "An AI sales representative for website conversations",
      "intro": "XrepAI is an AI sales development representative (AI SDR) for business websites. It helps sales, marketing, and revenue operations teams turn visitor questions into qualified leads and scheduled conversations. It was my first solo project: starting from a supplied homepage template, I implemented a few sections, then built the site's UI and pages independently. I also integrated Mailgun and created AI avatars and videos. Satyam Sir later added ConsentX cookie management and the Ask Lina bot.",
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
        },
        {
          "id": "agentReadiness",
          "label": "IsItAgentReady content-profile scan for XrepAI (score: 86)",
          "url": "https://isitagentready.com/xrepai.com?profile=content"
        }
      ],
      "contributionContext": "I built the XrepAI website independently after beginning from a supplied homepage template. My work covered the page UI, Mailgun and website visuals, not the underlying sales agent or AI system. Satyam Sir later added ConsentX cookie management and the Ask Lina bot; those features were not part of my implementation.",
      "engineeringNotes": [
        {
          "title": "Building the site and its email flows",
          "text": "After implementing a few homepage sections from the supplied template, I built the remaining site UI and pages on my own. I connected Mailgun for contact, newsletter, support, and pricing messages and tested the sending flows with form validation."
        },
        {
          "title": "Creating the visual identity and later additions",
          "text": "I created the AI avatars and avatar videos, hero visuals, and a homepage scroll animation. Satyam Sir later added the ConsentX cookie-management feature and Ask Lina bot; those later additions are distinct from the site I built."
        },
        {
          "title": "Preparing XrepAI’s content for AI agents",
          "text": "I also prepared the site’s content for AI agents. The IsItAgentReady content-profile scan for XrepAI scored 86."
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
      "Built every AIPTx website page except the homepage. Later, improved the UI across all Solutions and Features pages and several Resources pages.",
      "Built the login and signup pages, fixed broken Mailgun implementations, and tested the backend.",
      "Fixed major backend bugs: the dashboard could be opened without completing onboarding, and the pricing page showed $500 while payment was ₹500.",
      "Configured the backend with Render and Neon and got it working.",
      "Designed an R2-D2-inspired robot for the pricing section and a Star Wars-inspired call-to-action section.",
      "Prepared the content for AI agents; IsItAgentReady scored it 86 on the content profile and 60 across all checks."
    ],
    "detail": {
      "seoTitle": "AIPTx | AI-Powered Penetration Testing: IntelligenceX Experience",
      "seoDescription": "AIPTx: Ujjwal’s site, backend, Render, Neon and UI work; IsItAgentReady scores of 86 for content and 60 across all checks.",
      "heading": "AIPTx: AI-Powered Security Testing",
      "title": "From attack-surface discovery to a retestable finding",
      "intro": "AIPTx is an AI-powered penetration-testing and vulnerability-assessment platform for security teams assessing authorized applications, APIs, and networks. It connects attack-surface discovery with exploit validation, evidence, and remediation. During my IntelligenceX internship, I built the AIPTx website except for its homepage, later refined the Solutions, Features and Resources pages, and worked on its login and signup pages, Mailgun integration and backend.",
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
        "Website implementation",
        "Product UI",
        "Login and signup pages",
        "Mailgun API integration",
        "Backend testing and bug fixes",
        "Render and Neon configuration",
        "Illustration and visual design"
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
        },
        {
          "id": "agentReadiness",
          "label": "IsItAgentReady content-profile scan for AIPTx (score: 86)",
          "url": "https://isitagentready.com/aiptx.io?profile=content"
        },
        {
          "id": "agentReadinessAll",
          "label": "IsItAgentReady scan across all checks for AIPTx (score: 60)",
          "url": "https://isitagentready.com/aiptx.io"
        }
      ],
      "contributionContext": "My AIPTx work combined website development and visual design with backend integration, bug fixing and deployment configuration. It covered the product site and app setup, not authorship of the underlying penetration-testing agents or risk model.",
      "engineeringNotes": [
        {
          "title": "Fixing backend issues in the product",
          "text": "While testing the backend, I fixed a dashboard access issue that let users skip onboarding. I also corrected a mismatch where the pricing page displayed $500 while the payment amount was ₹500."
        },
        {
          "title": "Getting the backend running and shaping the interface",
          "text": "I configured the backend with Render and Neon and got it working. I also designed an R2-D2-inspired robot for the pricing section and a Star Wars-inspired call-to-action section, carrying the theme into two prominent parts of the site."
        },
        {
          "title": "Preparing AIPTx content for AI agents",
          "text": "I prepared the site's content for AI agents. Its IsItAgentReady content-profile scan scored 86; the scan across all checks scored 60."
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
      "Wrote and integrated the supplied content across the site, fixing UI issues as they came up.",
      "Built the login and signup page UIs, then commented out those pages because authentication functionality had not been built. Also built all industry and legal pages.",
      "Repaired the broken Mailgun integration.",
      "Prepared the site’s content for AI agents; its IsItAgentReady content scan scored 86."
    ],
    "detail": {
      "seoTitle": "CSPMX | Cloud Security Posture Management: IntelligenceX Experience",
      "seoDescription": "My CSPMX work: site content and UI, commented-out login and signup page UIs, industry and legal pages, a Mailgun fix, and an IsItAgentReady content scan score of 86.",
      "heading": "CSPMX: Cloud Security Posture Management",
      "title": "Cloud posture is a continuous operating task",
      "intro": "CSPMX is a cloud security posture management (CSPM) platform for security, IT, and DevSecOps teams. It helps teams see configuration risks across AWS, Microsoft Azure, and Google Cloud and act on misconfigurations and compliance gaps as environments change.",
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
        "Login and signup pages",
        "Industry and legal pages",
        "Mailgun integration troubleshooting",
        "AI-agent readiness",
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
        },
        {
          "id": "agentReadiness",
          "label": "IsItAgentReady content-profile scan for CSPMX.io (score: 86)",
          "url": "https://isitagentready.com/cspmx.io?profile=content"
        }
      ],
      "contributionContext": "My contribution spanned the CSPMX website, from implementing its supplied content and resolving UI issues to building the login, signup, industry and legal page UIs and repairing the Mailgun integration. The login and signup pages are commented out for now because authentication functionality has not been built.",
      "engineeringNotes": [
        {
          "title": "Preparing CSPMX’s content for AI agents",
          "text": "I also prepared the site’s content for AI agents. The IsItAgentReady content-profile scan for CSPMX.io scored 86."
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
