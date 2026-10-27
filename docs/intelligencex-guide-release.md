# IntelligenceX guide: implementation and release record

Updated 27 October 2026. Local implementation and verification are complete. **Production publication, hostname correction and search-console measurements remain open.** No ranking or citation improvement is claimed.

## Delivered

- `/experience/intelligencex` now has the requested title, description and H1, visible author/review dates, contents links, sourced company overview, service explanations, eight-platform directory, developer contributions, implementation examples, Q&A and source notes. The rendered main content is approximately 1,693 words, including labels and links.
- `src/lib/intelligencex-content.ts` owns the company copy, sources, platforms, dates and metadata. Contributions and engineering examples reuse `experience-projects.ts`. Existing completion limits are preserved, and XrepAI is not declared company-owned.
- Existing paper styling, display typography, accent colours and character artwork remain. A dedicated, reproducible 1200 × 630 social card is in `public/assets/intelligencex-guide-social.png`.
- `src/lib/intelligencex-schema.ts` links WebPage, Person, WebSite, Organization, BreadcrumbList and eight product Things. The author and publisher are Ujjwal. Company and relevant product identities are shared with the child pages. No FAQPage, rating or unsupported certification markup was added.
- The homepage’s internal experience anchor now names IntelligenceX. The experience directory has an employment-focused title and guide link; case studies link back with a descriptive guide label.
- Sitemap `lastmod` for the substantively rewritten guide is the fixed editorial date `2026-10-27`. Builds do not change it.
- Robots preferences are `search=yes, ai-input=yes, ai-train=no`, with a specific GPTBot exclusion. Public search access and `/api/` exclusion are checked separately. This follows [OpenAI’s separate crawler controls](https://developers.openai.com/api/docs/bots); Content Signals remain a declared preference, not an access-enforcement mechanism.
- No new dependencies, analytics packages, paid services, public API or duplicate keyword pages were added.

## Evidence and validation

The company’s [homepage](https://www.intelligencex.org/en), [service catalogue](https://www.intelligencex.org/en/services), [DevSecOps page](https://www.intelligencex.org/en/services/devsecops), [managed defence page](https://www.intelligencex.org/en/services/managed-detection-and-response), [compliance directory](https://www.intelligencex.org/en/compliance) and [platform directory](https://www.intelligencex.org/en/products) were reviewed. Product rows link to their individual official overviews. Conflicting launch wording remains in the company sources, so the guide omits availability labels.

| Check | Observed result |
| --- | --- |
| `npm run lint` | Passed |
| `node node_modules/typescript/bin/tsc --noEmit` | Passed |
| `npm run build` | Passed; guide and homepage prerendered, three case studies statically generated |
| `py scripts/verify-experience-seo.py http://localhost:3101 --external` | Passed: four pages, 28 sitemap URLs, nine assets and 26 official source links |
| Served HTML and JSON-LD | Exact metadata, single H1/canonical, schema identities/references, source attribution, anchor IDs, fixed lastmod and crawler policy passed |
| Browser QA | Guide and all three case studies passed at 320, 390, 768 and 1440 px; no page overflow, broken images or browser/hydration errors |
| Navigation | Contents anchors scroll into view; keyboard activation and visible focus passed; reduced-motion setting respected |
| JavaScript disabled | All seven guide sections visible; contents links work |
| Visual review | Desktop/mobile screenshots reviewed, including the social card |

Local evidence is saved in ignored `test-results/`: `experience-seo.json`, `experience-seo-external.json` (the source-link run), `experience-browser-qa.json`, `experience-screenshots/`, `intelligencex-performance.json` and `intelligencex-production-audit.json`. The homepage and experience directory also returned 200 and had no viewport overflow at 390 and 1440 px. JSON-LD checks validate syntax and intended graph relationships; no hosted Schema Markup Validator or Search Console validation result is claimed.

### Mobile performance sample

Three cold-cache local production loads in headless Chromium 156 at 390 × 844, 4× CPU slowdown, 150 ms latency and 200,000 bytes/sec download throughput:

| Metric | Samples |
| --- | --- |
| LCP | 1.672 s, 1.792 s, 1.844 s |
| FCP | 1.672 s, 1.792 s, 1.844 s |
| CLS | 0 in all three runs |
| Observed long-task blocking time | 334 ms, 454 ms, 159 ms |

These are synthetic local measurements, not field Core Web Vitals or Lighthouse scores. The custom blocking-time observation is not Lighthouse TBT. No equivalent pre-change baseline or INP measurement is available; a performance improvement or absence of regression is not established. The guide introduces no client component or new animation dependency. Repeat against production after release and check Search Console field data when available.

## Production blockers and release sequence

The read-only audit on 27 October 2026 observed apex HTTPS returning 308 to `www`, which returned 200 with the earlier page. Path/query data were preserved in the sampled redirects, and no loop was observed. Requests using Googlebot, Bingbot and OAI-SearchBot user-agent strings reached the earlier public page, but that does not establish access from verified crawler IP ranges. Production still did not declare `ai-input=yes`.

The session has no connected browser, Vercel CLI/project link or authenticated Search Console connection. The owner confirmed having Google Search Console, but no reports were available here. No release branch was specified. No commit, push, hosting edit, indexing submission or outreach was performed.

1. In the existing Vercel project, record the current domain assignments and deployment identifier for rollback. Check the production Git branch before merging this change.
2. Export any available Search Console baseline before changing the hostname. A Domain property covers both hostnames; retain access to old URL-prefix properties if used.
3. Deploy the reviewed changes through the existing release workflow. Make `ujjwaluzu.in` serve the deployment directly and configure `www.ujjwaluzu.in` to redirect permanently to the equivalent apex URL. Remove the opposite redirect as part of the same change. No opposite application redirect has been added, to avoid a loop with the current edge configuration.
4. Run `py scripts/audit-intelligencex-production.py`. It records HTTP/HTTPS, apex/www and query-preserving variants, detects loops, and fails until the intended policy and revised guide are observed.
5. Run `py scripts/verify-experience-seo.py https://ujjwaluzu.in --external`. Confirm canonical endpoints return 200 directly, the social card loads, sitemap dates match and robots policy is deployed. Confirm hosting protection settings permit verified search crawlers; a spoofed user-agent check alone cannot prove that.
6. Review the deployed graph in [Schema Markup Validator](https://validator.schema.org/), inspect mobile rendering, and repeat performance sampling. WebPage/Organization validity does not promise a rich-result feature.
7. Submit `https://ujjwaluzu.in/sitemap.xml` in Search Console and Bing Webmaster Tools. Inspect the guide and three case studies, test live URLs, then request indexing. Record Google's selected canonical from **indexed** inspection; a live test does not establish it.
8. If the hostname switch fails, restore the recorded working domain configuration and deployment, then investigate before retrying. Recheck sitemap and canonicals after rollback; do not leave an opposite redirect active in another layer.

## Search Console baseline and weekly review

Primary target: exact query `intelligencex`, English search intent in India, mobile and desktop reported separately. There is no language filter in Search Console's search-performance report; record India/device/query filters and keep manually sampled Google results set to English.

1. Open Performance → Search results, select **Web**, and choose the latest complete 28-day window available in the account. Record exact dates and reporting lag. Use a preceding complete 28-day window for comparison when available.
2. Add Country = India, Query = Exact query `intelligencex`, Device = Mobile. Start with **no page filter** and export the Pages tab to identify receiving URLs. Record clicks, impressions, CTR and average position. Repeat with Device = Desktop.
3. Repeat with the intended guide page filter to measure that URL, keeping it separate from the unfiltered receiving-page export. Record old `www` URLs if they receive credit.
4. Track company and internship variants separately (for example `intelligencex company`, `intelligencex internship` and `intelligencex web developer`). Track XrepAI/AIPTx/CSPMX on their respective child URLs; do not pool these with the exact primary query.
5. Inspect the guide URL in the indexed report and record indexing status, user-declared canonical and Google-selected canonical. Blank/unavailable query data are not zero demand; start a fresh baseline when no historical data exist.
6. Use `intelligencex-measurement.csv` for exports/observations. Its empty rows are intentional: no search metrics have been invented.

Weekly manual sample: use the same Google India/English setting, query `intelligencex`, device category and sign-in state; date the sample and record both the guide and official company result position, or “not observed within [depth]”. Search Console average position is not a universal live rank.

For AI samples, use fixed questions: “What is IntelligenceX at intelligencex.org?”, “Which platforms does IntelligenceX offer?” and “What did Ujjwal Baunthiyal work on at IntelligenceX?”. Record product, date, country/device if applicable, exact question and cited URL in `intelligencex-search-samples.csv`. Keep citations separate from referrals. Use Bing's AI Performance report if it is available in the account; do not assume access or fabricate a baseline.

## 90-day follow-through

| Period after campaign start | Deliverable |
| --- | --- |
| Days 1–7 | Confirm console properties/access, export baseline and coordinate canonical-domain correction |
| Days 8–14 | Deploy this implementation, run production checks, submit sitemap and inspect/index target URLs |
| Days 15–30 | Review and publish the prepared LinkedIn/GitHub drafts; send factual attribution request only after owner review |
| Days 31–60 | Review query/URL data weekly; improve weak answers or resolve parent/child overlap only when evidence supports it |
| Days 61–90 | Recheck company sources and compare consecutive complete 28-day windows; extend both windows for low volume |

Use `intelligencex-outreach-drafts.md` for the unsent drafts. At the reporting checkpoint record first-page/top-three/first-place outcomes only when observed, alongside changes in impressions, clicks, CTR, receiving URLs and citations. Position #1 remains an ambition with no guaranteed deadline.

## Reproducible local commands

```powershell
npm.cmd run lint
node node_modules/typescript/bin/tsc --noEmit
npm.cmd run build
npm.cmd run start -- --port 3101
# In another terminal:
py scripts/verify-experience-seo.py http://localhost:3101 --external
node scripts/run-experience-qa.mjs <installed-playwright-index.mjs> http://localhost:3101
node scripts/measure-guide-performance.mjs <installed-playwright-index.mjs> http://localhost:3101
node scripts/generate-intelligencex-social.mjs
```

The browser harness reuses an installed Playwright package and Chromium. It adds no application dependency. Python verification uses only the standard library.
