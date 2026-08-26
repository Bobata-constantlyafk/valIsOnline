import type { Locale } from "./locale";
import { useLocale } from "./locale";

/** Every visible string, both languages side by side. Keeping the pair in
 *  one place is what stops the two versions of the site from drifting. */
const DICT = {
  brand: { bg: "valIsOnline", en: "valIsOnline" },

  nameFull: { bg: "Валентина Истаткова", en: "Valentina Istatkova" },
  nameShort: { bg: "Вал", en: "Val" },
  roleLine: { bg: "редактор на книги · преводач", en: "book editor · translator" },

  navHome: { bg: "начало", en: "home" },
  navArticles: { bg: "статии", en: "articles" },
  navBooks: { bg: "книги", en: "books" },
  navAbout: { bg: "за мен", en: "about" },
  navContact: { bg: "контакти", en: "contact" },

  langSwitch: { bg: "EN", en: "БГ" },
  menuOpen: { bg: "Отвори менюто", en: "Open menu" },
  menuClose: { bg: "Затвори менюто", en: "Close menu" },
  langSwitchLabel: { bg: "Switch to English", en: "Смени на български" },

  heroKicker: { bg: "добре дошли в", en: "welcome to" },
  heroIntro: {
    bg: "Редактирам книги. Превеждам от английски и испански. Пиша за това, което се губи по пътя между двата езика.",
    en: "I edit books. I translate from English and Spanish. I write about what goes missing on the way between two languages.",
  },
  heroBooksCta: { bg: "виж книгите", en: "see the books" },
  heroArticlesCta: { bg: "виж статиите", en: "see the writing" },

  photoAlt: {
    bg: "Валентина Истаткова в парк в София",
    en: "Valentina Istatkova in a park in Sofia",
  },
  photoMissing: { bg: "снимка скоро", en: "photo soon" },

  languagesTitle: { bg: "езици", en: "languages" },
  worksFromNote: {
    bg: "превежда публикувани книги от този език",
    en: "translates published books from this language",
  },

  booksTitle: { bg: "Книги", en: "Books" },
  booksLead: {
    bg: "Седем заглавия минаха през ръцете ми — от неразрешима загадка от 1934 г. до испанска детска книжка. Дръпни едно от рафта.",
    en: "Seven titles have gone through my hands, from an unsolved 1934 puzzle to a Spanish picture book. Pull one off the shelf.",
  },
  shelfHint: { bg: "избери гръбче", en: "pick a spine" },
  shelfCount: { bg: "книги", en: "books" },
  shelfPrev: { bg: "Предишни книги", en: "Previous books" },
  shelfNext: { bg: "Следващи книги", en: "Next books" },
  roleTranslation: { bg: "превод", en: "translation" },
  roleEditing: { bg: "редакция", en: "editing" },
  fromEn: { bg: "от английски", en: "from English" },
  fromEs: { bg: "от испански", en: "from Spanish" },
  originalTitleLabel: { bg: "в оригинал", en: "original title" },
  bgEditionLabel: { bg: "българско издание", en: "Bulgarian edition" },
  illustratorLabel: { bg: "илюстрации", en: "illustrations" },
  onGoodreads: { bg: "в Goodreads", en: "on Goodreads" },
  ratingsSuffix: { bg: "оценки", en: "ratings" },

  articlesTitle: { bg: "Статии", en: "Writing" },
  articlesLead: {
    bg: "Книги, езици, пътувания и по някой път неща, за които не мога да мълча. Всяка статия отваря там, където е излязла.",
    en: "Books, languages, travel, and now and then something I cannot keep quiet about. Every piece opens where it was published.",
  },
  readAt: { bg: "чети в", en: "read at" },
  filterAll: { bg: "всички", en: "all" },
  filterByOutlet: { bg: "издание", en: "publication" },
  filterByTag: { bg: "тема", en: "topic" },
  noMatches: { bg: "нищо тук. пробвай друг филтър.", en: "nothing here. try another filter." },
  countSuffix: { bg: "статии", en: "pieces" },
  featuredTitle: { bg: "Избрано", en: "Selected" },
  seeAll: { bg: "всички статии", en: "all writing" },

  aboutTitle: { bg: "За мен", en: "About" },
  quotesTitle: { bg: "Цитати", en: "Quotes" },
  quotesNote: {
    bg: "Изреченията по-долу са цитирани дословно от публикувани неин текст.",
    en: "The lines below are quoted verbatim from work she published.",
  },
  translatedQuote: {
    bg: "преведено",
    en: "translated from the Bulgarian",
  },
  readSource: { bg: "виж източника", en: "read the source" },
  contactTitle: { bg: "Контакти", en: "Contact" },
  contactLead: {
    bg: "Ако имате книга, която трябва да прочете някой внимателно — пишете ми.",
    en: "If you have a book that needs reading carefully by somebody — write to me.",
  },
  emailCta: { bg: "имейл", en: "email" },
  linkedinCta: { bg: "LinkedIn", en: "LinkedIn" },
  goodreadsCta: { bg: "Goodreads", en: "Goodreads" },
  contactPending: {
    bg: "Координатите се качват съвсем скоро.",
    en: "Contact details are going up very soon.",
  },

  tag: {
    books: { bg: "книги", en: "books" },
    language: { bg: "език", en: "language" },
    travel: { bg: "пътувания", en: "travel" },
    nature: { bg: "природа", en: "nature" },
    culture: { bg: "култура", en: "culture" },
    society: { bg: "общество", en: "society" },
    science: { bg: "наука", en: "science" },
  },

  notFoundTitle: { bg: "Няма такава страница", en: "No such page" },
  notFoundBody: {
    bg: "Страницата я няма. Става и с книгите — цели глави изчезват между изданията.",
    en: "This page is not here. It happens with books too — whole chapters vanish between editions.",
  },
  backHome: { bg: "обратно в началото", en: "back to the start" },

  footerMade: { bg: "правено на ръка в София", en: "made by hand in Sofia" },
} as const;

type Pair = { bg: string; en: string };
type Dict = typeof DICT;

/** Reads a string for the active language. `t("navBooks")` for flat keys,
 *  `t("tag", "nature")` for the one nested group. */
export function useT() {
  const locale = useLocale();
  function t<K extends keyof Dict>(
    key: Dict[K] extends Pair ? K : never,
  ): string;
  function t<K extends "tag">(key: K, sub: keyof Dict["tag"]): string;
  function t(key: string, sub?: string): string {
    const entry = (DICT as Record<string, unknown>)[key];
    const pair = (sub ? (entry as Record<string, Pair>)[sub] : entry) as Pair;
    return pair[locale];
  }
  return t;
}

/** For the handful of places that already hold a {bg,en} pair from data. */
export function pick(pair: { bg: string; en: string }, locale: Locale) {
  return pair[locale];
}

/** Intl wants a full tag; our Locale is the short one the URLs use. */
export const bcp47 = (locale: Locale) => (locale === "bg" ? "bg-BG" : "en-GB");

export function formatNumber(n: number, locale: Locale) {
  return n.toLocaleString(bcp47(locale));
}

export function formatDate(iso: string, locale: Locale) {
  const d = new Date(iso);
  return d.toLocaleDateString(bcp47(locale), {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
