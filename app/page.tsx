import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { settings } from '@/content/settings';
import { getApprovedReviews, getPublishedNews, getServices, getTeamMember } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Tanaka Law Chambers | Commercial Law Firm in Zimbabwe',
  description: 'Commercial law, practical advice, real results.',
};

export default function HomePage() {
  const services = getServices().filter((service) => service.flagship).slice(0, 4);
  const reviews = getApprovedReviews().slice(0, 3);
  const articles = getPublishedNews().slice(0, 3);
  const managingPartner = getTeamMember('dr-tanaka-muganyi');

  return (
    <div className="page-shell">
      <section className="hero glass-panel">
        <div className="hero-copy">
          <h1>{settings.heroHeadline}</h1>
          <p>{settings.heroSubline}</p>
          <div className="hero-actions">
            <Link href="/contact-us" className="button-primary">Book a Consultation</Link>
            <a href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(settings.whatsappPrefill)}`} target="_blank" rel="noreferrer" className="button-secondary">Chat on WhatsApp</a>
          </div>
          <div className="trust-line">{settings.trustLine}</div>
          <p className="hero-description">
            Tanaka Law Chambers is a leading Zimbabwean commercial law firm with a regional footprint and a global outlook. We provide sophisticated legal solutions to businesses, investors, financial institutions, and public sector clients, combining deep local market knowledge with internationally informed legal expertise. Our firm possesses an in-depth understanding of Zimbabwe&apos;s legal, regulatory, and commercial landscape, enabling us to deliver practical, strategic, and commercially focused legal advice that supports clients in navigating both domestic and cross-border transactions with confidence.
          </p>
        </div>

        <div className="video-panel glass-panel">
          <Image src={settings.videoPoster} alt="Video preview" width={960} height={540} />
          {settings.videoUrl ? <button type="button" className="video-button" aria-label="Play video" /> : <div className="video-button" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Our expertise</h2>
          <Link href="/services" className="button-secondary">View all services</Link>
        </div>
        <div className="feature-grid">
          {services.map((service) => (
            <article className="service-card glass-panel" key={service.slug}>
              <div className="card-image"><Image src={service.image} alt={service.name} width={400} height={240} /></div>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <Link href={`/services/${service.slug}/`} className="button-secondary">Read more</Link>
            </article>
          ))}
        </div>
      </section>

      {managingPartner && (
        <section className="section glass-panel" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'minmax(220px, 340px) 1fr', gap: '1rem', alignItems: 'center' }}>
          <div className="team-frame">
            <Image src={managingPartner.photo.src} alt={managingPartner.photo.alt} width={managingPartner.photo.width} height={managingPartner.photo.height} />
          </div>
          <div>
            <h2>Managing Partner</h2>
            <h3>{managingPartner.name}</h3>
            <p>{managingPartner.role}</p>
            <p>{managingPartner.quote}</p>
            <Image src="/images/the-legal-choice.svg" alt="The Legal Choice" width={280} height={80} />
            <div className="hero-actions">
              <Link href="/our-team" className="button-primary">Meet the team</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-heading">
          <h2>Client reviews</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card glass-panel" key={review.id}>
              <p>“{review.quote}”</p>
              <strong>{review.clientName}</strong>
              <div>{review.clientRole}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>News & Insights</h2>
          <Link href="/news-insights" className="button-secondary">Read all articles</Link>
        </div>
        <div className="news-grid">
          {articles.map((article) => (
            <article className="news-card glass-panel" key={article.slug}>
              <div className="card-image"><Image src={article.featuredImage} alt={article.title} width={375} height={220} /></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link href={`/news-insights/${article.slug}/`} className="button-secondary">Read more</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass-panel callout">
        <div>
          <h2>Need advice tailored to your matter?</h2>
        </div>
        <Link href="/contact-us" className="button-primary">Book a Consultation</Link>
      </section>
    </div>
  );
}
