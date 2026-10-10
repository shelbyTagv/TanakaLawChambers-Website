import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for is not available.',
};

export default function NotFoundPage() {
  return (
    <div className="page-shell">
      <section className="content-card glass-panel">
        <h1>Page not found</h1>
        <p>The page you are looking for may have moved or no longer exists.</p>
        <Link href="/" className="button-primary">Return home</Link>
      </section>
    </div>
  );
}
