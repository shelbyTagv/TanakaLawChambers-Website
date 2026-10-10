'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { getNavigation, getServices, getTeam, getPublishedNews } from '@/lib/content';

export function Header() {
  const pathname = usePathname();
  const navigation = getNavigation();
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const searchTerm = query.toLowerCase();
    const services = getServices().filter((service) => service.name.toLowerCase().includes(searchTerm) || service.summary.toLowerCase().includes(searchTerm));
    const team = getTeam().filter((member) => member.name.toLowerCase().includes(searchTerm) || member.practiceAreas.join(' ').toLowerCase().includes(searchTerm));
    const news = getPublishedNews().filter((article) => article.title.toLowerCase().includes(searchTerm) || article.excerpt.toLowerCase().includes(searchTerm));
    return [...services.map((item) => ({ label: item.name, href: `/services/${item.slug}/`, category: 'Service' })), ...team.map((item) => ({ label: item.name, href: `/our-team/`, category: 'Team' })), ...news.map((item) => ({ label: item.title, href: `/news-insights/${item.slug}/`, category: 'News' }))].slice(0, 6);
  }, [query]);

  return (
    <header className="site-header glass-panel">
      <div className="nav-shell">
        <Link href="/" className="brand-logo" aria-label="Tanaka Law Chambers home">
          <Image src="/images/logo.svg" alt="Tanaka Law Chambers logo" width={200} height={70} priority />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-item"
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input
              aria-label="Search site"
              type="search"
              value={query}
              placeholder="Search services, team, news"
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && results.length > 0 && (
              <div className="search-results">
                {results.map((result) => (
                  <Link key={`${result.href}-${result.label}`} href={result.href} onClick={() => setQuery('')}>
                    <strong>{result.label}</strong>
                    <div>{result.category}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href={navigation.ctaButton.href} className="button-primary">
            {navigation.ctaButton.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
