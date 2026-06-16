import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingTicket from '@/components/FloatingTicket';
import SobiCarousel from '@/components/SobiCarousel';
import { rooms } from '@/data/rooms';

export const metadata: Metadata = {
  title: 'Соби на Музејот',
  description: 'Истражувај ги сите 10 тематски соби на Охридски Времеплов — аудио-визуелно патување низ вековите на охридската историја.',
  alternates: { canonical: 'https://ohridski-vremeplov.vercel.app/sobi' },
};

export default function SobiPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="za-nas-hero">
        <video className="za-nas-hero-video" src="/videos/sobi-hero.mp4" autoPlay muted loop playsInline />
        <div className="za-nas-hero-over" />
        <div className="za-nas-hero-content">
          <div className="za-nas-eyebrow">Охридски Времеплов</div>
          <h1 className="za-nas-h1">Соби на <em>музејот</em></h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="sobi-intro" />

      {/* GRID / CAROUSEL */}
      <SobiCarousel rooms={rooms} />

      <FloatingTicket />
      <Footer />
    </>
  );
}
