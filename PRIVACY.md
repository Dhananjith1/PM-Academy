# Privacy Notice — Project Management Study Resource

**Website:** https://dhananjith1.github.io/PM-Academy/  
**Last reviewed:** 11 November 2026

## Scope

This is a static educational website hosted through GitHub Pages. It has no visitor accounts, contact-submission form, newsletter, payment checkout, advertising pixel, or general-purpose third-party analytics SDK. An optional external visitor-counter service is available, but it is not contacted unless a visitor actively opts in.

## Browser storage

When a visitor marks a lesson complete, the browser stores that lesson's numeric identifier in localStorage (currently `pmDone_v3`, with a fallback read of `pmDone_v2`). Lesson progress is not uploaded by this feature and is not synchronised between browsers or devices.

The optional counter uses these browser-local keys:

- `pm-academy-counter-consent-v1` — whether the visitor allowed or declined the counter;
- `pm-academy-visitor-counted-v2` — whether this persistent browser profile has already incremented the aggregate;
- `pm-academy-visitor-pending-v2` — coordination between simultaneous tabs;
- `pm-academy-visitor-value-v2` — cached display value.

No counter request is sent before the visitor chooses **Enable**. Choosing no action, taking no action, or being unable to store the choice leaves the counter off. A visitor can later choose **Turn off** to withdraw the stored choice and stop future counter requests.

After opt-in, the first counted page load from a persistent browser profile sends a request to increment the shared aggregate. Later page loads read the aggregate without incrementing it again. Clearing site data, using another browser/device, or using a temporary/private profile may cause the same person to be counted again. Several people sharing one browser profile may be counted only once. The displayed figure is an approximate count of browser profiles, not a verified count of individual people. An earlier contribution cannot be individually removed from the shared aggregate by using the stop control.

The EVM calculator, lesson navigation, quiz, and glossary search operate in the browser. Quiz answers and calculator values are not deliberately submitted to a site backend by these features. Visitors should not enter confidential project, client, financial, or personal information into examples.

## Optional external counter provider

If a visitor opts in, the browser may contact `https://countapi.mileshilliard.com`. A browser profile that has not yet been counted sends a request to the provider's `/api/v1/hit/` endpoint to increment the shared aggregate. Later page loads from that profile request the aggregate through `/api/v1/get/`. The site no longer polls the provider and sends no counter request before opt-in.

When a visitor chooses to use the counter, the provider's server can receive an IP address and standard technical request metadata (such as request headers and request time). The site's counter request does not append the visitor's name, email address, or account details. The provider's operator, processing location, server-side logging, retention period, deletion method, and privacy terms have not been independently verified for this project. The project therefore cannot promise what the provider records or retains. The counter is an optional convenience feature, not a verified people-analytics system.

## Hosting and external links

A visitor's browser requests pages and files from GitHub Pages. GitHub may process technical request information, including IP addresses and request logs, under its own service terms and privacy statement. The site owner does not operate or control GitHub's hosting infrastructure. See the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement).

Other external websites are contacted when a visitor chooses to follow an external link. They are not embedded or loaded automatically by the learning-page content. The optional visitor-counter provider is only contacted after the visitor chooses to allow it.

The site's own code does not deliberately set advertising cookies or load advertising pixels, a general-purpose analytics SDK, remotely hosted fonts, or embedded social-media widgets. This statement does not describe or guarantee technical processing performed by GitHub or the external counter provider.

## Privacy contact and legal review

A dedicated private channel for privacy requests has not yet been configured. Do not put personal or confidential information into public GitHub issues. A suitable private contact and a process for assessing provider terms, retention, deletion, and any applicable data-subject requests should be established before relying on the site for processing that requires them.

As at 11 November 2026, the Sri Lankan Data Protection Authority's published notice states that Extraordinary Gazette No. 2498/16 sets 1 January 2027 as the commencement date for section 2, section 3, Part I and Part III of the Personal Data Protection Act. The Authority also states that Part II and Part VII are not yet in force as at the date of this notice. This is a dated summary only, not legal advice or a decision about the Act's application to this project. Check the [Data Protection Authority's current notice](https://dpa.gov.lk/notice.php), its [Acts and Gazette notices](https://dpa.gov.lk/guidelines.php), and obtain qualified advice where needed.

## Changes

Review this notice whenever the website changes its storage, counter provider, hosting, forms, accounts, analytics, advertising, external services, or data-processing practices, and whenever applicable legal requirements change.
