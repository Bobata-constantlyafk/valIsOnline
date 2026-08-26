import { QUOTES, SELF_DESCRIPTION } from "~/data/quotes";
import { pick, useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";
import { SectionHeading } from "./Page";

/** Verbatim quotation only. The Bulgarian is exactly as printed; on the
 *  English side each card is labelled a translation, so a reader is never
 *  shown a rewrite believing it is her sentence. Every card links to the
 *  published piece so the quote can be checked. */
export function Quotes() {
  const t = useT();
  const locale = useLocale();

  return (
    <section aria-labelledby="quotes">
      <SectionHeading id="quotes">{t("quotesTitle")}</SectionHeading>
      <p className="font-pixel mt-2 text-base text-ink-soft">
        {t("quotesNote")}
      </p>

      <blockquote className="y2k-sticker u-card-p mt-5 bg-blush">
        <p className="text-pretty text-lg leading-relaxed">
          {pick(SELF_DESCRIPTION.text, locale)}
        </p>
        <footer className="font-pixel mt-3 text-base text-ink-soft">
          —{" "}
          <a
            href={SELF_DESCRIPTION.url}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-bubblegum decoration-2 underline-offset-4"
          >
            {pick(SELF_DESCRIPTION.note, locale)} ↗
          </a>
          {locale !== "bg" && <> · {t("translatedQuote")}</>}
        </footer>
      </blockquote>

      <ul className="mt-5 grid gap-[var(--gap-grid)] sm:grid-cols-2">
        {QUOTES.map((q) => (
          <li key={q.id}>
            <blockquote className="y2k-bevel u-card-p flex h-full flex-col bg-cream">
              <p className="text-pretty leading-relaxed">
                <span aria-hidden className="font-display text-ink-soft">
                  “
                </span>
                {pick(q.text, locale)}
              </p>
              <footer className="font-pixel mt-auto pt-3 text-base text-ink-soft">
                <a
                  href={q.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-bubblegum decoration-2 underline-offset-4"
                >
                  {pick(q.source, locale)} ↗
                </a>
                <br />
                {q.outlet}, {q.year}
                {locale !== "bg" && <> · {t("translatedQuote")}</>}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
