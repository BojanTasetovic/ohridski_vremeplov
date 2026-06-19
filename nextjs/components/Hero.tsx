'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero({ videoSrc = '/videos/hero.mp4', posterSrc = '/images/hero-bg.jpg' }: { videoSrc?: string; posterSrc?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger CSS animations after hydration — prevents SSR opacity:0 freeze
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className={`hero${mounted ? ' hero--animate' : ''}`}>
      <video
        className="hero-video-bg"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video-over" />
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <h1 className="hero-h1">
          Нова Атракција Во Охрид<br />
          <em>Интерактивно Доживување</em>
        </h1>
        <p className="hero-sub">
          Биди дел од едно незаборавно, интерактивно патување во срцето на градот.
        </p>
        <div className="hero-actions">
          <Link href="/kupi-bilet" className="btn-gold">Купи билет →</Link>
          <Link href="/sobi" className="btn-ghost">Истражувај соби</Link>
        </div>
      </div>
    </section>
  );
}
