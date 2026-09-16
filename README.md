# CE-Deploy Partner Plus field guide

Disposable public beta training site. Plain HTML, CSS and JavaScript; no build step, backend, analytics, form submissions or learner accounts. Progress is stored in the visitor's browser.

## Hosting

GitHub Pages serves the `main` branch at `/`.

Planned site: https://voipnorm.github.io/ce-deploy-partner-beta/

## Update

Edit `index.html`, `style.css` or `course.js` and push to `main`. Pages redeploys automatically.

- Download: https://github.com/voipnorm/CE-Deploy/releases/tag/v16.4.0-beta
- Webex support: christno@cisco.com
- Gift enrollment: testers send Chris the membership email, then wait for confirmation of their six-month gift.

When the release is published, remove or update the `release-note` block in `index.html` and the download-not-found troubleshooting answer. The site does not poll GitHub or automatically claim release availability.

Screenshots use demonstration customer names from beta builds and are labeled accordingly. Never add real customer data, credentials, verification codes or private application source to this repository. This repository contains only the public guide and its static assets.

## Local preview

From this directory: `python3 -m http.server 8080`, then visit http://localhost:8080.

## Retire the site

Repository Settings → Pages → Unpublish site. This removes the live training site while keeping the source available for reuse. Delete the repository only if you also want to discard its history. No DNS, database, billing integration or cleanup service is involved.

Progress is not submitted to Chris. Partners must send their report themselves through Webex.
