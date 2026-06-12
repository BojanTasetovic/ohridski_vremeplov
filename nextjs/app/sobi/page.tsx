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
        <div className="za-nas-hero-over" />
        <div className="za-nas-hero-content">
          <div className="za-nas-eyebrow">Охридски Времеплов</div>
          <h1 className="za-nas-h1">Соби на <em>музејот</em></h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="sobi-intro">
        <p>Филмско патување низ Охридското Езеро што ја слави неговата вечност. Од геолошкото создавање, преку антиката, мистичниот среден век, Отоманскиот период, до пулсот на XX век и денешниот жив ритам.</p>
      </div>

      {/* GRID / CAROUSEL */}
      <SobiCarousel rooms={rooms} />

      <FloatingTicket />
      <Footer />
    </>
  );
}
