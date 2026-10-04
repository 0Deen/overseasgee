"use client";

/**
 * =============================================================================
 * CONTACT SECTION — "girl holding the card" hero
 * =============================================================================
 *
 * WHY THIS WAS BROKEN BEFORE
 * ---------------------------------------------------------------------------
 * The previous version positioned the girl and the form card independently,
 * with separate `sm:` / `lg:` / `xl:` overrides on each. That means at every
 * breakpoint the two elements could drift out of sync with each other — they
 * were never actually locked together, so the "hand gripping the card" trick
 * only had a chance of working at whichever one screen size it was eyeballed
 * for.
 *
 * On top of that, the hand "cutout" layer used a clip-path polygon
 * (55%–78% x, 24%–49% y) that doesn't match where the hand actually sits in
 * `form.png`. I measured the real PNG pixel-by-pixel: her fingertips only
 * ever reach about 66.6% across the image, around 22%–37% down. The old
 * polygon was clipping mostly transparent space, so the "hand" essentially
 * never appeared.
 *
 * THE FIX
 * ---------------------------------------------------------------------------
 * Everything — the girl, her "hand" cutout, and the form card — lives inside
 * one `STAGE`: a single element whose aspect ratio is locked with
 * `aspect-[3/4]` (this happens to be the exact aspect ratio of form.png
 * itself: 1086 × 1448). Every child is positioned with PERCENTAGES of that
 * stage, and there are NO breakpoint-specific position/size overrides
 * anywhere in the geometry. Because percentages of a ratio-locked box scale
 * uniformly, the girl and the card keep the exact same relationship to each
 * other at 320px wide or 3200px wide — there's nothing left to drift.
 *
 * The hand-cutout layer is a second copy of the exact same image, in the
 * exact same box, with a `clip-path: polygon(...)` that only reveals the
 * hand region — and that polygon is defined in percentages *of that image*,
 * so it always tracks the same pixels regardless of how big the box is
 * rendered. I verified the coordinates below by compositing them locally
 * against the real form.png before writing this component, so they aren't
 * guesses.
 *
 * TUNING THIS FOR A DIFFERENT CHARACTER IMAGE
 * ---------------------------------------------------------------------------
 * If you ever swap `form.png` for a different pose/character, the numbers
 * below will need to be re-measured for that image. Everything you'd need
 * to touch is collected in the `LAYOUT` object right below this comment:
 *
 *   - imageAspect      → width/height of the new PNG
 *   - girlWidthPct      → how wide the girl is, as % of the stage width
 *   - girlLeftPct       → how far left she sits (negative = bleeds off-canvas)
 *   - cardLeftPct / cardRightPct / cardTopPct / cardBottomPct
 *                       → the form card's position, all as % of the stage
 *   - handClipPolygon   → the hand cutout, as % of the GIRL image itself
 *                         (not the stage) — this is what makes the fingers
 *                         appear to grip the card
 *
 * The one thing that has to stay true: the rightmost point of
 * `handClipPolygon` (in stage-space, i.e. `girlLeftPct + handX% * girlWidthPct`)
 * needs to land a few percent to the RIGHT of `cardLeftPct`. That gap is the
 * visible overlap — how far her fingers appear to curl onto the card. Too
 * small and you won't see the hand at all (this was the original bug); too
 * big and it'll look like her whole arm is resting on top of the card.
 * =============================================================================
 */

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Globe2,
  BriefcaseBusiness,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Send,
} from "lucide-react";

