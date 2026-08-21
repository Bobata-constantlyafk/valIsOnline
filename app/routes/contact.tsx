import { Page, PageHeader } from "~/components/chrome/Page";
import { CONTACT } from "~/data/profile";
import { pick, useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";
import { metaFor } from "~/lib/meta";

export function meta({ location }: { location: { pathname: string } }) {
  return metaFor("contact", location.pathname);
}

export default function Contact() {
  const t = useT();
  const locale = useLocale();

  // Static site, so there is no form and no server to receive one — these
  // are three outbound links. Each appears only once profile.ts has a real
  // value for it.
  const buttons = [
    CONTACT.email && {
      href: `mailto:${CONTACT.email}`,
      label: t("emailCta"),
      sub: CONTACT.email,
      tone: "bg-lime text-forest",
    },
    CONTACT.linkedin && {
      href: CONTACT.linkedin,
      label: t("linkedinCta"),
      sub: "linkedin.com",
      tone: "bg-sky text-ink",
    },
    CONTACT.goodreads && {
      href: CONTACT.goodreads,
      label: t("goodreadsCta"),
      sub: "goodreads.com",
      tone: "bg-bubblegum text-ink",
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    sub: string;
    tone: string;
  }[];

  return (
    <Page narrow>
      <PageHeader title={t("contactTitle")} lead={t("contactLead")} />

      <ul className="grid gap-[var(--gap-grid)] sm:grid-cols-3">
        {buttons.map((b) => (
          <li key={b.href}>
            <a
              href={b.href}
              target={b.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className={`y2k-bevel y2k-press u-card-p flex h-full flex-col gap-1 ${b.tone}`}
            >
              <span className="font-display text-xl font-black">{b.label}</span>
              <span className="font-pixel break-all text-base opacity-80">
                {b.sub} ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      {(!CONTACT.email || !CONTACT.linkedin) && (
        <p className="font-pixel mt-6 text-lg text-ink-soft">
          {t("contactPending")}
        </p>
      )}

      <p className="font-pixel mt-10 text-lg text-ink-soft">
        📍 {pick(CONTACT.city, locale)}
      </p>
    </Page>
  );
}
