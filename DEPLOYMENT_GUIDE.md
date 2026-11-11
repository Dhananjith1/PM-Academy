# Deployment and Quality-Check Guide

PM Academy is published through GitHub Pages from the root of the main branch. Keep the existing Pages publishing configuration unchanged.

## Local quality checks

The repository includes automated HTML, browser-interaction, and accessibility regression checks.

1. Install Node.js 24 or later.
2. Run `npm install`.
3. Install the Playwright browsers and their operating-system dependencies: `npx playwright install --with-deps chromium firefox webkit`.
4. Run `npm test`.

The test suite serves the static site locally and checks page loading, keyboard skip navigation, dynamic lesson focus, local progress, glossary filtering, EVM outputs and interpretation, quiz navigation, modal focus trapping and dismissal, mobile horizontal overflow, HTML validity, and axe-core accessibility rules.

## GitHub Pages deployment

After each update, check both the **Quality checks** workflow and the GitHub Pages deployment workflow. Then manually open https://dhananjith1.github.io/PM-Academy/ in a private/incognito window. Recheck lesson navigation, EVM calculator, quiz, glossary, project overview, official source links, and mobile layout.

A successful build is not proof that every browser, screen reader, device, legal requirement, or trademark issue has been cleared.

## Root files

- index.html
- favicon.svg
- og-preview.png
- README.md
- PORTFOLIO_DESCRIPTION.md
- RIGHTS_AND_ATTRIBUTION.md
- PRIVACY.md
- VALIDATION_REPORT.md
- CHANGELOG.md
- DEPLOYMENT_GUIDE.md
- LICENSE
- package.json, Playwright config, tests, and GitHub Actions workflow

Do not upload the ZIP archive itself as the website root. Certification requirements, software features, licences, and intellectual-property guidance can change and should be reviewed periodically.
