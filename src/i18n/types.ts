export type Locale = 'en' | 'ko' | 'ja' | 'zh' | 'es';

export interface FeatureTranslation {
  title: string;
  description: string;
}

export interface ProductTranslations {
  tagline: string;
  description: string;
  longDescription: string;
  features: FeatureTranslation[];
  ctaHeadline: string;
  ctaSubtext: string;
  crossSell: string;
  crossSellTagline: string;
  seo: {
    title: string;
    description: string;
  };
  screenshotAlts: string[];
}

export interface Translations {
  nav: {
    products: string;
    support: string;
    langLabel: string;
  };
  footer: {
    tagline: string;
    productsHeading: string;
    companyHeading: string;
    support: string;
    privacy: string;
    madeOnMac: string;
    appStoreBlurb: string;
  };
  home: {
    hero: {
      studioLabel: string;
      headline: string;
      subheadline: string;
    };
    showcase: {
      label: string;
      headline: string;
      subtext: string;
    };
    values: Array<{
      title: string;
      body: string;
    }>;
    cta: {
      appStoreText: string;
      requiresText: string;
    };
    seo: {
      title: string;
      description: string;
    };
  };
  product: {
    downloadButton: string;
    seeFeatures: string;
    learnMore: string;
    appStore: string;
    featuresLabel: string;
    featuresHeadline: [string, string];
    onePurchase: string;
  };
  products: {
    smoothsnap: ProductTranslations;
    smoothpeek: ProductTranslations;
  };
  support: {
    headline: string;
    subheadline: string;
    smoothsnap: {
      faqs: Array<{ q: string; a: string }>;
    };
    smoothpeek: {
      faqs: Array<{ q: string; a: string }>;
    };
    contact: {
      headline: string;
      subtext: string;
      emailLabel: string;
    };
    seo: {
      title: string;
      description: string;
    };
  };
  privacy: {
    headline: string;
    shortVersion: string;
    sections: Array<{
      title: string;
      body: string;
    }>;
    lastUpdated: string;
    seo: {
      title: string;
      description: string;
    };
  };
  notFound: {
    headline: string;
    subheadline: string;
    goHome: string;
  };
}
