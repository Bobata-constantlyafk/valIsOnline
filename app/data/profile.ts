/** Everything about Val that the site states as fact lives here, so there
 *  is exactly one place to correct if something changes. */

export type Language = {
  code: string;
  name: { bg: string; en: string };
  level: { bg: string; en: string };
  /** Set when she has actually translated a published book out of it. */
  worksFrom?: boolean;
};

export const LANGUAGES: Language[] = [
  {
    code: "BG",
    name: { bg: "български", en: "Bulgarian" },
    level: { bg: "роден", en: "native" },
  },
  {
    code: "EN",
    name: { bg: "английски", en: "English" },
    level: { bg: "работен", en: "working" },
    worksFrom: true,
  },
  {
    code: "ES",
    name: { bg: "испански", en: "Spanish" },
    level: { bg: "работен", en: "working" },
    worksFrom: true,
  },
  {
    code: "IT",
    name: { bg: "италиански", en: "Italian" },
    level: { bg: "говорим", en: "conversational" },
  },
  {
    code: "FR",
    name: { bg: "френски", en: "French" },
    level: { bg: "говорим", en: "conversational" },
  },
  {
    code: "NAP",
    name: { bg: "неаполитански", en: "Neapolitan" },
    level: { bg: "чете", en: "reading" },
  },
  {
    code: "MK",
    name: { bg: "македонски", en: "Macedonian" },
    level: { bg: "говорим", en: "conversational" },
  },
];

/** The marquee strip under the hero. Written the way she writes: a fact,
 *  then the turn she would put on it. */
export const TICKER: { bg: string; en: string }[] = [
  {
    bg: "чете от малка и още не е спряла",
    en: "reading since she was small and still has not stopped",
  },
  { bg: "родена и останала в София", en: "born in Sofia, still in Sofia" },
  { bg: "седем езика, два от които работни", en: "seven languages, two of them working" },
  { bg: "любимо цвете: лантана", en: "favourite flower: lantana" },
  { bg: "любим филм: Сред дивата природа", en: "favourite film: Into the Wild" },
  { bg: "дева, което обяснява редакторската част", en: "virgo, which explains the editing" },
  { bg: "някой ден Мексико", en: "one day, Mexico" },
];

/** Anything left empty here simply does not render, so the site can never
 *  ship a dead link or a placeholder address. */
export const CONTACT = {
  email: "valentina.istatkova@gmail.com",
  linkedin: "https://www.linkedin.com/in/valentina-istatkova/",
  city: { bg: "София, България", en: "Sofia, Bulgaria" },
  goodreads: "https://www.goodreads.com/author/show/47942503._",
};

/** Portrait, pre-cropped to head and shoulders at 600x800 so the markup does
 *  not have to fake a crop with transforms. The hero falls back to a typeset
 *  frame if the file ever goes missing. */
export const PORTRAIT = "/val.jpg";
