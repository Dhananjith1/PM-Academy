# PM Academy — Local Validation Report

**Run date:** 11 November 2026  
**Environment:** Chromium, automated local browser smoke test.

| Check | Result | Observation |
|---|---|---|
| Page initialization | Passed | 27 lessons and 6 learning areas rendered |
| Glossary search | Passed | Searching for Critical Path returned matching terms |
| EVM calculation | Passed | BAC 200,000; PV 80,000; EV 72,000; AC 90,000 produced CV −18,000; SV −8,000; CPI 0.80; SPI 0.90; EAC 250,000 |
| Calculator validation | Passed | Blank and negative values produced validation messages |
| Quiz navigation | Passed | All 13 questions were traversed; numerical EVM question accepted the correct answer |
| Modal keyboard handling | Passed | Project overview opened and Escape closed it |
| Mobile viewport | Passed | At 390px viewport width, document scroll width equalled client width |
| JavaScript runtime | Passed | No page errors observed during the smoke test |
| JavaScript syntax | Passed | Inline script passed syntax validation |

## Limitations
This is a local smoke test, not a comprehensive QA cycle. It does not establish compatibility across all browsers, operating systems, or physical devices. It does not replace keyboard-only usability review, screen-reader testing, or a formal WCAG accessibility audit. External links should be rechecked from the published site. PMI, PeopleCert, and other standards bodies have not reviewed or endorsed this project.
