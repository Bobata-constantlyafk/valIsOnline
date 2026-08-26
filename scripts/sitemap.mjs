import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, posix } from "node:path";

/** Builds sitemap.xml by reading the pages that were just prerendered.
 *
 *  It deliberately does NOT import app/lib/locale.ts to get the path list.
 *  That worked locally on Node 24, which strips TypeScript, and would have
 *  failed in CI on the Node 22 that .nvmrc pins. Reading the built output
 *  removes the dependency and is stricter anyway: the sitemap can only
 *  contain pages that actually shipped, carrying the exact canonical and
 *  hreflang values those pages declare. If a page's tags are wrong, the
 *  sitemap is wrong in the same way instead of quietly disagreeing.
 */

const ROOT = "build/client";
const SKIP = new Set(["404.html", "__spa-fallback.html"]);

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "assets" || entry.name === "404") continue;
      yield* htmlFiles(full);
    } else if (entry.name.endsWith(".html") && !SKIP.has(entry.name)) {
      yield full;
    }
  }
}

const attr = (tag, name) =>
  tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1] ?? null;

const pages = [];
for await (const file of htmlFiles(ROOT)) {
  const html = await readFile(file, "utf8");
  const links = html.match(/<link\b[^>]*>/gi) ?? [];

  const canonical = links
    .filter((l) => /rel="canonical"/i.test(l))
    .map((l) => attr(l, "href"))[0];
  if (!canonical) {
    console.error(`sitemap: no canonical in ${file} — skipping`);
    continue;
  }

  const alternates = links
    .filter((l) => /rel="alternate"/i.test(l) && /hreflang=/i.test(l))
    .map((l) => ({ lang: attr(l, "hreflang"), href: attr(l, "href") }))
    .filter((a) => a.lang && a.href);

  pages.push({ canonical, alternates });
}

pages.sort((a, b) => a.canonical.localeCompare(b.canonical));

const today = new Date().toISOString().slice(0, 10);
const isHome = (url) => new URL(url).pathname.split("/").filter(Boolean).length <= 1;

const body = pages.map(({ canonical, alternates }) =>
  [
    "  <url>",
    `    <loc>${canonical}</loc>`,
    ...alternates.map(
      (a) =>
        `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`,
    ),
    `    <lastmod>${today}</lastmod>`,
    `    <priority>${isHome(canonical) ? "1.0" : "0.8"}</priority>`,
    "  </url>",
  ].join("\n"),
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...body,
  "</urlset>",
  "",
].join("\n");

await writeFile(posix.join(ROOT, "sitemap.xml"), xml, "utf8");
console.log(`sitemap: ${pages.length} urls -> ${ROOT}/sitemap.xml`);
