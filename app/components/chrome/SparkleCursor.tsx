import { useEffect, useRef } from "react";

/** The sparkle trail every personal page had in 2001.
 *
 *  Deliberately does NOT replace the system cursor: a portfolio where the
 *  arrow is a picture is a portfolio where people misjudge what is clickable.
 *  The real cursor stays, the sparkles follow it.
 *
 *  Runs only for a mouse (`hover: hover` and `pointer: fine`) and only when
 *  the visitor has not asked for less motion — on a phone or with reduced
 *  motion on, this component mounts and does nothing at all.
 */

const GLYPHS = ["✦", "✧", "★", "+"] as const;
const COLOURS = ["#7cff3d", "#ff6fb5", "#c9a7ff", "#9be7ff"] as const;

const MAX_LIVE = 24; // hard ceiling, so a fast scribble cannot flood the DOM
const SPAWN_EVERY_MS = 45;
const LIFETIME_MS = 700;

export function SparkleCursor() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let attached = false;
    let lastSpawn = 0;
    let live = 0;
    let seed = 0;

    const spawn = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastSpawn < SPAWN_EVERY_MS) return;
      if (live >= MAX_LIVE) return;
      const layer = layerRef.current;
      if (!layer) return;
      lastSpawn = now;
      live++;
      seed++;

      const s = document.createElement("span");
      s.textContent = GLYPHS[seed % GLYPHS.length];
      s.style.cssText = [
        "position:fixed",
        `left:${e.clientX}px`,
        `top:${e.clientY}px`,
        `color:${COLOURS[(seed >> 1) % COLOURS.length]}`,
        "font-family:var(--font-pixel)",
        `font-size:${10 + ((seed * 7) % 9)}px`,
        "line-height:1",
        "pointer-events:none",
        "will-change:transform,opacity",
        // Slight sideways scatter so the trail reads as sparkle, not as a line.
        `transform:translate(${((seed * 13) % 17) - 8}px,0)`,
      ].join(";");

      layer.appendChild(s);

      // Web Animations rather than CSS classes: nothing to clean up in the
      // stylesheet, and the element removes itself when the animation ends.
      const anim = s.animate(
        [
          { transform: s.style.transform + " scale(1)", opacity: 1 },
          {
            transform: s.style.transform + " translateY(18px) scale(0.3)",
            opacity: 0,
          },
        ],
        { duration: LIFETIME_MS, easing: "cubic-bezier(.4,0,.6,1)" },
      );

      // Remove once, whichever signal arrives first. The timer matters: while
      // a tab is hidden the document timeline is frozen, so the animation
      // never finishes and onfinish never fires — without it, sparkles made
      // just before switching tabs would sit in the DOM until you came back.
      let removed = false;
      const drop = () => {
        if (removed) return;
        removed = true;
        clearTimeout(timer);
        s.remove();
        live--;
      };
      const timer = setTimeout(drop, LIFETIME_MS + 300);
      anim.onfinish = drop;
      anim.oncancel = drop;
    };

    const sync = () => {
      const wanted = finePointer.matches && !reduced.matches;
      if (wanted && !attached) {
        window.addEventListener("pointermove", spawn, { passive: true });
        attached = true;
      } else if (!wanted && attached) {
        window.removeEventListener("pointermove", spawn);
        attached = false;
        layerRef.current?.replaceChildren();
        live = 0;
      }
    };

    sync();
    finePointer.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      finePointer.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      if (attached) window.removeEventListener("pointermove", spawn);
      layerRef.current?.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    />
  );
}
