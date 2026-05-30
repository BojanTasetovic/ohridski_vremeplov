import Image from 'next/image';
import Link from 'next/link';

export default function Teatar() {
  return (
    <section className="teatar-section rev" id="teatar">
      <div className="teatar-bg">
        <Image src="/rooms/teatar-bg.png" alt="" fill className="teatar-bg-img" style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.38 }} />
        <div className="teatar-bg-over" />
      </div>
      <div className="teatar-content">
        <div>
          <div className="teatar-eyebrow rev on" style={{ fontFamily: 'var(--font-barlow)' }}>Соба 2 · Кино · Мултимедија</div>
          <h2 className="teatar-h2 rev on" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Античкиот<br /><em>Театар</em><br />Оживеан
          </h2>
          <p className="teatar-p rev on" style={{ fontFamily: 'var(--font-barlow)' }}>
            Седнете во нашата кино-сала и доживеете ја историјата на Античкиот театар на Охрид — место на претстави, свечености и духовен живот пред 2000 години. Вистински кино-доживување со оригинална атмосфера.
          </p>
          <div className="teatar-stats rev on">
            <div>
              <span className="teatar-stat-num" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>IV п.н.е.</span>
              <span className="teatar-stat-lab" style={{ fontFamily: 'var(--font-barlow)' }}>Изграден</span>
            </div>
            <div>
              <span className="teatar-stat-num" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>3 500</span>
              <span className="teatar-stat-lab" style={{ fontFamily: 'var(--font-barlow)' }}>Места</span>
            </div>
            <div>
              <span className="teatar-stat-num" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>20 мин</span>
              <span className="teatar-stat-lab" style={{ fontFamily: 'var(--font-barlow)' }}>Филм</span>
            </div>
          </div>
          <Link href="/#cta" className="btn-text-link rev on" style={{ fontFamily: 'var(--font-barlow)' }}>
            Резервирај место →
          </Link>
        </div>
        <div className="teatar-imgs rev on">
          <div className="teatar-img-main" style={{ position: 'relative' }}>
            <Image src="/rooms/teatar-main.png" alt="Античкиот театар — реконструкција" fill sizes="50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="teatar-img-small" style={{ position: 'relative' }}>
            <Image src="/rooms/teatar-small.jpg" alt="Античкиот театар денес" fill sizes="50vw" style={{ objectFit: 'cover', filter: 'brightness(.75)' }} />
            <span className="teatar-img-label" style={{ fontFamily: 'var(--font-barlow)' }}>Театарот денес</span>
          </div>
        </div>
      </div>
    </section>
  );
}
