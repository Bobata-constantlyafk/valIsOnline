/** The one typographic shell every page uses. All four inner pages get their
 *  h1, lead paragraph and horizontal rhythm from here, so a change to page
 *  typography is a one-file change rather than a hunt through the routes. */

export function Page({
  narrow = false,
  children,
}: {
  /** Reading pages (About, Contact) use the narrower measure. */
  narrow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`${narrow ? "u-page-narrow" : "u-page"} u-section-y`}>
      {children}
    </section>
  );
}

export function PageHeader({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  /** Anything that belongs directly under the lead — filter rows, mostly. */
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-6">
      <h1 className="font-display text-3xl font-black leading-tight text-balance">
        {title}
      </h1>
      {lead && (
        <p className="mt-2 max-w-prose text-pretty text-lg leading-relaxed text-ink-soft">
          {lead}
        </p>
      )}
      {children}
    </header>
  );
}

/** Section heading inside a page — the lime tab used down the About page. */
export function SectionHeading({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-pixel inline-block border-2 border-ink bg-lime px-2 text-xl text-forest"
    >
      {children}
    </h2>
  );
}
