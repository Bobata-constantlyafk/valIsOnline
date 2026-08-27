import {
  type Book,
  displayTitle,
} from "~/data/books";
import { formatNumber, pick, useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";

/** The panel that opens under the shelf when a spine is picked. Split out of
 *  Shelf because the two do unrelated jobs: Shelf owns a scrollable strip and
 *  its arrows, this owns the presentation of one book. */
export function Detail({ book }: { book: Book }) {
  const t = useT();
  const locale = useLocale();

  const roleLabel =
    book.role === "translation"
      ? t("roleTranslation")
      : book.role === "editing"
        ? t("roleEditing")
        : null;

  return (
    <article className="y2k-sticker u-panel grid gap-5 bg-cream sm:grid-cols-[auto_1fr]">
      {/* No cover art yet, so the cover is typeset from the spine colours —
          it reads as a deliberate edition, not as a missing image. The floor
          of the clamp is what a phone gets: the detail panel is one column
          there, so the cover has the full width to itself and a small one
          just looked lost. */}
      <div
        className="y2k-bevel mx-auto flex aspect-[2/3] w-[clamp(12rem,40vw,14rem)] flex-col justify-between p-4 sm:mx-0"
        style={{ background: book.spine.bg, color: book.spine.fg }}
      >
        <span className="font-display text-lg font-black leading-tight">
          {displayTitle(book, locale)}
        </span>
        <span className="font-pixel text-base opacity-90">
          {locale === "bg" ? (book.authorBg ?? book.author) : book.author}
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-xl font-black leading-tight text-balance">
          {displayTitle(book, locale)}
        </h3>
        <p className="font-pixel mt-1 text-lg text-ink-soft">
          {locale === "bg" && book.authorBg ? `${book.authorBg} · ` : ""}
          {book.author}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {roleLabel && (
            <li className="font-pixel y2k-bevel bg-lime px-2 py-0.5 text-base text-forest">
              {roleLabel}
            </li>
          )}
          <li className="font-pixel y2k-bevel bg-sky px-2 py-0.5 text-base text-ink">
            {book.from === "es" ? t("fromEs") : t("fromEn")}
          </li>
          {book.originalYear && (
            <li className="font-pixel y2k-bevel bg-blush px-2 py-0.5 text-base text-ink">
              {book.originalYear}
            </li>
          )}
        </ul>

        <dl className="mt-4 grid gap-x-4 gap-y-1 text-base sm:grid-cols-[auto_1fr]">
          <dt className="font-pixel text-ink-soft">
            {t(locale === "bg" ? "originalTitleLabel" : "bgEditionLabel")}
          </dt>
          <dd className="italic">
            {locale === "bg" ? book.originalTitle : book.title}
          </dd>
          {book.illustrator && (
            <>
              <dt className="font-pixel text-ink-soft">
                {t("illustratorLabel")}
              </dt>
              <dd>{book.illustrator}</dd>
            </>
          )}
        </dl>

        {book.note && (
          <p className="mt-3 text-pretty leading-relaxed text-ink-soft">
            {pick(book.note, locale)}
          </p>
        )}

        <a
          href={book.goodreads}
          target="_blank"
          rel="noreferrer"
          className="font-pixel y2k-bevel y2k-chrome y2k-press mt-4 inline-block px-3 py-1 text-lg text-ink"
        >
          ★ {book.rating} · {formatNumber(book.ratingsCount, locale)}{" "}
          {t("ratingsSuffix")} — {t("onGoodreads")} ↗
        </a>
      </div>
    </article>
  );
}
