'use client';
import { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { type Room } from '@/data/rooms';

export default function SobiCarousel({ rooms }: { rooms: Room[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    track.scrollTo({ left: card.offsetLeft - 20, behavior: 'smooth' });
    setActive(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(rooms.length - 1, active + 1));

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth + 10;
    const idx = Math.round((track.scrollLeft + 20) / cardWidth);
    setActive(Math.min(Math.max(idx, 0), rooms.length - 1));
  }, [rooms.length]);

  return (
    <div className="sobi-carousel">
      {/* track */}
      <div className="sobi-grid" ref={trackRef} onScroll={onScroll}>
        {rooms.map((room) => (
          <Link key={room.slug} href={`/soba/${room.slug}`} className="sobi-card">
            {room.cardVideo ? (
              <video
                className="sobi-card-bg sobi-card-bg--video"
                src={room.cardVideo}
                poster={room.image}
                style={room.slug === 'vojni' ? { objectPosition: 'center 90%' } : undefined}
                autoPlay muted loop playsInline
              />
            ) : (
              <div
                className="sobi-card-bg"
                style={{
                  background: room.image
                    ? `url('${room.image}') center/cover no-repeat`
                    : room.gradient,
                }}
              />
            )}
            <div className="sobi-card-over" />
            <div className="sobi-card-body">
              <div className="sobi-card-tag">{room.tag}</div>
              <h2 className="sobi-card-name">
                {room.name}<br /><em>{room.nameEm}</em>
              </h2>
              <p className="sobi-card-desc">{room.desc}</p>
              <span className="sobi-card-link">Влези →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* nav buttons — visible only on mobile via CSS */}
      <button className="sobi-nav sobi-nav--prev" onClick={prev} aria-label="Претходна соба">
        ‹
      </button>
      <button className="sobi-nav sobi-nav--next" onClick={next} aria-label="Следна соба">
        ›
      </button>

      {/* dots */}
      <div className="sobi-dots">
        {rooms.map((_, i) => (
          <button
            key={i}
            className={`sobi-dot${i === active ? ' sobi-dot--active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Соба ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
