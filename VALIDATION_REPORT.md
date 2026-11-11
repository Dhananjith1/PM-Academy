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

The automated suite is intended to catch regressions. The last previously completed run before the current scan-design correction reported 57 passed and 3 failed; all three failures were test timeouts caused by repeating the exhaustive 27-lesson axe scan in Firefox/WebKit desktop/mobile profiles, not reported accessibility violations. The scan design has since been changed so exhaustive scans run once in desktop Chromium and representative scans remain across the other profiles. The latest run for the current source must be checked before treating the suite as green. Passing automated scans is not equivalent to full WCAG 2.2 AA conformance.

## Legal and attribution measures

- Added a Rights & Attribution notice with third-party mark owners and official references.
- Added a Privacy Notice describing localStorage and GitHub Pages request processing.
- Replaced the current root MIT licence text with a Rights and Reuse Notice, while preserving a historical MIT caveat.
- Added official publisher and mark-owner source links.
- Added independence and non-certification language in the site footer.

## Prior technical smoke test

A previous local Chromium smoke test checked page initialization, glossary search, EVM calculations and invalid-input handling, all 13 quiz questions, modal Escape-key handling, and a 390px mobile viewport. The current revision adds HTML validation, five Playwright browser profiles (desktop Chromium, Firefox, WebKit, and Chromium/WebKit mobile emulation), ten responsive viewport widths (320px–1440px), representative axe-core scans in all profiles, and exhaustive 27-lesson/13-quiz-feedback axe scans in desktop Chromium. The exact result is recorded in the latest GitHub Actions workflow run; this report should be refreshed after each material test change.

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
