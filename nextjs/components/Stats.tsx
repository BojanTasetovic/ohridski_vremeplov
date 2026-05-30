'use client';
import { useEffect, useRef } from 'react';

const stats = [
  { target: 9, label: 'Тематски соби' },
  { target: 48, label: 'Интерактивни квизови' },
  { target: 2000, label: 'Години историја' },
  { target: 360, label: 'Степени тур' },
];

export default function Stats() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLSpanElement;
        const target = Number(el.dataset.target);
        const duration = 1800, step = 16;
        const inc = target / (duration / step);
        let v = 0;
        const ti = setInterval(() => {
          v = Math.min(v + inc, target);
          el.textContent = Math.round(v).toLocaleString();
          if (v >= target) clearInterval(ti);
        }, step);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-row">
      {stats.map(({ target, label }, i) => (
        <div key={label} className={`i-stat rev${i > 0 ? ` d${i}` : ''}`}>
          <span
            ref={(el) => { refs.current[i] = el; }}
            className="i-stat-num"
            data-target={target}
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            0
          </span>
          <span className="i-stat-label" style={{ fontFamily: 'var(--font-barlow)' }}>{label}</span>
        </div>
      ))}
    </div>
  );
}
