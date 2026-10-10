import '@/app/globals.css';
import type { Metadata } from 'next';
import { Figtree, Newsreader } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PageBackground } from '@/components/PageBackground';
import { settings } from '@/content/settings';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-body' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL(settings.siteUrl),
  title: {
    default: 'Tanaka Law Chambers | Commercial Law Firm in Zimbabwe',
    template: '%s | Tanaka Law Chambers',
  },
  description: 'Commercial law and advisory services for businesses and individuals in Zimbabwe.',
  openGraph: {
    title: 'Tanaka Law Chambers',
    description: 'Commercial law, practical advice, real results.',
    type: 'website',
    siteName: 'Tanaka Law Chambers',
    images: [{ url: settings.defaultOgImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanaka Law Chambers',
    description: 'Commercial law, practical advice, real results.',
    images: [settings.defaultOgImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZW" suppressHydrationWarning>
      <body className={`${figtree.variable} ${newsreader.variable}`}>
        <PageBackground />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="site-shell">
          <Header />
          <main id="main-content" className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
