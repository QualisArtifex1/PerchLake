# Perch Lake — the house guide

A responsive family lake-house reference site, built with plain HTML, CSS, and JavaScript. No build step or paid services are required.

## Hosting and privacy

Intended for public GitHub Pages, as requested. The house photo and address are public. The `noindex` directive asks search engines not to index the site; it **does not restrict access**. The owner has requested publication of the listed provider, neighbor, and HOA contact numbers. Do not add further private information, key locations, entry codes, Wi-Fi passwords, or financial account information without explicit owner instructions. Share those directly with family or move the site behind genuine access control first.

## Update the guide

Edit `data.js` to update maintenance, public business contacts, HOA information, house essentials, or checklist items. Missing details are intentionally labeled rather than invented. Dates use `YYYY-MM-DD`; blank values use `null`. Each checklist item needs a unique, stable `id`.

Commit and push updates to the `main` branch. GitHub Pages should publish from `/` on `main`. No GitHub token or password belongs in the website.

The eight departure items are a suggested starter checklist, not confirmed house-specific instructions. Confirm them with the owners before treating them as house rules. The owner specified six-month intervals for the furnace, downstairs water filters, and upstairs sink filter. Last replacement dates are still unknown. Softener salt is refilled as needed; the owner confirmed Solar Salt (blue bag) or Dura Cube, with no pellets, despite the photographed Dura-Cube-only sticker.

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

## Water-system reference photos

All eight owner-supplied HEIC photos were converted to browser-compatible JPEGs in `assets/water-system/`. EXIF, IPTC, and comment metadata were stripped from the published copies. Captions describe visible equipment; the photographed GAC-BB cartridge has not been assigned to a specific housing. Historical handwritten dates are not treated as the current maintenance record. The filter-change guide adds pressure relief before opening housings and a leak check, with a Pentair reference; the installed valve layout and exact model still need confirmation.
