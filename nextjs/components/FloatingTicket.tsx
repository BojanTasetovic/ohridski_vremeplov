'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FloatingTicket() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const btn = btnRef.current;
    if (!hero || !btn) return;
    const obs = new IntersectionObserver(([e]) => {
      btn.classList.toggle('visible', !e.isIntersecting);
    }, { threshold: 0.1 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <Link ref={btnRef} href="/kupi-bilet" className="float-ticket" aria-label="Купи билет">
      <video className="float-ticket-video" src="/logo/logo-animated.mp4" autoPlay muted loop playsInline />
      <span className="float-ticket-txt" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
        Купи<br />билет
      </span>
    </Link>
  );
}
