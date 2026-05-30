'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { rooms } from '@/data/rooms';

export default function Rooms() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;
    if (!scroll || !prev || !next) return;

    let drag = false, startX = 0, startLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      drag = true; startX = e.clientX; startLeft = scroll.scrollLeft;
      scroll.style.cursor = 'grabbing';
      scroll.style.scrollSnapType = 'none';
      e.preventDefault();
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!drag) return;
      scroll.scrollLeft = startLeft - (e.clientX - startX);
    };
    const onMouseUp = () => {
      if (!drag) return;
      drag = false;
      scroll.style.cursor = '';
      scroll.style.scrollSnapType = '';
    };

    const step = () => (scroll.querySelector('.room-card') as HTMLElement)?.offsetWidth + 4 || 344;
    const updateArrows = () => {
      prev.disabled = scroll.scrollLeft <= 0;
      next.disabled = scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 2;
    };

    scroll.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    prev.addEventListener('click', () => scroll.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => scroll.scrollBy({ left: step(), behavior: 'smooth' }));
    scroll.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();

    const cards = scroll.querySelectorAll('.room-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const me = e as MouseEvent;
        (card as HTMLElement).style.setProperty('--mx', `${me.clientX - rect.left}px`);
        (card as HTMLElement).style.setProperty('--my', `${me.clientY - rect.top}px`);
      }, { passive: true });
    });

    return () => {
      scroll.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <section className="rooms-section" id="sobi">
      <div className="rooms-header rev">
        <div>
          <div className="rooms-label" style={{ fontFamily: 'var(--font-barlow)' }}>Истражувај</div>
          <h2 className="rooms-h2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Соби на <em>музејот</em>
          </h2>
          <p className="rooms-desc rev" style={{ fontFamily: 'var(--font-barlow)', fontSize: 'var(--text-body)', color: 'var(--muted)', lineHeight: 1.85, maxWidth: 640, marginTop: 20 }}>
            Филмско патување низ Охридското Езеро што ја слави неговата вечност. Од геолошкото создавање, преку антиката, мистичниот среден век, Отоманскиот период, до пулсот на XX век и денешниот жив ритам. Проекција преку која ќе ја почувствувате магијата на Охрид во друга димензија — како патување низ времето што го обединува минатото и сегашноста во едно доживување. Инспиративна приказна за континуитетот на животот и културата, за водата што памети и за градот што дише со векови.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div className="rooms-nav">
            <button ref={prevRef} className="rooms-arrow" aria-label="Претходно">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button ref={nextRef} className="rooms-arrow" aria-label="Следно">
              <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </div>
          <Link href="/sobi" className="rooms-see-all" style={{ fontFamily: 'var(--font-barlow)' }}>
            Сите соби →
          </Link>
        </div>
      </div>
      <div className="rooms-scroll" ref={scrollRef}>
        {rooms.map((room) => (
          <Link
            key={room.slug}
            href={`/soba/${room.slug}`}
            className="room-card"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="room-bg-grad"
              style={{
                background: room.image
                  ? `url('${room.image}') center/cover no-repeat`
                  : room.gradient,
              }}
            />
            <div className="room-overlay" />
            <div className="room-body">
              <div className="room-tag-line" style={{ fontFamily: 'var(--font-barlow)' }}>{room.tag}</div>
              <div className="room-name" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                {room.name}<br /><em>{room.nameEm}</em>
              </div>
              <div className="room-desc" style={{ fontFamily: 'var(--font-barlow)' }}>{room.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
