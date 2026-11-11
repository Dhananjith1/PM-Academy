# Independent Project Management Study Resource — Portfolio Case Study

- **Live application:** https://dhananjith1.github.io/PM-Academy/
- **Repository:** https://github.com/Dhananjith1/PM-Academy
- **Project role:** Project initiator and product-concept designer; AI-assisted front-end development
- **Technology:** HTML5, CSS3, vanilla JavaScript, browser localStorage, GitHub Pages
- **Content review:** 11 November 2026

## 1. Project overview

This is an independent, free-to-access educational website designed to help students and early-career professionals explore core project-management concepts. It connects concise explanations with examples, common PM tools, and simple interactive learning activities.

This is a personal learning-resource and portfolio project. It is not an official training product, certification provider, or exam simulator. AI tools assisted front-end implementation. Describe only the planning, selection, editing, product decisions, and testing that accurately reflect your own contribution.

## 2. Intended audience

The resource is intended for students, people exploring a project-management career, aspiring project coordinators and Associate PMs, and software or business teams seeking a beginner-friendly overview.

## 3. Scope and features

| Feature | User value | Implementation summary |
|---|---|---|
| 27 lessons in 6 areas | Progressive introduction to core PM topics | Structured lesson data rendered in the browser |
| EVM calculator | Experiment with CV, SV, CPI, SPI, and EAC | Client-side calculations with input validation and stated assumptions |
| Searchable glossary | Locate common terminology | Client-side keyword filtering |
| 13-question quiz | Knowledge check with explanations | Shuffled answer options, scoring, and feedback |
| Lesson progress | Mark lessons complete | localStorage in current browser; no cross-device sync |\n| Approximate browser count | Display an approximate site-wide browser-profile total | External Abacus counter; localStorage deduplication across public pages; not a count of distinct people |
| Responsive interface | Supports common desktop and mobile viewports | CSS Grid/Flexbox and responsive media queries |

## 4. Learning areas

1. **Foundations:** projects, predictive process groups, business cases, baselines, constraints, roles, and stakeholders.
2. **Planning:** scope and WBS, schedule networks, budgeting and EVM, quality, resources, and communication.
3. **Risk & Change:** risk assessment, responses, reserves, change governance, and procurement.
4. **Methods & Frameworks:** predictive, adaptive and hybrid approaches; Agile values, Scrum, Kanban, and introductory PM standards.
5. **PM Tools:** work-management boards, issue tracking, scheduling, spreadsheets, documentation, and collaboration.
6. **Leadership & Career:** team practices, professional ethics, adaptable reporting routines, interviews, and project closure.

## 5. Content-quality review

This revision qualifies or corrects project/change-cost claims, financial evaluation formulas, an EVM cost-variance example, WBS work packages versus assignment of owners, critical-path and PERT statements, QA/QC definitions, RACI and Tuckman descriptions, communication-channel mathematics, risk responses/reserves, change-control governance, procurement risk allocation, Agile values, Scrum and Kanban summaries, tool-plan claims, project-closing routines, and PMP 2026 details.

The PMP section summarises selected items from PMI's July 2026 Examination Content Outline, including qualification pathways, non-overlapping experience periods, the training credit for active CAPM holders, training rules, exam weights, question counts, and delivery-mode qualifications for breaks. These requirements can change; consult PMI's official material directly before using the information for an application.

## 6. Legal and attribution approach

The site is presented as an independent educational resource, not an official course or credential provider. The current learning page uses PMI word marks only to identify the publisher of publications or credentials discussed. Direct PMI hyperlinks are omitted because PMI's Digital Properties Linking Agreement requires links to appear on approved webpages and not on home/about pages; the site has not obtained separate approval for link placement. PMBOK® Guide styling and ownership attribution are maintained, and no PMI logo is used.

Jira and Trello are mentioned only as examples of software products. Atlassian's published trademark guidance allows fair use to identify its products when the use is not misleading and does not imply affiliation; no Atlassian logo is used.

