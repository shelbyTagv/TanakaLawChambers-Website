import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Legal disclaimer for Tanaka Law Chambers.',
};

export default function DisclaimerPage() {
  return (
    <div className="page-shell">
      <article className="legal-card glass-panel">
        <h1>Disclaimer</h1>
        <p>Information on this website is general in nature and does not constitute legal advice. Legal advice depends on the facts of each matter and should be sought from a qualified lawyer.</p>
        <p>We do our best to keep information accurate and up to date, but the site is not a substitute for tailored legal advice or a client-lawyer relationship.</p>
        <Link href="/contact-us" className="button-primary">Book a consultation</Link>
      </article>
    </div>
  );
}
