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
 *  Anything she actually wrote, word for word, lives in `quotes.ts` or in a
 *  section's `quote` field, and is shown under its own heading, attributed.
 *  The two are never mixed.
 *
 *  Bulgarian is the source text; the other four are translations of it.
 *
 *  "[to be continued]" is a live marker, visible on the published page: it
 *  means Val has to finish that section herself. Do not write those endings
 *  for her — the whole point is that they are hers. Delete the marker when
 *  she has. */

import type { L10n } from "~/lib/locale";

export type AboutSection = {
  id: string;
  heading: L10n;
  paragraphs: L10n[];
  /** A sentence she actually published, shown under the section as a marked
   *  quotation. Never mixed into the composed paragraphs above it. `source`
   *  names where it was printed; there is deliberately no url — see the note
   *  in TASKS.md about the piece it comes from. */
  quote?: { text: L10n; source: L10n };
};

export const ABOUT_LEAD: L10n = {
  bg: "Чета, откакто се помня, и още не съм спряла. Това е горе-долу цялата биография; останалото са подробности по нея.",
  en: "I have been reading for as long as I can remember, and I still have not stopped. That is more or less the whole biography — everything below is footnotes to it.",
  es: "Leo desde que tengo memoria y todavía no he parado. Esa es más o menos toda la biografía; lo demás son notas al pie.",
  it: "Leggo da quando ho memoria e non ho ancora smesso. Questa è più o meno tutta la biografia; il resto sono note a piè di pagina.",
  fr: "Je lis depuis aussi loin que je me souvienne, et je n'ai toujours pas arrêté. C'est à peu près toute la biographie ; le reste n'en est que les notes.",
};

