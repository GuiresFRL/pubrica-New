import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — Pubrica',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="view">
      <section className="ahero">
        <div className="wrap">
          <p className="crumb">Pubrica</p>
          <h1>That page is not here</h1>
          <p className="lede">
            The address may have changed, or the link that brought you here may be
            out of date. The pages below are the usual way in.
          </p>
          <p className="ahero__btns">
            <Link className="btn btn--mark" href="/">Home</Link>
            <Link className="btn" href="/services/">Services</Link>
            <Link className="btn" href="/academy/">Academy</Link>
            <Link className="btn" href="/contact-us/">Contact us</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
