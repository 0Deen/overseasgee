"use client";

import Image from "next/image";

const whatWeDo = [
  {
    title: "Recruitment",
    eyebrow: "01 / RECRUITMENT",
    desc: "We source and match qualified Kenyan candidates with genuine, screened employer vacancies across the Gulf.",
  },
  {
    title: "Screening & Documentation",
    eyebrow: "02 / VERIFICATION",
    desc: "We verify candidate profiles, guide document preparation, and handle contract and pre-departure paperwork.",
  },
  {
    title: "Placement Support",
    eyebrow: "03 / SUPPORT",
    desc: "From interview to arrival, our team stays with you through travel preparation and settling into your new role.",
  },
];

const howWeDoIt = [
  {
    n: "01",
    title: "Candidate Sourcing",
    desc: "We build a pool of qualified Kenyan job seekers across driving, healthcare, hospitality, construction, security and more.",
  },
  {
    n: "02",
    title: "Screening & Verification",
    desc: "Every profile is reviewed and every employer opportunity is checked before it reaches you - no guesswork, no fake listings.",
  },
  {
    n: "03",
    title: "Employer Matching",
    desc: "We match your skills, experience, and destination preference to real, open roles in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, and Oman.",
  },
  {
    n: "04",
    title: "Documentation & Travel",
    desc: "Once selected, we handle contract review, travel documentation, and pre-departure preparation with you.",
  },
  {
    n: "05",
    title: "Post-Placement Support",
    desc: "Our support doesn't end at the airport - we stay reachable after you've started your new role.",
  },
];

const points = [
  {
    title: "Professional support",
    desc: "Guidance throughout the whole recruitment process.",
  },
  {
    title: "Honest & transparent",
    desc: "No fabricated jobs, salaries, or guaranteed visas.",
  },
  {
    title: "Good communication",
    desc: "Ask questions any time - via chat, phone, or email.",
  },
  {
    title: "Experience valued",
    desc: "Relevant experience is an advantage across all roles.",
  },
];

