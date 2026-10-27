import { experienceProjects } from "./experience-projects";
import { homeContent } from "./home-content";

type Source = { label: string; url: string; supports: string };
type SourcedCopy = { title: string; text: string; source: keyof typeof intelligencexSources };
type Platform = { slug: string; name: string; purpose: string; url: string };

export const intelligencexSources = {
  company: { label: "IntelligenceX company website", url: "https://www.intelligencex.org/en", supports: "Company focus and reported UK, USA, EU and India coverage." },
  services: { label: "Cybersecurity services", url: "https://www.intelligencex.org/en/services", supports: "Offensive testing and the wider service catalogue." },
  defence: { label: "Managed detection and response", url: "https://www.intelligencex.org/en/services/managed-detection-and-response", supports: "Monitoring, investigation and response services." },
  cloud: { label: "DevSecOps services", url: "https://www.intelligencex.org/en/services/devsecops", supports: "Security checks within development and delivery workflows." },
  compliance: { label: "Compliance and audit directory", url: "https://www.intelligencex.org/en/compliance", supports: "Published global and India-focused compliance service areas." },
  platforms: { label: "IntelligenceX platform directory", url: "https://www.intelligencex.org/en/products", supports: "The eight named platforms; individual overview links appear in the directory above." },
} as const satisfies Record<string, Source>;

