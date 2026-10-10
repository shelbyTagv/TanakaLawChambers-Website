import type { MetadataRoute } from 'next';
import { getPublishedNews, getPages, getService, getServices, getTeam } from '@/lib/content';
import { settings } from '@/content/settings';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = settings.siteUrl;
  const pages = getPages().map((page) => ({
    url: `${base}${page.canonical}`,
    lastModified: new Date(),
  }));
  const services = getServices().map((service) => ({
    url: `${base}/services/${service.slug}/`,
    lastModified: new Date(),
  }));
  const news = getPublishedNews().map((article) => ({
    url: `${base}/news-insights/${article.slug}/`,
    lastModified: new Date(),
  }));
  const team = getTeam().map((member) => ({
    url: `${base}/our-team/`,
    lastModified: new Date(),
  }));

  return [...pages, ...services, ...news, ...team];
}
