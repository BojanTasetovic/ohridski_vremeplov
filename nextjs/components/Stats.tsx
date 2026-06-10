'use client';
import { useEffect, useRef } from 'react';

const stats = [
  { target: 10, label: 'Тематски соби', suffix: '', unit: '', text: '' },
  { target: 40, label: 'Интерактивни дигитални експонати', suffix: '+', unit: '', text: '' },
  { target: 668, label: 'Простор за едукација и забава', suffix: '', unit: 'м²', text: '' },
  { target: 0, label: 'Години историја', suffix: '', unit: '', text: 'Илјадници' },
];

export default function Stats() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLSpanElement;
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix ?? '';
        const duration = 1800, step = 16;
        const inc = target / (duration / step);
        let v = 0;
        const ti = setInterval(() => {
          v = Math.min(v + inc, target);
          el.textContent = Math.round(v).toLocaleString() + suffix;
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
      {stats.map(({ target, label, suffix, unit, text }, i) => (
        <div key={label} className={`i-stat rev${i > 0 ? ` d${i}` : ''}`}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            {text ? (
              <span className="i-stat-num" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>{text}</span>
            ) : (
              <span
                ref={(el) => { refs.current[i] = el; }}
                className="i-stat-num"
                data-target={target}
                data-suffix={suffix}
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                0
              </span>
            )}
            {unit && (
              <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(20px,2vw,28px)', color: 'var(--gold)', opacity: 0.8, letterSpacing: '.04em', lineHeight: 1 }}>
                {unit}
              </span>
            )}
          </div>
          <span className="i-stat-label" style={{ fontFamily: 'var(--font-barlow)' }}>{label}</span>
        </div>
      ))}
    </div>
  );
}
