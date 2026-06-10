import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const BASE = 'https://ohridski-vremeplov.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Охридски Времеплов · Интерактивен Музеј во Охрид',
    template: '%s · Охридски Времеплов',
  },
  description:
    'Откријте ги 2000 години охридска историја низ 10 тематски интерактивни соби. Дигитален музеј со VR/AR, ласерски проектори и аудио-визуелно патување во срцето на Охрид.',
  keywords: [
    'Охрид музеј', 'интерактивен музеј Охрид', 'Охридски Времеплов',
    'Ohrid museum', 'Ohrid Time Travel', 'дигитален музеј', 'туризам Охрид',
    'Охридско Езеро', 'виртуелен тур Охрид', 'историја Охрид', 'едукација Охрид',
  ],
  authors: [{ name: 'Охридски Времеплов', url: BASE }],
  creator: 'Охридски Времеплов',
  publisher: 'Охридски Времеплов',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'mk_MK',
    url: BASE,
    siteName: 'Охридски Времеплов',
    title: 'Охридски Времеплов · Интерактивен Музеј во Охрид',
    description:
      'Откријте ги 2000 години охридска историја низ 10 тематски интерактивни соби со VR/AR и ласерски проектори во Охрид.',
    images: [
      {
        url: '/logo/h_OTT_k.png',
        width: 1200,
        height: 630,
        alt: 'Охридски Времеплов — Интерактивен Музеј',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Охридски Времеплов · Интерактивен Музеј во Охрид',
    description: 'Откријте ги 2000 години охридска историја низ 10 интерактивни соби.',
    images: ['/logo/h_OTT_k.png'],
  },
  icons: {
    icon: '/logo/bronze_OTT.png',
    apple: '/logo/bronze_OTT.png',
    shortcut: '/logo/bronze_OTT.png',
  },
  alternates: { canonical: BASE },
  category: 'tourism',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Museum', 'TouristAttraction', 'LocalBusiness'],
      '@id': `${BASE}/#museum`,
      name: 'Охридски Времеплов',
      alternateName: 'Ohrid Time Travel',
      description:
        'Интерактивен дигитален музеј во Охрид со 10 тематски соби, VR/AR технологија и аудио-визуелно патување низ 2000 години историја.',
      url: BASE,
      logo: `${BASE}/logo/bronze_OTT.png`,
      image: `${BASE}/logo/h_OTT_k.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Охрид',
        addressRegion: 'Охридско-Струшки регион',
        addressCountry: 'MK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.1172,
        longitude: 20.8016,
      },
      priceRange: '300–1500 МКД',
      currenciesAccepted: 'MKD',
      paymentAccepted: 'Cash, Credit Card',
      touristType: 'Cultural tourists, Families, Students',
      isAccessibleForFree: false,
      inLanguage: ['mk', 'en'],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Охридски Времеплов',
      publisher: { '@id': `${BASE}/#museum` },
      inLanguage: 'mk',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk" className={`${barlow.variable} ${barlowCondensed.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preload" as="image" href="/logo/h_OTT_k.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
