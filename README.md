# valIsOnline

Personal site and portfolio for **Valentina "Val" Istatkova** — book editor and
translator from English and Spanish, based in Sofia.

The site collects the two halves of her work. **Books**: seven published
titles, five of them her translations and two her edits, shown as a shelf of
spines you pull out. **Writing**: thirty-six published articles across
Литературен вестник, Списание VIP and 10te.bg, each with a preview and a link
to where it ran. Plus an About page in her own register, a quotes section that
only ever uses her printed sentences, and contact.

Fully bilingual — Bulgarian is the default and English lives under `/en`.

**Look:** early-internet Y2K. Chrome bevels, a fake desktop window around the
hero, a glitter wordmark, a scrolling ticker, acid green against bubblegum and
lilac. **Every corner on the site is a corner** — zero border-radius, enforced
globally rather than by discipline.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # prerenders 10 static pages into build/client
npm run typecheck
npm run deploy     # build + wrangler deploy
```

Node 22 (`.nvmrc`).

## Deploying

Live at **https://valisonline.pages.dev**.

This is a **Cloudflare Pages** project connected to GitHub, so every push to
`main` builds and deploys. Dashboard settings:

| dashboard field | value |
| --- | --- |
| Project name | `valisonline` |
| Production branch | `main` |
| Framework preset | React (Vite) |
| Build command | `npm run build` |
| Build output directory | `build/client` — **not `dist`** |
| Root directory | blank |
| Environment variables | none needed |

`build/client` is the one field that is easy to get wrong: the framework
preset fills in `dist`, but React Router writes to `build/client`, and the
build fails at the very last step with `Output directory "dist" not found`.

`wrangler.jsonc` carries only what Pages reads — `name`,
`pages_build_output_dir` and `compatibility_date`. Workers-only keys (`main`,
`assets`, `observability`) are invalid in a Pages config: Cloudflare logs
"does not appear to be valid" and silently skips the whole file.

The 404 page needs no configuration. Pages serves `404.html` from the root of
the output directory for any unmatched path, and `scripts/postbuild.mjs` puts
it there after every build — including Cloudflare's.

Node version comes from `.nvmrc` (22); the build image would otherwise pick a
newer default.

## How it is built

React Router 8 on React 19, Tailwind 4, Vite 8, deployed to a Cloudflare
Worker. `ssr: false` — every route is prerendered to HTML at build time and
served as a static asset. There is no server, no database, no bucket and no
request handler: contact is two outbound links, and all content lives in the
repo as typed data.

## Where things live

| what | where |
| --- | --- |
| Books on the shelf | `app/data/books.ts` |
| Published articles | `app/data/articles.ts` |
| About page prose, both languages | `app/data/about.ts` |
| Her verbatim quotes | `app/data/quotes.ts` |
| Languages, ticker, contact links, portrait | `app/data/profile.ts` |
| Every UI string, both languages | `app/lib/i18n.ts` |
| URL ↔ language map, prerender list | `app/lib/locale.ts` |
| Per-page titles and descriptions | `app/lib/meta.ts` |
| Credit-line format | `app/lib/credits.ts` |
| Palette, fluid type scale, Y2K kit | `app/app.css` |
| Shared page shell and headings | `app/components/chrome/Page.tsx` |

Adding a page means adding it to `PATHS` in `app/lib/locale.ts` — that one
entry creates both language routes and both prerendered files.

## House rules

`TASKS.md` holds the task board **and the standing design rules** — the
zero-radius identity, clamp-only sizing, the single global reduced-motion
block, the shared page shell, and the rule that no id, URL or original title
is ever constructed rather than read from its source. Read it before changing
anything.

## Fonts

Self-hosted in `public/fonts`, Cyrillic and Latin as separate subsets. **Any
replacement face must cover Cyrillic** — most of Val's work is written in it,
and a Latin-only face renders her titles as empty boxes. Check first:

```bash
curl -s "https://fonts.googleapis.com/css2?family=Some+Font" | grep cyrillic
```

## Accuracy

The site makes factual claims about a real person's published work, so:
every article byline was verified at the source, every Goodreads id was read
off her author page rather than constructed, and every original book title was
checked against its original publisher. The About page carries `// SOURCE:`
comments in `app/data/about.ts` recording where each fact came from and which
sentences are composed rather than hers.
