export interface Room {
  slug: string;
  tag: string;
  name: string;
  nameEm: string;
  desc: string;
  image?: string;
  gradient: string;
  text: string;
}

export const rooms: Room[] = [
  {
    slug: 'vlez',
    tag: '00 · Влез',
    name: 'Билетара &',
    nameEm: 'Прием',
    desc: 'Почетна точка. Земи карта, одбери рута и тргни.',
    image: '/images/room-entrance.jpg',
    gradient: 'linear-gradient(155deg,#d4c9a8 0%,#b8a878 50%,#9a8850 100%)',
    text: 'Добредојдовте во Охридски Времеплов. Овде започнува вашето патување низ вековите.',
  },
  {
    slug: 'priroda',
    tag: '01 · Природа',
    name: 'Акваријум &',
    nameEm: 'Екосистеми',
    desc: 'Флора, фауна и природното наследство на регионот.',
    gradient: 'linear-gradient(155deg,#c2cedd 0%,#8fa8c2 100%)',
    text: 'Охридското Езеро е едно од најстарите и најдлабоките езера на Балканот, богато со ендемски видови.',
  },
  {
    slug: 'umetnost',
    tag: '02 · Уметност',
    name: 'Галерија на',
    nameEm: 'Уметноста',
    desc: 'Слики, скулптури и визуелни дела низ епохите.',
    image: '/rooms/umetnost.png',
    gradient: 'linear-gradient(155deg,#d4c2cc 0%,#b890a8 100%)',
    text: 'Од средновековните фрески во Света Софија до современата охридска ликовна сцена.',
  },
  {
    slug: 'kultura',
    tag: '03 · Култура',
    name: 'Народни',
    nameEm: 'Традиции',
    desc: 'Носии, обичаи, песни и танци низ генерации.',
    image: '/rooms/kultura.jpg',
    gradient: 'linear-gradient(155deg,#d8d0a8 0%,#b8a860 100%)',
    text: 'Традиционалната македонска носија, народната музика и обичаите зачувани во охридскиот крај.',
  },
  {
    slug: 'nostalgia',
    tag: '04 · Сеќавања',
    name: 'Соба на',
    nameEm: 'Носталгијата',
    desc: 'Стари фотографии, предмети и спомени.',
    image: '/images/room-nostalgia.jpg',
    gradient: 'linear-gradient(155deg,#d4b8b0 0%,#b87868 100%)',
    text: 'Колекција на семејни фотографии, предмети од секојдневниот живот и усни предавања.',
  },
  {
    slug: 'arhitektura',
    tag: '05 · Простор',
    name: 'Соба на',
    nameEm: 'Архитектурата',
    desc: '3D модели и документација на историски објекти.',
    image: '/rooms/arhitektura.jpg',
    gradient: 'linear-gradient(155deg,#b8cccc 0%,#5a9090 100%)',
    text: 'Античкиот Лихнид, средновековната тврдина Самоилова, охридската чаршија — архитектура низ времето.',
  },
  {
    slug: 'pismenost',
    tag: '06 · Збор',
    name: 'Соба на',
    nameEm: 'Писменоста',
    desc: 'Ракописи, азбуки и книги низ вековите.',
    image: '/rooms/pismenost.jpg',
    gradient: 'linear-gradient(155deg,#d8cca0 0%,#b8a058 100%)',
    text: 'Охрид е родното место на словенската писменост. Климент и Наум Охридски ја создале глаголицата и кирилицата.',
  },
  {
    slug: 'vojni',
    tag: '07 · Конфликт',
    name: 'Соба на',
    nameEm: 'Војните',
    desc: 'Битки, стратегии и храброст низ историјата.',
    image: '/rooms/vojni.png',
    gradient: 'linear-gradient(155deg,#cca898 0%,#8a4830 100%)',
    text: 'Од Самоиловото Царство до Битката кај Охрид 1464 — воените настани кои ја обликувале историјата.',
  },
  {
    slug: 'idnina',
    tag: '08 · Утре',
    name: 'Соба на',
    nameEm: 'Иднината',
    desc: 'Визии и иновации — иднината обликувана од минатото.',
    gradient: 'linear-gradient(155deg,#b8c2d8 0%,#7890c0 100%)',
    text: 'Охрид денес и утре — одржлив туризам, дигитална иновација и зачувување на наследството.',
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
