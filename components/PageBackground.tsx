'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { backgroundMap } from '@/content/backgrounds';

export function PageBackground() {
  const pathname = usePathname();
  const normalizedPath = pathname === '/' ? 'home' : pathname.replace(/\/+$/, '').replace('/', '').split('/')[0] || 'home';
  const backgroundId =
    normalizedPath === 'about-us'
      ? 'about'
      : normalizedPath === 'services'
        ? 'services'
        : normalizedPath === 'our-team'
          ? 'team'
          : normalizedPath === 'news-insights'
            ? 'news'
            : normalizedPath === 'contact-us'
              ? 'contact'
              : normalizedPath === 'privacy-policy' || normalizedPath === 'cookie-policy' || normalizedPath === 'disclaimer' || normalizedPath === 'site-map'
                ? 'legal'
                : 'home';
  const bg = backgroundMap[backgroundId] ?? backgroundMap.home;

  return (
    <div className="page-background" aria-hidden="true">
      <Image src={bg.image} alt={bg.alt} fill priority style={{ objectFit: 'cover', objectPosition: bg.focusPosition }} />
    </div>
  );
}
