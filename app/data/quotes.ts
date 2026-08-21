/** Val's own words, verbatim, from work she published under her name.
 *
 *  Nothing in this file is written for her. The `bg` field is copied exactly
 *  as printed; the `en` field is a translation of that sentence and is
 *  labelled as one on the page, so an English reader is never shown a
 *  rewrite and told it is a quote. Every entry carries the piece it came
 *  from and a link, so any claim on the site can be checked at the source.
 */

export type Quote = {
  id: string;
  bg: string;
  /** Translation, not her English. The page says so. */
  en: string;
  source: { bg: string; en: string };
  outlet: string;
  year: number;
  url: string;
};

/** Her own author bio, written in first person, spisanievip.com, 2022. She
 *  was twenty-two and in her third year of Publishing at Sofia University.
 *  Quoted on the About page as the oldest thing she wrote about herself. */
export const SELF_DESCRIPTION = {
  bg: "Пиша по теми, свързани с книги, филми, природа, криминалистика, астрономия, пътешествия, култура, личностно развитие и лингвистика. Езиците, заедно с писането, киното и пътуванията, са ми най-големите увлечения. Обичам да се изразявам в писмена форма по тези въпроси (и още много, които са ми интересни за разучаване).",
  en: "I write on subjects connected to books, film, nature, criminology, astronomy, travel, culture, personal development and linguistics. Languages, together with writing, cinema and travel, are my greatest enthusiasms. I like expressing myself in writing about these things — and about many more that I find worth looking into.",
  note: {
    bg: "нейната авторска биография, spisanievip.com, 2022",
    en: "her own author bio, spisanievip.com, 2022",
  },
  url: "https://spisanievip.com/author/vistatkova/",
};

export const QUOTES: Quote[] = [
  {
    id: "mozaika",
    bg: "Разказите се усещат като части от по-голяма мозайка, която читателят сам трябва да подреди, но скоро усеща, че никога няма да успее.",
    en: "The stories feel like pieces of a larger mosaic the reader has to assemble alone — and soon senses they never will.",
    source: {
      bg: "Между съня и реалността: литературният космос на Владимир Полеганов",
      en: "Between dream and reality: the literary cosmos of Vladimir Poleganov",
    },
    outlet: "Литературен вестник",
    year: 2025,
    url: "https://litvestnik.com/2025/03/05/%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D1%81%D1%8A%D0%BD%D1%8F-%D0%B8-%D1%80%D0%B5%D0%B0%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%82%D0%B0-%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%BD%D0%B8%D1%8F/",
  },
  {
    id: "cyal-svyat",
    bg: "В няколко страници може да се побере цял свят, наситен с емоции, образи и идеи.",
    en: "A whole world can fit into a few pages — dense with feeling, images and ideas.",
    source: { bg: "Домът на краткия разказ", en: "The home of the short story" },
    outlet: "Литературен вестник",
    year: 2025,
    url: "https://litvestnik.com/2025/07/09/%D0%B4%D0%BE%D0%BC%D1%8A%D1%82-%D0%BD%D0%B0-%D0%BA%D1%80%D0%B0%D1%82%D0%BA%D0%B8%D1%8F-%D1%80%D0%B0%D0%B7%D0%BA%D0%B0%D0%B7/",
  },
];
