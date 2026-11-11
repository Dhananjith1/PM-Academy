# PM Academy — Portfolio Case Study

- **Live application:** https://dhananjith1.github.io/PM-Academy/
- **Repository:** https://github.com/Dhananjith1/PM-Academy
- **Project role:** Project initiator and product-concept designer; AI-assisted front-end development
- **Technology:** HTML5, CSS3, vanilla JavaScript (ES6+), browser localStorage, GitHub Pages
- **Content review date:** 11 November 2026

## 1. Project overview
PM Academy is an independent, free-to-access educational website designed to help aspiring project managers and early-career professionals explore core project-management concepts. It connects structured explanations with examples, common PM tools, and simple interactive learning activities.

This is a personal portfolio and learning-resource project. It is not an official training product, certification provider, or exam simulator. AI tools assisted the front-end implementation. Describe only the planning, content selection, product decisions, testing, and other work that accurately reflects your personal contribution.

## 2. Problem and intended audience
People beginning to study project management can encounter lengthy reference materials and unfamiliar terminology. They may also find it difficult to connect scope, schedule, cost, risk, Agile delivery, and project artefacts with practical examples. This resource is intended for students, people exploring a PM career, aspiring Associate PMs and coordinators, and software or business teams seeking a beginner-friendly overview.

## 3. Scope and features
| Feature | User value | Implementation summary |
|---|---|---|
| 27 lessons in 6 areas | Progressive introduction to major PM topics | Structured JavaScript lesson data rendered in browser |
| EVM calculator | Experiment with CV, SV, CPI, SPI, and EAC | Client-side calculations with input validation and explanatory assumptions |
| Searchable glossary | Locate common terminology | Case-insensitive client-side filtering |
| 13-question quiz | Knowledge check with explanations | Question data, shuffled answer options, scoring, and feedback |
| Lesson progress | Mark lessons complete | Browser localStorage; saved only on that browser/device |
| Responsive interface | Supports common desktop and mobile viewports | CSS Grid/Flexbox and responsive media queries |

## 4. Learning areas
1. **Foundations:** project definitions, life cycles, business cases, plans and baselines, constraints, roles, and stakeholders.
2. **Planning the Work:** scope and WBS, scheduling and Critical Path, budgeting and EVM, quality, resources, and communications.
3. **Risk & Change:** risk analysis, change control, and procurement contract types.
4. **Methods & Frameworks:** predictive, Agile and hybrid delivery; Scrum and Kanban; introductory PM standards and frameworks.
5. **PM Tools:** work-management boards, issue tracking, scheduling products, collaboration tools, and project artefacts.
6. **Leadership & Career:** professional conduct, practical work cadence, interview preparation, project closure, and career pathways.

## 5. Product and implementation decisions
- Kept the application as a static single-page site, avoiding a server, database, account system, or build pipeline.
- Used browser-side JavaScript for lesson rendering, calculator logic, glossary filtering, quiz state, and navigation.
- Used localStorage for non-sensitive lesson-completion markers. Progress is not synced between browsers or devices.
- Added keyboard focus visibility, a skip link, reduced-motion support, mobile-friendly navigation, and live regions for interactive updates.
- Added independence and trademark notices, official reference links, and social-sharing metadata.

## 6. Accuracy and reference policy
The curriculum is an introductory synthesis, not a reproduction of proprietary guides or certification questions. The site links to official sources for topics whose details can change, including PMP eligibility and exam information, PMBOK, Scrum, and PRINCE2.

The PMP section reflects PMI's public 2026 education/experience pathways and exam information, as well as the announced live-training eligibility change effective 1 December 2026. Learners should verify current requirements directly with PMI. The Scrum lesson uses the Scrum Guide's accountabilities, events, artefacts, and commitments. The PRINCE2 overview lists the seven Version 7 principles. The EVM calculator explains that EAC = BAC ÷ CPI assumes current cost efficiency continues.

## 7. Validation and limitations
A local Chromium smoke test checked page initialization (27 lessons and 6 learning areas), glossary search, EVM outputs using BAC = 200,000, PV = 80,000, EV = 72,000, and AC = 90,000 (CV = −18,000, SV = −8,000, CPI = 0.80, SPI = 0.90, EAC = 250,000), rejection of blank/negative inputs, the 13-question quiz including the numerical EVM question, modal Escape-key dismissal, and a 390px mobile viewport with no document-level horizontal overflow.

This was a local smoke test, not a comprehensive cross-browser, real-device, assistive-technology, or formal accessibility audit. No standards body has reviewed or endorsed the project. Tool pricing and product capabilities are time-sensitive and should be checked periodically.

## 8. Suggested CV description
**PM Academy — Independent Project Management Learning Platform**  
*Project initiator / Product concept designer | AI-assisted personal project | 2026*

- Initiated and shaped an independent learning resource for people exploring Project Management, organizing 27 lessons into six learning areas.
- Defined interactive learning features including an EVM calculator, searchable glossary, scenario-based quiz, and browser-based progress tracking.
- Used AI-assisted front-end development to build and publish a responsive static web application through GitHub Pages.

Use only responsibilities and activities that accurately describe your own contribution. Do not present the project as client work, team-led delivery, full-stack engineering, or formal certification training.

## 9. Independence and third-party notices
PM Academy is an independent educational and portfolio project. It is not affiliated with, endorsed by, sponsored by, or an official training provider of PMI, PeopleCert, Scrum.org, Atlassian, or any other organization. Third-party names and marks remain the property of their respective rights holders. The site does not issue credentials or guarantee certification outcomes.
