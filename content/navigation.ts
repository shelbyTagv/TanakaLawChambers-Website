import type { NavigationConfig } from './types';

export const navigation: NavigationConfig = {
  items: [
    { label: 'About Us', href: '/about-us', order: 1, visible: true },
    { label: 'Services', href: '/services', order: 2, visible: true },
    { label: 'Our Team', href: '/our-team', order: 3, visible: true },
    { label: 'News & Insights', href: '/news-insights', order: 4, visible: true },
    { label: 'Contact Us', href: '/contact-us', order: 5, visible: true },
  ],
  ctaButton: { label: 'Book a Consultation', href: '/contact-us' },
};
