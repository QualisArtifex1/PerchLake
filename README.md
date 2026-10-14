# Perch Lake — the house guide

A responsive family lake-house reference site, built with plain HTML, CSS, and JavaScript. No build step or paid services are required.

## Hosting and privacy

Intended for public GitHub Pages, as requested. The house photo and address are public. The `noindex` directive asks search engines not to index the site; it **does not restrict access**. Do not commit key locations, entry codes, Wi-Fi passwords, private neighbor details, financial account information, or other sensitive data. Share those directly with family or move the site behind genuine access control first.

## Update the guide

Edit `data.js` to update maintenance, public business contacts, HOA information, house essentials, or checklist items. Missing details are intentionally labeled rather than invented. Dates use `YYYY-MM-DD`; blank values use `null`. Each checklist item needs a unique, stable `id`.

Commit and push updates to the `main` branch. GitHub Pages should publish from `/` on `main`. No GitHub token or password belongs in the website.

The eight departure items are a suggested starter checklist, not confirmed house-specific instructions. Confirm them with the owners before treating them as house rules. Filter intervals and service dates must be confirmed for the actual equipment.

Checklist checkmarks are stored in this browser's local storage. They do not synchronize between family members or devices and are not maintenance records. Use Reset for a new visit. Search and contact filters run entirely in the browser.

## Local preview

Run `python3 -m http.server 4173 --bind 127.0.0.1` from this folder, then visit `http://127.0.0.1:4173`.

## Files

- `index.html`: page structure and address
- `styles.css`: responsive layout, typography, and print styles
- `data.js`: shared house content
- `app.js`: rendering, search, filters, and checklist
- `assets/perch-lake.webp`: original supplied house photograph

Google Fonts supplies DM Sans and Manrope, with local fallback fonts. Maps opens only when a visitor chooses Get directions.
