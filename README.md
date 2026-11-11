# PM Academy — Project Management, Made Simple

[Live website](https://dhananjith1.github.io/PM-Academy/) · [GitHub repository](https://github.com/Dhananjith1/PM-Academy)

PM Academy is an independent, free-to-access learning resource for people exploring Project Management. It connects structured explanations with practical examples, common PM tools, and lightweight interactive learning activities. The project was shaped and published with AI-assisted front-end development.

> This is an introductory educational resource. It is not an official certification course, exam simulator, or substitute for current standards and provider guidance.

## Features
- **27 lessons across 6 learning areas:** foundations, planning, risk and change, Agile and frameworks, PM tools, and career fundamentals.
- **Interactive EVM calculator:** calculates CV, SV, CPI, SPI, and an EAC estimate using BAC ÷ CPI. The page explains that this formula assumes current cost efficiency continues.
- **Searchable PM glossary:** more than 35 concise definitions and formulas.
- **13-question knowledge check:** explanations, shuffled answer choices, and a numerical EVM question.
- **Lesson progress tracking:** completion markers are saved in the current browser using localStorage; progress is not synced across devices.

## Learning areas
| Area | Topics |
|---|---|
| Foundations | Project definitions, life cycles, business cases, plans and baselines, constraints, roles, and stakeholders |
| Planning the Work | Scope and WBS, scheduling and CPM, EVM, quality, resources, and communications |
| Risk & Change | Risk analysis, change control, and procurement contract types |
| Methods & Frameworks | Predictive, Agile and hybrid delivery; Scrum, Kanban, PMBOK and PRINCE2 overviews |
| PM Tools | Work-management boards, issue tracking, scheduling products, collaboration tools, and project artefacts |
| Leadership & Career | Professional conduct, practical work cadence, interview preparation, project closure, and career pathways |

## Technology
- HTML5, CSS3, and vanilla JavaScript (ES6+)
- Responsive CSS Grid/Flexbox, keyboard focus styling, and reduced-motion support
- Browser localStorage for lesson-completion markers
- Static deployment through GitHub Pages; no server or database is required

## Official references
- [PMI — PMP certification requirements](https://www.pmi.org/certifications/project-management-pmp)
- [PMI — 2026 PMP exam update](https://www.pmi.org/certifications/project-management-pmp/new-exam)
- [PMI — PMBOK Guide](https://www.pmi.org/standards/pmbok)
- [Scrum Guides — Official Scrum Guide](https://scrumguides.org/download.html)
- [PeopleCert — PRINCE2](https://www.peoplecert.org/ways-to-certify/prince2)
- [Agile Alliance](https://www.agilealliance.org/)

The PMP section reflects PMI's published 2026 education/experience pathways and exam information, including the announced live-training rule change effective 1 December 2026. These are time-sensitive details; verify the current position with PMI before making any training or application decision.

## Validation and limitations
A local Chromium smoke test checked page initialization, glossary search, EVM calculations and invalid-input handling, the 13-question quiz flow, the numerical EVM answer, modal Escape-key handling, and a 390px mobile viewport. This is not a comprehensive cross-browser, real-device, assistive-technology, or formal WCAG audit. See [VALIDATION_REPORT.md](VALIDATION_REPORT.md).

See [PORTFOLIO_DESCRIPTION.md](PORTFOLIO_DESCRIPTION.md) for portfolio documentation and suggested CV wording. See [CHANGELOG.md](CHANGELOG.md) for recent improvements.

## Independence, trademarks, and licence
PM Academy is an independent educational and portfolio project. It is not affiliated with, endorsed by, sponsored by, or an official training provider of PMI, PeopleCert, Scrum.org, Atlassian, or any other organization. Third-party names and marks remain the property of their respective owners and are used only to identify concepts, standards, credentials, and products discussed in an educational context.

The site does not issue credentials, publish proprietary exam dumps, administer certification examinations, or guarantee certification outcomes. The project code is released under the MIT License in [LICENSE](LICENSE). Check third-party source terms before reusing their material.
