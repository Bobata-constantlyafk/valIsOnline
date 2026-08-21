/** Credit-line format, decided once for the whole site.
 *
 *  Rule, for any list of people sharing ONE role (co-authors, co-translators,
 *  two illustrators on the same book):
 *    1 person   → full name              "Jenny Pearson"
 *    2 people   → initials joined by &   "J.P. & D.O."
 *    3 or more  → first name in full, then "и др." / "et al."
 *
 *  Different roles never share a slot: an author and an illustrator each get
 *  their own labelled line, because collapsing them would hide which person
 *  did what. That is why BOOKS keeps `author` and `illustrator` separate.
 */

import type { Locale } from "./locale";

function initials(name: string) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0].toUpperCase() + ".")
      .join("")
  );
}

export function creditLine(names: string[], locale: Locale): string {
  const clean = names.map((n) => n.trim()).filter(Boolean);
  if (clean.length === 0) return "";
  if (clean.length === 1) return clean[0];
  if (clean.length === 2) return `${initials(clean[0])} & ${initials(clean[1])}`;
  return `${clean[0]} ${locale === "bg" ? "и др." : "et al."}`;
}
