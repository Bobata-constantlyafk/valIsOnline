import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAG,
  PATHS,
  absolute,
  localeFromPath,
  pageKeyFromPath,
  type L10n,
  type Locale,
} from "./locale";

/** Link preview card. 1200x630 is what Facebook, LinkedIn, WhatsApp, Slack
 *  and X all crop to; a portrait-shaped image gets cropped to a sliver. */
const OG_IMAGE = "/og.jpg";

/** Titles and descriptions follow the language of the page, and all five
 *  versions share one route module — so meta reads the locale off the path
 *  rather than being hard-coded per file. */
const PAGE_META: Record<string, { title: L10n; description: L10n }> = {
  home: {
    title: {
      bg: "valIsOnline — Валентина Истаткова",
      en: "valIsOnline — Valentina Istatkova",
      es: "valIsOnline — Valentina Istatkova",
      it: "valIsOnline — Valentina Istatkova",
      fr: "valIsOnline — Valentina Istatkova",
    },
    description: {
      bg: "Валентина Истаткова — редактор на книги и преводач от английски и испански. Седем преведени заглавия, статии за книги, езици и природа.",
      en: "Valentina Istatkova — book editor and translator from English and Spanish. Seven translated titles, and writing about books, languages and nature.",
      es: "Valentina Istatkova — editora de libros y traductora del inglés y del español. Siete títulos traducidos y textos sobre libros, idiomas y naturaleza.",
      it: "Valentina Istatkova — redattrice di libri e traduttrice dall'inglese e dallo spagnolo. Sette titoli tradotti e testi su libri, lingue e natura.",
      fr: "Valentina Istatkova — éditrice de livres et traductrice de l'anglais et de l'espagnol. Sept titres traduits et des textes sur les livres, les langues et la nature.",
    },
  },
  articles: {
    title: {
      bg: "Статии — valIsOnline",
      en: "Writing — valIsOnline",
      es: "Textos — valIsOnline",
      it: "Testi — valIsOnline",
      fr: "Textes — valIsOnline",
    },
    description: {
      bg: "Публикувани статии на Валентина Истаткова в Литературен вестник, Списание VIP и 10te.bg.",
      en: "Published writing by Valentina Istatkova in Literaturen Vestnik, VIP Magazine and 10te.bg.",
      es: "Textos publicados de Valentina Istatkova en Literaturen Vestnik, la revista VIP y 10te.bg.",
      it: "Testi pubblicati di Valentina Istatkova su Literaturen Vestnik, la rivista VIP e 10te.bg.",
      fr: "Textes publiés de Valentina Istatkova dans Literaturen Vestnik, le magazine VIP et 10te.bg.",
    },
  },
  books: {
    title: {
      bg: "Книги — valIsOnline",
      en: "Books — valIsOnline",
      es: "Libros — valIsOnline",
      it: "Libri — valIsOnline",
      fr: "Livres — valIsOnline",
    },
    description: {
      bg: "Седемте книги, преведени и редактирани от Валентина Истаткова — от английски и испански.",
      en: "The seven books translated and edited by Valentina Istatkova, from English and Spanish.",
      es: "Los siete libros traducidos y editados por Valentina Istatkova, del inglés y del español.",
      it: "I sette libri tradotti e curati da Valentina Istatkova, dall'inglese e dallo spagnolo.",
      fr: "Les sept livres traduits et édités par Valentina Istatkova, de l'anglais et de l'espagnol.",
    },
  },
  about: {
    title: {
      bg: "За мен — valIsOnline",
      en: "About — valIsOnline",
      es: "Sobre mí — valIsOnline",
      it: "Chi sono — valIsOnline",
      fr: "À propos — valIsOnline",
    },
    description: {
      bg: "Седем езика, София, редакция и превод — и защо неаполитанският не е екзотика.",
      en: "Seven languages, Sofia, editing and translation — and why Neapolitan is not an exercise in the exotic.",
      es: "Siete idiomas, Sofía, edición y traducción, y por qué el napolitano no es un exotismo.",
      it: "Sette lingue, Sofia, redazione e traduzione, e perché il napoletano non è un esotismo.",
      fr: "Sept langues, Sofia, l'édition et la traduction — et pourquoi le napolitain n'est pas un exotisme.",
    },
  },
  contact: {
    title: {
      bg: "Контакти — valIsOnline",
      en: "Contact — valIsOnline",
      es: "Contacto — valIsOnline",
      it: "Contatti — valIsOnline",
      fr: "Contact — valIsOnline",
    },
    description: {
      bg: "Как да намерите Валентина Истаткова.",
      en: "How to reach Valentina Istatkova.",
      es: "Cómo ponerse en contacto con Valentina Istatkova.",
      it: "Come contattare Valentina Istatkova.",
      fr: "Comment joindre Valentina Istatkova.",
    },
  },
};

export function metaFor(page: keyof typeof PAGE_META, pathname: string) {
  const locale: Locale = localeFromPath(pathname);
  const title = PAGE_META[page].title[locale];
  const description = PAGE_META[page].description[locale];
  const key = pageKeyFromPath(pathname);
  const canonical = absolute(PATHS[key][locale]);

  return [
    { title },
    { name: "description", content: description },

    // This exact page is also served from valisonline.pages.dev and from a
    // per-deployment subdomain. Without this, search engines treat those as
    // competing copies and pick a winner themselves.
    { tagName: "link", rel: "canonical", href: canonical },

    // The five language versions are the SAME page, not five similar ones.
    // Each version lists all five plus itself, which is what the spec
    // requires — a page that omits itself is ignored.
    ...LOCALES.map((l) => ({
      tagName: "link",
      rel: "alternate",
      hreflang: l,
      href: absolute(PATHS[key][l]),
    })),
    // Shown to anyone whose language is none of the five.
    {
      tagName: "link",
      rel: "alternate",
      hreflang: "x-default",
      href: absolute(PATHS[key][DEFAULT_LOCALE]),
    },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: "valIsOnline" },
    { property: "og:image", content: absolute(OG_IMAGE) },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: LOCALE_TAG[locale].replace("-", "_") },
    ...LOCALES.filter((l) => l !== locale).map((l) => ({
      property: "og:locale:alternate",
      content: LOCALE_TAG[l].replace("-", "_"),
    })),
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
