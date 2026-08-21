export type Outlet = "litvestnik" | "spisanievip" | "10te";
export type Tag =
  | "books"
  | "language"
  | "travel"
  | "nature"
  | "culture"
  | "society"
  | "science";

export type Article = {
  slug: string;
  title: { bg: string; en: string };
  /** The card blurb. For the Литературен вестник reviews this is a sentence
   *  lifted verbatim from the piece itself; elsewhere it is written in her
   *  register from the article's own material. Optional either way — a card
   *  without a preview still renders, showing title, outlet and date. */
  preview?: { bg: string; en: string };
  outlet: Outlet;
  /** ISO date, so sorting never depends on how a locale writes numbers. */
  date: string;
  url: string;
  tags: Tag[];
  featured?: boolean;
};

export const OUTLETS: Record<
  Outlet,
  { name: string; note: { bg: string; en: string } }
> = {
  litvestnik: {
    name: "Литературен вестник",
    note: { bg: "критика", en: "criticism" },
  },
  spisanievip: {
    name: "Списание VIP",
    note: { bg: "дълъг репортаж", en: "long-form" },
  },
  "10te": {
    name: "10te.bg",
    note: { bg: "списъци", en: "lists" },
  },
};

export const ARTICLES: Article[] = [
  {
    slug: "labatut-strahovitite-cvetove",
    title: {
      bg: "Метафизичното бълнуване на Лабатут из страховитите цветове",
      en: "Labatut's metaphysical delirium among the terrifying colours",
    },
    preview: {
      bg: "Лабатут не иска славата да го преследва и аз ще уважа това — ще говоря само за думите му. За пруското синьо, за отровените кладенци в Северна Африка и за страховитата зеленина, която един ден ще ни задуши.",
      en: "Labatut does not want fame chasing him, and I will respect that — so I will speak only of his words. Of Prussian blue, of the poisoned wells in North Africa, and of the terrifying greenery that will one day smother us all.",
    },
    outlet: "litvestnik",
    date: "2025-04-30",
    url: "https://www.dnevnik.bg/knigi/2025/04/30/4776644_metafizichnoto_bulnuvane_na_labatut_iz_strahovitite/",
    tags: ["books", "culture", "science"],
    featured: true,
  },
  {
    slug: "opiti-za-rekoobrazuvane",
    title: {
      bg: "Опити за рекообразуване",
      en: "Attempts at river-forming",
    },
    preview: {
      bg: "Животът на героите е белязан от ограничения, от неизбежна за аржентинския контекст рутинна жестокост.",
      en: "The lives of these characters are marked by limits, by a routine cruelty the Argentine setting makes unavoidable.",
    },
    outlet: "litvestnik",
    date: "2025-10-29",
    url: "https://litvestnik.com/2025/10/29/%D0%BE%D0%BF%D0%B8%D1%82%D0%B8-%D0%B7%D0%B0-%D1%80%D0%B5%D0%BA%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D1%83%D0%B2%D0%B0%D0%BD%D0%B5/",
    tags: ["books", "culture"],
    featured: true,
  },
  {
    slug: "domat-na-kratkiya-razkaz",
    title: {
      bg: "Домът на краткия разказ",
      en: "The home of the short story",
    },
    preview: {
      bg: "В няколко страници може да се побере цял свят, наситен с емоции, образи и идеи.",
      en: "A whole world can fit into a few pages — dense with feeling, images and ideas.",
    },
    outlet: "litvestnik",
    date: "2025-07-09",
    url: "https://litvestnik.com/2025/07/09/%D0%B4%D0%BE%D0%BC%D1%8A%D1%82-%D0%BD%D0%B0-%D0%BA%D1%80%D0%B0%D1%82%D0%BA%D0%B8%D1%8F-%D1%80%D0%B0%D0%B7%D0%BA%D0%B0%D0%B7/",
    tags: ["books", "culture"],
  },
  {
    slug: "onazi-sila-zelen-fitil",
    title: {
      bg: "„Онази сила, дето през зелен фитил извлича цветето“",
      en: "“The force that through the green fuse drives the flower”",
    },
    preview: {
      bg: "Музиката като котва е мотив, който се разгръща в цялата книга, но музиката сама по себе си е и код.",
      en: "Music as an anchor is a motif that unfolds across the whole book — but music is also, in itself, a code.",
    },
    outlet: "litvestnik",
    date: "2025-06-04",
    url: "https://litvestnik.com/2025/06/04/%D0%BE%D0%BD%D0%B0%D0%B7%D0%B8-%D1%81%D0%B8%D0%BB%D0%B0-%D0%B4%D0%B5%D1%82%D0%BE-%D0%BF%D1%80%D0%B5%D0%B7-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD-%D1%84%D0%B8%D1%82%D0%B8%D0%BB-%D0%B8%D0%B7%D0%B2/",
    tags: ["books", "culture"],
  },
  {
    slug: "mejdu-sanya-i-realnostta-poleganov",
    title: {
      bg: "Между съня и реалността: литературният космос на Владимир Полеганов",
      en: "Between dream and reality: the literary cosmos of Vladimir Poleganov",
    },
    preview: {
      bg: "Разказите се усещат като части от по-голяма мозайка, която читателят сам трябва да подреди, но скоро усеща, че никога няма да успее.",
      en: "The stories feel like pieces of a larger mosaic the reader has to assemble alone — and soon senses they never will.",
    },
    outlet: "litvestnik",
    date: "2025-03-05",
    url: "https://litvestnik.com/2025/03/05/%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D1%81%D1%8A%D0%BD%D1%8F-%D0%B8-%D1%80%D0%B5%D0%B0%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%82%D0%B0-%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%BD%D0%B8%D1%8F/",
    tags: ["books", "culture"],
    featured: true,
  },
  {
    slug: "nito-loshiyat-e-tolkova-losh",
    title: {
      bg: "Нито лошият е толкова лош, нито добрите – толкова добри",
      en: "The villain is not so bad, nor the good ones so good",
    },
    preview: {
      bg: "Хуморът е изразен главно чрез репликите на бандита, който се оказва наивен и леко глуповат.",
      en: "The humour comes mostly through the bandit's lines — he turns out to be naive, and a little dim.",
    },
    outlet: "litvestnik",
    date: "2024-05-22",
    url: "https://litvestnik.com/2024/05/22/%D0%BD%D0%B8%D1%82%D0%BE-%D0%BB%D0%BE%D1%88%D0%B8%D1%8F%D1%82-%D0%B5-%D1%82%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D0%B0-%D0%BB%D0%BE%D1%88-%D0%BD%D0%B8%D1%82%D0%BE-%D0%B4%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B5/",
    tags: ["books", "language"],
  },
  {
    slug: "dialektite-v-adaptiranoto-kino",
    title: {
      bg: "Диалектите в адаптираното кино",
      en: "Dialects in adapted cinema",
    },
    preview: {
      bg: "Диалектът е първото нещо, което се губи при превод и при редакция. Тръгнах по следите му при Феранте и при „Възвишение“ — и в двата случая киното го изяде.",
      en: "Dialect is the first thing lost in translation, and the first thing lost in editing. I followed its trail through Ferrante and through Ruskov's „Elevation“ — and in both cases the film swallowed it.",
    },
    outlet: "spisanievip",
    date: "2022-09-06",
    url: "https://spisanievip.com/dialektite-v-adaptiranoto-kino/",
    tags: ["language", "books", "culture"],
    featured: true,
  },
  {
    slug: "biblioteka-na-badeshteto",
    title: {
      bg: "Книгите, които няма да бъдат прочетени до 2113 г.",
      en: "The books nobody will read until 2113",
    },
    preview: {
      bg: "Всяка година един писател предава ръкопис, който никой жив днес няма да прочете. През 2114 г. ще отсекат смърчовете в норвежката гора и сто истории ще излязат наведнъж.",
      en: "Every year one writer hands over a manuscript that nobody alive today will read. In 2114 they will fell the spruces in a Norwegian forest, and a hundred stories will be published all at once.",
    },
    outlet: "spisanievip",
    date: "2022-08-17",
    url: "https://spisanievip.com/biblioteka-na-badeshteto/",
    tags: ["books", "culture", "nature"],
    featured: true,
  },
  {
    slug: "kostenurkite-ot-oaxaca",
    title: {
      bg: "Малко познатата Оахака и красивите ѝ костенурки",
      en: "Little-known Oaxaca and its beautiful turtles",
    },
    preview: {
      bg: "Преди трийсет години пясъкът на Масунте е бил изцапан с кръв, а водите — червени. Днес същият плаж е едно от петте най-големи места за гнездене на костенурки в света и това не се е случило от само себе си.",
      en: "Thirty years ago the sand at Mazunte was stained with blood and the water ran red. Today that same beach is one of the five largest turtle nesting sites on earth — and that did not happen by itself.",
    },
    outlet: "spisanievip",
    date: "2022-08-09",
    url: "https://spisanievip.com/kostenurkite-ot-oaxaca/",
    tags: ["nature", "travel"],
    featured: true,
  },
  {
    slug: "svobodata-na-slovoto",
    title: { bg: "Свободата на словото", en: "Freedom of speech" },
    preview: {
      bg: "България се изкачи с 21 места в индекса за свобода на словото и това е постижение. Оттам нататък обаче идва по-трудният въпрос — докъде свободата ни е свобода и откъде започва свободията.",
      en: "Bulgaria climbed twenty-one places in the press freedom index, and that is an achievement. What comes after it is the harder question: where our freedom is still freedom, and where it turns into licence.",
    },
    outlet: "spisanievip",
    date: "2022-08-01",
    url: "https://spisanievip.com/svobodata-na-slovoto/",
    tags: ["society", "language", "books"],
    featured: true,
  },
  {
    slug: "10-interesni-fakta-za-latinska-amerika",
    title: {
      bg: "10 интересни факта за Латинска Америка",
      en: "10 interesting facts about Latin America",
    },
    preview: {
      bg: "Мексико Сити потъва с 25 сантиметра всяка година, а в Парагвай дуелът е легален, стига и двамата да сте кръводарители. Десет неща, които не знаех и вече не мога да забравя.",
      en: "Mexico City sinks twenty-five centimetres a year, and in Paraguay duelling is legal so long as both of you are registered blood donors. Ten things I did not know and can no longer forget.",
    },
    outlet: "10te",
    date: "2024-10-21",
    url: "https://www.10te.bg/lyubopitno/10-interesni-fakta-za-latinska-amerika/",
    tags: ["travel", "culture", "language"],
    featured: true,
  },
  {
    slug: "perseidi-interesni-fakti",
    title: {
      bg: "Интересни факти за годишния метеорен поток „Персеиди“",
      en: "Facts about the annual Perseid meteor shower",
    },
    outlet: "spisanievip",
    date: "2022-08-12",
    url: "https://spisanievip.com/perseidi-interesni-fakti/",
    tags: ["science", "nature"],
  },
  {
    slug: "malka-bezplatna-hogwarts-biblioteka",
    title: {
      bg: "Малка безплатна Хогуортс библиотека",
      en: "A small free Hogwarts library",
    },
    outlet: "spisanievip",
    date: "2022-08-06",
    url: "https://spisanievip.com/malka-bezplatna-hogwarts-biblioteka/",
    tags: ["books", "culture"],
  },
  {
    slug: "klimatichnite-promeni-i-sarfiraneto",
    title: {
      bg: "Сърфът и климатичните промени",
      en: "Surfing and climate change",
    },
    outlet: "spisanievip",
    date: "2022-08-30",
    url: "https://spisanievip.com/klmatichnite-promeni-i-sarfiraneto/",
    tags: ["nature", "society"],
  },
  {
    slug: "nay-visokata-sarfirana-valna",
    title: {
      bg: "Най-високата сърфирана вълна",
      en: "The highest wave ever surfed",
    },
    outlet: "spisanievip",
    date: "2022-08-24",
    url: "https://spisanievip.com/%d0%bd%d0%b0%d0%b9-%d0%b2%d0%b8%d1%81%d0%be%d0%ba%d0%b0%d1%82%d0%b0-%d1%81%d1%8a%d1%80%d1%84%d0%b8%d1%80%d0%b0%d0%bd%d0%b0-%d0%b2%d1%8a%d0%bb%d0%bd%d0%b0/",
    tags: ["nature", "travel"],
  },
  {
    slug: "yes-theory",
    title: {
      bg: "Как „Yes Theory“ променя начина, по който мислим за страха",
      en: "How Yes Theory changes the way we think about fear",
    },
    outlet: "spisanievip",
    date: "2022-07-29",
    url: "https://spisanievip.com/yes-theory/",
    tags: ["culture", "society"],
  },
  {
    slug: "strannoto-izkustvo-na-katelan",
    title: {
      bg: "Странното изкуство и дискурсът на Маурицио Кателан",
      en: "The strange art and discourse of Maurizio Cattelan",
    },
    outlet: "spisanievip",
    date: "2022-07-26",
    url: "https://spisanievip.com/strannoto-izkustvo-na-katelan/",
    tags: ["culture"],
  },
  {
    slug: "san-marino-statuite",
    title: {
      bg: "Сан Марино и позабравеното изкуство на статуите",
      en: "San Marino and the half-forgotten art of statues",
    },
    outlet: "spisanievip",
    date: "2022-07-18",
    url: "https://spisanievip.com/san-marino-pozabravenoto-izkustvo-na-statuite/",
    tags: ["culture", "travel"],
  },
  {
    slug: "art-the-city-v-rimini",
    title: { bg: "Art & the City в Римини", en: "Art & the City in Rimini" },
    outlet: "spisanievip",
    date: "2022-07-13",
    url: "https://spisanievip.com/art-the-city-v-rimini/",
    tags: ["culture", "travel"],
  },
  {
    slug: "lyatno-kino-sofia",
    title: {
      bg: "Лятно кино, усмивки и гражданска отговорност",
      en: "Summer cinema, smiles and civic responsibility",
    },
    outlet: "spisanievip",
    date: "2022-07-08",
    url: "https://spisanievip.com/lyatno-kino-sofia/",
    tags: ["culture", "society"],
  },
  {
    slug: "isic-priklyucheniya",
    title: { bg: "ISIC приключения", en: "ISIC adventures" },
    outlet: "spisanievip",
    date: "2022-07-07",
    url: "https://spisanievip.com/isic-priklyucheniya/",
    tags: ["travel"],
  },
  {
    slug: "7-prichini-da-gubim-motivaciya",
    title: {
      bg: "Седем причини да губим мотивация и как да си я върнем",
      en: "Seven reasons we lose motivation, and how to get it back",
    },
    outlet: "spisanievip",
    date: "2022-07-02",
    url: "https://spisanievip.com/7-prichini-da-gubim-motivaciya/",
    tags: ["society"],
  },
  {
    slug: "10-prichini-da-posetish-italiya",
    title: {
      bg: "10 причини да посетиш Италия",
      en: "10 reasons to visit Italy",
    },
    outlet: "10te",
    date: "2026-08-19",
    url: "https://www.10te.bg/lyubopitno/10-prichini-da-posetish-italiya/",
    tags: ["travel", "culture"],
  },
  {
    slug: "10-prichini-kamino-de-santyago",
    title: {
      bg: "10 причини да преминем Камино де Сантяго",
      en: "10 reasons to walk the Camino de Santiago",
    },
    outlet: "10te",
    date: "2026-07-26",
    url: "https://www.10te.bg/lyubopitno/10-prichini-da-preminem-kamino-de-santyago/",
    tags: ["travel"],
  },
  {
    slug: "10-mesta-sevilya",
    title: {
      bg: "10 места, на които да отидеш, ако си в Севиля",
      en: "10 places to go if you are in Seville",
    },
    outlet: "10te",
    date: "2026-07-25",
    url: "https://www.10te.bg/lyubopitno/10-mesta-na-koito-da-otidesh-ako-si-v-sevilya/",
    tags: ["travel"],
  },
  {
    slug: "10-te-nay-dobri-mesta-za-gmurkane",
    title: {
      bg: "10-те най-добри места за гмуркане в Европа",
      en: "The 10 best diving spots in Europe",
    },
    outlet: "10te",
    date: "2026-07-19",
    url: "https://www.10te.bg/lyubopitno/10-te-nay-dobri-mesta-za-gmurkane-v-evropa/",
    tags: ["travel", "nature"],
  },
  {
    slug: "10-te-nay-krasivi-no-smartonosni-rasteniya",
    title: {
      bg: "10-те най-красиви, но смъртоносни растения",
      en: "The 10 most beautiful, most deadly plants",
    },
    outlet: "10te",
    date: "2026-06-30",
    url: "https://www.10te.bg/lyubopitno/10-te-nay-krasivi-no-smartonosni-rasteniya/",
    tags: ["nature"],
  },
  {
    slug: "10-zhivotni-sas-svrahestestveni-sili",
    title: {
      bg: "10 животни със „свръхестествени сили“",
      en: "10 animals with „supernatural powers“",
    },
    outlet: "10te",
    date: "2026-06-15",
    url: "https://www.10te.bg/lyubopitno/10-zhivotni-sas-svrahestestveni-sili/",
    tags: ["nature", "science"],
  },
  {
    slug: "10-prepyatstviya-novo-nachinanie",
    title: {
      bg: "10 препятствия, пред които се изправяме, когато започнем ново начинание",
      en: "10 obstacles we meet when we start something new",
    },
    outlet: "10te",
    date: "2026-05-27",
    url: "https://www.10te.bg/zhivotat/10-prepyatstviya-pred-koito-se-izpravyame-kogato-zapochnem-novo-nachinanie/",
    tags: ["society"],
  },
  {
    slug: "10-istorii-za-antarktida",
    title: {
      bg: "10 истории за Антарктида",
      en: "10 stories about Antarctica",
    },
    outlet: "10te",
    date: "2026-04-18",
    url: "https://www.10te.bg/lyubopitno/10-istorii-za-antarktida/",
    tags: ["travel", "nature", "science"],
  },
  {
    slug: "10-prichini-da-gubim-motivaciya",
    title: {
      bg: "10 причини да губим мотивация и как да си я върнем",
      en: "10 reasons we lose motivation, and how to get it back",
    },
    outlet: "10te",
    date: "2025-09-25",
    url: "https://www.10te.bg/zhivotat/10-prichini-da-gubim-motivaciya-i-kak-da-si-ya-varnem/",
    tags: ["society"],
  },
  {
    slug: "10-te-nay-prikazni-mesta-v-sveta",
    title: {
      bg: "10-те най-приказни места в света",
      en: "The 10 most fairy-tale places in the world",
    },
    outlet: "10te",
    date: "2025-09-20",
    url: "https://www.10te.bg/lyubopitno/10-te-nay-prikazni-mesta-v-sveta/",
    tags: ["travel"],
  },
  {
    slug: "10-te-sportni-igrishta",
    title: {
      bg: "10-те най-забележителни спортни игрища в света",
      en: "The 10 most remarkable sports grounds in the world",
    },
    outlet: "10te",
    date: "2024-08-25",
    url: "https://www.10te.bg/zabavlenie/10-te-nay-zabelezhitelni-sportni-igrishta-v-sveta/",
    tags: ["culture", "travel"],
  },
  {
    slug: "10-te-nay-golemi-misterii",
    title: {
      bg: "10-те най-големи мистерии в света",
      en: "The 10 greatest mysteries in the world",
    },
    outlet: "10te",
    date: "2024-07-22",
    url: "https://www.10te.bg/lyubopitno/10-te-nay-golemi-misterii-v-sveta/",
    tags: ["culture", "science"],
  },
  {
    slug: "10-izcheznali-zhivotni",
    title: {
      bg: "10 изчезнали и застрашаващо изчезващи животни",
      en: "10 extinct and critically endangered animals",
    },
    outlet: "10te",
    date: "2024-02-29",
    url: "https://www.10te.bg/lyubopitno/10-izcheznali-i-zastrashavashto-izchezvashti-zhivotni/",
    tags: ["nature"],
  },
  {
    slug: "10-nay-golemi-prirodni-bedstviya",
    title: {
      bg: "10 от най-големите природни бедствия в историята",
      en: "10 of the greatest natural disasters in history",
    },
    outlet: "10te",
    date: "2024-02-21",
    url: "https://www.10te.bg/lyubopitno/10-ot-nay-golemi-prirodni-bedstviya-v-istoriyata/",
    tags: ["nature", "science"],
  },
];

export const byDateDesc = (a: Article, b: Article) =>
  b.date.localeCompare(a.date);
