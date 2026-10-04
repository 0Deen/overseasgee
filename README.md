# Ajira Majuu — Website + AI Recruitment Assistant

Next.js 14 (App Router) + TypeScript + Tailwind CSS, with an OpenAI-powered chat assistant
that qualifies leads and emails them to your team via Resend.

## 1. Install

```bash
npm install
```

## 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```
OPENAI_API_KEY=sk-...
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=notifications@yourdomain.com   # must be a domain verified in Resend
AJIRA_MAJUU_NOTIFICATION_EMAIL=ajiramajuuh@gmail.com
```

Both API keys are only ever read server-side (`lib/openai.ts`, `lib/resend.ts`, and the
`app/api/*` routes) — they are never sent to the browser.

## 3. Run locally

```bash
npm run dev
```

Visit http://localhost:3000. The chat launcher is in the bottom-right corner.

## 4. Project structure

```
app/
  page.tsx                 → homepage, assembles all sections
  layout.tsx                → root layout, mounts <ChatWidget/> globally
  api/chat/route.ts         → OpenAI conversation + lead detection + email trigger
  api/leads/route.ts        → manual contact-form submission → email
components/
  Navbar, Hero, JobCategories, GulfCountries, WhyChooseUs, ContactSection, Footer
  chat/ChatWidget.tsx        → floating launcher + responsive panel (mobile-friendly)
  chat/ChatWindow.tsx        → message list, input, calls /api/chat
  chat/MessageBubble.tsx, QuickReplies.tsx, TypingIndicator.tsx
lib/
  systemPrompt.ts            → chatbot's company knowledge + guardrails (single source of truth)
  openai.ts, resend.ts       → server-only API clients
  emailTemplate.ts           → HTML email template for lead notifications
  leadScoring.ts             → deterministic lead-signal extraction + scoring
  rateLimit.ts               → in-memory rate limit + notify-once guard (see note below)
  types.ts                   → shared TypeScript types
```

## 5. Adding the job flyer images

Your 13 flyer images are already placed in `public/images/jobs/` and wired into
`components/JobCategories.tsx`. Add more roles by adding an entry to the `jobs` array there.

## 6. Adding the Gulf country images (GulfShowcase section)

`components/GulfShowcase.tsx` is a pixel-position replica of the "Herniur" reference mockup and
is now the live Gulf-destinations section on the homepage. It expects these exact files in
`public/images/countries/` (lowercase `images` — matters on case-sensitive deploys like Vercel):

```
public/images/countries/
  dubaicity.png        (hero background + nav)
  qatar.png             (center vertical tile)
  saudiarabia.png       (destinations strip background)
  kuwaitcity.jfif
  manamabahrain.png
  muscatoman.png
  logo.jpeg             (small logo badge, top-left of the photo)
```

These are just placeholder folders right now — copy your actual files in using those exact
names (or edit the `destinationImages` map / logo `src` in `GulfShowcase.tsx` if you'd rather
keep your own filenames, e.g. `dubai.png` instead of `dubaicity.png`, or `welcometosaudi.png`
instead of `saudiarabia.png`).

The old placeholder gradient section (`components/GulfCountries.tsx`) is no longer wired into
`app/page.tsx` — it's left in the repo in case you want to reuse pieces of it, but it's safe to
delete.

Copy: `t()` strings for this section live in `lib/i18n/LanguageProvider.tsx` under the
`gulfShowcase.*` keys (English + Swahili included) — edit the wording there, not in the
component.

## 7. Production notes / things to upgrade before real traffic

- **Rate limiting & dedupe** (`lib/rateLimit.ts`) currently uses in-memory `Map`/`Set`, which
  resets on every deploy and doesn't share state across serverless instances. For real
  production traffic, swap in Upstash Redis or Vercel KV.
- **Lead summarization** (`buildQuickSummary` in `app/api/chat/route.ts`) currently truncates
  the visitor's own messages rather than calling a separate summarization prompt. Swap in a
  dedicated OpenAI call if you want richer AI-generated summaries in the lead email.
- **Resend sender domain**: `RESEND_FROM_EMAIL` must be on a domain you've verified inside
  Resend, or sends will fail silently (logged server-side only, never shown to the visitor).
- **Language detection** is a simple heuristic; consider asking the model to explicitly return
  detected language as structured output if you need it to be more reliable.
- This project was written by hand in a sandbox without network access, so `npm install` has
  not been run here — please run it locally before deploying to catch any dependency-version
  issues.

## 8. Deploying

Works out of the box on Vercel:

```bash
vercel
```

Set the same environment variables in the Vercel project settings (Production + Preview).