export const intelligencexContent = {
  path: "/experience/intelligencex",
  title: "IntelligenceX: Company Guide & My Developer Experience",
  heading: "IntelligenceX: Company, Products & My Developer Experience",
  description: "Explore IntelligenceX’s cybersecurity services and platforms, with Ujjwal Baunthiyal’s firsthand web development work on XrepAI, AIPTx and CSPMX.",
  // Editorial dates: update only after a substantive edit / source review, never at build time.
  updated: "2026-10-27",
  reviewed: "2026-10-27",
  dateLabel: "27 October 2026",
  socialImage: "/assets/intelligencex-guide-social.png",
  socialImageAlt: "IntelligenceX company guide and my developer experience: Ujjwal Baunthiyal, personal portfolio",
  author: "Ujjwal Baunthiyal",
  disclosure: "This is my personal account of IntelligenceX and the web development work I contributed during my internship. Company information is attributed to official sources; implementation details describe my contributions.",
  introduction: "IntelligenceX, at intelligencex.org, is a cybersecurity company whose published services span offensive testing, managed defence, cloud security and compliance. This guide introduces those services and its platform directory, then explains my work on three projects during a three-month Web Developer Internship.",
  identityNote: "The domain matters: this page concerns the company at intelligencex.org. Similar names in search results should not be treated as the same organisation; use the official website linked here to identify the company discussed in this account.",
  atAGlance: [
    { title: "Official website", text: "intelligencex.org, the company source for this guide.", source: "company" },
    { title: "Service areas", text: "Security testing, managed defence, cloud and DevSecOps, and compliance support.", source: "services" },
    { title: "Reported regional coverage", text: "The company describes coverage across the UK, USA, EU and India. This describes its published service reach, not verified office locations.", source: "company" },
  ] satisfies SourcedCopy[],
  relationship: `${homeContent.experience.role} · ${homeContent.experience.duration}. My contributions are documented below and in the linked project accounts.`,
  services: [
    { title: "Offensive testing", text: "IntelligenceX lists penetration testing for applications, APIs, networks and cloud environments, alongside specialised assessments. In plain language, this work investigates how weaknesses in an agreed scope could be exploited and what needs fixing. Its catalogue also includes code review and threat modelling. These are descriptions of the company’s security services, not security assessments that I personally carried out.", source: "services" },
    { title: "Managed defence", text: "Managed detection and response concerns the ongoing work of watching for threats, investigating suspicious activity and coordinating a response. IntelligenceX describes analyst-supported monitoring and incident handling as part of this service. That is a different operating task from a time-bounded penetration test: the emphasis is on recognising and responding to activity as it happens.", source: "defence" },
    { title: "Cloud and DevSecOps", text: "The company’s catalogue includes cloud operations and DevSecOps. DevSecOps brings security checks into the process of building and delivering software, rather than leaving all review to the end. Its published offering includes secure delivery workflows. This provides context for the product environment; my recorded deployment tasks do not establish that I designed or operated the company’s cloud infrastructure.", source: "cloud" },
    { title: "Compliance and audit support", text: "IntelligenceX publishes service areas for ISO 27001, SOC 2, PCI DSS and privacy requirements, alongside India-focused areas including RBI, CERT-In and DPDP. These services concern reviewing controls, identifying gaps and preparing evidence. A listed framework is a description of a service area; it is not evidence that the company, its customers or a product holds a particular certification.", source: "compliance" },
  ] satisfies SourcedCopy[],
  platformIntro: "The company directory groups eight platforms around different security and governance tasks. The summaries below describe their published purpose, with a link to the company’s overview of each. They do not assert current availability, launch dates or independently tested capabilities.",
  platforms: [
    { slug: "consentx", name: "ConsentX", purpose: "Website cookie and tracker consent: scanning, visitor preferences and records of consent.", url: "https://www.intelligencex.org/en/products/consentx" },
    { slug: "darkx", name: "DARKX", purpose: "Dark-web monitoring and threat intelligence to help teams investigate exposure alerts.", url: "https://www.intelligencex.org/en/products/darkx" },
    { slug: "certx", name: "CERTX", purpose: "Governance, risk and compliance workflows, including asset discovery and compliance monitoring.", url: "https://www.intelligencex.org/en/products/certx" },
    { slug: "cspmx", name: "CSPMX", purpose: "Cloud security posture management: finding misconfigurations and supporting remediation and compliance review.", url: "https://www.intelligencex.org/en/products/cspmx" },
    { slug: "cywarex", name: "CYWAREX", purpose: "Security awareness education and phishing simulations, with learning and reporting tools.", url: "https://www.intelligencex.org/en/products/cywarex" },
    { slug: "aiptx", name: "AIPTx", purpose: "AI-assisted penetration testing with findings validation and guidance for remediation.", url: "https://www.intelligencex.org/en/products/aiptx" },
    { slug: "trustdesk", name: "TrustDesk", purpose: "Trust centres and security questionnaire workflows for sharing security information and documents.", url: "https://www.intelligencex.org/en/products/trustdesk" },
    { slug: "regulatorybridge", name: "Regulatory Bridge", purpose: "Tracking regulatory changes and mapping obligations to controls and assigned actions.", url: "https://www.intelligencex.org/en/products/regulatorybridge" },
  ] satisfies Platform[],
  workIntro: "My work at IntelligenceX focused on product websites and interfaces: frontend implementation, content, form and email flows, responsive checks and deployment tasks. The three accounts below link the product context to specific contributions. They do not attribute security auditing, penetration-testing engines or underlying AI systems to me.",
  ownershipNote: "XrepAI appears here because it is part of my internship record. Its inclusion does not assert corporate ownership by IntelligenceX. It is separate from the eight-platform company directory above.",
  // Reuse the maintained records, including their completion limits.
  projects: experienceProjects,
  evidenceNote: "This contribution graph comes from my IntelligenceX work GitHub account. It is a record of activity, not evidence of customer results, code quality or business impact. The written project accounts provide the scope of the work.",
  questions: [
    { question: "Which IntelligenceX does this guide cover?", answer: "The cybersecurity company at intelligencex.org. This is a personal portfolio guide by Ujjwal Baunthiyal, not the company’s official website or an account of every similarly named organisation." },
    { question: "What services does IntelligenceX describe?", answer: "Its catalogue includes offensive testing, managed security, cloud and DevSecOps work, and compliance support. The service summaries above link to the company’s descriptions so readers can check the scope directly." },
    { question: "Which platforms are in its directory?", answer: "ConsentX, DARKX, CERTX, CSPMX, CYWAREX, AIPTx, TrustDesk and Regulatory Bridge. Each serves a different task; the table links to the published overviews rather than assuming all products have the same capabilities." },
    { question: "Does IntelligenceX report coverage in India?", answer: "Yes. Its website names India alongside the UK, USA and EU. That statement is reported company coverage; this guide does not independently verify local offices or delivery arrangements." },
    { question: "What was my role, and which projects did I contribute to?", answer: "My portfolio records a three-month Web Developer Internship and contributions to XrepAI, AIPTx and CSPMX. The project cards describe my work and link to each detailed case study." },
    { question: "Did I build the security or AI systems?", answer: "The documented work concerns interfaces, content, integrations and delivery tasks. It does not establish authorship of AI models, penetration-testing agents, cloud scanning rules or remediation engines. Those product capabilities should not be confused with my contribution." },
  ],
  reviewNotes: [
    "Company and platform descriptions were checked against the official pages linked here. They remain company-published claims, not an independent assessment of service quality or security effectiveness.",
    "The homepage and product directory use inconsistent live/development wording. This guide omits launch-status labels until the sources agree. Check the linked official pages for current product information.",
    "Personal contribution details describe the work completed on each product website and its supporting interfaces.",
  ],
  sections: [
    { id: "company", label: "Company at a glance" },
    { id: "services", label: "Services explained" },
    { id: "platforms", label: "Platform directory" },
    { id: "my-work", label: "My developer work" },
    { id: "questions", label: "Questions and answers" },
    { id: "sources", label: "Sources and review notes" },
  ],
} as const;
