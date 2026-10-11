import type { FooterConfig } from './types';

export const footer: FooterConfig = {
  columns: [
    {
      heading: 'Connect',
      links: [
        { label: 'Address', href: '/contact-us' },
        { label: 'Phone', href: '/contact-us' },
        { label: 'Email', href: '/contact-us' },
        { label: 'WhatsApp', href: '/contact-us' },
        { label: 'Office Hours', href: '/contact-us' },
        { label: 'Contact Us', href: '/contact-us' },
      ],
    },
    {
      heading: 'About Us',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Our Team', href: '/our-team' },
        { label: 'Services', href: '/services' },
        { label: 'News & Insights', href: '/news-insights' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Site Map', href: '/site-map' },
      ],
    },
    {
      heading: 'Follow Us',
      links: [
        { label: 'Facebook', href: 'https://www.facebook.com/share/1FbfCPoaoj/' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Site Map', href: '/site-map' },
  ],
};
