import { Link, NavLink, useLocation } from "react-router";
import { useT } from "~/lib/i18n";
import { PATHS, otherLocaleHref, useLocale } from "~/lib/locale";

const ITEMS = [
  { key: "home", label: "navHome" },
  { key: "articles", label: "navArticles" },
  { key: "books", label: "navBooks" },
  { key: "about", label: "navAbout" },
  { key: "contact", label: "navContact" },
] as const;

export function TopNav() {
  const t = useT();
  const locale = useLocale();
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      {/* One row at every width. The link strip scrolls sideways instead of
          wrapping, so the sticky header stays ~44px tall on a phone rather
          than growing to three rows and eating the screen. Same markup on
          desktop, where nothing needs to scroll — no breakpoint variants,
          nothing that can fall out of sync. */}
      <nav
        aria-label={locale === "bg" ? "Основна навигация" : "Main navigation"}
        className="u-page flex items-center gap-2 py-2"
      >
        <Link
          to={PATHS.home[locale]}
          className="font-display shrink-0 text-lg font-black tracking-tight"
        >
          val<span className="text-bubblegum">Is</span>Online
        </Link>

        <ul
          className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto py-1"
          style={{ scrollbarWidth: "none" }}
        >
          {ITEMS.map(({ key, label }) => (
            <li key={key} className="shrink-0">
              <NavLink
                to={PATHS[key][locale]}
                end={key === "home"}
                className={({ isActive }) =>
                  [
                    "font-pixel y2k-bevel y2k-press block px-3 py-1 text-base lowercase",
                    isActive
                      ? "bg-lime text-forest"
                      : "y2k-chrome text-ink hover:bg-blush",
                  ].join(" ")
                }
              >
                {t(label)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Goes to the same page in the other language, never to the
            homepage — losing your place is the classic toggle bug. */}
        <Link
          to={otherLocaleHref(pathname)}
          lang={locale === "bg" ? "en" : "bg"}
          aria-label={t("langSwitchLabel")}
          className="font-pixel y2k-bevel y2k-press shrink-0 bg-lilac px-3 py-1 text-base text-ink"
        >
          {t("langSwitch")}
        </Link>
      </nav>
    </header>
  );
}
