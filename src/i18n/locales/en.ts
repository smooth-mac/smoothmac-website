import type { Translations } from '../types';

const en: Translations = {
  nav: {
    products: 'Products',
    support: 'Support',
    langLabel: 'Language',
  },
  footer: {
    tagline: 'Tools for the Mac you actually use.',
    productsHeading: 'Products',
    companyHeading: 'Company',
    support: 'Support',
    privacy: 'Privacy Policy',
    madeOnMac: 'Made on a Mac.',
    appStoreBlurb: 'Available exclusively on the Mac App Store',
  },
  home: {
    hero: {
      studioLabel: 'smooth-mac',
      headline: 'Tools for the Mac\nyou actually use.',
      subheadline: 'Two apps. Carefully made. Quietly useful.',
    },
    showcase: {
      label: 'Our Apps',
      headline: 'Two apps. One studio.',
      subtext: 'Each one solves a real problem on macOS — nothing more, nothing less.',
    },
    values: [
      {
        title: 'Designed for macOS',
        body: 'Not ported from Windows or iOS. Built for the Mac from the start — respecting its conventions, its shortcuts, and its users.',
      },
      {
        title: 'No subscriptions',
        body: 'One-time purchase. Yours forever. Updates included. We believe good software should be something you own.',
      },
      {
        title: 'Privacy first',
        body: 'No analytics. No accounts. No data leaves your machine. What you do with your Mac is your business.',
      },
    ],
    cta: {
      appStoreText: 'Available exclusively on the Mac App Store',
      requiresText: 'Requires macOS 13 Ventura or later · Universal Binary (Apple Silicon + Intel)',
    },
    seo: {
      title: 'smooth-mac — macOS Utilities, Carefully Made',
      description:
        'smooth-mac makes focused utilities for macOS. SmoothSnap for window management. SmoothPeek for Dock window previews. Built for the Mac, by Mac users.',
    },
  },
  product: {
    downloadButton: 'Download on the Mac App Store',
    seeFeatures: 'See all features ↓',
    learnMore: 'Learn more',
    appStore: 'Mac App Store',
    featuresLabel: 'Features',
    featuresHeadline: ["Everything you need.", "Nothing you don't."],
    onePurchase: 'One-time purchase',
  },
  products: {
    smoothsnap: {
      tagline: 'Snap into place.',
      description: 'SmoothSnap puts 11 snap zones at your fingertips. Drag a window to any edge — or hit a shortcut — and it lands exactly where you want it.',
      longDescription:
        'macOS is beautifully designed in almost every way. Window management has always been the quiet exception. Every workaround either fights the operating system or ships a dozen features nobody asked for. SmoothSnap exists because one thing should simply work: moving your windows exactly where you want them, immediately, without thinking about it.',
      features: [
        {
          title: 'Keyboard-First',
          description: 'Snap windows with shortcuts that feel like they were always there — no new muscle memory required, no chord gymnastics.',
        },
        {
          title: 'Multi-Display Ready',
          description: 'Works seamlessly across multiple monitors and alongside Stage Manager. Move a window anywhere in your setup without missing a beat.',
        },
        {
          title: 'Notch-Aware',
          description: 'Windows snap correctly around the MacBook notch with no overlap. SmoothSnap knows where your screen actually is.',
        },
        {
          title: 'Zero Clutter',
          description: 'No icon in your menu bar, no UI in your face. SmoothSnap lives in the background and appears only when you summon it.',
        },
        {
          title: 'Built for macOS',
          description: 'Not ported from another OS. Written in Swift with native AppKit from day one — it respects macOS conventions because it is macOS.',
        },
        {
          title: 'Instant Response',
          description: 'Sub-16ms snap response time. There is no perceptible lag between the moment you decide where a window should go and the moment it gets there.',
        },
      ],
      philosophy:
        'macOS is beautifully designed in almost every way.\nWindow management has always been the quiet exception.\n\nEvery workaround either fights the operating system or ships a dozen features nobody asked for. SmoothSnap exists because one thing should simply work: moving your windows exactly where you want them, immediately, without thinking about it.\n\nNothing more. Nothing less. Just the Mac, working the way it should.',
      protocol: {
        requirement: 'macOS 13 Ventura or later',
        architecture: 'Universal Binary (Apple Silicon + Intel)',
        permissions: ['Accessibility'],
        permissionPurpose:
          'SmoothSnap needs Accessibility permission to move and resize windows that belong to other apps. This is the only permission it requests. No data leaves your device.',
        price: '$9.99 · One-time purchase · No subscription',
        distribution: 'Mac App Store',
      },
      ctaHeadline: 'Ready to snap?',
      ctaSubtext: 'One-time purchase',
      crossSell: 'Also check out',
      crossSellTagline: 'See before you switch.',
      seo: {
        title: 'SmoothSnap — Window Snapping for macOS',
        description: 'SmoothSnap puts 11 snap zones at your fingertips. Fast, keyboard-driven window management for macOS. One-time purchase.',
      },
      screenshotAlts: ['SmoothSnap window snapping in action', 'SmoothSnap multi-display layout'],
    },
    smoothpeek: {
      tagline: 'See before you switch.',
      description: 'Hover over any Dock icon to instantly preview all open windows — then click to switch with confidence.',
      longDescription:
        'Clicking the wrong window wastes more of your day than you think. SmoothPeek shows you live previews of every open window the moment you hover over a Dock icon — so you always land exactly where you meant to go.',
      features: [
        {
          title: 'Instant Dock Preview',
          description: 'Hover any Dock icon to see live thumbnails of every open window — no clicking required.',
        },
        {
          title: 'All Windows at Once',
          description: 'Every open window for an app, shown side by side. Find the right one in a glance.',
        },
        {
          title: 'One-click Focus',
          description: 'Tap any thumbnail to bring that exact window to the front. No hunting through app switchers.',
        },
        {
          title: 'Beautifully Native',
          description: 'Smooth fade animations and a visual design that feels like it belongs in macOS.',
        },
        {
          title: '100ms Response',
          description: 'Previews appear the instant you hover. No loading, no delay, no spinner.',
        },
        {
          title: 'Keyboard Friendly',
          description: 'Tab between windows and press Enter to switch. Works entirely without a mouse.',
        },
      ],
      philosophy:
        'We built SmoothPeek because clicking the wrong window is a friction you repeat dozens of times a day. macOS has always had a brilliant Dock — but it does not show you what is inside. SmoothPeek fills that gap with a single hover. One glance. One click. The right window, every time. Good tools are the ones you stop noticing.',
      protocol: {
        requirement: 'macOS 14 Sonoma or later',
        architecture: 'Universal Binary (Apple Silicon + Intel)',
        permissions: ['Accessibility', 'Screen Recording'],
        permissionPurpose:
          'Accessibility permission is used to detect hover events on Dock icons. Screen Recording captures live window thumbnails locally. No data is transmitted or stored — everything stays on your Mac.',
        price: '$2.99 · One-time purchase · No subscription',
        distribution: 'Mac App Store',
      },
      ctaHeadline: 'Your Dock, elevated.',
      ctaSubtext: 'One-time purchase',
      crossSell: 'Also check out',
      crossSellTagline: 'Window snapping that feels native.',
      seo: {
        title: 'SmoothPeek — Dock Window Previews for macOS',
        description: 'Hover over any Dock icon to instantly preview all open windows. Click to switch with precision. Requires macOS 14 Sonoma or later.',
      },
      screenshotAlts: ['SmoothPeek showing window previews on Dock hover', 'SmoothPeek multi-window preview panel'],
    },
  },
  support: {
    headline: 'Support',
    subheadline: "Having trouble? We're here to help.",
    smoothsnap: {
      faqs: [
        {
          q: 'Which macOS versions are supported?',
          a: 'SmoothSnap requires macOS 13 Ventura or later. It runs natively on both Apple Silicon and Intel Macs.',
        },
        {
          q: 'Does it work with Stage Manager?',
          a: 'Yes. SmoothSnap is fully aware of Stage Manager and works alongside it without conflicts.',
        },
        {
          q: 'Can I customize keyboard shortcuts?',
          a: 'Yes — open SmoothSnap preferences to customize any snap shortcut.',
        },
      ],
    },
    smoothpeek: {
      faqs: [
        {
          q: 'How does SmoothPeek work?',
          a: 'When you hover over a Dock icon, SmoothPeek shows a floating panel with live thumbnails of every open window for that app. Click any thumbnail to switch to that window instantly.',
        },
        {
          q: 'Which macOS versions are supported?',
          a: 'SmoothPeek requires macOS 14 Sonoma or later. It runs natively on both Apple Silicon and Intel Macs.',
        },
        {
          q: 'Why does SmoothPeek need Accessibility and Screen Recording permissions?',
          a: 'Accessibility permission is used to detect hover events on Dock icons. Screen Recording is used to capture live window thumbnails on your local device. No data is transmitted or stored — everything stays on your Mac.',
        },
      ],
    },
    contact: {
      headline: 'Still need help?',
      subtext: "Email us and we'll get back to you within one business day.",
      emailLabel: 'support@smoothmac.app',
    },
    seo: {
      title: 'Support — smooth-mac',
      description: 'Get help with SmoothSnap or SmoothPeek. FAQs, compatibility info, and contact.',
    },
  },
  privacy: {
    headline: 'Privacy Policy',
    shortVersion: 'The short version: smooth-mac apps collect no personal data. Nothing leaves your device.',
    sections: [
      {
        title: 'Data Collection',
        body: 'smooth-mac apps (SmoothSnap, SmoothPeek) do not collect, transmit, or store any personal data. There are no accounts, no analytics, and no telemetry.',
      },
      {
        title: 'This Website',
        body: 'smoothmac.app uses Cloudflare Web Analytics — a privacy-preserving analytics solution that requires no cookies and collects no personally identifiable information. No tracking pixels, no third-party scripts.',
      },
      {
        title: 'System Permissions',
        body: 'SmoothPeek requests Accessibility and Screen Recording permissions solely to detect which app is active in your Dock and to capture window previews on your local device. No data from these permissions is transmitted, stored, or shared. You can revoke these permissions at any time in System Settings > Privacy & Security.',
      },
      {
        title: 'App Store',
        body: "Purchases are processed by Apple via the Mac App Store. Apple's privacy policy governs any data collected during purchase.",
      },
      {
        title: 'Contact',
        body: 'Questions? Email',
      },
    ],
    lastUpdated: 'Last updated: March 2026',
    seo: {
      title: 'Privacy Policy — smooth-mac',
      description: 'smooth-mac privacy policy. We collect no personal data.',
    },
  },
  notFound: {
    headline: 'Page not found.',
    subheadline: "That page doesn't exist — but our apps do.",
    goHome: 'Go home',
  },
};

export default en;
