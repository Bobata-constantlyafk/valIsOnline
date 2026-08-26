import { useLocation } from "react-router";

/** The site's real home. Everything canonical derives from this one string:
 *  the same pages are also served at valisonline.pages.dev and at a
 *  per-deployment subdomain that never goes away, and without a canonical
 *  pointing here search engines have to guess which copy is the real one. */
export const SITE_ORIGIN = "https://val-is.online";

/** Absolute URL for a path, for canonical, hreflang, og:url and the sitemap. */
export const absolute = (path: string) =>
  SITE_ORIGIN + (path === "/" ? "/" : path);

/** Bulgarian is the default and owns the bare paths. The other four sit under
 *  a prefix. Order here is the order the language menu lists them in. */
export const LOCALES = ["bg", "en", "es", "it", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "bg";

/** Every translatable string on the site is this shape, which means adding a
 *  language is a compile error in every file that has not been translated yet
 *  rather than a silent fallback to Bulgarian. */
export type L10n = Record<Locale, string>;

/** What each language calls itself, for the language menu. Never translated
 *  into the current page's language — a French speaker looks for "Français",
 *  not for "френски". */
export const LOCALE_NAMES: Record<Locale, string> = {
  bg: "Български",
  en: "English",
  es: "Español",
  it: "Italiano",
  fr: "Français",
};

/** Short form for the menu button. */
export const LOCALE_SHORT: Record<Locale, string> = {
  bg: "БГ",
  en: "EN",
  es: "ES",
  it: "IT",
  fr: "FR",
};

/** BCP-47 tags for Intl and for the lang attribute. */
export const LOCALE_TAG: Record<Locale, string> = {
  bg: "bg-BG",
  en: "en-GB",
  es: "es-ES",
  it: "it-IT",
  fr: "fr-FR",
};

/** Every page in every language. Slugs are localised rather than shared, so a
 *  Spanish reader gets /es/libros instead of /es/books. */
export const PATHS = {
  home: { bg: "/", en: "/en", es: "/es", it: "/it", fr: "/fr" },
  articles: {
    bg: "/statii",
    en: "/en/articles",
    es: "/es/articulos",
    it: "/it/articoli",
    fr: "/fr/articles",
  },
  books: {
    bg: "/knigi",
    en: "/en/books",
    es: "/es/libros",
    it: "/it/libri",
    fr: "/fr/livres",
  },
  about: {
    bg: "/za-men",
    en: "/en/about",
    es: "/es/sobre-mi",
    it: "/it/chi-sono",
    fr: "/fr/a-propos",
  },
  contact: {
    bg: "/kontakti",
    en: "/en/contact",
    es: "/es/contacto",
    it: "/it/contatti",
    fr: "/fr/contact",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof PATHS;
export const PAGE_KEYS = Object.keys(PATHS) as PageKey[];

/** Flat list of every prerenderable URL — react-router.config.ts reads this
 *  so a new page or a new language cannot be added and then forgotten at
 *  build time. /404 is appended here but deliberately kept out of PATHS, so
 *  it is built and never appears in navigation. */
export const ALL_PATHS: string[] = [
  ...PAGE_KEYS.flatMap((k) => LOCALES.map((l) => PATHS[k][l])),
  "/404",
];

export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return (LOCALES as readonly string[]).includes(seg) && seg !== "bg"
    ? (seg as Locale)
    : DEFAULT_LOCALE;
}

export function pageKeyFromPath(pathname: string): PageKey {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const hit = PAGE_KEYS.find((k) =>
    LOCALES.some((l) => PATHS[k][l] === clean),
  );
  return hit ?? "home";
}

/** The current page's address in another language — what the language menu
 *  links to, so switching never dumps you back on the homepage. */
export function hrefInLocale(pathname: string, target: Locale): string {
  return PATHS[pageKeyFromPath(pathname)][target];
}

export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname);
}

/** Link helper: href("books") gives the right path for the active language. */
export function useHref2() {
  const locale = useLocale();
  return (key: PageKey) => PATHS[key][locale];
}
