# Tanaka Law Chambers

A Next.js law firm website built for Vercel, using static generation and dictionary-based content management.

## Local run

1. Install dependencies:
   npm install
2. Start the development site:
   npm run dev
3. Open http://localhost:3000

## Content editing

All site content is maintained in the dictionary files under `/content`.

- `settings.ts`
- `navigation.ts`
- `pages.ts`
- `services.ts`
- `team.ts`
- `reviews.ts`
- `news.ts`
- `faqs.ts`
- `footer.ts`
- `backgrounds.ts`
- `redirects.ts`
- `strings.ts`

Edit those files, commit and push to GitHub. Vercel will redeploy automatically.

## Validation

Run:

npm run validate:content
npm run lint
npm run build

## Vercel deployment

1. Push this project to a GitHub repository.
2. In Vercel, choose Add New Project and import the repository.
3. Accept the detected Next.js preset; the build command is `next build`.
4. Click Deploy.
5. Set `siteUrl` in `/content/settings.ts` to the final production domain.
6. Add a custom domain in Vercel under Settings > Domains.
7. Update DNS as instructed by Vercel.

## Placeholder and missing asset list

The following items are placeholders and must be replaced by the client before launch:

- Phone: `+263 00 000 0000` in `/content/settings.ts` — PLACEHOLDER
- WhatsApp: `+263000000000` in `/content/settings.ts` — PLACEHOLDER
- Email: `info@example.com` in `/content/settings.ts` — PLACEHOLDER
- Office address: `[Add office address]` in `/content/settings.ts` — PLACEHOLDER
- `siteUrl`: `https://example.com` in `/content/settings.ts` — PLACEHOLDER
- Video URL: empty string in `/content/settings.ts` — placeholder until supplied
- Contact social links in `/content/settings.ts` — placeholder URLs
- High-resolution photography for home/about/services/team/news/contact backgrounds
- Team portraits for each lawyer
- Managing partner portrait for Dr. Tanaka Muganyi
- Legal script logo image for “The Legal Choice”
- Any approved client review content beyond the sample dataset
- Final office address and phone details

## Asset notes

The project uses local placeholder SVGs in `/public/images` so the site can build without client-supplied media. The home page background is intentionally a placeholder and should be replaced with a photograph at least 2400 px wide for best performance and visual quality.

## Summary of what was built

This project creates a static Next.js law-firm website with:

- glassmorphism design on a shared full-viewport photograph background
- typed dictionaries for all content
- static pages for home, about, services, team, news, contact and legal pages
- consultation form with mailto and WhatsApp fallback
- footer and primary navigation
- sitemap and robots output
- content validation script to catch missing values and broken asset references

## Testing

This build was checked by running the content validator, ESLint, and the production Next.js build.
