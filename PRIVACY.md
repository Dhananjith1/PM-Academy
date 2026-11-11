# Privacy Notice — Project Management Study Resource

**Website:** https://dhananjith1.github.io/PM-Academy/  
**Last reviewed:** 11 November 2026

## Scope

This is a static educational website hosted through GitHub Pages. It has no visitor accounts, contact-submission form, newsletter, payment checkout, advertising pixel, or general-purpose third-party analytics SDK. It does, however, use a small external visitor-counter service. That counter is a third-party data flow and must not be described as if no external service is contacted.

## Browser storage

When a visitor marks a lesson complete, the browser stores that lesson's numeric identifier in localStorage (currently `pmDone_v3`, with a fallback read of `pmDone_v2`). Lesson progress is not uploaded by this feature and is not synchronised between browsers or devices.

The visitor counter uses the following browser-local keys to deduplicate a persistent browser profile, coordinate simultaneous tabs, and cache the displayed total:

- `pm-academy-visitor-counted-v1`
- `pm-academy-visitor-pending-v1`
- `pm-academy-visitor-value-v1`

Clearing site data, using another browser/device, or using a temporary/private profile may cause a person to be counted again. Several people sharing one browser profile may be counted only once. The displayed figure is an approximate count of browser profiles, not a verified count of individual people. If localStorage is unavailable, the script reads the aggregate count but does not increment it, avoiding repeated counting without a deduplication mechanism.

The EVM calculator, lesson navigation, quiz, and glossary search operate in the browser. Quiz answers and calculator values are not deliberately submitted to a site backend by these features. Visitors should not enter confidential project, client, financial, or personal information into examples.

## External counter provider

Each public page includes a small counter script that may contact `https://abacus.jasoncameron.dev` directly from the visitor's browser. A browser profile not yet counted sends a request to the provider's `/hit/` endpoint to increment the shared aggregate. Later page loads from that profile request the current aggregate through `/get/` without incrementing again. The site no longer polls the provider every 20 seconds.

The provider's server can receive an IP address and standard technical request metadata (such as request headers and request time) when the browser connects. The site's counter request does not append the visitor's name, email address, or account details. The provider's operator, processing location, server-side logging, retention period, deletion method, and privacy terms have not been independently verified for this project. The project therefore cannot promise what the provider records or retains. The counter is retained as a convenience feature, not a verified people-analytics system.

## Hosting and external links

A visitor's browser requests pages and files from GitHub Pages. GitHub may process technical request information, including IP addresses and request logs, under its own service terms and privacy statement. The site owner does not operate or control GitHub's hosting infrastructure. See the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement).

Other external websites are contacted when a visitor chooses to follow an external link. They are not embedded or loaded automatically by the learning-page content. The visitor-counter provider is the exception because the counter contacts it automatically.

The site's own code does not deliberately set advertising cookies or load advertising pixels, a general-purpose analytics SDK, remotely hosted fonts, or embedded social-media widgets. This statement does not describe or guarantee technical processing performed by GitHub or the external counter provider.

## Privacy contact and legal review

A dedicated private channel for privacy requests has not yet been configured. Do not put personal or confidential information into public GitHub issues. A suitable private contact and a process for assessing provider terms, retention, deletion, and any applicable data-subject requests should be established before relying on the site for processing that requires them.

As at 11 November 2026, the Sri Lankan Data Protection Authority's published notice states that Extraordinary Gazette No. 2498/16 sets 1 January 2027 as the commencement date for section 2, section 3, Part I and Part III of the Personal Data Protection Act. The Authority also states that Part II and Part VII are not yet in force as at the date of this notice. This is a dated summary only, not legal advice or a decision about the Act's application to this project. Check the [Data Protection Authority's current notice](https://dpa.gov.lk/notice.php), its [Acts and Gazette notices](https://dpa.gov.lk/guidelines.php), and obtain qualified advice where needed.

## Changes

Review this notice whenever the website changes its storage, counter provider, hosting, forms, accounts, analytics, advertising, external services, or data-processing practices, and whenever applicable legal requirements change.
