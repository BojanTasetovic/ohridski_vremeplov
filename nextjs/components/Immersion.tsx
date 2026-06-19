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
          Интерактивно патување низ Охридскиот регион што ја слави неговата вечност, богатата културна традиција и непроценливо значење за Балканот, Европа и светот. Патувајте заедно со пастрмката и јагулата низ праисторијата и длабочините на Охридското Езеро со дигиталниот аквариум. Искустете го животот во Античкиот Лихнидос, времето на Цар Самуил и Отоманскиот Период преку виртуелна и аугментирана реалност. Почувстувајте ја моќта на пишаниот збор со холограмот на Григор Прличев, танцувајте на песните од Охридските Трубадури и уживајте во виртуелната галерија на уметнички дела творени во Охрид и за Охрид. Вистински вратете се во минатото во собата на носталгија, но и зачекорете во иднината.
        </p>
        <Link href="/sobi" className="btn-primary" style={{ fontFamily: 'var(--font-barlow)' }}>
          <span>Влези во музејот</span>
        </Link>
      </div>
      <div className="immersion-right rev d1">
        <Image
          src="/images/immersion-right-new.jpg"
          alt="Интерактивна дигитална проекција на историјата на Охрид"
          fill
          sizes="50vw"
          priority
          className="immersion-right-photo"
        />
      </div>
    </section>
  );
}
