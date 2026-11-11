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
| Lesson progress | Mark lessons complete | localStorage in current browser; no cross-device sync |
| Responsive interface | Supports common desktop and mobile viewports | CSS Grid/Flexbox and responsive media queries |

## 4. Learning areas

1. **Foundations:** projects, predictive process groups, business cases, baselines, constraints, roles, and stakeholders.
2. **Planning:** scope and WBS, schedule networks, budgeting and EVM, quality, resources, and communication.
3. **Risk & Change:** risk assessment, responses, reserves, change governance, and procurement.
4. **Methods & Frameworks:** predictive, adaptive and hybrid approaches; Scrum, Kanban, and introductory PMBOK and PRINCE2 summaries.
5. **PM Tools:** work-management boards, issue tracking, scheduling, spreadsheets, documentation, and collaboration.
6. **Leadership & Career:** team practices, professional ethics, adaptable reporting routines, interviews, and project closure.

## 5. Content-quality review

This revision qualifies or corrects project/change-cost claims, financial evaluation formulas, an EVM cost-variance example, WBS work packages versus assignment of owners, critical-path and PERT statements, QA/QC definitions, RACI and Tuckman descriptions, communication-channel mathematics, risk responses/reserves, change-control governance, procurement risk allocation, Agile values, Scrum and Kanban summaries, tool-plan claims, project-closing routines, and PMP 2026 details.

The PMP section was aligned to PMI's July 2026 Examination Content Outline, including qualification-level mappings, non-overlapping experience periods, the 35-hour training credit/waiver for active CAPM holders, training rules, exam weights, question counts and delivery-mode qualifications for breaks. These are time-sensitive rules; verify current requirements with PMI before using them for an application.

## 6. Legal and attribution approach

The site is presented as an independent educational resource, not an official course or credential provider. Third-party names identify products, methods, and certifications. The reviewed HTML contains no inserted PMI, PeopleCert, Scrum.org, Scaled Agile, or Atlassian logo or certification seal.

The site explains concepts in its own words and links to official references. It should not reproduce substantial extracts, official diagrams, screenshots, proprietary exam questions, or paid course material without checking rights and obtaining permission where required. The Scrum Guide is under CC BY-SA 4.0; this site links to it and provides independent summaries.

PMI®, PMP®, CAPM®, PMI-ACP®, and the *PMBOK® Guide* are marks of Project Management Institute, Inc. PRINCE2® is a registered trademark of PeopleCert group. SAFe® and Scaled Agile Framework® are registered trademarks of Scaled Agile, Inc. Jira and Trello are trademarks of Atlassian. The resource is not affiliated with or endorsed by those organizations, including Scaled Agile, Inc.

See [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md) and [TRADEMARK_SCREENING.md](TRADEMARK_SCREENING.md) for the detailed rights, name-risk, and reuse notes; [ACCESSIBILITY.md](ACCESSIBILITY.md) records the automated coverage and remaining manual work. See [PRIVACY.md](PRIVACY.md) for local progress storage, GitHub Pages hosting, and removal of automatic external font requests.

## 7. Product and implementation decisions

- Kept the application static, with no application backend, account system, or database.
- Used browser-side JavaScript for lessons, calculator, glossary, quiz, and navigation.
- Stored only lesson-completion IDs in localStorage in the current browser.
- Added responsive layout, visible keyboard focus, skip navigation, reduced-motion support, and modal keyboard dismissal.
- Added official reference links and clear independence/trademark wording.

Tool summaries are introductory and are not a current product-feature, plan, or price benchmark. Availability and capabilities vary by product edition, region, and configuration.

## 8. Validation and limitations

The latest automated regression run on 11 November 2026 completed with 52 passed, 8 intentionally skipped, and 0 failed across 60 test executions. HTML validation passed. The 8 skips avoid repeating the exhaustive lesson/quiz axe scans in four additional browser profiles; representative browser and accessibility checks remain active in all five profiles. The run and matching successful Pages deployment are linked from the [README](README.md).

A previous local Chromium smoke test checked page initialization, glossary search, EVM calculations and invalid-input handling, the 13-question quiz, modal Escape-key handling, and a 390px mobile viewport. It is not exhaustive QA, a formal WCAG audit, or a legal opinion. No standards body or certification organization has reviewed or endorsed this project.

## 9. Suggested CV description

**Independent Project Management Study Resource**  
*Project initiator / Product concept designer | AI-assisted personal project | 2026*

- Initiated and shaped an independent learning resource for people exploring project management, organizing 27 lessons into six learning areas.
- Defined interactive features including an EVM calculator, searchable glossary, mixed-format knowledge-check quiz, and browser-based progress tracking.
- Used AI-assisted front-end development to build and publish a static web application through GitHub Pages.

Use only responsibilities and activities that accurately describe your own contribution. Do not present this as client work, team-led delivery, full-stack engineering, or accredited certification training.

## 10. Limitations

No lawyer, trademark search provider, PMI, PeopleCert, Scrum.org, Atlassian, or independent PM-content expert has cleared or endorsed the website. The current public title is deliberately descriptive, following a preliminary web scan that identified existing same-name project-management training businesses. The repository and Pages URL retain the historical slug for link continuity; this is not trademark clearance. This case study records the intended scope; it is not a certification of legal compliance or content perfection.
