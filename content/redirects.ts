import type { RedirectRule } from './types';

export const redirects: RedirectRule[] = [
  { from: '/home', to: '/', permanent: true },
  { from: '/team', to: '/our-team', permanent: true },
  { from: '/blog', to: '/news-insights', permanent: true },
];
