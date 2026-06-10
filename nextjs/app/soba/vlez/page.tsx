import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Купи билет',
  description: 'Купете билет и резервирајте термин за Охридскиот Времеплов. Цени од 300 МКД — стандарден, семеен, студентски и групни пакети.',
  alternates: { canonical: 'https://ohridski-vremeplov.vercel.app/soba/vlez' },
};

const tickets = [
  {
    type: 'Стандарден билет',
    price: '600 МКД',
    note: '≈ 10 €',
    desc: 'Основен билет за возрасни.',
  },
  {
    type: 'Билет за државјани на РСМ',
    price: '500 МКД',
    note: '',
    desc: 'Специјална цена за домашни посетители — со валиден документ на каса.',
  },
  {
    type: 'Семеен пакет',
    price: '1.500 МКД',
    note: '',
    desc: 'Влез за 2 возрасни и 2 деца. Одлична заштеда за семејства.',
  },
  {
    type: 'Деца (7–18), Студенти, Пензионери',
    price: '300 МКД',
    note: '',
    desc: 'Со соодветен документ или индекс на каса.',
  },
  {
    type: 'Деца под 7 години',
    price: 'Бесплатно',
    note: '',
    desc: 'Во придружба на возрасен.',
  },
  {
    type: 'Групни посети (над 15 лица)',
    price: 'По барање',
    note: '',
    desc: 'Контактирајте нè за специјални цени за екскурзии и организирани тури.',
  },
];

export default function VlezPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="vlez-hero">
          <div className="vlez-hero-content">
            <div className="vlez-eyebrow">Охридски Времеплов</div>
            <h1 className="vlez-h1">
              Испланирајте го<br />
              <em>вашето патување</em><br />
              низ времето
            </h1>
            <p className="vlez-lead">
              Добредојдовте во Охридскиот Времеплов — првиот целосно интерактивен дигитален музеј во градот. Ве очекува 60-минутна незаборавна аудио-визуелна авантура која ве води низ 10 возбудливи поглавја на Охрид.
            </p>
          </div>
        </section>

        {/* ── TICKETS ── */}
        <section className="vlez-tickets">
          <div className="vlez-inner">
            <div className="vlez-label">Ценовник на билети</div>
            <p className="vlez-tickets-intro">
              За да обезбедиме фер пристап за сите наши посетители, нудиме неколку категории на билети.
            </p>
            <div className="vlez-table-wrap">
              <table className="vlez-table">
                <thead>
                  <tr>
                    <th>Тип на билет</th>
                    <th>Цена</th>
                    <th>Опис</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) => (
                    <tr key={t.type}>
                      <td className="vlez-td-type">{t.type}</td>
                      <td className="vlez-td-price">
                        {t.price}
                        {t.note && <span className="vlez-price-note">{t.note}</span>}
                      </td>
                      <td className="vlez-td-desc">{t.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── INCLUDED + INFO ── */}
        <section className="vlez-split">
          <div className="vlez-included">
            <div className="vlez-label">Во цената е вклучено</div>
            <h2 className="vlez-split-h2">Што вклучува вашето искуство?</h2>
            <ul className="vlez-list">
              <li>
                <span className="vlez-list-num">10</span>
                <div>
                  <strong>Тематски соби</strong>
                  <p>Простор од над 650 м² исполнет со дигитални проекции, холограми и звучни ефекти.</p>
                </div>
              </li>
              <li>
                <span className="vlez-list-num">60'</span>
                <div>
                  <strong>Континуирана приказна</strong>
                  <p>Автоматизиран систем кој беспрекорно ве води низ вековите на Охрид.</p>
                </div>
              </li>
              <li>
                <span className="vlez-list-num">∞</span>
                <div>
                  <strong>Уникатна атмосфера</strong>
                  <p>Иновативна технологија која ја оживува историјата на начин интересен за сите генерации.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="vlez-info">
            <div className="vlez-label">Пред посетата</div>
            <h2 className="vlez-split-h2">Важни информации</h2>
            <ul className="vlez-info-list">
              <li>
                <span className="vlez-info-icon">◎</span>
                <div>
                  <strong>Точност</strong>
                  <p>Турите се целосно автоматизирани и започнуваат точно на секои 20 минути.</p>
                </div>
              </li>
              <li>
                <span className="vlez-info-icon">◎</span>
                <div>
                  <strong>Пристигнување</strong>
                  <p>Пристигнете најмалку 10 минути пред вашиот термин за валидација на билетите.</p>
                </div>
              </li>
              <li>
                <span className="vlez-info-icon">◎</span>
                <div>
                  <strong>Доцнење</strong>
                  <p>Поради природата на дигиталната програма, при доцнење ќе ја почекате следната слободна група.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="vlez-cta-section">
          <div className="vlez-cta-inner">
            <p className="vlez-cta-label">Изберете датум и термин</p>
            <Link href="#rezerviraj" className="vlez-cta-btn">
              Резервирај го твојот термин овде →
            </Link>
            <p className="vlez-cta-note">
              Системот за онлајн резервации наскоро ќе биде достапен. За резервации, контактирајте нè директно.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
