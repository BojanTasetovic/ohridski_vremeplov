import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getRoomBySlug } from '@/data/rooms';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingTicket from '@/components/FloatingTicket';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Соба на Архитектурата · Охридски Времеплов',
  alternates: { canonical: 'https://ohridski-vremeplov.vercel.app/soba/arhitektura' },
};

export default function ArhekturaPage() {
  const room = getRoomBySlug('arhitektura');
  if (!room) notFound();

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
          />
        ) : (
          <div
            className="room-detail-bg"
            style={{
              background: room.image
                ? `url('${room.image}') center/cover no-repeat`
                : room.gradient,
            }}
          />
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
