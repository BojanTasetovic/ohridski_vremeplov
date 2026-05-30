import Link from 'next/link';

const news = [
  {
    big: true,
    cat: 'Нова изложба',
    title: 'Охрид низ вековите — нова постојана изложба',
    desc: 'Откријте ги тајните на едно од најстарите живеалишта на Балканот, од антиката до денес.',
    gradient: 'g1',
    icon: (
      <svg width="160" height="120" viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="20" y="15" width="120" height="90" rx="3" />
        <line x1="20" y1="48" x2="140" y2="48" />
        <circle cx="80" cy="78" r="14" />
      </svg>
    ),
    link: 'Прочитај повеќе →',
  },
  {
    big: false,
    cat: 'Квиз',
    title: 'Нов квиз: Македонска азбука',
    desc: 'Тестирај го своето знаење за историјата на кирилицата.',
    gradient: 'g2',
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="50,8 92,92 8,92" /><polygon points="50,28 76,84 24,84" />
      </svg>
    ),
    link: 'Играј →',
  },
  {
    big: false,
    cat: '360° Тур',
    title: 'Виртуелна посета: Соба на архитектурата',
    desc: 'Прошетај низ историски градби во целосна панорама.',
    gradient: 'g3',
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="50" cy="50" r="40" /><circle cx="50" cy="50" r="24" /><circle cx="50" cy="50" r="8" />
      </svg>
    ),
    link: 'Влези →',
  },
];

export default function News() {
  return (
    <section className="news-section" id="novo">
      <div className="section-center-head rev">
        <h2 className="section-title" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Што е ново</h2>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: 'var(--text-sm)', fontStyle: 'italic', color: 'var(--muted)', maxWidth: 240, lineHeight: 1.6, flexShrink: 0 }}>
          Изложби, настани и новости од музејот
        </p>
      </div>
      <div className="news-grid rev">
        {news.map((item) => (
          <div key={item.title} className={`n-card${item.big ? ' big' : ''}`}>
            <div className="n-img">
              <div className={`n-img-bg ${item.gradient}`} />
              <div className="n-img-orn">{item.icon}</div>
              <div className="n-img-over" />
            </div>
            <div className="n-body">
              <div className="n-cat" style={{ fontFamily: 'var(--font-barlow)' }}>{item.cat}</div>
              <div className="n-title" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>{item.title}</div>
              <div className="n-desc" style={{ fontFamily: 'var(--font-barlow)' }}>{item.desc}</div>
              <Link href="#" className="n-link" style={{ fontFamily: 'var(--font-barlow)' }}>{item.link}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
