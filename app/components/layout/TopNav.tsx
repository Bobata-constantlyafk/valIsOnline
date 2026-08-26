import { useEffect, useId, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Close on navigation. Without this the panel stays open over the page you
  // just asked for.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus(); // put focus back where it came from
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "font-pixel y2k-bevel y2k-press block px-3 py-1 text-base lowercase",
      isActive ? "bg-lime text-forest" : "y2k-chrome text-ink hover:bg-blush",
    ].join(" ");

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur"
    >
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

        {/* Desktop: the links sit in the bar. On a phone they move into the
            panel below, so the sticky header stays one short row. */}
        <ul
          className="hidden min-w-0 flex-1 items-center gap-1.5 overflow-x-auto py-1 sm:flex"
          style={{ scrollbarWidth: "none" }}
        >
          {ITEMS.map(({ key, label }) => (
            <li key={key} className="shrink-0">
              <NavLink to={PATHS[key][locale]} end={key === "home"} className={linkClass}>
                {t(label)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Language toggle sits immediately left of the burger on a phone, and
            at the far right on desktop. One element, one position in the DOM —
            ml-auto only does anything when the link list is hidden. */}
        <Link
          to={otherLocaleHref(pathname)}
          lang={locale === "bg" ? "en" : "bg"}
          aria-label={t("langSwitchLabel")}
          className="font-pixel y2k-bevel y2k-press ml-auto flex h-11 shrink-0 items-center bg-lilac px-3 text-base text-ink sm:ml-0 sm:h-auto sm:py-1"
        >
          {t("langSwitch")}
        </Link>

        <button
          ref={burgerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={t(open ? "menuClose" : "menuOpen")}
          className="y2k-bevel y2k-chrome y2k-press flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          {/* Three bars that fold into an X. The middle one fades; the outer
              two meet in the centre and cross. */}
          <span
            aria-hidden
            className={`block h-[3px] w-5 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden
            className={`block h-[3px] w-5 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden
            className={`block h-[3px] w-5 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* The panel animates its height with a 0fr -> 1fr grid row, which needs
          no fixed height and no measuring. The global reduced-motion block in
          app.css freezes the transition, so it simply appears instead. */}
      <div
        id={panelId}
        data-open={open}
        className="u-nav-panel border-t-2 border-ink bg-cream"
      >
        <div className="overflow-hidden">
          {/* inert when closed so the links cannot be tabbed into while the
              panel is collapsed to zero height. */}
          <ul className="u-page flex flex-col gap-1.5 py-3" inert={!open}>
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
