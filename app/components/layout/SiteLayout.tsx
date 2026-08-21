import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { TopNav } from "./TopNav";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="font-pixel sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:bg-lime focus:px-3 focus:py-1 focus:text-forest"
      >
        skip
      </a>
      <TopNav />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
