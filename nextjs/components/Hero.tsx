import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-img-bg" />
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-overline" style={{ fontFamily: 'var(--font-barlow)' }}>
          Виртуелен Музеј · Охрид · 2025
        </div>
        <h1 className="hero-h1" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Историјата<br />
          <em>Оживеана</em><br />
          Од Ново
        </h1>
        <p className="hero-sub" style={{ fontFamily: 'var(--font-barlow)' }}>
          Девет соби. Векови на македонска историја. Едно незаборавно, интерактивно патување.
        </p>
        <div className="hero-actions">
          <Link href="/#sobi" className="btn-gold" style={{ fontFamily: 'var(--font-barlow)' }}>
            Истражувај соби
          </Link>
          <Link href="/#cta" className="btn-ghost" style={{ fontFamily: 'var(--font-barlow)' }}>
            Купи билет →
          </Link>
        </div>
        <div className="hero-scroll">
          <span style={{ fontFamily: 'var(--font-barlow)' }}>Скролај</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}
