import Link from 'next/link';
import Image from 'next/image';
import { settings } from '@/content/settings';
import { footer } from '@/content/footer';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell glass-panel">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand-logo" aria-label="Tanaka Law Chambers home">
              <Image src={settings.logo} alt="Tanaka Law Chambers logo" width={180} height={64} />
            </Link>
            <p>{settings.brandStatement}</p>
          </div>
          <Link href="/contact-us" className="button-primary">Book a Consultation</Link>
        </div>

        <div className="footer-grid footer-columns">
          {footer.columns.map((column) => (
            <div key={column.heading} className="footer-column">
              <h3>{column.heading}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>{link.label}</a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div>{settings.copyrightText}</div>
          <div>{settings.brandStatement}</div>
          <div>Information on this website is general and does not constitute legal advice.</div>
        </div>
      </div>
    </footer>
  );
}
