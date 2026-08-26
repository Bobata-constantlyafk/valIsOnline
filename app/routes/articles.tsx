import { metaFor } from "~/lib/meta";
import { useMemo, useState } from "react";
import { Page, PageHeader } from "~/components/chrome/Page";
import { ArticleCard } from "~/components/articles/ArticleCard";
import type { Outlet, Tag } from "~/data/articles";
import { ARTICLES, OUTLETS, byTitleDesc } from "~/data/articles";
import { useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";

export function meta({ location }: { location: { pathname: string } }) {
  return metaFor("articles", location.pathname);
}


const ALL_TAGS: Tag[] = [
  "books",
  "language",
  "travel",
  "nature",
  "culture",
  "society",
  "science",
];
const ALL_OUTLETS = Object.keys(OUTLETS) as Outlet[];

export default function Articles() {
  const t = useT();
  const locale = useLocale();
  const [outlet, setOutlet] = useState<Outlet | null>(null);
  const [tag, setTag] = useState<Tag | null>(null);

  const shown = useMemo(
    () =>
      ARTICLES.filter(
        (a) =>
          (!outlet || a.outlet === outlet) && (!tag || a.tags.includes(tag)),
      ).sort(byTitleDesc(locale)),
    [outlet, tag, locale],
  );

  return (
    <Page>
      <PageHeader title={t("articlesTitle")} lead={t("articlesLead")}>
        <div className="mt-6 flex flex-col gap-3">
        <Row label={t("filterByOutlet")}>
          <Chip active={outlet === null} onClick={() => setOutlet(null)}>
            {t("filterAll")}
          </Chip>
          {ALL_OUTLETS.map((o) => (
            <Chip
              key={o}
              active={outlet === o}
              onClick={() => setOutlet(outlet === o ? null : o)}
            >
              {OUTLETS[o].name}
            </Chip>
          ))}
        </Row>

        <Row label={t("filterByTag")}>
          <Chip active={tag === null} onClick={() => setTag(null)}>
            {t("filterAll")}
          </Chip>
          {ALL_TAGS.map((x) => (
            <Chip
              key={x}
              active={tag === x}
              onClick={() => setTag(tag === x ? null : x)}
            >
              {t("tag", x)}
            </Chip>
          ))}
        </Row>
        </div>

        <p aria-live="polite" className="font-pixel mt-5 text-lg text-ink-soft">
          {shown.length} {t("countSuffix")}
        </p>
      </PageHeader>

      {shown.length === 0 ? (
        <p className="font-pixel text-xl">{t("noMatches")}</p>
      ) : (
        <ul className="u-cards">
          {shown.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </ul>
      )}
    </Page>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-pixel w-24 shrink-0 text-lg text-ink-soft">
        {label}
      </span>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={[
        "font-pixel y2k-press px-2.5 py-0.5 text-base",
        active
          ? "y2k-bevel-in bg-lime text-forest"
          : "y2k-bevel y2k-chrome text-ink",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