const slides = [
  {
    n: "01",
    img: "image2.png",
    title: "Verified Employers",
    desc: "Starting from your first inquiry to your first day on the job, we confirm every vacancy and every employer before it ever reaches you.",
  },
  {
    n: "02",
    img: "image3.png",
    title: "Fast Placement",
    desc: "Our screening and matching process is built to move - so you go from application to offer without unnecessary waiting.",
  },
  {
    n: "03",
    img: "image4.png",
    title: "Transparent Pricing",
    desc: "We believe in transparent, upfront terms and share every fee and process step with you from day one, with no hidden costs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f4f0e9] text-[#173f3a]"
    >
      {/* ============================================================
          MAIN ATMOSPHERIC BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-32 h-[420px] w-[420px] rounded-full bg-[#d7e8df] opacity-70 blur-3xl" />

        <div className="absolute right-[-180px] top-[900px] h-[520px] w-[520px] rounded-full bg-[#d8c1aa] opacity-30 blur-3xl" />

        <div className="absolute left-[-180px] top-[1800px] h-[600px] w-[600px] rounded-full bg-[#dce9e4] opacity-60 blur-3xl" />

        <div className="absolute right-[-150px] top-[3000px] h-[500px] w-[500px] rounded-full bg-[#c8ddd5] opacity-50 blur-3xl" />
      </div>

      {/* ============================================================
          HERO
      ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="relative min-h-[760px]">
          {/* Main large background panel */}
          <div className="absolute inset-x-0 top-0 h-[610px] overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#d8e7df] via-[#edf0e9] to-[#d4bda8] shadow-[0_35px_90px_rgba(44,60,53,0.13)]" />

          {/* Decorative large shape */}
          <div className="absolute right-[-60px] top-[-40px] hidden h-[430px] w-[430px] rounded-[6rem] border border-white/60 bg-white/20 backdrop-blur-sm md:block" />

          <div className="relative z-10 grid gap-12 px-6 py-12 sm:px-12 sm:py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            {/* LEFT TEXT */}
            <div className="max-w-xl">
              <div className="mb-7 inline-flex rounded-full border border-[#315e56]/20 bg-white/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#315e56] backdrop-blur-md">
                Overseas Recruitment
              </div>

              <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#163e38] sm:text-6xl lg:text-7xl">
                A New Way
                <br />
                to Build Your
                <br />
                <span className="relative inline-block italic font-normal">
                  Career Abroad
                  <svg
                    viewBox="0 0 300 60"
                    className="pointer-events-none absolute -left-5 -top-2 h-full w-[calc(100%+35px)] text-[#5c9b8c]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <ellipse
                      cx="150"
                      cy="30"
                      rx="145"
                      ry="26"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-[#5e706b] sm:text-[15px]">
                Today, finding overseas work shouldn&apos;t mean guessing who
                to trust. We connect Kenyan talent with verified, legitimate
                employers across the Gulf - because your safety and your
                career come first.
              </p>

              <a
                href="#why-us-details"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#315e56]/20 bg-white/50 px-5 py-3 text-xs font-medium text-[#315e56] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/70"
              >
                Explore our approach

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#315e56] text-white">
                  ↓
                </span>
              </a>
            </div>

            {/* RIGHT IMAGE COMPOSITION */}
            <div className="relative mx-auto h-[430px] w-full max-w-[520px] sm:h-[500px]">
              {/* back image panel */}
              <div className="absolute right-0 top-0 h-[390px] w-[78%] overflow-hidden rounded-[3rem] bg-[#e3d2c1] shadow-2xl">
                <Image
                  src="/images/design/plane.png"
                  alt="Ajira Majuu overseas recruitment journey"
                  fill
                  className="object-contain p-10"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#805e48]/20" />
              </div>

              {/* glass card */}
              <div className="absolute bottom-4 left-0 w-[65%] rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_25px_60px_rgba(54,48,40,0.18)] backdrop-blur-xl sm:bottom-0">
                <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#7a8c85]">
                  Your journey
                </div>

                <div className="mt-2 font-display text-3xl text-[#244b45]">
                  Starts here.
                </div>

                <p className="mt-3 text-xs leading-5 text-[#687771]">
                  From verified opportunities to placement support, we stay
                  with you throughout the process.
                </p>
              </div>

              {/* floating stat */}
              <div className="absolute right-[-5px] top-[52%] rounded-[1.5rem] bg-[#17453e] px-5 py-4 text-white shadow-2xl sm:right-[-20px]">
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  Placement
                </div>

                <div className="mt-1 font-display text-xl">Ongoing</div>

                <div className="mt-2 flex items-end gap-[3px]">
                  {[5, 9, 6, 12, 8, 4, 10].map((height, index) => (
                    <span
                      key={index}
                      className="w-[3px] rounded-full bg-[#a7d7c9]"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>

              {/* top glass badge */}
              <div className="absolute left-[-5px] top-10 rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-lg backdrop-blur-xl sm:left-[-25px]">
                <div className="text-[9px] text-[#76857f]">
                  Active Candidates
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm font-bold text-[#244b45]">
                  Growing
                  <span className="text-[9px] text-emerald-500">▲</span>
                </div>
              </div>
            </div>
          </div>

          {/* bottom overlapping label */}
          <div className="absolute bottom-0 left-[7%] z-20 hidden w-[330px] rounded-[2rem] border border-white/70 bg-[#f9f8f4]/95 p-6 shadow-[0_25px_60px_rgba(45,50,44,0.14)] backdrop-blur-xl md:block">
            <div className="text-[9px] uppercase tracking-[0.22em] text-[#8a9892]">
              Ajira Majuu
            </div>

            <div className="mt-2 font-display text-3xl text-[#1c4841]">
              Trust first.
            </div>

            <p className="mt-2 text-xs leading-5 text-[#697872]">
              Professional recruitment built around transparency, verification
              and human support.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          OVERLAPPING EDITORIAL FEATURE AREA
      ============================================================ */}

      <div
        id="why-us-details"
        className="relative bg-[#183f39] px-5 py-24 sm:px-8 sm:py-32"
      >
        {/* subtle background shapes */}
        <div className="pointer-events-none absolute left-[-160px] top-[180px] h-[500px] w-[500px] rounded-full bg-[#2f655b] opacity-30 blur-3xl" />

        <div className="pointer-events-none absolute right-[-160px] bottom-[100px] h-[500px] w-[500px] rounded-full bg-[#8a6349] opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* SECTION INTRO */}
          <div className="mb-20 max-w-xl sm:mb-28">
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a8cec2]">
              Why job seekers choose us
            </div>

            <h3 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl">
              Built around
              <br />
              <span className="italic text-[#a8cec2]">your journey.</span>
            </h3>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              A recruitment experience designed to feel clear, human and
              dependable from your first inquiry through your placement.
            </p>
          </div>

          {/* ========================================================
              FEATURE 01
          ======================================================== */}

          <div className="relative min-h-[720px]">
            {/* large image */}
            <div className="absolute right-0 top-0 h-[470px] w-[82%] overflow-hidden rounded-[3rem] bg-[#73563f] shadow-[0_35px_90px_rgba(0,0,0,0.3)] sm:h-[570px] sm:w-[70%]">
              <Image
                src="/images/design/image2.png"
                alt="Verified employers"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 82vw, 70vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              <div className="absolute right-7 top-7 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                01
              </div>
            </div>

            {/* overlapping text card */}
            <div className="absolute bottom-0 left-0 z-10 w-[82%] rounded-[2.5rem] bg-[#f7f5ef] p-7 text-[#183f39] shadow-[0_35px_80px_rgba(0,0,0,0.25)] sm:w-[57%] sm:p-10">
              <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#83918b]">
                01 / Verification
              </div>

              <h4 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
                Verified
                <br />
                Employers
              </h4>

              <p className="mt-5 text-sm leading-6 text-[#687671]">
                Starting from your first inquiry to your first day on the job,
                we confirm every vacancy and every employer before it ever
                reaches you.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#183f39]/20 px-4 py-2 text-[10px] uppercase tracking-[0.12em] transition hover:bg-[#183f39] hover:text-white"
              >
                Learn more
                <span>↗</span>
              </a>
            </div>

            {/* floating number */}
            <div className="absolute left-[53%] top-[420px] z-20 hidden font-display text-[9rem] leading-none text-white/10 sm:block">
              01
            </div>
          </div>

          {/* ========================================================
              FEATURE 02
          ======================================================== */}

          <div className="relative mt-[-20px] min-h-[700px] sm:mt-[-50px]">
            {/* cream panel */}
            <div className="absolute left-0 top-0 h-[480px] w-[78%] rounded-[3rem] bg-gradient-to-br from-[#eee7dd] to-[#cdb7a3] shadow-[0_35px_90px_rgba(0,0,0,0.2)] sm:h-[550px] sm:w-[70%]" />

            {/* image */}
            <div className="absolute right-0 top-[70px] z-10 h-[370px] w-[70%] overflow-hidden rounded-[2.5rem] shadow-2xl sm:top-[90px] sm:h-[430px] sm:w-[52%]">
              <Image
                src="/images/design/image3.png"
                alt="Fast placement"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 70vw, 52vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full bg-white/85 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#244b45] backdrop-blur-md">
                02 / Speed
              </div>
            </div>

            {/* text card */}
            <div className="absolute bottom-0 left-[5%] z-20 w-[82%] rounded-[2.5rem] bg-[#244b45] p-7 text-white shadow-[0_35px_80px_rgba(0,0,0,0.3)] sm:left-[8%] sm:w-[52%] sm:p-10">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[#a7cfc2]">
                02 / Placement
              </div>

              <h4 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
                Fast
                <br />
                Placement
              </h4>

              <p className="mt-5 text-sm leading-6 text-white/60">
                Our screening and matching process is built to move - so you go
                from application to offer without unnecessary waiting.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-[#244b45]"
              >
                Learn more
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* ========================================================
              FEATURE 03
          ======================================================== */}

          <div className="relative mt-[-20px] min-h-[720px] sm:mt-[-70px]">
            {/* image background */}
            <div className="absolute right-0 top-0 h-[490px] w-[80%] overflow-hidden rounded-[3rem] shadow-[0_35px_90px_rgba(0,0,0,0.3)] sm:h-[570px] sm:w-[68%]">
              <Image
                src="/images/design/image4.png"
                alt="Transparent pricing"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, 68vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
            </div>

            {/* small floating glass panel */}
            <div className="absolute right-[8%] top-[35px] z-20 rounded-[1.5rem] border border-white/30 bg-white/15 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
              <div className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                Pricing
              </div>

              <div className="mt-1 text-sm font-semibold">
                Transparent
              </div>
            </div>

            {/* main text */}
            <div className="absolute bottom-0 left-0 z-20 w-[84%] rounded-[2.5rem] bg-[#e9e0d5] p-7 text-[#244b45] shadow-[0_35px_80px_rgba(0,0,0,0.3)] sm:w-[57%] sm:p-10">
              <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#7f8d86]">
                03 / Transparency
              </div>

              <h4 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
                Transparent
                <br />
                Pricing
              </h4>

              <p className="mt-5 text-sm leading-6 text-[#697671]">
                We believe in transparent, upfront terms and share every fee
                and process step with you from day one, with no hidden costs.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#244b45]/20 px-4 py-2 text-[10px] uppercase tracking-[0.12em] transition hover:bg-[#244b45] hover:text-white"
              >
                Learn more
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* ========================================================
              CLOSING FEATURE
          ======================================================== */}

          <div className="relative mt-[-20px] min-h-[570px] sm:mt-[-60px]">
            <div className="absolute inset-x-0 top-0 h-[450px] overflow-hidden rounded-[3rem] bg-[#d8e6df] shadow-[0_35px_90px_rgba(0,0,0,0.2)] sm:h-[500px]">
              <Image
                src="/images/design/image5.png"
                alt="Trust and transparency"
                fill
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-[#163e38]/80 via-[#163e38]/20 to-transparent" />
            </div>

            <div className="relative z-10 flex min-h-[500px] items-center justify-center px-7 text-center">
              <div className="max-w-2xl">
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                  Our promise
                </div>

                <p className="mt-6 font-display text-4xl leading-[1.05] text-white sm:text-6xl">
                  Driven by trust and transparency,
                  <br />
                  <span className="italic text-[#b8d8ce]">
                    your career comes first.
                  </span>
                </p>

                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs text-white backdrop-blur-md transition hover:bg-white hover:text-[#183f39]"
                >
                  Choose us to build your journey abroad
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          WHAT WE DO — EDITORIAL STACK
      ============================================================ */}

      <div className="relative px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            {/* INTRO */}
            <div className="lg:sticky lg:top-20 lg:self-start">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#789089]">
                What we do
              </div>

              <h3 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-[#173f39] sm:text-6xl">
                More than
                <br />
                <span className="italic">a job listing.</span>
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#6d7b76]">
                We provide an end-to-end recruitment experience connecting
                qualified Kenyan candidates with opportunities abroad.
              </p>
            </div>

            {/* STACKED CARDS */}
            <div className="space-y-[-25px]">
              {whatWeDo.map((item, index) => (
                <div
                  key={item.title}
                  className={[
                    "relative min-h-[280px] overflow-hidden rounded-[2.5rem] p-8 shadow-[0_30px_70px_rgba(46,55,49,0.14)] sm:min-h-[320px] sm:p-10",
                    index === 0
                      ? "z-30 bg-[#173f39] text-white"
                      : index === 1
                        ? "z-20 ml-auto w-[94%] bg-[#e5d7c8] text-[#173f39]"
                        : "z-10 w-[94%] bg-white text-[#173f39]",
                  ].join(" ")}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="text-[9px] font-semibold uppercase tracking-[0.24em] opacity-55">
                        {item.eyebrow}
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20 text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="mt-16">
                      <h4 className="font-display text-4xl leading-none sm:text-5xl">
                        {item.title}
                      </h4>

                      <p
                        className={`mt-5 max-w-lg text-sm leading-6 ${
                          index === 0
                            ? "text-white/60"
                            : "text-[#687671]"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-current/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          WHY CHOOSE US — LARGE OVERLAPPING PANEL
      ============================================================ */}

      <div className="relative bg-[#e1ebe5] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative min-h-[650px]">
            {/* large back panel */}
            <div className="absolute inset-x-0 top-0 h-[540px] rounded-[3rem] bg-[#173f39] shadow-[0_35px_90px_rgba(36,65,57,0.22)] sm:h-[580px]" />

            {/* heading */}
            <div className="relative z-10 px-7 py-10 text-white sm:px-12 sm:py-14">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#a8cec2]">
                Why choose us
              </div>

              <h3 className="mt-5 font-display text-5xl leading-[0.95] sm:text-7xl">
                A better way
                <br />
                to move <span className="italic text-[#a8cec2]">forward.</span>
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">
                Ajira Majuu aims to connect people, opportunities, and
                possibilities across borders - simply, respectfully, and
                professionally.
              </p>
            </div>

            {/* overlapping reasons panel */}
            <div className="absolute bottom-0 right-0 z-20 w-[94%] rounded-[2.5rem] bg-[#f8f6f0] p-7 text-[#173f39] shadow-[0_35px_80px_rgba(37,47,42,0.2)] sm:w-[82%] sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                {points.map((point, index) => (
                  <div
                    key={point.title}
                    className="group flex gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e2c4a7] text-xs text-[#173f39] transition group-hover:scale-110">
                      ✓
                    </div>

                    <div>
                      <div className="text-sm font-semibold">
                        {point.title}
                      </div>

                      <div className="mt-2 text-xs leading-5 text-[#6b7974]">
                        {point.desc}
                      </div>
                    </div>

                    <div className="ml-auto self-start font-display text-2xl text-[#173f39]/10">
                      0{index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          HOW WE DO IT
      ============================================================ */}

      <div className="relative bg-[#f6f2eb] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#80908a]">
              How we do it
            </div>

            <h3 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-[#173f39] sm:text-7xl">
              Five steps.
              <br />
              <span className="italic">One journey.</span>
            </h3>
          </div>

          {/* timeline */}
          <div className="relative mt-20">
            <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-[#173f39]/10 sm:block" />

            <div className="space-y-8 sm:space-y-12">
              {howWeDoIt.map((step, index) => (
                <div
                  key={step.n}
                  className="relative grid gap-6 sm:grid-cols-[70px_1fr]"
                >
                  {/* number */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#173f39]/15 bg-[#f6f2eb] font-display text-sm text-[#173f39]">
                    {step.n}
                  </div>

                  {/* card */}
                  <div
                    className={[
                      "rounded-[2rem] p-7 shadow-[0_20px_50px_rgba(48,56,50,0.09)] sm:p-9",
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-[#e4d6c7]",
                    ].join(" ")}
                  >
                    <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-center">
                      <h4 className="font-display text-3xl leading-none text-[#173f39] sm:text-4xl">
                        {step.title}
                      </h4>

                      <p className="text-sm leading-6 text-[#697873]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-20 overflow-hidden rounded-[3rem] bg-[#173f39] p-8 text-white shadow-[0_35px_80px_rgba(31,62,55,0.25)] sm:p-12">
            <div className="absolute right-[-70px] top-[-70px] h-64 w-64 rounded-full border border-white/10" />

            <div className="relative max-w-xl">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#a8cec2]">
                Start your journey
              </div>

              <h4 className="mt-5 font-display text-4xl leading-[0.95] sm:text-6xl">
                Want to get a
                <br />
                great job abroad
                <br />
                <span className="italic text-[#a8cec2]">with us?</span>
              </h4>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
                Let&apos;s help you understand the process, explore
                opportunities and take the next step with confidence.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5f1e9] px-6 py-3 text-xs font-semibold text-[#173f39] transition hover:-translate-y-0.5"
              >
                Get in touch
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          FINAL EDITORIAL STATEMENT
      ============================================================ */}

      <div className="relative overflow-hidden bg-[#173f39] px-5 py-28 sm:px-8 sm:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#a8cec2]">
            Ajira Majuu
          </div>

          <h3 className="mt-7 font-display text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Your career.
            <br />
            <span className="italic text-[#a8cec2]">
              Your journey.
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45">
            Connecting Kenyan talent with legitimate opportunities abroad
            through recruitment, verification, documentation and ongoing
            placement support.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-xs text-white backdrop-blur-md transition hover:bg-white hover:text-[#173f39]"
          >
            Begin your journey
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}