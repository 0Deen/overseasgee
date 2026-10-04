"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Jobs", href: "/jobs" },
  { label: "Destinations", href: "/destinations" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

const PHONE = "+254 115 614 253";
const PHONE_HREF = "tel:+254115614253";
const EMAIL = "ajiramajuuh@gmail.com";
const LOCATION = "Twiga Towers, Muranga Road, Nairobi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="w-full bg-brand-purple">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5 text-[12px] font-medium text-white/90 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 transition hover:text-brand-orange">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 002.25-2.25v-1.372a1.5 1.5 0 00-1.06-1.435l-3.13-1.043a1.5 1.5 0 00-1.575.365l-.72.72a1.5 1.5 0 01-1.667.318 12.06 12.06 0 01-5.65-5.65 1.5 1.5 0 01.318-1.667l.72-.72a1.5 1.5 0 00.365-1.575L6.807 3.06A1.5 1.5 0 005.372 2H4A1.75 1.75 0 002.25 3.75v3z" />
              </svg>
              {PHONE}
            </a>
            <a href={"mailto:" + EMAIL} className="hidden items-center gap-1.5 transition hover:text-brand-orange sm:flex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 6.75 9.75-6.75" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5z" />
              </svg>
              {EMAIL}
            </a>
          </div>
          <div className="hidden items-center gap-1.5 md:flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {LOCATION}
          </div>
        </div>
      </div>

      <div className="mx-3 mt-3 rounded-2xl border border-white/40 bg-white/70 px-4 py-2.5 shadow-glass backdrop-blur-xl sm:mx-6 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="#top" className="flex items-center">
            <span className="relative block h-14 w-auto sm:h-16">
              <Image src="/logo.jpeg" alt="Ajira Majuu" width={200} height={64} priority className="h-14 w-auto object-contain sm:h-16" />
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-purple">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary hidden md:inline-flex">
            Apply Now
          </a>

          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-brand-purple" />
              <span className="block h-0.5 w-6 bg-brand-purple" />
              <span className="block h-0.5 w-6 bg-brand-purple" />
            </div>
          </button>
        </div>

        {open && (
          <nav className="mt-4 flex flex-col gap-3 border-t border-brand-purple/10 pt-4 md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">
                {l.label}
              </a>
            ))}
            <a href={"mailto:" + EMAIL} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
              {EMAIL}
            </a>
            <a href="#contact" className="btn-primary justify-center" onClick={() => setOpen(false)}>
              Apply Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}