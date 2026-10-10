import type { Metadata } from 'next';
import Link from 'next/link';
import { getPages, getServices, getPublishedNews } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Site Map',
  description: 'Browse the Tanaka Law Chambers website map.',
};

export default function SiteMapPage() {
  const pages = getPages();
  const services = getServices();
  const news = getPublishedNews();

  return (
    <div className="page-shell">
      <article className="content-card glass-panel">
        <h1>Site Map</h1>
        <ul className="site-map-list">
          {pages.map((page) => (
            <li key={page.slug}><Link href={page.canonical}>{page.title}</Link></li>
          ))}
          {services.map((service) => (
            <li key={service.slug}><Link href={`/services/${service.slug}/`}>{service.name}</Link></li>
          ))}
          {news.map((article) => (
            <li key={article.slug}><Link href={`/news-insights/${article.slug}/`}>{article.title}</Link></li>
          ))}
        </ul>
      </article>
    </div>
  );
}
