import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingTicket from '@/components/FloatingTicket';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getRoomBySlug } from '@/data/rooms';

export const metadata: Metadata = {
  title: 'Соба на танцот и музиката · Охридски Времеплов',
  alternates: { canonical: 'https://ohridski-vremeplov.vercel.app/soba/tancot-i-muzikata' },
};

export default function TancotIMuzikatePage() {
  const room = getRoomBySlug('tancot-i-muzikata')!;

  return (
    <>
      <Navbar />
      <div className="room-detail-hero">
        {room.video ? (
          <video
            className="room-detail-bg room-detail-bg--video"
            src={room.video}
            poster={room.image}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        ) : (
          <div className="room-detail-bg" style={{ background: '#000' }} />
        )}
        <div className="room-detail-over" />
        <div className="room-detail-content">
          <div className="room-detail-tag" style={{ fontFamily: 'var(--font-barlow)' }}>
            {room.tag}
          </div>
          <h1 className="room-detail-h1" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            {room.name}<br /><em>{room.nameEm}</em>
          </h1>
        </div>
      </div>
      <div className="room-detail-body">
        {room.text.split('\n\n').map((para, i) => (
          <p key={i} className="room-detail-text" style={{ fontFamily: 'var(--font-barlow)' }}>
            {para}
          </p>
        ))}
        <video
          className="room-detail-inline-video"
          src="/videos/kultura-hero.mp4"
          poster="/images/kultura-hero.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      {room.images && room.images.length > 0 && (
        <div className="room-gallery">
          {room.images.map((src, i) => (
            <div key={i} className="room-gallery-item">
              <Image src={src} alt={`${room.nameEm} — слика ${i + 1}`} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} unoptimized />
            </div>
          ))}
        </div>
      )}
      <div className="room-detail-footer">
        <Link href="/sobi" className="btn-primary" style={{ fontFamily: 'var(--font-barlow)' }}>
          <span>← Назад кон собите</span>
        </Link>
      </div>
      <FloatingTicket />
      <Footer />
    </>
  );
}
