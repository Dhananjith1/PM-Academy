# 📘 Project Management Academy (PM Academy) — Portfolio Case Study

> **Live Application**: [dhananjith1.github.io/PM-Academy](https://dhananjith1.github.io/PM-Academy/)  
> **Repository**: [github.com/dhananjith1/PM-Academy](https://github.com/dhananjith1/PM-Academy)  
> **Role**: Product Designer & Full-Stack Front-End Developer  
> **Technologies**: Vanilla HTML5, Modern CSS3 (Custom Properties & Responsive Grid/Flexbox), Modern JavaScript (ES6+), LocalStorage API

---

## 1. Problem & Purpose (ගැටලුව සහ අරමුණ)

### The Problem (ගැටලුව)
Traditional Project Management education suffers from several key friction points:
1. **Commercial Gatekeeping & High Costs**: Most structured PM learning materials are locked behind expensive certification bootcamps ($500–$2,500) or subscriptions.
2. **Abstract & Overwhelming Literature**: The standard literature (such as the 800+ page PMBOK® Guide or academic textbooks) is excessively dense for junior professionals, students, and software engineers who just need practical, real-world clarity.
3. **Disconnection Between Theory & Tools**: Courses often teach theory in isolation without demonstrating how it translates into everyday tools (e.g., Jira, Trello, Asana, Google Sheets) or mathematical mechanics (EVM formulas, Critical Path calculation).

### The Purpose & Solution (අරමුණ සහ විසඳුම)
**PM Academy** was developed to bridge this gap:
- Provide a completely **open, fast, zero-friction learning platform** that teaches project management principles, agile methodologies, and tool ecosystems in plain, structured English.
- Deliver an interactive, hands-on learning experience featuring **live EVM calculators, instant glossary searches, and scenario-based knowledge checks**.
- Establish an authoritative, reference-backed curriculum aligned with modern standards (PMBOK® 7th Edition, PMI Process Groups Guide, and the official PMP® Exam Content Outline).

---

## 2. Target Audience (ඉලක්කගත ප්‍රේක්ෂක පිරිස)

- **Aspiring Project Managers & Career Changers**: Professionals moving from operational or technical backgrounds into structured project coordination.
- **Software Engineers, Designers & Startup Founders**: Builders who need to manage sprints, scope, client expectations, and releases without unnecessary bureaucracy.
- **Junior Project Coordinators & Associate PMs**: Early-career practitioners who need an on-the-job reference for EVM calculations, RACI matrices, and risk registers.
- **Certification Candidates**: Students preparing for formal credentials (like PMI CAPM® or PMP®) who require a conceptual primer before diving into heavy mock exams.

---

## 3. Key Features & Capabilities (මූලික විශේෂාංග)

| Feature | Description | Technical Implementation |
| :--- | :--- | :--- |
| **27 Modular Lessons across 6 Parts** | Structured curriculum covering Foundations, Planning, Risk & Change, Agile/Scrum Frameworks, PM Tools (12+ in-depth analyses), and Leadership & Careers. | Client-side reactive DOM rendering from structured JavaScript data objects. |
| **Interactive Earned Value Management (EVM) Calculator** | Live recalculation of CV, SV, CPI, SPI, and EAC based on custom user inputs with automated health status interpretations. | Mathematical input binding with real-time DOM mutation and input sanitization. |
| **Instant Client-Side Glossary Search** | Searchable directory of 35+ PM terms, acronyms, and formulas with real-time text matching. | Case-insensitive array filtering on keyboard input with zero network latency. |
| **Scenario-Based Knowledge Check Quiz** | 12 multiple-choice questions with **immediate pedagogical explanations** for both correct and incorrect selections. | State-driven quiz engine with dynamic score counting and option lock-out. |
| **Local Progress Persistence** | Checkmark tracking for finished lessons with visual percentage progress bar. | Synchronized with browser `localStorage`, retaining progress across page reloads. |
| **Editorial Design System** | High-end visual hierarchy with custom typography (`Fraunces` + `Plus Jakarta Sans`), warm cards, and accessible color contrast. | Pure Vanilla CSS using custom properties, responsive grid, and zero framework overhead. |

---

## 4. Planning & Delivery (සැලසුම්කරණය සහ නිමකිරීම)

The project followed an agile, incremental delivery lifecycle:

### Phase 1: Taxonomy & Curriculum Design (Sprint 1)
- Researched global standards: PMBOK® Guide 7th Edition performance domains, PMI Process Groups Practice Guide, Scrum Guide 2020, and PRINCE2 7th Edition.
- Outlined 27 distinct lessons organized into 6 logical progressive tiers:
  1. *Foundations* (Definition, Lifecycle, Business Case, PMP Baselines, Triple Constraint, Roles, Stakeholders)
  2. *Planning the Work* (Scope/WBS, Schedule/CPM, Cost/EVM, Quality, Team/RACI, Communications)
  3. *Risk & Change* (Risk Analysis/EMV, Integrated Change Control & Contracts)
  4. *Methods & Frameworks* (Predictive vs Adaptive vs Hybrid, Scrum & Kanban, Standards)
  5. *PM Tools* (Purpose, Work Management Boards, Enterprise Schedulers, Everyday Stack, Templates)
  6. *Leadership & Career* (Leadership/Ethics, Weekly Work/STAR interviews, Closing, PMP Requirements)

### Phase 2: Interactive Feature Development (Sprint 2)
- Built the reactive lesson viewer with dynamic sticky sidebar navigation.
- Developed the live EVM math engine to enable students to experiment with budget variance scenarios.
- Integrated the instant glossary search and progress persistence using `localStorage`.

### Phase 3: Alignment, Accessibility & Pedagogical Enhancements (Sprint 3)
- Upgraded the final quiz with explanatory feedback cards to foster deeper conceptual comprehension.
- Created dedicated Sources/References and About sections with clear independence disclaimers.
- Optimized performance for zero build-step deployment via GitHub Pages.

---

## 5. Testing, Quality & Continuous Improvements (පරීක්ෂා කිරීම සහ වැඩිදියුණු කිරීම්)

### Testing & Validation
- **Cross-Browser & Device Responsiveness**: Thoroughly validated across mobile (iOS Safari, Android Chrome) and desktop viewports (1080p, 1440p) using flexible CSS Grid and media queries.
- **Formula Accuracy Verification**: Tested mathematical precision for EVM (CV, SV, CPI, SPI, EAC), PERT Beta three-point estimating, and communication channels $[n(n-1)/2]$.
- **Accessibility & Performance Auditing**:
  - Implemented semantic HTML5 landmarks (`<header>`, `<nav>`, `<aside>`, `<article>`, `<section>`, `<footer>`).
  - Maintained WCAG AA compliant color contrast ratios for text and UI controls.
  - Page weight under 60KB (excluding external Google Fonts), yielding instant sub-second loading without bundle bloat.

### Future Roadmap & Planned Improvements
1. **Downloadable Artifact Templates**: Pre-formatted Excel/Word templates for Project Charters, Risk Registers, and RACI matrices.
2. **Dark Mode Theme Support**: CSS variable toggle for low-light studying.
3. **Expanded Question Bank**: Domain-specific quizzes categorized by PMP ECO domains (People, Process, Business Environment).

---

## 6. Summary for Portfolio & Resume (CV / Portfolio එකට සාරාංශය)

### English One-Liner / Bullet Point:
> **PM Academy — Interactive Web Learning Platform for Project Management**  
> • Engineered a zero-dependency, responsive educational platform featuring 27 comprehensive lessons, interactive EVM formula calculators, searchable glossary, and self-assessment quizzes.  
> • Synthesized modern PM standards (PMBOK 7th Edition, Agile Alliance, Scrum) into clean, modular learning paths with persistent progress tracking via LocalStorage.  
> • Achieved 100% responsive client-side performance (<60KB footprint) deployed directly to GitHub Pages.

### සිංහල සාරාංශය (Sinhala Summary):
> **PM Academy — ව්‍යාපෘති කළමනාකරණය සරලව ඉගෙනගත හැකි අන්තර්ක්‍රියාකාරී වෙබ් අඩවිය**  
> • Project Management මූලධර්ම, Agile/Scrum ක්‍රමවේද, PMBOK 7th Edition, EVM ගණනය කිරීම් සහ ප්‍රායෝගික මෙවලම් 12+ ඇතුළත් පාඩම් 27 කින් සමන්විත පූර්ණ ඉගෙනුම් වේදිකාවක් නිර්මාණය කිරීම.  
> • පරිශීලකයාට ක්ෂණිකව EVM ගණනය කළ හැකි Interactive Calculator එකක්, ක්ෂණික Glossary සෙවුමක් සහ නිවැරදි/වැරදි පිළිතුරු පැහැදිලි කරන Quiz එකක් සහිතව ගොඩනගා ඇත.  
> • කිසිදු බරැති frameworks වලින් තොරව (Vanilla HTML/CSS/JS) වේගවත්, සියලුම mobile/desktop තිර වලට ගැළපෙන පරිදි නිර්මාණය කර GitHub Pages මගින් සජීවීව පවත්වාගෙන යනු ලබයි.
