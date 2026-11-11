# Accessibility Statement

**Website:** https://dhananjith1.github.io/PM-Academy/  
**Statement reviewed:** 11 November 2026  
**Target:** WCAG 2.2 Level AA as a development goal; conformance has not been certified.

## Commitment

The project aims to make its learning content and interactive features usable by people with different access needs. Accessibility work includes semantic page landmarks, skip navigation, visible keyboard focus, focus management for changed lesson and quiz content, keyboard-operable navigation and quiz controls, dialog focus trapping and Escape dismissal, reduced-motion support, semantic lesson-progress values, and contrast refinements.

## Automated checks

GitHub Actions runs:
- HTML validation using html-validate;
- Playwright interaction tests in desktop Chromium, Firefox, and WebKit;
- mobile-emulation checks using Chromium and WebKit;
- axe-core scans tagged for WCAG 2.0 A/AA, WCAG 2.1 A/AA, and WCAG 2.2 AA; representative initial-page, modal, and quiz-feedback scans run across all five configured desktop/mobile browser projects, while the complete 27-lesson and 13-question feedback-state scans run once in desktop Chromium to avoid repeating expensive scans in every engine;
- page, modal, representative quiz feedback, exhaustive lesson and quiz states, focus, progress-persistence, EVM-calculation, and horizontal-overflow checks across ten representative viewport widths (320px–1440px).

The 11 November 2026 run is recorded in the repository's [GitHub Actions workflow history](https://github.com/Dhananjith1/PM-Academy/actions). The validation report records the latest exact counts and scope.

## Known limitations

Automated tools cannot assess every accessibility requirement or substitute for human judgement. In particular, this project has not completed:
- a manual screen-reader review with NVDA, JAWS, VoiceOver, or TalkBack;
- testing with users with disabilities;
- a comprehensive keyboard-only review of every browser state and every content path;
- human verification of all colour/contrast combinations, zoom/reflow, text spacing, error states, and all WCAG 2.2 AA success criteria;
- testing on every browser version, device, operating system, or assistive-technology combination;
- an independent WCAG-EM conformance audit.

Therefore the site does not claim full WCAG 2.2 AA conformance or accessibility certification. Automated checks are an ongoing regression aid, not proof that every person can use every feature.

## Feedback

Accessibility feedback can be raised through the project's public GitHub repository. Please describe the page or feature, browser/device/assistive technology used, and the barrier experienced. Do not include sensitive personal information.
