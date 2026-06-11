import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingTicket from '@/components/FloatingTicket';
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

      {/* GRID */}
      <div className="sobi-grid">
        {rooms.map((room) => (
          <Link key={room.slug} href={`/soba/${room.slug}`} className="sobi-card">
            {room.cardVideo ? (
              <video
                className="sobi-card-bg sobi-card-bg--video"
                src={room.cardVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <div
                className="sobi-card-bg"
                style={{
                  background: room.image
                    ? `url('${room.image}') center/cover no-repeat`
                    : room.gradient,
                }}
              />
            )}
            <div className="sobi-card-over" />
            <div className="sobi-card-body">
              <div className="sobi-card-tag">{room.tag}</div>
              <h2 className="sobi-card-name">
                {room.name}<br /><em>{room.nameEm}</em>
              </h2>
              <p className="sobi-card-desc">{room.desc}</p>
              <span className="sobi-card-link">Влези →</span>
            </div>
          </Link>
        ))}
      </div>

      <FloatingTicket />
      <Footer />
    </>
  );
}
