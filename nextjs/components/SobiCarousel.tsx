'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { type Room } from '@/data/rooms';

function LazyVideo({ src, poster, style, className }: { src: string; poster?: string; style?: React.CSSProperties; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded.current) {
          loaded.current = true;
          el.src = src;
          el.play().then(() => setPlaying(true)).catch(() => {});
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        style={style}
        muted
        loop
        playsInline
      />
      {poster && !playing && (
        <img
          src={poster}
          alt=""
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        />
      )}
    </>
  );
}

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
              <LazyVideo
                className="sobi-card-bg sobi-card-bg--video"
                src={room.cardVideo}
                poster={room.image}
                style={room.slug === 'vojni' ? { objectPosition: 'center 90%' } : undefined}
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
