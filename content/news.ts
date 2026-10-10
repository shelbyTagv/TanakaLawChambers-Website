import type { NewsArticle } from './types';

export const news: NewsArticle[] = [
  {
    slug: 'commercial-contracts-what-businesses-should-review-now',
    title: 'Commercial contracts: what businesses should review now',
    excerpt: 'A practical checklist for governance, risk and contract discipline in a changing business environment.',
    body: 'Commercial contracts need regular review to reflect shifting obligations, compliance requirements and commercial priorities. This article outlines key areas businesses should check now.',
    featuredImage: '/images/news-1.svg',
    author: 'dr-tanaka-muganyi',
    category: 'Commercial Law',
    tags: ['Contracts', 'Risk', 'Compliance'],
    publishDate: '2025-03-18',
    draft: false,
  },
  {
    slug: 'estate-planning-for-succession-and-asset-protection',
    title: 'Estate planning for succession and asset protection',
    excerpt: 'Thoughtful succession planning helps families preserve value and reduce avoidable disputes.',
    body: 'Good estate planning enables families and business owners to manage succession with clarity and protect assets for future generations.',
    featuredImage: '/images/news-2.svg',
    author: 'amanda-makoni',
    category: 'Private Client',
    tags: ['Estate', 'Succession', 'Planning'],
    publishDate: '2025-02-26',
    draft: false,
  },
  {
    slug: 'workplace-compliance-what-employers-should-watch',
    title: 'Workplace compliance: what employers should watch',
    excerpt: 'A clear guide to compliance, policy review and risk mitigation in modern workplaces.',
    body: 'Employment law compliance is not only about written policies. It is also about consistent process, documentation and proactive review.',
    featuredImage: '/images/news-3.svg',
    author: 'jabulani-nyamunda',
    category: 'Employment',
    tags: ['Employment', 'Compliance', 'Labour'],
    publishDate: '2025-01-14',
    draft: false,
  },
  {
    slug: 'draft-article-hidden-from-public',
    title: 'Draft article not yet published',
    excerpt: 'This article is intentionally draft only.',
    body: 'This content should remain unpublished until the firm is ready to share it publicly.',
    featuredImage: '/images/news-draft.svg',
    author: 'dr-tanaka-muganyi',
    category: 'Draft',
    tags: ['Draft'],
    publishDate: '2025-04-10',
    draft: true,
  },
];

export const publishedNews = news.filter((article) => !article.draft).sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));
