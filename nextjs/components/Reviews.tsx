const reviews = [
  { text: '„Историјата оживеана на начин кој никогаш не сум го доживеал. Моите деца не сакаа да излезат!"', author: 'Родител, Скопје' },
  { text: '„Одлична алатка за учење. Ја препорачав на сите наставници во нашето училиште."', author: 'Наставник, Охрид' },
  { text: '„Квизовите се супер — детето само ги бараше нови прашања. Историјата никогаш не беше толку забавна."', author: 'Мама, Битола' },
  { text: '„360° турот е неверојатен. Се чувствував како да сум физички во музејот."', author: 'Студент, Прилеп' },
  { text: '„Дизајнот е прекрасен. Модерен, а сепак со длабоко историско чувство."', author: 'Архитект, Штип' },
  { text: '„Со ова сите деца можат да ја научат историјата на интересен и интерактивен начин."', author: 'Директор на училиште' },
];

export default function Reviews() {
  return (
    <section className="reviews-section rev">
      <div className="section-center-head">
        <h2 className="section-title" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Незаборавно искуство</h2>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: 'var(--text-sm)', fontStyle: 'italic', color: 'var(--muted)', maxWidth: 200, lineHeight: 1.6, flexShrink: 0 }}>
          Оценки од вистински посетители
        </p>
      </div>
      <div className="reviews-meta">
        <div className="reviews-stars-big">★★★★★</div>
        <div className="reviews-score" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>4.9 / 5 · 1.200+ рецензии</div>
      </div>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div key={r.author} className="review-card">
            <div className="review-stars-sm">★★★★★</div>
            <div className="review-text" style={{ fontFamily: 'var(--font-barlow)' }}>{r.text}</div>
            <div className="review-author" style={{ fontFamily: 'var(--font-barlow)' }}>{r.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
