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
        'smooth-mac makes focused utilities for macOS. SmoothSnap for window management. SmoothPeek for file preview. Built for the Mac, by Mac users.',
    },
  },
  product: {
    downloadButton: 'Download on the App Store',
    seeFeatures: 'See all features ↓',
    learnMore: 'Learn more',
    appStore: 'App Store',
    featuresLabel: 'Features',
    featuresHeadline: ["Everything you need.", "Nothing you don't."],
    onePurchase: 'One-time purchase',
  },
  products: {
    smoothsnap: {
      tagline: 'Window snapping that feels native.',
      description: 'Window snapping for macOS — fast, keyboard-driven, and invisible until you need it.',
      longDescription:
        'macOS has never had window snapping that felt right. SmoothSnap fills that gap without fighting the OS. It works with your existing keyboard shortcuts, stays completely out of the way, and behaves exactly as you would expect from an app Apple might have made.',
      features: [
        { title: 'Keyboard-first', description: 'Snap windows with shortcuts that feel natural — no new muscle memory required.' },
        { title: 'Stage Manager aware', description: 'Works seamlessly alongside Stage Manager and multiple displays.' },
        { title: 'Notch-aware', description: 'Windows snap correctly around the MacBook notch with no overlap.' },
        { title: 'Zero menubar clutter', description: 'No icon in your menubar, no preferences sprawl. Just snapping.' },
        { title: 'Built for macOS', description: 'Not a Windows port. Designed from scratch for how macOS actually works.' },
        { title: 'Instant response', description: 'Sub-16ms response time. Snapping happens the moment you want it.' },
      ],
      ctaHeadline: 'Ready to snap?',
      ctaSubtext: 'One-time purchase',
      crossSell: 'Also check out',
      crossSellTagline: 'Quick Look, elevated.',
      seo: {
        title: 'SmoothSnap — Window Snapping for macOS',
        description: 'Window snapping for macOS — fast, keyboard-driven, and invisible until you need it.',
      },
      screenshotAlts: ['SmoothSnap window snapping in action', 'SmoothSnap multi-display layout'],
    },
    smoothpeek: {
      tagline: 'Quick Look, elevated.',
      description: 'SmoothPeek gives Quick Look a second opinion — more file types, smoother navigation.',
      longDescription:
        "You hover over a file and want to know what's inside — instantly. SmoothPeek extends Quick Look with support for more file types, fluid navigation between files, and an experience so native you'll forget it's a third-party app.",
      features: [
        { title: 'More file types', description: 'Preview formats that Quick Look ignores — code files, archives, fonts, and more.' },
        { title: 'Navigate without closing', description: 'Move between files in a folder while the preview stays open.' },
        {
          title: 'Works everywhere Quick Look does',
          description: 'Finder, Open dialogs, Desktop — wherever you can Quick Look, SmoothPeek enhances it.',
        },
        {
          title: 'Feels completely native',
          description: 'Uses the same visual language as Quick Look — no jarring transitions or foreign UI.',
        },
        { title: 'Instant preview', description: 'No loading spinners. Files appear the moment you press Space.' },
        { title: 'Keyboard-only workflow', description: 'Navigate, close, and open files entirely from the keyboard.' },
      ],
      ctaHeadline: "See what's inside.",
      ctaSubtext: 'One-time purchase',
      crossSell: 'Also check out',
      crossSellTagline: 'Window snapping that feels native.',
      seo: {
        title: 'SmoothPeek — Quick Look, Elevated for macOS',
        description: 'SmoothPeek gives Quick Look a second opinion — more file types, smoother navigation.',
      },
      screenshotAlts: ['SmoothPeek previewing a file', 'SmoothPeek file navigation'],
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
          q: 'Which file types does SmoothPeek add support for?',
          a: 'SmoothPeek adds preview support for code files, markdown, archives, fonts, and more — a full list is available in-app.',
        },
        {
          q: 'Does it replace Quick Look?',
          a: 'SmoothPeek extends Quick Look — it does not replace it. You still use the Space key as normal.',
        },
        {
          q: 'Is it compatible with third-party file managers?',
          a: 'SmoothPeek works wherever Quick Look does, including third-party Finder alternatives that use the Quick Look API.',
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
