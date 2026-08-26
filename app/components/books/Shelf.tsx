import { useCallback, useEffect, useId, useRef, useState } from "react";
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

  // The shelf is wider than a phone, and nothing about a row of spines says
  // "there are more of these off the edge". These two buttons say it: they
  // only appear when the strip actually overflows, and each one greys out at
  // its end, so the control doubles as a position indicator.
  const stripRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  const measure = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ left: el.scrollLeft > 2, right: el.scrollLeft < max - 2 });
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, [measure]);

  const nudge = (dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: dir * Math.round(el.clientWidth * 0.8),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const scrollable = edges.left || edges.right;

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <p className="font-pixel text-lg text-ink-soft">↓ {t("shelfHint")}</p>

        {scrollable && (
          <div className="ml-auto flex items-center gap-1.5">
            <span className="font-pixel text-base text-ink-soft">
              {BOOKS.length} {t("shelfCount")}
            </span>
            {([-1, 1] as const).map((dir) => {
              const enabled = dir === -1 ? edges.left : edges.right;
              return (
                <button
                  key={dir}
                  type="button"
                  onClick={() => nudge(dir)}
                  disabled={!enabled}
                  aria-label={t(dir === -1 ? "shelfPrev" : "shelfNext")}
                  className={[
                    "y2k-bevel font-pixel h-11 w-11 text-lg leading-none",
                    enabled
                      ? "y2k-chrome y2k-press text-ink"
                      : "cursor-default bg-cream text-ink-soft opacity-50",
                  ].join(" ")}
                >
                  {dir === -1 ? "◀" : "▶"}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="y2k-bevel bg-moss px-[var(--pad-card)] pb-0 pt-8">
        <ul
          ref={stripRef}
          className="flex items-end gap-1.5 overflow-x-auto pb-0"
        >
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
                    height: `${book.spine.height * 3.15}px`, // 2.1 * 1.5, matching the width scale
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
                    className="font-display min-h-0 flex-1 overflow-hidden text-sm font-bold leading-tight tracking-tight"
                    style={{ writingMode: "vertical-rl", rotate: "180deg" }}
                  >
                    {book.title}
                  </span>
                  {/* Source language, printed at the foot of the spine the way
                      a publisher's colophon sits at the bottom of a real one. */}
                  <span
                    aria-hidden
                    className="font-pixel shrink-0 border-2 border-current px-1 text-xs leading-tight"
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
          it reads as a deliberate edition, not as a missing image. The floor
          of the clamp is what a phone gets: the detail panel is one column
          there, so the cover has the full width to itself and a small one
          just looked lost. */}
      <div
        className="y2k-bevel mx-auto flex aspect-[2/3] w-[clamp(12rem,40vw,14rem)] flex-col justify-between p-4 sm:mx-0"
        style={{ background: book.spine.bg, color: book.spine.fg }}
      >
        <span className="font-display text-lg font-black leading-tight">
          {book.title}
        </span>
        <span className="font-pixel text-base opacity-90">
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
