'use client';
import { useState } from 'react';
import Link from 'next/link';

const options = ['VII век', 'IX век', 'XI век', 'XIII век'];
const correct = 'IX век';

export default function Quiz() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="quiz-section" id="kviz">
      <div className="quiz-left-panel rev">
        <div className="quiz-orb" />
        <h2 className="quiz-h2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Провери го<br />своето <em>знаење</em>
        </h2>
        <p className="quiz-p" style={{ fontFamily: 'var(--font-barlow)' }}>
          Над 48 квизови за сите возрасти. Одговори, освој значки и покажи им на пријателите колку знаеш за македонската историја.
        </p>
        <Link href="#" className="btn-outline" style={{ fontFamily: 'var(--font-barlow)' }}>Започни квиз</Link>
      </div>
      <div className="quiz-right-panel rev d1">
        <div className="qcard">
          <div className="qcard-head" style={{ fontFamily: 'var(--font-barlow)' }}>
            <span>Квиз · Историја</span><span>3 / 10</span>
          </div>
          <div className="qcard-q" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Во кое столетие е создадена македонската кирилична азбука?
          </div>
          <div className="qcard-opts">
            {options.map((opt) => (
              <div
                key={opt}
                className={`qopt${selected === opt ? ' ok' : ''}`}
                style={{ fontFamily: 'var(--font-barlow)' }}
                onClick={() => setSelected(opt)}
              >
                {opt}{selected === opt && opt === correct ? ' ✓' : ''}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
