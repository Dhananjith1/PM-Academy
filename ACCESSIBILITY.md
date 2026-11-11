# Accessibility Statement

**Website:** https://dhananjith1.github.io/PM-Academy/  
**Statement reviewed:** 11 November 2026  
**Target:** WCAG 2.2 Level AA as a development goal; conformance has not been certified.

## Commitment

The project aims to make its learning content and interactive features usable by people with different access needs. Accessibility work includes semantic page landmarks, skip navigation, visible keyboard focus, focus management for changed lesson and quiz content, keyboard-operable navigation and quiz controls, dialog focus trapping and Escape dismissal, reduced-motion support, semantic lesson-progress values, and contrast refinements.

## Automated checks

GitHub Actions runs:
- HTML validation using html-validate;
- Playwright interaction tests in desktop Chromium, Firefox, WebKit, and Chromium/WebKit mobile emulation (five configured browser profiles);
- axe-core scans tagged for WCAG 2.0 A/AA, WCAG 2.1 A/AA, and WCAG 2.2 AA;
- representative initial-page, modal, quiz-feedback, privacy-page, rights-page, and interaction checks across all five browser profiles;
- exhaustive axe scans of all 27 lesson states and all 13 quiz-feedback states in desktop Chromium;
- page, modal, focus, progress-persistence, EVM-calculation, quiz, and horizontal-overflow checks across 12 viewport widths: 320, 360, 375, 390, 414, 600, 768, 820, 900, 1024, 1280, and 1440 CSS pixels.

The current regression suite also checks the public Privacy Notice and Rights & Educational Disclaimer pages, legal links in every public-page footer, and the site-wide visitor counter's explicit opt-in, decline/withdraw controls, browser-profile wording and non-polling behaviour. The latest completed run for this revision is recorded in the [GitHub Actions history](https://github.com/Dhananjith1/PM-Academy/actions); results are not stated here until the run completes.

## Known limitations

Automated tools cannot assess every accessibility requirement or substitute for human judgement. In particular, this project has not completed:
- a manual screen-reader review with NVDA, JAWS, VoiceOver, or TalkBack;
- testing with users with disabilities;
- a comprehensive keyboard-only review of every browser state and every content path;
- human verification of all colour/contrast combinations, zoom/reflow, text spacing, error states, and all WCAG 2.2 AA success criteria;
- testing on every browser version, device, operating system, or assistive-technology combination;
- an independent WCAG-EM conformance audit.

Therefore the site does not claim full WCAG 2.2 AA conformance or accessibility certification. WCAG 2.2 AA conformance applies to the complete page and all required success criteria, not just the automated checks run here. Automated checks are regression aids, not proof that every person can use every feature.

## Feedback

Accessibility feedback can be raised through the project's public GitHub repository. Please describe the page or feature, browser/device/assistive technology used, and the barrier experienced. Do not include sensitive personal information.
