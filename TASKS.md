# valIsOnline — task board

Tracked in the repo rather than in a chat thread, so the build survives
across sessions. Mark items `[x]` when done; keep the notes.

---

## Standing rules (do not re-litigate)

- **Zero border-radius.** Every corner is a corner. Enforced globally in
  `app/app.css`; a stray `rounded-*` cannot break it.
- **One sizing technique.** `clamp(min, vw, max)` for font-size and padding,
  ceiling = the desktop value. No `text-sm sm:text-base` pairs anywhere.
- **One reduced-motion block**, global, in `app/app.css`. Components never
  ship their own media query.
- **Never mix a custom breakpoint with a built-in one on the same element.**
  Use a single combined range variant instead of two competing variants.
- **A custom class in `app.css` beats a Tailwind utility on the same element**,
  because those classes are written after the `@import "tailwindcss"` and win
  on source order. `.u-nav-panel { display: grid }` silently defeated an
  `sm:hidden` on the same div and left a 2px line under the desktop nav. If a
  custom class sets a property, set its responsive behaviour in the same CSS
  rule — never with a utility.
- **Card grids go through `.u-cards`** — one utility, 1/2/3 columns with
  `grid-auto-rows: 1fr` so every card is the same size. It replaced a
  deliberately staggered "collage" grid: the stagger looked more like 2001 but
  made a 34-item list hard to scan, and uneven tiles read as broken rather
  than as styled. Card text that can run long is clamped, so one article
  cannot set the height of every tile.
- **Typography lives in `app/components/chrome/Page.tsx`.** Page headings are
  a one-file change, never an eight-file hunt.
- **Credit lines follow `app/lib/credits.ts`**: 1 person full name, 2 people
  initials joined by `&`, 3+ first name then "и др." / "et al.".
- **Test real widths in the browser after every responsive change** — 375,
  768, 1280. A passing typecheck proves nothing about layout. Cross-check
  `innerWidth`/`scrollWidth` against element-rect scans and a real
  `scrollTo()` attempt before believing an overflow report.
- **Photos for any list**: Wikimedia Commons only, build the thumb URL as
  `/thumb/X/XX/file/500px-file`, and verify each returns 200. Never a random
  blog.
- **Never paste a secret in chat.** Interactive secret prompts
  (`wrangler secret put`, `gh auth login`) must be run by Bobata in his own
  terminal — the agent cannot type into them.

---

## Done

- [x] 0.1 Voice guide from her published work (4 full articles read)
- [x] 0.2 Article list scraped — 31 pieces, real URLs
- [x] 0.4 Book list — 7 titles from Goodreads, roles confirmed
- [x] 0.5 Portrait sourced and cropped to 600×800 (`public/val.jpg`)
- [x] 1.1 Repo scaffolded — React Router 8 / React 19 / Tailwind 4 / Vite 8
- [x] 1.2 Cloudflare static Worker config, no D1, no R2, no handler
- [x] 1.3 Routes, both languages, 10 prerendered pages
- [x] 1.4 Bilingual layer — `PATHS`, dictionary, locale-aware toggle and meta
- [x] 1.5 Fonts self-hosted, Cyrillic + Latin subsets verified in browser
- [x] 1.6 Design tokens, fluid type scale, Y2K chrome kit
- [x] 2.1–2.3 Hero: window chrome, portrait, glitter name, language badges
- [x] 2.6 Global reduced-motion block
- [x] 3.1–3.4 Articles: schema, cards, filters, previews in her voice
- [x] 4.1–4.4 Books: schema, spine shelf, slide-out detail, keyboard + touch
- [x] 5.1–5.4 About: full prose both languages, languages module
- [x] 6.1–6.2 Contact: email + LinkedIn + Goodreads links, footer block
- [x] 7.1 Titles and descriptions per page, per language
- [x] Zero-radius identity rule applied and enforced
- [x] Shared `Page` / `PageHeader` / `SectionHeading` shell
- [x] Nav fits one row on a phone (was 119px tall, now 57px)
- [x] Responsive verified at 375 / 785 / 1265 — no overflow on any page

---

## Next

### Ship it
- [x] **G1. Git repo.** Pushed to
      https://github.com/Bobata-constantlyafk/valIsOnline on `main`.
      Committed as Boyan Dechev <boyan.dechev@everymatrix.com>, matching the
      bobata-isonline repo; say the word to switch it to a personal address.
- [x] **G2. Cloudflare Pages deploys on every push to `main`** — but via
      `.github/workflows/deploy.yml`, not Cloudflare's GitHub App. The App
      silently stopped triggering builds: settings were correct, commits
      reached GitHub, and three pushes produced zero deployments. Pages
      integrates through a GitHub App rather than a repo webhook, so an empty
      Settings > Webhooks list is normal and is NOT the symptom.
      Build output directory is `build/client`; the React (Vite) preset's
      default of `dist` fails the build.
