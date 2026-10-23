# IntelligenceX experience SEO implementation

Audit and implementation date: 23 October 2026.

Implementation is complete in the working tree. It has not been deployed by this task. No Search Console or Bing Webmaster Tools account data was available; indexing, selected canonicals, rankings, traffic changes, and external authority are unverified.

**Deployment dependency:** production currently redirects `https://ujjwaluzu.in` to `https://www.ujjwaluzu.in` with HTTP 308. The requested canonical origin is non-`www`. Deploy the code together with the hosting primary-domain change described below. Do not leave the new non-`www` canonical pointing at a URL that redirects back to `www`.

## Original audit

- [x] Inspected repository and local Next.js documentation before editing. Next.js 16.3.5, React 19.2.8, App Router, Tailwind 4, no new dependencies.
- [x] Reviewed `/experience/intelligencex/[slug]`, the IntelligenceX parent, experience directory, homepage, root layout, shared content and schema helpers, header/footer, CSS, sitemap, robots route, proxy, and Next configuration.
- [x] Verified that all three detail routes already use `generateStaticParams`, server-rendered content, `dynamicParams = false`, unique metadata, breadcrumbs, parent links, and related cards. They were not orphaned.
- [x] Found a hostname mismatch with the requested production identity: the shared origin, all generated canonicals, sitemap, and robots sitemap declaration used `www`.
- [x] Found inconsistent `xRepAI`/`XRepAI` and `AIPTx`/`AIPTX` naming across the portfolio. The product definitions were already substantially differentiated, but repeated contribution paragraphs, lists, and FAQs added duplication.
- [x] Existing references were grouped at the end rather than attached to the claims they supported. Product schema lacked explicit page authorship and a stable product identifier. The large social cards used narrow transparent logos without card-sized compositions.
- [x] Existing personal contributions were brief. The owner supplied a September–October 2026 work tracker during implementation; it supports substantially more specific website engineering content.
- [x] Live pre-change checks: all three requested URLs redirected to their `www` equivalents, which returned HTTP 200, self-canonicalized to `www`, and exposed `index, follow`. No `X-Robots-Tag` restriction was observed. Production robots and sitemap returned 200 after the same hostname redirect.
- [x] The repository has no host-redirect rule or restrictive target-page header. Its proxy only handles homepage Markdown negotiation. Existing Next configuration adds discovery Link headers only on `/`. The primary-domain redirect is outside the inspected application code.

## Search snapshot

Searched both bare brands and quoted brands through the available web search tool. These are observations of returned results, not a Google/Bing rank tracker or a location-independent ranking. No portfolio result appeared in the returned samples, including a `site:ujjwaluzu.in` brand search; this does not prove the pages are absent from an index.

