export interface Feature {
  icon: string;
}

export interface Product {
  slug: string;
  name: string;
  icon: string;
  heroImage: string;
  screenshots: { src: string; alt: string }[];
  price: number | 'free';
  appStoreUrl: string;
  features: Feature[];
  macosRequirement: string;
  version: string;
  accentColor: string;
  accentColorClass: string;
}

export const products: Product[] = [
  {
    slug: 'smoothsnap',
    name: 'SmoothSnap',
    icon: '/products/smoothsnap/icon.png',
    heroImage: '/products/smoothsnap/hero.png',
    screenshots: [
      { src: '/products/smoothsnap/screenshot-1.png', alt: 'SmoothSnap window snapping in action' },
      { src: '/products/smoothsnap/screenshot-2.png', alt: 'SmoothSnap multi-display layout' },
    ],
    price: 9.99,
    appStoreUrl: 'https://apps.apple.com/app/smoothsnap',
    features: [
      { icon: '⌨️' },
      { icon: '🖥️' },
      { icon: '✂️' },
      { icon: '🫥' },
      { icon: '🍎' },
      { icon: '⚡' },
    ],
    macosRequirement: 'macOS 13 Ventura or later',
    version: '1.0',
    accentColor: '#34c759',
    accentColorClass: 'smoothsnap',
  },
  {
    slug: 'smoothpeek',
    name: 'SmoothPeek',
    icon: '/products/smoothpeek/icon.png',
    heroImage: '/products/smoothpeek/hero.png',
    screenshots: [
      { src: '/products/smoothpeek/screenshot-1.png', alt: 'SmoothPeek previewing a file' },
      { src: '/products/smoothpeek/screenshot-2.png', alt: 'SmoothPeek file navigation' },
    ],
    price: 2.99,
    appStoreUrl: 'https://apps.apple.com/app/smoothpeek',
    features: [
      { icon: '📁' },
      { icon: '🔀' },
      { icon: '🔍' },
      { icon: '✨' },
      { icon: '🚀' },
      { icon: '⌨️' },
    ],
    macosRequirement: 'macOS 14 Sonoma or later',
    version: '1.0',
    accentColor: '#ff9f0a',
    accentColorClass: 'smoothpeek',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
