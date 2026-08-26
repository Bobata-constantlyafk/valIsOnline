import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { LANGUAGES, PORTRAIT, TICKER } from "~/data/profile";
import { pick, useT } from "~/lib/i18n";
import { PATHS, useLocale } from "~/lib/locale";

/** Fake window chrome. The three buttons are decoration, so they are marked
 *  aria-hidden rather than given roles they do not honour. */
function TitleBar() {
  return (
    <div className="y2k-chrome flex items-center gap-2 border-b-2 border-ink px-3 py-1.5">
      <span className="font-pixel text-base text-ink">val-is-online.exe</span>
      <span aria-hidden className="ml-auto flex gap-1">
        {["_", "□", "×"].map((g) => (
          <span
            key={g}
            className="y2k-bevel font-pixel grid h-5 w-6 place-items-center bg-cream text-xs leading-none text-ink"
          >
            {g}
          </span>
        ))}
      </span>
    </div>
  );
}

function Portrait({ alt, missing }: { alt: string; missing: string }) {
  const [broken, setBroken] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The page is prerendered, so a missing portrait 404s long before React
  // hydrates and the onError below never fires. Re-check on mount: a decoded
  // image always has a natural width, a failed one never does.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) setBroken(true);
  }, []);

  return (
    <div className="relative shrink-0">
      {/* Layered offset frames — the era's answer to a drop shadow. */}
      <div
        aria-hidden
        className="absolute -left-2 -top-2 h-full w-full border-2 border-ink bg-lilac"
      />
      <div
        aria-hidden
        className="absolute -left-1 -top-1 h-full w-full border-2 border-ink bg-bubblegum"
      />
      <div className="y2k-bevel relative aspect-[3/4] w-[clamp(8.5rem,30vw,13rem)] overflow-hidden bg-moss">
        {broken ? (
          <div className="grid h-full place-items-center gap-1 text-center text-blush">
            <span aria-hidden className="text-5xl text-lime">
              ★
            </span>
            <span className="font-pixel px-2 text-sm text-blush">{missing}</span>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={PORTRAIT}
            alt={alt}
            onError={() => setBroken(true)}
            width={600}
            height={800}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <span className="font-pixel absolute -bottom-3 -right-3 rotate-[-8deg] border-2 border-ink bg-lime px-2 py-0.5 text-base text-forest">
        ★ val ★
      </span>
    </div>
  );
}

export function Hero() {
  const t = useT();
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-forest">
      {/* Star field, deliberately still. The hero used to run four animations
          at once — glitter sheen, a blinking wordmark, drifting stars and the
          ticker — which read as busy rather than as 2001. The sheen on her
          name is the signature and the ticker has to move to be a ticker;
          these stars just sit there now. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 20% 30%, #7cff3d 50%, transparent 50%), radial-gradient(1.5px 1.5px at 70% 60%, #9be7ff 50%, transparent 50%), radial-gradient(2px 2px at 45% 80%, #ff6fb5 50%, transparent 50%), radial-gradient(1.5px 1.5px at 88% 18%, #c9a7ff 50%, transparent 50%)",
          backgroundSize: "260px 260px, 200px 200px, 320px 320px, 240px 240px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(124,255,61,0.22),transparent_65%)]"
      />

      <div
        className="u-page relative"
        style={{ paddingBlock: "var(--pad-hero-y)" }}
      >
        <div className="y2k-bevel overflow-hidden bg-moss">
          <TitleBar />

          <div className="u-panel flex flex-col items-center gap-[var(--pad-panel)] sm:flex-row sm:items-start">
            <Portrait alt={t("photoAlt")} missing={t("photoMissing")} />

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="font-pixel text-lg text-blush">
                {t("heroKicker")}{" "}
                <span className="text-lime">valIsOnline</span>
              </p>

              <h1 className="font-display y2k-glitter mt-1 text-5xl font-black leading-[1.05] tracking-tight">
                {/* The space matters: two block spans with nothing between
                    them read out and copy as "ValentinaIstatkova". It
                    collapses visually because the spans are blocks. */}
                <span className="block">{t("nameFirst")}</span>{" "}
                <span className="block">{t("nameLast")}</span>
              </h1>

              <p className="font-pixel mt-2 text-xl text-lime">
                {t("roleLine")}
              </p>

              <p className="mt-4 max-w-prose text-pretty text-lg leading-relaxed text-cream/90">
                {t("heroIntro")}
              </p>

              <ul
                aria-label={t("languagesTitle")}
                className="mt-5 flex flex-wrap justify-center gap-1.5 sm:justify-start"
              >
                {LANGUAGES.map((l) => (
                  <li
                    key={l.code}
                    title={`${pick(l.name, locale)} — ${pick(l.level, locale)}`}
                    className={[
                      "font-pixel y2k-bevel px-2 py-0.5 text-base",
                      // Three tiers inside one hue rather than three hues.
                      // Green is Val's colour, so her mother tongue gets the
                      // loudest green, the two she translates from get the
                      // deeper one, and the rest stay neutral. Bubblegum is
                      // deliberately not used here — it is the CTA colour,
                      // and a badge wearing it would read as a button.
                      l.native
                        ? "bg-lime text-forest"
                        : l.worksFrom
                          ? "bg-grass text-forest"
                          : "bg-cream text-ink",
                    ].join(" ")}
                  >
                    {l.code}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Link
                  to={PATHS.books[locale]}
                  className="font-pixel y2k-bevel y2k-chrome y2k-press px-5 py-2 text-xl text-ink"
                >
                  {t("heroBooksCta")} →
                </Link>
                <Link
                  to={PATHS.articles[locale]}
                  className="font-pixel y2k-bevel y2k-press bg-bubblegum px-5 py-2 text-xl text-ink"
                >
                  {t("heroArticlesCta")} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}

function Ticker() {
  const locale = useLocale();
  // Doubled so the strip loops seamlessly; the second copy is aria-hidden so
  // a screen reader hears each fact once.
  const items = TICKER.map((x) => pick(x, locale));

  return (
    <div className="relative overflow-hidden border-t-2 border-ink bg-lime">
      <div
        className="flex w-max gap-8 py-1.5"
        style={{ animation: "y2k-ticker 38s linear infinite" }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-8"
          >
            {items.map((text) => (
              <li
                key={text}
                className="font-pixel whitespace-nowrap text-lg text-forest"
              >
                ★ {text}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
