import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-grid-bg" />
      <div className="cta-glow" />
      <Image className="cta-bg-logo" src="/logo/bronze_OTT.png" alt="" width={680} height={680} />
      <div className="cta-bg-text" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>ВЛЕЗ</div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="cta-h2 rev" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Резервирај го<br /><em>своето</em> место
        </h2>
        <Link href="#" className="btn-cta rev on" style={{ fontFamily: 'var(--font-barlow)' }}>Купи билет</Link>
        <div className="cta-info rev">
          {[
            { label: 'Достапност', val: 'Секојдневно\n24/7 онлајн' },
            { label: 'Целна група', val: 'Деца, ученици\nи семејства' },
            { label: 'Јазик', val: 'Македонски\nјазик' },
            { label: 'Влез', val: 'Бесплатна\nрегистрација' },
          ].map(({ label, val }) => (
            <div key={label}>
              <div className="cta-info-label" style={{ fontFamily: 'var(--font-barlow)' }}>{label}</div>
              <div className="cta-info-val" style={{ fontFamily: 'var(--font-barlow-condensed)', whiteSpace: 'pre-line' }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
