import { LOCALE_TAG, type L10n, type Locale } from "./locale";
import { useLocale } from "./locale";

/** Every visible string, all five languages side by side. Keeping them in one
 *  place is what stops the versions from drifting, and the L10n type means a
 *  missing translation is a compile error rather than a silent gap.
 *
 *  Bulgarian is the source. The other four are translations of it, written to
 *  read naturally rather than word by word — this is a translator's site, and
 *  stilted Spanish on it would undercut the whole point. */
const DICT = {
  brand: {
    bg: "valIsOnline",
    en: "valIsOnline",
    es: "valIsOnline",
    it: "valIsOnline",
    fr: "valIsOnline",
  },

  nameFull: {
    bg: "Валентина Истаткова",
    en: "Valentina Istatkova",
    es: "Valentina Istatkova",
    it: "Valentina Istatkova",
    fr: "Valentina Istatkova",
  },
  nameShort: { bg: "Вал", en: "Val", es: "Val", it: "Val", fr: "Val" },
  /** The hero stacks the two names on separate lines in every language.
   *  Bulgarian happened to wrap on its own because it is longer; the Latin
   *  spellings fit on one line and did not, so the layout changed language to
   *  language. Splitting the name makes the break deliberate rather than a
   *  side effect of how wide the word is. */
  nameFirst: {
    bg: "Валентина",
    en: "Valentina",
    es: "Valentina",
    it: "Valentina",
    fr: "Valentina",
  },
  nameLast: {
    bg: "Истаткова",
    en: "Istatkova",
    es: "Istatkova",
    it: "Istatkova",
    fr: "Istatkova",
  },
  roleLine: {
    bg: "редактор на книги · преводач",
    en: "book editor · translator",
    es: "editora de libros · traductora",
    it: "redattrice di libri · traduttrice",
    fr: "éditrice de livres · traductrice",
  },

  navHome: { bg: "начало", en: "home", es: "inicio", it: "home", fr: "accueil" },
  navArticles: {
    bg: "статии",
    en: "articles",
    es: "artículos",
    it: "articoli",
    fr: "articles",
  },
  navBooks: {
    bg: "книги",
    en: "books",
    es: "libros",
    it: "libri",
    fr: "livres",
  },
  navAbout: {
    bg: "за мен",
    en: "about",
    es: "sobre mí",
    it: "chi sono",
    fr: "à propos",
  },
  navContact: {
    bg: "контакти",
    en: "contact",
    es: "contacto",
    it: "contatti",
    fr: "contact",
  },

  navLabel: {
    bg: "Основна навигация",
    en: "Main navigation",
    es: "Navegación principal",
    it: "Navigazione principale",
    fr: "Navigation principale",
  },
  languageMenu: {
    bg: "Избери език",
    en: "Choose language",
    es: "Elegir idioma",
    it: "Scegli la lingua",
    fr: "Choisir la langue",
  },
  menuOpen: {
    bg: "Отвори менюто",
    en: "Open menu",
    es: "Abrir el menú",
    it: "Apri il menu",
    fr: "Ouvrir le menu",
  },
  menuClose: {
    bg: "Затвори менюто",
    en: "Close menu",
    es: "Cerrar el menú",
    it: "Chiudi il menu",
    fr: "Fermer le menu",
  },

  heroKicker: {
    bg: "добре дошли в",
    en: "welcome to",
    es: "bienvenidos a",
    it: "benvenuti su",
    fr: "bienvenue sur",
  },
  heroIntro: {
    bg: "Редактирам книги. Превеждам от английски и испански. Пиша за това, което се губи по пътя между двата езика.",
    en: "I edit books. I translate from English and Spanish. I write about what goes missing on the way between two languages.",
    es: "Edito libros. Traduzco del inglés y del español. Escribo sobre lo que se pierde en el camino entre dos lenguas.",
    it: "Faccio la redattrice di libri. Traduco dall'inglese e dallo spagnolo. Scrivo di ciò che si perde per strada fra due lingue.",
    fr: "J'édite des livres. Je traduis de l'anglais et de l'espagnol. J'écris sur ce qui se perd en chemin entre deux langues.",
  },
  heroBooksCta: {
    bg: "виж книгите",
    en: "see the books",
    es: "ver los libros",
    it: "guarda i libri",
    fr: "voir les livres",
  },
  heroArticlesCta: {
    bg: "виж статиите",
    en: "see the writing",
    es: "ver los textos",
    it: "guarda i testi",
    fr: "voir les textes",
  },

  photoAlt: {
    bg: "Валентина Истаткова в парк в София",
    en: "Valentina Istatkova in a park in Sofia",
    es: "Valentina Istatkova en un parque de Sofía",
    it: "Valentina Istatkova in un parco di Sofia",
    fr: "Valentina Istatkova dans un parc de Sofia",
  },
  photoMissing: {
    bg: "снимка скоро",
    en: "photo soon",
    es: "foto en breve",
    it: "foto a breve",
    fr: "photo bientôt",
  },

  languagesTitle: {
    bg: "езици",
    en: "languages",
    es: "idiomas",
    it: "lingue",
    fr: "langues",
  },
  worksFromNote: {
    bg: "превежда публикувани книги от този език",
    en: "translates published books from this language",
    es: "traduce libros publicados desde este idioma",
    it: "traduce libri pubblicati da questa lingua",
    fr: "traduit des livres publiés depuis cette langue",
  },

  booksTitle: {
    bg: "Книги",
    en: "Books",
    es: "Libros",
    it: "Libri",
    fr: "Livres",
  },
  booksLead: {
    bg: "Седем заглавия минаха през ръцете ми — от неразрешима загадка от 1934 г. до испанска детска книжка. Дръпни едно от рафта.",
    en: "Seven titles have gone through my hands, from an unsolved 1934 puzzle to a Spanish picture book. Pull one off the shelf.",
    es: "Siete títulos han pasado por mis manos, desde un enigma sin resolver de 1934 hasta un álbum ilustrado español. Saca uno del estante.",
    it: "Sette titoli mi sono passati per le mani, da un enigma irrisolto del 1934 a un albo illustrato spagnolo. Tira fuori un libro dallo scaffale.",
    fr: "Sept titres me sont passés entre les mains, d'une énigme non résolue de 1934 à un album espagnol. Tirez-en un de l'étagère.",
  },
  shelfHint: {
    bg: "избери гръбче",
    en: "pick a spine",
    es: "elige un lomo",
    it: "scegli un dorso",
    fr: "choisissez un dos",
  },
  shelfCount: {
    bg: "книги",
    en: "books",
    es: "libros",
    it: "libri",
    fr: "livres",
  },
  shelfPrev: {
    bg: "Предишни книги",
    en: "Previous books",
    es: "Libros anteriores",
    it: "Libri precedenti",
    fr: "Livres précédents",
  },
  shelfNext: {
    bg: "Следващи книги",
    en: "Next books",
    es: "Libros siguientes",
    it: "Libri successivi",
    fr: "Livres suivants",
  },
  roleTranslation: {
    bg: "превод",
    en: "translation",
    es: "traducción",
    it: "traduzione",
    fr: "traduction",
  },
  roleEditing: {
    bg: "редакция",
    en: "editing",
    es: "edición",
    it: "redazione",
    fr: "édition",
  },
  fromEn: {
    bg: "от английски",
    en: "from English",
    es: "del inglés",
    it: "dall'inglese",
    fr: "de l'anglais",
  },
  fromEs: {
    bg: "от испански",
    en: "from Spanish",
    es: "del español",
    it: "dallo spagnolo",
    fr: "de l'espagnol",
  },
  originalTitleLabel: {
    bg: "в оригинал",
    en: "original title",
    es: "título original",
    it: "titolo originale",
    fr: "titre original",
  },
  bgEditionLabel: {
    bg: "българско издание",
    en: "Bulgarian edition",
    es: "edición búlgara",
    it: "edizione bulgara",
    fr: "édition bulgare",
  },
  illustratorLabel: {
    bg: "илюстрации",
    en: "illustrations",
    es: "ilustraciones",
    it: "illustrazioni",
    fr: "illustrations",
  },
  onGoodreads: {
    bg: "в Goodreads",
    en: "on Goodreads",
    es: "en Goodreads",
    it: "su Goodreads",
    fr: "sur Goodreads",
  },
  ratingsSuffix: {
    bg: "оценки",
    en: "ratings",
    es: "valoraciones",
    it: "valutazioni",
    fr: "notes",
  },

  articlesTitle: {
    bg: "Статии",
    en: "Writing",
    es: "Textos",
    it: "Testi",
    fr: "Textes",
  },
  articlesLead: {
    bg: "Книги, езици, пътувания и по някой път неща, за които не мога да мълча. Всяка статия отваря там, където е излязла.",
    en: "Books, languages, travel, and now and then something I cannot keep quiet about. Every piece opens where it was published.",
    es: "Libros, idiomas, viajes y, de vez en cuando, algo sobre lo que no puedo callarme. Cada texto se abre donde se publicó.",
    it: "Libri, lingue, viaggi e ogni tanto qualcosa su cui non riesco a tacere. Ogni testo si apre dove è uscito.",
    fr: "Des livres, des langues, des voyages et, de temps en temps, quelque chose que je ne peux pas taire. Chaque texte s'ouvre là où il a paru.",
  },
  readAt: {
    bg: "чети в",
    en: "read at",
    es: "leer en",
    it: "leggi su",
    fr: "lire sur",
  },
  filterAll: {
    bg: "всички",
    en: "all",
    es: "todos",
    it: "tutti",
    fr: "tous",
  },
  filterByOutlet: {
    bg: "издание",
    en: "publication",
    es: "medio",
    it: "testata",
    fr: "publication",
  },
  filterByTag: {
    bg: "тема",
    en: "topic",
    es: "tema",
    it: "tema",
    fr: "thème",
  },
  noMatches: {
    bg: "нищо тук. пробвай друг филтър.",
    en: "nothing here. try another filter.",
    es: "aquí no hay nada. prueba otro filtro.",
    it: "qui non c'è niente. prova un altro filtro.",
    fr: "rien ici. essayez un autre filtre.",
  },
  countSuffix: {
    bg: "статии",
    en: "pieces",
    es: "textos",
    it: "testi",
    fr: "textes",
  },
  featuredTitle: {
    bg: "Избрано",
    en: "Selected",
    es: "Selección",
    it: "Selezione",
    fr: "Sélection",
  },
  seeAll: {
    bg: "всички статии",
    en: "all writing",
    es: "todos los textos",
    it: "tutti i testi",
    fr: "tous les textes",
  },

  aboutTitle: {
    bg: "За мен",
    en: "About",
    es: "Sobre mí",
    it: "Chi sono",
    fr: "À propos",
  },
  quotesTitle: {
    bg: "Цитати",
    en: "Quotes",
    es: "Citas",
    it: "Citazioni",
    fr: "Citations",
  },
  quotesNote: {
    bg: "Изреченията по-долу са цитирани дословно от публикувани неин текст.",
    en: "The lines below are quoted verbatim from work she published.",
    es: "Las frases siguientes están citadas literalmente de textos suyos publicados.",
    it: "Le frasi qui sotto sono citate alla lettera da testi da lei pubblicati.",
    fr: "Les phrases ci-dessous sont citées mot pour mot de textes qu'elle a publiés.",
  },
  translatedQuote: {
    bg: "преведено",
    en: "translated from the Bulgarian",
    es: "traducido del búlgaro",
    it: "tradotto dal bulgaro",
    fr: "traduit du bulgare",
  },
  readSource: {
    bg: "виж източника",
    en: "read the source",
    es: "ver la fuente",
    it: "vedi la fonte",
    fr: "voir la source",
  },

  contactTitle: {
    bg: "Контакти",
    en: "Contact",
    es: "Contacto",
    it: "Contatti",
    fr: "Contact",
  },
  contactLead: {
    bg: "Ако имате книга, която трябва да прочете някой внимателно — пишете ми.",
    en: "If you have a book that needs reading carefully by somebody — write to me.",
    es: "Si tiene un libro que alguien deba leer con atención, escríbame.",
    it: "Se ha un libro che qualcuno deve leggere con attenzione, mi scriva.",
    fr: "Si vous avez un livre que quelqu'un doit lire attentivement, écrivez-moi.",
  },
  emailCta: {
    bg: "имейл",
    en: "email",
    es: "correo",
    it: "email",
    fr: "e-mail",
  },
  linkedinCta: {
    bg: "LinkedIn",
    en: "LinkedIn",
    es: "LinkedIn",
    it: "LinkedIn",
    fr: "LinkedIn",
  },
  goodreadsCta: {
    bg: "Goodreads",
    en: "Goodreads",
    es: "Goodreads",
    it: "Goodreads",
    fr: "Goodreads",
  },
  contactPending: {
    bg: "Координатите се качват съвсем скоро.",
    en: "Contact details are going up very soon.",
    es: "Los datos de contacto se publicarán muy pronto.",
    it: "I recapiti saranno online a brevissimo.",
    fr: "Les coordonnées arrivent très bientôt.",
  },

  tag: {
    books: {
      bg: "книги",
      en: "books",
      es: "libros",
      it: "libri",
      fr: "livres",
    },
    language: {
      bg: "език",
      en: "language",
      es: "lengua",
      it: "lingua",
      fr: "langue",
    },
    travel: {
      bg: "пътувания",
      en: "travel",
      es: "viajes",
      it: "viaggi",
      fr: "voyages",
    },
    nature: {
      bg: "природа",
      en: "nature",
      es: "naturaleza",
      it: "natura",
      fr: "nature",
    },
    culture: {
      bg: "култура",
      en: "culture",
      es: "cultura",
      it: "cultura",
      fr: "culture",
    },
    society: {
      bg: "общество",
      en: "society",
      es: "sociedad",
      it: "società",
      fr: "société",
    },
    science: {
      bg: "наука",
      en: "science",
      es: "ciencia",
      it: "scienza",
      fr: "science",
    },
  },

  notFoundTitle: {
    bg: "Няма такава страница",
    en: "No such page",
    es: "Esta página no existe",
    it: "Pagina inesistente",
    fr: "Page introuvable",
  },
  notFoundBody: {
    bg: "Страницата я няма. Става и с книгите — цели глави изчезват между изданията.",
    en: "This page is not here. It happens with books too — whole chapters vanish between editions.",
    es: "La página no está aquí. También pasa con los libros: hay capítulos enteros que desaparecen entre una edición y otra.",
    it: "La pagina non c'è. Succede anche ai libri: interi capitoli spariscono da un'edizione all'altra.",
    fr: "Cette page n'est pas là. Cela arrive aussi aux livres : des chapitres entiers disparaissent d'une édition à l'autre.",
  },
  backHome: {
    bg: "обратно в началото",
    en: "back to the start",
    es: "volver al inicio",
    it: "torna all'inizio",
    fr: "retour au début",
  },

  footerMade: {
    bg: "правено на ръка в София",
    en: "made by hand in Sofia",
    es: "hecho a mano en Sofía",
    it: "fatto a mano a Sofia",
    fr: "fait à la main à Sofia",
  },
} as const;

type Dict = typeof DICT;

/** Reads a string for the active language. `t("navBooks")` for flat keys,
 *  `t("tag", "nature")` for the one nested group. */
export function useT() {
  const locale = useLocale();
  function t<K extends keyof Dict>(
    key: Dict[K] extends Record<Locale, string> ? K : never,
  ): string;
  function t<K extends "tag">(key: K, sub: keyof Dict["tag"]): string;
  function t(key: string, sub?: string): string {
    const entry = (DICT as Record<string, unknown>)[key];
    const value = (sub ? (entry as Record<string, L10n>)[sub] : entry) as L10n;
    return value[locale];
  }
  return t;
}

/** For the places that already hold an L10n from a data file. */
export function pick(value: L10n, locale: Locale) {
  return value[locale];
}

export function formatNumber(n: number, locale: Locale) {
  return n.toLocaleString(LOCALE_TAG[locale]);
}

export function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(LOCALE_TAG[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
