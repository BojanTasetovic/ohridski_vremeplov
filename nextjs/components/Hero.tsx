'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger CSS animations after hydration — prevents SSR opacity:0 freeze
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className={`hero${mounted ? ' hero--animate' : ''}`}>
      <video
        className="hero-video-bg"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video-over" />
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-overline">
          Виртуелен Музеј · Охрид · 2025
        </div>
        <h1 className="hero-h1">
          Историјата<br />
          <em>Оживеана</em><br />
          Од Ново
        </h1>
        <p className="hero-sub">
          Десет соби. Минатото на Охрид никогаш поблиску до тебе. Искуство, не експонат – биди дел од едно незаборавно, интерактивно патување во срцето на градот.
        </p>
        <div className="hero-actions">
          <Link href="/#sobi" className="btn-gold">Истражувај соби</Link>
          <Link href="/#cta" className="btn-ghost">Купи билет →</Link>
        </div>
        <div className="hero-scroll">
          <span>Скролај</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}
