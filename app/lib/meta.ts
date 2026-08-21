import { localeFromPath, type Locale } from "./locale";

/** Titles and descriptions have to follow the language of the page, and the
 *  two language versions share one route module — so meta reads the locale
 *  off the path rather than being hard-coded per file. */
const PAGE_META: Record<string, { bg: [string, string]; en: [string, string] }> =
  {
    home: {
      bg: [
        "valIsOnline — Валентина Истаткова",
        "Валентина Истаткова — редактор на книги и преводач от английски и испански. Седем преведени заглавия, статии за книги, езици и природа.",
      ],
      en: [
        "valIsOnline — Valentina Istatkova",
        "Valentina Istatkova — book editor and translator from English and Spanish. Seven translated titles, and writing about books, languages and nature.",
      ],
    },
    articles: {
      bg: [
        "Статии — valIsOnline",
        "Публикувани статии на Валентина Истаткова в Литературен вестник, Списание VIP и 10te.bg.",
      ],
      en: [
        "Writing — valIsOnline",
        "Published writing by Valentina Istatkova in Literaturen Vestnik, VIP Magazine and 10te.bg.",
      ],
    },
    books: {
      bg: [
        "Книги — valIsOnline",
        "Седемте книги, преведени и редактирани от Валентина Истаткова — от английски и испански.",
      ],
      en: [
        "Books — valIsOnline",
        "The seven books translated and edited by Valentina Istatkova, from English and Spanish.",
      ],
    },
    about: {
      bg: [
        "За мен — valIsOnline",
        "Седем езика, София, редакция и превод — и защо неаполитанският не е екзотика.",
      ],
      en: [
        "About — valIsOnline",
        "Seven languages, Sofia, editing and translation — and why Neapolitan is not an exercise in the exotic.",
      ],
    },
    contact: {
      bg: ["Контакти — valIsOnline", "Как да намерите Валентина Истаткова."],
      en: ["Contact — valIsOnline", "How to reach Valentina Istatkova."],
    },
  };

export function metaFor(page: keyof typeof PAGE_META, pathname: string) {
  const locale: Locale = localeFromPath(pathname);
  const [title, description] = PAGE_META[page][locale];
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: locale === "bg" ? "bg_BG" : "en_GB" },
  ];
}
