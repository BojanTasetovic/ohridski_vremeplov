export default function SenseStrip() {
  const items = [
    { num: '01', title: '360°', em: 'Виртуелен Тура', desc: 'Шетај низ секоја соба во полна панорамска реалност' },
    { num: '02', title: 'Интерактивна', em: 'Историска Мапа', desc: 'Откривај наоди и приказни директно на географска карта' },
    { num: '03', title: 'Квизови &', em: 'Предизвици', desc: 'Освојувај значки и качи се на табелата на рекорди' },
  ];

  return (
    <div className="sense-strip">
      {items.map((item, i) => (
        <div key={item.num} className={`sense-item rev${i > 0 ? ` d${i}` : ''}`}>
          <div className="sense-num" style={{ fontFamily: 'var(--font-barlow)' }}>{item.num}</div>
          <div className="sense-title" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            {item.title}<br /><em>{item.em}</em>
          </div>
          <div className="sense-desc" style={{ fontFamily: 'var(--font-barlow)' }}>{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
