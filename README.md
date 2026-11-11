# Independent Project Management Study Resource

**Live website:** https://dhananjith1.github.io/PM-Academy/  
**Repository:** https://github.com/Dhananjith1/PM-Academy  
**Content and rights review:** 11 November 2026

**Public title:** Project Management Study Resource. The legacy GitHub repository slug and Pages path are retained for continuity only; they are not a statement that the historical name is cleared or available.

This is an independent, free-to-access introductory learning resource for people exploring project management. It provides original explanations, illustrative examples, and lightweight interactive learning activities. AI tools assisted front-end implementation. It is not an official training product, accreditation provider, or certification exam simulator, and it does not issue credentials.

## Features

- **27 lessons across 6 learning areas:** foundations, planning, risk and change, adaptive delivery, PM tools, and career essentials.
- **EVM calculator:** calculates CV, SV, CPI, SPI, and an EAC estimate using BAC ÷ CPI. The displayed EAC method assumes current cost efficiency continues.
- **Searchable glossary:** concise definitions for common project-management terminology.
- **13-question knowledge check:** explanatory feedback, shuffled answer choices, and a numerical EVM question.
- **Lesson progress:** completed lesson IDs are stored in the current browser's localStorage; they are not synchronized across browsers or devices.
- **Optional approximate browser count:** every public page offers an opt-in counter. No request goes to the external Abacus service unless a visitor selects Allow. No thanks, no choice, or unavailable browser storage keeps it off; a visitor can later turn it off. After opt-in, a persistent browser profile is counted once and later page loads read the aggregate without periodic polling. It is not a count of distinct people; clearing site data or changing browsers/devices can cause repeat counts.
- **Accessibility foundations:** skip navigation, visible keyboard focus, dynamic-content focus management, dialog focus trapping, reduced-motion support, and semantic progress state.

## Search discovery

The site includes `robots.txt`, an XML sitemap, descriptive page titles and descriptions, canonical URLs, JSON-LD that reflects visible page content, and separate introductory guides for major project-management topics. These help search engines discover and understand pages; they do not guarantee indexing or ranking position. Google Search Console ownership verification and sitemap submission must be completed by the site owner.

## Topic guides

- [Project Management Basics](project-management-basics.html)
- [Project Planning Guide](project-planning-guide.html)
- [Project Risk Management](project-risk-management-guide.html)
- [Agile Project Management](agile-project-management-guide.html)
- [Earned Value Management](earned-value-management-guide.html)
- [Project Management Tools](project-management-tools-guide.html)
- [Project Management Glossary](project-management-glossary.html)

## EVM calculation reference

The calculator and learning examples use these Earned Value Management relationships:

- Cost Variance (CV) = Earned Value (EV) − Actual Cost (AC)
- Schedule Variance (SV) = Earned Value (EV) − Planned Value (PV)
- Cost Performance Index (CPI) = EV ÷ AC
- Schedule Performance Index (SPI) = EV ÷ PV
- Estimate at Completion (EAC) = Budget at Completion (BAC) ÷ CPI, when the assumption that current cost efficiency continues is appropriate

When AC or PV is zero, the corresponding index is unavailable. A negative CV indicates an unfavourable cost position; a negative SV indicates less budgeted work value earned than planned at the status date. EVM schedule variance is expressed in budget units, not calendar days.

## Learning areas

| Area | Topics |
|---|---|
| Foundations | Project definitions, predictive process groups, business cases, baselines, constraints, roles, and stakeholders |
| Planning the Work | Scope and WBS, schedule networks, budgeting, EVM, quality, resources, and communication |
| Risk & Change | Risk assessment, responses, reserves, change governance, and procurement |
| Methods & Frameworks | Predictive, adaptive and hybrid approaches; Agile values, Scrum, Kanban, and introductory PM standards |
| PM Tools | Work-management boards, issue tracking, scheduling, spreadsheets, documentation, and collaboration |
| Leadership & Career | Team practices, ethics, adaptable reporting routines, interviews, and project closure |

## Selected sources

