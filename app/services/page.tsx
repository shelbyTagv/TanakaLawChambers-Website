import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getServices } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the practice areas supported by Tanaka Law Chambers.',
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <div className="page-shell">
      <header className="page-header glass-panel content-card">
        <h1>Commercial legal services tailored to your needs.</h1>
        <p>Our lawyers advise on disputes, structure, transactions, compliance and family issues across Zimbabwe and broader regional markets.</p>
      </header>

      <section className="service-grid">
        {services.map((service) => (
          <article className="service-card glass-panel" key={service.slug}>
            <div className="card-image"><Image src={service.image} alt={service.name} width={400} height={220} /></div>
            <h3>{service.name}</h3>
            <p>{service.summary}</p>
            <Link href={`/services/${service.slug}/`} className="button-secondary">Read more</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
