'use client';
import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    const numEl = document.getElementById('loaderNum');
    if (!loader || !numEl) return;
    let count = 0;
    const iv = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 4;
      if (count >= 100) { count = 100; clearInterval(iv); }
      numEl.textContent = String(count);
      if (count === 100) setTimeout(() => loader.classList.add('out'), 300);
    }, 40);
    return () => clearInterval(iv);
  }, []);

  return (
    <div id="loader">
      <div className="loader-emblem" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
        Охридски Времеплов
      </div>
      <div className="loader-bar" />
      <div className="loader-num" id="loaderNum" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
        0
      </div>
    </div>
  );
}
