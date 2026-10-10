import type { Metadata } from 'next';
import { ConsultationForm } from '@/components/ConsultationForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book a consultation with Tanaka Law Chambers.',
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <header className="page-header glass-panel content-card">
        <h1>Book a consultation</h1>
        <p>Tell us about your matter and we will respond promptly.</p>
      </header>

      <section className="content-card glass-panel">
        <ConsultationForm />
      </section>
    </div>
  );
}
