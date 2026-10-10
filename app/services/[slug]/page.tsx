import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getService, getServices, getTeam } from '@/lib/content';

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Service not found' };
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  const team = getTeam().filter((member) => service.relatedTeam.includes(member.slug));

  return (
    <div className="page-shell">
      <header className="page-header glass-panel content-card">
        <h1>{service.name}</h1>
        <p>{service.intro}</p>
      </header>

      <article className="content-card glass-panel">
        <div className="card-image"><Image src={service.image} alt={service.name} width={800} height={420} /></div>
        <p>{service.summary}</p>
        <ul>
          {service.howWeHelp.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <div className="hero-actions">
          <Link href="/contact-us" className="button-primary">Book a Consultation</Link>
          <Link href="/services" className="button-secondary">Back to services</Link>
        </div>
      </article>

      <section className="section">
        <h2>Frequently asked questions</h2>
        <div className="faq-grid">
          {service.faq.map((item) => (
            <article key={item.question} className="faq-card glass-panel">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {team.length > 0 && (
        <section className="section">
          <h2>Related team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card glass-panel" key={member.slug}>
                <div className="team-frame"><Image src={member.photo.src} alt={member.photo.alt} width={member.photo.width} height={member.photo.height} /></div>
                <div className="meta"><strong>{member.name}</strong><span>{member.role}</span></div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
