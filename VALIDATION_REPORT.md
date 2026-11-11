# Independent Project Management Study Resource — Review and Validation Report

**Review date:** 11 November 2026  
**Source reviewed:** Current main-branch site source and project documentation.

## Inventory

- 27 curriculum lessons across 6 learning areas.
- 13 knowledge-check questions.
- Browser-side EVM calculator, glossary search, quiz, and local lesson-progress storage.
- Static GitHub Pages hosting.
- No third-party logo or certification seal was found in the reviewed HTML source.
- External Google Fonts requests have been removed; the site now uses system font stacks.

## Content review and corrections

This revision addresses project/change-cost claims, financial evaluation formulas, EVM variance interpretation, WBS work packages versus assignment of owners, critical-path and PERT statements, QA/QC, RACI, communication-channel mathematics, risk responses and reserves, change-control governance, procurement risk allocation, predictive/Agile descriptions, Agile values, Scrum, Kanban, tool-plan claims, project-closeout practices, glossary accuracy, and PMP 2026 details.

Schedule Variance (SV) is now described as a value-based measure, not a number of calendar days. The EVM calculator explains this distinction alongside its output.

## Technical and accessibility changes

- Moved the skip link before the navigation and made the main landmark programmatically focusable.
- Added semantic progress-bar values for assistive technologies.
- Added focus movement when lesson and quiz content is replaced dynamically.
- Added modal background inertness, keyboard focus trapping, Escape dismissal, and focus restoration.
- Deepened lesson banner and accent colors to improve text contrast.
- Removed automatic requests to Google Fonts and changed to system font stacks.
- Added automated HTML validation, Playwright browser tests for Chromium, Firefox, WebKit and a mobile viewport, and axe-core WCAG rule scans to GitHub Actions.

The automated suite is intended to catch regressions. An intermediate run (60 executions) reported 47 passed, 8 skipped, and 5 failed. All five failures were the same horizontal-overflow condition at 768px, reproduced in the five configured browser profiles; no axe violations were reported in that run. The header/navigation was then updated to wrap at tablet widths and scroll within its own navigation region. A follow-up run on commit `037fd49e746e474183d22bfdb651478990de503e` passed: **52 passed, 8 intentionally skipped, 0 failed** (60 executions, 1.8 minutes). The HTML validator also passed with the WCAG link-text and form-submit rules enabled. The eight skips are the four non-desktop-Chromium profiles skipping each of the two exhaustive state-by-state axe suites; representative accessibility checks still run in all five profiles. Passing automated scans is not equivalent to full WCAG 2.2 AA conformance.

## Legal and attribution measures

- Added a Rights & Attribution notice with third-party mark owners and official references.
- Added a Privacy Notice describing localStorage and GitHub Pages request processing.
- Replaced the current root MIT licence text with a Rights and Reuse Notice, while preserving a historical MIT caveat.
- Added official publisher and mark-owner source links.
- Added independence and non-certification language in the site footer.

## Prior technical smoke test

A previous local Chromium smoke test checked page initialization, glossary search, EVM calculations and invalid-input handling, all 13 quiz questions, modal Escape-key handling, and a 390px mobile viewport. The current revision adds HTML validation, five Playwright browser profiles (desktop Chromium, Firefox, WebKit, and Chromium/WebKit mobile emulation), ten responsive viewport widths (320px–1440px), representative axe-core scans in all profiles, and exhaustive 27-lesson/13-quiz-feedback axe scans in desktop Chromium. The current passing result is recorded in [GitHub Actions run 42984701843](https://github.com/Dhananjith1/PM-Academy/actions/runs/42984701843). The same commit's [GitHub Pages build and deployment run 42984701969](https://github.com/Dhananjith1/PM-Academy/actions/runs/42984701969) completed successfully.

## Limitations

This is a source/content review and automated software-testing effort, not:
- A legal opinion, lawyer's review, or legal clearance.
- A completed trademark clearance search in the Sri Lankan register or all relevant international markets.
- A guarantee that the name "PM Academy" is available or that no third party will object.
- A plagiarism/similarity scan against every publication, course, website, or AI training source.
- An official review or endorsement by PMI, PeopleCert, Scrum.org, Scaled Agile, Atlassian, or any other rights holder.
- A formal WCAG conformance audit, manual screen-reader evaluation, or exhaustive testing on every browser/device/assistive technology combination.
- A certification-exam validation by a project-management certification body.

Before using the name commercially, registering a business mark, or offering paid/accredited training, obtain an appropriate trademark search and written advice from a qualified Sri Lankan IP/trademark lawyer or registered IP agent. Review any third-party material's provenance and licence before publication.


## Current public-page verification limitation

GitHub Pages deployment workflow success confirms that GitHub built and deployed the repository artifact. This review environment returned a cache-miss response when requesting the public Pages URL directly, so it could not independently inspect the rendered live HTML over HTTP. The current main-branch source was inspected through GitHub, and the Pages workflow for the same commit is checked separately. A human should still open the live URL in a private browser window and verify the deployed version, cache behaviour, all links, and key interactions.


## Fresh audit — 11 November 2026

- Re-counted the current main-branch inventory: 27 lessons, 6 learning areas, 35 glossary entries, 13 quiz questions, and 12 named PM tool overviews.
- Corrected the active-CAPM training credit, project uniqueness wording, WIP scope, risk escalation responses, stakeholder/governance qualifications, NPV explanation, MVP and user-story examples, and STAR evidence guidance.
- Corrected the tablet breakpoint after a 768px overflow was detected. Follow-up responsive checks now cover 12 widths from 320px to 1440px.
- Re-enabled HTML validator WCAG rules for meaningful link text and form submit controls; the latest validator run passed.
- Added explicit and limited CC BY-SA 4.0 attribution for the identified Scrum/Kanban summary portions only.
- The public title is the descriptive “Independent Project Management Study Resource”; the historical `PM-Academy` repository/Pages slug remains a legal-review item under Section 144 of Sri Lanka's Intellectual Property Act.
