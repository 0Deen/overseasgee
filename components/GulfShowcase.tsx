"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { destinations } from "@/data/jobs";

/**
 * GulfShowcase
 * -------------------------------------------------------------
 * Renders ABOVE <Hero /> on the homepage. Replicates the cascading,
 * diagonally-overlapping "glass panel" composition from the reference
 * design:
 *
 *   [ background photo, hero title on top, soft decorative blob ]
 *   [ Famling (white, lower-left) ] x [ Panlirg (brown, higher-right) ]
 *                    [ vertical photo tile, overlaps both rows ]
 *   [ Vouke (white, lower-left) ]   x [ Cedling (brown, higher-right, dots) ]
 *   [ Promise panel — full width, with scroll-control icons ]
 *
 * The stagger/overlap is produced with a 12-col grid where the two
 * cards' column spans intentionally overlap (col-span-9 vs
 * col-start-5/col-span-8), combined with opposite vertical offsets
 * (mt vs -mt) and z-index — this reproduces the diagonal corner
 * overlap seen in the reference without needing fixed pixel/absolute
 * positioning, so it still reflows safely with translated copy.
 *
 * Uses the site's real design tokens (tailwind.config.ts: coffee /
 * coffee-deep / coffee-light / cream, font-display / font-body /
 * font-label) and pulls copy from lib/i18n/dictionaries/en.json under
 * the "gulfShowcase" key, so it behaves like every other section
 * (Hero, WhyUs, etc.) and translates the same way.
 *
 * NOTE: framer-motion was removed to fix the "Module not found:
 * Can't resolve 'framer-motion'" build error (the package was never
 * installed). The scroll fade-up effect is reproduced below with a
 * small dependency-free useInView hook + CSS transitions, so the
 * visual behavior is unchanged. If you'd rather use framer-motion,
 * just run `npm install framer-motion` and restore the <motion.div>
 * wrappers instead.
 *
 * Image assets expected in /public/Images/countries/ (not included in
 * the zip you sent — copy the folder you already have locally):
 *   dubaicity.png, qatar.png, saudiarabia.png, kuwaitcity.jfif,
 *   manamabahrain.png, muscatoman.png
 */

// NOTE: these paths were previously "/Images/countries/..." (capital I).
// /public/images/ is lowercase, so on a case-sensitive filesystem — which
// is what Vercel's Linux servers use in production, unlike most local
// Mac/Windows dev setups — every one of these would 404 and silently show
// broken images. Fixed to match the real folder.
const destinationImages: Record<string, string> = {
  "Saudi Arabia": "/images/countries/saudiarabia.png",
  "United Arab Emirates": "/images/countries/dubaicity.png",
  Qatar: "/images/countries/qatar.png",
  Kuwait: "/images/countries/kuwaitcity.jfif",
  Bahrain: "/images/countries/manamabahrain.png",
  Oman: "/images/countries/muscatoman.png",
};

/** Dependency-free replacement for framer-motion's whileInView + fadeUp. */
function useInView<T extends HTMLElement>(margin = "-60px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.01 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, inView };
}

/** Small inline icons — kept dependency-free so this drops into any project. */
function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
    </svg>
  );
}

