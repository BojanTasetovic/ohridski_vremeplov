import Image from 'next/image';
import Link from 'next/link';

export default function Immersion() {
  return (
    <section className="immersion-section">
      <div className="immersion-left rev">
        <h2 className="section-h2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Патување низ<br /><em>вековите</em> на<br />Охрид
        </h2>
        <p className="section-body" style={{ fontFamily: 'var(--font-barlow)' }}>
          Филмско патување низ Охридското Езеро што ја слави неговата вечност. Од геолошкото создавање, преку антиката, мистичниот среден век, Отоманскиот период, до пулсот на XX век и денешниот жив ритам. Проекција преку која ќе ја почувствувате магијата на Охрид во друга димензија — патување низ времето што го обединува минатото и сегашноста во едно доживување. Инспиративна приказна за континуитетот на животот и културата, за водата што памети и за градот што дише со векови.
        </p>
        <Link href="/sobi" className="btn-primary" style={{ fontFamily: 'var(--font-barlow)' }}>
          <span>Влези во музејот</span>
        </Link>
      </div>
      <div className="immersion-right rev d1">
        <Image
          src="/images/immersion-right-new.jpg"
          alt=""
          fill
          sizes="50vw"
          className="immersion-right-photo"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
    </section>
  );
}