- [x] **G2b. Actions secrets added.** `CLOUDFLARE_API_TOKEN` (Account >
      Cloudflare Pages > Edit) and `CLOUDFLARE_ACCOUNT_ID`. Pushing to `main`
      now builds, typechecks and deploys on its own — no laptop needed. If a
      run ever fails on the wrangler step, check the token permission first:
      it must be Pages Edit, not Workers and not Read.
- [x] **G2c. One deploy path, not two.** Cloudflare's GitHub App recovered on
      its own and started deploying alongside the Action — two production
      builds per commit, racing, with the later one winning. Automatic
      deployments are now disabled on the Cloudflare side; the Action is the
      only thing that ships. The Git connection stays as a fallback.
- [ ] **G3. Branch + PR flow.** Work on a branch, open a PR, review, merge.
      Note: with Cloudflare's automatic deployments off, branch previews are
      off too — the workflow would need a preview job added to restore them.
- [x] 7.6 Deployed: **https://valisonline.pages.dev** — verified live: all 10
      pages 200 with correct per-language titles, 404 returns a real 404 with
      the styled page, every font subset and image 200, no console errors,
      no horizontal overflow, language toggle lands on the matching page.
- [ ] 7.7 Domain is **val-is.online**, bought at Namecheap. In progress:
      zone added to Cloudflare, two proxied CNAMEs (`@` and `www`) pointing at
      `valisonline.pages.dev`, nameservers still to move from
      dns1/dns2.registrar-servers.com. Then Pages > Custom domains, SSL Full
      (strict), and a 301 from www to the apex.
      NOTE: `valisonline.pages.dev` can never be switched off, so the
      duplicate-content fix is canonical tags, not a redirect.
- [ ] 7.1b Once the domain is Active, all in one push, keyed off a single
      `SITE_ORIGIN`: `hreflang` alternates (bg / en / x-default), a
      `<link rel="canonical">` per page, absolute `og:url`, `sitemap.xml` and
      `robots.txt`.

### Mobile
- [ ] **M1. Full mobile pass on a real phone**, not just a resized viewport:
      tap targets ≥44px, the shelf strip's scroll affordance, sticky-nav
      behaviour with the iOS URL bar, and the ticker's speed at 375px.
- [x] M-nav. Phone nav is a burger: brand, then the language toggle, then the
      three lines. Opens a panel that animates 0fr -> 1fr, folds the bars into
      an X, closes on Escape, on an outside tap, and on navigation. Links are
      `inert` while collapsed so they cannot be tabbed into. Burger and toggle
      are both 44px. Verified at 375 (panel 270px, five links) and 1280 (panel
      display:none, five links back in the bar).
- [ ] M2. Hero on a small phone (320px) — the portrait and the name compete
      for the same row; check the stack order reads well.
- [ ] M3. `100dvh` rather than `100vh` anywhere a full-height section appears,
      so mobile browser chrome does not clip it.

### Health
- [ ] **H1. Efficiency pass.** Measure before changing anything: Lighthouse on
      the live site, then real numbers for JS shipped, font bytes actually
      used per page, and image weight. Current baseline: 1.0MB build,
      entry.client 184KB and jsx-runtime 84KB uncompressed. The site is fully
      prerendered, so ask the sharper question — how much of that JS is needed
      at all, given only the hero, the shelf, the filters and the nav are
      interactive. Consider whether the whole thing could hydrate as islands
      rather than a full client bundle.
- [ ] **H2. Structure / SOLID pass.** Honest review of the code, not a
      rubber stamp. Known smells to look at: `useT()` returns an overloaded
      function whose types are fiddly; data files mix schema, content and
      provenance comments; `ArticleCard` reaches into `OUTLETS` itself instead
      of being handed what it renders; `TopNav` holds menu state, keyboard
      handling and layout in one component. Split only where it removes real
      duplication — this is a small site and premature abstraction would cost
      more than it saves.
- [ ] **H3. Vulnerability pass, then fix.** `npm audit --omit=dev` reports 0
      today, so this is not about the lockfile alone. Check: outbound links
      all carry `rel="noreferrer"`, nothing renders untrusted HTML, no
      `dangerouslySetInnerHTML` anywhere, the Actions workflow cannot leak its
      secrets into logs, the `CLOUDFLARE_API_TOKEN` is scoped to Pages Edit
      only, and add security headers via `public/_headers`
      (Content-Security-Policy, X-Content-Type-Options, Referrer-Policy,
      Permissions-Policy). A static site's real attack surface is the deploy
      pipeline and the headers, not the runtime.
