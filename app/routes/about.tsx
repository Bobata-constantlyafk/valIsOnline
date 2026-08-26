import { Page, PageHeader, SectionHeading } from "~/components/chrome/Page";
import { Quotes } from "~/components/chrome/Quotes";
import { ABOUT, ABOUT_LEAD } from "~/data/about";
import { LANGUAGES } from "~/data/profile";
import { pick, useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";
import { metaFor } from "~/lib/meta";

export function meta({ location }: { location: { pathname: string } }) {
  return metaFor("about", location.pathname);
}

export default function About() {
  const t = useT();
  const locale = useLocale();

  return (
    <Page narrow>
      <PageHeader title={t("aboutTitle")} />

      <p className="text-pretty text-xl leading-relaxed">
        {pick(ABOUT_LEAD, locale)}
      </p>

      <div className="mt-10 space-y-10">
        {ABOUT.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <SectionHeading id={section.id}>
              {pick(section.heading, locale)}
            </SectionHeading>

            <div className="mt-3 space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-pretty leading-relaxed">
                  {pick(p, locale)}
                </p>
              ))}
            </div>

            {section.quote && (
              <blockquote className="y2k-bevel u-card-p mt-5 bg-blush">
                <p className="text-pretty leading-relaxed">
                  <span aria-hidden className="font-display text-ink-soft">
                    “
                  </span>
                  {pick(section.quote, locale)}
                </p>
                <footer className="font-pixel mt-3 text-base text-ink-soft">
                  — {pick(section.quote.source, locale)}
                  {locale === "en" && <> · {t("translatedQuote")}</>}
                </footer>
              </blockquote>
            )}

            {section.id === "languages" && (
              <>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {LANGUAGES.map((l) => (
                    <li
                      key={l.code}
                      className="y2k-bevel flex items-baseline gap-2 bg-cream px-3 py-1.5"
                    >
                      <span className="font-pixel y2k-bevel bg-bubblegum px-1.5 text-base text-ink">
                        {l.code}
                      </span>
                      <span className="font-semibold">
                        {pick(l.name, locale)}
                      </span>
                      <span className="font-pixel ml-auto text-base text-ink-soft">
                        {pick(l.level, locale)}
                        {l.worksFrom ? " ★" : ""}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-pixel mt-2 text-base text-ink-soft">
                  ★ — {t("worksFromNote")}
                </p>
              </>
            )}
          </section>
        ))}

        <Quotes />
      </div>
    </Page>
  );
}
