'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('solid', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    const open = mobileRef.current?.classList.toggle('open');
    burgerRef.current?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const closeMenu = () => {
    mobileRef.current?.classList.remove('open');
    burgerRef.current?.classList.remove('open');
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav ref={navRef} id="nav">
        <Link href="/" className="nav-logo">
          <Image src="/logo/h_Bronze_OTT.png" alt="Охридски Времеплов" width={4934} height={750} sizes="400px" priority loading="eager" style={{ height: '52px', width: 'auto' }} />
        </Link>
        <ul className="nav-links" style={{ fontFamily: 'var(--font-barlow)' }}>
          <li><Link href="/#sobi">Соби</Link></li>
          <li><Link href="/za-nas">За Нас</Link></li>
          <li><Link href="/#lokacija">Локација и Контакт</Link></li>
          <li><Link href="/#cta" className="nav-btn">Купи билет</Link></li>
        </ul>
        <button ref={burgerRef} className="nav-burger" onClick={toggleMenu} aria-label="Мени">
          <span /><span /><span />
        </button>
      </nav>
      <div ref={mobileRef} className="nav-mobile" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
        <Link href="/#sobi" className="rev" onClick={closeMenu}>Соби</Link>
        <Link href="/za-nas" className="rev" onClick={closeMenu}>За Нас</Link>
        <Link href="/#lokacija" className="rev" onClick={closeMenu}>Локација и Контакт</Link>
        <Link href="/#cta" className="nav-mobile-btn rev" onClick={closeMenu}>Купи билет</Link>
      </div>
    </>
  );
}
