import type { Config } from "@react-router/dev/config";
import { ALL_PATHS } from "./app/lib/locale";

export default {
  // No server anywhere: every route is rendered to static HTML at build
  // time and uploaded as a Cloudflare asset. The interactive pieces (hero
  // motion, the bookshelf, the language toggle) hydrate on the client.
  ssr: false,
  prerender: ALL_PATHS,
} satisfies Config;