// ---------------------------------------------------------------------------
// LAYOUT CONSTANTS — measured against /public/images/Form/form.png
// (real pixel size: 1086 × 1448). Change these, and only these, to retune.
// ---------------------------------------------------------------------------
const LAYOUT = {
  // The stage's own aspect ratio. Deliberately set equal to the girl image's
  // own aspect ratio (1086/1448) — that makes "% width of stage" and
  // "% height of stage" equivalent for her image, which is what keeps the
  // math simple. If you change this, re-check girlWidthPct below.
  stageAspect: "1086 / 1448",

  // Girl positioning, as % of the stage.
  girlWidthPct: 75, // she occupies 75% of the stage's width
  girlLeftPct: -8, // and bleeds 8% off the left edge, like a natural crop

  // Card positioning, as % of the stage.
  cardLeftPct: 38,
  cardRightPct: 5,
  cardTopPct: 5,
  cardBottomPct: 5,

  // The hand "cutout" — percentages are relative to the GIRL IMAGE itself
  // (0% = her image's left edge, 100% = her image's right edge), not the
  // stage. Measured directly off form.png's alpha channel.
  handClipPolygon: [
    [61, 25],
    [68, 26],
    [69, 30],
    [69, 34],
    [62, 37],
    [57, 32],
    [58, 27],
  ] as const,
} as const;

const clipPathFromPolygon = (points: readonly (readonly [number, number])[]) =>
  `polygon(${points.map(([x, y]) => `${x}% ${y}%`).join(", ")})`;

