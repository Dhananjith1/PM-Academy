# Changelog

## 11 November 2026 — Compliance and cross-browser verification hardening
- Added a regression test that prevents direct PMI hyperlinks from being reintroduced to the learning page and checks safe `noopener`/`noreferrer` attributes on links that open new tabs.
- Updated GitHub Actions checkout/setup actions to Node.js 24-compatible releases.
- Verified HTML validation, representative accessibility scans and interaction tests across five desktop/mobile browser profiles, exhaustive 27-lesson and 13-quiz-feedback axe scans in desktop Chromium, and responsive overflow across 12 widths from 320px to 1440px.
- The completed Quality checks run for this test-file revision reported 57 passed, 8 intentionally skipped, and 0 failed; the eight skips avoid duplicating the exhaustive axe suites in four additional profiles.
- Updated the validation, accessibility, README, and portfolio notes to describe the current coverage and legal/accessibility limits accurately.

## 11 November 2026 — Third-party rights and linking compliance revision
- Removed direct outbound links to PMI webpages because the project's current homepage and lesson placements have not been separately approved under PMI's Digital Properties Linking Agreement.
- Retained PMI word marks only for truthful identification of the publisher, publications, and credentials; maintained the italicised *PMBOK® Guide* form and owner attribution.
- Removed third-party certification/framework marks and branded learning material whose published website/content rules require licensed service placement or permission; replaced that curriculum section with independently written project-governance concepts.
- Rebuilt Sources & Further Reading around the sources actually used in the current curriculum: the Agile Manifesto, Scrum Guide, and Open Guide to Kanban, plus a non-linked PMI publisher reference.
- Updated the README, portfolio case study, rights notice, preliminary trademark screen, and legal-review brief to match the current public source.
- Kept the limited CC BY-SA 4.0 attribution for the identified Scrum and Kanban summary portions; original site content remains subject to the Rights and Reuse Notice.

## 11 November 2026 — Portfolio-readiness update
- Updated PMP education/experience pathways, 2026 exam weighting and format, and the announced live-training eligibility change effective 1 December 2026.
- Reworked Scrum content to use the Scrum Guide's accountabilities, Daily Scrum, artefacts, and commitments.
- Added a third-party branded project-governance overview in an earlier revision; it has since been removed from the current curriculum following the rights and usage review.
- Clarified predictive Process Groups versus context-specific project phases.
- Added EVM input validation and explained the EAC assumption and schedule variance.
- Expanded the knowledge check to 13 questions, including a numerical EVM item, and shuffled answer options.
- Improved mobile navigation, keyboard focus visibility, reduced-motion behaviour, and modal keyboard handling.
- Added selected source links, Open Graph metadata, and a favicon; third-party source-link conditions were reviewed again in the later compliance update.
- Rewrote project documentation to describe the project accurately as AI-assisted front-end work rather than full-stack/client work.

## 11 November 2026 — Simplified About and legal notice
- Replaced the two large bottom cards with one compact About PM Academy panel.
- Removed repeated trademark and independence explanations from the page and project overview modal.
- Retained a concise independence, trademark ownership, and non-certification statement in the footer.


## 11 November 2026 — Deep content and rights review
- Qualified project, lifecycle, change-cost, financial evaluation, EVM, WBS, critical-path, PERT, QA, RACI, communication-channel, risk-reserve, change-control, procurement, Agile, Scrum, Kanban, tool and closeout guidance.
- Updated PMP 2026 qualification pathways, training eligibility, exam weights, scored/unscored question count, and duration.
- Replaced dynamic product-plan and pricing claims with plan-aware summaries.
- Added Rights & Attribution and Privacy notices.
- Replaced the current root MIT licence text with a Rights and Reuse Notice and documented the historical MIT caveat.


## 11 November 2026 — Accessibility, privacy and automated QA hardening
- Moved skip navigation to the first keyboard stop and made the main landmark focusable.
- Added accessible progress values and focus management for dynamically replaced lesson and quiz content.
- Added modal focus trapping, background inertness, Escape dismissal, and focus restoration.
- Improved banner/accent contrast and removed automatic third-party font requests.
- Clarified EVM Schedule Variance as budget-value variance rather than calendar-day status.
- Added CI automation for HTML validation, Chromium/Firefox/WebKit/mobile Playwright tests, and axe-core accessibility scans.


## 11 November 2026 — Final content and contrast refinement
- Fixed low-contrast footer text found by the first axe-core CI scan.
- Rephrased budget, baseline, sunk-cost, crashing, risk-avoidance, and reporting guidance to avoid false absolutes.
- Distinguished project scope from product scope and refined PV/AC definitions.
- Reframed CCB as an authorized change authority, made closeout sequence context-dependent, and changed product-tool “Best For” labels to “Typical Use”.
- Paraphrased Agile Manifesto values instead of reproducing their exact wording.


## 11 November 2026 — Brand-risk mitigation and broader automated coverage
- Changed the public-facing title and header to the descriptive wording "Project Management Study Resource" after a preliminary web search found existing same-name project-management training businesses.
- Retained the legacy repository and Pages path only for link continuity; recorded that this is not trademark clearance.
- Added a preliminary name-risk note, a lawyer review brief, and an accessibility statement with explicit test limitations.
- Expanded Playwright/axe checks to all configured desktop and mobile browser projects, all 27 lesson states, and all quiz-feedback states.

- Corrected the July 2026 PMP training note: an active CAPM holder who meets the other eligibility requirements receives a 35-hour training credit and does not need to document the 35 training hours; qualified exam-break wording by delivery format.
- Made payback-period, present-value benefit-cost ratio, and NPV assumptions explicit in the business-case example.

- Corrected the project/operations quiz explanation to avoid implying that every project deliverable must be unprecedented globally; clarified WIP as started-but-not-finished work and added escalation as a risk-response option.

## 11 November 2026 — Fresh full-source audit
- Removed the legacy branded social-preview image file and its unused image metadata; the page now uses a text-only social card.
- Aligned the MVP lesson definition with the glossary's validated-learning explanation.
- Corrected deployment documentation so it no longer lists the removed preview image as a root asset.
- Expanded responsive-overflow checks to ten viewport widths from 320px to 1440px; exhaustive axe scans run once in desktop Chromium, with representative axe and interaction coverage across all five configured desktop/mobile browser profiles.


## 11 November 2026 — Privacy, rights notice, and visitor-counter audit

- Added public Privacy Notice and Rights & Educational Disclaimer pages and linked them from each public page footer.
- Disclosed the external Abacus visitor-counter request and the browser-local storage keys.
- Changed the displayed metric to approximate unique browser profiles, not individual people.
- Extended the counter to all public pages, removed periodic polling, and prevented increments when browser storage is unavailable.
- Updated the legal review brief with the Data Protection Authority's published PDPA commencement schedule for 1 January 2027.
- Added regression checks for the public notices, site-wide counter and privacy disclosures.


## 11 November 2026 — Opt-in visitor counter

- Made the external visitor counter inactive by default; it sends no request until a visitor selects Allow.
- Added No thanks and a control to turn off future counting in the current browser.
- Updated the privacy notice and technical/legal documentation to describe the opt-in data flow, provider uncertainty, and browser-profile counting limitations.
- Added browser tests for no request before consent, declined consent, opt-in hit/read behaviour, and withdrawal.
