import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Tanaka Law Chambers.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-shell">
      <article className="legal-card glass-panel">
        <h1>Privacy Policy</h1>
        <p>We handle personal information responsibly and only for legitimate business purposes. This website may record basic contact details when you send an enquiry or use our contact form.</p>
        <p>We use information to respond to your enquiries, improve the quality of our services and communicate with you in relation to legal services. We do not sell personal data.</p>
        <p>For any privacy concerns, contact our team using the details on the contact page.</p>
        <Link href="/contact-us" className="button-primary">Contact us</Link>
      </article>
    </div>
  );
}
