import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Tanaka Law Chambers.',
};

export default function CookiePolicyPage() {
  return (
    <div className="page-shell">
      <article className="legal-card glass-panel">
        <h1>Cookie Policy</h1>
        <p>We may use cookies to improve site quality, understand traffic and support accessibility. We use cookies only where necessary and do not place invasive tracking without your consent.</p>
        <p>Visitors may manage or disable cookies through their browser settings. Some functionality may be reduced if cookies are disabled.</p>
        <Link href="/contact-us" className="button-secondary">Contact us</Link>
      </article>
    </div>
  );
}
