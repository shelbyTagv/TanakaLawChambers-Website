import fs from 'node:fs';
import path from 'node:path';

import { backgrounds } from '@/content/backgrounds';
import { footer } from '@/content/footer';
import { navigation } from '@/content/navigation';
import { news } from '@/content/news';
import { pages } from '@/content/pages';
import { reviews } from '@/content/reviews';
import { services } from '@/content/services';
import { settings } from '@/content/settings';
import { team } from '@/content/team';

const root = process.cwd();
const publicDir = path.join(root, 'public');

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function ensureFileExists(filePath: string) {
  const relative = filePath.replace(/^\/+/, '');
  const resolved = path.join(publicDir, relative);
  assert(fs.existsSync(resolved), `Missing required asset: ${filePath}`);
}

const requiredSettings = [
  'firmName',
  'tagline',
  'heroHeadline',
  'heroSubline',
  'trustLine',
  'logo',
  'siteUrl',
  'phone',
  'email',
  'whatsappNumber',
  'whatsappPrefill',
  'address',
  'mapEmbed',
  'officeHours',
  'social',
  'videoUrl',
  'videoPoster',
  'defaultOgImage',
  'copyrightText',
  'brandStatement',
  'generalDisclaimer',
  'cookieBannerText',
] as const;

for (const key of requiredSettings) {
  assert(settings[key] !== undefined && settings[key] !== null, `Missing required setting: ${String(key)}`);
}

const serviceSlugs = services.map((service) => service.slug);
const duplicateServiceSlugs = serviceSlugs.filter((slug, index) => serviceSlugs.indexOf(slug) !== index);
assert(duplicateServiceSlugs.length === 0, `Duplicate service slugs: ${duplicateServiceSlugs.join(', ')}`);

const pageSlugs = Object.keys(pages);
const duplicatePageSlugs = pageSlugs.filter((slug, index) => pageSlugs.indexOf(slug) !== index);
assert(duplicatePageSlugs.length === 0, `Duplicate page slugs: ${duplicatePageSlugs.join(', ')}`);

const teamSlugs = team.map((member) => member.slug);
const duplicateTeamSlugs = teamSlugs.filter((slug, index) => teamSlugs.indexOf(slug) !== index);
assert(duplicateTeamSlugs.length === 0, `Duplicate team slugs: ${duplicateTeamSlugs.join(', ')}`);

for (const service of services) {
  assert(service.name, `Service missing name: ${service.slug}`);
  assert(service.summary, `Service missing summary: ${service.slug}`);
  assert(service.image, `Service missing image: ${service.slug}`);
  ensureFileExists(service.image);
  assert(service.relatedTeam.length > 0, `Service missing related team: ${service.slug}`);
}

for (const member of team) {
  assert(member.photo.src, `Team member missing photo: ${member.slug}`);
  ensureFileExists(member.photo.src);
}

for (const article of news) {
  assert(article.title, `News article missing title: ${article.slug}`);
  if (!article.draft) {
    assert(article.author, `Published article missing author: ${article.slug}`);
  }
  ensureFileExists(article.featuredImage);
}

for (const review of reviews) {
  if (review.approved) {
    assert(review.quote, `Approved review missing quote: ${review.id}`);
  }
}

const allBackgrounds = backgrounds.map((background) => background.image);
for (const bg of allBackgrounds) {
  ensureFileExists(bg);
}

assert(navigation.items.length > 0, 'Navigation items missing');
assert(footer.columns.length >= 4, 'Footer columns are incomplete');

console.log('Content validation passed.');
