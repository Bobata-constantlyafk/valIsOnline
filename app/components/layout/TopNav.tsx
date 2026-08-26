import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useT } from "~/lib/i18n";
import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_SHORT,
  PATHS,
  hrefInLocale,
  useLocale,
} from "~/lib/locale";

const ITEMS = [
  { key: "home", label: "navHome" },
  { key: "articles", label: "navArticles" },
  { key: "books", label: "navBooks" },
  { key: "about", label: "navAbout" },
  { key: "contact", label: "navContact" },
] as const;

/** Only one of the two can be open at a time — opening the language list
 *  closes the nav panel and the other way round. Two independent booleans
 *  would let both slide open at once and stack under the header. */
type Panel = "nav" | "lang" | null;

export function TopNav() {
  const t = useT();
  const locale = useLocale();
  const { pathname } = useLocation();
  const [panel, setPanel] = useState<Panel>(null);
  const navPanelId = useId();
  const langPanelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const langRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setPanel(null), []);
  const toggle = (which: Exclude<Panel, null>) =>
    setPanel((p) => (p === which ? null : which));

  // Close on navigation. Without this a panel stays open over the page you
  // just asked for.
  useEffect(close, [pathname, close]);

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const back = panel === "nav" ? burgerRef : langRef;
      close();
      back.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [panel, close]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "font-pixel y2k-bevel y2k-press block px-3 py-1 text-base lowercase",
      isActive ? "bg-lime text-forest" : "y2k-chrome text-ink hover:bg-blush",
    ].join(" ");

  /** The five languages, used twice: once in the desktop dropdown and once in
   *  the phone panel. Each entry links to the SAME page in that language, and
   *  each is named in its own language. */
  const languageLinks = (rowClass: string) =>
    LOCALES.map((l) => {
      const current = l === locale;
      return (
        <li key={l} role="none">
          <Link
            role="menuitem"
            to={hrefInLocale(pathname, l)}
            lang={l}
            aria-current={current ? "true" : undefined}
            className={[
              rowClass,
              current ? "bg-lime text-forest" : "text-ink hover:bg-blush",
            ].join(" ")}
          >
            <span aria-hidden className="w-7 shrink-0">
              {LOCALE_SHORT[l]}
            </span>
            {LOCALE_NAMES[l]}
          </Link>
        </li>
      );
    });

  const langOpen = panel === "lang";
  const navOpen = panel === "nav";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur"
    >
      <nav
        aria-label={t("navLabel")}
        className="u-page flex items-center gap-2 py-2"
      >
        <Link
          to={PATHS.home[locale]}
          className="font-display shrink-0 text-lg font-black tracking-tight"
        >
          val<span className="text-bubblegum">Is</span>Online
        </Link>

        {/* Desktop: the links sit in the bar. On a phone they move into the
            panel below, so the sticky header stays one short row. */}
        <ul
          className="hidden min-w-0 flex-1 items-center gap-1.5 overflow-x-auto py-1 sm:flex"
          style={{ scrollbarWidth: "none" }}
        >
          {ITEMS.map(({ key, label }) => (
            <li key={key} className="shrink-0">
              <NavLink
                to={PATHS[key][locale]}
                end={key === "home"}
                className={linkClass}
              >
                {t(label)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Sits immediately left of the burger on a phone and at the far right
            on desktop. ml-auto only bites when the link list is hidden. */}
        <div className="relative ml-auto shrink-0 sm:ml-0">
          <button
            ref={langRef}
            type="button"
            onClick={() => toggle("lang")}
            aria-expanded={langOpen}
            aria-controls={langPanelId}
            aria-haspopup="menu"
            aria-label={t("languageMenu")}
            className="font-pixel y2k-bevel y2k-press flex h-11 items-center gap-1 bg-lilac px-3 text-base text-ink sm:h-auto sm:py-1"
          >
            {LOCALE_SHORT[locale]}
            {/* Turns to point up when open, the way the burger folds to an X:
                the same "this control is open" gesture in both places. */}
            <span
              aria-hidden
              className={`text-xs transition-transform duration-200 ${
                langOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          {/* Desktop only. On a phone the same list appears in the sliding
              panel below the header instead, so the language control and the
              burger behave identically there. */}
          {langOpen && (
            <ul
              role="menu"
              className="y2k-bevel absolute right-0 top-[calc(100%+0.35rem)] z-10 hidden min-w-[9rem] bg-cream py-1 sm:block"
            >
              {languageLinks(
                "font-pixel flex h-9 items-center gap-2 px-3 text-base",
              )}
            </ul>
          )}
        </div>

        <button
          ref={burgerRef}
          type="button"
          onClick={() => toggle("nav")}
          aria-expanded={navOpen}
          aria-controls={navPanelId}
          aria-label={t(navOpen ? "menuClose" : "menuOpen")}
          className="y2k-bevel y2k-chrome y2k-press flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          {/* Three bars that fold into an X. The middle one fades; the outer
              two meet in the centre and cross. */}
          <span
            aria-hidden
            className={`block h-[3px] w-5 bg-ink transition-transform duration-200 ${
              navOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden
            className={`block h-[3px] w-5 bg-ink transition-opacity duration-200 ${
              navOpen ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden
            className={`block h-[3px] w-5 bg-ink transition-transform duration-200 ${
              navOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Both panels animate their height with a 0fr -> 1fr grid row, which
          needs no fixed height and no measuring, and both are phone-only —
          `.u-nav-panel` carries its own `display: none` above 40rem. The
          global reduced-motion block freezes the transition, so they simply
          appear instead. */}
      <div
        id={langPanelId}
        data-open={langOpen}
        className="u-nav-panel border-t-2 border-ink bg-cream"
      >
        <div className="overflow-hidden">
          <ul
            role="menu"
            className="u-page flex flex-col gap-1.5 py-3"
            inert={!langOpen}
          >
            {languageLinks(
              "font-pixel y2k-bevel flex h-11 items-center gap-2 px-3 text-base",
            )}
          </ul>
        </div>
      </div>

      <div
        id={navPanelId}
        data-open={navOpen}
        className="u-nav-panel border-t-2 border-ink bg-cream"
      >
        <div className="overflow-hidden">
          {/* inert when closed so the links cannot be tabbed into while the
              panel is collapsed to zero height. */}
          <ul className="u-page flex flex-col gap-1.5 py-3" inert={!navOpen}>
            {ITEMS.map(({ key, label }) => (
              <li key={key}>
                <NavLink
                  to={PATHS[key][locale]}
                  end={key === "home"}
                  className={({ isActive }) =>
                    `${linkClass({ isActive })} flex h-11 items-center`
                  }
                >
                  {t(label)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
