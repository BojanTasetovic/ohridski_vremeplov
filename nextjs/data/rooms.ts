export interface Room {
  slug: string;
  tag: string;
  name: string;
  nameEm: string;
  desc: string;
  image?: string;
  video?: string;
  cardVideo?: string;
  images?: string[];
  gradient: string;
  text: string;
}

export const rooms: Room[] = [
  {
    slug: 'patuvanje-niz-vremeto',
    tag: '00 · Влез',
    name: 'Патување низ',
    nameEm: 'Времето',
    desc: 'Почетна точка. Земи карта, одбери рута и тргни.',
    image: '/images/room-entrance.jpg',
    video: '/videos/patuvanje-niz-vremeto-hero.mp4',
    cardVideo: '/videos/vlez-card.mp4',
    gradient: 'linear-gradient(155deg,#d4c9a8 0%,#b8a878 50%,#9a8850 100%)',
    text: 'Добредојдовте во Охридски Времеплов. Овде започнува вашето патување низ вековите.',
  },
  {
    slug: 'priroda',
    tag: '01 · Природа',
    name: 'Виртуелен',
    nameEm: 'Аквариум',
    desc: 'Дигитална жива лабораторија — секој допир оживува ендемски вид.',
    image: '/rooms/akvarium/ribi.png',
    video: '/rooms/akvarium.mp4',
    cardVideo: '/videos/priroda-card.mp4',
    images: [
      '/rooms/akvarium/ribi.png',
      '/rooms/akvarium/jajca.png',
      '/rooms/akvarium/krap.png',
      '/rooms/akvarium/svetlina.png',
      '/rooms/akvarium/rastenie.png',
      '/rooms/akvarium/sungjer.png',
    ],
    gradient: 'linear-gradient(155deg,#c2cedd 0%,#8fa8c2 100%)',
    text: 'Дигитална жива лабораторија за биолошката разновидност на Охридското Езеро, живо доживување каде со секој допир „оживуваат" ендемските видови што постојат само овде — секој контакт открива нова тајна од подводниот свет. Ова е шанса да се почувствува езерото како жив организам.\n\nУникатна можност да нурнете во виртуелен аквариум и да ја доживеете магијата на природата што реагира на вашето присуство.',
  },
  {
    slug: 'umetnost',
    tag: '02 · Уметност',
    name: 'Соба на',
    nameEm: 'Уметноста',
    desc: 'Насликај се во охридски стил — стани дел од живата традиција на градот.',
    image: '/rooms/umetnost.png',
    video: '/videos/umetnost-hero.mp4',
    images: [
      '/rooms/umetnost/izida.png',
      '/rooms/umetnost/dedal.png',
      '/rooms/umetnost/zlatna-maska.png',
      '/rooms/umetnost/mozaicna-mapa.jpg',
      '/rooms/umetnost/vasilij-nikola.jpg',
      '/rooms/umetnost/kliment-relef.jpg',
      '/rooms/umetnost/blagovestenie.jpg',
      '/rooms/umetnost/imaret.jpg',
      '/rooms/umetnost/chinar.jpg',
      '/rooms/umetnost/samuel.jpg',
      '/rooms/umetnost/manasievski.jpg',
      '/rooms/umetnost/dimo-kliment.jpg',
      '/rooms/umetnost/submerged.jpg',
      '/rooms/umetnost/fakac-na-krst.jpg',
    ],
    gradient: 'linear-gradient(155deg,#d4c2cc 0%,#b890a8 100%)',
    text: 'Интерактивна изложба на уметноста низ вековите. Кратките видеа и дигитални репродукции на познати дела ја претставуваат убавината на творештвото. Ќе можете и да се насликате себеси во охридски стил, со што ќе станете дел од живата традиција на градот.\n\nИнспиративно патување што ја слави моќта на уметноста да обединува и да создава нови перспективи, каде секој посетител станува дел од приказната.',
  },
  {
    slug: 'kultura',
    tag: '03 · Традиции',
    name: 'Соба',
    nameEm: 'Традиции',
    desc: 'Научи македонски ора — танцот како мост меѓу минатото и сегашноста.',
    video: '/videos/kultura-hero.mp4',
    cardVideo: '/videos/kultura-card.mp4',
    image: '/rooms/kultura.jpg',
    gradient: 'linear-gradient(155deg,#d8d0a8 0%,#b8a860 100%)',
    text: 'Во овој простор се слави животот, културата оживува преку движење. Секој чекор се претвора во игра, тука ќе научите да играте традиционални македонски ора.\n\nУчењето станува забава, а танцот — мост меѓу минатото и сегашноста. Незаборавно искуство што ја слави живата традиција и ја претвора во современа авантура.',
  },
  {
    slug: 'nostalgia',
    tag: '04 · Носталгија',
    name: 'Соба на',
    nameEm: 'Носталгијата',
    desc: 'Ретро простор за одмор — почувствувај ја магијата на времето што оставило трага.',
    image: '/images/room-nostalgia.jpg',
    gradient: 'linear-gradient(155deg,#d4b8b0 0%,#b87868 100%)',
    text: 'Ретро стилизиран простор каде амбиентот носи носталгија и топлина. Оваа соба е место за одмор и уживање, каде можете да се препуштите на спомените и да ја почувствувате културата како дел од живото наследство.\n\nСупер можност да се нурнете во ретро светот и да ја доживеете магијата на времето што оставило трага и денес.',
  },
  {
    slug: 'arhitektura',
    tag: '05 · Простор',
    name: 'Соба на',
    nameEm: 'Архитектурата',
    desc: 'Виртуелна прошетка низ објекти — аугментирана реалност открива нови перспективи.',
    image: '/rooms/arhitektura.jpg',
    video: '/videos/arhitektura-hero.mp4',
    cardVideo: '/videos/arhitektura-card.mp4',
    images: [
      '/rooms/arhitektura/tvrdina.png',
      '/rooms/arhitektura/teatar.png',
      '/rooms/arhitektura/balneum.png',
      '/rooms/arhitektura/crkva.jpg',
    ],
    gradient: 'linear-gradient(155deg,#b8cccc 0%,#5a9090 100%)',
    text: 'Виртуелна прошетка низ неколку објекти ја носи душата на различните епохи.\n\nИнтерактивните прозорци со аугментирана реалност откриваат нови перспективи на значајни градби, овозможувајќи да се почувствува нивната убавина и значење на еден современ и инспиративен начин.',
  },
  {
    slug: 'pismenost',
    tag: '06 · Збор',
    name: 'Соба на',
    nameEm: 'Писменоста',
    desc: 'Писменоста како живо наследство — јазикот и неговата моќ да обединува.',
    image: '/rooms/pismenost.jpg',
    video: '/videos/pismenost-hero.mp4',
    cardVideo: '/videos/pismenost-card.mp4',
    images: [
      '/rooms/pismenost/p7.jpg',
      '/rooms/pismenost/p3.jpg',
      '/rooms/pismenost/p12.png',
      '/rooms/pismenost/p2.jpg',
      '/rooms/pismenost/p6.jpg',
      '/rooms/pismenost/p5.jpg',
    ],
    gradient: 'linear-gradient(155deg,#d8cca0 0%,#b8a058 100%)',
    text: 'Овде ќе ја почувствувате писменоста како живо наследство, преку просторот за учење и приказна од охридското народно или авторско творештво.\n\nПреку паметна технологија ќе го допрете духот на писменоста и ќе разберете зошто е важно зачувувањето на јазикот и неговата моќ да обединува.',
  },
  {
    slug: 'vojni',
    tag: '07 · Конфликт',
    name: 'Соба на',
    nameEm: 'Војните',
    desc: 'Емоционално патување низ воената историја — цената на мирот и силата на издржливоста.',
    image: '/rooms/vojni.png',
    video: '/videos/vojni-hero.mp4',
    cardVideo: '/videos/vojni-card.mp4',
    images: [
      '/rooms/vojni/bitka.jpeg',
      '/rooms/vojni/pishtal-nozh.jpg',
      '/rooms/vojni/sveshtenik.jpg',
      '/rooms/vojni/gemini1.jpg',
      '/rooms/vojni/soldiers.jpg',
      '/rooms/vojni/cinematic.jpg',
      '/rooms/vojni/guards.jpg',
    ],
    gradient: 'linear-gradient(155deg,#cca898 0%,#8a4830 100%)',
    text: 'Емоционално патување низ воената историја на Охрид. Моќна приказна за жртвите и страдањата, за тежината на воените дејства проследено со звучни ефекти, потенцирајќи ја цената на мирот и силата на човечката издржливост.\n\nПроекцијата е покана да се почувствува историјата како ехо, да се оддаде почит и да се разбере значењето на мирот денес.',
  },
  {
    slug: 'idnina',
    tag: '08 · Иднина',
    name: 'Соба на',
    nameEm: 'Иднината',
    desc: 'Остави своја порака за утре — каков Охрид сакаш да видиш во иднина.',
    gradient: 'linear-gradient(155deg,#b8c2d8 0%,#7890c0 100%)',
    text: 'Место за надеж и визија. Преку интерактивни технологии, просторот станува живо платно каде мислите и соништата се претвораат во идна реалност, каде оставате своја порака за утре, своја желба за тоа како би сакал да изгледа Охрид во иднина.\n\nИнспиративно доживување што ја слави надежта за утре и ја претвора во заедничка визија.',
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
