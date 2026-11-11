# Independent Project Management Study Resource — Review and Validation Report

**Review date:** 11 November 2026  
**Reviewed:** Current main-branch source, public-facing content, and project documentation.

## Inventory and implementation

- 27 curriculum lessons across 6 learning areas.
- 35 glossary entries, 13 knowledge-check questions, and 12 named PM tool overviews.
- Browser-side EVM calculator, glossary search, quiz, and local lesson-progress storage.
- Static GitHub Pages application with no application backend, account system, personal-data submission form, newsletter, payment flow, advertising pixel, external embed, remotely hosted font, or third-party analytics SDK. A small custom inline counter script on each public page contacts the external Abacus service only after the visitor explicitly opts in; once opted in, this third-party data flow may expose an IP address and standard request metadata to that provider.
- Lesson-completion identifiers plus visitor-counter deduplication and cached-count flags are stored in browser localStorage; lesson progress is not synchronised across devices. The optional external counter makes no request until opt-in, then increments a persistent browser profile once when storage is available and reads the aggregate on later page loads without polling. Visitors can decline or withdraw consent; if storage is unavailable, the counter stays off.
- The current page has no logo/image asset. External links use safe new-tab attributes where applicable.

## Content review and corrections

This revision addresses project/change-cost claims, financial evaluation formulas, EVM variance interpretation, WBS work packages versus assignment of owners, critical-path and PERT statements, QA/QC, RACI, communication-channel mathematics, risk responses and reserves, change-control governance, procurement risk allocation, predictive/Agile descriptions, Agile values, Scrum, Kanban, tool-plan claims, project-closeout practices, glossary accuracy, and selected PMP 2026 information.

Schedule Variance (SV) is described as a value-based measure, not a number of calendar days. The EVM calculator explains this distinction alongside its output. PMP-related eligibility and exam details are identified as time-sensitive; visitors are directed to check the current publisher requirements before relying on them.

## Third-party rights and naming-risk measures

- The public-facing title is the descriptive **Project Management Study Resource**; no affiliation, sponsorship, accreditation, or certification is claimed.
- Direct outbound PMI hyperlinks were removed from the learning page because the current PMI linking agreement restricts link placement to approved webpages and excludes home/about sections; no separate approval was obtained.
- A source-level and automated regression check confirms that the learning page has no direct PMI hyperlinks. PMI word marks remain only for factual identification of the publisher, publications, and credentials; no PMI logo is intentionally used.
- Third-party certification/framework marks, logos, and branded lesson sections that could imply licensed or approved status were removed from the current learning page and replaced with independently written, generic project-governance material.
- Jira and Trello are mentioned as product names only; no Atlassian logos or product screenshots are used.
- The identified Scrum and Kanban summary portions have specific CC BY-SA 4.0 attribution, source links, change statements, and limited licensing language. That licence does not extend to the rest of the website.
- The current root Rights and Reuse Notice records that earlier versions contained an MIT licence and does not purport to retroactively revoke permissions that may already have been granted to earlier copies.

These measures reduce avoidable risk but do not constitute permission, legal clearance, or a determination that all uses are lawful.

## Technical and automated accessibility validation

- The skip link is the first keyboard stop; the main landmark is programmatically focusable.
- Lesson/quiz content changes manage focus; the project overview dialog supports focus trapping, background inertness, Escape dismissal, and focus restoration.
- Progress uses semantic values; reduced-motion preferences and visible keyboard focus are supported.
- External font requests were removed in favour of system font stacks.
- GitHub Actions uses Node.js 24 and current first-party checkout/setup actions.
- A regression test checks that direct PMI links are not reintroduced and that links opening new tabs include `noopener` and `noreferrer`.
- Playwright covers five profiles: desktop Chromium, Firefox, WebKit, Chromium mobile emulation, and WebKit mobile emulation.
- Representative axe-core accessibility scans and interaction tests run across all five profiles. Exhaustive axe scans cover all 27 lesson states and all 13 quiz-feedback states in desktop Chromium.
- Responsive horizontal overflow is checked at 12 viewport widths from 320px to 1440px.

The latest completed Quality checks run for this test-file revision, [43003623208](https://github.com/Dhananjith1/PM-Academy/actions/runs/43003623208), reported **57 passed, 8 intentionally skipped, and 0 failed** across 65 executions. HTML validation passed. The current main branch contains the identical test file; a subsequent workflow for the current main-branch commit is listed in [GitHub Actions](https://github.com/Dhananjith1/PM-Academy/actions).

The latest main-branch Pages build and deployment, [43004548582](https://github.com/Dhananjith1/PM-Academy/actions/runs/43004548582), completed successfully.

## Limitations and work still required

This review is not:
- a legal opinion, lawyer's review, or legal clearance;
- a human-performed trademark clearance search in the Sri Lankan NIPO register or all relevant international markets;
- a guarantee that the current title, historical repository slug, or Pages URL is available or that no third party will object;
- a plagiarism/similarity scan against every publication, course, website, or AI training source;
- an official review or endorsement by PMI, Atlassian, Scrum.org, Agile Alliance, or any other rights holder;
- a formal WCAG 2.2 AA conformance audit, manual screen-reader evaluation, or user testing with people with disabilities;
- a security audit or penetration test;
- a certification-exam validation by a project-management certification body.

The legacy repository name and Pages URL still contain **PM-Academy**. Sri Lanka's Intellectual Property Act No. 36 of 2003, Section 144, addresses protection of trade names even before or without registration and potentially misleading subsequent use of the same or a similar name. Whether it applies to this project's facts requires a qualified Sri Lankan IP/trademark lawyer's written advice. A public-web search or a disclaimer does not clear the old name. WIPO also recommends searching national IP-office databases; a negative database result is not proof of availability.

Do not commercialise the name, register it as a business mark, or offer paid/accredited training on the basis of this source review. Have a qualified Sri Lankan IP/trademark lawyer or registered IP agent perform the relevant human search and advise in writing. For a minor project owner, a parent/guardian or responsible adult should coordinate any formal legal engagement and filings.

## Live-site verification limitation

The repository source, static HTML checks, cross-page link/metadata scan, and GitHub Pages build/deployment workflow were inspected. The public Pages response could not be independently opened and inspected in a full interactive browser from this review environment. Deployment success confirms that GitHub built and deployed the repository artifact; it is not a substitute for a human visual review on real devices. The external counter provider's operator, server-side logs, retention, hosting location and deletion practices remain unverified.



## Privacy and data-protection review note

The public Privacy Notice now discloses the opt-in Abacus counter, the browser-local storage keys, the possible IP/technical request metadata received by the provider after opt-in, and the fact that provider-side retention and processing details are unverified. A private privacy-request contact channel is not yet configured and is an outstanding action. The Sri Lankan Data Protection Authority's notice records a 1 January 2027 commencement date for section 2, section 3, Part I and Part III under Gazette 2498/16; obtain current advice on applicability and required measures. This review does not certify compliance with the PDPA or any other privacy law.
