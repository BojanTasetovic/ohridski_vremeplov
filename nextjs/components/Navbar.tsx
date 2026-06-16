'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { num: '01', label: 'Соби',              href: '/sobi'      },
  { num: '02', label: 'За Нас',            href: '/za-nas'    },
  { num: '03', label: 'Локација и Контакт', href: '/#lokacija' },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const navRef  = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const d = reduced ? 0 : 1;

  useEffect(() => {
    const hasDarkHero = !!document.querySelector('.hero, .za-nas-hero, .room-detail-hero');
    const apply = () => navRef.current?.classList.toggle('solid', !hasDarkHero || window.scrollY > 60);
    apply();
    window.addEventListener('scroll', apply, { passive: true });
    return () => window.removeEventListener('scroll', apply);
  }, [pathname]);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <nav ref={navRef} id="nav">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo/h_OTT_k.png"
            alt="Охридски Времеплов"
            width={4934} height={750}
            sizes="400px"
            priority
            loading="eager"
            style={{ height: '52px', width: 'auto' }}
          />
        </Link>
        <ul className="nav-links" style={{ fontFamily: 'var(--font-barlow)' }}>
          <li><Link href="/sobi">Соби</Link></li>
          <li><Link href="/za-nas">За Нас</Link></li>
          <li><Link href="/#lokacija">Локација и Контакт</Link></li>
          <li><Link href="/kupi-bilet" className="nav-btn">Купи билет</Link></li>
        </ul>
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Затвори мени' : 'Отвори мени'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span /><span /><span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Навигациско мени"
            className="nav-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 * d, ease: EASE }}
          >
            <div className="nav-mobile-links">
              {NAV_LINKS.map(({ num, label, href }, i) => (
                <motion.div
                  key={href}
                  className="nav-mobile-link-wrap"
                  initial={{ opacity: 0, y: reduced ? 0 : 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduced ? 0 : -14 }}
                  transition={{ duration: 0.6 * d, delay: 0.1 + i * 0.09, ease: EASE }}
                  whileHover={{ x: 7 }}
                >
                  <Link href={href} onClick={close} className="nav-mobile-link">
                    <span className="nav-m-num">{num}</span>
                    <span>{label}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 * d, delay: 0.42, ease: EASE }}
              >
                <Link href="/kupi-bilet" className="nav-mobile-btn" onClick={close}>
                  Купи билет
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="nav-mobile-foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 * d, delay: 0.52 }}
            >
              Охридски Времеплов · Охрид, МК
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
