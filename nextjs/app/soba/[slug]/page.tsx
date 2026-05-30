import { notFound } from 'next/navigation';
import Link from 'next/link';
import { rooms, getRoomBySlug } from '@/data/rooms';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingTicket from '@/components/FloatingTicket';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = getRoomBySlug(params.slug);
  if (!room) return {};
  return {
    title: `${room.nameEm} · Охридски Времеплов`,
    description: room.desc,
  };
}

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = getRoomBySlug(params.slug);
  if (!room) notFound();

  return (
    <>
      <Navbar />
      <div className="room-detail-hero">
        <div
          className="room-detail-bg"
          style={{
            background: room.image
              ? `url('${room.image}') center/cover no-repeat`
              : room.gradient,
          }}
        />
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
        <p className="room-detail-text" style={{ fontFamily: 'var(--font-barlow)' }}>
          {room.text}
        </p>
        <Link href="/" className="btn-primary" style={{ fontFamily: 'var(--font-barlow)' }}>
          <span>← Назад кон музејот</span>
        </Link>
      </div>
      <FloatingTicket />
      <Footer />
    </>
  );
}