export const ABOUT: AboutSection[] = [
  {
    id: "sofia",
    // SOURCE: Personal detail from Bobata: born in Sofia, still there. The
    // invented bench memory was cut; the rest is hers to write.
    heading: { bg: "София", en: "Sofia", es: "Sofía", it: "Sofia", fr: "Sofia" },
    paragraphs: [
      {
        bg: "Родена съм в София и не съм я напускала задълго. [to be continued]",
        en: "I was born in Sofia and have never left it for long. [to be continued]",
        es: "Nací en Sofía y nunca me he ido por mucho tiempo. [to be continued]",
        it: "Sono nata a Sofia e non me ne sono mai andata a lungo. [to be continued]",
        fr: "Je suis née à Sofia et je ne l'ai jamais quittée longtemps. [to be continued]",
      },
    ],
  },
  {
    id: "languages",
    // SOURCE: Language list from Bobata (seven; her 2022 bio said five). The
    // Ferrante/dialect argument is HERS — it is the substance of her article
    // "Диалектите в адаптираното кино", spisanievip.com, 2022, restated here
    // in first person.
    heading: {
      bg: "Седем езика",
      en: "Seven languages",
      es: "Siete idiomas",
      it: "Sette lingue",
      fr: "Sept langues",
    },
    paragraphs: [
      {
        bg: "Български, английски, испански, италиански, френски, неаполитански и македонски. От английски и испански превеждам публикувани книги; останалите държа отворени, защото език, който не използваш, се затваря тихо и без предупреждение.",
        en: "Bulgarian, English, Spanish, Italian, French, Neapolitan and Macedonian. I translate published books out of English and Spanish; the rest I keep open, because a language you stop using closes quietly and without warning.",
        es: "Búlgaro, inglés, español, italiano, francés, napolitano y macedonio. Del inglés y del español traduzco libros publicados; los demás los mantengo abiertos, porque una lengua que dejas de usar se cierra en silencio y sin avisar.",
        it: "Bulgaro, inglese, spagnolo, italiano, francese, napoletano e macedone. Dall'inglese e dallo spagnolo traduco libri pubblicati; le altre le tengo aperte, perché una lingua che smetti di usare si chiude in silenzio e senza preavviso.",
        fr: "Bulgare, anglais, espagnol, italien, français, napolitain et macédonien. De l'anglais et de l'espagnol je traduis des livres publiés ; les autres, je les garde ouvertes, car une langue qu'on cesse d'employer se referme en silence et sans prévenir.",
      },
      {
        bg: "Неаполитанският не е упражнение по екзотика. Стигнах до него през Феранте, където диалектът не е украса, а социална граница — героите минават на италиански, когато искат да се издигнат, и се връщат на неаполитански, когато се разгневят. Ако не чуеш това, не си прочел книгата, а само сюжета ѝ.",
        en: "Neapolitan is not an exercise in the exotic. I arrived at it through Ferrante, where dialect is not decoration but a social border — her characters switch into Italian when they want to rise, and fall back into Neapolitan when they lose their temper. If you cannot hear that, you have not read the book, only its plot.",
        es: "El napolitano no es un ejercicio de exotismo. Llegué a él por Ferrante, donde el dialecto no es un adorno sino una frontera social: sus personajes pasan al italiano cuando quieren ascender y vuelven al napolitano cuando se enfadan. Si no oyes eso, no has leído el libro, solo su argumento.",
        it: "Il napoletano non è un esercizio di esotismo. Ci sono arrivata attraverso Ferrante, dove il dialetto non è un ornamento ma un confine sociale: i suoi personaggi passano all'italiano quando vogliono salire e tornano al napoletano quando si arrabbiano. Se non lo senti, non hai letto il libro, solo la sua trama.",
        fr: "Le napolitain n'est pas un exercice d'exotisme. J'y suis venue par Ferrante, où le dialecte n'est pas un ornement mais une frontière sociale : ses personnages passent à l'italien quand ils veulent s'élever, et retombent dans le napolitain quand ils se mettent en colère. Si vous ne l'entendez pas, vous n'avez pas lu le livre, seulement son intrigue.",
      },
    ],
  },
  {
    id: "work",
    // SOURCE: Role from Bobata; the seven titles and the 5-translated /
    // 2-edited split are from her Goodreads author page plus Val's own
    // confirmation of the three Goodreads leaves untagged.
    heading: {
      bg: "Работата",
      en: "The work",
      es: "El trabajo",
      it: "Il lavoro",
      fr: "Le travail",
    },
    paragraphs: [
      {
        bg: "Редактор съм на книги, а преводът върви отстрани — макар че „отстрани“ е неточна дума за нещо, което заема толкова часове.",
        en: "I am a book editor, and translation runs alongside it — although “alongside” is an inaccurate word for something that takes up this many hours.",
        es: "Soy editora de libros, y la traducción va en paralelo, aunque «en paralelo» es una palabra imprecisa para algo que ocupa tantas horas.",
        it: "Faccio la redattrice di libri, e la traduzione va di pari passo, anche se «di pari passo» è una parola imprecisa per una cosa che occupa tante ore.",
        fr: "Je suis éditrice de livres, et la traduction avance à côté — même si « à côté » est un mot inexact pour une chose qui prend autant d'heures.",
      },
      {
        bg: "Редакцията е работа, която се забелязва само когато е свършена лошо. Ако съм си свършила своята, читателят няма да се сети за мен нито веднъж; ще си мисли, че книгата винаги е звучала така.",
        en: "Editing is work that only gets noticed when it has been done badly. If I have done mine, the reader will not think of me once — they will assume the book always sounded like this.",
        es: "La edición es un trabajo que solo se nota cuando está mal hecho. Si he hecho bien el mío, el lector no se acordará de mí ni una vez: dará por supuesto que el libro siempre sonó así.",
        it: "La redazione è un lavoro che si nota solo quando è fatto male. Se ho fatto bene il mio, il lettore non penserà a me nemmeno una volta: darà per scontato che il libro sia sempre suonato così.",
        fr: "L'édition est un travail qu'on ne remarque que lorsqu'il est mal fait. Si j'ai bien fait le mien, le lecteur ne pensera pas une seule fois à moi : il supposera que le livre a toujours sonné ainsi.",
      },
      {
        bg: "Досега през ръцете ми минаха седем заглавия — пет в превод и две в редакция: неразрешима загадка от 1934 г., климатичен роман, книга за мозъка, наръчник за изтощени родители, две детски книги и една испанска.",
        en: "Seven titles have gone through my hands so far — five in translation, two in editing: an unsolved puzzle from 1934, a climate novel, a book about the brain, a manual for exhausted parents, two children's books and one from the Spanish.",
        es: "Hasta ahora han pasado por mis manos siete títulos, cinco traducidos y dos editados: un enigma sin resolver de 1934, una novela climática, un libro sobre el cerebro, un manual para padres agotados, dos libros infantiles y uno del español.",
        it: "Finora mi sono passati per le mani sette titoli, cinque tradotti e due curati: un enigma irrisolto del 1934, un romanzo climatico, un libro sul cervello, un manuale per genitori sfiniti, due libri per bambini e uno dallo spagnolo.",
        fr: "Sept titres me sont passés entre les mains jusqu'ici — cinq en traduction, deux en édition : une énigme non résolue de 1934, un roman climatique, un livre sur le cerveau, un manuel pour parents épuisés, deux livres pour enfants et un venu de l'espagnol.",
      },
    ],
  },
  {
    id: "writing",
    // SOURCE: Every example is one of her own articles: Future Library
    // (2022), the Oaxaca turtles (2022). Her recurring interest in long
    // timescales is visible across both.
    heading: {
      bg: "За какво пиша",
      en: "What I write about",
      es: "Sobre qué escribo",
      it: "Di cosa scrivo",
      fr: "Ce sur quoi j'écris",
    },
    paragraphs: [
      {
        bg: "Книги, езици, природа, и от време на време нещо, за което не мога да мълча. Интересуват ме дългите срокове: гора, засадена за книги, които ще се отпечатат чак през 2114 г.; костенурки, които се връщат да снасят точно на плажа, където са се излюпили; плаж, който за трийсет години е минал от кланица до убежище, защото някой е седнал да говори с хората, които живеят там.",
        en: "Books, languages, nature, and now and then something I cannot keep quiet about. I am drawn to long timescales: a forest planted for books that will not be printed until 2114; turtles that come back to lay their eggs on the exact beach where they hatched; a beach that went from slaughterhouse to sanctuary in thirty years, because somebody sat down and talked to the people who live there.",
        es: "Libros, idiomas, naturaleza y, de vez en cuando, algo sobre lo que no puedo callarme. Me atraen los plazos largos: un bosque plantado para libros que no se imprimirán hasta 2114; tortugas que vuelven a desovar exactamente en la playa donde nacieron; una playa que pasó de matadero a santuario en treinta años porque alguien se sentó a hablar con la gente que vive allí.",
        it: "Libri, lingue, natura e ogni tanto qualcosa su cui non riesco a tacere. Mi attirano i tempi lunghi: un bosco piantato per libri che non usciranno prima del 2114; tartarughe che tornano a deporre le uova esattamente sulla spiaggia dove sono nate; una spiaggia passata da mattatoio a rifugio in trent'anni, perché qualcuno si è seduto a parlare con chi ci vive.",
        fr: "Des livres, des langues, la nature, et de temps en temps quelque chose que je ne peux pas taire. Les temps longs m'attirent : une forêt plantée pour des livres qui ne seront imprimés qu'en 2114 ; des tortues qui reviennent pondre exactement sur la plage où elles sont nées ; une plage passée d'abattoir à sanctuaire en trente ans, parce que quelqu'un s'est assis pour parler aux gens qui y vivent.",
      },
    ],
  },
  {
    id: "mexico",
    // SOURCE: Mexico ambition from Bobata; the three facts cited are all
    // drawn from her own articles. The invented closing feeling was cut.
    heading: {
      bg: "Мексико",
      en: "Mexico",
      es: "México",
      it: "Messico",
      fr: "Mexique",
    },
    paragraphs: [
      {
        bg: "Още не съм била там. Писала съм за костенурките на Оахака, за потъващото с 25 сантиметра годишно Мексико Сити и за 370-те езика на Латинска Америка. [to be continued]",
        en: "I have not been yet. I have written about the turtles of Oaxaca, about Mexico City sinking twenty-five centimetres a year, and about the three hundred and seventy languages of Latin America. [to be continued]",
        es: "Todavía no he estado allí. He escrito sobre las tortugas de Oaxaca, sobre Ciudad de México hundiéndose veinticinco centímetros al año y sobre las trescientas setenta lenguas de América Latina. [to be continued]",
        it: "Non ci sono ancora stata. Ho scritto delle tartarughe di Oaxaca, di Città del Messico che sprofonda di venticinque centimetri l'anno e delle trecentosettanta lingue dell'America Latina. [to be continued]",
        fr: "Je n'y suis pas encore allée. J'ai écrit sur les tortues d'Oaxaca, sur Mexico qui s'enfonce de vingt-cinq centimètres par an, et sur les trois cent soixante-dix langues d'Amérique latine. [to be continued]",
      },
    ],
  },
  {
    id: "small",
    // SOURCE: Into the Wild, lantana and Virgo all from Bobata; the three
    // reasons she gives for the film are his words, not composed. The
    // observation about lantana changing colour is composed, and Bobata chose
    // to keep it. The film is named by its release title in each language;
    // Bulgarian deliberately uses the book's title instead.
    heading: {
      bg: "Дребни неща",
      en: "Small things",
      es: "Cosas pequeñas",
      it: "Piccole cose",
      fr: "Petites choses",
    },
    paragraphs: [
      {
        bg: "Любимият ми филм е „Сред дивата пустош“ — заради живота в съгласие с природата, заради уюта на това да си сам и заради смелостта, която е нужна, за да го направиш.",
        en: "My favourite film is Into the Wild — for the life lived in tune with nature, for the comfort of being on your own, and for the courage it takes to actually do it.",
        es: "Mi película favorita es «Hacia rutas salvajes», por la vida en sintonía con la naturaleza, por lo acogedor que resulta estar solo y por el valor que hace falta para hacerlo de verdad.",
        it: "Il mio film preferito è «Into the Wild – Nelle terre selvagge», per la vita in accordo con la natura, per il conforto dello stare da soli e per il coraggio che ci vuole a farlo davvero.",
        fr: "Mon film préféré est « Into the Wild », pour la vie en accord avec la nature, pour le confort d'être seul, et pour le courage qu'il faut pour le faire vraiment.",
      },
      {
        bg: "Любимото ми цвете е лантаната, която сменя цвета си, докато цъфти — струва ми се честно. Дева съм, което вероятно обяснява редакторската част. [to be continued]",
        en: "My favourite flower is lantana, which changes colour while it blooms — that strikes me as honest. I am a Virgo, which probably explains the editing. [to be continued]",
        es: "Mi flor favorita es la lantana, que cambia de color mientras florece; me parece honesto. Soy virgo, lo que probablemente explica la parte de edición. [to be continued]",
        it: "Il mio fiore preferito è la lantana, che cambia colore mentre fiorisce: mi sembra onesto. Sono della Vergine, il che probabilmente spiega la parte redazionale. [to be continued]",
        fr: "Ma fleur préférée est le lantana, qui change de couleur pendant qu'il fleurit ; cela me paraît honnête. Je suis Vierge, ce qui explique sans doute la partie édition. [to be continued]",
      },
    ],
    // Verbatim, and not a coincidence: four years before anyone asked her for
    // a favourite film, she reached for the man that film is about.
    quote: {
      text: {
        bg: "Колкото и да ми се иска, например, да избягам нанякъде и да се превърна в следващия Кристофър МакКендълс, осъзнавам, че това е негативна свобода, която не се съобразява с обществото (най-малкото дори не се съобразява с близките ми) и най-вероятно никога няма да я изпитам.",
        en: "Much as I would like, for instance, to run off somewhere and become the next Christopher McCandless, I recognise that this is a negative freedom — one that does not take society into account (it does not even take my own family into account) — and that I will most likely never experience it.",
        es: "Por mucho que me gustaría, por ejemplo, escaparme a alguna parte y convertirme en el próximo Christopher McCandless, reconozco que esa es una libertad negativa, que no tiene en cuenta a la sociedad (ni siquiera tiene en cuenta a los míos), y que lo más probable es que nunca llegue a experimentarla.",
        it: "Per quanto mi piacerebbe, per esempio, scappare da qualche parte e diventare il prossimo Christopher McCandless, mi rendo conto che quella è una libertà negativa, che non tiene conto della società (non tiene conto nemmeno dei miei cari), e che con ogni probabilità non la proverò mai.",
        fr: "J'aurais beau vouloir, par exemple, m'enfuir quelque part et devenir le prochain Christopher McCandless, je sais que c'est une liberté négative, qui ne tient pas compte de la société (elle ne tient même pas compte de mes proches), et que je ne la connaîtrai très probablement jamais.",
      },
      source: {
        bg: "„Свободата на словото“, Списание VIP, 2022",
        en: "“Freedom of speech”, VIP Magazine, 2022",
        es: "«La libertad de expresión», revista VIP, 2022",
        it: "«La libertà di parola», rivista VIP, 2022",
        fr: "« La liberté d'expression », magazine VIP, 2022",
      },
    },
  },
];
