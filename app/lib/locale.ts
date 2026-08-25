import { useLocation } from "react-router";

export type Locale = "bg" | "en";
export const LOCALES: Locale[] = ["bg", "en"];

/** Every page, in both languages. Bulgarian gets the bare, pretty paths
 *  because Bulgarian is the default — English lives under /en. */
export const PATHS = {
  home: { bg: "/", en: "/en" },
  articles: { bg: "/statii", en: "/en/articles" },
  books: { bg: "/knigi", en: "/en/books" },
  about: { bg: "/za-men", en: "/en/about" },
  contact: { bg: "/kontakti", en: "/en/contact" },
} as const;

export type PageKey = keyof typeof PATHS;
export const PAGE_KEYS = Object.keys(PATHS) as PageKey[];

/** Flat list of every prerenderable URL — react-router.config.ts reads this
 *  so a new page can never be added to PATHS and forgotten at build time.
 *  /404 is appended here but deliberately kept out of PATHS, so it is built
 *  and never shows up in the navigation or the language toggle. */
export const ALL_PATHS: string[] = [
  ...PAGE_KEYS.flatMap((k) => [PATHS[k].bg, PATHS[k].en]),
  "/404",
];

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "bg";
}

export function pageKeyFromPath(pathname: string): PageKey {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const hit = PAGE_KEYS.find(
    (k) => PATHS[k].bg === clean || PATHS[k].en === clean,
  );
  return hit ?? "home";
}

/** The current page's address in the other language — this is what the
 *  language toggle links to, so switching never dumps you on the homepage. */
export function otherLocaleHref(pathname: string): string {
  const locale = localeFromPath(pathname);
  return PATHS[pageKeyFromPath(pathname)][locale === "bg" ? "en" : "bg"];
}

export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname);
}

/** Link helper: href("books") gives the right path for the active language. */
export function useHref2() {
  const locale = useLocale();
  return (key: PageKey) => PATHS[key][locale];
}
