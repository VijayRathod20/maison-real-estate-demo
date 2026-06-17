# Maison & Co. — Real Estate Demo

A clean, high-end property-listings website demo built to match the client brief:
search by **price / location / amenity**, an **interactive map**, listing detail
views, fully **responsive**, and **SEO-ready**. No login required.

## Open it
Just double-click `index.html` (needs internet — it loads map tiles, fonts and
sample photos from the web).

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure + SEO meta tags + schema.org data |
| `styles.css` | All styling (luxury serif + clean sans, gold accent, responsive) |
| `data.js`    | Sample listings — **edit this to swap in the client's data** |
| `app.js`     | Search filtering, map markers, detail modal |

## What it demonstrates (maps 1:1 to the brief)
- ✅ Search bar filtering by **price (min/max), location, amenities**
- ✅ **Interactive map** with a pin per listing (Leaflet/OpenStreetMap — swaps to
  Google Maps or Wix Maps in the real build)
- ✅ **Listing detail** view (modal here → dynamic page in Wix)
- ✅ **Open catalogue**, no member login
- ✅ **Responsive** desktop + mobile
- ✅ **SEO**: title, meta description, Open Graph, canonical, structured data

## How this becomes the live Wix site
1. `data.js` records → a **Wix Data Collection (CMS)** with the same fields.
2. Each card → a **dynamic page** bound to the collection.
3. Search bar → Wix **dataset filters** (or a few lines of Velo).
4. Map → **Wix Maps app** or a Google Maps embed pulling lat/lng from the CMS.
5. Connect the domain, test responsiveness, hand over editor access + walkthrough.

> This is a front-end prototype for client review/bidding. The production site is
> rebuilt natively in Wix so the client can add listings themselves.
