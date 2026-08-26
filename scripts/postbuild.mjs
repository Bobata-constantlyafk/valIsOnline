import { copyFile, access } from "node:fs/promises";

// React Router prerenders /404 to build/client/404/index.html, but the
// Cloudflare assets runtime looks for 404.html at the root of the asset
// directory (wrangler.jsonc: not_found_handling "404-page"). Copy it across
// so an unmatched URL gets the styled page instead of Cloudflare's default.
const from = "build/client/404/index.html";
const to = "build/client/404.html";

try {
  await access(from);
} catch {
  console.error(`postbuild: expected ${from} to exist — is "/404" still in the prerender list?`);
  process.exit(1);
}

await copyFile(from, to);
console.log(`postbuild: ${from} -> ${to}`);

// Written after the build rather than kept in public/, so it always lists
// exactly the pages that were just generated.
await import("./sitemap.mjs");
