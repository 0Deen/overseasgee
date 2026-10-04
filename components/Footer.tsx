"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Navigation,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

/* ================================================================
   AJIRA MAJUU — FOOTER CONFIGURATION
   ================================================================ */

const WHATSAPP_NUMBER = "254115614253";

const WHATSAPP_MESSAGE =
  "Hello Ajira Majuu, I would like to enquire about your overseas job opportunities. Please assist me.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const FACEBOOK_URL = "https://web.facebook.com/ajiramajuu";

/*
 * Add your official URLs here when available.
 * They are intentionally empty rather than inventing social accounts.
 */
const INSTAGRAM_URL = "";
const LINKEDIN_URL = "";

/* Google Maps destination */
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Twiga+Towers+Murang'a+Road+Nairobi";

/* ================================================================
   SMALL SOCIAL BUTTON
   ================================================================ */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.15] hover:text-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
    </a>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#30233a] text-white">
      {/* ============================================================
          ATMOSPHERIC BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* large purple glow */}
        <div className="absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#9a72ab]/20 blur-[120px]" />

        {/* warm glow */}
        <div className="absolute right-[-220px] top-[25%] h-[650px] w-[650px] rounded-full bg-[#d7b59c]/10 blur-[130px]" />

        {/* lower glow */}
        <div className="absolute bottom-[-300px] left-[30%] h-[600px] w-[600px] rounded-full bg-[#76517f]/20 blur-[120px]" />

        {/* subtle radial center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.07),transparent_42%)]" />

        {/* decorative lines */}
        <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full border border-white/[0.04]" />

        <div className="absolute left-[10%] top-[15%] h-20 w-20 rounded-full border border-white/[0.035]" />

        <div className="absolute right-[8%] bottom-[15%] h-44 w-44 rounded-full border border-white/[0.035]" />
      </div>

      {/* ============================================================
          TOP LUXURY CTA
      ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:rounded-[3rem] sm:p-10 lg:p-12">
          {/* inner glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#b58bc2]/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65">
                <Sparkles size={12} />
                Your journey starts here
              </div>

              <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Ready for your
                <br />
                <span className="italic text-[#d9bde0]">
                  next opportunity?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Whether you are looking for work abroad, need guidance before
                travelling, or want to understand our current opportunities,
                our recruitment team is ready to help.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="lg:justify-self-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-[#f8f3ec] px-7 text-sm font-semibold text-[#493652] shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.28)]"
              >
                <MessageCircle
                  size={19}
                  className="text-[#76517f]"
                  strokeWidth={2}
                />

                <span>Chat on WhatsApp</span>

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <p className="mt-3 text-center text-[9px] uppercase tracking-[0.18em] text-white/35">
                +254 115 614 253
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          MAIN FOOTER CONTENT
      ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1.15fr]">
          {/* ========================================================
              BRAND
          ======================================================== */}

          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-4"
            >
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/15 bg-white p-1 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
                <Image
                  src="/logo.jpeg"
                  alt="Ajira Majuu logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>

              <span>
                <span className="block font-display text-2xl font-bold tracking-tight text-white">
                  Ajira Majuu
                </span>

                <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-[#c7a8ce]">
                  Njoo, Tusafiri Ughaibuni.
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/48">
              Connecting Kenyan job seekers with overseas employment
              opportunities and helping candidates understand the journey from
              application to travel.
            </p>

            {/* social row */}
            <div className="mt-7 flex items-center gap-3">
              <SocialButton
                href={FACEBOOK_URL}
                label="Ajira Majuu on Facebook"
              >
                <FaFacebookF size={18} />
              </SocialButton>

              {INSTAGRAM_URL && (
                <SocialButton
                  href={INSTAGRAM_URL}
                  label="Ajira Majuu on Instagram"
                >
                  <FaInstagram size={18} />
                </SocialButton>
              )}

              {LINKEDIN_URL && (
                <SocialButton
                  href={LINKEDIN_URL}
                  label="Ajira Majuu on LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </SocialButton>
              )}

              <SocialButton
                href={WHATSAPP_URL}
                label="Chat with Ajira Majuu on WhatsApp"
              >
                <MessageCircle size={18} />
              </SocialButton>
            </div>
          </div>

          {/* ========================================================
              QUICK LINKS
          ======================================================== */}

          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c7a8ce]">
              Explore
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Home", "#top"],
                ["Current jobs", "#jobs"],
                ["About us", "#about"],
                ["How it works", "#process"],
                ["Contact us", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/52 transition hover:text-white"
                >
                  <span>{label}</span>

                  <ArrowRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ========================================================
              DESTINATIONS / OPPORTUNITIES
          ======================================================== */}

          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c7a8ce]">
              Opportunities
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Saudi Arabia",
                "United Arab Emirates",
                "Qatar",
                "Oman",
                "Kuwait",
                "Bahrain",
                "Turkey",
              ].map((country) => (
                <a
                  key={country}
                  href="#jobs"
                  className="group flex items-center gap-3 text-sm text-white/52 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-[#a77bb4] transition group-hover:scale-150" />

                  {country}
                </a>
              ))}
            </div>
          </div>

          {/* ========================================================
              CONTACT
          ======================================================== */}

          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c7a8ce]">
              Contact
            </div>

            <div className="mt-6 space-y-5">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#d5b5dc] transition group-hover:bg-white/10">
                  <MessageCircle size={17} />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-white/30">
                    WhatsApp
                  </span>

                  <span className="mt-1 block text-sm font-medium text-white/75 transition group-hover:text-white">
                    +254 115 614 253
                  </span>
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+254115614253"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#d5b5dc]">
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-white/30">
                    Call us
                  </span>

                  <span className="mt-1 block text-sm font-medium text-white/75 transition group-hover:text-white">
                    +254 115 614 253
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:ajiramajuuh@gmail.com"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#d5b5dc]">
                  <Mail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-white/30">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm font-medium text-white/75 transition group-hover:text-white">
                    ajiramajuuh@gmail.com
                  </span>
                </span>
              </a>

              {/* Location */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#d5b5dc]">
                  <MapPin size={17} />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-white/30">
                    Visit us
                  </span>

                  <span className="mt-1 block text-sm font-medium leading-5 text-white/75 transition group-hover:text-white">
                    Twiga Towers
                    <br />
                    Murang&apos;a Road, Nairobi
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          MAP / LOCATION SECTION
      ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:rounded-[2.5rem]">
          <div className="grid overflow-hidden rounded-[1.5rem] bg-[#eee8e1] lg:grid-cols-[0.75fr_1.25fr] lg:rounded-[2rem]">
            {/* map information */}
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e5d9e8] text-[#76517f] shadow-[inset_3px_3px_8px_rgba(90,65,95,0.08),inset_-3px_-3px_8px_rgba(255,255,255,0.8)]">
                <Navigation size={19} />
              </div>

              <div className="mt-6 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#927a98]">
                Find us in Nairobi
              </div>

              <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.035em] text-[#3f3045]">
                Twiga Towers
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#766d76]">
                Murang&apos;a Road, Nairobi, Kenya. Visit our recruitment team
                for assistance with your overseas employment journey.
              </p>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#4b3854] px-5 py-3 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(60,43,68,0.18)] transition hover:-translate-y-0.5 hover:bg-[#5a4264]"
              >
                Open in Google Maps

                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* actual map */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[360px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821882279043!2d36.81832364032831!3d-1.2805462356271753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4bf65dc8f%3A0xe534a1f3b7f619!2sTwiga%20Towers%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1789245322822!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "360px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ajira Majuu location - Twiga Towers Nairobi"
              />

              {/* map glass label */}
              <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-white/40 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#76517f]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#4b3854]">
                    Ajira Majuu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          TRUST STRIP
      ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
            <ShieldCheck
              size={18}
              className="shrink-0 text-[#d5b5dc]"
            />

            <div>
              <div className="text-xs font-semibold text-white/80">
                Candidate support
              </div>

              <div className="mt-0.5 text-[10px] text-white/35">
                Guidance through the process
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
            <MessageCircle
              size={18}
              className="shrink-0 text-[#d5b5dc]"
            />

            <div>
              <div className="text-xs font-semibold text-white/80">
                WhatsApp enquiries
              </div>

              <div className="mt-0.5 text-[10px] text-white/35">
                Fast direct communication
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
            <MapPin
              size={18}
              className="shrink-0 text-[#d5b5dc]"
            />

            <div>
              <div className="text-xs font-semibold text-white/80">
                Nairobi, Kenya
              </div>

              <div className="mt-0.5 text-[10px] text-white/35">
                Twiga Towers · Murang&apos;a Road
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM BAR
      ============================================================ */}

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-display text-lg font-semibold text-white">
              Ajira Majuu
            </div>

            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/30">
              Your Job Beyond Borders · Njoo, Tusafiri Ughaibuni.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-white/30">
            <span>© {year} Ajira Majuu</span>

            <a
              href="#privacy"
              className="transition hover:text-white/70"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="transition hover:text-white/70"
            >
              Terms
            </a>

            <a
              href="#contact"
              className="transition hover:text-white/70"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================
          FLOATING WHATSAPP BUTTON
          This stays available throughout the footer.
      ============================================================ */}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Ajira Majuu on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-[#76517f] text-white shadow-[0_15px_40px_rgba(58,40,65,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#89639a] sm:bottom-7 sm:right-7"
      >
        <MessageCircle size={23} strokeWidth={1.8} />

        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-[#34273c]/95 px-3 py-2 text-[10px] font-semibold text-white opacity-0 shadow-xl backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100">
          Chat with Ajira Majuu
        </span>
      </a>
    </footer>
  );
}