import { Link } from "react-router";
import { ArticleCard } from "~/components/articles/ArticleCard";
import { Hero } from "~/components/hero/Hero";
import { ARTICLES, byDateDesc } from "~/data/articles";
import { useT } from "~/lib/i18n";
import { PATHS, useLocale } from "~/lib/locale";
import { metaFor } from "~/lib/meta";

export function meta({ location }: { location: { pathname: string } }) {
  return metaFor("home", location.pathname);
}

export default function Home() {
  const t = useT();
  const locale = useLocale();
  const featured = ARTICLES.filter((a) => a.featured).sort(byDateDesc);

  return (
    <>
      <Hero />

      <section className="u-page u-section-y">
        <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2 className="font-display text-2xl font-black">
            {t("featuredTitle")}
          </h2>
          <Link
            to={PATHS.articles[locale]}
            className="font-pixel text-lg text-ink-soft underline decoration-bubblegum decoration-2 underline-offset-4"
          >
            {t("seeAll")} →
          </Link>
        </div>

        <ul className="u-collage">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </ul>
      </section>
    </>
  );
}
