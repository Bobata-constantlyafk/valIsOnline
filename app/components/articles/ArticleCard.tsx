import type { Article } from "~/data/articles";
import { OUTLETS } from "~/data/articles";
import { formatDate, pick, useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";

export function ArticleCard({ article }: { article: Article }) {
  const t = useT();
  const locale = useLocale();
  const outlet = OUTLETS[article.outlet];

  return (
    <li className="y2k-sticker flex flex-col bg-cream transition-transform hover:-translate-y-0.5">
      <div className="flex items-center gap-2 border-b-2 border-ink bg-blush px-3 py-1.5">
        <span className="font-pixel text-base text-ink">{outlet.name}</span>
        <span className="font-pixel ml-auto text-sm text-ink-soft">
          {formatDate(article.date, locale)}
        </span>
      </div>

      <div className="u-card-p flex flex-1 flex-col gap-3">
        <h3 className="font-display text-lg font-bold leading-snug text-balance">
          {pick(article.title, locale)}
        </h3>

        {article.preview && (
          <p className="text-pretty text-base leading-relaxed text-ink-soft">
            {pick(article.preview, locale)}
          </p>
        )}

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {article.tags.map((tag) => (
            <li
              key={tag}
              className="font-pixel border-2 border-ink bg-lilac px-1.5 text-sm text-ink"
            >
              {t("tag", tag)}
            </li>
          ))}
        </ul>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="font-pixel y2k-bevel y2k-chrome y2k-press self-start px-3 py-1 text-lg text-ink"
        >
          {t("readAt")} {outlet.name} ↗
        </a>
      </div>
    </li>
  );
}
