# Independent Project Management Study Resource

**Live website:** https://dhananjith1.github.io/PM-Academy/  
**Repository:** https://github.com/Dhananjith1/PM-Academy  
**Content review:** 11 November 2026

**Public title:** Project Management Study Resource. The legacy GitHub repository slug and Pages path are retained for link continuity; they are technical identifiers, not a claim that the former name is available or cleared.

This is an independent, free-to-access learning resource for people exploring project management. It provides concise educational explanations, practical examples, and lightweight interactive learning activities. The project was developed with AI-assisted front-end work and is hosted as a static GitHub Pages site.

> This website is an introductory educational resource. It is not affiliated with, endorsed by, sponsored by, or an official training, accreditation, or certification provider of PMI, PeopleCert, Scrum.org, Scaled Agile, Atlassian, or any other organization. It does not issue credentials.

## Features

- **27 lessons across 6 learning areas:** foundations, planning, risk and change, Agile and frameworks, PM tools, and career essentials.
- **EVM calculator:** calculates CV, SV, CPI, SPI, and an EAC estimate using BAC ÷ CPI. The displayed EAC method assumes current cost efficiency continues.
- **Searchable glossary:** concise definitions for common project-management terms.
- **13-question knowledge check:** explanatory feedback, shuffled answer choices, and a numerical EVM question.
- **Lesson progress:** completed lesson IDs are stored in the current browser's localStorage; they are not synchronized across browsers or devices.
- **Accessibility foundations:** skip navigation, visible keyboard focus, dynamic-content focus management, dialog focus trapping, reduced-motion support, and semantic progress state.

## EVM calculation reference

The calculator and learning examples use these standard Earned Value Management relationships:

- Cost Variance (CV) = Earned Value (EV) − Actual Cost (AC)
- Schedule Variance (SV) = Earned Value (EV) − Planned Value (PV)
- Cost Performance Index (CPI) = EV ÷ AC
- Schedule Performance Index (SPI) = EV ÷ PV
- Estimate at Completion (EAC) = Budget at Completion (BAC) ÷ CPI, only under the assumption that current cost efficiency continues

When AC or PV is zero, the corresponding index is unavailable. A negative CV indicates an unfavourable cost position; a negative SV indicates less budgeted work value earned than planned at the status date. EVM schedule variance is expressed in budget units, not calendar days.

## Learning areas

| Area | Topics |
|---|---|
| Foundations | Project definitions, predictive process groups, business cases, baselines, constraints, roles, and stakeholders |
| Planning the Work | Scope and WBS, schedule networks, budgeting, EVM, quality, resources, and communication |
| Risk & Change | Risk assessment, responses, reserves, change governance, and procurement |
| Methods & Frameworks | Predictive, adaptive and hybrid approaches; Scrum, Kanban, PMBOK and PRINCE2 summaries |
| PM Tools | Work-management boards, issue tracking, scheduling, spreadsheets, documentation, and collaboration |
| Leadership & Career | Team practices, ethics, adaptable reporting routines, interviews, and project closure |

## Technology

- HTML5, CSS3, and vanilla JavaScript
- Responsive CSS Grid/Flexbox and browser-side interaction
- localStorage for local lesson-progress markers only
- Static GitHub Pages hosting; no application backend or user-account system
- System font stacks; no automatic third-party font request

## Official references

- [PMI — PMP certification requirements](https://www.pmi.org/certifications/project-management-pmp)
- [PMI — 2026 PMP exam update](https://www.pmi.org/certifications/project-management-pmp/new-exam)
- [PMI — *PMBOK® Guide*](https://www.pmi.org/standards/pmbok)
- [Scrum Guides — Official Scrum Guide](https://scrumguides.org/download.html)
- [PeopleCert — PRINCE2](https://www.peoplecert.org/ways-to-certify/prince2)
- [Scaled Agile — SAFe Framework](https://scaledagile.com/)
- [Open Guide to Kanban](https://kanbanguides.org/open-guide-to-kanban/2025.7/)
- [Agile Alliance](https://www.agilealliance.org/)

The PMP section reflects PMI's July 2026 Examination Content Outline and its published training update effective 1 December 2026. The outline says active CAPM holders who meet the other eligibility requirements receive a 35-training-hour credit and do not need to document the 35 training hours. These requirements are time-sensitive; verify them directly with PMI before applying or purchasing training. Tool descriptions are introductory summaries, not a current feature, plan, or price comparison; product capabilities and subscription terms may change.

## Copyright, trademarks and independence

The curriculum is an independent educational summary, not a reproduction of proprietary guides, exam questions, diagrams, or course materials. Ideas and methods may be explained in independent wording, but exact expression, diagrams, substantial extracts, and software code can have separate rights. See [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md).

PMI®, PMP®, CAPM®, PMI-ACP®, and the *PMBOK® Guide* are marks of Project Management Institute, Inc. PRINCE2® is a registered trademark of PeopleCert group. SAFe® and Scaled Agile Framework® are registered trademarks of Scaled Agile, Inc. Jira and Trello are trademarks of Atlassian. These names identify relevant products and methods only.

The Scrum Guide is published under Creative Commons Attribution-ShareAlike 4.0. The website links to the official Guide and presents independent summaries; see the licence before reproducing or adapting its text.

## Privacy

Lesson completion IDs are stored in the current browser. The site uses local browser storage and is hosted through GitHub Pages; it no longer requests remote fonts. See [PRIVACY.md](PRIVACY.md).

## Validation and limitations

A previous local Chromium smoke test checked page initialization, glossary search, EVM calculations and invalid-input handling, the 13-question quiz flow, modal Escape-key handling, and a 390px mobile viewport. GitHub Actions now runs HTML validation, Playwright checks across Chromium, Firefox, WebKit and a mobile viewport, and axe-core scans for selected WCAG 2.2 AA rules. Automated checks do not establish full WCAG conformance, and this is not a manual screen-reader/real-device audit. This source/content review is not a legal opinion or trademark clearance. See [VALIDATION_REPORT.md](VALIDATION_REPORT.md), [ACCESSIBILITY.md](ACCESSIBILITY.md), and [TRADEMARK_SCREENING.md](TRADEMARK_SCREENING.md).

## Rights and reuse

The current repository root contains a Rights and Reuse Notice rather than a general open-source licence. Earlier commits contained an MIT License; this update does not purport to retroactively revoke permissions validly granted to copies obtained while that licence was present. See [LICENSE](LICENSE), [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md), and [LEGAL_REVIEW_BRIEF.md](LEGAL_REVIEW_BRIEF.md).
