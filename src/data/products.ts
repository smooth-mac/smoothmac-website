export interface Feature {
  title: string;
  description: string;
  icon: string; // SVG path or emoji fallback
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // path relative to /public/products/<slug>/
  heroImage: string;
  screenshots: { src: string; alt: string }[];
  price: number | 'free';
  appStoreUrl: string;
  features: Feature[];
  macosRequirement: string;
  version: string;
  accentColor: string; // CSS color
  accentColorClass: string; // Tailwind-compatible
}

export const products: Product[] = [
  {
    slug: 'smoothsnap',
    name: 'SmoothSnap',
    tagline: 'Window snapping that feels native.',
    description: 'Window snapping for macOS — fast, keyboard-driven, and invisible until you need it.',
    longDescription:
      'macOS has never had window snapping that felt right. SmoothSnap fills that gap without fighting the OS. It works with your existing keyboard shortcuts, stays completely out of the way, and behaves exactly as you would expect from an app Apple might have made.',
    icon: '/products/smoothsnap/icon.png',
    heroImage: '/products/smoothsnap/hero.png',
    screenshots: [
      { src: '/products/smoothsnap/screenshot-1.png', alt: 'SmoothSnap window snapping in action' },
      { src: '/products/smoothsnap/screenshot-2.png', alt: 'SmoothSnap multi-display layout' },
    ],
    price: 9.99,
    appStoreUrl: 'https://apps.apple.com/app/smoothsnap',
    features: [
      {
        title: 'Keyboard-first',
        description: 'Snap windows with shortcuts that feel natural — no new muscle memory required.',
        icon: '⌨️',
      },
      {
        title: 'Stage Manager aware',
        description: 'Works seamlessly alongside Stage Manager and multiple displays.',
        icon: '🖥️',
      },
      {
        title: 'Notch-aware',
        description: 'Windows snap correctly around the MacBook notch with no overlap.',
        icon: '✂️',
      },
      {
        title: 'Zero menubar clutter',
        description: 'No icon in your menubar, no preferences sprawl. Just snapping.',
        icon: '🫥',
      },
      {
        title: 'Built for macOS',
        description: 'Not a Windows port. Designed from scratch for how macOS actually works.',
        icon: '🍎',
      },
      {
        title: 'Instant response',
        description: 'Sub-16ms response time. Snapping happens the moment you want it.',
        icon: '⚡',
      },
    ],
    macosRequirement: 'macOS 13 Ventura or later',
    version: '1.0',
    accentColor: '#34c759',
    accentColorClass: 'smoothsnap',
  },
  {
    slug: 'smoothpeek',
    name: 'SmoothPeek',
    tagline: 'Quick Look, elevated.',
    description: 'SmoothPeek gives Quick Look a second opinion — more file types, smoother navigation.',
    longDescription:
      'You hover over a file and want to know what\'s inside — instantly. SmoothPeek extends Quick Look with support for more file types, fluid navigation between files, and an experience so native you\'ll forget it\'s a third-party app.',
    icon: '/products/smoothpeek/icon.png',
    heroImage: '/products/smoothpeek/hero.png',
    screenshots: [
      { src: '/products/smoothpeek/screenshot-1.png', alt: 'SmoothPeek previewing a file' },
      { src: '/products/smoothpeek/screenshot-2.png', alt: 'SmoothPeek file navigation' },
    ],
    price: 7.99,
    appStoreUrl: 'https://apps.apple.com/app/smoothpeek',
    features: [
      {
        title: 'More file types',
        description: 'Preview formats that Quick Look ignores — code files, archives, fonts, and more.',
        icon: '📁',
      },
      {
        title: 'Navigate without closing',
        description: 'Move between files in a folder while the preview stays open.',
        icon: '🔀',
      },
      {
        title: 'Works everywhere Quick Look does',
        description: 'Finder, Open dialogs, Desktop — wherever you can Quick Look, SmoothPeek enhances it.',
        icon: '🔍',
      },
      {
        title: 'Feels completely native',
        description: 'Uses the same visual language as Quick Look — no jarring transitions or foreign UI.',
        icon: '✨',
      },
      {
        title: 'Instant preview',
        description: 'No loading spinners. Files appear the moment you press Space.',
        icon: '🚀',
      },
      {
        title: 'Keyboard-only workflow',
        description: 'Navigate, close, and open files entirely from the keyboard.',
        icon: '⌨️',
      },
    ],
    macosRequirement: 'macOS 13 Ventura or later',
    version: '1.0',
    accentColor: '#ff9f0a',
    accentColorClass: 'smoothpeek',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
