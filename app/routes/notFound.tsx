import { Link } from "react-router";

/** One static 404 for the whole site. It is served by Cloudflare for any
 *  unmatched URL, including URLs that carry no language prefix, so it cannot
 *  know which language the visitor wanted — it shows both. */
export function meta() {
  return [
    { title: "404 — valIsOnline" },
    { name: "robots", content: "noindex" },
  ];
}

export default function NotFound() {
  return (
    <section className="u-page-narrow u-section-y text-center">
      <p aria-hidden className="font-pixel text-6xl text-bubblegum">
        4<span className="y2k-blink">0</span>4
      </p>

      <h1 className="font-display mt-4 text-3xl font-black">
        Няма такава страница
      </h1>
      <p className="font-pixel mt-1 text-xl text-ink-soft" lang="en">
        No such page
      </p>

      <p className="mx-auto mt-6 max-w-prose text-pretty text-lg leading-relaxed">
        Страницата я няма. Става и с книгите — цели глави изчезват между
        изданията.
      </p>
      <p
        lang="en"
        className="mx-auto mt-2 max-w-prose text-pretty text-lg leading-relaxed text-ink-soft"
      >
        This page is not here. It happens with books too — whole chapters
        vanish between editions.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="font-pixel y2k-bevel y2k-chrome y2k-press px-5 py-2 text-xl text-ink"
        >
          ← обратно в началото
        </Link>
        <Link
          to="/en"
          lang="en"
          className="font-pixel y2k-bevel y2k-press bg-lilac px-5 py-2 text-xl text-ink"
        >
          ← back to the start
        </Link>
      </div>
    </section>
  );
}
