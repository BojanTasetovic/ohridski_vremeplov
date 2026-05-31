import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/logo/h_Bronze_OTT.png" alt="Охридски Времеплов" width={4934} height={750} sizes="400px" style={{ height: '56px', width: 'auto', opacity: 0.9, marginBottom: 16 }} />
          <div className="footer-logo-tag" style={{ fontFamily: 'var(--font-barlow)' }}>
            „Историјата не застарува — таа чека да биде открена."
          </div>
        </div>
        <div className="footer-nav">
          {[
            { title: 'Истражувај', links: [{ label: 'Сите соби', href: '/sobi' }, { label: '360° Тур', href: '#' }, { label: 'Историска Мапа', href: '#' }, { label: 'Временска Линија', href: '#' }] },
            { title: 'Учи', links: [{ label: 'Квизови', href: '/#kviz' }, { label: 'За ученици', href: '#' }, { label: 'За наставници', href: '#' }, { label: 'Значки', href: '#' }] },
            { title: 'Инфо', links: [{ label: 'За нас', href: '/za-nas' }, { label: 'Членство', href: '#' }, { label: 'Контакт', href: '#' }, { label: 'Приватност', href: '#' }] },
          ].map((col) => (
            <div key={col.title} className="footer-col">
              <h5 style={{ fontFamily: 'var(--font-barlow)' }}>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><Link href={l.href} style={{ fontFamily: 'var(--font-barlow)' }}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-map">
        <div className="footer-map-info">
          <div>
            <div className="footer-map-label" style={{ fontFamily: 'var(--font-barlow)' }}>Каде сме</div>
            <div className="footer-map-city" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Охрид,<br />Македонија</div>
          </div>
          <div className="footer-map-detail" style={{ fontFamily: 'var(--font-barlow)' }}>
            бул. Туристичка бб<br />Охрид, Македонија<br /><br />
            Пон — Пет &nbsp; 09:00 — 17:00<br />
            Саб — Нед &nbsp; 10:00 — 15:00
          </div>
        </div>
        <div className="footer-map-frame">
          <iframe
            src="https://maps.google.com/maps?q=бул.+Туристичка,+Охрид,+Македонија&t=&z=16&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Локација на музејот"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy" style={{ fontFamily: 'var(--font-barlow)' }}>© 2025 Виртуелен Музеј · Сите права задржани</div>
        <div className="footer-social">
          {['Facebook', 'Instagram', 'YouTube'].map((s) => (
            <Link key={s} href="#" style={{ fontFamily: 'var(--font-barlow)' }}>{s}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
