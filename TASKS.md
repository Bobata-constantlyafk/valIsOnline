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
- **Broken grids go through `.u-collage`** — one utility that stacks to a
  single column and zeroes its offsets on a phone.
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
- [ ] **G2. Cloudflare Pages/Workers Git integration.** Connect the GitHub
      repo so every push to `main` builds and deploys on its own. Build
      command `npm run build`, output `build/client`. After this, Bobata can
      send instructions from a phone and the agent pushes; no local deploy
      step, no `wrangler` token on anyone's laptop.
- [ ] **G3. Branch + PR flow** so changes are reviewable from a phone before
      they go live, with a preview URL per branch.
- [ ] 7.6 First deploy on the free `*.workers.dev` subdomain
- [ ] 7.7 Buy `val-is-online.io` (check availability; `.io` runs ~$35–60/yr),
      point DNS at the Worker, wire the certificate, redirect from workers.dev
- [ ] 7.1b `hreflang` alternates — needs the real origin, so it waits for 7.7

### Mobile
- [ ] **M1. Full mobile pass on a real phone**, not just a resized viewport:
      tap targets ≥44px, the shelf strip's scroll affordance, sticky-nav
      behaviour with the iOS URL bar, and the ticker's speed at 375px.
- [ ] M2. Hero on a small phone (320px) — the portrait and the name compete
      for the same row; check the stack order reads well.
- [ ] M3. `100dvh` rather than `100vh` anywhere a full-height section appears,
      so mobile browser chrome does not clip it.

### Polish
- [ ] 2.4 Pick ONE signature hero motion and commit to it
- [ ] 2.5 Sparkle / star cursor
- [ ] 4.6 Spine widths scaled by real book thickness
- [ ] 4.7 "translated from" badge on the spine itself, not only in the detail
- [ ] 7.2 Favicon and a 404 page, both Y2K-styled
- [ ] 7.3 Contrast audit — every colour pair, both grounds
- [ ] 7.4 Cross-browser check (Safari especially: `background-clip: text`)

### Content
- [x] 0.3 Литературен вестник dig — five more pieces found and verified by
      byline (search engines credited her with one that is actually by Диляна
      Коджаманова; every byline was checked at the source)
- [x] Quotes section — verbatim lines from her published work, attributed and
      linked, in `app/data/quotes.ts`. Never mixed with composed prose.
- [ ] 3.5 Previews for the remaining ~25 articles (the 10te and VIP ones)
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
  would put it. The composed sections are marked with `// SOURCE:` notes in
  `app/data/about.ts` saying exactly where each fact came from.
- Does Val want the full-length portrait used anywhere (`public/val-full.jpg`)?

### Do not undo
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
