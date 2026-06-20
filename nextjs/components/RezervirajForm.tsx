'use client';
import { useState } from 'react';

const TICKET_TYPES = [
  { label: 'Стандарден билет — 600 МКД', value: 'standard', price: 600 },
  { label: 'Семеен пакет — 1.500 МКД', value: 'family', price: 1500 },
  { label: 'Деца (7–18), Студенти, Пензионери — 400 МКД', value: 'discount', price: 400 },
  { label: 'Деца под 7 години — бесплатно', value: 'child', price: 0 },
];

function getTimeSlots() {
  const slots = [];
  for (let h = 10; h <= 22; h++) {
    for (let m = 0; m < 60; m += 20) {
      if (h === 22 && m > 0) break;
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }
  return slots;
}

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

export default function RezervirajForm() {
  const [form, setForm] = useState({
    ticketType: 'standard',
    qty: 1,
    date: '',
    time: '10:00',
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const ticket = TICKET_TYPES.find(t => t.value === form.ticketType)!;
  const total = ticket.price * form.qty;

  function set(field: string, value: string | number) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rez-success">
        <div className="rez-success-icon">✓</div>
        <h2 className="rez-success-title">Ви благодариме!</h2>
        <p className="rez-success-text">Вашата резервација е примена. Наскоро ќе бидете пренасочени кон платежната страница.</p>
      </div>
    );
  }

  return (
    <form className="rez-form" onSubmit={handleSubmit}>
      <div className="rez-field">
        <label className="rez-label">Тип на билет</label>
        <select className="rez-select" value={form.ticketType} onChange={e => set('ticketType', e.target.value)} required>
          {TICKET_TYPES.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>

      <div className="rez-field">
        <label className="rez-label">Број на билети</label>
        <input
          className="rez-input"
          type="number"
          min={1}
          max={20}
          value={form.qty}
          onChange={e => set('qty', Math.max(1, parseInt(e.target.value) || 1))}
          required
        />
      </div>

      <div className="rez-row">
        <div className="rez-field" lang="en-GB">
          <label className="rez-label">Датум</label>
          <input
            className="rez-input"
            type="date"
            min={getTodayStr()}
            value={form.date}
            onChange={e => set('date', e.target.value)}
            required
          />
        </div>
        <div className="rez-field">
          <label className="rez-label">Термин</label>
          <select className="rez-select" value={form.time} onChange={e => set('time', e.target.value)} required>
            {getTimeSlots().map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="rez-field">
        <label className="rez-label">Име и Презиме</label>
        <input
          className="rez-input"
          type="text"
          placeholder="Вашето полно име"
          value={form.name}
          onChange={e => set('name', e.target.value)}
          required
        />
      </div>

      <div className="rez-field">
        <label className="rez-label">Е-пошта</label>
        <input
          className="rez-input"
          type="email"
          placeholder="vasa@email.com"
          value={form.email}
          onChange={e => set('email', e.target.value)}
          required
        />
      </div>

      <div className="rez-field">
        <label className="rez-label">Телефон <span className="rez-optional">(незадолжително)</span></label>
        <input
          className="rez-input"
          type="tel"
          placeholder="+389 70 000 000"
          value={form.phone}
          onChange={e => set('phone', e.target.value)}
        />
      </div>

      {total > 0 && (
        <div className="rez-total">
          <span>Вкупно</span>
          <strong>{total.toLocaleString('mk-MK')} МКД</strong>
        </div>
      )}

      <button className="rez-submit" type="submit">
        Продолжи кон плаќање →
      </button>
    </form>
  );
}
