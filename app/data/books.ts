import type { L10n, Locale } from "~/lib/locale";

export type BookRole = "translation" | "editing" | "unconfirmed";

export type Book = {
  slug: string;
  /** Bulgarian edition title — this is the object she actually made. */
  title: string;
  /** Original title exactly as the original publisher prints it. Verified
   *  against the publisher or the original-language edition — never
   *  back-translated from the Bulgarian, which is how the first pass got
   *  "Matakin" and a scrambled Whisperwicks title. */
  originalTitle: string;
  author: string;
  /** Bulgarian rendering of the author's name, as printed on the cover. */
  authorBg?: string;
  illustrator?: string;
  /** Language she translated FROM. */
  from: "en" | "es";
  role: BookRole;
  /** Year of the original edition, per Goodreads. */
  originalYear?: number;
  rating: number;
  ratingsCount: number;
  goodreads: string;
  /** Page count of the Bulgarian edition, read off its Goodreads page. The
   *  shelf derives spine WIDTH from this, so a thin book looks thin. */
  pages: number;
  /** Spine colour and height. Chosen per book's mood; the shelf reads as a
   *  real shelf only if the spines disagree with each other. */
  spine: { bg: string; fg: string; height: number };
  /** Optional cover art. Every book renders fine without one — the spine
   *  opens to a typeset cover instead. */
  cover?: string;
  note?: L10n;
};

// Source: https://www.goodreads.com/author/show/47942503._
// Book ids were read off that page, not constructed — they resolve to the
// Bulgarian editions she worked on, not the English originals.
// Roles confirmed by Val: five translations, two edits. Goodreads only tags
// the (Translator) credit on four of them, so the split cannot be read off
// that page alone. The "unconfirmed" role stays in the type for anything
// added later whose credit has not been checked; the shelf shows no badge
// for it rather than guessing.
/** Spine width in px, interpolated across the real page counts (216-456).
 *  Scaled up 1.5x from the first pass, which read as a doll's shelf. Width
 *  and height are scaled by the same factor, so the proportions of every
 *  book — and the differences between them — are unchanged. */
export function spineWidth(pages: number): number {
  const MIN_PAGES = 216;
  const MAX_PAGES = 456;
  const MIN_PX = 51; // 34 * 1.5
  const MAX_PX = 84; // 56 * 1.5
  const t = Math.min(1, Math.max(0, (pages - MIN_PAGES) / (MAX_PAGES - MIN_PAGES)));
  return Math.round(MIN_PX + t * (MAX_PX - MIN_PX));
}

/** Which title a reader sees. A Bulgarian reader knows the object Val
 *  actually made — the Bulgarian edition. An English reader knows the book by
 *  the name it was written under, so showing them only Cyrillic tells them
 *  nothing. The other title is always still shown in the detail panel. */
export function displayTitle(book: Book, locale: Locale): string {
  return locale === "bg" ? book.title : book.originalTitle;
}

/** Short form for the spine, which is a few characters wide. Drops a
 *  subtitle after a colon and any parenthetical series note, so
 *  "Brain Power: Everything You Need to Know..." becomes "Brain Power" and
 *  "The Labyrinth of Lost and Found (The Whisperwicks, #1)" loses the series.
 *  Bulgarian titles here carry neither, so they pass through untouched. */
export function spineTitle(book: Book, locale: Locale): string {
  return displayTitle(book, locale)
    .replace(/\s*\([^)]*\)\s*$/, "")
    .split(":")[0]
    .trim();
}

