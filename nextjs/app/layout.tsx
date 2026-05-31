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

export const metadata: Metadata = {
  metadataBase: new URL('https://ohridski-vremeplov.vercel.app'),
  title: 'Охридски Времеплов · Интерактивен Виртуелен Музеј',
  description:
    'Патувај низ 2000 години охридска историја. 9 тематски соби, 360° виртуелен тур, интерактивни квизови и античкиот театар.',
  openGraph: {
    title: 'Охридски Времеплов · Интерактивен Виртуелен Музеј',
    description:
      'Патувај низ 2000 години охридска историја. 9 тематски соби, 360° виртуелен тур и античкиот театар.',
    images: ['/logo/h_Bronze_OTT.png'],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/logo/bronze_OTT.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk" className={`${barlow.variable} ${barlowCondensed.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preload" as="image" href="/logo/h_Bronze_OTT.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
