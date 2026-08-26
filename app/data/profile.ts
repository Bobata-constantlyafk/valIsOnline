/** Everything about Val that the site states as fact lives here, so there
 *  is exactly one place to correct if something changes. */

import type { L10n } from "~/lib/locale";

export type Language = {
  code: string;
  name: L10n;
  level: L10n;
  /** Set when she has actually translated a published book out of it. */
  worksFrom?: boolean;
  /** Her mother tongue. The hero colours it differently from the two she
   *  works from, so the badges read as three states rather than two. */
  native?: boolean;
};

const NATIVE: L10n = {
  bg: "роден",
  en: "native",
  es: "nativo",
  it: "madrelingua",
  fr: "langue maternelle",
};
const WORKING: L10n = {
  bg: "работен",
  en: "working",
  es: "de trabajo",
  it: "di lavoro",
  fr: "de travail",
};
const CONVERSATIONAL: L10n = {
  bg: "говорим",
  en: "conversational",
  es: "conversacional",
  it: "conversazionale",
  fr: "courant",
};
const READING: L10n = {
  bg: "чете",
  en: "reading",
  es: "lectura",
  it: "lettura",
  fr: "lecture",
};

export const LANGUAGES: Language[] = [
  {
    code: "BG",
    name: {
      bg: "български",
      en: "Bulgarian",
      es: "búlgaro",
      it: "bulgaro",
      fr: "bulgare",
    },
    level: NATIVE,
    native: true,
  },
  {
    code: "EN",
    name: {
      bg: "английски",
      en: "English",
      es: "inglés",
      it: "inglese",
      fr: "anglais",
    },
    level: WORKING,
    worksFrom: true,
  },
  {
    code: "ES",
    name: {
      bg: "испански",
      en: "Spanish",
      es: "español",
      it: "spagnolo",
      fr: "espagnol",
    },
    level: WORKING,
    worksFrom: true,
  },
  {
    code: "IT",
    name: {
      bg: "италиански",
      en: "Italian",
      es: "italiano",
      it: "italiano",
      fr: "italien",
    },
    level: CONVERSATIONAL,
  },
  {
    code: "FR",
    name: {
      bg: "френски",
      en: "French",
      es: "francés",
      it: "francese",
      fr: "français",
    },
    level: CONVERSATIONAL,
  },
  {
    code: "NAP",
    name: {
      bg: "неаполитански",
      en: "Neapolitan",
      es: "napolitano",
      it: "napoletano",
      fr: "napolitain",
    },
    level: READING,
  },
  {
    code: "MK",
    name: {
      bg: "македонски",
      en: "Macedonian",
      es: "macedonio",
      it: "macedone",
      fr: "macédonien",
    },
    level: CONVERSATIONAL,
  },
];

/** The marquee strip under the hero. Written the way she writes: a fact,
 *  then the turn she would put on it.
 *
 *  The film is named by its release title in each language. Bulgarian is the
 *  deliberate exception — see the note in TASKS.md. */
export const TICKER: L10n[] = [
  {
    bg: "чете от малка и още не е спряла",
    en: "reading since she was small and still has not stopped",
    es: "lee desde pequeña y todavía no ha parado",
    it: "legge da quando era piccola e non ha ancora smesso",
    fr: "elle lit depuis toute petite et n'a toujours pas arrêté",
  },
  {
    bg: "родена и останала в София",
    en: "born in Sofia, still in Sofia",
    es: "nacida en Sofía y allí sigue",
    it: "nata a Sofia, e a Sofia è rimasta",
    fr: "née à Sofia, et toujours à Sofia",
  },
  {
    bg: "седем езика, два от които работни",
    en: "seven languages, two of them working",
    es: "siete idiomas, dos de ellos de trabajo",
    it: "sette lingue, due delle quali di lavoro",
    fr: "sept langues, dont deux de travail",
  },
  {
    bg: "любимо цвете: лантана",
    en: "favourite flower: lantana",
    es: "flor favorita: lantana",
    it: "fiore preferito: lantana",
    fr: "fleur préférée : lantana",
  },
  {
    bg: "любим филм: Сред дивата пустош",
    en: "favourite film: Into the Wild",
    es: "película favorita: Hacia rutas salvajes",
    it: "film preferito: Into the Wild – Nelle terre selvagge",
    fr: "film préféré : Into the Wild",
  },
  {
    bg: "дева, което обяснява редакторската част",
    en: "virgo, which explains the editing",
    es: "virgo, lo que explica la parte de edición",
    it: "vergine, il che spiega la parte redazionale",
    fr: "vierge, ce qui explique la partie édition",
  },
  {
    bg: "някой ден Мексико",
    en: "one day, Mexico",
    es: "algún día, México",
    it: "un giorno, il Messico",
    fr: "un jour, le Mexique",
  },
];

/** Anything left empty here simply does not render, so the site can never
 *  ship a dead link or a placeholder address. */
export const CONTACT = {
  email: "valentina.istatkova@gmail.com",
  linkedin: "https://www.linkedin.com/in/valentina-istatkova/",
  city: {
    bg: "София, България",
    en: "Sofia, Bulgaria",
    es: "Sofía, Bulgaria",
    it: "Sofia, Bulgaria",
    fr: "Sofia, Bulgarie",
  } satisfies L10n,
  goodreads: "https://www.goodreads.com/author/show/47942503._",
};

/** Portrait, pre-cropped to head and shoulders at 600x800 so the markup does
 *  not have to fake a crop with transforms. The hero falls back to a typeset
 *  frame if the file ever goes missing. */
export const PORTRAIT = "/val.jpg";
