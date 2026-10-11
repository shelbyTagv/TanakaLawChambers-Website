import type { Metadata } from 'next';
import { ConsultationForm } from '@/components/ConsultationForm';
import { settings } from '@/content/settings';

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

      <section className="contact-details-grid">
        <div className="content-card glass-panel">
          <h2>Contact details</h2>
          <ul className="contact-list">
            <li>
              <strong>Office address</strong>
              <span>{settings.address}</span>
            </li>
            <li>
              <strong>Phone</strong>
              <a href={`tel:${settings.phone.replace(/\s+/g, '')}`}>{settings.phone}</a>
            </li>
            <li>
              <strong>WhatsApp</strong>
              <a href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{settings.whatsappNumber}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </li>
            <li>
              <strong>Office hours</strong>
              <span>{settings.officeHours}</span>
            </li>
          </ul>
        </div>

        <div className="content-card glass-panel">
          <h2>Find us</h2>
          <div className="map-frame">
            <iframe
              title="Tanaka Law Chambers location"
              src={settings.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="content-card glass-panel">
        <ConsultationForm />
      </section>
    </div>
  );
}