export const BOOKS: Book[] = [
  {
    slug: "chelyustta-na-kain",
    title: "Челюстта на Каин",
    originalTitle: "Cain's Jawbone",
    author: "E. Powys Mathers",
    authorBg: "Едуард Поуис Мадърс",
    from: "en",
    role: "translation",
    originalYear: 1934,
    rating: 3.75,
    ratingsCount: 3365,
    goodreads: "https://www.goodreads.com/book/show/240117935",
    pages: 224,
    spine: { bg: "#16281f", fg: "#7cff3d", height: 100 },
  },
  {
    slug: "posledniya-pchelar",
    title: "Последния пчелар",
    originalTitle: "The Last Beekeeper",
    author: "Julie Carrick Dalton",
    authorBg: "Джули Карик Долтън",
    from: "en",
    role: "translation",
    originalYear: 2023,
    rating: 3.91,
    ratingsCount: 2424,
    goodreads: "https://www.goodreads.com/book/show/216268922",
    pages: 456,
    spine: { bg: "#2fd46a", fg: "#06301f", height: 94 },
  },
  {
    slug: "silata-na-mozaka",
    title: "Силата на мозъка",
    originalTitle: "Brain Power: Everything You Need to Know for a Healthy, Happy Brain",
    author: "Catherine de Lange",
    authorBg: "Катрин де Ланг",
    from: "en",
    role: "translation",
    rating: 3.84,
    ratingsCount: 306,
    goodreads: "https://www.goodreads.com/book/show/205632934",
    pages: 320,
    spine: { bg: "#9be7ff", fg: "#06301f", height: 88 },
  },
  {
    slug: "kak-da-ne-namrazish-maja-si",
    title: "Как да не намразиш мъжа си след децата",
    originalTitle: "How Not to Hate Your Husband After Kids",
    author: "Jancee Dunn",
    authorBg: "Джанси Дън",
    from: "en",
    role: "translation",
    originalYear: 2017,
    rating: 4.06,
    ratingsCount: 16120,
    goodreads: "https://www.goodreads.com/book/show/222811249",
    pages: 320,
    spine: { bg: "#ff6fb5", fg: "#16281f", height: 97 },
  },
  {
    slug: "labirintat-na-izgubenoto",
    title: "Лабиринтът на изгубеното и намереното",
    originalTitle: "The Labyrinth of Lost and Found (The Whisperwicks, #1)",
    author: "Jordan Lees",
    authorBg: "Джордан Лийс",
    illustrator: "Вивиен То",
    from: "en",
    role: "editing",
    originalYear: 2024,
    rating: 4.25,
    ratingsCount: 2781,
    goodreads: "https://www.goodreads.com/book/show/232536254",
    pages: 366,
    spine: { bg: "#c9a7ff", fg: "#16281f", height: 103 },
  },
  {
    slug: "spisakat-na-dyado-frank",
    title: "Списъкът с приключения на дядо Франк",
    originalTitle: "Grandpa Frank's Great Big Bucket List",
    author: "Jenny Pearson",
    authorBg: "Джени Пиърсън",
    illustrator: "David O'Connell",
    from: "en",
    role: "editing",
    originalYear: 2022,
    rating: 4.5,
    ratingsCount: 157,
    goodreads: "https://www.goodreads.com/book/show/220382041",
    pages: 336,
    spine: { bg: "#ffd3e8", fg: "#16281f", height: 85 },
  },
  {
    slug: "banditat-i-bliznachkite-matakin",
    title: "Бандитът и близначките Матакин",
    originalTitle: "El bandido y las gemelas Mataquín",
    author: "Oriol Canosa Masllorens",
    authorBg: "Ориол Каноса",
    illustrator: "Cuchu",
    from: "es",
    role: "translation",
    originalYear: 2022,
    rating: 4.37,
    ratingsCount: 30,
    goodreads: "https://www.goodreads.com/book/show/243183443",
    pages: 216,
    spine: { bg: "#0e4a31", fg: "#ffd3e8", height: 79 },
    note: {
      bg: "Прочетох я на испански и я рецензирах за „Литературен вестник“ през 2024 г. После преведох българското издание.",
      en: "I read it in Spanish and reviewed it for Literaturen Vestnik in 2024. The Bulgarian edition is my translation.",
      es: "La leí en español y la reseñé para Literaturen Vestnik en 2024. La edición búlgara es traducción mía.",
      it: "L'ho letto in spagnolo e l'ho recensito per Literaturen Vestnik nel 2024. L'edizione bulgara è una mia traduzione.",
      fr: "Je l'ai lu en espagnol et je l'ai chroniqué pour Literaturen Vestnik en 2024. L'édition bulgare est ma traduction.",
    },
  },
];
