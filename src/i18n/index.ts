import type { Locale, Translations } from './types';
import en from './locales/en';
import ko from './locales/ko';
import ja from './locales/ja';
import zh from './locales/zh';
import es from './locales/es';

export type { Locale, Translations };

const translations: Record<Locale, Translations> = { en, ko, ja, zh, es };

export const locales: Locale[] = ['en', 'ko', 'ja', 'zh', 'es'];
export const defaultLocale: Locale = 'en';
export const nonDefaultLocales: Exclude<Locale, 'en'>[] = ['ko', 'ja', 'zh', 'es'];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if (first === 'ko' || first === 'ja' || first === 'zh' || first === 'es') return first;
  return 'en';
}

/**
 * Convert a path to the equivalent path in the target locale.
 * English has no prefix (prefixDefaultLocale: false).
 * e.g. /ko/smoothsnap → /ja/smoothsnap (switching ko→ja)
 *      /smoothsnap    → /ko/smoothsnap  (switching en→ko)
 *      /ko/smoothsnap → /smoothsnap     (switching ko→en)
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  // Strip any existing non-default locale prefix
  let bare = pathname;
  for (const loc of nonDefaultLocales) {
    const prefix = `/${loc}`;
    if (bare === prefix || bare === `${prefix}/`) {
      bare = '/';
      break;
    }
    if (bare.startsWith(`${prefix}/`)) {
      bare = bare.slice(prefix.length);
      break;
    }
  }

  if (targetLocale === 'en') return bare || '/';
  return bare === '/' ? `/${targetLocale}/` : `/${targetLocale}${bare}`;
}

export interface AlternateLink {
  locale: Locale;
  hreflang: string;
  url: string;
}

/** Generate hreflang alternate links for a given pathname */
export function getAlternateLinks(pathname: string, site: string): AlternateLink[] {
  return locales.map((locale) => ({
    locale,
    hreflang: locale === 'zh' ? 'zh-Hans' : locale,
    url: new URL(getLocalizedPath(pathname, locale), site).toString(),
  }));
}
