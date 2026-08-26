import { useId, useState } from "react";
import type { Book } from "~/data/books";
import { BOOKS, spineWidth } from "~/data/books";
import { formatNumber, pick, useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";

/** Spines are real buttons in a horizontally scrollable strip, so the shelf
 *  works with a keyboard and on a phone — a mouse-only shelf would lock out
 *  half the visitors. The selected spine lifts and a panel below it opens. */
export function Shelf() {
  const t = useT();
  const [openSlug, setOpenSlug] = useState<string | null>(BOOKS[0]?.slug ?? null);
  const panelId = useId();
  const open = BOOKS.find((b) => b.slug === openSlug) ?? null;

  return (
    <div>
      <p className="font-pixel mb-2 text-lg text-ink-soft">
        ↓ {t("shelfHint")}
      </p>

      <div className="y2k-bevel bg-moss px-[var(--pad-card)] pb-0 pt-8">
        <ul className="flex items-end gap-1.5 overflow-x-auto pb-0">
          {BOOKS.map((book) => {
            const isOpen = book.slug === openSlug;
            return (
              <li key={book.slug} className="shrink-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenSlug(isOpen ? null : book.slug)}
                  style={{
                    background: book.spine.bg,
                    color: book.spine.fg,
                    height: `${book.spine.height * 2.1}px`,
                    // Thickness is the real page count, not decoration.
                    width: `${spineWidth(book.pages)}px`,
                  }}
                  className={[
                    "y2k-bevel flex flex-col items-center justify-between gap-1 px-1 pb-1 pt-2 transition-transform duration-150",
                    isOpen ? "-translate-y-4" : "hover:-translate-y-2",
                  ].join(" ")}
                >
                  {/* Vertical, the way a spine is actually read. */}
                  <span
                    className="font-display min-h-0 flex-1 overflow-hidden text-xs font-bold leading-tight tracking-tight"
                    style={{ writingMode: "vertical-rl", rotate: "180deg" }}
                  >
                    {book.title}
                  </span>
                  {/* Source language, printed at the foot of the spine the way
                      a publisher's colophon sits at the bottom of a real one. */}
                  <span
                    aria-hidden
                    className="font-pixel shrink-0 border border-current px-1 text-[0.6rem] leading-tight"
                  >
                    {book.from.toUpperCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        {/* The shelf board itself. */}
        <div
          aria-hidden
          className="h-3 border-t-2 border-ink bg-gradient-to-b from-cream to-blush"
        />
      </div>

      <div id={panelId} className="mt-6">
        {open ? <Detail book={open} /> : null}
      </div>
    </div>
  );
}

function Detail({ book }: { book: Book }) {
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
          it reads as a deliberate edition, not as a missing image. */}
      <div
        className="y2k-bevel mx-auto flex aspect-[2/3] w-[clamp(7rem,22vw,9rem)] flex-col justify-between p-3 sm:mx-0"
        style={{ background: book.spine.bg, color: book.spine.fg }}
      >
        <span className="font-display text-sm font-black leading-tight">
          {book.title}
        </span>
        <span className="font-pixel text-sm opacity-90">
          {book.authorBg ?? book.author}
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-xl font-black leading-tight text-balance">
          {book.title}
        </h3>
        <p className="font-pixel mt-1 text-lg text-ink-soft">
          {book.authorBg ? `${book.authorBg} · ` : ""}
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
          <dt className="font-pixel text-ink-soft">{t("originalTitleLabel")}</dt>
          <dd className="italic">{book.originalTitle}</dd>
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
