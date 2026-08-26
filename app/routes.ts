import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { LOCALES, PAGE_KEYS, PATHS } from "./lib/locale";

const FILES: Record<(typeof PAGE_KEYS)[number], string> = {
  home: "routes/home.tsx",
  articles: "routes/articles.tsx",
  books: "routes/books.tsx",
  about: "routes/about.tsx",
  contact: "routes/contact.tsx",
};

// Each page module is mounted once per language — five languages, five pages,
// twenty-five routes — so the versions share one component and differ only in
// the strings it reads. Explicit ids are required because the same file backs
// every mount of it.
const mount = (lang: (typeof LOCALES)[number]) =>
  PAGE_KEYS.map((key) => {
    const path = PATHS[key][lang];
    const id = `${lang}-${key}`;
    return path === "/"
      ? index(FILES[key], { id })
      : route(path.slice(1), FILES[key], { id });
  });

export default [
  layout("components/layout/SiteLayout.tsx", [
    ...LOCALES.flatMap(mount),
    // One page for every language: Cloudflare serves it for any unmatched
    // URL, which may carry no language prefix at all.
    route("404", "routes/notFound.tsx", { id: "not-found" }),
  ]),
] satisfies RouteConfig;
