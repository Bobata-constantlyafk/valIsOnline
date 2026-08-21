import { Shelf } from "~/components/books/Shelf";
import { Page, PageHeader } from "~/components/chrome/Page";
import { useT } from "~/lib/i18n";
import { metaFor } from "~/lib/meta";

export function meta({ location }: { location: { pathname: string } }) {
  return metaFor("books", location.pathname);
}

export default function Books() {
  const t = useT();
  return (
    <Page>
      <PageHeader title={t("booksTitle")} lead={t("booksLead")} />
      <Shelf />
    </Page>
  );
}