- [ ] **H4. Dependency freshness.** Currently behind: wrangler 4.124 -> 4.126,
      @cloudflare/workers-types, @types/react-dom. Deliberately NOT bumping
      TypeScript 5.9 -> 7.0 or @types/node 22 -> 26 without a reason; both are
      major jumps on a site that builds fine.

### Polish
- [ ] 2.4 Pick ONE signature hero motion and commit to it
- [x] 2.5 Sparkle cursor — `app/components/chrome/SparkleCursor.tsx`. It does
      NOT replace the system arrow on purpose: a portfolio where the cursor is
      a picture is one where people misjudge what is clickable. Mouse only
      (`hover: hover` + `pointer: fine`), off entirely under
      prefers-reduced-motion, capped at 24 live sparkles, and each one is
      removed by whichever fires first — the animation or a timer. The timer
      is load-bearing: a hidden tab freezes the document timeline, so
      `onfinish` never arrives.
- [ ] 4.6 Spine widths scaled by real book thickness
- [ ] 4.7 "translated from" badge on the spine itself, not only in the detail
- [x] 7.2 Favicon (svg + ico + 180px apple icon, square lime V on forest) and
      a bilingual 404 page, copied to `build/client/404.html` by
      `scripts/postbuild.mjs` for Cloudflare's `not_found_handling`.
- [x] 7.3 Contrast audit — 0 failures on all 7 pages, both languages. Tightest
      pair in use is ink-soft on blush at 5.15:1. Fixed: language codes were
      bubblegum on cream (2.39) and are now ink-on-bubblegum chips (6.04); the
      decorative quote mark was lilac on cream (1.87), now ink-soft.
      The rule is recorded at the top of `app/app.css`: lime, bubblegum,
      lilac and sky are FILL colours, never text colours on cream.
- [ ] 7.4 Cross-browser check (Safari especially: `background-clip: text`)

### Content
- [x] 0.3 Литературен вестник dig — five more pieces found and verified by
      byline (search engines credited her with one that is actually by Диляна
      Коджаманова; every byline was checked at the source)
- [x] Quotes section — verbatim lines from her published work, attributed and
      linked, in `app/data/quotes.ts`. Never mixed with composed prose.
- [x] 3.5 Previews written for the remaining 25 articles — all 35 now have
      one. Every article was fetched and read first; the numbers and names in
      each preview come out of the piece itself, never out of its title.
- [ ] 4.8 Real cover images for the seven books
- [x] Email corrected to `valentina.istatkova@gmail.com`
- [x] Goodreads book links — the first set of ids was constructed rather than
      scraped and every one was wrong. Replaced with ids read off her author
      page; they resolve to the Bulgarian editions.
- [x] Original book titles verified against the original publishers. Two were
      wrong from back-translating the Bulgarian: "The Lost and Found
      Labyrinth" is really *The Labyrinth of Lost and Found (The Whisperwicks
      #1)*, and "Matakin" is really *Mataquín*.
      **RULE: never construct an id, a URL, or an original title. Read it off
      the source, then verify it.**

---

## Open questions

- Val should read the About page and rewrite anything that is not how she
  would put it. Three sections end in `[to be continued]` and are hers to
  finish; the rest carry `// SOURCE:` notes in `app/data/about.ts` saying
  exactly where each fact came from.


### Do not undo
- **The 10te.bg motivation listicle (2025) is deliberately off the site.** It
  is the same article as "Седем причини да губим мотивация" (Списание VIP,
  2022) reworked for a second outlet — near-identical opening sentence, same
  reasons. The 2022 original stays; the rework does not. A future scrape of
  10te.bg will find it again: leave it out.
- **„Свободата на словото" (Списание VIP, 2022) is deliberately off the site.**
  Val's call. It is her political piece — press-freedom index, hate speech, a
  hard paragraph about Bulgaria. Two quotes from it were pulled first, then the
  listing itself. It is real, byline-verified work, so a future pass scraping
  spisanievip.com WILL find it again: leave it out. Same for the two quotes
  („Нормата ни интегрира…" and „…не са свобода, а свободия").

### Settled
- **Seven languages** is current. Her 2022 bio said five; that bio is four
  years old and is quoted on the site as a 2022 document, not as today's fact.
- ***Бандитът и близначките Матакин*** — she reviewed the Spanish original for
  Литературен вестник in 2024 and **translated** the Bulgarian edition. Two
  separate jobs. The shelf now says translation, and the book carries a note
  saying so. Final split: **five translations, two edits.**
