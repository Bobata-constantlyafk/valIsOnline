import type { L10n } from "~/lib/locale";

/** Val's own words, verbatim, from work she published under her name.
 *
 *  Nothing in this file is written for her. `bg` is copied exactly as
 *  printed; every other language is a translation of that sentence and the
 *  page labels it as one, so a reader is never shown a rewrite and told it is
 *  a quote. Every entry carries the piece it came from and a link, so any
 *  claim on the site can be checked at the source.
 */

export type Quote = {
  id: string;
  /** `bg` is her printed sentence; the rest are translations of it. */
  text: L10n;
  source: L10n;
  outlet: string;
  year: number;
  url: string;
};

/** Her own author bio, written in first person, spisanievip.com, 2022. She
 *  was twenty-two and in her third year of Publishing at Sofia University.
 *  Quoted on the About page as the oldest thing she wrote about herself. */
export const SELF_DESCRIPTION: { text: L10n; note: L10n; url: string } = {
  text: {
    bg: "Пиша по теми, свързани с книги, филми, природа, криминалистика, астрономия, пътешествия, култура, личностно развитие и лингвистика. Езиците, заедно с писането, киното и пътуванията, са ми най-големите увлечения. Обичам да се изразявам в писмена форма по тези въпроси (и още много, които са ми интересни за разучаване).",
    en: "I write on subjects connected to books, film, nature, criminology, astronomy, travel, culture, personal development and linguistics. Languages, together with writing, cinema and travel, are my greatest enthusiasms. I like expressing myself in writing about these things — and about many more that I find worth looking into.",
    es: "Escribo sobre temas relacionados con los libros, el cine, la naturaleza, la criminología, la astronomía, los viajes, la cultura, el desarrollo personal y la lingüística. Los idiomas, junto con la escritura, el cine y los viajes, son mis mayores aficiones. Me gusta expresarme por escrito sobre estas cuestiones, y sobre muchas otras que me interesa indagar.",
    it: "Scrivo di temi legati ai libri, al cinema, alla natura, alla criminologia, all'astronomia, ai viaggi, alla cultura, alla crescita personale e alla linguistica. Le lingue, insieme alla scrittura, al cinema e ai viaggi, sono le mie passioni più grandi. Mi piace esprimermi per iscritto su questi argomenti, e su molti altri che ho voglia di approfondire.",
    fr: "J'écris sur des sujets liés aux livres, au cinéma, à la nature, à la criminologie, à l'astronomie, aux voyages, à la culture, au développement personnel et à la linguistique. Les langues, avec l'écriture, le cinéma et les voyages, sont mes plus grandes passions. J'aime m'exprimer par écrit sur ces questions, et sur bien d'autres que j'ai envie d'explorer.",
  },
  note: {
    bg: "нейната авторска биография, spisanievip.com, 2022",
    en: "her own author bio, spisanievip.com, 2022",
    es: "su propia biografía de autora, spisanievip.com, 2022",
    it: "la sua biografia d'autrice, spisanievip.com, 2022",
    fr: "sa propre notice d'autrice, spisanievip.com, 2022",
  },
  url: "https://spisanievip.com/author/vistatkova/",
};

export const QUOTES: Quote[] = [
  {
    id: "mozaika",
    text: {
      bg: "Разказите се усещат като части от по-голяма мозайка, която читателят сам трябва да подреди, но скоро усеща, че никога няма да успее.",
      en: "The stories feel like pieces of a larger mosaic the reader has to assemble alone — and soon senses they never will.",
      es: "Los relatos se sienten como piezas de un mosaico mayor que el lector debe componer solo, y que pronto intuye que no logrará componer nunca.",
      it: "I racconti si sentono come tessere di un mosaico più grande che il lettore deve comporre da solo, e che presto intuisce di non riuscire a comporre mai.",
      fr: "Les récits se donnent comme les pièces d'une mosaïque plus vaste que le lecteur doit assembler seul, et dont il pressent vite qu'il n'y parviendra jamais.",
    },
    source: {
      bg: "Между съня и реалността: литературният космос на Владимир Полеганов",
      en: "Between dream and reality: the literary cosmos of Vladimir Poleganov",
      es: "Entre el sueño y la realidad: el cosmos literario de Vladimir Poleganov",
      it: "Fra il sogno e la realtà: il cosmo letterario di Vladimir Poleganov",
      fr: "Entre le rêve et la réalité : le cosmos littéraire de Vladimir Poleganov",
    },
    outlet: "Литературен вестник",
    year: 2025,
    url: "https://litvestnik.com/2025/03/05/%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D1%81%D1%8A%D0%BD%D1%8F-%D0%B8-%D1%80%D0%B5%D0%B0%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%82%D0%B0-%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%BD%D0%B8%D1%8F/",
  },
  {
    id: "cyal-svyat",
    text: {
      bg: "В няколко страници може да се побере цял свят, наситен с емоции, образи и идеи.",
      en: "A whole world can fit into a few pages — dense with feeling, images and ideas.",
      es: "En unas pocas páginas cabe un mundo entero, cargado de emociones, imágenes e ideas.",
      it: "In poche pagine può stare un mondo intero, denso di emozioni, immagini e idee.",
      fr: "Un monde entier tient en quelques pages, chargé d'émotions, d'images et d'idées.",
    },
    source: {
      bg: "Домът на краткия разказ",
      en: "The home of the short story",
      es: "La casa del relato breve",
      it: "La casa del racconto breve",
      fr: "La maison de la nouvelle",
    },
    outlet: "Литературен вестник",
    year: 2025,
    url: "https://litvestnik.com/2025/07/09/%D0%B4%D0%BE%D0%BC%D1%8A%D1%82-%D0%BD%D0%B0-%D0%BA%D1%80%D0%B0%D1%82%D0%BA%D0%B8%D1%8F-%D1%80%D0%B0%D0%B7%D0%BA%D0%B0%D0%B7/",
  },
];
