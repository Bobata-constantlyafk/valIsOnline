import { useEffect, useId, useRef, useState } from "react";
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

/** Closes a popover on Escape and on a tap outside it, and hands focus back
 *  to the trigger. Both the language menu and the burger need exactly this. */
function useDismiss(
  open: boolean,
  close: () => void,
  boxRef: React.RefObject<HTMLElement | null>,
  triggerRef: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      close();
      triggerRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, close, boxRef, triggerRef]);
}

/** Five languages is too many for a toggle, so this is a menu. Each language
 *  is listed under its own name — a French speaker looks for "Français", not
 *  for whatever the current page calls French — and each entry links to the
 *  SAME page in that language rather than to the homepage. */
function LanguageMenu() {
  const t = useT();
  const locale = useLocale();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => setOpen(false), [pathname]);
  useDismiss(open, () => setOpen(false), boxRef, btnRef);

  return (
    <div ref={boxRef} className="relative shrink-0">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="menu"
        aria-label={t("languageMenu")}
        className="font-pixel y2k-bevel y2k-press flex h-11 items-center gap-1 bg-lilac px-3 text-base text-ink sm:h-auto sm:py-1"
      >
        {LOCALE_SHORT[locale]}
        <span aria-hidden className="text-xs">
          ▾
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="menu"
          className="y2k-bevel absolute right-0 top-[calc(100%+0.35rem)] z-10 min-w-[9rem] bg-cream py-1"
        >
          {LOCALES.map((l) => {
            const current = l === locale;
            return (
              <li key={l} role="none">
                <Link
                  role="menuitem"
                  to={hrefInLocale(pathname, l)}
                  lang={l}
                  aria-current={current ? "true" : undefined}
                  className={[
                    "font-pixel flex h-11 items-center gap-2 px-3 text-base sm:h-9",
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
          })}
        </ul>
      )}
    </div>
  );
}

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
  useDismiss(open, () => setOpen(false), headerRef, burgerRef);

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

        {/* Sits immediately left of the burger on a phone, and at the far
            right on desktop. ml-auto only does anything when the link list is
            hidden. */}
        <div className="ml-auto sm:ml-0">
          <LanguageMenu />
        </div>

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
