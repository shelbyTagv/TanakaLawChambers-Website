import type { Metadata } from 'next';
import Image from 'next/image';
import { getTeam } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the lawyers and advisors at Tanaka Law Chambers.',
};

export default function TeamPage() {
  const team = getTeam();
  const leadership = team.filter((member) => ['Managing Partner', 'Senior Partner', 'Associate Partner'].includes(member.role));
  const legalTeam = team.filter((member) => ['Associate Attorney', 'Associate', 'Legal Associate'].includes(member.role));
  const support = team.filter((member) => member.role === 'Administrator');
  const interns = team.filter((member) => member.role.includes('Intern'));

  const renderGroup = (title: string, members: typeof team) =>
    members.length > 0 ? (
      <section className="team-section">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className="team-grid">
          {members.map((member) => (
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
        </div>
      </section>
    ) : null;

  return (
    <div className="page-shell">
      <header className="page-header glass-panel content-card">
        <h1>Our team of lawyers and advisors.</h1>
        <p>Experienced professionals helping clients move forward with clarity and confidence.</p>
      </header>

      {renderGroup('Leadership', leadership)}
      {renderGroup('Legal Team', legalTeam)}
      {renderGroup('Administration', support)}
      {renderGroup('Interns', interns)}
    </div>
  );
}
