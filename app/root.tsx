import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { localeFromPath } from "./lib/locale";

export const links: Route.LinksFunction = () => [
  // SVG for anything modern, ICO because browsers probe /favicon.ico anyway,
  // PNG for an iOS home-screen tile.
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
  { rel: "apple-touch-icon", href: "/icon-180.png" },
  // Only the two faces that paint above the fold get preloaded; the rest
  // arrive with the stylesheet. Both alphabets are preloaded because the
  // hero renders her name in whichever one the current language uses.
  {
    rel: "preload",
    href: "/fonts/unbounded-900-cyrillic.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/unbounded-900-latin.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // The prerender writes one HTML file per route, so this resolves to the
  // right value at build time and each file ships the correct lang tag.
  const locale = localeFromPath(useLocation().pathname);
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06301f" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-pixel text-6xl text-bubblegum">
        {is404 ? "404" : "!!!"}
      </p>
      <h1 className="font-display text-2xl">
        {is404 ? "Няма такава страница / No such page" : "Нещо се счупи / Something broke"}
      </h1>
      <a
        href="/"
        className="y2k-bevel y2k-chrome y2k-press font-pixel px-5 py-2 text-lg"
      >
        ← обратно / back
      </a>
    </main>
  );
}
