/** The About page.
 *
 *  PROVENANCE — this matters, so it is written down rather than remembered.
 *  These paragraphs are NOT quotations. They are composed for the site, in
 *  her register (first person, long clauses that correct themselves halfway,
 *  a concrete fact before every opinion), out of facts that come from
 *  somewhere real. Each section below carries a `source` note saying where
 *  its facts came from: her published articles, her own author bio, or
 *  personal details supplied by Bobata.
 *
 *  Anything she actually wrote, word for word, lives in `quotes.ts` and is
 *  shown on the page under its own heading, attributed and linked. The two
 *  are never mixed.
 *
 *  "[to be continued]" is a live marker, visible on the published page: it
 *  means Val has to finish that section herself. Do not write those endings
 *  for her — the whole point is that they are hers. Delete the marker when
 *  she has. */

export type AboutSection = {
  id: string;
  heading: { bg: string; en: string };
  paragraphs: { bg: string; en: string }[];
};

export const ABOUT_LEAD = {
  bg: "Чета, откакто се помня, и още не съм спряла. Това е горе-долу цялата биография; останалото са подробности по нея.",
  en: "I have been reading for as long as I can remember, and I still have not stopped. That is more or less the whole biography — everything below is footnotes to it.",
};

export const ABOUT: AboutSection[] = [
  {
    id: "sofia",
    // SOURCE: Personal detail from Bobata: born in Sofia, still there. The
    // invented bench memory was cut; the rest is hers to write.
    heading: { bg: "София", en: "Sofia" },
    paragraphs: [
      {
        bg: "Родена съм в София и не съм я напускала задълго. [to be continued]",
        en: "I was born in Sofia and have never left it for long. [to be continued]",
      },
    ],
  },
  {
    id: "languages",
    // SOURCE: Language list from Bobata (seven; her 2022 bio said five). The Ferrante/dialect argument is HERS — it is the substance of her article "Диалектите в адаптираното кино", spisanievip.com, 2022, restated here in first person.
    heading: { bg: "Седем езика", en: "Seven languages" },
    paragraphs: [
      {
        bg: "Български, английски, испански, италиански, френски, неаполитански и македонски. От английски и испански превеждам публикувани книги; останалите държа отворени, защото език, който не използваш, се затваря тихо и без предупреждение.",
        en: "Bulgarian, English, Spanish, Italian, French, Neapolitan and Macedonian. I translate published books out of English and Spanish; the rest I keep open, because a language you stop using closes quietly and without warning.",
      },
      {
        bg: "Неаполитанският не е упражнение по екзотика. Стигнах до него през Феранте, където диалектът не е украса, а социална граница — героите минават на италиански, когато искат да се издигнат, и се връщат на неаполитански, когато се разгневят. Ако не чуеш това, не си прочел книгата, а само сюжета ѝ.",
        en: "Neapolitan is not an exercise in the exotic. I arrived at it through Ferrante, where dialect is not decoration but a social border — her characters switch into Italian when they want to rise, and fall back into Neapolitan when they lose their temper. If you cannot hear that, you have not read the book, only its plot.",
      },
    ],
  },
  {
    id: "work",
    // SOURCE: Role from Bobata; the seven titles and the 5-translated / 2-edited split are from her Goodreads author page plus Val's own confirmation of the three Goodreads leaves untagged.
    heading: { bg: "Работата", en: "The work" },
    paragraphs: [
      {
        bg: "Редактор съм на книги, а преводът върви отстрани — макар че „отстрани“ е неточна дума за нещо, което заема толкова часове.",
        en: "I am a book editor, and translation runs alongside it — although “alongside” is an inaccurate word for something that takes up this many hours.",
      },
      {
        bg: "Редакцията е работа, която се забелязва само когато е свършена лошо. Ако съм си свършила своята, читателят няма да се сети за мен нито веднъж; ще си мисли, че книгата винаги е звучала така.",
        en: "Editing is work that only gets noticed when it has been done badly. If I have done mine, the reader will not think of me once — they will assume the book always sounded like this.",
      },
      {
        bg: "Досега през ръцете ми минаха седем заглавия — пет в превод и две в редакция: неразрешима загадка от 1934 г., климатичен роман, книга за мозъка, наръчник за изтощени родители, две детски книги и една испанска.",
        en: "Seven titles have gone through my hands so far — five in translation, two in editing: an unsolved puzzle from 1934, a climate novel, a book about the brain, a manual for exhausted parents, two children's books and one from the Spanish.",
      },
    ],
  },
  {
    id: "writing",
    // SOURCE: Every example is one of her own articles: Future Library (2022), the Oaxaca turtles (2022). Her recurring interest in long timescales is visible across both.
    heading: { bg: "За какво пиша", en: "What I write about" },
    paragraphs: [
      {
        bg: "Книги, езици, природа, и от време на време нещо, за което не мога да мълча. Интересуват ме дългите срокове: гора, засадена за книги, които ще се отпечатат чак през 2114 г.; костенурки, които се връщат да снасят точно на плажа, където са се излюпили; плаж, който за трийсет години е минал от кланица до убежище, защото някой е седнал да говори с хората, които живеят там.",
        en: "Books, languages, nature, and now and then something I cannot keep quiet about. I am drawn to long timescales: a forest planted for books that will not be printed until 2114; turtles that come back to lay their eggs on the exact beach where they hatched; a beach that went from slaughterhouse to sanctuary in thirty years, because somebody sat down and talked to the people who live there.",
      },
    ],
  },
  {
    id: "mexico",
    // SOURCE: Mexico ambition from Bobata; the three facts cited are all drawn
    // from her own articles. The invented closing feeling was cut.
    heading: { bg: "Мексико", en: "Mexico" },
    paragraphs: [
      {
        bg: "Още не съм била там. Писала съм за костенурките на Оахака, за потъващото с 25 сантиметра годишно Мексико Сити и за 370-те езика на Латинска Америка. [to be continued]",
        en: "I have not been yet. I have written about the turtles of Oaxaca, about Mexico City sinking twenty-five centimetres a year, and about the three hundred and seventy languages of Latin America. [to be continued]",
      },
    ],
  },
  {
    id: "small",
    // SOURCE: Lantana and Virgo from Bobata. The observation about lantana
    // changing colour is composed, and Bobata chose to keep it.
    heading: { bg: "Дребни неща", en: "Small things" },
    paragraphs: [
      {
        bg: "Любимото ми цвете е лантаната, която сменя цвета си, докато цъфти — струва ми се честно. Дева съм, което вероятно обяснява редакторската част. [to be continued]",
        en: "My favourite flower is lantana, which changes colour while it blooms — that strikes me as honest. I am a Virgo, which probably explains the editing. [to be continued]",
      },
    ],
  },
];