export function GulfShowcase() {
  const { t } = useLanguage();

  const titleBlock = useInView<HTMLDivElement>();
  const row1 = useInView<HTMLDivElement>();
  const photoTile = useInView<HTMLDivElement>();
  const row2 = useInView<HTMLDivElement>();
  const promise = useInView<HTMLDivElement>();

  const fadeClass = (inView: boolean) =>
    `transition-all duration-[550ms] ease-out ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
    }`;

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      {/* backdrop photo behind the hero title + first staggered pair */}
      <div className="absolute inset-x-0 top-0 h-[440px] overflow-hidden rounded-b-[3rem] md:h-[520px]">
        <Image
          src={destinationImages["United Arab Emirates"]}
          alt="Dubai skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-deep/25 via-coffee-deep/55 to-coffee-deep/90" />
        {/* soft decorative blob echoing the swirl behind the headline */}
        <div className="pointer-events-none absolute -left-16 -top-10 h-64 w-64 rounded-full bg-cream/25 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-24 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      </div>

      <div className="container-content relative pt-8 md:pt-10">
        {/* logo + eyebrow row, sitting on the photo */}
        <div className="flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/95 shadow-soft">
            <Image src="/logo.jpeg" alt="AjiraMajuu" width={44} height={44} className="object-cover" />
          </span>
          <span className="font-label text-[11px] uppercase tracking-widest text-white/70">
            {t("gulfShowcase.eyebrow")}
          </span>
        </div>

        {/* hero title, over the photo */}
        <div
          ref={titleBlock.ref}
          className={`mt-9 max-w-md md:mt-14 ${fadeClass(titleBlock.inView)}`}
        >
          <h2 className="font-display text-[2.4rem] font-black leading-[1.05] text-white sm:text-6xl">
            {t("gulfShowcase.headlineTop")}
            <br />
            {t("gulfShowcase.headlineBottom")}
          </h2>
          <p className="mt-4 max-w-sm font-body text-[15px] leading-relaxed text-white/85">
            {t("gulfShowcase.sub")}
          </p>
          <Link
            href="/jobs"
            className="mt-6 inline-block rounded-full bg-amber px-6 py-3.5 font-label text-sm font-medium text-ink transition hover:bg-amber-deep"
          >
            {t("gulfShowcase.cta")}
          </Link>
        </div>

        {/* ROW 1 — Famling (white, lower-left) staggered under Panlirg (brown, higher-right) */}
        <div
          ref={row1.ref}
          className={`relative mt-8 grid grid-cols-12 gap-3 md:mt-16 md:grid-cols-2 md:gap-8 ${fadeClass(
            row1.inView
          )}`}
        >
          <div className="relative z-0 col-span-9 col-start-1 mt-14 rounded-[1.75rem] bg-white p-6 shadow-lift md:col-span-1 md:col-start-1 md:mt-10 md:rounded-[2rem] md:p-7">
            <p className="font-label text-xs uppercase tracking-wide text-coffee-light">
              {t("gulfShowcase.aboutLabel")}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
              {t("gulfShowcase.aboutTitle")}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate">{t("gulfShowcase.aboutBody")}</p>
            <button className="mt-5 rounded-full border border-ink/15 px-4 py-2 font-label text-xs text-ink">
              {t("gulfShowcase.learnMore")}
            </button>
          </div>

          <div className="relative z-10 col-span-8 col-start-5 -mt-6 rounded-[1.75rem] bg-gradient-to-br from-coffee-light via-coffee to-coffee-deep p-6 text-white shadow-lift md:col-span-1 md:col-start-2 md:mt-0 md:rounded-[2rem] md:p-7">
            <p className="font-label text-xs uppercase tracking-wide text-white/60">
              {t("gulfShowcase.missionLabel")}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{t("gulfShowcase.missionTitle")}</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-white/85">{t("gulfShowcase.missionBody")}</p>
            <button className="mt-5 rounded-full border border-white/40 px-4 py-2 font-label text-xs">
              {t("gulfShowcase.learnMore")}
            </button>
          </div>
        </div>

        {/* vertical photo tile, seam between the two staggered rows */}
        <div
          ref={photoTile.ref}
          className={`relative z-20 mx-auto -mt-16 aspect-[3/4] w-[46%] max-w-[220px] overflow-hidden rounded-[1.75rem] shadow-lift md:-mt-10 md:w-1/3 md:max-w-xs md:rounded-[2rem] ${fadeClass(
            photoTile.inView
          )}`}
        >
          <Image src={destinationImages.Qatar} alt="Doha skyline" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/60 via-transparent to-transparent" />
        </div>

        {/* ROW 2 — Vouke (white, lower-left) staggered under Cedling (brown, higher-right, with dots) */}
        <div
          ref={row2.ref}
          className={`relative -mt-16 grid grid-cols-12 gap-3 md:mt-0 md:grid-cols-2 md:gap-8 ${fadeClass(
            row2.inView
          )}`}
        >
          <div className="relative z-0 col-span-9 col-start-1 mt-14 rounded-[1.75rem] bg-white p-6 shadow-soft md:col-span-1 md:col-start-1 md:mt-10 md:rounded-[2rem] md:p-7">
            <p className="font-label text-xs uppercase tracking-wide text-coffee-light">
              {t("gulfShowcase.visionLabel")}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
              {t("gulfShowcase.visionTitle")}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate">{t("gulfShowcase.visionBody")}</p>
            <button className="mt-5 rounded-full border border-ink/15 px-4 py-2 font-label text-xs text-ink">
              {t("gulfShowcase.learnMore")}
            </button>
          </div>

          <div className="relative z-10 col-span-8 col-start-5 -mt-6 rounded-[1.75rem] bg-gradient-to-br from-coffee to-coffee-deep p-6 text-white shadow-lift md:col-span-1 md:col-start-2 md:mt-0 md:rounded-[2rem] md:p-7">
            <p className="font-label text-xs uppercase tracking-wide text-white/60">
              {t("gulfShowcase.destinationsLabel")}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{t("gulfShowcase.destinationsTitle")}</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {destinations.map((d) => (
                <div key={d.name} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src={destinationImages[d.name]} alt={d.name} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-1.5">
              {destinations.map((d) => (
                <span key={d.name} className="h-1.5 w-1.5 rounded-full bg-white/60" />
              ))}
            </div>
          </div>
        </div>

        {/* bottom panel: Our Promise, full width, with directional scroll controls */}
        <div
          ref={promise.ref}
          className={`relative my-14 rounded-[1.75rem] bg-white p-8 shadow-soft md:rounded-[2rem] md:p-12 ${fadeClass(
            promise.inView
          )}`}
        >
          <p className="font-label text-xs uppercase tracking-wide text-coffee-light">
            {t("gulfShowcase.promiseLabel")}
          </p>
          <h3 className="mt-2 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
            {t("gulfShowcase.promiseTitle")}
          </h3>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-slate">
            {t("gulfShowcase.promiseBody")}
          </p>
          <button className="mt-5 rounded-full border border-ink/15 px-4 py-2 font-label text-xs text-ink">
            {t("gulfShowcase.learnMore")}
          </button>

          {/* subtle page-level scroll controls, matching the reference's bottom-corner icons */}
          <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5">
            <div className="flex gap-2 text-ink/50">
              <button
                type="button"
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="rounded-full p-1.5 transition hover:bg-ink/5 hover:text-ink"
              >
                <ChevronUpIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll down"
                onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })}
                className="rounded-full p-1.5 transition hover:bg-ink/5 hover:text-ink"
              >
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>
            <MenuIcon className="h-4 w-4 text-ink/40" />
          </div>
        </div>
      </div>
    </section>
  );
}