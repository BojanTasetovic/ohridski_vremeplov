import { MetadataRoute } from 'next';
import { rooms } from '@/data/rooms';

const BASE = 'https://ohridski-vremeplov.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                    priority: 1.0, changeFrequency: 'weekly'  },
    { url: `${BASE}/sobi`,          priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/kupi-bilet`,    priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${BASE}/za-nas`,        priority: 0.7, changeFrequency: 'monthly' },
  ];

  const roomPages: MetadataRoute.Sitemap = rooms
    .filter((r) => r.slug !== 'patuvanje-niz-vremeto')
    .map((r) => ({
      url: `${BASE}/soba/${r.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    }));

  return [...staticPages, ...roomPages];
}