Third-party certification or framework marks whose policies restrict website use to licensed/approved services or require permission for proprietary content have been removed from the current learning page. Related branded material was replaced with independently written, general project-governance concepts. Prior public revisions may remain in repository history; a qualified adviser should assess any historical-use implications.

The Scrum Guide and Open Guide to Kanban summaries are identified, attributed, and offered under CC BY-SA 4.0 within the specific lesson portions identified in the source note. Changes and the applicable licence are stated. No substantial proprietary courseware, official diagrams, screenshots, or examination items are intentionally reproduced.

See [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md), [TRADEMARK_SCREENING.md](TRADEMARK_SCREENING.md), and [LEGAL_REVIEW_BRIEF.md](LEGAL_REVIEW_BRIEF.md) for rights and naming-risk notes; [ACCESSIBILITY.md](ACCESSIBILITY.md) records automated coverage and remaining manual work. See the [public Privacy Notice](privacy.html) and [PRIVACY.md](PRIVACY.md) for local progress storage, GitHub Pages hosting, and the external Abacus counter data flow.

## 7. Product and implementation decisions

- Kept the application static, with no application backend, account system, or database.
- Used browser-side JavaScript for lessons, calculator, glossary, quiz, and navigation.
- Stored lesson-completion IDs and visitor-counter deduplication/cache flags in localStorage in the current browser. A small custom counter script calls the external Abacus endpoint; provider-side data handling is not independently verified.
- Added responsive layout, visible keyboard focus, skip navigation, reduced-motion support, and modal keyboard dismissal.
- Kept references to source publications separate from the independently written lesson content.
- Removed direct PMI links and third-party framework/certification marks that would require approved or licensed placement.

Tool summaries are introductory and are not a current product-feature, plan, or price benchmark. Availability and capabilities vary by product edition, region, and configuration.

## 8. Validation and limitations

GitHub Actions runs HTML validation and Playwright checks across desktop Chromium, Firefox, WebKit, and Chromium/WebKit mobile emulation. It checks responsive widths, interaction flows, representative axe-core scans across configured browser profiles, and exhaustive lesson/quiz-feedback scans in desktop Chromium. Automated checks are regression aids, not a formal WCAG audit or manual screen-reader evaluation.

The latest completed Quality checks run for this test-file revision, [43003623208](https://github.com/Dhananjith1/PM-Academy/actions/runs/43003623208), passed 57 tests, intentionally skipped 8 repeated exhaustive scans in non-Chromium profiles, and failed 0. HTML validation passed. Representative accessibility and interaction checks run across all five browser profiles; exhaustive 27-lesson and 13-quiz-feedback axe scans run in desktop Chromium. The same test file is present on the current main branch, and its latest run is recorded in the [GitHub Actions history](https://github.com/Dhananjith1/PM-Academy/actions).

A previous local Chromium smoke test checked page initialization, glossary search, EVM calculations and invalid-input handling, the 13-question quiz, modal Escape-key handling, and a 390px mobile viewport. It is not exhaustive QA, a formal WCAG audit, or a legal opinion. No standards body or certification organization has reviewed or endorsed this project.

## 9. Suggested CV description

**Independent Project Management Study Resource**  
*Project initiator / Product concept designer | AI-assisted personal project | 2026*

- Initiated and shaped an independent learning resource for people exploring project management, organizing 27 lessons into six learning areas.
- Defined interactive features including an EVM calculator, searchable glossary, mixed-format knowledge-check quiz, and browser-based progress tracking.
- Used AI-assisted front-end development to build and publish a static web application through GitHub Pages.

Use only responsibilities and activities that accurately describe your own contribution. Do not present this as client work, team-led delivery, full-stack engineering, or accredited certification training.

## 10. Limitations

No lawyer, trademark search provider, PMI, Atlassian, or independent PM-content expert has cleared or endorsed the website. The current public title is deliberately descriptive, following a preliminary web scan that identified existing same-name project-management training businesses. The repository and Pages URL retain the historical slug for link continuity; this remains a legal-review item. This case study is not a certification of legal compliance or content perfection.