| Query | Observed result landscape | Intent and implication |
| --- | --- | --- |
| XrepAI | Similar-name results included [Xrep AI on LinkedIn](https://www.linkedin.com/company/xrepai), which links to `xrep.ai`, and unrelated lexical matches. The supplied `xrepai.com` product was verified directly, but did not appear in this result sample. | Intended product lookup is likely navigational/informational; name ambiguity is substantial. Keep `xrepai.com`, the sales product, and the portfolio context explicit. Do not conflate `xrep.ai`. |
| AIPTx | [Official AIPTx site](https://www.aiptx.io/), its platform/changelog, [public repository](https://github.com/aiptx/aiptx), LinkedIn, and Capterra appeared. Quoted searches also surfaced unrelated fund-symbol material. | Product evaluation, documentation, and security-testing intent are prominent. The official site and repository are established competing destinations. |
| CSPMX | [IntelligenceX's product entry](https://www.intelligencex.org/en/products/cspmx), its product directory, and the unrelated [GPM CSPMx certification](https://www.gpm.org/for-individuals/certification/cspmx) appeared. | Mixed product and certification intent. Explicit cloud-security positioning matters. The official `cspmx.io` site was verified directly even where it was absent from the returned sample. |

An official product site naturally answers a navigational brand query. Portfolio relevance alone cannot guarantee outranking it. The useful differentiator here is an attributable account of actual implementation work.

## Verified sources and factual boundaries

All 14 reference URLs listed below returned HTTP 200 during final link verification. `docs.aiptx.io/` redirects to `/docs/introduction`. The web search fetcher could not open XrepAI or CSPMX, but direct HTTP retrieval with a browser user agent succeeded; initial access failures were not treated as evidence that the sites were unavailable.

| Product | First-party material used | Scope verified |
| --- | --- | --- |
| XrepAI | [Homepage](https://www.xrepai.com/), [workflow](https://www.xrepai.com/how-it-works), [integrations](https://www.xrepai.com/integrations), [about](https://www.xrepai.com/about), [terms](https://www.xrepai.com/terms) | Website AI SDR, approved-content answers, BANT qualification, enrichment, scheduling, CRM connections, human handoff, and plan/configuration qualifications. The official styling is `xRepAI`; `xRep` names the representative experience and Lina is a presented assistant persona. Terms identify xRepAI, Inc. as the service provider. |
| AIPTx | [Homepage](https://www.aiptx.io/), [platform](https://www.aiptx.io/platform), [risk prioritization](https://www.aiptx.io/features/risk-prioritization), [documentation](https://docs.aiptx.io/), [repository](https://github.com/aiptx/aiptx), [IntelligenceX service entry](https://www.intelligencex.org/en/products/aiptx) | Discovery, exploit validation and evidence, scope controls, risk-based remediation, reporting, integrations, and retesting. Official documentation links the `aiptx` GitHub organization; the repository links back to the official domain. Its README describes an AI-assisted framework requiring configuration and human judgment. This is distinguished from the commercial service. |
| CSPMX | [Homepage](https://www.cspmx.io/), [about/cloud coverage](https://www.cspmx.io/about), [IntelligenceX product entry](https://www.intelligencex.org/en/products/cspmx) | Continuous posture visibility, configuration and compliance risks, supported AWS/Azure/Google Cloud environments, contextual prioritization, remediation, and manual intervention for complex issues. No unverified connector implementation or detailed compliance-framework catalog was added. |

IntelligenceX's public directory verifies the AIPTx and CSPMX product relationship. XrepAI is associated with the internship through the owner's portfolio and tracker, without an inferred corporate-ownership relationship. No public XrepAI or CSPMX source repository was verified or added.

## Content changes and differentiation

**XrepAI:** Defines the sales product immediately and separates the platform name from xRep and Lina. Explains visitor engagement, grounded answers, qualification, enrichment, calendar booking, CRM continuity, and human handoff. The personal account now covers the landing and product-page UI, Mailgun newsletter/support/pricing flows, form validation, contact-email tests, shared API/Mailgun helpers, cleanup, responsive checks, avatars/hero work, metadata/JSON-LD, and the completed trust-page document-request fix. Later avatar-video and voice tasks remain explicitly unfinished in the source record rather than claimed as shipped.

**AIPTx:** Explains why a candidate weakness is not the same as an evidenced exploit; follows scope, discovery, validation, prioritization, and retesting. Separates commercial assessments from the public AI-assisted framework. Personal work includes platform/industry/solution/feature visuals, retail-page SEO, existing documented Mailgun integration and backend testing, and tracker-supported Render/Compose/API Dockerfile deployment work. A temporary test deployment is not presented as current production architecture.

**CSPMX:** Explains changing cloud configurations, continuous oversight, affected-resource and control context, prioritization, remediation, and compliance monitoring. Clearly distinguishes posture management from penetration testing. Personal attribution remains content/UI implementation and the tracker-recorded automated-agent discoverability work. Its publication was pending at that tracker checkpoint; no deployed improvement or numeric score is claimed.

Product statements have contextual source links. Repeated FAQ answers and the duplicate contribution paragraph were replaced with one contribution list, scope context, and specific engineering notes. Existing visual components, logos, routing, animations, colors, and responsive layouts are retained. Personal content remains centralized in `src/lib/experience-projects.ts`; no fabricated framework, employment dates, customer figures, or results were added.

## Metadata, schema, and discoverability

| Route suffix | Title |
| --- | --- |
| `/xrepai` | XrepAI \| AI Sales Representative — IntelligenceX Experience |
| `/aiptx` | AIPTx \| AI-Powered Penetration Testing — IntelligenceX Experience |
| `/cspmx` | CSPMX \| Cloud Security Posture Management — IntelligenceX Experience |

- Unique descriptions reflect each product and the specific contribution. Each page retains one brand-led H1 and meaningful H2/H3 structure in the initial HTML.
- Unique Open Graph/Twitter titles, descriptions, canonical URLs, and 1200 × 630 PNG cards. Cards show the existing product logo, product category, contributor, and portfolio context. Original transparent artwork is unchanged. Image dimensions and alt text are declared.
- Cleared inherited meta keywords on the three target routes. No keyword blocks or new keyword metadata.
- Extended `WebPage` with a stable product `Thing`, page `author`, source citations, related URLs, image identity, and language. Reused the existing Person identity and centralized the WebSite identity to keep them consistent with the homepage. Added only a minimal, verified IntelligenceX `Organization` mention; it is not declared the owner of every product. The author of the portfolio page is not declared the creator of the product.
- Kept `BreadcrumbList` aligned with visible Home → Experience → IntelligenceX → Product navigation. No FAQPage, ratings, reviews, awards, prices, or fabricated dates.
- Changed the shared production origin to `https://ujjwaluzu.in`. This intentionally updates **all consumers** of the shared origin, including other portfolio canonicals, social URLs, schema IDs, sitemap entries, and the robots sitemap declaration. It is a sitewide hostname alignment, not just three isolated tags.
- The existing sitemap still includes all 28 valid routes, including all three target pages, with no foreign subdomain URLs. Its implementation did not need replacement. No artificial `lastmod` or timestamp churn was introduced.
- Kept `Allow: /`, `Disallow: /api/`, and `Content-Signal: ai-train=no, search=yes, ai-input=no`. No AI-crawler permissions were broadened. That existing AI-input preference may affect use by systems that honor it; changing it requires an intentional policy decision, not an SEO assumption.
- Strengthened the parent's card anchors with product names and categories. Existing homepage → experience → IntelligenceX discovery, breadcrumbs, official-site links, and cross-product cards remain crawlable HTML anchors.

## Validation

| Check | Result |
| --- | --- |
| `npm run lint` | Passed; rerun after adding verification scripts. |
| `npx tsc --noEmit` | Passed. |
| `npm run build` | Passed on Next.js 16.3.5; all three targets listed as SSG; homepage and parent prerendered. |
| `python scripts/verify-experience-seo.py http://localhost:3100 --external` | Passed: HTTP responses, title/description uniqueness, canonicals, social metadata/images, robots, JSON-LD syntax/identity relationships, breadcrumbs, source links, internal hierarchy, image attributes/assets, and sitemap XML. |
| Sitemap | 28 unique HTTPS non-`www` URLs; all three targets present; no API/docs or query variants. |
| Source links | 14/14 returned 200, allowing the documented AIPTx docs redirect. |
| Browser QA | 320, 390, 768, and 1440 px for all three pages; no document or content overflow. Desktop/mobile screenshots inspected. Parent also checked at 390/1440 px. |
| Rendering | Primary content and contributions visible with JavaScript disabled on all three routes. No browser console/hydration errors in the completed detail-page run. Mobile menu opened with Enter and closed with Escape. |
| Motion/assets | Existing reduced-motion rule verified. Images checked by HTTP and browser decoding; no page JavaScript or runtime dependency added by the implementation. |
| Route behavior | Local slash variant returns 308 to no-slash; unknown product slug returns 404. `/`, experience directory, and parent return 200. Homepage is the real portfolio, not a coming-soon interface. |
| Diff hygiene | `git diff --check` passed. |

An initial browser pass timed out waiting for the full `load` event. Investigation found an AIPTx logo optimization request hanging in the local production-server process; restarting that process resolved it, with the same WebP request returning 200. The completed harness waits for DOM content, fonts, image completion, and explicit decoding before screenshots, and passed against the fresh server. No application image workaround was needed. This is not a field performance or Core Web Vitals measurement. Rich Results Test/Schema Markup Validator verification against the deployed URLs, live bot rendering, hosting configuration, and search-engine canonical selection remain production checks.

Local evidence is written under ignored `test-results/`: `experience-seo.json`, `experience-browser.json`, and `experience-screenshots/`. The repeatable HTTP check uses only Python's standard library. `qa-experience.mjs` uses the same Playwright page-harness convention as the repository's other QA scripts; this run used an already cached Playwright installation, without adding project dependencies.

## Changed files

| File | Purpose |
| --- | --- |
| `src/lib/experience-projects.ts` | Central product facts, original copy, source mappings, tracker-backed contributions, engineering notes, metadata, social-card paths. |
| `src/app/experience/intelligencex/[slug]/page.tsx` | Contextual citations, scoped contributions, strengthened schema, social metadata, removal of redundant FAQ. |
| `src/app/experience/intelligencex/page.tsx` | Naming and descriptive product-card anchors; consumes updated shared content. |
| `src/app/experience/page.tsx` | Consistent product naming. |
| `src/lib/site.ts` | Requested canonical production origin. |
| `src/lib/seo-schema.ts` | Shared WebSite entity. |
| `src/app/page.tsx` | Reuses the shared WebSite entity. |
| `src/app/globals.css` | Small source-link and contribution-paragraph spacing rules. |
| `public/assets/experience-xrepai-social.png` | XrepAI social card. |
| `public/assets/experience-aiptx-social.png` | AIPTx social card. |
| `public/assets/experience-cspmx-social.png` | CSPMX social card. |
| `scripts/generate-experience-social.mjs` | Reproducible cards from existing content/logos, using installed Sharp. Requires Node 22.18+ for the TypeScript data import. |
| `scripts/verify-experience-seo.py` | Repeatable local/production HTTP SEO verification. |
| `scripts/qa-experience.mjs` | Responsive, rendering, image, console, and reduced-motion QA. |
| `docs/experience-seo-report.md` | Audit, evidence, remaining gaps, rollout and measurement plan. |

## Remaining information and authority

- Exact frameworks, API endpoints, Mailgun event handling, test cases/results, and user-owned implementation artifacts would support a deeper technical case study. The tracker does not provide those details.
- AIPTx Mailgun/backend work is retained from the original portfolio; the supplied tracker adds UI, SEO, and deployment tasks but does not detail those earlier integrations/tests.
- CSPMX's precise agent-discoverability changes and eventual production publication are not established. The tracker scores are omitted because methodology and reproducible evidence were not supplied.
- XrepAI's corporate relationship to IntelligenceX is not established by the product sources; only the owner's internship contribution is stated.
- Private code is not available for independent implementation review. Approved screenshots, redacted code excerpts, or public pull requests could add verifiable detail if the owner can share them.
- External citations, legitimate employer/product-team attribution, search demand, competing official results, and existing backlink authority remain outside this code change. No external messages, link submissions, or manufactured backlinks were created.

## Deployment and indexing checklist

1. Export the existing search baseline before changing the primary hostname. Use a Search Console Domain property covering both `www` and non-`www`, or retain access to both URL-prefix properties.
2. In hosting/domain settings, make `https://ujjwaluzu.in` the serving origin. Remove the current apex → `www` redirect and configure `www` → apex while preserving path/query. Coordinate this with the code deployment. An opposite application redirect on top of the existing edge redirect would create a loop, so none was added here.
3. Deploy through the established pipeline; confirm the production commit/build actually contains these changes. This task did not deploy or change hosting settings.
4. Confirm each exact URL below returns 200 **without** a hostname redirect or authentication. Confirm old `www` variants permanently redirect to the matching non-`www` URL, trailing slashes normalize, and no route redirects to the homepage. Check HTTP variants and avoid unnecessary multi-hop chains.
5. Run `python scripts/verify-experience-seo.py https://ujjwaluzu.in --external`. It intentionally fails if a canonical target redirects. It checks the production sitemap at `https://ujjwaluzu.in/sitemap.xml` and the robots declaration as well as page HTML.
6. Inspect response headers for `X-Robots-Tag`, caching, and edge overrides; inspect HTML using ordinary, Googlebot, and Bingbot user agents. Verify source text, one canonical, and the correct social image. Example: `curl.exe -I https://ujjwaluzu.in/experience/intelligencex/xrepai` and `curl.exe -A Googlebot https://ujjwaluzu.in/experience/intelligencex/xrepai`.
7. Submit/refresh the sitemap in Google Search Console and Bing Webmaster Tools. Inspect all three URLs, test live rendering, and review crawl/indexing reasons. In Google's indexed report, compare user-declared and Google-selected canonicals; the live test alone cannot establish canonical selection. Request indexing after the live checks pass. [Google URL Inspection guidance](https://support.google.com/webmasters/answer/9012289).
8. Validate deployed JSON-LD with [Schema Markup Validator](https://validator.schema.org/) and [Google Rich Results Test](https://search.google.com/test/rich-results). A valid WebPage or Person entity does not itself confer a rich-result feature.
9. Recheck mobile/desktop screenshots, menu keyboard behavior, images, errors, and production performance. Use field Core Web Vitals if available; use a recorded lab setup otherwise. Recheck a representative homepage/project page because the shared hostname affects the whole site.

| Query | Exact canonical target |
| --- | --- |
| XrepAI | `https://ujjwaluzu.in/experience/intelligencex/xrepai` |
| AIPTx | `https://ujjwaluzu.in/experience/intelligencex/aiptx` |
| CSPMX | `https://ujjwaluzu.in/experience/intelligencex/cspmx` |

## Repeatable branded-query monitoring

In Search Console's Search results report, select Web and each exact query. First inspect the Pages tab **without a page filter** to identify the actual receiving URL, including old `www` URLs or the parent. Then filter to the expected target and export clicks, impressions, CTR, and average position. Save query variations separately, with country/device filters recorded. Use equivalent complete windows, for example 28 days before versus 28 days after deployment; extend both for low volume. Keep baseline, deployment date, filters, and subsequent exports together. Missing query rows are not proof of zero searches, and position changes are not proof of causation. [Search Console performance documentation](https://support.google.com/webmasters/answer/7576553).

Review weekly for crawl/canonical problems, then compare equivalent windows. Record indexing status and selected canonical alongside the metrics. Keep the hostname migration visible in the analysis: traffic credited to an old canonical must not be mistaken for a new page losing demand. Track variations such as XrepAI development/AI sales, AIPTx penetration testing, and CSPMX cloud security, while watching for unrelated acronym intent.

In Bing Webmaster Tools, repeat URL inspection and sitemap/crawl checks and export available branded-query and receiving-page metrics using matching windows. For AI-assisted search, record dated manual query samples and any actual cited URLs separately; neither schema nor crawler permission establishes an AI citation or a ranking gain. No baseline or improvement is asserted in this report.
