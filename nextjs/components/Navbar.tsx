'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const hasDarkHero = !!document.querySelector('.hero, .za-nas-hero, .room-detail-hero');
    const applyState = () => {
      navRef.current?.classList.toggle('solid', !hasDarkHero || window.scrollY > 60);
    };
    applyState();
    window.addEventListener('scroll', applyState, { passive: true });
    return () => window.removeEventListener('scroll', applyState);
  }, [pathname]);

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
          <li><Link href="/sobi">Соби</Link></li>
          <li><Link href="/za-nas">За Нас</Link></li>
          <li><Link href="/#lokacija">Локација и Контакт</Link></li>
          <li><Link href="/soba/vlez" className="nav-btn">Купи билет</Link></li>
        </ul>
        <button ref={burgerRef} className="nav-burger" onClick={toggleMenu} aria-label="Мени">
          <span /><span /><span />
        </button>
      </nav>
      <div ref={mobileRef} className="nav-mobile">
        <div className="nav-mobile-links">
          <Link href="/sobi" onClick={closeMenu}><span className="nav-m-num">01</span>Соби</Link>
          <Link href="/za-nas" onClick={closeMenu}><span className="nav-m-num">02</span>За Нас</Link>
          <Link href="/#lokacija" onClick={closeMenu}><span className="nav-m-num">03</span>Локација и Контакт</Link>
          <Link href="/soba/vlez" className="nav-mobile-btn" onClick={closeMenu}>Купи билет</Link>
        </div>
        <div className="nav-mobile-foot">Охридски Времеплов · Охрид, МК</div>
      </div>
    </>
  );
}
