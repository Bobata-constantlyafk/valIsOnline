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
    preview: {
      bg: "Ядрото на кометата Суифт-Тътъл е около 26 километра — колкото онова, което свърши с динозаврите. Всеки август минаваме през праха ѝ с по 60 километра в секунда и наричаме това красиво.",
      en: "The nucleus of comet Swift-Tuttle is about twenty-six kilometres across, roughly the size of the one that finished the dinosaurs. Every August we pass through its dust at sixty kilometres a second and call it beautiful.",
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
    preview: {
      bg: "Шариса Бейтс от Минесота построи безплатна библиотека във формата на Хогуортс в годината, в която ѝ откриха агресивен рак на гърдата. Тази година празнува три години чиста, а свекър ѝ вече мери мястото за хижата на Хагрид.",
      en: "Charissa Bates from Minnesota built a free little library shaped like Hogwarts in the year she was diagnosed with aggressive breast cancer. This year she marks three years clear, and her father-in-law is already measuring the spot for Hagrid's hut.",
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
    preview: {
      bg: "През декември 2021 г. супертайфун изтри Cloud-9 в Сиаргао — вълната, заради която хората прелитат половината свят. До 2100 г. половината пясъчни плажове на планетата може да ги няма, а сърфът още се чуди дали да плати повече за по-чисти дъски.",
      en: "In December 2021 a super typhoon erased Cloud-9 in Siargao, the wave people fly half the world for. By 2100 half the planet's sandy beaches may be gone, and surfing is still deciding whether to pay more for cleaner boards.",
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
    preview: {
      bg: "Назаре е било рибарско село с опасно море, докато Гарет Макнамара не подкара 78 фута от него през 2011 г. Днес рекордите се решават с 3D модели и геометрична корекция на снимки, защото окото вече не стига.",
      en: "Nazaré was a fishing village with a dangerous sea until Garrett McNamara rode seventy-eight feet of it in 2011. Records are now settled with 3D models and geometric correction of photographs, because the eye is no longer enough.",
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
    preview: {
      bg: "Четирима непознати се засичат в Монреал през 2015 г. и си дават 30 предизвикателства за 30 дни. Днес каналът им има 7,63 милиона абонати, а идеята зад него е проста: дискомфортът е цената на всичко, което си струва.",
      en: "Four strangers met in Montreal in 2015 and set themselves thirty challenges in thirty days. Their channel now has 7.63 million subscribers, and the idea behind it is simple: discomfort is the price of anything worth having.",
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
    preview: {
      bg: "Трима колекционери платиха 120 000 евро за банан, залепен с тиксо за стена. Никой не получи оригиналния банан — дадоха им друг, който изгни и беше изхвърлен, което е може би най-точното изказване за пазара на изкуство досега.",
      en: "Three collectors paid a hundred and twenty thousand euros for a banana taped to a wall. None of them received the original banana — each was handed a different one, which rotted and was thrown out, possibly the most accurate statement anyone has made about the art market.",
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
    preview: {
      bg: "Сан Марино има собствена Статуя на свободата — подарък от берлинска графиня през 1876 г. Между паметниците ѝ стои и един за Беслан, което е доста памет за държава с размерите на голям квартал.",
      en: "San Marino has a Statue of Liberty of its own, a gift from a Berlin countess in 1876. Among its monuments there is also one for Beslan — a great deal of remembering for a country the size of a large neighbourhood.",
    },
    outlet: "spisanievip",
    date: "2022-07-18",
    url: "https://spisanievip.com/san-marino-pozabravenoto-izkustvo-na-statuite/",
    tags: ["culture", "travel"],
  },
  {
    slug: "art-the-city-v-rimini",
    title: { bg: "Art & the City в Римини", en: "Art & the City in Rimini" },
    preview: {
      bg: "Трябва ли графитът да се мери с модерното изкуство? В Борго Сан Джулиано, до моста на Тиберий, целият квартал е изрисуван с кадри от Фелини — и въпросът някак си отговаря сам.",
      en: "Should graffiti be measured against modern art? In Borgo San Giuliano, beside the bridge of Tiberius, the whole quarter is painted with scenes out of Fellini — and the question rather answers itself.",
    },
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
    preview: {
      bg: "Безплатно лятно кино в парк „Гео Милев“: седем филма за една вечер. Сред тях е и „Wind2Win“ — 300 километра уиндсърф покрай брега, изкарани заради пластмасата във водата.",
      en: "Free open-air cinema in Geo Milev park: seven films in one evening. One of them, Wind2Win, follows a three-hundred-kilometre windsurf along the coast, done for the sake of the plastic in the water.",
    },
    outlet: "spisanievip",
    date: "2022-07-08",
    url: "https://spisanievip.com/lyatno-kino-sofia/",
    tags: ["culture", "society"],
  },
  {
    slug: "isic-priklyucheniya",
    title: { bg: "ISIC приключения", en: "ISIC adventures" },
    preview: {
      bg: "Има карта, която пуска студенти в музеи в над 125 държави и на 1500 места само у нас. Разбрах за нея след Атина, тоест точно в момента, в който вече не помага.",
      en: "There is a card that gets students into museums in more than a hundred and twenty-five countries, and into fifteen hundred places in Bulgaria alone. I found out about it after Athens — precisely the moment at which it stops helping.",
    },
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
    preview: {
      bg: "Забравяме наградата, поставяме си нереалистични цели, после се отказваме и наричаме това липса на воля. Седем причини да губим мотивация — и нито една от тях не е, че сме мързеливи.",
      en: "We forget the reward, set ourselves impossible goals, then give up and call it a lack of willpower. Seven reasons we lose motivation — and not one of them is laziness.",
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
    preview: {
      bg: "Рим носи 2800 години история, Чинкуе Терре е пет села, вързани с пътеки и влак, а Сицилия побира гръцки храмове, нормански църкви и Етна на един остров. Десет причини, ако изобщо ви трябват причини.",
      en: "Rome carries two thousand eight hundred years of history, Cinque Terre is five villages tied together by footpaths and a train, and Sicily fits Greek temples, Norman churches and Etna onto a single island. Ten reasons, if you need reasons at all.",
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
    preview: {
      bg: "Седем маршрута, по 20–30 хиляди крачки на ден и още два-три дни, ако продължиш до Финистере. Хората тръгват по религиозни причини, по спортни или по никакви, които могат да обяснят — и това май е най-хубавото.",
      en: "Seven routes, twenty to thirty thousand steps a day, and another two or three days if you carry on to Finisterre. People set out for religious reasons, for athletic ones, or for none they can explain — which is probably the best part.",
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
    preview: {
      bg: "Севиля пуска нещо върху посетителите си, което после трудно те напуска. Пласа де Еспаня, Санта Крус, Златната кула — десет места, заради които се връщаш.",
      en: "Seville casts something over its visitors that does not leave easily afterwards. Plaza de España, Santa Cruz, the Golden Tower — ten places that bring you back.",
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
    preview: {
      bg: "Силфра в Исландия те пуска да плуваш между две тектонични плочи, Портофино пази средиземноморските си потъвания, а Лофотен предлага арктически студ. Десет места в Европа, за нито едно от които не е нужно да летиш до тропиците.",
      en: "Silfra in Iceland lets you swim between two tectonic plates, Portofino keeps its Mediterranean wrecks, and Lofoten offers Arctic cold. Ten places in Europe, not one of which requires a flight to the tropics.",
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
    preview: {
      bg: "Външният вид заблуждава: момината сълза действа върху сърцето както дигоксинът, а олеандърът е отровен целият, до последния лист. Десет разкошни растения, които са се научили да се защитават.",
      en: "Looks deceive: lily of the valley acts on the heart the way digoxin does, and every part of an oleander is poisonous, down to the last leaf. Ten gorgeous plants that learned to defend themselves.",
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
    preview: {
      bg: "Медузата Turritopsis натиска бутона за начало и се връща в по-ранна възраст. Октоподът имитатор се преструва на други животни дори когато няма кой да го гони — десет напълно истински суперсили.",
      en: "The Turritopsis jellyfish presses restart and reverts to an earlier stage of its own life. The mimic octopus impersonates other creatures even when nothing is hunting it — ten entirely real superpowers.",
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
    preview: {
      bg: "Монотонията в началото, съмнението, когато резултатът закъснява, и парите, които всяко начало иска. Десет препятствия — изброени, за да се разпознават, а не за да плашат.",
      en: "The monotony of the early stage, the doubt when results are late, and the money every beginning asks for. Ten obstacles — listed so they can be recognised, not so they can frighten.",
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
    preview: {
      bg: "Слънцето изгрява на 21 септември и залязва на 22 март — една година, един ден. От ледника Тейлър тече кървав водопад, а метеоритите там се запазват по-добре, отколкото където и да е другаде.",
      en: "The sun rises on 21 September and sets on 22 March — one year, one day. A blood-red waterfall runs out of the Taylor Glacier, and meteorites keep better there than anywhere else on earth.",
    },
    outlet: "10te",
    date: "2026-04-18",
    url: "https://www.10te.bg/lyubopitno/10-istorii-za-antarktida/",
    tags: ["travel", "nature", "science"],
  },
  {
    slug: "10-te-nay-prikazni-mesta-v-sveta",
    title: {
      bg: "10-те най-приказни места в света",
      en: "The 10 most fairy-tale places in the world",
    },
    preview: {
      bg: "Светещи пещери в Нова Зеландия, замък в Бавария, езеро с остров в Словения. Десет места, които звучат като приказка и имат неудобния навик да съществуват.",
      en: "Glowing caves in New Zealand, a castle in Bavaria, a lake with an island in Slovenia. Ten places that sound like a fairy tale and have the inconvenient habit of existing.",
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
    preview: {
      bg: "На езерото Санкт Мориц бягат коне по леда от 1907 г., а Федерер и Агаси играха тенис на 210 метра височина. Десет игрища, избрани заради мястото, а не заради престижа.",
      en: "Horses have raced on the ice of Lake St Moritz since 1907, and Federer and Agassi played tennis two hundred and ten metres up. Ten grounds chosen for where they are rather than for their prestige.",
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
    preview: {
      bg: "Подводен монумент край Йонагуни, ръкопис от 1420-те, който още никой не е разчел, и червен дъжд над Керала през 2001 г. Десет неща, чието обяснение все закъснява.",
      en: "An underwater monument off Yonaguni, a manuscript from the 1420s nobody has yet deciphered, and red rain over Kerala in 2001. Ten things whose explanation keeps running late.",
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
    preview: {
      bg: "Стелеровата морска крава е открита през 1741 г. и е изчезнала до 1768 — двайсет и седем години от първата среща до последната. Каспийският тигър е видян за последно през 1970 г., а обявен за изчезнал чак през 2003.",
      en: "Steller's sea cow was discovered in 1741 and gone by 1768 — twenty-seven years from the first meeting to the last. The Caspian tiger was seen for the last time in 1970 and only declared extinct in 2003.",
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
    preview: {
      bg: "Циклонът Бхола отнася около 500 000 души през 1970 г. За наводненията в Китай през 1931 г. оценките се движат между 150 000 и два милиона — разлика, която сама по себе си казва нещо.",
      en: "The Bhola cyclone took around five hundred thousand lives in 1970. For the Chinese floods of 1931 the estimates run from a hundred and fifty thousand to two million — a gap that says something on its own.",
    },
    outlet: "10te",
    date: "2024-02-21",
    url: "https://www.10te.bg/lyubopitno/10-ot-nay-golemi-prirodni-bedstviya-v-istoriyata/",
    tags: ["nature", "science"],
  },
];

/** Sorts by the first character that a reader would actually alphabetise by.
 *  Two titles start with a typographic quote — „Онази сила…" and “The force…"
 *  — and sorting on the raw string files them under the punctuation instead
 *  of under О and T, which buries them at one end of the list. */
const sortKey = (title: string) => title.replace(/^[^\p{L}\p{N}]+/u, "");

/** Reverse alphabetical by the title the reader is actually looking at, so
 *  the order follows the language rather than being fixed to Bulgarian.
 *  Uses the locale's own collation — Cyrillic does not sort correctly under
 *  a plain string comparison. */
export const byTitleDesc =
  (locale: "bg" | "en") => (a: Article, b: Article) =>
    sortKey(b.title[locale]).localeCompare(
      sortKey(a.title[locale]),
      locale === "bg" ? "bg-BG" : "en-GB",
      { sensitivity: "base", numeric: true },
    );
