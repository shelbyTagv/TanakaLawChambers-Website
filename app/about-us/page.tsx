import type { Metadata } from 'next';
import Link from 'next/link';
import { settings } from '@/content/settings';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Tanaka Law Chambers, our values and the clients we support in Zimbabwe and southern Africa.',
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <header className="page-header glass-panel content-card">
        <h1>A Zimbabwean commercial firm with a global outlook.</h1>
        <p>{settings.brandStatement}</p>
      </header>

      <section className="content-card glass-panel">
        <h2>Our approach</h2>
        <p>Tanaka Law Chambers works with businesses, families and individuals who need clear, practical legal advice. We combine diligence, commercial judgment and strong advocacy to help clients move forward with confidence.</p>
        <p>Our work spans corporate and commercial matters, litigation, property and family issues, immigration, and advisory work for clients operating across Zimbabwe and southern Africa.</p>
        <div className="hero-actions">
          <Link href="/contact-us" className="button-primary">Book a Consultation</Link>
          <Link href="/our-team" className="button-secondary">Meet the team</Link>
        </div>
      </section>
    </div>
  );
}
