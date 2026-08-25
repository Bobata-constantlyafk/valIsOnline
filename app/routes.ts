import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { PAGE_KEYS, PATHS } from "./lib/locale";

const FILES: Record<(typeof PAGE_KEYS)[number], string> = {
  home: "routes/home.tsx",
  articles: "routes/articles.tsx",
  books: "routes/books.tsx",
  about: "routes/about.tsx",
  contact: "routes/contact.tsx",
};

// Each page module is mounted twice — once per language — so the two
// versions share one component and differ only in the strings it reads.
// Explicit ids are required because the same file backs both routes.
const mount = (lang: "bg" | "en") =>
  PAGE_KEYS.map((key) => {
    const path = PATHS[key][lang];
    const id = `${lang}-${key}`;
    return path === "/"
      ? index(FILES[key], { id })
      : route(path.slice(1), FILES[key], { id });
  });

export default [
  layout("components/layout/SiteLayout.tsx", [
    ...mount("bg"),
    ...mount("en"),
    // Single page for both languages: Cloudflare serves it for any unmatched
    // URL, which may carry no language prefix at all.
    route("404", "routes/notFound.tsx", { id: "not-found" }),
  ]),
] satisfies RouteConfig;
