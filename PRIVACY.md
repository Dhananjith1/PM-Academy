# Privacy Notice — Project Management Study Resource

**Website:** https://dhananjith1.github.io/PM-Academy/  
**Last reviewed:** 12 November 2026

## Scope

This is a static educational website hosted through GitHub Pages. It has no visitor accounts, contact-submission form, newsletter, payment checkout, advertising pixel, or general-purpose third-party analytics SDK. An approximate unique-browser counter runs automatically on public learning pages.

## Browser storage

When a visitor marks a lesson complete, the browser stores that lesson's numeric identifier in localStorage (currently `pmDone_v3`, with a fallback read of `pmDone_v2`). Lesson progress is not uploaded by this feature and is not synchronised between browsers or devices.

The automatic visitor counter uses these browser-local keys:

- `pm-academy-visitor-counted-v3` — whether this persistent browser profile has already incremented the aggregate;
- `pm-academy-visitor-pending-v3` — coordination between simultaneous tabs;
- `pm-academy-visitor-value-v3` — cached display value.

The counter contacts the external service automatically when a public learning page is opened. The first visit from a browser profile uses the provider's `/api/v1/hit/` endpoint; later page loads use `/api/v1/get/` without incrementing again. While a page is visible, it requests the latest total every 15 seconds; when a hidden tab becomes visible again, it refreshes immediately. There is no on/off button. Clearing browser storage or changing browsers/devices may cause repeat counts. If browser storage is unavailable, the counter skips the request because it cannot reliably prevent repeat counts.

The EVM calculator, lesson navigation, quiz, and glossary search operate in the browser. Quiz answers and calculator values are not deliberately submitted to a site backend by these features. Visitors should not enter confidential project, client, financial, or personal information into examples.

## External visitor-counter provider

The browser automatically contacts `https://countapi.mileshilliard.com` when a public learning page is opened. The first visit from a persistent browser profile sends a request to the provider's `/api/v1/hit/` endpoint to increment the shared aggregate; later page loads request the aggregate through `/api/v1/get/`. The site stores a browser-local marker to avoid counting the same persistent browser profile more than once. The counter has no on/off button and does not claim to count distinct people. The counter key and endpoints are public, so requests can be manually submitted by others; the number is not fraud-proof and should be treated only as an approximate browser-profile estimate.

The provider's server can receive an IP address and standard technical request metadata, such as request headers and request time. The site's request does not append a visitor's name, email address, or account details. The provider's operator, processing location, server-side logging, retention period, deletion method, and privacy terms have not been independently verified for this project. The project therefore cannot promise what the provider records or retains.

## Hosting and external links

A visitor's browser requests pages and files from GitHub Pages. GitHub may process technical request information, including IP addresses and request logs, under its own service terms and privacy statement. The site owner does not operate or control GitHub's hosting infrastructure. See the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement).

Other external websites are contacted when a visitor chooses to follow an external link. They are not embedded or loaded automatically by the learning-page content. The external visitor-counter provider is contacted automatically when a public learning page is opened.

The site's own code does not deliberately set advertising cookies or load advertising pixels, a general-purpose analytics SDK, remotely hosted fonts, or embedded social-media widgets. This statement does not describe or guarantee technical processing performed by GitHub or the external counter provider.

## Privacy contact and legal review

A dedicated private channel for privacy requests has not yet been configured. Do not put personal or confidential information into public GitHub issues. A suitable private contact and a process for assessing provider terms, retention, deletion, and any applicable data-subject requests should be established before relying on the site for processing that requires them.

As at 11 November 2026, the Sri Lankan Data Protection Authority's published notice states that Extraordinary Gazette No. 2498/16 sets 1 January 2027 as the commencement date for section 2, section 3, Part I and Part III of the Personal Data Protection Act. The Authority also states that Part II and Part VII are not yet in force as at the date of this notice. This is a dated summary only, not legal advice or a decision about the Act's application to this project. Check the [Data Protection Authority's current notice](https://dpa.gov.lk/notice.php), its [Acts and Gazette notices](https://dpa.gov.lk/guidelines.php), and obtain qualified advice where needed.

## Changes

Review this notice whenever the website changes its storage, counter provider, hosting, forms, accounts, analytics, advertising, external services, or data-processing practices, and whenever applicable legal requirements change.