type LeadStatus = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      preferredCountry: String(form.get("country") || ""),
      preferredJob: String(form.get("job") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setErrorMsg("Network error — please try again shortly.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#cdb4d4] px-4 py-16 sm:py-20 lg:py-24"
    >
      {/* ==================================================================
          AMBIENT BACKGROUND — unchanged in spirit from the original,
          full-bleed regardless of how wide the stage below ends up.
      ================================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9c2df] via-[#b99ac5] to-[#9b78aa]" />
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#f8edfa]/50 blur-[90px]" />
        <div className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-[#efe0f3]/55 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[110px]" />
        <div className="absolute -left-24 top-[18%] h-72 w-72 rounded-full border border-white/20" />
        <div className="absolute -right-32 bottom-[10%] h-96 w-96 rounded-full border border-white/20" />
      </div>

      {/* ==================================================================
          STAGE
          A single ratio-locked box. Every child below is positioned with
          percentages of THIS box — never with breakpoint-specific values.
          That's the entire fix: nothing here can drift apart on resize.
      ================================================================== */}
      <div className="relative mx-auto w-full max-w-[760px]">
        <div
          className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/40 bg-[#e8dceb]/45 shadow-[0_40px_120px_rgba(58,37,68,0.28)] backdrop-blur-2xl sm:rounded-[3rem]"
          style={{ aspectRatio: LAYOUT.stageAspect }}
        >
          {/* Inner glass surface, purely decorative */}
          <div className="pointer-events-none absolute inset-[10px] rounded-[2.2rem] border border-white/30 bg-gradient-to-br from-white/25 via-white/10 to-[#8f6a9e]/10 sm:inset-[14px] sm:rounded-[2.6rem]" />
          <div className="pointer-events-none absolute left-[6%] top-[6%] h-[10%] w-[10%] rounded-full bg-white/15 blur-2xl" />
          <div className="pointer-events-none absolute bottom-[6%] left-[16%] h-[16%] w-[16%] rounded-full bg-[#9674a6]/15 blur-3xl" />

          {/* Brand mark, tucked behind the girl/card, top-left */}
          <div className="pointer-events-none absolute left-[4%] top-[4%] z-[12] max-w-[42%]">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/30 px-2.5 py-1.5 shadow-[0_12px_35px_rgba(60,35,70,0.12)] backdrop-blur-xl sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#76517f] sm:h-2 sm:w-2" />
              <span className="text-[6px] font-bold uppercase tracking-[0.22em] text-[#50365b] sm:text-[9px]">
                Ajira Majuu
              </span>
            </div>
            <p className="mt-2 text-[6px] font-medium uppercase tracking-[0.22em] text-[#654b6d]/70 sm:text-[10px]">
              Kenya → Gulf
            </p>
          </div>

          {/* ================================================================
              GIRL — BACK LAYER
              The full character, sitting BEHIND the card (z-10 < card's
              z-20). Wherever the card covers her, the card simply wins —
              that's normal stacking, nothing tricky here.
          ================================================================ */}
          <div
            className="pointer-events-none absolute bottom-0 z-10"
            style={{
              left: `${LAYOUT.girlLeftPct}%`,
              width: `${LAYOUT.girlWidthPct}%`,
              aspectRatio: LAYOUT.stageAspect,
            }}
          >
            <Image
              src="/images/Form/form.png"
              alt="Ajira Majuu recruitment assistant"
              fill
              priority
              sizes="(max-width: 760px) 60vw, 570px"
              className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(50,30,65,0.20)]"
            />
          </div>

          {/* ================================================================
              FORM CARD
              Positioned purely as % of the stage — same coordinate system
              as the girl above, which is what keeps her hand and the
              card's edge lined up at every size.
          ================================================================ */}
          <div
            className="absolute z-20 rounded-[1.75rem] border border-white/70 bg-[#fbf8fc]/85 shadow-[-25px_35px_90px_rgba(55,35,65,0.25),inset_8px_8px_22px_rgba(255,255,255,0.9),inset_-8px_-8px_22px_rgba(130,95,145,0.08)] backdrop-blur-2xl sm:rounded-[2.25rem]"
            style={{
              left: `${LAYOUT.cardLeftPct}%`,
              right: `${LAYOUT.cardRightPct}%`,
              top: `${LAYOUT.cardTopPct}%`,
              bottom: `${LAYOUT.cardBottomPct}%`,
            }}
          >
            <div className="flex h-full flex-col overflow-y-auto rounded-[1.4rem] border border-white/80 bg-white/45 p-3 shadow-[inset_4px_4px_14px_rgba(255,255,255,0.8),inset_-4px_-4px_14px_rgba(105,75,120,0.05)] sm:rounded-[1.9rem] sm:p-5">
              {/* Icon row */}
              <div className="flex shrink-0 items-start justify-between gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.85rem] border border-white/80 bg-gradient-to-br from-[#cda8dc] to-[#9670a7] text-white shadow-[6px_8px_18px_rgba(95,62,110,0.25),inset_3px_3px_8px_rgba(255,255,255,0.35)] sm:h-12 sm:w-12 sm:rounded-[1.1rem]">
                  <Send size={16} strokeWidth={1.8} className="sm:hidden" />
                  <Send size={20} strokeWidth={1.8} className="hidden sm:block" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-white/55 text-[#76517f] shadow-[4px_5px_14px_rgba(75,50,85,0.10)] backdrop-blur-xl sm:h-8 sm:w-8">
                  <Sparkles size={13} />
                </div>
              </div>

              {/* Header */}
              <div className="mt-3 shrink-0 sm:mt-5">
                <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-[#94789e] sm:text-[9px]">
                  Recruitment enquiry
                </p>
                <h2 className="mt-1.5 font-display text-[clamp(1.1rem,4.5vw,2.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[#42304b] sm:mt-2">
                  Welcome.
                  <br />
                  <span className="text-[#8b68a0]">Let&apos;s get started.</span>
                </h2>
                <p className="mt-2 text-[9px] leading-4 text-[#7d727f] sm:mt-3 sm:text-[13px] sm:leading-5">
                  Tell us what you are looking for and our recruitment team
                  will guide you toward suitable overseas opportunities.
                </p>
              </div>

              {/* Contact mini cards */}
              <div className="mt-3 grid shrink-0 grid-cols-3 gap-1.5 sm:mt-5 sm:gap-2.5">
                <ContactMiniCard icon={<Phone size={12} />} label="Call us" value="+254 115 614 253" />
                <ContactMiniCard icon={<Mail size={12} />} label="Email" value="ajiramajuuh@gmail.com" />
                <ContactMiniCard icon={<MapPin size={12} />} label="Visit us" value="Nairobi, Kenya" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-3.5">
                <FormField id="contact-name" name="name" label="Full name" icon={<User size={14} strokeWidth={1.8} />} required autoComplete="name" placeholder="Enter your full name" />

                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3.5">
                  <FormField id="contact-phone" name="phone" type="tel" label="Phone number" icon={<Phone size={14} strokeWidth={1.8} />} autoComplete="tel" placeholder="+254..." />
                  <FormField id="contact-email" name="email" type="email" label="Email" icon={<Mail size={14} strokeWidth={1.8} />} autoComplete="email" placeholder="you@example.com" />
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3.5">
                  <div>
                    <FieldLabel htmlFor="contact-country">Preferred destination</FieldLabel>
                    <div className="relative">
                      <Globe2 size={14} strokeWidth={1.8} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#aa9cad] sm:left-4 sm:h-[17px] sm:w-[17px]" />
                      <select
                        id="contact-country"
                        name="country"
                        defaultValue=""
                        className={FIELD_CLASSES + " appearance-none pr-7"}
                      >
                        <option value="" disabled>Select destination</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Oman">Oman</option>
                        <option value="Other">Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9d8ea1] sm:right-4">↓</span>
                    </div>
                  </div>
                  <FormField id="contact-job" name="job" label="Preferred job" icon={<BriefcaseBusiness size={14} strokeWidth={1.8} />} placeholder="e.g. Caregiver" />
                </div>

                <div>
                  <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                  <div className="relative">
                    <MessageCircle size={14} strokeWidth={1.8} className="absolute left-2.5 top-3 text-[#aa9cad] sm:left-4 sm:top-4 sm:h-[17px] sm:w-[17px]" />
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={2}
                      placeholder="Tell us what kind of opportunity you are looking for..."
                      className={FIELD_CLASSES + " min-h-[56px] resize-none py-2.5 leading-4 sm:min-h-[90px] sm:py-4"}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-[#74517f] via-[#88629a] to-[#a075b1] px-4 text-[10px] font-bold text-white shadow-[0_15px_30px_rgba(101,69,115,0.28),inset_2px_2px_5px_rgba(255,255,255,0.2),inset_-3px_-3px_7px_rgba(65,40,75,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(101,69,115,0.35)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-13 sm:rounded-2xl sm:text-sm"
                >
                  <span>{status === "sending" ? "Sending..." : "Send enquiry"}</span>
                  {status !== "sending" && (
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/15 transition-all duration-700 group-hover:left-[110%]" />
                </button>

                {status === "sent" && (
                  <StatusBanner tone="success" icon={<CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" />} title="Enquiry sent successfully." body="Thank you. Our recruitment team will be in touch soon." />
                )}
                {status === "error" && (
                  <StatusBanner tone="error" icon={<AlertCircle size={16} className="mt-0.5 shrink-0 text-red-500" />} title="We could not send your enquiry." body={errorMsg} />
                )}

                <div className="flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck size={11} className="text-[#9a8a9e]" />
                  <p className="text-center text-[6.5px] leading-3 text-[#9b909d] sm:text-[9px] sm:leading-4">
                    Your information is used only to respond to your recruitment enquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* ================================================================
              GIRL — FRONT HAND LAYER
              An exact duplicate of the same image, in the exact same box as
              the back layer above, sitting ABOVE the card (z-35 > card's
              z-20). `clip-path` hides everything except her hand, so only
              that sliver renders — and because it shares the same box and
              the same percentages, it can never drift relative to her body.
          ================================================================ */}
          <div
            className="pointer-events-none absolute bottom-0 z-[35]"
            style={{
              left: `${LAYOUT.girlLeftPct}%`,
              width: `${LAYOUT.girlWidthPct}%`,
              aspectRatio: LAYOUT.stageAspect,
              clipPath: clipPathFromPolygon(LAYOUT.handClipPolygon),
            }}
          >
            <Image
              src="/images/Form/form.png"
              alt=""
              fill
              sizes="(max-width: 760px) 60vw, 570px"
              className="object-contain object-bottom"
            />
          </div>

          {/* Small floating tag, bottom-left — purely decorative */}
          <div className="pointer-events-none absolute bottom-[3%] left-[4%] z-[40] hidden sm:block">
            <div className="flex items-center gap-1.5 rounded-full border border-white/50 bg-white/25 px-2.5 py-1.5 shadow-[0_12px_25px_rgba(60,40,70,0.10)] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#76517f]" />
              <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#65496d] sm:text-[8px]">
                Your next opportunity
              </span>
            </div>
          </div>
        </div>

        {/* Bottom label */}
        <div className="flex items-center justify-center gap-3 py-6 sm:py-8">
          <span className="h-px w-8 bg-white/40 sm:w-14" />
          <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#654b6d]/70 sm:text-[8px]">
            Ajira Majuu · Kenya
          </span>
          <span className="h-px w-8 bg-white/40 sm:w-14" />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Small building blocks (kept outside the main component to keep the JSX
// above readable — these are the repeated bits: labels, inputs, mini cards,
// status banners).
// ---------------------------------------------------------------------------

const FIELD_CLASSES =
  "h-9 w-full rounded-xl border border-white/90 bg-white/55 pl-8 pr-3 text-[10px] text-[#45364a] shadow-[inset_3px_3px_8px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(100,70,115,0.035),4px_5px_14px_rgba(70,45,80,0.05)] outline-none backdrop-blur-xl transition placeholder:text-[#b5aab6] focus:border-[#a17eb0] focus:bg-white/75 focus:ring-4 focus:ring-[#9270a0]/10 sm:h-12 sm:rounded-2xl sm:pl-12 sm:text-sm";

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1 block text-[6.5px] font-bold uppercase tracking-[0.16em] text-[#847684] sm:mb-2 sm:text-[9px]"
    >
      {children}
    </label>
  );
}

function FormField({
  id,
  name,
  label,
  icon,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  icon: React.ReactNode;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#aa9cad] sm:left-4">{icon}</span>
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={FIELD_CLASSES}
        />
      </div>
    </div>
  );
}

function ContactMiniCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[0.85rem] border border-white/80 bg-white/45 p-2 shadow-[4px_5px_15px_rgba(70,45,80,0.07),inset_3px_3px_8px_rgba(255,255,255,0.75)] backdrop-blur-xl sm:rounded-2xl sm:p-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#eee2f2] text-[#76517f] sm:h-8 sm:w-8">
        {icon}
      </div>
      <p className="mt-1.5 text-[5px] font-bold uppercase tracking-[0.12em] text-[#a295a5] sm:text-[8px]">
        {label}
      </p>
      <p className="mt-0.5 truncate text-[6.5px] font-semibold text-[#4b394f] sm:text-[10px]">
        {value}
      </p>
    </div>
  );
}

function StatusBanner({
  tone,
  icon,
  title,
  body,
}: {
  tone: "success" | "error";
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  const palette =
    tone === "success"
      ? "border-green-200/70 bg-green-50/80 shadow-[4px_5px_15px_rgba(50,100,60,0.06)]"
      : "border-red-200/70 bg-red-50/80 shadow-[4px_5px_15px_rgba(100,50,50,0.06)]";
  const titleColor = tone === "success" ? "text-green-700" : "text-red-700";
  const bodyColor = tone === "success" ? "text-green-600" : "text-red-600";

  return (
    <div className={`flex items-start gap-2.5 rounded-2xl border px-3 py-2.5 backdrop-blur-xl sm:gap-3 sm:px-4 sm:py-3.5 ${palette}`}>
      {icon}
      <div>
        <p className={`text-[10px] font-bold sm:text-sm ${titleColor}`}>{title}</p>
        <p className={`mt-0.5 text-[8.5px] leading-3.5 sm:text-xs sm:leading-5 ${bodyColor}`}>{body}</p>
      </div>
    </div>
  );
}
