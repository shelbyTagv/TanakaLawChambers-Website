import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPublishedNews } from '@/lib/content';

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getPublishedNews().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedNews().find((item) => item.slug === slug);
  if (!article) return { title: 'Article not found' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const article = getPublishedNews().find((item) => item.slug === slug);
  if (!article) return notFound();

  return (
    <div className="page-shell">
      <article className="content-card glass-panel">
        <div className="card-image"><Image src={article.featuredImage} alt={article.title} width={900} height={500} /></div>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <p>{article.body}</p>
        <div className="hero-actions">
          <Link href="/news-insights" className="button-secondary">Back to news</Link>
        </div>
      </article>
    </div>
  );
}
