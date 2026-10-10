import type { BackgroundRecord } from './types';

export const backgrounds: BackgroundRecord[] = [
  { id: 'home', name: 'Home', image: '/images/bg-home.svg', focusPosition: '76% 55%', alt: 'Courtroom interior with bench and desk' },
  { id: 'about', name: 'About Us', image: '/images/bg-about.svg', focusPosition: '50% 50%', alt: 'Warm boardroom interior' },
  { id: 'services', name: 'Services', image: '/images/bg-services.svg', focusPosition: '50% 45%', alt: 'Law library with leather-bound books' },
  { id: 'team', name: 'Our Team', image: '/images/bg-team.svg', focusPosition: '50% 50%', alt: 'Modern office corridor' },
  { id: 'news', name: 'News', image: '/images/bg-news.svg', focusPosition: '65% 50%', alt: 'Desk with documents and laptop' },
  { id: 'contact', name: 'Contact', image: '/images/bg-contact.svg', focusPosition: '50% 55%', alt: 'Reception desk and office exterior' },
  { id: 'legal', name: 'Legal Pages', image: '/images/bg-legal.svg', focusPosition: '50% 50%', alt: 'Soft focus law books' },
  { id: 'not-found', name: 'Not Found', image: '/images/bg-404.svg', focusPosition: '70% 60%', alt: 'Close-up of a gavel' },
];

export const backgroundMap = Object.fromEntries(backgrounds.map((background) => [background.id, background]));
