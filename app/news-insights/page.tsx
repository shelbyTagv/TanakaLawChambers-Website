import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPublishedNews } from '@/lib/content';

export const metadata: Metadata = {
  title: 'News & Insights',
  description: 'Read articles and insights from Tanaka Law Chambers.',
};

export default function NewsPage() {
  const articles = getPublishedNews();

  return (
    <div className="page-shell">
      <header className="page-header glass-panel content-card">
        <h1>News & Insights</h1>
        <p>Thought leadership and practical updates for businesses and individuals operating in Zimbabwe.</p>
      </header>

      <section className="news-grid">
        {articles.map((article) => (
          <article className="news-card glass-panel" key={article.slug}>
            <div className="card-image"><Image src={article.featuredImage} alt={article.title} width={400} height={220} /></div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <Link href={`/news-insights/${article.slug}/`} className="button-secondary">Read more</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
