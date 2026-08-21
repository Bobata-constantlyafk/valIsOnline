import { CONTACT } from "~/data/profile";
import { pick, useT } from "~/lib/i18n";
import { useLocale } from "~/lib/locale";

export function Footer() {
  const t = useT();
  const locale = useLocale();

  // Each link renders only if profile.ts actually holds a value, so the
  // footer never ships an empty mailto: or a link to nowhere.
  const links = [
    CONTACT.email && { href: `mailto:${CONTACT.email}`, label: CONTACT.email },
    CONTACT.linkedin && { href: CONTACT.linkedin, label: "LinkedIn" },
    CONTACT.goodreads && { href: CONTACT.goodreads, label: "Goodreads" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <footer className="mt-20 border-t-2 border-ink bg-forest text-cream">
      <div className="u-page flex flex-col gap-4 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-black text-lime">
            {t("nameFull")}
          </p>
          <p className="font-pixel text-base text-blush">{t("roleLine")}</p>
          <p className="font-pixel mt-1 text-sm text-cream/70">
            {pick(CONTACT.city, locale)} · {t("footerMade")}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="font-pixel y2k-bevel y2k-chrome y2k-press block px-3 py-1 text-base text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
