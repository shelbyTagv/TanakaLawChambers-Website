import type { Metadata } from 'next';
import Image from 'next/image';
import { getTeam } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the lawyers and advisors at Tanaka Law Chambers.',
};

export default function TeamPage() {
  const team = getTeam();

  return (
    <div className="page-shell">
      <header className="page-header glass-panel content-card">
        <h1>Our team of lawyers and advisors.</h1>
        <p>Experienced professionals helping clients move forward with clarity and confidence.</p>
      </header>

      <section className="team-grid">
        {team.map((member) => (
          <article className="team-card glass-panel" key={member.slug}>
            <div className="team-frame"><Image src={member.photo.src} alt={member.photo.alt} width={member.photo.width} height={member.photo.height} /></div>
            <div className="meta">
              <h3>{member.name}</h3>
              <strong>{member.role}</strong>
              <span>{member.practiceAreas.join(', ')}</span>
              <p>{member.bio}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