- **Project Management Institute (PMI):** The site uses PMI word marks only to identify the publisher of the *PMBOK® Guide* and credentials discussed in the curriculum. Direct outbound links to PMI pages are omitted in accordance with the placement and approval conditions in PMI's Digital Properties Linking Agreement. Consult PMI's own website directly for current publications and certification rules.
- [Agile Alliance — The Agile Manifesto](https://agilealliance.org/agile101/the-agile-manifesto/)
- [Scrum Guides — Official Scrum Guide](https://scrumguides.org/download.html)
- [Open Guide to Kanban v2025.7](https://kanbanguides.org/open-guide-to-kanban/2025.7/)

The PMP learning note summarises selected time-sensitive information from PMI's July 2026 Examination Content Outline, including the published training credit for active CAPM holders. Eligibility, course acceptance, exam format, and fees may change; consult the publisher's current official materials directly before acting. This site is not an official source of application advice.

## Copyright, trademarks and independence

The curriculum is written as an independent educational summary. It is not intended to reproduce proprietary guides, exam questions, diagrams, screenshots, or course materials. Ideas and methods may be explained in independent wording, but exact expression, diagrams, substantial extracts, and software code can have separate rights.

PMI®, PMP®, CAPM®, PMI-ACP®, and the *PMBOK® Guide* are marks of Project Management Institute, Inc. Jira and Trello are trademarks of Atlassian. These names are used only to identify the relevant publications, credentials, or products. No PMI or Atlassian logo is used. The current learning page does not use third-party certification or framework marks for which website use is limited to licensed or approved services; relevant branded sections were removed pending professional review.

The identified Scrum summary and Kanban summary portions are offered under Creative Commons Attribution-ShareAlike 4.0, with attribution, source links, and change notices shown in the lesson and [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md). This limited licence does not apply to other original site material.

## Privacy

Lesson completion IDs are stored in the current browser. The site uses local browser storage and is hosted through GitHub Pages; it does not request remote fonts. See the [public Privacy Notice](privacy.html) and [PRIVACY.md](PRIVACY.md).

## Validation and limitations

GitHub Actions runs HTML validation and Playwright checks across desktop Chromium, Firefox, WebKit, and Chromium/WebKit mobile emulation. It checks responsive widths, interaction flows, representative axe-core scans across the configured browser profiles, and exhaustive lesson/quiz-feedback accessibility scans in desktop Chromium. Automated checks are regression aids, not a complete WCAG audit or manual screen-reader assessment.

The latest completed Quality checks run for the same test-file revision, [43003623208](https://github.com/Dhananjith1/PM-Academy/actions/runs/43003623208), passed **57 tests, skipped 8 intentionally, and failed 0** (65 browser-project executions). HTML validation passed. The eight skips avoid repeating the exhaustive 27-lesson and 13-quiz-feedback axe scans in four additional browser profiles; those full scans run in desktop Chromium, while representative axe scans and interaction tests run across all five configured profiles. A fresh run for the current main-branch commit is also recorded in the [GitHub Actions history](https://github.com/Dhananjith1/PM-Academy/actions). Responsive overflow is checked at 12 widths from 320px to 1440px.

These automated checks do not establish full WCAG conformance, replace manual assistive-technology testing, or constitute a security/penetration test. See [VALIDATION_REPORT.md](VALIDATION_REPORT.md) and [ACCESSIBILITY.md](ACCESSIBILITY.md) for exact coverage and limitations.

This source review is not a legal opinion, lawyer review, trademark clearance, or guarantee that no dispute can arise. A preliminary public-web scan previously found other project-management training businesses using the historical name "PM Academy"; the site title was changed, but the repository/Pages slug remains a point for qualified legal review under Sri Lankan law. See [TRADEMARK_SCREENING.md](TRADEMARK_SCREENING.md) and [LEGAL_REVIEW_BRIEF.md](LEGAL_REVIEW_BRIEF.md).

## Public site notices

- [Privacy Notice](privacy.html) — browser storage, hosting and the external counter service.
- [Rights & Educational Disclaimer](rights.html) — independence, educational limits, trademarks, copyright and reuse.

## Rights and reuse

The current repository root contains a Rights and Reuse Notice rather than a general open-source licence. Earlier commits contained an MIT License; this update does not purport to retroactively revoke permissions validly granted to copies obtained while that licence was present. See [LICENSE](LICENSE) and [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md).
